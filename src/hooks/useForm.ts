"use client"
import { useState, type SubmitEvent } from "react"

export type SendingStatus = "IDLE" | "LOADING" | "SUCCESS" | "ERROR"

export const useForm = () => {
    const [sendingStatus, setSendingStatus] = useState<SendingStatus>("IDLE")
    const [name, setName] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [service, setService] = useState<string>("landing")

    const handleChange = (value: string, type: "name" | "phone" | "email" | "service") => {
        if (type === "name") {
            setName(value)
        }

        if (type === "phone") {
            setPhone(value)
        }

        if (type === "email") {
            setEmail(value)
        }

        if (type === "service") {
            setService(value)
        }
    }

    const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault();

        const formData = {
            name,
            phone,
            email,
            service
        }

        try {
            setSendingStatus("LOADING")
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setSendingStatus('SUCCESS');
                setName("")
                setEmail("")
                setPhone("")
                setService("")
            } else {
                setSendingStatus('ERROR');
            }
        } catch (error) {
            setSendingStatus('ERROR');
        }
    }

    return {
        name,
        phone,
        email,
        service,
        sendingStatus,
        handleChange,
        handleSubmit
    }
}