import { Post } from '@prisma/client'
import * as React from 'react'
import { Link } from 'rocon/react'
import { postsRoute } from '../../routes'

export const PostPageContent: React.VFC<{ post: Post }> = ({ post }) => (
    <>
        <Link route={postsRoute.anyRoute}
            match={{ id: post.id.toString() }}
            className="hover:text-gray-300">
            ID: {post.id}
        </Link>
        <p>{post.authorId} さん</p>
        <p>{post.text}</p>
        <p>{post.postedAt}</p>
    </>
)
