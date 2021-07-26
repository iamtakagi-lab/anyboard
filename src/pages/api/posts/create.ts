import { NextApiRequest, NextApiResponse } from 'next'
import { useAnonymitiesRepo, usePostsRepo } from "../../../hooks/repositories"
import getIp from "../../../utils/getIp"
import getUserAgent from '../../../utils/getUserAgent'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        Promise.all([
            getIp(req),
            getUserAgent(req)
        ]).then(([ip, userAgent]) => {
            usePostsRepo().create({
                ipAddress: ip,
                userAgent: userAgent,
                text: req.body.text,
                replyTo: req.body.replyTo
            }).then(async() => {
                console.log(await useAnonymitiesRepo().getMany())
                res.json({ success: true })
            })
        })
    }
}