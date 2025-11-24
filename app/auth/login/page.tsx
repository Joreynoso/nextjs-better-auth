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
        <div className="flex flex-col min-h-[calc(100vh-72px)] items-center justify-center font-sans bg-background">
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full max-w-md bg-card border border-border p-6 rounded-lg shadow-sm'>
                <div className='mb-6'>
                    <h2 className='text-xl font-semibold mb-2 tracking-tight'>Inicia sesión con better-auth</h2>
                    <p className='text-sm text-muted-foreground tracking-tight'>Ingresa tus datos para iniciar sesión</p>
                </div>

                {/* email input */}
                <Label htmlFor="email" className='font-semibold'>Correo</Label>
                <Input
                    type="email"
                    placeholder="Correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    autoComplete='email'/>

                {/* password input */}
                <Label htmlFor="password" className='font-semibold'>Contraseña</Label>
                <Input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete='current-password' />

                {/* button */}
                <Button type="submit">{loading ? 'Registrando...' : 'Iniciar sesión'}</Button>
                <Link href='/auth/register' className='text-muted-foreground text-center text-sm mt-2 hover:text-primary transition-colors tracking-tight'>¿No tienes una cuenta aún?, registrate</Link>
            </form>
        </div>
    )
}