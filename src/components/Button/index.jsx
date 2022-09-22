import styles from './button.module.css'

const Button = ({ children, color, onClick }) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles[color]}`}>
      {children}
    </button>
  )
}

export default Button