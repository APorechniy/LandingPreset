import { type ReactNode, type CSSProperties } from "react";
import styles from './index.module.css'

export const LightningText = ({ children, ...props }: { children: ReactNode }) => {
    // Разбиваем текст на отдельные символы
    const text = typeof children === 'string' ? children : '';

    const renderText = () => {
        if (!text) return null;

        const elements: ReactNode[] = [];
        let globalCharIndex = 0;

        // Разбиваем текст на слова и пробелы
        const segments = text.split(/(\s+|\n)/);

        segments.forEach((segment, segmentIndex) => {
            // Обработка переноса строки
            if (segment === '\n') {
                elements.push(<br key={`br-${segmentIndex}`} />);
                return;
            }

            // Обработка пробелов
            if (segment.trim() === '') {
                const spaceLength = segment.length;
                for (let i = 0; i < spaceLength; i++) {
                    elements.push(
                        <span key={`space-${segmentIndex}-${i}`} style={{ display: 'inline-block', width: '0.3em' }}>
                            &nbsp;
                        </span>
                    );
                }
                return;
            }

            // Обработка слова
            const wordElement = (
                <span key={`word-${segmentIndex}`} className={styles.wordWrapper}>
                    {segment.split('').map((char, charIndex) => {
                        const currentIndex = globalCharIndex + charIndex;
                        return (
                            <span
                                className={styles.lightningLetter}
                                key={`char-${segmentIndex}-${charIndex}`}
                                style={{ "--i": currentIndex } as CSSProperties}
                            >
                                {char}
                            </span>
                        );
                    })}
                </span>
            );

            elements.push(wordElement);
            globalCharIndex += segment.length;
        });

        return elements;
    };

    return (
        <p className={styles.lightningParagraph} {...props}>
            {renderText()}
        </p>
    );
};