import Link from 'next/link';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

export default function Navbar() {
    return (
        <div className='w-full mx-auto border border-border'>
            <nav className="w-full max-w-7xl mx-auto flex justify-between items-center p-4 bg-outline">
                {/* logo section */}
                <Link href="/">
                    <h1 className='text-xl font-semibold tracking-tight'>Better-auth practice</h1>
                </Link>

                {/* buttons section on larger screens*/}
                <div className="hidden md:flex gap-2">
                    <Button>
                        <Link href="/auth/login">Iniciar sesión</Link>
                    </Button>
                    <Button variant={'outline'}>
                        <Link href="/auth/register">Registrarse</Link>
                    </Button>
                </div>

                {/* buttons section on smaller screens*/}
                <div className="md:hidden">
                    <Button variant="outline" size="icon">
                        <Menu className="h-4 w-4" />
                    </Button>
                </div>
            </nav>
        </div>
    )
}