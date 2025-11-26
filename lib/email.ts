import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
})

// función para enviar el email de recuperación de contraseña
export async function sendPasswordResetEmail(email: string, resetLink: string) {
    const mailOptions = {
        from: process.env.SMTP_USER,
        to: email,
        subject: "Recuperación de contraseña",
        text: `Por favor, haz clic en el enlace siguiente para recuperar tu contraseña: ${resetLink}`
    }

    try {
        await transporter.sendMail(mailOptions)
    } catch (error) {
        console.log(error)
    }
}