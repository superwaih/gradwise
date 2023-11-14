import Head from 'next/head'
import Image from 'next/image'
import Heading from '../components/Heading'
import CreateAccount from '../components/landing-page/CreateAccount'
import LoginForm from '../components/landing-page/Login'

export default function Login() {
  return (
    <>
      <Head>
        <title>Gradewise Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        <Heading />
       <LoginForm />

      </main>

      
    </>
  )
}
