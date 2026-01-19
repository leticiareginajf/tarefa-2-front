// prisma/seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('🌱 Iniciando seed do banco de dados...')

    // Limpa a tabela antes de popular (útil em desenvolvimento)
    await prisma.product.deleteMany()

    // Cria produtos de exemplo
    const products = await prisma.product.createMany({
        data: [
            {
                title: "Visual Studio Code",
                description: "Fully customizable. Customize your VS Code UI and layout so that it fits your coding style.",
                price: 26.60,
                imageUrl: "src/assets/vsc.jpeg",
                isFeatured: true
            },
            {
               title: "Android Studio",
               description: "Shape the future of apps: Join the Android community & download the SDK today. Smarter...",
               price: 70.00,
               imageUrl: "src/assets/android.png",
               isFeatured: false
            },
            {
                title: "FrontEnd",
                description: "Telas responsivas.",
                price: 5.00,
                imageUrl: "src/assets/front.png",
                isFeatured: true
            },
            {
                title: "BackEnd",
                description: "Telas Responsivas.",
                price: 45.00,
                imageUrl: "src/assets/backend.jpg"
            },
            {
                title: "Ionic",
                description: "Telas Celulares.",
                price: 700.00,
                imageUrl: "src/assets/ionic.png"
            },
        ]
    })

    console.log(`✅ ${products.count} produtos criados com sucesso!`)
}

main()
    .catch((e) => {
        console.error('❌ Erro ao popular o banco:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })