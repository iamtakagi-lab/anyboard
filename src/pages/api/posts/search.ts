import { usePostsRepo } from "../../../hooks/repositories"

export default async (req, res) => {
    const { keywords, anonymities, hashtags } = req.query
    const posts = await usePostsRepo().search({
        keywords: keywords.toLocaleString(),
        anonymities: anonymities.toLocaleString(),
        hashtags: hashtags.toLocaleString()
    })
    res.json(posts)
}