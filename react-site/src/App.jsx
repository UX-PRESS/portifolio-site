import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body>
  <nav class="navbar">
    <img src="assets/img/logo_.png" alt="UXPRESS Logo" class="logo" />
  </nav>

  <header class="hero">
    <h1>UXPRESS PORTFOLIO - CAPTURE YOUR ESSENCE</h1>
    <p>A collection of websites and projects we've built using modern web technologies.</p>
  </header>

  <section class="carousel-container">
    <button class="nav-btn left" onclick="scrollLeft()">‹</button>
    <div class="carousel" id="carousel">
      <img src="/vectron.png" alt="vectron" class="thumb" />
      <img src="/Profilex.png" alt="profilex" class="thumb" />
      <img src="/mercadex.png" alt="mercadex" class="thumb" />
      <img src="/Mentora.png" alt="mentora" class="thumb" />
      <img src="/Flashpoint.png" alt="flashpoint" class="thumb" />
      <img src="/Heartwave.png" alt="heartwave" class="thumb" />
      <img src="/Inkspare.png" alt="inkspare" class="thumb" />
    </div>
    <button class="nav-btn right" onclick="scrollRight()">›</button>
  </section>

  <footer>
    <p>Made by UXPRESS — © 2025</p>
  </footer>
</body>

    </>
  )
}

export default App
