import { PrismaClient } from "@prisma/client"
import { usePostsRepo } from "../../../hooks/repositories"
import getIp from "../../../utils/getIp"

export default async (req, res) => {
    if (req.method === 'POST') {
        getIp().then((ip) => {
            usePostsRepo().create({
                address: ip,
                text: req.body.text
            }).then(() => {
                res.json({ success: true })
            })
        })
    }
}