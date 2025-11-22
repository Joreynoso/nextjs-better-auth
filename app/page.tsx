import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h2 className='max-w-4xl text-center text-7xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50'>
        Primer proyecto con <span className="text-blue-500">Better-Auth</span></h2>
    </div>
  );
}
