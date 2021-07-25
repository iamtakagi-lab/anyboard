import { PrismaClient } from "@prisma/client"
import { usePostsRepo } from "../../../hooks/repositories"

export default async (req, res) => {
    const { id } = req.query
    const post = await usePostsRepo().findById(Number(id))
    post == null ? res.status = 404 : res.json(post)
}