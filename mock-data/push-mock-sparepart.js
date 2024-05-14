import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const sparePartMockup = [
    {
        id: 1,
        name: "Spare Part 1",
        description: "Description for Spare Part 1",
        image: "image-url-1",
        price: 97.99852812390756,
        createdAt: "Wed May 08 2024 16:59:18 GMT+0700 (Indochina Time)",
        updatedAt: "Wed May 08 2024 16:59:18 GMT+0700 (Indochina Time)",
        cn0: 44,
        cn1: 8,
        cn2: 85,
        cn3: 78,
        cn4: 97,
        cn5: 95,
        cn6: 43,
        cn7: 32,
        cn8: 43,
        cn9: 82,
        cn10: 76,
        cn11: 4,
        cn12: 67,
    },
    {
        id: 2,
        name: "Spare Part 2",
        description: "Description for Spare Part 2",
        image: "image-url-2",
        price: 79.63376545288152,
        createdAt: "Wed May 08 2024 16:59:18 GMT+0700 (Indochina Time)",
        updatedAt: "Wed May 08 2024 16:59:18 GMT+0700 (Indochina Time)",
        cn0: 21,
        cn1: 8,
        cn2: 4,
        cn3: 74,
        cn4: 82,
        cn5: 77,
        cn6: 31,
        cn7: 96,
        cn8: 42,
        cn9: 1,
        cn10: 34,
        cn11: 59,
        cn12: 51,
    },
    {
        id: 3,
        name: "Spare Part 3",
        description: "Description for Spare Part 3",
        image: "image-url-3",
        price: 85.82721690657647,
        createdAt: "Wed May 08 2024 16:59:18 GMT+0700 (Indochina Time)",
        updatedAt: "Wed May 08 2024 16:59:18 GMT+0700 (Indochina Time)",
        cn0: 98,
        cn1: 36,
        cn2: 67,
        cn3: 68,
        cn4: 12,
        cn5: 85,
        cn6: 75,
        cn7: 8,
        cn8: 19,
        cn9: 3,
        cn10: 21,
        cn11: 44,
        cn12: 98,
    },
    {
        id: 4,
        name: "Spare Part 4",
        description: "Description for Spare Part 4",
        image: "image-url-4",
        price: 96.37820118734703,
        createdAt: "Wed May 08 2024 16:59:18 GMT+0700 (Indochina Time)",
        updatedAt: "Wed May 08 2024 16:59:18 GMT+0700 (Indochina Time)",
        cn0: 13,
        cn1: 66,
        cn2: 28,
        cn3: 8,
        cn4: 72,
        cn5: 91,
        cn6: 12,
        cn7: 67,
        cn8: 13,
        cn9: 70,
        cn10: 44,
        cn11: 81,
        cn12: 75,
    },
    {
        id: 5,
        name: "Spare Part 5",
        description: "Description for Spare Part 5",
        image: "image-url-5",
        price: 66.93429621543818,
        createdAt: "Wed May 08 2024 16:59:18 GMT+0700 (Indochina Time)",
        updatedAt: "Wed May 08 2024 16:59:18 GMT+0700 (Indochina Time)",
        cn0: 4,
        cn1: 73,
        cn2: 8,
        cn3: 35,
        cn4: 20,
        cn5: 36,
        cn6: 5,
        cn7: 61,
        cn8: 10,
        cn9: 97,
        cn10: 91,
        cn11: 20,
        cn12: 99,
    },
    {
        id: 6,
        name: "Spare Part 6",
        description: "Description for Spare Part 6",
        image: "image-url-6",
        price: 10.147164017750331,
        createdAt: "Wed May 08 2024 16:59:18 GMT+0700 (Indochina Time)",
        updatedAt: "Wed May 08 2024 16:59:18 GMT+0700 (Indochina Time)",
        cn0: 35,
        cn1: 59,
        cn2: 14,
        cn3: 94,
        cn4: 11,
        cn5: 83,
        cn6: 93,
        cn7: 0,
        cn8: 86,
        cn9: 82,
        cn10: 90,
        cn11: 24,
        cn12: 48,
    },
    {
        id: 7,
        name: "Spare Part 7",
        description: "Description for Spare Part 7",
        image: "image-url-7",
        price: 6.818524940178783,
        createdAt: "Wed May 08 2024 16:59:18 GMT+0700 (Indochina Time)",
        updatedAt: "Wed May 08 2024 16:59:18 GMT+0700 (Indochina Time)",
        cn0: 85,
        cn1: 92,
        cn2: 40,
        cn3: 29,
        cn4: 7,
        cn5: 49,
        cn6: 42,
        cn7: 31,
        cn8: 91,
        cn9: 71,
        cn10: 8,
        cn11: 23,
        cn12: 60,
    },
    {
        id: 8,
        name: "Spare Part 8",
        description: "Description for Spare Part 8",
        image: "image-url-8",
        price: 56.346967287963665,
        createdAt: "Wed May 08 2024 16:59:18 GMT+0700 (Indochina Time)",
        updatedAt: "Wed May 08 2024 16:59:18 GMT+0700 (Indochina Time)",
        cn0: 13,
        cn1: 91,
        cn2: 23,
        cn3: 18,
        cn4: 38,
        cn5: 22,
        cn6: 85,
        cn7: 50,
        cn8: 4,
        cn9: 76,
        cn10: 36,
        cn11: 66,
        cn12: 15,
    },
    {
        id: 9,
        name: "Spare Part 9",
        description: "Description for Spare Part 9",
        image: "image-url-9",
        price: 34.65575974677711,
        createdAt: "Wed May 08 2024 16:59:18 GMT+0700 (Indochina Time)",
        updatedAt: "Wed May 08 2024 16:59:18 GMT+0700 (Indochina Time)",
        cn0: 96,
        cn1: 11,
        cn2: 14,
        cn3: 59,
        cn4: 62,
        cn5: 0,
        cn6: 24,
        cn7: 56,
        cn8: 21,
        cn9: 13,
        cn10: 24,
        cn11: 90,
        cn12: 97,
    },
    {
        id: 10,
        name: "Spare Part 10",
        description: "Description for Spare Part 10",
        image: "image-url-10",
        price: 66.13617798813436,
        createdAt: "Wed May 08 2024 16:59:18 GMT+0700 (Indochina Time)",
        updatedAt: "Wed May 08 2024 16:59:18 GMT+0700 (Indochina Time)",
        cn0: 5,
        cn1: 21,
        cn2: 42,
        cn3: 65,
        cn4: 54,
        cn5: 43,
        cn6: 29,
        cn7: 6,
        cn8: 16,
        cn9: 48,
        cn10: 22,
        cn11: 5,
        cn12: 40,
    },
];

async function main() {
    for (const data of sparePartMockup) {
        await prisma.sparePart.create({
            data,
        });
    }
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });