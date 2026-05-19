import styles from "./index.module.css";

export const Steps = () => {
    return (
        <section className={styles.stepsSection} id='steps' >
            <div className={styles.stepsGeometry1} >
            </div>
            <div className={styles.stepsGeometry2} >
            </div>
            <div className={styles.stepsGeometry3} >
            </div>
            <div className={styles.stepsGeometry4} >
            </div>
            <div className={styles.stepsContainer} >
                <h2 className={styles.stepsTitle} >
                    Как мы работаем
                </h2>
                <p className={styles.stepsSubtitle} >
                    Прозрачный процесс без скрытых этапов
                </p>
                <div className={styles.stepsGrid} >
                    <div className={styles.stepCard} style={{ animation: 'fadeInUp 0.5s ease forwards' }} >
                        <div className={styles.stepCardDecor} >
                        </div>
                        <div className={styles.stepNumberWrapper} >
                            <span className={styles.stepNumber} >
                                01
                            </span>
                        </div>
                        <h3 className={styles.stepTitle} >
                            Брифинг
                        </h3>
                        <p className={styles.stepDesc} >
                            Знакомимся с вашим бизнесом, анализируем конкурентов, цели и аудиторию. Фиксируем все требования в бриф.
                        </p>
                        <div className={styles.stepLine} >
                        </div>
                    </div>
                    <div className={styles.stepCard} style={{ animation: 'fadeInUp 0.5s ease 0.1s forwards' }} >
                        <div className={styles.stepCardDecor} >
                        </div>
                        <div className={styles.stepNumberWrapper} >
                            <span className={styles.stepNumber} >
                                02
                            </span>
                        </div>
                        <h3 className={styles.stepTitle} >
                            ТЗ и макеты
                        </h3>
                        <p className={styles.stepDesc} >
                            Готовим детальное техническое задание. Разрабатываем 3 варианта дизайн-макетов на выбор.
                        </p>
                        <div className={styles.stepLine} >
                        </div>
                    </div>
                    <div className={styles.stepCard} style={{ animation: 'fadeInUp 0.5s ease 0.2s forwards' }} >
                        <div className={styles.stepCardDecor} >
                        </div>
                        <div className={styles.stepNumberWrapper} >
                            <span className={styles.stepNumber} >
                                03
                            </span>
                        </div>
                        <h3 className={styles.stepTitle} >
                            Разработка
                        </h3>
                        <p className={styles.stepDesc} >
                            Верстка, программирование, интеграция с CMS. Настройка SEO-метатегов и технической оптимизации.
                        </p>
                        <div className={styles.stepLine} >
                        </div>
                    </div>
                    <div className={styles.stepCard} style={{ animation: 'fadeInUp 0.5s ease 0.3s forwards' }} >
                        <div className={styles.stepCardDecor} >
                        </div>
                        <div className={styles.stepNumberWrapper} >
                            <span className={styles.stepNumber} >
                                04
                            </span>
                        </div>
                        <h3 className={styles.stepTitle} >
                            Продвижение
                        </h3>
                        <p className={styles.stepDesc} >
                            Запуск рекламных кампаний, SEO-продвижение, настройка аналитики для отслеживания результатов.
                        </p>
                        <div className={styles.stepLine} >
                        </div>
                    </div>
                    <div className={styles.stepCard} style={{ animation: 'fadeInUp 0.5s ease 0.4s forwards' }} >
                        <div className={styles.stepCardDecor} >
                        </div>
                        <div className={styles.stepNumberWrapper} >
                            <span className={styles.stepNumber} >
                                05
                            </span>
                        </div>
                        <h3 className={styles.stepTitle} >
                            Поддержка
                        </h3>
                        <p className={styles.stepDesc} >
                            Круглосуточная техническая поддержка, регулярные обновления, мониторинг и улучшение показателей.
                        </p>
                        <div className={styles.stepLine} >
                        </div>
                    </div>
                    <div className={styles.stepCard} style={{ animation: 'fadeInUp 0.5s ease 0.5s forwards' }} >
                        <div className={styles.stepCardDecor} >
                        </div>
                        <div className={styles.stepNumberWrapper} >
                            <span className={styles.stepNumber} >
                                06
                            </span>
                        </div>
                        <h3 className={styles.stepTitle} >
                            Масштабирование
                        </h3>
                        <p className={styles.stepDesc} >
                            Анализ результатов, поиск новых каналов роста, увеличение конверсии и масштабирование успеха.
                        </p>
                        <div className={styles.stepLine} >
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
