import getIp from "../utils/getIp"
import { postsRepo } from "../constants"

export default async (ctx) => {
    console.log(ctx.request.body)
    const ip = await getIp()
    const post = await postsRepo.create({
        address: ip,
        text: ctx.request.body.text
    })
    ctx.status = 201
    ctx.body = {
        success: true
    }
}