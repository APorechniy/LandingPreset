import styles from "./index.module.css";

export const Services = () => {
    return (
        <section className={styles.servicesSection} id='services' >
            <div className={styles.servicesContainer} >
                <div className={styles.sectionHeader} >
                    <p className={styles.sectionEyebrow} >
                        Услуги и цены
                    </p>
                    <h2 className={styles.sectionTitle} >
                        Что я предлагаю
                    </h2>
                </div>
                <div className={styles.servicesGrid} >
                    <div className={styles.serviceCard} >
                        <span className={styles.serviceIcon} >
                            ⚡
                        </span>
                        <div className={styles.serviceInfo} >
                            <h3 className={styles.serviceName} >
                                Экспресс-съёмка
                            </h3>
                            <p className={styles.serviceDesc} >
                                Быстрая съёмка для соцсетей, портфолио или срочных задач. 30 минут, одна локация, готовые фото через 24 часа.
                            </p>
                            <div className={styles.serviceMeta} >
                                <span className={styles.serviceDuration} >
                                    ⏱ 30 мин
                                </span>
                                <span className={styles.servicePrice} >
                                    от 3 000 ₽
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.serviceCard} >
                        <span className={styles.serviceIcon} >
                            👨‍👩‍👧‍👦
                        </span>
                        <div className={styles.serviceInfo} >
                            <h3 className={styles.serviceName} >
                                Семейная съёмка
                            </h3>
                            <p className={styles.serviceDesc} >
                                Тёплые кадры с самыми близкими. В студии или на природе. Помогаю раскрепоститься перед камерой и взрослым, и детям.
                            </p>
                            <div className={styles.serviceMeta} >
                                <span className={styles.serviceDuration} >
                                    ⏱ 1-2 часа
                                </span>
                                <span className={styles.servicePrice} >
                                    от 5 000 ₽
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.serviceCard} >
                        <span className={styles.serviceIcon} >
                            🌸
                        </span>
                        <div className={styles.serviceInfo} >
                            <h3 className={styles.serviceName} >
                                Индивидуальная съёмка
                            </h3>
                            <p className={styles.serviceDesc} >
                                Ваш личный фотопроект. Образ, локация, настроение — разрабатываем вместе. Идеально для портфолио, блога или подарка себе.
                            </p>
                            <div className={styles.serviceMeta} >
                                <span className={styles.serviceDuration} >
                                    ⏱ 1-3 часа
                                </span>
                                <span className={styles.servicePrice} >
                                    от 4 000 ₽
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.serviceCard} >
                        <span className={styles.serviceIcon} >
                            💕
                        </span>
                        <div className={styles.serviceInfo} >
                            <h3 className={styles.serviceName} >
                                Love Story
                            </h3>
                            <p className={styles.serviceDesc} >
                                История вашей любви в кадрах. Свидание, прогулка или романтический вечер — снимаю так, что вы забудете о камере.
                            </p>
                            <div className={styles.serviceMeta} >
                                <span className={styles.serviceDuration} >
                                    ⏱ 2-3 часа
                                </span>
                                <span className={styles.servicePrice} >
                                    от 6 000 ₽
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
