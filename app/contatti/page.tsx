'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import '../home.css';

export default function Contatti() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section style={{
        width: '100%',
        height: '300px',
        background: 'linear-gradient(rgba(33, 97, 140, 0.8), rgba(33, 97, 140, 0.8)), url("/images/chi-siamo.jpg") center/cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '80px'
      }}>
        <h1 style={{
          color: 'white',
          fontSize: '4em',
          fontWeight: 700,
          textAlign: 'center',
          textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
          margin: 0
        }}>
          Contattaci
        </h1>
      </section>

      {/* Sezione Contatti + Mappa */}
      <section style={{
        background: 'white',
        padding: '80px 20px'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div className="contatti-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'start'
          }}>
            {/* Informazioni di contatto */}
            <div className="contatti-info">
              <h2 style={{
                fontSize: '2.5em',
                color: '#21618c',
                marginBottom: '30px',
                fontWeight: 700
              }}>
                Informazioni di Contatto
              </h2>

              {/* Sede */}
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{
                  fontSize: '1.3em',
                  color: '#21618c',
                  marginBottom: '10px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span style={{ fontSize: '1.5em' }}>📍</span>
                  Sede Principale
                </h3>
                <p style={{
                  fontSize: '1.1em',
                  color: '#555',
                  lineHeight: 1.6,
                  margin: 0,
                  paddingLeft: '40px'
                }}>
                  Strada Provinciale per Mondragone n.58<br />
                  81050, Francolise (CE)<br />
                  Italia
                </p>
              </div>

              {/* Telefono Ordini */}
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{
                  fontSize: '1.3em',
                  color: '#21618c',
                  marginBottom: '10px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span style={{ fontSize: '1.5em' }}>📱</span>
                  Ordini WhatsApp
                </h3>
                <p style={{
                  fontSize: '1.1em',
                  color: '#555',
                  lineHeight: 1.6,
                  margin: 0,
                  paddingLeft: '40px'
                }}>
                  <a href="https://wa.me/393429575350" style={{
                    color: '#25D366',
                    textDecoration: 'none',
                    fontWeight: 600
                  }}>
                    +39 342 957 5350
                  </a>
                </p>
              </div>

              {/* Telefono Info */}
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{
                  fontSize: '1.3em',
                  color: '#21618c',
                  marginBottom: '10px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span style={{ fontSize: '1.5em' }}>📞</span>
                  Altre Informazioni
                </h3>
                <p style={{
                  fontSize: '1.1em',
                  color: '#555',
                  lineHeight: 1.8,
                  margin: 0,
                  paddingLeft: '40px'
                }}>
                  <a href="tel:+390823165611" style={{
                    color: '#21618c',
                    textDecoration: 'none',
                    fontWeight: 600
                  }}>
                    0823 1656110
                  </a> (fisso)<br />
                  <a href="tel:+393662822343" style={{
                    color: '#21618c',
                    textDecoration: 'none',
                    fontWeight: 600
                  }}>
                    +39 366 282 2343
                  </a> (cellulare)
                </p>
              </div>

              {/* Email */}
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{
                  fontSize: '1.3em',
                  color: '#21618c',
                  marginBottom: '10px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span style={{ fontSize: '1.5em' }}>📧</span>
                  Email
                </h3>
                <p style={{
                  fontSize: '1.1em',
                  color: '#555',
                  lineHeight: 1.6,
                  margin: 0,
                  paddingLeft: '40px'
                }}>
                  <a href="mailto:info@salicella.com" style={{
                    color: '#21618c',
                    textDecoration: 'none',
                    fontWeight: 600
                  }}>
                    info@salicella.com
                  </a>
                </p>
              </div>

              {/* Orari */}
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{
                  fontSize: '1.3em',
                  color: '#21618c',
                  marginBottom: '10px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span style={{ fontSize: '1.5em' }}>🕐</span>
                  Orari di Apertura
                </h3>
                <p style={{
                  fontSize: '1.1em',
                  color: '#555',
                  lineHeight: 1.8,
                  margin: 0,
                  paddingLeft: '40px'
                }}>
                  Lunedì - Sabato: 08:30 - 18:30<br />
                  Domenica e Festivi: 08:30 - 13:00
                </p>
              </div>

              {/* P.IVA */}
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{
                  fontSize: '1.3em',
                  color: '#21618c',
                  marginBottom: '10px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span style={{ fontSize: '1.5em' }}>🏢</span>
                  Partita IVA
                </h3>
                <p style={{
                  fontSize: '1.1em',
                  color: '#555',
                  lineHeight: 1.6,
                  margin: 0,
                  paddingLeft: '40px',
                  fontWeight: 600
                }}>
                  00980960611
                </p>
              </div>
            </div>

            {/* Mappa Google Maps */}
            <div className="contatti-mappa" style={{
              height: '600px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.5!2d14.0544!3d41.1847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDExJzA0LjkiTiAxNMKwMDMnMTUuOCJF!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit&q=Strada+Provinciale+per+Mondragone+58,+81050+Francolise+CE"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>


      {/* Sezione Certificazioni */}
      <section style={{
        width: '100%',
        background: 'white',
        padding: '0 20px',
        position: 'relative'
      }}>
        <div className="certificazioni-grid" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '80px',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Mozzarella di Bufala Campana DOP */}
          <div style={{
            textAlign: 'center',
            padding: '20px'
          }}>
            <img
              src="/images/bufala.png"
              alt="Mozzarella di Bufala Campana DOP"
              style={{
                height: '120px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            />
          </div>

          {/* Marchio DOP */}
          <div style={{
            textAlign: 'center',
            padding: '20px'
          }}>
            <img
              src="/images/dop.png"
              alt="Denominazione di Origine Protetta"
              style={{
                height: '120px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            />
          </div>

          {/* Marchio Halal */}
          <div style={{
            textAlign: 'center',
            padding: '20px'
          }}>
            <img
              src="/images/halal.png"
              alt="Certificazione Halal"
              style={{
                height: '120px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            />
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @media (max-width: 768px) {
          .contatti-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          .contatti-mappa {
            height: 400px !important;
            order: -1;
          }

          .sedi-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }

          h1 {
            font-size: 2.5em !important;
          }

          h2 {
            font-size: 2em !important;
          }
        }

        .sede-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
      `}</style>
    </>
  );
}
