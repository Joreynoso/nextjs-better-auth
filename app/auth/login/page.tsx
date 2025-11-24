'use client'

import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/router';

export default function LoginPage() {
    // default states
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    // function to handle the form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('handleSubmit')
    }

    return (
        <div className="flex flex-col min-h-screen items-center justify-center font-sans dark:bg-black">
            <h2 className='text-2xl font-semibold mb-6'>Inicia sesión con better-auth</h2>

            <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full max-w-md bg-zinc-50 p-6 rounded-lg shadow-md'>

                {/* email input */}
                <Label htmlFor="email">Correo</Label>
                <Input
                    type="email"
                    placeholder="Correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                {/* password input */}
                <Label htmlFor="password">Contraseña</Label>
                <Input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                {/* button */}
                <Button type="submit">{loading ? 'Registrando...' : 'Iniciar sesión'}</Button>
                <Link href='/auth/register' className='text-zinc-600 text-center text-sm mt-2'>¿No tienes una cuenta aún?, registrate</Link>
            </form>
        </div>
    )
}