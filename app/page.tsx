import { Metadata } from 'next';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import MethodSection from './components/MethodSection';
import ProductCarousel from './components/ProductCarousel';
import CTASection from './components/CTASection';
import './home.css';

export const metadata: Metadata = {
  title: 'Home - Caseificio Salicella | Mozzarelle Fresche dal 1993',
  description: 'Mozzarelle fresche e prodotti caseari artigianali dal 1993. Tradizione, qualità e passione in ogni prodotto. Spedizione rapida in tutta Italia.',
};

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <MethodSection />

      {/* Mini CTA tra Metodo e Timeline */}
      <section style={{
        background: '#f8fbfd',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{
            fontSize: '1.3em',
            color: '#21618c',
            marginBottom: '20px',
            fontWeight: 500
          }}>
            Scopri di più su Salicella
          </p>
          <a href="/chi-siamo" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #21618c 0%, #3498db 100%)',
            color: 'white',
            padding: '14px 40px',
            textDecoration: 'none',
            borderRadius: '30px',
            fontWeight: 'bold',
            fontSize: '1.1em',
            transition: 'all 0.3s ease',
            boxShadow: '0 6px 20px rgba(33, 97, 140, 0.25)'
          }}>
            Chi siamo
          </a>
        </div>
      </section>

      <TimelineSection />
      <ProductCarousel />
      <CTASection />

      {/* Sezione Certificazioni */}
      <section style={{
        width: '100%',
        background: '#f0f7ff',
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
