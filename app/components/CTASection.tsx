'use client';

import { useState, useEffect } from 'react';

export default function CTASection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <section style={{
        padding: 0,
        background: 'linear-gradient(135deg, #21618c 0%, #3498db 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Foto semi-trasparente a destra - fuori dal padding */}
        <img
          src="https://cdn.shopify.com/s/files/1/0994/9904/9292/files/mozz-trasp.png?v=1762421851"
          alt="Mozzarella"
          style={{
            position: 'absolute',
            right: '0',
            top: '0',
            height: '75%',
            width: 'auto',
            opacity: 0.3,
            filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))',
            pointerEvents: 'none'
          }}
        />

        {/* Testo a sinistra con padding */}
        <div style={{
          padding: '40px 20px',
          position: 'relative',
          zIndex: 2,
          maxWidth: '65%'
        }}>
          <h2 style={{
            fontSize: '1.8em',
            marginBottom: '15px',
            color: 'white',
            lineHeight: 1.2,
            textAlign: 'left'
          }}>Ordina e ricevi fresco a casa</h2>
          <p style={{
            fontSize: '1em',
            marginBottom: '25px',
            opacity: 0.95,
            color: 'white',
            lineHeight: 1.6,
            textAlign: 'left'
          }}>
            Spedizione rapida in tutta Italia. La qualità artigianale direttamente dal produttore.
          </p>
          <div style={{ textAlign: 'left' }}>
            <a href="/prodotti" style={{
              display: 'inline-block',
              background: 'white',
              color: '#21618c',
              padding: '12px 30px',
              textDecoration: 'none',
              borderRadius: '35px',
              fontWeight: 'bold',
              fontSize: '1em',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
            }}>
              Vai allo Shop
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{
      padding: 0,
      background: 'linear-gradient(135deg, #21618c 0%, #3498db 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Foto PNG a destra senza margini */}
      <img
        src="https://cdn.shopify.com/s/files/1/0994/9904/9292/files/mozz-trasp.png?v=1762421851"
        alt="Mozzarella"
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          height: '400px',
          width: 'auto',
          display: 'block',
          filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))',
          zIndex: 1
        }}
      />

      <div className="cta_home" style={{
        minHeight: '400px',
        position: 'relative',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '80px 40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        zIndex: 2
      }}>
        <h2 style={{
          fontSize: '2.8em',
          marginBottom: '20px',
          color: 'white',
          lineHeight: 1.2
        }}>Ordina e ricevi fresco a casa</h2>
        <p style={{
          fontSize: '1.3em',
          marginBottom: '35px',
          opacity: 0.95,
          color: 'white',
          lineHeight: 1.6,
          maxWidth: '800px'
        }}>
          Spedizione rapida in tutta Italia. La qualità artigianale direttamente dal produttore.
        </p>
        <div>
          <a href="/prodotti" style={{
            display: 'inline-block',
            background: 'white',
            color: '#21618c',
            padding: '18px 45px',
            textDecoration: 'none',
            borderRadius: '35px',
            fontWeight: 'bold',
            fontSize: '1.15em',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
          }}>
            Vai allo Shop
          </a>
        </div>
      </div>
    </section>
  );
}
