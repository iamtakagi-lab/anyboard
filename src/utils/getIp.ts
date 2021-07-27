import { NextApiRequest } from 'next'

export default async (req: NextApiRequest) => {
    return req.connection.remoteAddress
}