"use client"
import Image from "next/image"
import LogoImage from "@/assets/logo.png"
import styles from './index.module.css'

export const Logo = () => (
    <div className={styles.logoContainer} onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>
        <Image src={LogoImage} alt="logo" width="32" height="32" />
        <span className={styles.logoText}>Beautifier</span>
    </div>
)