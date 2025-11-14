'use client';

import { useState, useEffect } from 'react';

interface Product {
  id: number;
  nome: string;
  prezzo: number;
  immagine: string;
  conservazione: string;
  ingredienti: string;
  varianti: Array<{
    tipo?: string;
    peso: string;
    prezzo: number;
    prezzoKg?: number;
  }>;
}

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productsPerView, setProductsPerView] = useState(4);
  const [isMounted, setIsMounted] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedTipo, setSelectedTipo] = useState<string>('');
  const [selectedPeso, setSelectedPeso] = useState<string>('');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Fetch prodotti dal database
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const allProducts: Product[] = await response.json();

        // Filtra i 5 prodotti richiesti
        const selectedProductNames = [
          'Mozzarella di Bufala Campana DOP',
          'Provola Affumicata',
          'Treccia di Bufala Campana DOP',
          'Ricotta di Bufala Campana DOP',
          'Bocconi di Bufala Campana DOP'
        ];

        const filteredProducts = allProducts.filter(p =>
          selectedProductNames.includes(p.nome)
        );

        setProducts(filteredProducts);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const totalProducts = products.length;

  useEffect(() => {
    const updateProductsPerView = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setProductsPerView(1);
      } else if (width <= 1200) {
        setProductsPerView(2);
      } else {
        setProductsPerView(4);
      }
    };

    updateProductsPerView();
    window.addEventListener('resize', updateProductsPerView);
    return () => window.removeEventListener('resize', updateProductsPerView);
  }, []);

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < totalProducts - productsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < totalProducts - productsPerView;
  const showArrows = isMounted && totalProducts > productsPerView;

  // Funzione per aprire WhatsApp
  const handleWhatsAppOrder = () => {
    if (!selectedProduct || !selectedPeso) return;

    // Trova la variante selezionata
    const varianteSelezionata = selectedProduct.varianti.find(
      v => v.peso === selectedPeso && (!selectedTipo || v.tipo === selectedTipo)
    );
    const prezzo = varianteSelezionata ? varianteSelezionata.prezzo.toFixed(2) : '0.00';

    const tipoText = selectedTipo ? ` ${selectedTipo} -` : '';
    const messaggio = `Richiesta ordine: ${selectedProduct.nome}${tipoText} ${selectedPeso} - €${prezzo}`;
    const numeroWhatsApp = '393662822343'; // Formato internazionale
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(messaggio)}`;

    window.open(url, '_blank');
  };

  // Funzione per aprire il popup prodotto
  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
    // Estrai tipi unici dalle varianti
    const tipi = [...new Set(product.varianti.map(v => v.tipo).filter(Boolean))];
    setSelectedTipo(tipi.length > 0 ? tipi[0]! : '');
    setSelectedPeso(product.varianti[0].peso);
  };

  // Mostra un loader mentre carica
  if (isLoading) {
    return (
      <section className="piu-amati" style={{ padding: '80px 20px', background: '#f8fbfd', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '2.8em', color: '#21618c', textAlign: 'center', marginBottom: '20px' }}>
            I Più Amati dai Nostri Clienti
          </h2>
          <p style={{ textAlign: 'center', color: '#555', fontSize: '1.1em', marginBottom: '50px' }}>
            Caricamento...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="piu-amati" style={{ padding: '80px 20px', background: '#f8fbfd', position: 'relative', overflow: 'hidden' }}>
      {/* Immagini di sfondo laterali */}
      <div style={{ position: 'absolute', left: '-80px', top: '15%', width: '350px', height: '450px', background: 'url("https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600") center/cover', opacity: 0.15, borderRadius: '25px', transform: 'rotate(-10deg)' }}></div>
      <div style={{ position: 'absolute', right: '-100px', bottom: '15%', width: '380px', height: '480px', background: 'url("https://images.unsplash.com/photo-1452195100486-9cc805987862?w=600") center/cover', opacity: 0.15, borderRadius: '25px', transform: 'rotate(10deg)' }}></div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: '2.8em', color: '#21618c', textAlign: 'center', marginBottom: '20px' }}>
          I Più Amati dai Nostri Clienti
        </h2>
        <p style={{ textAlign: 'center', color: '#555', fontSize: '1.1em', marginBottom: '50px' }}>
          I prodotti preferiti che non possono mancare sulla tua tavola
        </p>

        {/* Container con frecce */}
        <div style={{ position: 'relative' }}>
          {/* Freccia sinistra */}
          {showArrows && (
            <button
              onClick={scrollLeft}
              style={{
                position: 'absolute',
                left: productsPerView === 1 ? '10px' : '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                background: 'white',
                border: 'none',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                boxShadow: '0 4px 15px rgba(33, 97, 140, 0.2)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                opacity: canScrollLeft ? 1 : 0.3,
                pointerEvents: canScrollLeft ? 'auto' : 'none'
              }}
            >
              <span style={{ fontSize: '1.5em', color: '#21618c' }}>‹</span>
            </button>
          )}

          {/* Freccia destra */}
          {showArrows && (
            <button
              onClick={scrollRight}
              style={{
                position: 'absolute',
                right: productsPerView === 1 ? '10px' : '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                background: 'white',
                border: 'none',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                boxShadow: '0 4px 15px rgba(33, 97, 140, 0.2)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                opacity: canScrollRight ? 1 : 0.3,
                pointerEvents: canScrollRight ? 'auto' : 'none'
              }}
            >
              <span style={{ fontSize: '1.5em', color: '#21618c' }}>›</span>
            </button>
          )}

          <div style={{ overflow: 'hidden', position: 'relative', padding: productsPerView === 1 ? '0 10%' : '0', maxWidth: productsPerView > 1 ? '1400px' : '100%', margin: productsPerView > 1 ? '0 auto' : '0' }}>
            <div
              style={{
                display: 'flex',
                gap: productsPerView === 1 ? '20%' : '40px',
                transition: 'transform 0.5s ease',
                transform: productsPerView === 1
                  ? `translateX(-${currentIndex * 120}%)`
                  : productsPerView === 2
                  ? `translateX(calc(-${currentIndex * 50}% - ${currentIndex * 40}px))`
                  : `translateX(calc(-${currentIndex * 25}% - ${currentIndex * 40}px))`
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="featured-product"
                  style={{
                    background: 'white',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    flex: productsPerView === 1
                      ? `0 0 ${100 / productsPerView}%`
                      : productsPerView === 2
                      ? `0 0 calc(50% - 20px)`
                      : `0 0 calc(25% - 30px)`,
                    minWidth: productsPerView === 1
                      ? 'auto'
                      : productsPerView === 2
                      ? 'calc(50% - 20px)'
                      : 'calc(25% - 30px)'
                  }}
                >
                  <img
                    src={product.immagine}
                    alt={product.nome}
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ fontSize: '1.3em', color: '#21618c', marginBottom: '10px' }}>
                      {product.nome}
                    </h3>
                    {(() => {
                      const prezzoKg = product.varianti.find(v => v.prezzoKg)?.prezzoKg;
                      return prezzoKg && (
                        <div style={{ fontSize: '1.8em', color: '#3498db', fontWeight: 'bold', marginBottom: '15px' }}>
                          €{prezzoKg.toFixed(2)}/kg
                        </div>
                      );
                    })()}
                    <button
                      onClick={() => handleOpenProduct(product)}
                      style={{
                        display: 'inline-block',
                        background: 'linear-gradient(135deg, #21618c 0%, #3498db 100%)',
                        color: 'white',
                        padding: '10px 25px',
                        border: 'none',
                        borderRadius: '25px',
                        fontWeight: 'bold',
                        fontSize: '1em',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 10px rgba(33, 97, 140, 0.2)'
                      }}
                    >
                      Acquista
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popup dettaglio prodotto */}
      {selectedProduct && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.3s ease',
            overflowY: 'auto'
          }}
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="product-popup"
            style={{
              background: 'white',
              borderRadius: '25px',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative',
              animation: 'fadeIn 0.3s ease'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Immagine prodotto */}
            <div style={{
              width: '100%',
              height: '300px',
              background: `#e0e0e0 url("${selectedProduct.immagine}") center/cover`,
              backgroundSize: 'cover',
              borderRadius: '25px 25px 0 0'
            }}></div>

            <div className="product-popup-content" style={{
              padding: '30px'
            }}>
              <h2 style={{
                fontSize: '2em',
                color: '#21618c',
                marginBottom: '10px',
                fontWeight: 700
              }}>
                {selectedProduct.nome}
              </h2>

              {/* Prezzo al kg */}
              {(() => {
                const prezzoKg = selectedProduct.varianti.find(v => v.prezzoKg)?.prezzoKg;
                return prezzoKg && (
                  <div style={{ fontSize: '1.8em', color: '#3498db', fontWeight: 'bold', marginBottom: '20px' }}>
                    €{prezzoKg.toFixed(2)}/kg
                  </div>
                );
              })()}

              {/* Conservazione */}
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{
                  fontSize: '1.2em',
                  color: '#21618c',
                  marginBottom: '8px',
                  fontWeight: 600
                }}>
                  Conservazione
                </h3>
                <p style={{
                  fontSize: '0.95em',
                  color: '#555',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {selectedProduct.conservazione}
                </p>
              </div>

              {/* Ingredienti */}
              <div style={{ marginBottom: '25px' }}>
                <h3 style={{
                  fontSize: '1.2em',
                  color: '#21618c',
                  marginBottom: '8px',
                  fontWeight: 600
                }}>
                  Ingredienti
                </h3>
                <p style={{
                  fontSize: '0.95em',
                  color: '#555',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {selectedProduct.ingredienti}
                </p>
              </div>

              {/* Selezione tipo (se disponibile) */}
              {(() => {
                const tipi = [...new Set(selectedProduct.varianti.map(v => v.tipo).filter(Boolean))];
                return tipi.length > 0 && (
                  <div style={{ marginBottom: '25px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '1.1em',
                      fontWeight: 600,
                      color: '#21618c',
                      marginBottom: '12px'
                    }}>
                      Seleziona tipo:
                    </label>
                    <div style={{
                      display: 'flex',
                      gap: '10px',
                      flexWrap: 'wrap'
                    }}>
                      {tipi.map((tipo) => (
                        <button
                          key={tipo}
                          onClick={() => {
                            setSelectedTipo(tipo!);
                            // Seleziona il primo peso disponibile per questo tipo
                            const primaVariante = selectedProduct.varianti.find(v => v.tipo === tipo);
                            if (primaVariante) setSelectedPeso(primaVariante.peso);
                          }}
                          style={{
                            padding: '12px 20px',
                            border: selectedTipo === tipo ? '2px solid #21618c' : '2px solid #e0e0e0',
                            borderRadius: '15px',
                            background: selectedTipo === tipo ? '#f0f7ff' : 'white',
                            color: selectedTipo === tipo ? '#21618c' : '#666',
                            fontWeight: 600,
                            fontSize: '1em',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {tipo}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* Selezione grammatura */}
              <div style={{
                marginBottom: '25px'
              }}>
                <label style={{
                  display: 'block',
                  fontSize: '1.1em',
                  fontWeight: 600,
                  color: '#21618c',
                  marginBottom: '12px'
                }}>
                  Seleziona grammatura:
                </label>
                <div style={{
                  display: 'flex',
                  gap: '10px',
                  flexWrap: 'wrap'
                }}>
                  {selectedProduct.varianti
                    .filter(v => !selectedTipo || v.tipo === selectedTipo)
                    .map((variante, index) => (
                    <button
                      key={`${variante.tipo}-${variante.peso}-${index}`}
                      onClick={() => setSelectedPeso(variante.peso)}
                      style={{
                        padding: '12px 20px',
                        border: selectedPeso === variante.peso ? '2px solid #21618c' : '2px solid #e0e0e0',
                        borderRadius: '15px',
                        background: selectedPeso === variante.peso ? '#f0f7ff' : 'white',
                        color: selectedPeso === variante.peso ? '#21618c' : '#666',
                        fontWeight: 600,
                        fontSize: '1em',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <span>{variante.peso}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottoni azione */}
              <div style={{
                display: 'flex',
                gap: '15px',
                marginTop: '30px'
              }}>
                <button
                  onClick={handleWhatsAppOrder}
                  style={{
                    flex: 1,
                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                    color: 'white',
                    padding: '15px 30px',
                    border: 'none',
                    borderRadius: '25px',
                    fontWeight: 'bold',
                    fontSize: '1.1em',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                >
                  <span style={{ fontSize: '1.3em' }}>📱</span>
                  Ordina su WhatsApp
                </button>
                <button
                  onClick={() => setSelectedProduct(null)}
                  style={{
                    padding: '15px 30px',
                    border: '2px solid #21618c',
                    borderRadius: '25px',
                    background: 'white',
                    color: '#21618c',
                    fontWeight: 'bold',
                    fontSize: '1em',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Chiudi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
