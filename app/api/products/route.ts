import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Recupera tutti i prodotti con attributi e varianti
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        attributes: true,
        varianti: true,
      },
      orderBy: {
        popolarita: 'asc',
      },
    });

    // Trasforma i dati in formato più user-friendly
    const formattedProducts = products.map((product) => {
      const attributes: Record<string, string> = {};
      product.attributes.forEach((attr) => {
        attributes[attr.attributeName] = attr.attributeValue;
      });

      return {
        id: product.id,
        nome: product.nome,
        prezzo: product.prezzo,
        grammaturaMin: product.varianti.length > 0 ? product.varianti[0].peso : '',
        immagine: product.immagine,
        conservazione: attributes.conservazione || '',
        ingredienti: attributes.ingredienti || '',
        varianti: product.varianti.map((v) => {
          const variant: { tipo?: string; peso: string; prezzo: number; prezzoKg?: number } = {
            peso: v.peso,
            prezzo: v.prezzo,
          };
          if (v.tipo) {
            variant.tipo = v.tipo;
          }
          if (v.prezzoKg) {
            variant.prezzoKg = v.prezzoKg;
          }
          return variant;
        }),
        popolarita: product.popolarita,
      };
    });

    return NextResponse.json(formattedProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

// POST - Crea un nuovo prodotto
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, prezzo, immagine, popolarita, attributes, varianti } = body;

    const product = await prisma.product.create({
      data: {
        nome,
        prezzo,
        immagine,
        popolarita: popolarita || 999,
        attributes: {
          create: Object.entries(attributes || {}).map(([key, value]) => ({
            attributeName: key,
            attributeValue: value as string,
          })),
        },
        varianti: {
          create: varianti || [],
        },
      },
      include: {
        attributes: true,
        varianti: true,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
}
