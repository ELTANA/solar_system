// DEFAULTS
import { Helmet } from 'react-helmet-async'

// COMPONENTS
import Planet from './components/Planet'
import Stars from './components/Stars'

// STYLES
import styles from './App.module.scss'

const App = (): JSX.Element => {
  return (
    <main className={styles.App}>
      <Helmet>
        <title>The Solar System App</title>
      </Helmet>

      <Stars />

      <Planet planetClass={`mecury`} planetId={`mecury`}>
        <h1>Hello Mecury</h1>
      </Planet>
      <Planet planetClass={`venus`} planetId={`venus`}>
        <h1>Hello Venus</h1>
      </Planet>
      <Planet planetClass={`earth`} planetId={`earth`}>
        <h1>Hello Earth</h1>
      </Planet>
    </main>
  )
}

export default App
