import { NextApiRequest } from "next";

export default async (req: NextApiRequest) => {
    return req ? req.headers['user-agent'] : navigator.userAgent
}