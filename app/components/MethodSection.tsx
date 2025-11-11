'use client';

import { useEffect, useState } from 'react';

export default function MethodSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isRiconoscimentiOpen, setIsRiconoscimentiOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1200);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, [isMobile]);

  if (isMobile) {
    return (
      <>
      <section id="prodotti" className="prodotti" style={{
        padding: '100px 20px',
        background: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Immagini di sfondo laterali mobile */}
        <div style={{ position: 'absolute', left: '-50px', top: '20%', width: '180px', height: '220px', background: 'url("https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400") center/cover', opacity: 0.08, borderRadius: '15px', transform: 'rotate(-8deg)', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', right: '-50px', top: '45%', width: '180px', height: '220px', background: 'url("https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400") center/cover', opacity: 0.08, borderRadius: '15px', transform: 'rotate(8deg)', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', left: '-50px', bottom: '15%', width: '180px', height: '220px', background: 'url("https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400") center/cover', opacity: 0.08, borderRadius: '15px', transform: 'rotate(-8deg)', zIndex: 0 }}></div>

        <div style={{ maxWidth: '1300px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontSize: '2.8em',
            color: '#21618c',
            textAlign: 'center',
            marginBottom: '20px'
          }}>
            Il Nostro Metodo
          </h2>
          <p style={{
            textAlign: 'center',
            color: '#555',
            fontSize: '1.2em',
            marginBottom: '80px',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            La qualità dei nostri prodotti nasce dalla cura in ogni fase della lavorazione
          </p>

          {/* Timeline verticale mobile */}
          <div style={{ position: 'relative', paddingLeft: '40px' }}>
            {/* Linea verticale */}
            <div style={{
              position: 'absolute',
              left: '20px',
              top: '0',
              bottom: '0',
              width: '3px',
              background: 'linear-gradient(180deg, #3498db 0%, #85c1e9 100%)',
              zIndex: 0
            }}></div>

            {/* Foto 1 */}
            <div style={{
              width: '80px',
              height: '80px',
              background: 'url("https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300") center/cover',
              borderRadius: '50%',
              boxShadow: '0 4px 15px rgba(33, 97, 140, 0.25)',
              border: '4px solid white',
              position: 'absolute',
              left: '-20px',
              zIndex: 2
            }}></div>

            <div style={{ height: '120px' }}></div>

            {/* Item 1 - Materia Prima (destra) */}
            <div className="timeline-item" style={{ marginBottom: '40px', position: 'relative', opacity: 0, transform: 'translateX(-100px)', transition: 'opacity 0.8s ease, transform 0.8s ease', textAlign: 'right' }}>
              <h3 style={{
                fontSize: '1.8em',
                color: '#21618c',
                marginBottom: '15px',
                fontWeight: 700
              }}>
                Materia Prima Selezionata
              </h3>
              <p style={{
                color: '#555',
                lineHeight: 1.8,
                fontSize: '1em',
                marginBottom: '15px'
              }}>
                Lavoriamo esclusivamente con latte fresco di altissima qualità proveniente da allevamenti certificati del territorio campano.
                Il latte viene conferito quotidianamente e lavorato entro poche ore dalla mungitura.
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px', justifyContent: 'flex-end' }}>
                <span className="badge">✓ 100% Locale</span>
                <span className="badge">✓ Controlli Quotidiani</span>
              </div>
            </div>

            {/* Foto 2 */}
            <div style={{
              width: '80px',
              height: '80px',
              background: 'url("https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=300") center/cover',
              borderRadius: '50%',
              boxShadow: '0 4px 15px rgba(33, 97, 140, 0.25)',
              border: '4px solid white',
              position: 'absolute',
              left: '-20px',
              zIndex: 2
            }}></div>

            <div style={{ height: '120px' }}></div>

            {/* Item 2 - Lavorazione Artigianale (sinistra) */}
            <div className="timeline-item fade-right" style={{ marginBottom: '40px', position: 'relative', textAlign: 'left', opacity: 0, transform: 'translateX(100px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}>
              <h3 style={{
                fontSize: '1.8em',
                color: '#21618c',
                marginBottom: '15px',
                fontWeight: 700
              }}>
                Lavorazione Artigianale
              </h3>
              <p style={{
                color: '#555',
                lineHeight: 1.8,
                fontSize: '1em',
                marginBottom: '15px'
              }}>
                Ogni mozzarella viene filata a mano dai nostri maestri casari seguendo le antiche tecniche tramandate da tre generazioni.
                Nessun processo è automatizzato: le mani esperte garantiscono l'unicità di ogni prodotto.
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px', justifyContent: 'flex-start' }}>
                <span className="badge">✓ Filatura a Mano</span>
                <span className="badge">✓ Metodo Tradizionale</span>
              </div>
            </div>

            {/* Foto 3 */}
            <div style={{
              width: '80px',
              height: '80px',
              background: 'url("https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300") center/cover',
              borderRadius: '50%',
              boxShadow: '0 4px 15px rgba(33, 97, 140, 0.25)',
              border: '4px solid white',
              position: 'absolute',
              left: '-20px',
              zIndex: 2
            }}></div>

            <div style={{ height: '120px' }}></div>

            {/* Item 3 */}
            <div className="timeline-item" style={{ marginBottom: '40px', position: 'relative', opacity: 0, transform: 'translateX(-100px)', transition: 'opacity 0.8s ease, transform 0.8s ease', textAlign: 'right' }}>
              <h3 style={{
                fontSize: '1.8em',
                color: '#21618c',
                marginBottom: '15px',
                fontWeight: 700
              }}>
                Ingredienti Naturali
              </h3>
              <p style={{
                color: '#555',
                lineHeight: 1.8,
                fontSize: '1em',
                marginBottom: '15px'
              }}>
                Solo latte, sale marino e caglio naturale. Nessun conservante, nessun additivo chimico, nessun correttore di acidità.
                Il risultato è un prodotto puro e autentico, esattamente come si faceva una volta.
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px', justifyContent: 'flex-end' }}>
                <span className="badge">✓ Zero Conservanti</span>
                <span className="badge">✓ Solo 3 Ingredienti</span>
              </div>
            </div>

          </div>

          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <button
              onClick={() => setIsRiconoscimentiOpen(!isRiconoscimentiOpen)}
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #21618c 0%, #3498db 100%)',
                color: 'white',
                padding: '12px 30px',
                border: 'none',
                borderRadius: '25px',
                fontWeight: 'bold',
                fontSize: '0.95em',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(33, 97, 140, 0.25)'
              }}
            >
              Scopri i nostri riconoscimenti
            </button>
          </div>
        </div>
      </section>

      {/* Popup riconoscimenti mobile */}
      {isRiconoscimentiOpen && (
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.7)',
              zIndex: 9999999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '130px 20px 20px 20px',
              animation: 'fadeIn 0.3s ease'
            }}
            onClick={() => setIsRiconoscimentiOpen(false)}
            >
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '15px 12px 12px 12px',
                maxWidth: '450px',
                width: '100%',
                position: 'relative',
                zIndex: 99999999,
                animation: 'fadeIn 0.3s ease'
              }}
              onClick={(e) => e.stopPropagation()}
              >
                <h2 style={{
                  fontSize: '1.2em',
                  color: '#21618c',
                  textAlign: 'center',
                  marginBottom: '12px',
                  marginTop: '0',
                  position: 'relative',
                  zIndex: 999999999
                }}>I Nostri Riconoscimenti</h2>

                <div className="riconoscimenti-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '8px',
                  position: 'relative',
                  zIndex: 999999999
                }}>
              {/* Slow Food */}
              <div style={{
                background: '#f8fbfd',
                padding: '8px 10px',
                borderRadius: '10px',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                border: '2px solid #d4af37'
              }}>
                <img
                  src="/images/slow-food.png"
                  alt="Slow Food"
                  style={{
                    height: '45px',
                    width: 'auto',
                    objectFit: 'contain',
                    marginBottom: '5px',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}
                />
                <h3 style={{
                  fontSize: '0.8em',
                  color: '#d4af37',
                  marginBottom: 0,
                  fontWeight: 700
                }}>Qualità massima certificata</h3>
              </div>

              {/* Gambero Rosso */}
              <div style={{
                background: '#f8fbfd',
                padding: '8px 10px',
                borderRadius: '10px',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                border: '2px solid #d4af37'
              }}>
                <img
                  src="/images/gambero-rosso.png"
                  alt="Gambero Rosso"
                  style={{
                    height: '45px',
                    width: 'auto',
                    objectFit: 'contain',
                    marginBottom: '5px',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}
                />
                <h3 style={{
                  fontSize: '0.8em',
                  color: '#d4af37',
                  marginBottom: 0,
                  fontWeight: 700
                }}>Qualità massima certificata</h3>
              </div>

              {/* Bella Vita */}
              <div style={{
                background: '#f8fbfd',
                padding: '8px 10px',
                borderRadius: '10px',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                border: '2px solid #d4af37'
              }}>
                <img
                  src="/images/bellavita.png"
                  alt="Bella Vita Expo"
                  style={{
                    height: '45px',
                    width: 'auto',
                    objectFit: 'contain',
                    marginBottom: '5px',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}
                />
                <h3 style={{
                  fontSize: '0.8em',
                  color: '#d4af37',
                  marginBottom: 0,
                  fontWeight: 700
                }}>Joe Bastianich's Top 10 Italian Product</h3>
              </div>
            </div>

                {/* Bottone Chiudi */}
                <div style={{
                  textAlign: 'center',
                  marginTop: '12px'
                }}>
                  <button
                    onClick={() => setIsRiconoscimentiOpen(false)}
                    style={{
                      background: 'linear-gradient(135deg, #21618c 0%, #3498db 100%)',
                      color: 'white',
                      padding: '10px 35px',
                      border: 'none',
                      borderRadius: '20px',
                      fontWeight: 'bold',
                      fontSize: '0.95em',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(33, 97, 140, 0.25)',
                      width: '100%',
                      maxWidth: '180px'
                    }}
                  >
                    Chiudi
                  </button>
                </div>
              </div>
            </div>
          )}
      </>
    );
  }

  // Desktop version (continua come prima)
  return (
    <section id="prodotti" className="prodotti" style={{
      padding: '100px 20px',
      background: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Immagini di sfondo laterali */}
      <div style={{
        position: 'absolute',
        left: '-150px',
        top: '15%',
        width: '450px',
        height: '600px',
        background: 'url("https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600") center/cover',
        opacity: 0.12,
        borderRadius: '30px',
        transform: 'rotate(-8deg)'
      }}></div>
      <div style={{
        position: 'absolute',
        right: '-120px',
        top: '40%',
        width: '400px',
        height: '550px',
        background: 'url("https://images.unsplash.com/photo-1452195100486-9cc805987862?w=600") center/cover',
        opacity: 0.12,
        borderRadius: '30px',
        transform: 'rotate(8deg)'
      }}></div>
      <div style={{
        position: 'absolute',
        left: '-150px',
        bottom: '10%',
        width: '450px',
        height: '600px',
        background: 'url("https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=600") center/cover',
        opacity: 0.12,
        borderRadius: '30px',
        transform: 'rotate(-8deg)'
      }}></div>

      <div style={{ maxWidth: '1300px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2 style={{
          fontSize: '2.8em',
          color: '#21618c',
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          Il Nostro Metodo
        </h2>
        <p style={{
          textAlign: 'center',
          color: '#555',
          fontSize: '1.2em',
          marginBottom: '80px',
          maxWidth: '700px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          La qualità dei nostri prodotti nasce dalla cura in ogni fase della lavorazione
        </p>

        {/* Timeline con linea centrale - DESKTOP */}
        <div style={{ position: 'relative' }}>
          {/* Linea verticale centrale */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '4px',
            background: 'linear-gradient(180deg, #3498db 0%, #85c1e9 100%)',
            transform: 'translateX(-50%)',
            zIndex: 0
          }}></div>

          {/* Items desktop - come erano prima */}
          {/* Item 1 */}
          <div className="timeline-item fade-right" style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '100px',
            position: 'relative',
            opacity: 0,
            transform: 'translateX(100px)'
          }}>
            <div style={{ flex: 1, paddingRight: '80px', textAlign: 'right' }}></div>
            <div className="timeline-icon" style={{
              flex: '0 0 120px',
              height: '120px',
              background: 'url("https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300") center/cover',
              borderRadius: '50%',
              boxShadow: '0 10px 40px rgba(33, 97, 140, 0.25)',
              position: 'relative',
              zIndex: 2,
              border: '6px solid white',
              transition: 'transform 0.4s ease',
              overflow: 'hidden'
            }}></div>
            <div style={{ flex: 1, paddingLeft: '80px' }}>
              <h3 style={{ fontSize: '2em', color: '#21618c', marginBottom: '18px', fontWeight: 700 }}>
                Materia Prima Selezionata
              </h3>
              <p style={{ color: '#555', lineHeight: 2, fontSize: '1.1em', marginBottom: '20px' }}>
                Lavoriamo esclusivamente con latte fresco di altissima qualità proveniente da allevamenti certificati del territorio campano. Il latte viene conferito quotidianamente e lavorato entro poche ore dalla mungitura.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <span className="badge">✓ 100% Locale</span>
                <span className="badge">✓ Controlli Quotidiani</span>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="timeline-item" style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '100px',
            position: 'relative',
            opacity: 0,
            transform: 'translateX(-100px)'
          }}>
            <div style={{ flex: 1, paddingRight: '80px' }}>
              <h3 style={{ fontSize: '2em', color: '#21618c', marginBottom: '18px', fontWeight: 700, textAlign: 'right' }}>
                Lavorazione Artigianale
              </h3>
              <p style={{ color: '#555', lineHeight: 2, fontSize: '1.1em', marginBottom: '20px', textAlign: 'right' }}>
                Ogni mozzarella viene filata a mano dai nostri maestri casari seguendo le antiche tecniche tramandate da tre generazioni. Nessun processo è automatizzato: le mani esperte garantiscono l'unicità di ogni prodotto.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                <span className="badge">✓ Filatura a Mano</span>
                <span className="badge">✓ Metodo Tradizionale</span>
              </div>
            </div>
            <div className="timeline-icon" style={{
              flex: '0 0 120px',
              height: '120px',
              background: 'url("https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=300") center/cover',
              borderRadius: '50%',
              boxShadow: '0 10px 40px rgba(33, 97, 140, 0.25)',
              position: 'relative',
              zIndex: 2,
              border: '6px solid white',
              transition: 'transform 0.4s ease',
              overflow: 'hidden'
            }}></div>
            <div style={{ flex: 1, paddingLeft: '80px' }}></div>
          </div>

          {/* Item 3 */}
          <div className="timeline-item fade-right" style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '100px',
            position: 'relative',
            opacity: 0,
            transform: 'translateX(100px)'
          }}>
            <div style={{ flex: 1, paddingRight: '80px', textAlign: 'right' }}></div>
            <div className="timeline-icon" style={{
              flex: '0 0 120px',
              height: '120px',
              background: 'url("https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300") center/cover',
              borderRadius: '50%',
              boxShadow: '0 10px 40px rgba(33, 97, 140, 0.25)',
              position: 'relative',
              zIndex: 2,
              border: '6px solid white',
              transition: 'transform 0.4s ease',
              overflow: 'hidden'
            }}></div>
            <div style={{ flex: 1, paddingLeft: '80px' }}>
              <h3 style={{ fontSize: '2em', color: '#21618c', marginBottom: '18px', fontWeight: 700 }}>
                Ingredienti Naturali
              </h3>
              <p style={{ color: '#555', lineHeight: 2, fontSize: '1.1em', marginBottom: '20px' }}>
                Solo latte, sale marino e caglio naturale. Nessun conservante, nessun additivo chimico, nessun correttore di acidità. Il risultato è un prodotto puro e autentico, esattamente come si faceva una volta.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <span className="badge">✓ Zero Conservanti</span>
                <span className="badge">✓ Solo 3 Ingredienti</span>
              </div>
            </div>
          </div>

        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            onClick={() => setIsRiconoscimentiOpen(!isRiconoscimentiOpen)}
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #21618c 0%, #3498db 100%)',
              color: 'white',
              padding: '18px 55px',
              border: 'none',
              borderRadius: '35px',
              fontWeight: 'bold',
              fontSize: '1.15em',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 25px rgba(33, 97, 140, 0.25)'
            }}
          >
            Scopri i nostri riconoscimenti
          </button>
        </div>

        {/* Box riconoscimenti collassabile */}
        <div style={{
          maxHeight: isRiconoscimentiOpen ? '1000px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.5s ease',
          marginTop: isRiconoscimentiOpen ? '60px' : '0'
        }}>
          <div className="riconoscimenti-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '30px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {/* Slow Food */}
            <div style={{
              background: 'white',
              padding: '30px 20px',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease',
              border: '3px solid #d4af37'
            }}>
              <img
                src="/images/slow-food.png"
                alt="Slow Food"
                style={{
                  height: '120px',
                  width: 'auto',
                  objectFit: 'contain',
                  marginBottom: '15px',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
              />
              <h3 style={{
                fontSize: '1.2em',
                color: '#d4af37',
                marginBottom: 0,
                fontWeight: 700,
                minHeight: '2.4em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>Qualità massima certificata</h3>
            </div>

            {/* Gambero Rosso */}
            <div style={{
              background: 'white',
              padding: '30px 20px',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease',
              border: '3px solid #d4af37'
            }}>
              <img
                src="/images/gambero-rosso.png"
                alt="Gambero Rosso"
                style={{
                  height: '120px',
                  width: 'auto',
                  objectFit: 'contain',
                  marginBottom: '15px',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
              />
              <h3 style={{
                fontSize: '1.2em',
                color: '#d4af37',
                marginBottom: 0,
                fontWeight: 700,
                minHeight: '2.4em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>Qualità massima certificata</h3>
            </div>

            {/* Bella Vita */}
            <div style={{
              background: 'white',
              padding: '30px 20px',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease',
              border: '3px solid #d4af37'
            }}>
              <img
                src="/images/bellavita.png"
                alt="Bella Vita Expo"
                style={{
                  height: '120px',
                  width: 'auto',
                  objectFit: 'contain',
                  marginBottom: '15px',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
              />
              <h3 style={{
                fontSize: '1.2em',
                color: '#d4af37',
                marginBottom: 0,
                fontWeight: 700,
                minHeight: '2.4em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>Joe Bastianich's Top 10 Italian Product</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
