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
        padding: '80px 0',
        background: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Immagine di sfondo dinamica - parte dal bordo destro */}
        <div className="chi-siamo-bg-image" style={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: '50%',
          height: '120%',
          backgroundImage: 'url("/images/photo/1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center left',
          opacity: 0.15,
          zIndex: 0,
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
        }}></div>

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Sezione Testo */}
          <div className="chi-siamo-content" style={{
            maxWidth: '650px',
            marginBottom: '80px'
          }}>
            <h2 style={{
              fontSize: '2.5em',
              color: '#21618c',
              marginBottom: '30px',
              fontWeight: 700
            }}>
              La Nostra Storia
            </h2>
            <p style={{
              fontSize: '1.1em',
              color: '#555',
              lineHeight: 1.8,
              marginBottom: '20px'
            }}>
              Il <strong>Caseificio Salicella</strong> nasce nel 1993. La nostra è una famiglia di allevatori e trasformatori di latte da oltre sessant'anni.
            </p>
            <p style={{
              fontSize: '1.1em',
              color: '#555',
              lineHeight: 1.8,
              marginBottom: '20px'
            }}>
              Da noi si lavora la <strong>mozzarella di bufala campana DOP</strong> con lo stesso procedimento artigianale dettato dai nostri nonni e da antichi insegnamenti, nel pieno rispetto della natura e delle norme vigenti in materia di igiene e sicurezza alimentare.
            </p>
            <p style={{
              fontSize: '1.1em',
              color: '#555',
              lineHeight: 1.8,
              marginBottom: '20px'
            }}>
              Il latte per la lavorazione proviene dagli allevamenti bufalini dei soci della nostra cooperativa, da altri situati in aree limitrofe e dalla nostra azienda zootecnica, dove le bufale sono allevate a stabulazione semi-libera, controllate costantemente da tecnici specializzati e munte meccanicamente con tecnologia computerizzata avanzata.
            </p>
            <p style={{
              fontSize: '1.1em',
              color: '#555',
              lineHeight: 1.8,
              marginBottom: '20px'
            }}>
              La nostra mozzarella ha ricevuto un riconoscimento qualitativo da <strong>Slow Food</strong> e nel 2012 i <strong>tre spicchi</strong> tra i migliori formaggi d'Italia del <strong>Gambero Rosso</strong>. Vi consigliamo di provare anche la ricotta di bufala e le caciotte di bufala dolci e piccanti.
            </p>
            <p style={{
              fontSize: '1.1em',
              color: '#555',
              lineHeight: 1.8,
              marginBottom: '20px'
            }}>
              Esportiamo parte del prodotto in paesi comunitari ed extracomunitari. Siamo inoltre dotati di <strong>certificazione Halal</strong>, che garantisce la preparazione secondo i criteri e i valori della legge islamica e consente di esportare il prodotto nei paesi arabi, assecondando le esigenze del consumatore musulmano.
            </p>
            <p style={{
              fontSize: '1.1em',
              color: '#555',
              lineHeight: 1.8,
              marginBottom: '20px'
            }}>
              Nel 2007, attraverso l'Associazione Sportiva Culturale "Get Free", la nostra cooperativa ha partecipato come sponsor della maratona di New York.
            </p>
            <p style={{
              fontSize: '1.1em',
              color: '#555',
              lineHeight: 1.8,
              fontStyle: 'italic'
            }}>
              Ci trovate in località Salicella, da cui prende il nome il nostro caseificio, sulla strada provinciale in direzione Mondragone verso il mare, nel territorio di Francolise (CE).
            </p>
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
