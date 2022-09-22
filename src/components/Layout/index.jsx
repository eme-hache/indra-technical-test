import { useState } from 'react'

import Button from '../Button'
import Header from '../Header'
import Modal from '../Modal'
import styles from './layout.module.css'

const Layout = () => {
  const [isModal, setIsModal] = useState(false)
  const [color, setColor] = useState('')

  const handleClick = localColor => {
    setColor(localColor)
    setIsModal(true)
  }

  return (
    <section className={styles.site}>
      <Header color={color} />

      <main className={styles.buttons}>
        <Button color='rojo' onClick={() => handleClick('rojo')}>Rojo</Button>
        <Button color='azul' onClick={() => handleClick('azul')}>Azul</Button>
      </main>

      <Modal color={color} visible={isModal} setIsModal={setIsModal} />
    </section>
  )
}

export default Layout