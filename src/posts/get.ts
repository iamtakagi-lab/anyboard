import { postsRepo } from "../constants"

export default async (ctx) => {
    const id = ctx.params.id
    const post = await postsRepo.findById(Number(id))
    post == null ? ctx.body = null : ctx.body = post 
}