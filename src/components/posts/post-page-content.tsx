import { Post } from '@prisma/client'
import * as React from 'react'

export const PostPageContent: React.VFC<{ post: Post }> = ({ post }) => (
    <>
        <p className="hover:text-gray-300">
            ID: {post.id}
        </p>
        <p>{post.authorId} さん</p>
        <p>{post.text}</p>
        <p>{post.postedAt}</p>
    </>
)
