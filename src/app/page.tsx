import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";

export default function Home() {

    console.log(`|+|+| the test is :`, process.env.NODE_ENV);

  return (
      <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
          <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
              <h3>Test : {process.env.NODE_ENV} : end</h3>
              <ModeToggle />
              <div>
                  <Image
                      className='light:invert'
                      src='./vercel.svg'
                      alt='Vercel logomark'
                      width={200}
                      height={200}
                  />
              </div>
          </main>
          <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
              <h2>Footer Stuff</h2>
          </footer>
      </div>
  );
}
