import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { LoginForm } from '../components/LoginForm'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Storybook Sample</title>
        <meta name="description" content="Storybook Sample" />
      </Head>
      <main className={styles.main}>
        <span className={styles.title}>My App</span>
        <LoginForm />
      </main>
    </div>
  )
}
