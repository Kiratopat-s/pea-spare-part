

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const sparepartData = {
        mockupData: Array(10)
            .fill(null)
            .map((_, index) => ({
                id: index + 1,
                name: `Spare Part ${index + 1}`,
                description: `Description for Spare Part ${index + 1}`,
                image: `image-url-${index + 1}`,
                price: Math.random() * 100,
                createdAt: `${new Date()}`,
                updatedAt: `${new Date()}`,
                cn0: Math.floor(Math.random() * 100),
                cn1: Math.floor(Math.random() * 100),
                cn2: Math.floor(Math.random() * 100),
                cn3: Math.floor(Math.random() * 100),
                cn4: Math.floor(Math.random() * 100),
                cn5: Math.floor(Math.random() * 100),
                cn6: Math.floor(Math.random() * 100),
                cn7: Math.floor(Math.random() * 100),
                cn8: Math.floor(Math.random() * 100),
                cn9: Math.floor(Math.random() * 100),
                cn10: Math.floor(Math.random() * 100),
                cn11: Math.floor(Math.random() * 100),
                cn12: Math.floor(Math.random() * 100),
            })),
    };

    console.log(sparepartData.mockupData);
    for (let i = 0; i < sparepartData.mockupData.length; i++) {
        const sparepart = sparepartData.mockupData[i];
        await prisma.sparePart.create({
            data: {
                id: sparepart.id,
                name: sparepart.name,
                description: sparepart.description,
                image: sparepart.image,
                price: sparepart.price,
                createdAt: new Date(),
                updatedAt: new Date(),
                cn0: sparepart.cn0,
                cn1: sparepart.cn1,
                cn2: sparepart.cn2,
                cn3: sparepart.cn3,
                cn4: sparepart.cn4,
                cn5: sparepart.cn5,
                cn6: sparepart.cn6,
                cn7: sparepart.cn7,
                cn8: sparepart.cn8,
                cn9: sparepart.cn9,
                cn10: sparepart.cn10,
                cn11: sparepart.cn11,
                cn12: sparepart.cn12,
            },
        });
    }


}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });