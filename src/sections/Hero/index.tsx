"use client"
import { useForm } from "@/hooks/useForm";
import styles from "./index.module.css";
import { Loader } from "@/components/Loader";

export const Hero = () => {
    const {
        name, phone, email, service, sendingStatus, handleChange, handleSubmit
    } = useForm()

    return (
        <section className={styles.heroSection} id='hero'>
            <div className={styles.heroGeometry1} >
            </div>
            <div className={styles.heroGeometry2} >
            </div>
            <div className={styles.heroGeometry3} >
            </div>
            <div className={styles.heroGeometry4} >
            </div>
            <div className={styles.heroContainer} >
                <div className={styles.heroLeft} >
                    <h1 className={styles.heroTitle} >
                        <span className={styles.heroTitleLine} >
                            Digital-студия
                        </span>
                        <span className={styles.heroTitleLine} >
                            которая решает
                        </span>
                        <span className={styles.heroTitleAccent} >
                            бизнес-задачи
                        </span>
                    </h1>
                    <p className={styles.heroSubtitle} >
                        Разрабатываем сайты, настраиваем SEO и маркетинг так, чтобы вы получали измеримый результат. Без лишней теории — только работающие решения.
                    </p>
                    <div className={styles.heroBenefits} >
                        <div className={styles.benefitItem} >
                            Сайты под ключ
                        </div>
                        <div className={styles.benefitItem} >
                            SEO-продвижение
                        </div>
                        <div className={styles.benefitItem} >
                            Контекстная реклама
                        </div>
                        <div className={styles.benefitItem} >
                            Техподдержка 24/7
                        </div>
                        <div className={styles.benefitItem} >
                            Аналитика и отчеты
                        </div>
                    </div>
                </div>
                <div className={styles.heroRight} >
                    <div className={styles.heroFormCard} >
                        {
                            sendingStatus !== "SUCCESS"
                            &&
                            <>
                                <div className={styles.formTitle} >
                                    Обсудить проект
                                </div>
                                <div className={styles.formSubtitle} >
                                    Заполните форму — мы свяжемся с вами в течение часа и подготовим индивидуальное предложение
                                </div>
                            </>
                        }
                        <form className={styles.heroForm} onSubmit={handleSubmit}>
                            {
                                sendingStatus === "SUCCESS"
                                    ?
                                    <div className={styles.notify}>
                                        <h2 className={styles.formTitle}>Мы приняли Вашу заявку</h2>
                                        <p className={styles.formSubtitle} >Свяжемся в ближайшее время</p>
                                    </div>
                                    :
                                    <>
                                        <div className={styles.formRow} >
                                            <input value={name} onChange={(e) => handleChange(e.target.value, "name")} className={styles.formInput} type='text' placeholder='Имя' required />
                                            <input value={phone} onChange={(e) => handleChange(e.target.value, "phone")} className={styles.formInput} type='tel' placeholder='Телефон' required />
                                        </div>
                                        <input value={email} onChange={(e) => handleChange(e.target.value, "email")} className={styles.formInput} type='email' placeholder='Email' required />
                                        <select value={service} onChange={(e) => handleChange(e.target.value, "service")} className={styles.formSelect} required >
                                            <option value={"Development"}>
                                                Разработка сайта
                                            </option>
                                            <option value={"SEO"}>
                                                SEO-продвижение
                                            </option>
                                            <option value={"Context"}>
                                                Контекстная реклама
                                            </option>
                                            <option value={"Redesign"}>
                                                Редизайн сайта
                                            </option>
                                            <option value={"Complex"}>
                                                Комплексное сопровождение
                                            </option>
                                        </select>
                                        <div className={styles.formCheckboxGroup} >
                                            <input className={styles.formCheckbox} type='checkbox' id='privacyHero' required >
                                            </input>
                                            <label className={styles.formCheckboxLabel} htmlFor='privacyHero' >
                                                Согласен на обработку персональных данных
                                            </label>
                                        </div>
                                        <button className={styles.formButton} type='submit' disabled={sendingStatus === "LOADING"}>
                                            {
                                                sendingStatus === "LOADING"
                                                    ?
                                                    <Loader />
                                                    :
                                                    "Отправить заявку"
                                            }
                                        </button>
                                        <div className={styles.formNote} >
                                            Никакого спама. Только полезная информация по вашему проекту
                                        </div>
                                    </>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
