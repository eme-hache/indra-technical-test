import styles from './header.module.css'

const Header = ({ color }) => {
  return (
    <header className={styles.header}>
      <h1 className={`${styles.title} ${styles[color]}`}>Prueba Básica</h1>
    </header>
  )
}

export default Header