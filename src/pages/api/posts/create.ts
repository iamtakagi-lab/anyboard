import { NextApiRequest, NextApiResponse } from 'next'
import env from '../../../common/env'
import { useAnonymitiesRepo, usePostsRepo } from "../../../hooks/repositories"
import getIp from "../../../utils/getIp"
import getUserAgent from '../../../utils/getUserAgent'
import sendDiscord from '../../../utils/sendDiscord'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        Promise.all([
            getIp(req),
            getUserAgent(req)
        ]).then(([ipAddress, userAgent]) => {
            usePostsRepo().create({
                ipAddress: ipAddress.toString(),
                userAgent: userAgent,
                text: req.body.text,
                replyTo: req.body.replyTo
            }).then(async (post) => {
                sendDiscord(post).then(() => {
                    res.json({ success: true })
                })
            })
        })
    }
}
