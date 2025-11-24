'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { authClient, signUp } from '@/lib/auth-client'
import Link from 'next/link'


export default function RegisterPage() {
    // default states
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    // instance of router
    const router = useRouter()

    // function to handle the form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        if (password !== confirmPassword) {
            setError('The passwords doest no match')
            setLoading(false)
            return
        }
        try {

            const result = await authClient.signUp.email({
                email,
                password,
                name,
                callbackURL: '/dashboard'
            })

            if (result.error?.message) {
                setError(result.error.message)
                setLoading(false)
                return
            }

            console.log(result)
            router.push('/auth/login')
        } catch (error) {
            console.log(error)
            setError('Algo salio mal')
        } finally {
            setLoading(false)
        }
    }

    // render return
    return (
        <div className="flex flex-col min-h-screen items-center justify-center font-sans dark:bg-black">
            <h2 className='text-2xl font-semibold mb-6'>Registrate con better-auth</h2>

            <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full max-w-md bg-zinc-50 p-6 rounded-lg shadow-md'>

                <Label htmlFor="name">Nombre</Label>
                <Input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />

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

                {/* confirm password input */}
                <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                <Input
                    type="password"
                    placeholder="Confirmar Contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className='mb-6'/>

                {/* button */}
                <Button type="submit">{loading ? 'Registrando...' : 'Registrarse'}</Button>
                <Link href='/auth/login' className='text-zinc-600 text-center text-sm mt-2'>¿Ya tienes una cuenta?, inicia sesión</Link>
            </form>
        </div>
    )
}