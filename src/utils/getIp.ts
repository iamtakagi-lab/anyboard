import { NextApiRequest } from 'next'

export default async (req: NextApiRequest) => {
    return req?.headers['x-real-ip'] || req?.headers['x-forwarded-for'];
}

