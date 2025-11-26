'use client'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ResetPasswordPage() {
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    // funcion para restablecer la contrseña
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('handle submitting..', password, passwordConfirmation)

        if (!password || !passwordConfirmation) {
            toast.error('Por favor ingresa una contraseña')
            return
        }

        if (password !== passwordConfirmation) {
            toast.error('Las contraseñas no coinciden')
            return
        }
    }

    // render return
    return (
        <div className='w-full flex items-center justify-center mt-20 bg-background'>
            <div className='w-full max-w-md bg-card border border-border p-6 rounded-lg shadow-sm'>
                {/* titlesF */}
                <h2 className='text-2xl font-semibold mb-4'>Cambiar contraseña</h2>

                <p className='text-sm text-muted-foreground mb-6 leading-relaxed'>
                    Cambia tu contraseña, elige un nueva contraseña y confirma.
                </p>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>


                    {/* password input */}
                    <Label className='font-semibold'>Nueva contraseña</Label>
                    <Input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete='new-password'
                    />

                    {/* confirm password input */}
                    <Label className='font-semibold'>Confirmar Contraseña</Label>
                    <Input
                        type="password"
                        placeholder="Confirmar Contraseña"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        className='mb-6'    
                        autoComplete='new-password'
                    />

                    {/* call to action button */}
                    <Button type='submit' className='w-full p-2' disabled={loading}>{loading ? 'Actualizando...' : 'Cambiar contraseña'}</Button>
                </form>
            </div>
        </div>
    )
}