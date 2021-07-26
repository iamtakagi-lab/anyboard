import { NextApiRequest, NextApiResponse } from 'next'
import { usePostsRepo } from "../../../hooks/repositories"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.query.id != null) {
    const post = await usePostsRepo().findById(Number(req.query.id))
    return post == null ? res.statusCode = 404 : res.json(post)
  }
  const posts = await usePostsRepo().getMany()
  res.json(posts)
}