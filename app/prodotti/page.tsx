'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../home.css';

type ProductType = {
  id: number;
  nome: string;
  prezzo: number;
  grammaturaMin: string;
  immagine: string;
  conservazione: string;
  ingredienti: string;
  varianti: { tipo?: string; peso: string; prezzo: number; prezzoKg?: number }[];
  popolarita: number;
};

// Dati prodotti fallback (usati solo se il caricamento dal database fallisce)
const prodottiDataFallback: ProductType[] = [
  {
    id: 1,
    nome: "Mozzarella di Bufala DOP",
    prezzo: 8.50,
    grammaturaMin: "125g",
    immagine: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=600&h=600&fit=crop",
    conservazione: "Conservare in frigorifero a +4°C. Una volta aperta la confezione, consumare entro 2 giorni.",
    ingredienti: "Latte di bufala, sale, caglio.",
    varianti: [
      { peso: "125g", prezzo: 8.50 },
      { peso: "250g", prezzo: 15.00 },
      { peso: "500g", prezzo: 28.00 }
    ],
    popolarita: 1
  },
  {
    id: 2,
    nome: "Bocconcini",
    prezzo: 6.50,
    grammaturaMin: "200g",
    immagine: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=600&h=600&fit=crop",
    conservazione: "Conservare in frigorifero a +4°C. Consumare entro 3 giorni dall'apertura.",
    ingredienti: "Latte vaccino, sale, caglio.",
    varianti: [
      { peso: "200g", prezzo: 6.50 },
      { peso: "500g", prezzo: 14.00 },
      { peso: "1kg", prezzo: 26.00 }
    ],
    popolarita: 2
  },
  {
    id: 3,
    nome: "Treccia",
    prezzo: 7.00,
    grammaturaMin: "250g",
    immagine: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&h=600&fit=crop",
    conservazione: "Conservare in frigorifero a +4°C nel suo liquido. Consumare entro 2 giorni.",
    ingredienti: "Latte vaccino, sale, caglio.",
    varianti: [
      { peso: "250g", prezzo: 7.00 },
      { peso: "500g", prezzo: 13.00 }
    ],
    popolarita: 3
  },
  {
    id: 4,
    nome: "Burrata",
    prezzo: 9.00,
    grammaturaMin: "150g",
    immagine: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&h=600&fit=crop",
    conservazione: "Conservare in frigorifero a +4°C. Consumare preferibilmente entro 24 ore.",
    ingredienti: "Latte vaccino, panna, sale, caglio.",
    varianti: [
      { peso: "150g", prezzo: 9.00 },
      { peso: "250g", prezzo: 14.00 }
    ],
    popolarita: 4
  },
  {
    id: 5,
    nome: "Stracciatella",
    prezzo: 8.00,
    grammaturaMin: "200g",
    immagine: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=600&h=600&fit=crop",
    conservazione: "Conservare in frigorifero a +4°C. Consumare entro 2 giorni dall'apertura.",
    ingredienti: "Latte vaccino, panna, sale, caglio.",
    varianti: [
      { peso: "200g", prezzo: 8.00 },
      { peso: "500g", prezzo: 18.00 }
    ],
    popolarita: 5
  },
  {
    id: 6,
    nome: "Provola Affumicata",
    prezzo: 7.50,
    grammaturaMin: "300g",
    immagine: "https://images.unsplash.com/photo-1559561853-08451507cbe7?w=600&h=600&fit=crop",
    conservazione: "Conservare in frigorifero a +4°C. Consumare entro 7 giorni dall'apertura.",
    ingredienti: "Latte vaccino, sale, caglio, affumicatura naturale.",
    varianti: [
      { peso: "300g", prezzo: 7.50 },
      { peso: "500g", prezzo: 12.00 },
      { peso: "1kg", prezzo: 22.00 }
    ],
    popolarita: 6
  },
  {
    id: 7,
    nome: "Scamorza Bianca",
    prezzo: 6.00,
    grammaturaMin: "250g",
    immagine: "https://images.unsplash.com/photo-1589881133595-c7f9d4009001?w=600&h=600&fit=crop",
    conservazione: "Conservare in frigorifero a +4°C. Consumare entro 7 giorni dall'apertura.",
    ingredienti: "Latte vaccino, sale, caglio.",
    varianti: [
      { peso: "250g", prezzo: 6.00 },
      { peso: "500g", prezzo: 11.00 }
    ],
    popolarita: 7
  },
  {
    id: 8,
    nome: "Ricotta Fresca",
    prezzo: 4.50,
    grammaturaMin: "250g",
    immagine: "https://images.unsplash.com/photo-1573194878430-86c04158eb96?w=600&h=600&fit=crop",
    conservazione: "Conservare in frigorifero a +4°C. Consumare entro 3 giorni dall'apertura.",
    ingredienti: "Siero di latte vaccino, latte, sale.",
    varianti: [
      { peso: "250g", prezzo: 4.50 },
      { peso: "500g", prezzo: 8.00 },
      { peso: "1kg", prezzo: 15.00 }
    ],
    popolarita: 8
  },
  {
    id: 9,
    nome: "Caciocavallo",
    prezzo: 10.00,
    grammaturaMin: "400g",
    immagine: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=600&h=600&fit=crop",
    conservazione: "Conservare in luogo fresco e asciutto. Dopo l'apertura conservare in frigorifero avvolto in carta alimentare.",
    ingredienti: "Latte vaccino, sale, caglio.",
    varianti: [
      { peso: "400g", prezzo: 10.00 },
      { peso: "800g", prezzo: 19.00 }
    ],
    popolarita: 9
  },
  {
    id: 10,
    nome: "Nodini",
    prezzo: 5.50,
    grammaturaMin: "200g",
    immagine: "https://images.unsplash.com/photo-1589881133595-c7f9d4009001?w=600&h=600&fit=crop&q=80",
    conservazione: "Conservare in frigorifero a +4°C nel suo liquido. Consumare entro 3 giorni.",
    ingredienti: "Latte vaccino, sale, caglio.",
    varianti: [
      { peso: "200g", prezzo: 5.50 },
      { peso: "500g", prezzo: 12.00 }
    ],
    popolarita: 10
  },
  {
    id: 11,
    nome: "Fior di Latte",
    prezzo: 5.00,
    grammaturaMin: "250g",
    immagine: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=600&h=600&fit=crop&q=80",
    conservazione: "Conservare in frigorifero a +4°C nel suo liquido. Consumare entro 3 giorni.",
    ingredienti: "Latte vaccino, sale, caglio.",
    varianti: [
      { peso: "250g", prezzo: 5.00 },
      { peso: "500g", prezzo: 9.00 },
      { peso: "1kg", prezzo: 17.00 }
    ],
    popolarita: 11
  },
  {
    id: 12,
    nome: "Mozzarella per Pizza",
    prezzo: 4.00,
    grammaturaMin: "500g",
    immagine: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=600&h=600&fit=crop&q=80",
    conservazione: "Conservare in frigorifero a +4°C. Consumare entro 5 giorni dall'apertura.",
    ingredienti: "Latte vaccino, sale, caglio.",
    varianti: [
      { peso: "500g", prezzo: 4.00 },
      { peso: "1kg", prezzo: 7.50 },
      { peso: "2.5kg", prezzo: 17.00 }
    ],
    popolarita: 12
  },
  {
    id: 13,
    nome: "Provola Dolce",
    prezzo: 6.50,
    grammaturaMin: "300g",
    immagine: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=600&h=600&fit=crop&q=80",
    conservazione: "Conservare in frigorifero a +4°C. Consumare entro 7 giorni dall'apertura.",
    ingredienti: "Latte vaccino, sale, caglio.",
    varianti: [
      { peso: "300g", prezzo: 6.50 },
      { peso: "600g", prezzo: 12.00 }
    ],
    popolarita: 13
  },
  {
    id: 14,
    nome: "Ricotta Salata",
    prezzo: 8.00,
    grammaturaMin: "300g",
    immagine: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&h=600&fit=crop&q=80",
    conservazione: "Conservare in frigorifero a +4°C avvolto in carta alimentare. Consumare entro 10 giorni.",
    ingredienti: "Siero di latte vaccino, sale.",
    varianti: [
      { peso: "300g", prezzo: 8.00 },
      { peso: "600g", prezzo: 15.00 }
    ],
    popolarita: 14
  },
  {
    id: 15,
    nome: "Cacioricotta",
    prezzo: 7.00,
    grammaturaMin: "250g",
    immagine: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&h=600&fit=crop&q=80",
    conservazione: "Conservare in frigorifero a +4°C. Consumare entro 7 giorni dall'apertura.",
    ingredienti: "Latte vaccino, siero di latte, sale, caglio.",
    varianti: [
      { peso: "250g", prezzo: 7.00 },
      { peso: "500g", prezzo: 13.00 }
    ],
    popolarita: 15
  }
];

type SortType = 'predefinito' | 'alfabetico-asc' | 'alfabetico-desc' | 'prezzo-asc' | 'prezzo-desc';

export default function Prodotti() {
  const [prodottiData, setProdottiData] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const [selectedTipo, setSelectedTipo] = useState<string>('');
  const [selectedPeso, setSelectedPeso] = useState<string>('');
  const [sortType, setSortType] = useState<SortType>('predefinito');

  // Carica i prodotti dal database
  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProdottiData(data);
      } catch (error) {
        console.error('Error loading products:', error);
        // Usa i dati fallback in caso di errore
        setProdottiData(prodottiDataFallback);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  // Funzione per ordinare i prodotti
  const sortProducts = (products: typeof prodottiData) => {
    const sorted = [...products];

    switch(sortType) {
      case 'alfabetico-asc':
        return sorted.sort((a, b) => a.nome.localeCompare(b.nome));
      case 'alfabetico-desc':
        return sorted.sort((a, b) => b.nome.localeCompare(a.nome));
      case 'prezzo-asc':
        return sorted.sort((a, b) => a.prezzo - b.prezzo);
      case 'prezzo-desc':
        return sorted.sort((a, b) => b.prezzo - a.prezzo);
      case 'predefinito':
      default:
        return sorted.sort((a, b) => a.popolarita - b.popolarita);
    }
  };

  const prodottiOrdinati = sortProducts(prodottiData);

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

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section style={{
        width: '100%',
        height: '300px',
        background: 'linear-gradient(rgba(33, 97, 140, 0.8), rgba(33, 97, 140, 0.8)), url("/images/prodotti.jpg") center/cover',
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
          I Nostri Prodotti
        </h1>
      </section>

      {/* Filtri ordinamento */}
      <section style={{
        background: 'white',
        padding: '30px 20px',
        borderBottom: '1px solid #e0e0e0'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          flexWrap: 'wrap'
        }}>
          <span style={{
            fontSize: '1em',
            fontWeight: 600,
            color: '#21618c'
          }}>
            Ordina per:
          </span>
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value as SortType)}
            style={{
              padding: '10px 20px',
              border: '2px solid #21618c',
              borderRadius: '25px',
              fontSize: '0.95em',
              fontWeight: 600,
              color: '#21618c',
              background: 'white',
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            <option value="predefinito">Predefinito (Più ricercati)</option>
            <option value="alfabetico-asc">Alfabetico (A-Z)</option>
            <option value="alfabetico-desc">Alfabetico (Z-A)</option>
            <option value="prezzo-asc">Prezzo (Crescente)</option>
            <option value="prezzo-desc">Prezzo (Decrescente)</option>
          </select>
        </div>
      </section>

      {/* Griglia prodotti */}
      <section style={{
        background: '#f8f9fa',
        padding: '60px 20px',
        minHeight: '400px'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {loading ? (
            <div style={{
              textAlign: 'center',
              padding: '100px 20px',
              color: '#21618c',
              fontSize: '1.2em'
            }}>
              Caricamento prodotti...
            </div>
          ) : (
            <div className="prodotti-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px'
            }}>
              {prodottiOrdinati.map((prodotto) => (
              <div
                key={prodotto.id}
                onClick={() => {
                  setSelectedProduct(prodotto);
                  // Estrai tipi unici dalle varianti
                  const tipi = [...new Set(prodotto.varianti.map(v => v.tipo).filter(Boolean))];
                  setSelectedTipo(tipi.length > 0 ? tipi[0]! : '');
                  setSelectedPeso(prodotto.varianti[0].peso);
                }}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                className="product-card"
              >
                <div
                  className="product-image"
                  style={{
                    width: '100%',
                    paddingBottom: '66.66%',
                    backgroundColor: '#e0e0e0',
                    backgroundImage: `url("${prodotto.immagine}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                  }}
                ></div>
                <div style={{
                  padding: '20px'
                }}>
                  <h3 style={{
                    color: '#21618c',
                    marginBottom: '10px',
                    fontWeight: 700
                  }}>
                    {prodotto.nome}
                  </h3>
                  {(() => {
                    const prezzoKg = prodotto.varianti.find(v => v.prezzoKg)?.prezzoKg;
                    return prezzoKg && (
                      <p className="price" style={{
                        color: '#3498db',
                        fontWeight: 700,
                        fontSize: '1.5em',
                        margin: 0
                      }}>
                        €{prezzoKg.toFixed(2)}/kg
                      </p>
                    );
                  })()}
                </div>
              </div>
            ))}
            </div>
          )}
        </div>
      </section>

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
