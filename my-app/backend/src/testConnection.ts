import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function test() {

    const products = await prisma.product.findMany()


    products.forEach(product => {
        console.log(`${product.title} - R$ ${product.price}`)
    })
}

test()