import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const productsData = [
  {
    nome: "Saraceno",
    prezzo: 8.25, // 500g * €16.50/kg
    immagine: "/images/prodotti/1.jpeg",
    popolarita: 1,
    attributes: {
      conservazione: "Conservare in frigorifero da +6°C a +12°C.",
      ingredienti: "Latte di bufala, sale, caglio, fermenti lattici.",
      descrizione: "Formaggio di Bufala stagionato"
    },
    varianti: [
      { peso: "500g", prezzo: 8.25, prezzoKg: 16.50 }
    ]
  },
  {
    nome: "Formaggio di Bufala",
    prezzo: 7.25, // 500g * €14.50/kg
    immagine: "/images/prodotti/2.jpeg",
    popolarita: 2,
    attributes: {
      conservazione: "Conservare in frigorifero da +6°C a +12°C.",
      ingredienti: "Latte di bufala, sale, caglio, fermenti lattici."
    },
    varianti: [
      { tipo: "Naturale", peso: "500g", prezzo: 7.25, prezzoKg: 14.50 },
      { tipo: "Piccante", peso: "500g", prezzo: 7.50, prezzoKg: 15.00 }
    ]
  },
  {
    nome: "Ricotta di Bufala Campana DOP",
    prezzo: 1.50, // 250g * €6.00/kg
    immagine: "/images/prodotti/3.jpeg",
    popolarita: 3,
    attributes: {
      conservazione: "Conservare in frigorifero da +6°C a +12°C.",
      ingredienti: "Latte di bufala, sale, caglio, fermenti lattici."
    },
    varianti: [
      { peso: "250g", prezzo: 1.50, prezzoKg: 6.00 },
      { peso: "500g", prezzo: 3.00, prezzoKg: 6.00 },
      { peso: "1kg", prezzo: 6.00, prezzoKg: 6.00 }
    ]
  },
  {
    nome: "Ciliegine di Bufala Campana DOP",
    prezzo: 3.38, // 250g * €13.50/kg
    immagine: "/images/prodotti/4.jpeg",
    popolarita: 4,
    attributes: {
      conservazione: "Conservare in frigorifero da +6°C a +12°C.",
      ingredienti: "Latte di bufala, sale, caglio, fermenti lattici.",
      descrizione: "Grammatura singola: 5g"
    },
    varianti: [
      { tipo: "Barattolo", peso: "500g", prezzo: 6.75, prezzoKg: 13.50 },
      { tipo: "Ciuffo", peso: "250g", prezzo: 3.38, prezzoKg: 13.50 },
      { tipo: "Ciuffo", peso: "500g", prezzo: 6.75, prezzoKg: 13.50 },
      { tipo: "Ciuffo", peso: "1kg", prezzo: 13.50, prezzoKg: 13.50 }
    ]
  },
  {
    nome: "Bocconi di Bufala Campana DOP",
    prezzo: 3.38, // 250g * €13.50/kg
    immagine: "/images/prodotti/5.jpeg",
    popolarita: 5,
    attributes: {
      conservazione: "Conservare in frigorifero da +6°C a +12°C.",
      ingredienti: "Latte di bufala, sale, caglio, fermenti lattici.",
      descrizione: "Grammatura singola: 25g"
    },
    varianti: [
      { tipo: "Termosaldato", peso: "250g", prezzo: 3.38, prezzoKg: 13.50 },
      { tipo: "Barattolo", peso: "500g", prezzo: 6.75, prezzoKg: 13.50 },
      { tipo: "Ciuffo", peso: "250g", prezzo: 3.38, prezzoKg: 13.50 },
      { tipo: "Ciuffo", peso: "500g", prezzo: 6.75, prezzoKg: 13.50 },
      { tipo: "Ciuffo", peso: "1kg", prezzo: 13.50, prezzoKg: 13.50 }
    ]
  },
  {
    nome: "Ovoline di Bufala Campana DOP",
    prezzo: 3.38, // 250g * €13.50/kg
    immagine: "/images/prodotti/6.jpeg",
    popolarita: 6,
    attributes: {
      conservazione: "Conservare in frigorifero da +6°C a +12°C.",
      ingredienti: "Latte di bufala, sale, caglio, fermenti lattici.",
      descrizione: "Grammatura singola: 50g"
    },
    varianti: [
      { tipo: "Termosaldato", peso: "250g", prezzo: 3.38, prezzoKg: 13.50 },
      { tipo: "Barattolo", peso: "500g", prezzo: 6.75, prezzoKg: 13.50 },
      { tipo: "Ciuffo", peso: "250g", prezzo: 3.38, prezzoKg: 13.50 },
      { tipo: "Ciuffo", peso: "500g", prezzo: 6.75, prezzoKg: 13.50 },
      { tipo: "Ciuffo", peso: "1kg", prezzo: 13.50, prezzoKg: 13.50 }
    ]
  },
  {
    nome: "Treccine di Bufala Campana DOP",
    prezzo: 3.38, // 250g * €13.50/kg
    immagine: "/images/prodotti/7.jpeg",
    popolarita: 7,
    attributes: {
      conservazione: "Conservare in frigorifero da +6°C a +12°C.",
      ingredienti: "Latte di bufala, sale, caglio, fermenti lattici.",
      descrizione: "Grammatura: 150g (peso variabile)"
    },
    varianti: [
      { tipo: "Termosaldato", peso: "250g", prezzo: 3.38, prezzoKg: 13.50 },
      { tipo: "Ciuffo", peso: "250g", prezzo: 3.38, prezzoKg: 13.50 },
      { tipo: "Ciuffo", peso: "500g", prezzo: 6.75, prezzoKg: 13.50 },
      { tipo: "Ciuffo", peso: "1kg", prezzo: 13.50, prezzoKg: 13.50 }
    ]
  },
  {
    nome: "Mozzarella di Bufala Campana DOP",
    prezzo: 1.63, // 125g * €13.00/kg
    immagine: "/images/prodotti/8.jpeg",
    popolarita: 8,
    attributes: {
      conservazione: "Conservare in frigorifero da +6°C a +12°C.",
      ingredienti: "Latte di bufala, sale, caglio, fermenti lattici."
    },
    varianti: [
      { tipo: "Termosaldato", peso: "125g", prezzo: 1.63, prezzoKg: 13.00 },
      { tipo: "Termosaldato", peso: "250g", prezzo: 3.25, prezzoKg: 13.00 },
      { tipo: "Barattolo", peso: "125g", prezzo: 1.63, prezzoKg: 13.00 },
      { tipo: "Barattolo", peso: "250g", prezzo: 3.25, prezzoKg: 13.00 },
      { tipo: "Barattolo", peso: "500g", prezzo: 6.50, prezzoKg: 13.00 },
      { tipo: "Ciuffo", peso: "250g", prezzo: 3.25, prezzoKg: 13.00 },
      { tipo: "Ciuffo", peso: "500g", prezzo: 6.50, prezzoKg: 13.00 }
    ]
  },
  {
    nome: "Provola Affumicata",
    prezzo: 3.38, // 250g * €13.50/kg
    immagine: "/images/prodotti/9.jpeg",
    popolarita: 9,
    attributes: {
      conservazione: "Conservare in frigorifero da +6°C a +12°C.",
      ingredienti: "Latte di bufala, sale, caglio, fermenti lattici.",
      descrizione: "Grammatura: 250g (peso variabile)"
    },
    varianti: [
      { tipo: "Ciuffo", peso: "250g", prezzo: 3.38, prezzoKg: 13.50 },
      { tipo: "Ciuffo", peso: "500g", prezzo: 6.75, prezzoKg: 13.50 },
      { tipo: "Ciuffo", peso: "1kg", prezzo: 13.50, prezzoKg: 13.50 }
    ]
  },
  {
    nome: "Treccia di Bufala Campana DOP",
    prezzo: 6.75, // 500g * €13.50/kg
    immagine: "/images/prodotti/10.jpg",
    popolarita: 10,
    attributes: {
      conservazione: "Conservare in frigorifero da +6°C a +12°C.",
      ingredienti: "Latte di bufala, sale, caglio, fermenti lattici.",
      descrizione: "Grammatura: 500g - 1000g - 2000g (peso variabile)"
    },
    varianti: [
      { tipo: "Ciuffo", peso: "500g", prezzo: 6.75, prezzoKg: 13.50 },
      { tipo: "Ciuffo", peso: "1kg", prezzo: 13.50, prezzoKg: 13.50 },
      { tipo: "Ciuffo", peso: "2kg", prezzo: 27.00, prezzoKg: 13.50 }
    ]
  },
  {
    nome: "Burrata di Bufala",
    prezzo: 2.70, // 200g * €13.50/kg
    immagine: "/images/prodotti/11.jpeg",
    popolarita: 11,
    attributes: {
      conservazione: "Conservare in frigorifero da +4°C a +14°C.",
      ingredienti: "Latte di bufala, panna, sale, caglio."
    },
    varianti: [
      { tipo: "Vasetto", peso: "200g", prezzo: 2.70, prezzoKg: 13.50 }
    ]
  },
  {
    nome: "Cacio Bufala",
    prezzo: 13.00, // 1kg * €13.00/kg
    immagine: "/images/prodotti/12.jpeg",
    popolarita: 12,
    attributes: {
      conservazione: "Conservare in frigorifero da +6°C a +12°C.",
      ingredienti: "Latte di bufala, sale, caglio, fermenti lattici.",
      descrizione: "Peso: 1000g (peso variabile)"
    },
    varianti: [
      { tipo: "Naturale", peso: "1kg", prezzo: 13.00, prezzoKg: 13.00 },
      { tipo: "Affumicato", peso: "1kg", prezzo: 13.50, prezzoKg: 13.50 }
    ]
  }
];

async function main() {
  console.log('Starting seed...')

  // Pulisci il database
  await prisma.productVariant.deleteMany({})
  await prisma.productAttribute.deleteMany({})
  await prisma.product.deleteMany({})

  console.log('Database cleared')

  // Inserisci i prodotti
  for (const productData of productsData) {
    const { attributes, varianti, ...productInfo } = productData

    const product = await prisma.product.create({
      data: {
        ...productInfo,
        attributes: {
          create: Object.entries(attributes).map(([key, value]) => ({
            attributeName: key,
            attributeValue: value,
          })),
        },
        varianti: {
          create: varianti.map((v: any) => ({
            tipo: v.tipo || null,
            peso: v.peso,
            prezzo: v.prezzo,
            prezzoKg: v.prezzoKg || null,
          })),
        },
      },
    })

    console.log(`Created product: ${product.nome}`)
  }

  console.log('Seed completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
