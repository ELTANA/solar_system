import { ReactNode } from 'react'

// STYLES
import styles from './Planet.module.scss'

interface IPlanetProps {
  planetId: string
  planetClass: string
  children: ReactNode
}

const Planet = ({ children, planetClass, planetId }: IPlanetProps) => {
  return (
    <section className={`${styles.section} ${planetClass}`} id={planetId}>
      {children}
    </section>
  )
}

export default Planet
