"use client"
import { useForm } from "@/hooks/useForm";
import styles from "./index.module.css";
import { Loader } from "@/components/Loader";

export const BookingForm = () => {
    const {
        name, email, sendingStatus, handleChange, handleSubmit
    } = useForm()

    return (
        <section className={styles.bookingSection} id='booking'>
            <div className={styles.bookingPaper} >
                {
                    sendingStatus !== "SUCCESS"
                    &&
                    <div className={styles.bookingLeft} >
                        <h2 className={styles.bookingTitle} >
                            Начать проект
                        </h2>
                        <p className={styles.bookingText} >
                            Оставьте заявку. Свяжемся в течение часа и обсудим детали.
                        </p>
                    </div>
                }
                <form className={styles.bookingRight} onSubmit={handleSubmit}>
                    {
                        sendingStatus === "SUCCESS"
                            ?
                            <div className={styles.notify}>
                                <h2 className={styles.formTitle}>Мы приняли Вашу заявку</h2>
                                <p className={styles.formSubtitle} >Свяжемся в ближайшее время</p>
                            </div>
                            :
                            <>
                                <div className={styles.formGroup} >
                                    <label className={styles.formLabel} >
                                        Имя *
                                    </label>
                                    <input value={name} onChange={(e) => handleChange(e.target.value, "name")} className={styles.bookingInput} type='text' placeholder='Александр' required />
                                </div>
                                <div className={styles.formGroup} >
                                    <label className={styles.formLabel} >
                                        Email *
                                    </label>
                                    <input value={email} onChange={(e) => handleChange(e.target.value, "email")} className={styles.bookingInput} type='text' required />
                                </div>
                                <div className={styles.bookingCheckboxGroup} >
                                    <input className={styles.bookingCheckbox} type='checkbox' id='privacyBooking' required >
                                    </input>
                                    <label className={styles.bookingCheckboxLabel} htmlFor='privacyBooking' >
                                        Согласие на обработку данных *
                                    </label>
                                </div>
                                <button className={styles.bookingSubmit} type='submit' disabled={sendingStatus === "LOADING"}>
                                    {
                                        sendingStatus === "LOADING"
                                            ?
                                            <Loader />
                                            :
                                            "Отправить заявку"
                                    }
                                </button>
                            </>
                    }
                </form>
            </div>
        </section>
    );
};
