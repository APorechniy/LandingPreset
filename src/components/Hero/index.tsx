'use client';

import Loader from '../Loader';
import styles from './index.module.css';
import { useForm } from '@/hooks/useForm';

export default function Hero() {
    const {
        name, message, email, sendingStatus, handleChange, handleSubmit, resetForm
    } = useForm()

    return (
        <section className={`${styles.hero} animate-fade-in`}>
            <div className={styles.container}>
                {/* Левая колонка: Описание предложения */}
                <div className={styles.infoColumn}>
                    <div className={styles.badge}>
                        <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                        </svg>
                        Генеративный веб-дизайн нового поколения
                    </div>

                    <h1 className={styles.title}>
                        Эстетика ваших сайтов, <br />
                        <span className={styles.gradientText}>управляемая интеллектом</span>
                    </h1>

                    <p className={styles.description}>
                        Студия Beautifier превращает хаотичные прототипы и устаревшие интерфейсы в визуальные шедевры. Анализируем пользовательский опыт ИИ-алгоритмами и создаем продающий дизайн за считанные часы.
                    </p>

                    <div className={styles.advantages}>
                        <div className={styles.advItem}>✓ Прототип за 24 часа</div>
                        <div className={styles.advItem}>✓ Бесплатный AI-аудит</div>
                    </div>
                </div>

                {/* Правая колонка: Экспресс-форма заявки */}
                <div className={styles.formColumn}>
                    <div className={styles.formCard}>
                        {sendingStatus === 'SUCCESS' ? (
                            <div className={styles.successState}>
                                <svg className={styles.successIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <h3 className={styles.successTitle}>Доступ получен!</h3>
                                <p className={styles.successText}>Наш AI-аналитик уже изучает вашу нишу. Свяжемся с вами в Telegram или на Email в течение 15 минут.</p>
                                <button className={styles.resetBtn} onClick={resetForm}>Отправить еще раз</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <h2 className={styles.formTitle}>Получить концепт бесплатно</h2>
                                <p className={styles.formSubtitle}>Заполните форму, чтобы запустить AI-генерацию структуры вашего будущего сайта.</p>

                                <div className={styles.inputGroup}>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Ваше имя"
                                        className={styles.input}
                                        value={name}
                                        onChange={(e) => handleChange(e.target.value, "name")}
                                        disabled={sendingStatus === 'LOADING'}
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <input
                                        type="email"
                                        required
                                        placeholder="Электронная почта"
                                        className={styles.input}
                                        value={email}
                                        onChange={(e) => handleChange(e.target.value, "name")}
                                        disabled={sendingStatus === 'LOADING'}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className={styles.submitBtn}
                                    disabled={sendingStatus === 'LOADING'}
                                >
                                    {sendingStatus === 'LOADING' ? <Loader /> : 'Запустить AI-анализ'}
                                </button>

                                <span className={styles.formTerms}>Нажимая кнопку, вы соглашаетесь на обработку данных.</span>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}