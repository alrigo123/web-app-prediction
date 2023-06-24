
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Dashboard from 'rigo/components/Dashboard'

export default function Home() {
  return (
    <div>
      <Head>
        <title className=''>Predicción Rendimiento de Cultivo Trigo</title>
        <link rel="stylesheet" href="/styles/globals.css" />
      </Head>
      <Dashboard />
    </div>

  )
}
