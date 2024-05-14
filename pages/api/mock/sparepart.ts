import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
const prisma = new PrismaClient();

interface SparePart {
    id: number;
    name: string;
    description?: string;
    image?: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    cn0: number;
    cn1: number;
    cn2: number;
    cn3: number;
    cn4: number;
    cn5: number;
    cn6: number;
    cn7: number;
    cn8: number;
    cn9: number;
    cn10: number;
    cn11: number;
    cn12: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    // const realSeedData: SparePart[] = [
    //     {
    //         id: 1,
    //         name: "Clamp Stick Jaw",
    //         description: "Description for Clamp Stick Jaw",
    //         image: "https://drive.google.com/file/d/1urhnqeLwIsgKUGSQyGQdZ_VzVtHe0hvJ/view?usp=sharing",
    //         price: 66.13617798813436,
    //         cn0: 5,
    //         cn1: 21,
    //         cn2: 42,
    //         cn3: 65,
    //         cn4: 54,
    //         cn5: 43,
    //         cn6: 29,
    //         cn7: 6,
    //         cn8: 16,
    //         cn9: 48,
    //         cn10: 22,
    //         cn11: 5,
    //         cn12: 40,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //     },
    //     {
    //         id: 2,
    //         name: "Clamp Stick Handle",
    //         description: "Description for Clamp Stick Handle",
    //         image: "https://drive.google.com/file/d/1CJlqIQKV9WDhKB-rL0zPyNZG1sLVYM5e/view?usp=sharing",
    //         price: 66.13617798813436,
    //         cn0: 5,
    //         cn1: 21,
    //         cn2: 42,
    //         cn3: 65,
    //         cn4: 54,
    //         cn5: 43,
    //         cn6: 29,
    //         cn7: 6,
    //         cn8: 16,
    //         cn9: 48,
    //         cn10: 22,
    //         cn11: 5,
    //         cn12: 40,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //     },
    //     {
    //         id: 3,
    //         name: "นกล็อค Clamp Stick",
    //         description: "Description for นกล็อค Clamp Stick",
    //         image: "https://drive.google.com/file/d/1OoB9Z6nkMAT7--YzQDWrZ4f882KSDBRI/view?usp=sharing",
    //         price: 66.13617798813436,
    //         cn0: 5,
    //         cn1: 21,
    //         cn2: 42,
    //         cn3: 65,
    //         cn4: 54,
    //         cn5: 43,
    //         cn6: 29,
    //         cn7: 6,
    //         cn8: 16,
    //         cn9: 48,
    //         cn10: 22,
    //         cn11: 5,
    //         cn12: 40,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //     },
    //     {
    //         id: 4,
    //         name: "ไกล็อค Clamp Stick",
    //         description: "Description for ไกล็อค Clamp Stick",
    //         image: "https://drive.google.com/file/d/1zSkPSCiGo5AbeVMHxVQom8fa2JNUjy4r/view?usp=sharing",
    //         price: 66.13617798813436,
    //         cn0: 5,
    //         cn1: 21,
    //         cn2: 42,
    //         cn3: 65,
    //         cn4: 54,
    //         cn5: 43,
    //         cn6: 29,
    //         cn7: 6,
    //         cn8: 16,
    //         cn9: 48,
    //         cn10: 22,
    //         cn11: 5,
    //         cn12: 40,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //     },
    //     {
    //         id: 5,
    //         name: "Clamp Stick Lock Bar (ราง Clamp Stick)",
    //         description: "Description for Clamp Stick Lock Bar (ราง Clamp Stick)",
    //         image: "https://drive.google.com/file/d/1IWULt2EM82UcAc07Dk0JUtLni_d3MI84/view?usp=sharing",
    //         price: 66.13617798813436,
    //         cn0: 5,
    //         cn1: 21,
    //         cn2: 42,
    //         cn3: 65,
    //         cn4: 54,
    //         cn5: 43,
    //         cn6: 29,
    //         cn7: 6,
    //         cn8: 16,
    //         cn9: 48,
    //         cn10: 22,
    //         cn11: 5,
    //         cn12: 40,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //     },
    //     {
    //         id: 6,
    //         name: "ปลอกดำรองราง Clamp Stick",
    //         description: "Description for ปลอกดำรองราง Clamp Stick",
    //         image: "https://drive.google.com/file/d/1z4lfFa9iCuB0-8g-IP6xm1UHBc0m2HbN/view?usp=sharing",
    //         price: 66.136177988134,
    //         cn0: 5,
    //         cn1: 21,
    //         cn2: 42,
    //         cn3: 65,
    //         cn4: 54,
    //         cn5: 43,
    //         cn6: 29,
    //         cn7: 6,
    //         cn8: 16,
    //         cn9: 48,
    //         cn10: 22,
    //         cn11: 5,
    //         cn12: 40,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //     },
    //     {
    //         id: 7,
    //         name: "Clamp Stick Head",
    //         description: "Description for Clamp Stick Head",
    //         image: "https://drive.google.com/file/d/1ynAD4b3TPDJK73ngmvQ_yM8hcST0Qej7/view?usp=sharing",
    //         price: 66.13617798813436,
    //         cn0: 5,
    //         cn1: 21,
    //         cn2: 42,
    //         cn3: 65,
    //         cn4: 54,
    //         cn5: 43,
    //         cn6: 29,
    //         cn7: 6,
    //         cn8: 16,
    //         cn9: 48,
    //         cn10: 22,
    //         cn11: 5,
    //         cn12: 40,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //     },
    //     {
    //         id: 8,
    //         name: "ปลอกรัดแส้ Clamp Stick ขนาด 2 นิ้ว",
    //         description: "Description for ปลอกรัดแส้ Clamp Stick ขนาด 2 นิ้ว",
    //         image: "https://drive.google.com/file/d/1tlzn6IznDEc1FQm5eGMFR8IFVonHYaSi/view?usp=sharing",
    //         price: 66.13617798813436,
    //         cn0: 5,
    //         cn1: 21,
    //         cn2: 42,
    //         cn3: 65,
    //         cn4: 54,
    //         cn5: 43,
    //         cn6: 29,
    //         cn7: 6,
    //         cn8: 16,
    //         cn9: 48,
    //         cn10: 22,
    //         cn11: 5,
    //         cn12: 40,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //     },
    //     {
    //         id: 9,
    //         name: "ปลอกรัดแส้ Clamp Stick ขนาด 12 นิ้ว",
    //         description: "Description for ปลอกรัดแส้ Clamp Stick ขนาด 12 นิ้ว",
    //         image: "https://drive.google.com/file/d/1hUA7N8CwDz13wUKbdpEBB9ZBgbSI5zQU/view?usp=sharing",
    //         price: 66.13617798813436,
    //         cn0: 5,
    //         cn1: 21,
    //         cn2: 42,
    //         cn3: 65,
    //         cn4: 54,
    //         cn5: 43,
    //         cn6: 29,
    //         cn7: 6,
    //         cn8: 16,
    //         cn9: 48,
    //         cn10: 22,
    //         cn11: 5,
    //         cn12: 40,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //     },
    //     {
    //         id: 10,
    //         name: "Adjusting Screw For Clamp Stick (สั้น)",
    //         description: "Description for Adjusting Screw For Clamp Stick (สั้น)",
    //         image: "https://drive.google.com/file/d/1ThXe1XNRwxDj36iIobXhWS1JgZMSJq1F/view?usp=sharing",
    //         price: 66.13617798813436,
    //         cn0: 5,
    //         cn1: 21,
    //         cn2: 42,
    //         cn3: 65,
    //         cn4: 54,
    //         cn5: 43,
    //         cn6: 29,
    //         cn7: 6,
    //         cn8: 16,
    //         cn9: 48,
    //         cn10: 22,
    //         cn11: 5,
    //         cn12: 40,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //     },
    //     {
    //         id: 11,
    //         name: "Adjusting Screw For Clamp Stick (ยาว)",
    //         description: "Description for Adjusting Screw For Clamp Stick (ยาว)",
    //         image: "https://drive.google.com/file/d/19ygbjdPJiXlGGuzSizYfW1QIvV9KQqc6/view?usp=sharing",
    //         price: 66.13617798813436,
    //         cn0: 5,
    //         cn1: 21,
    //         cn2: 42,
    //         cn3: 65,
    //         cn4: 54,
    //         cn5: 43,
    //         cn6: 29,
    //         cn7: 6,
    //         cn8: 16,
    //         cn9: 48,
    //         cn10: 22,
    //         cn11: 5,
    //         cn12: 40,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //     },
    //     {
    //         id: 12,
    //         name: "Pole Hanger",
    //         description: "Description for Pole Hanger",
    //         image: "https://drive.google.com/file/d/1_vaujjAgKtacnn0IsQXUPxpiWbcMvUzt/view?usp=sharing",
    //         price: 66.13617798813436,
    //         cn0: 5,
    //         cn1: 21,
    //         cn2: 42,
    //         cn3: 65,
    //         cn4: 54,
    //         cn5: 43,
    //         cn6: 29,
    //         cn7: 6,
    //         cn8: 16,
    //         cn9: 48,
    //         cn10: 22,
    //         cn11: 5,
    //         cn12: 40,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //     },
    //     {
    //         id: 13,
    //         name: "หมวกปิดด้าม ขนาด 1 1/4 นิ้ว (32 mm.)",
    //         description: "Description for หมวกปิดด้าม ขนาด 1 1/4 นิ้ว (32 mm.)",
    //         image: "https://drive.google.com/file/d/1kbb-0yz97EVS9lMAMoqjSKkPww7V5RG6/view?usp=sharing",
    //         price: 66.13617798813436,
    //         cn0: 5,
    //         cn1: 21,
    //         cn2: 42,
    //         cn3: 65,
    //         cn4: 54,
    //         cn5: 43,
    //         cn6: 29,
    //         cn7: 6,
    //         cn8: 16,
    //         cn9: 48,
    //         cn10: 22,
    //         cn11: 5,
    //         cn12: 40,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //     },
    //     {
    //         id: 14,
    //         name: "Wire Cutter Joint For Al. or ACSR",
    //         description: "Description for Wire Cutter Joint For Al. or ACSR",
    //         image: "https://drive.google.com/file/d/1ThXe1XNRwxDj36iIobXhWS1JgZMSJq1F/view?usp=sharing",
    //         price: 66.13617798813436,
    //         cn0: 5,
    //         cn1: 21,
    //         cn2: 42,
    //         cn3: 65,
    //         cn4: 54,
    //         cn5: 43,
    //         cn6: 29,
    //         cn7: 6,
    //         cn8: 16,
    //         cn9: 48,
    //         cn10: 22,
    //         cn11: 5,
    //         cn12: 40,
    //         createdAt: new Date(),
    //         updatedAt: new Date()
    //     },
    // ]
    // try {
    //     const data = await prisma.sparePart.createMany({
    //         data: realSeedData
    //     });
    //     res.status(200).json(data);
    // } catch (error) {
    //     res.status(500).json({ message: error });
    // }
    res.status(200).json({ message: "Uncomment for insert seed" });
}