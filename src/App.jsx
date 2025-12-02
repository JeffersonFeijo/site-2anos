import React, { useEffect, useState } from "react";

/*
  Insira o ID do vídeo YouTube em YOUTUBE_EMBED_ID (ex: 'dQw4w9WgXcQ')
  Coloque suas fotos na pasta /public/images e substitua os placeholders no HTML se quiser.
*/

const YOUTUBE_EMBED_ID = "8CcKtFm7VYM"; // coloque o ID do vídeo aqui

export default function App() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    let running = true;
    function spawn() {
      if (!running) return;
      const id = Math.random().toString(36).slice(2, 9);
      const left = Math.random() * 100;
      const size = 24 + Math.random() * 56;
      const duration = 6 + Math.random() * 8;
      const delay = Math.random() * 2;
      const opacity = 0.7 + Math.random() * 0.3;
      setHearts((s) => [...s, { id, left, size, duration, delay, opacity }]);
      setTimeout(() => {
        setHearts((s) => s.filter((h) => h.id !== id));
      }, (duration + delay) * 1000 + 500);
      const next = 5 + Math.random() * 100;
      setTimeout(spawn, next);
    }
    spawn();
    return () => (running = false);
  }, []);

  return (
    <div className="page">
      <div className="hearts-layer" aria-hidden>
        {hearts.map((h) => (
          <div
            key={h.id}
            className="heart"
            style={{
              left: `${h.left}%`,
              width: `${h.size}px`,
              height: `${h.size}px`,
              animationDuration: `${h.duration}s`,
              animationDelay: `${h.delay}s`,
              opacity: h.opacity,
            }}
          >
            <svg viewBox="0 0 24 24" className="heart-svg">
              <path d="M12 21s-7-4.35-9.07-6.59C0.99 11.84 3.07 7 7.5 7c2.04 0 3.52 1.06 4.5 2.36C12.98 8.06 14.46 7 16.5 7 20.93 7 23.01 11.84 21.07 14.41 19 16.65 12 21 12 21z" />
            </svg>
          </div>
        ))}
      </div>

      <main className="card">
        <header className="header">
          <h1>Dois anos juntos 💕</h1>
          <p>Obrigado por estar comigo durante esses 2 anos.</p>
        </header>

        <section className="section">
          <h2>Nossas lembranças</h2>
          <div className="gallery">
            <div className="photo placeholder"><img src="/images/foto1.png" alt="Foto 1" /></div>
            <div className="photo placeholder"><img src="/images/foto2.png" alt="Foto 2" /></div>
            <div className="photo placeholder"><img src="/images/foto3.png" alt="Foto 3" /></div>
            <div className="photo placeholder"><img src="/images/foto4.png" alt="Foto 4" /></div>
            <div className="photo placeholder"><img src="/images/foto5.png" alt="Foto 5" /></div>
            <div className="photo placeholder"><img src="/images/foto6.png" alt="Foto 6" /></div>
          </div>
        </section>

        <section className="section">
          <h2>Nossa Historia</h2>
          <ol className="timeline">
            <li><strong>Nossa data —</strong> 02/12/2023 o dia em que minha vida mudou 🥺❤️❤️❤️🥰</li>
            <li><strong>2 anos de pura felicidade —</strong> quanto mais tempo passo com vc mais tenho certeza que vc e a mulher certa 🥰❤️❤️</li>
            <li><strong>Hoje —</strong> Celebramos 2 anos junto 🎉</li>
            <li><strong>Futuro —</strong> vamos celebrar mais de anos junto, vamos ter muitas historias parar contar 🥰❤️❤️❤️</li>
          </ol>
        </section>

        <section className="section">
          <h2>Surpresa</h2>
          <RevealNote />
        </section>

        <section className="section">
          <h2>Nossa música</h2>
          {YOUTUBE_EMBED_ID ? (
            <div className="video-wrap">
              <iframe
                title="player"
                src={`https://www.youtube.com/embed/${YOUTUBE_EMBED_ID}?rel=0&modestbranding=1&autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="video-placeholder">Cole o ID do vídeo no arquivo <code>src/App.jsx</code> na constante <b>YOUTUBE_EMBED_ID</b>.</div>
          )}
        </section>

        <footer className="footer">Feito com ♥ para você — minha vida.</footer>
      </main>
    </div>
  );
}

function RevealNote() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button className="btn" onClick={() => setOpen((v) => !v)}>
        {open ? "Esconder mensagem" : "Revelar mensagem"}
      </button>
      {open && (
        <div className="note">
          <p>eu amo cada detalhe seu, vc me completa❤️ — obrigado por estar sempre comigo.</p>
          <p className="muted">muito obrigado por sempre estar comigo, em todos os momentos mesmo que eu seja dificil. <br />mas vc não sabe o bem que me faz ter vc em minha vida vc me completa vc faz meu dia ser mais feliz <br /> cada detalhe em vc me faz me lembrar de quanta sorte eu tenho em ter vc em minha vida❤️❤️❤️❤️❤️🥰🥰</p>
        </div>
      )}
    </div>
  );
}
