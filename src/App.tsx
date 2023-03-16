import React from 'react'
import styles from './styles/styles.module.css'
import { Container } from './components/atom'

function App (): JSX.Element {
  return (
    <Container className={styles.container}>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
    </Container>
  )
}

export default App
