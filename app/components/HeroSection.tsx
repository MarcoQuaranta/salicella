'use client';

export default function HeroSection() {
  return (
    <section className="hero" style={{
      background: 'linear-gradient(rgba(33, 97, 140, 0.35), rgba(52, 152, 219, 0.45)), url("https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=1600") center/cover',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '40px 20px'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <h1 className="hero-title" style={{
          fontSize: '5em',
          color: 'white',
          marginBottom: '30px',
          textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
          fontWeight: 700,
          letterSpacing: '3px',
          lineHeight: 1.2
        }}>
          Caseificio Salicella
        </h1>
        <p className="hero-subtitle" style={{
          fontSize: '1.8em',
          color: 'white',
          marginBottom: '40px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.4)',
          lineHeight: 1.5
        }}>
          Mozzarelle fresche e prodotti caseari artigianali dal 1952
        </p>
        <div className="hero-buttons">
          <a href="/contatti" style={{
            display: 'inline-block',
            background: 'white',
            color: '#21618c',
            padding: '18px 50px',
            textDecoration: 'none',
            borderRadius: '35px',
            fontWeight: 'bold',
            fontSize: '1.2em',
            transition: 'all 0.3s ease',
            boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
            marginRight: '15px'
          }}>
            Contattaci
          </a>
          <a href="/prodotti" style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            padding: '18px 50px',
            textDecoration: 'none',
            borderRadius: '35px',
            fontWeight: 'bold',
            fontSize: '1.2em',
            transition: 'all 0.3s ease',
            border: '2px solid white'
          }}>
            Vai allo Shop
          </a>
        </div>
      </div>
      <div className="float-circle" style={{
        position: 'absolute',
        top: '20%',
        left: '-50px',
        width: '250px',
        height: '250px',
        background: 'rgba(255,255,255,0.08)',
        borderRadius: '50%'
      }}></div>
      <div className="float-circle" style={{
        position: 'absolute',
        bottom: '10%',
        right: '-80px',
        width: '350px',
        height: '350px',
        background: 'rgba(255,255,255,0.08)',
        borderRadius: '50%',
        animationDelay: '2s'
      }}></div>
      <div className="float-circle" style={{
        position: 'absolute',
        top: '60%',
        left: '10%',
        width: '150px',
        height: '150px',
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '50%',
        animationDelay: '4s'
      }}></div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)'
      }}>
        <div style={{ color: 'white', fontSize: '2.5em', opacity: 0.8 }}>↓</div>
      </div>
    </section>
  );
}
