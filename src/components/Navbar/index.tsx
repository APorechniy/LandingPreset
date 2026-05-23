'use client';

import React, { useState } from 'react';
import styles from './index.module.css';
import { Logo } from '../Logo';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Logo />
                </div>

                <button
                    className={styles.burger}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Открыть меню"
                >
                    <span className={`${styles.burgerLine} ${isOpen ? styles.lineOpen1 : ''}`}></span>
                    <span className={`${styles.burgerLine} ${isOpen ? styles.lineOpen2 : ''}`}></span>
                    <span className={`${styles.burgerLine} ${isOpen ? styles.lineOpen3 : ''}`}></span>
                </button>

                <nav className={`${styles.nav} ${isOpen ? styles.navActive : ''}`}>
                    <a href="#services" className={styles.link} onClick={() => setIsOpen(false)}>Услуги</a>
                    <a href="#interactive" className={styles.link} onClick={() => setIsOpen(false)}>Интерактив</a>
                    <a href="#contact" className={styles.ctaButton} onClick={() => setIsOpen(false)}>Начать проект</a>
                </nav>
            </div>
        </header>
    );
}