import { Post } from '@prisma/client'
import * as React from 'react'

import { PostItem } from './post-item'

export const PostsTimeline: React.VFC<{ posts: Array<Post> }> = ({ posts }) => {

    return (
        <>
            {posts ? posts.map((post, i) => {
                return (
                    <div className="m-5 border-b">
                        <PostItem key={i} post={post} />
                    </div>
                )
            }) : null}
        </>
    )
}
