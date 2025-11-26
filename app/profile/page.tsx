'use client'
import { useSession } from '@/lib/auth-client'

export default function ProfilePage() {

    const { data: session } = useSession()

    // render return
    return (
        <div className='flex flex-col min-h-[calc(100vh-72px)] items-center justify-center font-sans bg-background'>

            {/* user info */}
            <div className='flex flex-col gap-4 w-full max-w-md bg-card border border-border p-6 rounded-lg shadow-sm'>
                <div className=''>
                    <h2 className='text-xl font-semibold mb-2 tracking-tight'>Perfil</h2>
                    <p className='text-sm text-muted-foreground tracking-tight'>Información del usuario</p>
                </div>


                <hr className='my-4' />
                
                {/* name, email, createdt, updated at email verified */}
                <div className='flex flex-col gap-4'>
                    <p className='text-sm text-muted-foreground tracking-tight'>Nombre: {session?.user?.name}</p>
                    <p className='text-sm text-muted-foreground tracking-tight'>Correo: {session?.user?.email}</p>
                    <p className='text-sm text-muted-foreground tracking-tight'>Creado: {session?.user?.createdAt ? new Date(session.user.createdAt).toLocaleDateString() : 'N/A'}</p>
                    <p className='text-sm text-muted-foreground tracking-tight'>Actualizado: {session?.user?.updatedAt ? new Date(session.user.updatedAt).toLocaleDateString() : 'N/A'}</p>
                    <p className='text-sm text-muted-foreground tracking-tight'>Verificado: {session?.user?.emailVerified ? 'Sí' : 'No'}</p>
                </div>

            </div>
        </div>
    )
}
