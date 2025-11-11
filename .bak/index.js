export default function Home(){
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Space+Grotesk:wght@400;600;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="/css/ignite.css" />
      <canvas id="fg-stars"></canvas>

      <main className="hero" data-brand="fundinggauge">
        <h1 className="logo">FUNDINGGAUG<span className="mark">≡</span><sup className="tm">™</sup></h1>
        <p className="sub">AI-Powered Fundability Intelligence Engine</p>
        <div className="start-wrap">
          <button id="fg-start" className="start"><span>START</span></button>
          <p className="note">Tap to begin your AI-powered fundability assessment</p>
        </div>
      </main>

      <audio id="fg-audio" preload="auto">
        <source src="/assets/audio/engine.mp3" type="audio/mpeg" />
      </audio>

      <div id="fg-flash" className="flash" />
      <script src="/js/stars.js" defer></script>
      <script src="/js/ignite.js" defer></script>
    </>
  );
}
