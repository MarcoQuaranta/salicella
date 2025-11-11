import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function test() {
  const product = await prisma.product.findFirst({
    where: { nome: 'Saraceno' },
    include: { varianti: true }
  });

  console.log('Product varianti:', JSON.stringify(product?.varianti, null, 2));

  await prisma.$disconnect();
}

test();
