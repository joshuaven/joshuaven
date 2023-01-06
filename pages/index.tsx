import Head from 'next/head'
import { Raleway } from '@next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ven&apos;s Github Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-center'>

        <h1 className={`${raleway.className} text-3xl font-bold my-10`}>
          Content Here
        </h1>

      </main>
    </>
  )
}
