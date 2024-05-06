import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = {
        name: 'John Doe',
        age: 30,
        occupation: 'Software Developer'
    };

    res.status(200).json(data);
}