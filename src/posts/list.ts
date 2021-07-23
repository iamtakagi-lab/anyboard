import { postsRepo } from "../constants"

export default async (ctx) => {
    const posts = await postsRepo.getMany()
    ctx.body = JSON.stringify(posts)
}