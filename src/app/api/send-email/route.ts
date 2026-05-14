// pages/api/send-email.ts
import { NextResponse, type NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const { name, phone, email, service } = await req.json();

        // Валидация
        if (!name) {
            return NextResponse.json(
                { success: false, message: 'Имя и контакт обязательны' },
                { status: 400 }
            );
        }

        // Настройка транспортера
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.mail.ru",
            port: Number(process.env.SMTP_PORT) || 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Отправка письма
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO || "beautifier@mail.ru",
            subject: "Новая заявка с лендинга",
            text: `
Имя: ${name}
Телефон: ${phone}
Email: ${email || 'не указан'}
Услуга: ${service || 'не указана'}
      `,
            html: `
        <h2>Новая заявка</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || 'не указан'}</p>
        <p><strong>Сообщение:</strong> ${service || 'не указана'}</p>
      `,
        });

        return NextResponse.json({
            success: true,
            message: 'Письмо отправлено'
        });

    } catch (error) {
        console.error('Ошибка отправки:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Ошибка при отправке письма'
            },
            { status: 500 }
        );
    }
}