'use client';

import { useState, useEffect } from 'react';

interface TimelineItem {
  year: string;
  title: string;
  content: string;
  color: string;
  imageUrl: string;
}

const timelineData: TimelineItem[] = [
  {
    year: '1952',
    title: "L'Inizio",
    content: "Nasce il Caseificio Salicella in una piccola bottega del centro di Napoli. Il fondatore, Don Giuseppe Salicella, inizia a produrre mozzarelle seguendo le antiche ricette familiari tramandate da suo nonno. Ogni prodotto viene fatto con amore, dedizione e il rispetto per la tradizione casearia campana.",
    color: '#3498db',
    imageUrl: 'https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=800'
  },
  {
    year: '1985',
    title: 'La Crescita',
    content: "La seconda generazione prende in mano l'azienda. Antonio e Maria Salicella espandono la produzione, aprendo un nuovo laboratorio più grande ma mantenendo intatti i metodi tradizionali di lavorazione. La qualità rimane sempre al primo posto, con ogni mozzarella ancora filata rigorosamente a mano.",
    color: '#5dade2',
    imageUrl: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=800'
  },
  {
    year: '2025',
    title: 'Il Futuro',
    content: "Oggi la terza generazione porta avanti l'eredità familiare abbracciando l'innovazione digitale. Attraverso il nostro e-commerce, portiamo la tradizione e la freschezza delle nostre mozzarelle artigianali direttamente a casa tua, in tutta Italia, con la stessa cura e passione di sempre.",
    color: '#85c1e9',
    imageUrl: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800'
  }
];

export default function TimelineSection() {
  const [openTimeline, setOpenTimeline] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleTimeline = (year: string) => {
    if (openTimeline === year) {
      setOpenTimeline(null);
    } else {
      setOpenTimeline(year);
    }
  };

  const getImageUrl = () => {
    if (!openTimeline) {
      return 'default';
    }
    const item = timelineData.find(item => item.year === openTimeline);
    return item?.imageUrl || 'default';
  };

  const currentImageUrl = getImageUrl();

  return (
    <section className="storia" style={{ padding: '80px 20px', background: '#f8fbfd', position: 'relative', overflow: 'hidden' }}>
      {/* Immagini di sfondo laterali */}
      <div style={{ position: 'absolute', left: '-100px', top: '20%', width: '400px', height: '500px', background: 'url("https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600") center/cover', opacity: 0.15, borderRadius: '20px', transform: 'rotate(-5deg)' }}></div>
      {!isMobile && (
        <div style={{ position: 'absolute', right: '-100px', bottom: '20%', width: '400px', height: '500px', background: 'url("https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=600") center/cover', opacity: 0.15, borderRadius: '20px', transform: 'rotate(5deg)' }}></div>
      )}

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: '2.8em', color: '#21618c', textAlign: 'center', marginBottom: '60px' }}>
          70+ Anni di Passione
        </h2>

        <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>

          {/* Timeline Cards - Sinistra */}
          <div style={{ flex: isMobile ? '1' : '0 0 350px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {timelineData.map((item) => (
              <div
                key={item.year}
                onClick={() => toggleTimeline(item.year)}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 10px 30px rgba(33, 97, 140, 0.1)',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  borderLeft: `5px solid ${item.color}`,
                  transform: openTimeline === item.year ? 'scale(1.02)' : 'scale(1)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 0 }}>
                  <div>
                    <div style={{ fontSize: '2.5em', color: item.color, fontWeight: 'bold', transition: 'transform 0.3s ease' }}>{item.year}</div>
                    <h3 style={{ fontSize: '1.3em', color: '#21618c', margin: '10px 0 0 0' }}>{item.title}</h3>
                  </div>
                  <div style={{
                    fontSize: '1.5em',
                    color: item.color,
                    transition: 'transform 0.3s ease',
                    transform: openTimeline === item.year ? 'rotate(90deg)' : 'rotate(0deg)'
                  }}>▶</div>
                </div>
                <div style={{
                  maxHeight: openTimeline === item.year ? '1000px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease'
                }}>
                  <p style={{ color: '#555', lineHeight: 1.7, marginTop: '20px', paddingTop: '20px', borderTop: '2px solid #e3f2fd' }}>
                    {item.content}
                  </p>
                  {/* Immagine su mobile */}
                  {isMobile && openTimeline === item.year && (
                    <div style={{
                      marginTop: '20px',
                      borderRadius: '15px',
                      overflow: 'hidden',
                      height: '250px',
                      background: `url("${item.imageUrl}") center/cover`
                    }}></div>
                  )}
                </div>
              </div>
            ))}

          </div>

          {/* Immagine dinamica - Destra */}
          {!isMobile && (
            <div style={{ flex: 1, position: 'sticky', top: '100px' }}>
              <div style={{
                background: currentImageUrl === 'default'
                  ? 'linear-gradient(rgba(33, 97, 140, 0.15), rgba(52, 152, 219, 0.15)), url("https://images.unsplash.com/photo-1559561853-08451507cbe7?w=800") center/cover'
                  : `url("${currentImageUrl}") center/cover`,
                borderRadius: '25px',
                height: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 15px 40px rgba(33, 97, 140, 0.15)',
                overflow: 'hidden',
                transition: 'all 0.5s ease'
              }}>
                {currentImageUrl === 'default' && (
                  <div style={{ textAlign: 'center', color: '#21618c', padding: '40px', background: 'rgba(255, 255, 255, 0.95)', borderRadius: '20px', backdropFilter: 'blur(10px)' }}>
                    <div style={{ fontSize: '4em', marginBottom: '20px' }}>📜</div>
                    <p style={{ fontSize: '1.3em', fontWeight: 600 }}>Clicca su una data per scoprire la storia</p>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
