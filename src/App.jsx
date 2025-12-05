import React from 'react';
import backgroundVideo from './assets/back2.mp4';
import './App.css';

function App() {
  return (
    <div className="app">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="background-video"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>

      <div className="overlay"></div>


      <nav className="top-nav">
        <a href="/">Главная</a>
        <a href="/about">О клане</a>
        <a href="/members">Состав</a>
        <a href="/events">Ивенты</a>
        <a href="/apply">Вступить</a>
      </nav>

      <aside className="left-cta">
        <div className="cta">
          <a href="/apply" className="button">Подать заявку</a>
          <a href="https://t.me/..." className="button" target="_blank" rel="noreferrer">
            Telegram
          </a>
        </div>
      </aside>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Клан poWer</p>
      </footer>
    </div>
  );
}

export default App;