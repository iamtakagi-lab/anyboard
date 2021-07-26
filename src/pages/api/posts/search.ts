import { NextApiRequest, NextApiResponse } from 'next'
import { usePostsRepo } from "../../../hooks/repositories"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { keywords, anonymities, hashtags } = req.query
    const posts = await usePostsRepo().search({
        keywords: keywords.toLocaleString(),
        anonymities: anonymities.toLocaleString(),
        hashtags: hashtags.toLocaleString()
    })
    res.json(posts)
}