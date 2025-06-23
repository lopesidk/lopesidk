import { useState, useEffect, useRef } from 'react'
import './App.css'
import audioFile from './assets/Excision-DeathWishfeatSamKing[OfficialVideo].mp3'

function App() {
  const [currentScreen, setCurrentScreen] = useState('entry') // 'entry', 'loading', 'main'
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const audioRef = useRef(null)

  // Detectar se é dispositivo móvel
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleEnterClick = () => {
    setCurrentScreen('loading')
    
    // Simular carregamento
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 15 + 5 // Incremento aleatório entre 5-20
      if (progress >= 100) {
        progress = 100
        clearInterval(interval)
        setTimeout(() => {
          setCurrentScreen('main')
          // Iniciar música após um pequeno delay (apenas se não for mobile para evitar problemas de autoplay)
          if (!isMobile) {
            setTimeout(() => {
              if (audioRef.current) {
                audioRef.current.play().catch(e => {
                  console.log('Erro ao reproduzir áudio:', e)
                })
              }
            }, 500)
          }
        }, 500)
      }
      setLoadingProgress(progress)
    }, 100)
  }

  // Função para tentar reproduzir áudio em dispositivos móveis
  const handleMobileAudioPlay = () => {
    if (isMobile && audioRef.current && currentScreen === 'main') {
      audioRef.current.play().catch(e => {
        console.log('Erro ao reproduzir áudio:', e)
      })
    }
  }

  // Configurar áudio
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.7
      audioRef.current.loop = true
    }
  }, [])

  if (currentScreen === 'entry') {
    return (
      <div className="app-container">
        <button className="enter-button" onClick={handleEnterClick}>
          Clique Aqui
        </button>
      </div>
    )
  }

  if (currentScreen === 'loading') {
    return (
      <div className="loading-screen">
        <div className="loading-text">Carregando...</div>
        <div className="loading-bar">
          <div 
            className="loading-progress" 
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
        <div className="loading-text" style={{ fontSize: '1rem', marginTop: '1rem' }}>
          {Math.round(loadingProgress)}%
        </div>
      </div>
    )
  }

  return (
    <div className="app-container" onClick={handleMobileAudioPlay}>
      <div className="main-text" data-text="LOPESIDK">
        LOPESIDK
      </div>
      {isMobile && (
        <div style={{ 
          position: 'absolute', 
          bottom: '20px', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          color: '#666', 
          fontSize: '0.8rem',
          textAlign: 'center'
        }}>
          Toque na tela para reproduzir áudio
        </div>
      )}
      <audio ref={audioRef} preload="auto">
        <source src={audioFile} type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  )
}

export default App

