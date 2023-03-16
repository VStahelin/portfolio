import React from 'react'
import classNames from 'classnames'

import styles from './styles.module.css'

const Container: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ className, children }) => (
  <div className={classNames(styles.container, className)}>{children}</div>
)

export default Container
