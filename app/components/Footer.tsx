'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1a4d6b 0%, #21618c 100%)',
      color: 'white',
      padding: '60px 0 30px 0'
    }}>
      <div style={{
        padding: '0 20px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Grid principale */}
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '50px',
          marginBottom: '50px'
        }}>
          {/* Colonna 1: Logo e Descrizione */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px'
            }}>
              <img
                src="/images/logo.png"
                alt="Caseificio Salicella"
                style={{
                  height: '80px',
                  width: 'auto',
                  filter: 'brightness(0) invert(1)'
                }}
              />
              <div>
                <div style={{
                  fontSize: '1.4em',
                  fontWeight: 700,
                  lineHeight: 1.2
                }}>
                  Caseificio Salicella
                </div>
                <div style={{
                  fontSize: '0.85em',
                  opacity: 0.9
                }}>
                  Dal 1993
                </div>
              </div>
            </div>
            <p style={{
              lineHeight: 1.7,
              opacity: 0.9,
              fontSize: '0.95em',
              margin: 0
            }}>
              Produciamo mozzarella di bufala campana DOP e prodotti caseari artigianali
              seguendo la tradizione campana da oltre 30 anni. Qualità, passione e autenticità
              in ogni prodotto.
            </p>
          </div>

          {/* Colonna 2: Link Rapidi */}
          <div className="footer-links-rapidi">
            <h3 style={{
              fontSize: '1.2em',
              fontWeight: 700,
              marginBottom: '20px',
              marginTop: 0
            }}>
              Link Rapidi
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <li>
                <Link href="/" style={{
                  color: 'white',
                  textDecoration: 'none',
                  opacity: 0.9,
                  transition: 'opacity 0.3s ease'
                }}
                className="footer-link"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link href="/chi-siamo" style={{
                  color: 'white',
                  textDecoration: 'none',
                  opacity: 0.9,
                  transition: 'opacity 0.3s ease'
                }}
                className="footer-link"
                >
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="/prodotti" style={{
                  color: 'white',
                  textDecoration: 'none',
                  opacity: 0.9,
                  transition: 'opacity 0.3s ease'
                }}
                className="footer-link"
                >
                  Prodotti
                </Link>
              </li>
              <li>
                <Link href="/contatti" style={{
                  color: 'white',
                  textDecoration: 'none',
                  opacity: 0.9,
                  transition: 'opacity 0.3s ease'
                }}
                className="footer-link"
                >
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonna 3: Contatti */}
          <div>
            <h3 style={{
              fontSize: '1.2em',
              fontWeight: 700,
              marginBottom: '20px',
              marginTop: 0
            }}>
              Contatti
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                opacity: 0.9,
                fontSize: '0.95em'
              }}>
                <span style={{ fontSize: '1.2em' }}>📍</span>
                <span>SP per Mondragone n.58<br />81050 Francolise (CE)</span>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                opacity: 0.9,
                fontSize: '0.95em'
              }}>
                <span style={{ fontSize: '1.2em' }}>📱</span>
                <a href="https://wa.me/393429575350" style={{
                  color: '#25D366',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease'
                }}
                className="footer-link"
                >
                  342 957 5350 (ordini)
                </a>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                opacity: 0.9,
                fontSize: '0.95em'
              }}>
                <span style={{ fontSize: '1.2em' }}>📞</span>
                <a href="tel:+390823165611" style={{
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease'
                }}
                className="footer-link"
                >
                  0823 1656110
                </a>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                opacity: 0.9,
                fontSize: '0.95em'
              }}>
                <span style={{ fontSize: '1.2em' }}>✉️</span>
                <a href="mailto:info@salicella.com" style={{
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease'
                }}
                className="footer-link"
                >
                  info@salicella.com
                </a>
              </li>
            </ul>
          </div>

          {/* Colonna 4: Orari */}
          <div>
            <h3 style={{
              fontSize: '1.2em',
              fontWeight: 700,
              marginBottom: '20px',
              marginTop: 0
            }}>
              Orari di Apertura
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              fontSize: '0.95em',
              opacity: 0.9
            }}>
              <li style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '20px'
              }}>
                <span>Lun - Sab:</span>
                <span style={{ fontWeight: 600 }}>08:30 - 18:30</span>
              </li>
              <li style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '20px'
              }}>
                <span>Dom e Festivi:</span>
                <span style={{ fontWeight: 600 }}>08:30 - 13:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'rgba(255, 255, 255, 0.2)',
          marginBottom: '30px'
        }}></div>

        {/* Bottom Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          fontSize: '0.9em',
          opacity: 0.8
        }}>
          <div>
            © 2025 Caseificio Salicella. Tutti i diritti riservati.
          </div>
          <div style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <Link href="/privacy" style={{
              color: 'white',
              textDecoration: 'none',
              transition: 'opacity 0.3s ease'
            }}
            className="footer-link"
            >
              Privacy Policy
            </Link>
            <Link href="/cookie" style={{
              color: 'white',
              textDecoration: 'none',
              transition: 'opacity 0.3s ease'
            }}
            className="footer-link"
            >
              Cookie Policy
            </Link>
            <Link href="/termini" style={{
              color: 'white',
              textDecoration: 'none',
              transition: 'opacity 0.3s ease'
            }}
            className="footer-link"
            >
              Termini e Condizioni
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-links-rapidi {
            display: none !important;
          }

          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
