'use client'

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    // function to handle the form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('handle submitting..', email)

        if (!email) {
            toast.error('Por favor ingresa un correo electronico')
            return
        }

        setLoading(true)

        const result = await authClient.requestPasswordReset({
            email,
            redirectTo: `${window.location.origin}/auth/reset-password`
        })

        if (result.error?.message) {
            toast.error(result.error.message)
            return
        }

        setLoading(false)
        toast.success('Se envio un correo electronico con un link para restablecer tu contraseña')
    }

    // render return
    return (
        <div className='w-full flex items-center justify-center mt-20 bg-background'>
            <div className='w-full max-w-md bg-card border border-border p-6 rounded-lg shadow-sm'>
                {/* titlesF */}
                <h2 className='text-2xl font-semibold mb-4'>Olvide mi contraseña</h2>

                <p className='text-sm text-muted-foreground mb-6 leading-relaxed'>
                    Ingresa tu correo electronico y te enviaremos un link para restablecer tu contraseña.
                </p>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

                    {/* email input */}
                    <Input
                        type="email"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                    {/* call to action button */}
                    <Button type='submit' className='w-full p-2' disabled={loading}>{ loading ? 'Enviando...' : 'Enviar link'}</Button>
                </form>
            </div>
        </div>
    )
}