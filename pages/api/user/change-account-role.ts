
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { id, newRole } = req.body;
        const data = await prisma.user.update({
            where: {
                id
            },
            data: {
                role: newRole
            }
        });
        res.status(200).json(data);
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}