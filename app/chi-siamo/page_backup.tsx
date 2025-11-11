import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../home.css';

export const metadata: Metadata = {
  title: 'Chi Siamo - Caseificio Salicella | La Nostra Storia',
  description: 'Scopri la storia del Caseificio Salicella. Dal 1952 produciamo mozzarelle fresche e prodotti caseari artigianali seguendo la tradizione campana.',
};

export default function ChiSiamo() {
  return (
    <>
      <Header />
      {/* Hero Section con foto di sfondo */}
      <section className="chi-siamo-hero" style={{
        width: '100%',
        height: '300px',
        background: 'linear-gradient(rgba(33, 97, 140, 0.8), rgba(33, 97, 140, 0.8)), url("/images/chi-siamo.png") center/cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <h1 style={{
          color: 'white',
          fontSize: '4em',
          fontWeight: 700,
          textAlign: 'center',
          textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
          margin: 0
        }}>
          Chi Siamo
        </h1>
      </section>

      {/* Contenuto della pagina */}
      <section style={{
        padding: '80px 20px',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Sezione Testo + Foto */}
          <div className="chi-siamo-content" style={{
            display: 'flex',
            gap: '60px',
            alignItems: 'center',
            marginBottom: '80px'
          }}>
            {/* Testo a sinistra */}
            <div style={{ flex: 1 }}>
              <h2 style={{
                fontSize: '2.5em',
                color: '#21618c',
                marginBottom: '30px',
                fontWeight: 700
              }}>
                60 anni di esperienza e tradizione
              </h2>
              <p style={{
                fontSize: '1.1em',
                color: '#555',
                lineHeight: 1.8,
                marginBottom: '20px'
              }}>
La nostra mozzarella nasce dal latte di bufala, affidato alla maestria e alla sapienza dei nostri <strong>"maestri casari"</strong>, i cui segreti e le cui tradizioni provengono da un lungo viaggio tra <strong>ragione</strong> ed <strong>emozione</strong> a cavallo tra l'<strong>antico</strong> ed il <strong>moderno</strong>.              </p>
              <p style={{
                fontSize: '1.1em',
                color: '#555',
                lineHeight: 1.8
              }}>
La mozarella di bufala <strong>Salicella</strong> ha ricevuto un'ottima valutazione da parte di <strong>Slow Food</strong> e dal <strong>Gambero Rosso</strong>, ricevendo in entrambi i casi il giudizio: <strong>ottima qualità</strong>.              </p>
            </div>

            {/* Foto a destra */}
            <div style={{ flex: 1 }}>
              <img
                src="https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=800"
                alt="Caseificio Salicella"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(33, 97, 140, 0.15)'
                }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* Sezione Riconoscimenti */}
      <section style={{
        width: '100%',
        background: 'linear-gradient(135deg, #f0f7ff 0%, #e3f2fd 100%)',
        padding: '60px 20px',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2em',
            color: '#21618c',
            marginBottom: '40px',
            fontWeight: 700,
            textAlign: 'center'
          }}>
            I Nostri Riconoscimenti
          </h2>

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
    </>
  );
}
