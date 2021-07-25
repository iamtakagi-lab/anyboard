import { usePostsRepo } from "../../../hooks/repositories"

export default async (req, res) => {
  const posts = await usePostsRepo().getMany()
  res.json(posts)
}