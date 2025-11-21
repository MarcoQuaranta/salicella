'use client';

import { useState, useEffect } from 'react';

interface TimelineItem {
  category: string;
  title: string;
  content: string;
  color: string;
  imageUrls: string[];
}

const timelineData: TimelineItem[] = [
  {
    category: 'L\'allevamento',
    title: "Le nostre bufale",
    content: "Solo bufale campane allevate in semi-libertà dai nostri soci e controllate continuamente per garantire la miglior qualità.",
    color: '#3498db',
    imageUrls: ['/images/photo/2.jpg', '/images/photo/5.jpg', '/images/photo/6.jpg', '/images/photo/9.jpg', '/images/photo/10.jpg', '/images/photo/13.jpg', '/images/photo/16.jpg', '/images/photo/29.jpg']
  },
  {
    category: 'La trasformazione',
    title: 'Il nostro lavoro',
    content: "Lavoriamo la mozzarella di bufala campana DOP con il procedimento artigianale tramandato dai nostri nonni, nel rispetto della natura e delle norme igienico-sanitarie.",
    color: '#5dade2',
    imageUrls: ['/images/photo/7.jpg', '/images/photo/11.jpg', '/images/photo/14.jpg', '/images/photo/15.jpg', '/images/photo/17.jpg', '/images/photo/21.jpg', '/images/photo/22.jpg', '/images/photo/23.jpg', '/images/photo/24.jpg', '/images/photo/25.jpg', '/images/photo/27.jpg', '/images/photo/28.jpg', '/images/photo/30.jpg', '/images/photo/31.jpg']
  },
  {
    category: 'Il prodotto',
    title: 'Il nostro Oro Bianco',
    content: "Mozzarella premiata da Slow Food e Gambero Rosso. Provate anche la ricotta di bufala e le caciotte dolci e piccanti.",
    color: '#85c1e9',
    imageUrls: ['/images/photo/3.jpg', '/images/photo/26.jpg', '/images/photo/18.jpg', '/images/photo/20.jpg']
  }
];

export default function TimelineSection() {
  const [openTimeline, setOpenTimeline] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleTimeline = (category: string) => {
    if (openTimeline === category) {
      setOpenTimeline(null);
    } else {
      setOpenTimeline(category);
      setCurrentImageIndex(0);
    }
  };

  const getCurrentImages = () => {
    if (!openTimeline) {
      return [];
    }
    const item = timelineData.find(item => item.category === openTimeline);
    return item?.imageUrls || [];
  };

  const currentImages = getCurrentImages();

  const nextImage = () => {
    if (currentImages.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
    }
  };

  const prevImage = () => {
    if (currentImages.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
    }
  };

  return (
    <section className="storia" style={{ padding: '80px 20px', background: 'white', position: 'relative', overflow: 'hidden' }}>
      {/* Immagini di sfondo laterali */}
      <div style={{ position: 'absolute', left: '-100px', top: '20%', width: '400px', height: '500px', background: 'url("/images/photo/3.jpg") center/cover', opacity: 0.15, borderRadius: '20px', transform: 'rotate(-5deg)', maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)' }}></div>
      {!isMobile && (
        <div style={{ position: 'absolute', right: '-100px', bottom: '20%', width: '400px', height: '500px', background: 'url("/images/photo/9.jpg") center/cover', opacity: 0.15, borderRadius: '20px', transform: 'rotate(5deg)', maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)' }}></div>
      )}

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: '2.8em', color: '#21618c', textAlign: 'center', marginBottom: '20px' }}>
          Dai un'occhiata a...
        </h2>
        <p style={{
          textAlign: 'center',
          color: '#555',
          fontSize: '1.2em',
          marginBottom: '60px',
          maxWidth: '700px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Alcune foto che raccontano ciò che da anni sappiamo fare meglio
        </p>

        <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>

          {/* Timeline Cards - Sinistra */}
          <div style={{ flex: isMobile ? '1' : '0 0 350px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {timelineData.map((item) => (
              <div
                key={item.category}
                onClick={() => toggleTimeline(item.category)}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 10px 30px rgba(33, 97, 140, 0.1)',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  borderLeft: `5px solid ${item.color}`,
                  transform: openTimeline === item.category ? 'scale(1.02)' : 'scale(1)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 0 }}>
                  <div>
                    <div style={{ fontSize: '1.1em', color: item.color, fontWeight: '600', transition: 'transform 0.3s ease', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{item.category}</div>
                    <h3 style={{ fontSize: '1.3em', color: '#21618c', margin: '10px 0 0 0' }}>{item.title}</h3>
                  </div>
                  <div style={{
                    fontSize: '1.5em',
                    color: item.color,
                    transition: 'transform 0.3s ease',
                    transform: openTimeline === item.category ? 'rotate(90deg)' : 'rotate(0deg)'
                  }}>▶</div>
                </div>
                <div style={{
                  maxHeight: openTimeline === item.category ? '1000px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease'
                }}>
                  <p style={{ color: '#555', lineHeight: 1.7, marginTop: '20px', paddingTop: '20px', borderTop: '2px solid #e3f2fd' }}>
                    {item.content}
                  </p>
                  {/* Galleria immagini su mobile */}
                  {isMobile && openTimeline === item.category && (
                    <div style={{ marginTop: '20px', position: 'relative' }}>
                      <div style={{
                        borderRadius: '15px',
                        overflow: 'hidden',
                        height: '250px',
                        background: `url("${currentImages[currentImageIndex]}") center/cover`,
                        transition: 'background 0.3s ease'
                      }}></div>
                      {currentImages.length > 1 && (
                        <>
                          <button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            style={{
                              position: 'absolute',
                              left: '10px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              background: 'rgba(255,255,255,0.9)',
                              border: 'none',
                              borderRadius: '50%',
                              width: '40px',
                              height: '40px',
                              cursor: 'pointer',
                              fontSize: '1.2em',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                            }}
                          >←</button>
                          <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            style={{
                              position: 'absolute',
                              right: '10px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              background: 'rgba(255,255,255,0.9)',
                              border: 'none',
                              borderRadius: '50%',
                              width: '40px',
                              height: '40px',
                              cursor: 'pointer',
                              fontSize: '1.2em',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                            }}
                          >→</button>
                          <div style={{
                            position: 'absolute',
                            bottom: '10px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: 'flex',
                            gap: '8px'
                          }}>
                            {currentImages.map((_, idx) => (
                              <div
                                key={idx}
                                style={{
                                  width: '8px',
                                  height: '8px',
                                  borderRadius: '50%',
                                  background: idx === currentImageIndex ? '#fff' : 'rgba(255,255,255,0.5)',
                                  transition: 'all 0.3s ease'
                                }}
                              ></div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}

          </div>

          {/* Galleria dinamica - Destra */}
          {!isMobile && (
            <div style={{ flex: 1, position: 'sticky', top: '100px' }}>
              <div style={{
                position: 'relative',
                borderRadius: '25px',
                width: '100%',
                paddingBottom: '71.4%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 15px 40px rgba(33, 97, 140, 0.15)',
                overflow: 'hidden'
              }}>
                {currentImages.length === 0 ? (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(rgba(33, 97, 140, 0.15), rgba(52, 152, 219, 0.15)), url("https://images.unsplash.com/photo-1559561853-08451507cbe7?w=800") center/cover',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{ textAlign: 'center', color: '#21618c', padding: '40px', background: 'rgba(255, 255, 255, 0.95)', borderRadius: '20px', backdropFilter: 'blur(10px)' }}>
                      <div style={{ fontSize: '4em', marginBottom: '20px' }}>📜</div>
                      <p style={{ fontSize: '1.3em', fontWeight: 600 }}>Clicca su una data per scoprire la storia</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: `url("${currentImages[currentImageIndex]}") center/cover`,
                      transition: 'background 0.5s ease'
                    }}></div>
                    {currentImages.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          style={{
                            position: 'absolute',
                            left: '20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'rgba(255,255,255,0.95)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                            cursor: 'pointer',
                            fontSize: '1.5em',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                            transition: 'all 0.3s ease',
                            color: '#21618c',
                            fontWeight: 'bold'
                          }}
                          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'}
                          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(-50%) scale(1)'}
                        >←</button>
                        <button
                          onClick={nextImage}
                          style={{
                            position: 'absolute',
                            right: '20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'rgba(255,255,255,0.95)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                            cursor: 'pointer',
                            fontSize: '1.5em',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                            transition: 'all 0.3s ease',
                            color: '#21618c',
                            fontWeight: 'bold'
                          }}
                          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'}
                          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(-50%) scale(1)'}
                        >→</button>
                        <div style={{
                          position: 'absolute',
                          bottom: '20px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          display: 'flex',
                          gap: '12px',
                          background: 'rgba(0,0,0,0.3)',
                          padding: '8px 16px',
                          borderRadius: '20px',
                          backdropFilter: 'blur(10px)'
                        }}>
                          {currentImages.map((_, idx) => (
                            <div
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                background: idx === currentImageIndex ? '#fff' : 'rgba(255,255,255,0.5)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                transform: idx === currentImageIndex ? 'scale(1.2)' : 'scale(1)'
                              }}
                            ></div>
                          ))}
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
