import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>🎉 Parabéns!</h1>
        <h2 className={styles.subtitle}>Você criou seu primeiro projeto Next.js!</h2>
        <p className={styles.description}>
          Este é o seu <strong>Hello World</strong> com Next.js 15
        </p>
        <div className={styles.info}>
          <p>🚀 <strong>Framework:</strong> Next.js</p>
          <p>⚛️ <strong>Tecnologia:</strong> React</p>
          <p>📁 <strong>Projeto:</strong> meu-primeiro-nextjs</p>
          <p>🌟 <strong>Status:</strong> Funcionando perfeitamente!</p>
        </div>
        <div className={styles.footer}>
          <p>Agora você pode começar a desenvolver aplicações incríveis!</p>
        </div>
      </div>
    </div>
  )
}