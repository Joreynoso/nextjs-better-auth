'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { authClient, signUp } from '@/lib/auth-client'

export default function RegisterPage() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden')
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

            if (result.error) {
                setError('Error al registrar')
                console.log(error)
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

    // renderizar el formulario de registro
    return (
        <div className="flex flex-col min-h-screen items-center justify-center font-sans dark:bg-black">
            <h2 className='text-2xl font-bold mb-6'>Registrate con <span className='text-blue-500'>better-auth</span></h2>

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
                    onChange={(e) => setConfirmPassword(e.target.value)} />

                {/* button */}
                <Button type="submit">{loading ? 'Registrando...' : 'Registrarse'}</Button>

                {/* error section, must be an array*/}
                {error && <p className='text-red-500'>{error}</p>}
            </form>
        </div>
    )
}