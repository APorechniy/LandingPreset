'use client';

import Loader from '../Loader';
import styles from './index.module.css';
import { useForm } from '@/hooks/useForm';

export default function ContactForm() {
    const {
        name, message, email, sendingStatus, handleChange, handleSubmit, resetForm
    } = useForm()

    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.formWrapper}>
                    <div className={styles.infoBlock}>
                        <h2 className={styles.title}>Давайте создадим нечто великое</h2>
                        <p className={styles.subtitle}>
                            Заполните форму, и наша команда проведет глубокий экспресс-аудит вашего текущего продукта или подготовит детальную структуру будущего проекта с оценкой сроков.
                        </p>
                    </div>

                    <div className={styles.formBlock}>
                        {sendingStatus === 'SUCCESS' ? (
                            <div className={styles.successMessage}>
                                <svg className={styles.successIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <h3 className={styles.successTitle}>Заявка успешно принята!</h3>
                                <p className={styles.successText}>Свяжемся с вами в течение нескольких часов для детального обсуждения.</p>
                                <button className={styles.resetBtn} onClick={resetForm}>Отправить еще раз</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="name" className={styles.label}>Ваше имя</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Ваше имя"
                                        className={styles.input}
                                        value={name}
                                        onChange={(e) => handleChange(e.target.value, "name")}
                                        disabled={sendingStatus === 'LOADING'}
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label htmlFor="email" className={styles.label}>Электронная почта</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="design@studio.ru"
                                        className={styles.input}
                                        value={email}
                                        onChange={(e) => handleChange(e.target.value, "email")}
                                        disabled={sendingStatus === 'LOADING'}
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label htmlFor="message" className={styles.label}>Опишите задачу или пришлите ссылку на сайт</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        placeholder="Нужен редизайн лендинга для SaaS-платформы..."
                                        className={styles.textarea}
                                        value={message}
                                        onChange={(e) => handleChange(e.target.value, "message")}
                                        disabled={sendingStatus === 'LOADING'}
                                    />
                                </div>

                                {sendingStatus === 'ERROR' && <p className={styles.errorMessage}>Что-то пошло не так. Пожалуйста, попробуйте позже.</p>}

                                <button
                                    type="submit"
                                    className={styles.submitBtn}
                                    disabled={sendingStatus === 'LOADING'}
                                >
                                    {sendingStatus === 'LOADING' ? <Loader /> : 'Отправить запрос'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}