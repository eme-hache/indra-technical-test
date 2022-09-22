import Button from '../Button'
import styles from './modal.module.css'

const Modal = ({ visible, color, setIsModal }) => {
  return (
    <div className={`${styles.modal} ${visible ? styles.visible : styles.hidden}`}>
      <label className={styles.text}>
        Señor usuario el color de la pantalla ha cambiado a {color}
      </label>

      <Button onClick={() => setIsModal(false)}>Cerrar</Button>
    </div>
  )
}

export default Modal