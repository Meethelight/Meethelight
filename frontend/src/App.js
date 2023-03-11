import logo from './logo.svg'
import './App.css'
import Navigation from './components/layout/Navigation'
import Btn from './components/misc/Btn'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from './i18n'

function App () {
  const [locale, setLocale] = useState(i18n.language)
  const { t } = useTranslation()
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link font-bold"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <h1 className='text-3xl font-bold underline'>{t('greeting')}</h1>
        <button>{t('buttonLabel')}</button>
        <Btn></Btn>
      </header>
    </div>
  )
}

export default App
