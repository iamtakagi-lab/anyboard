import { Post } from '@prisma/client'
import * as React from 'react'

import { PostItem } from './post-item'

export const PostsTimeline: React.VFC<{posts: Array<Post>}> = ({posts}) => {

    return (
        <>
            {posts ? posts.map((post) => {
                return <PostItem post={post} />
            }) : null}
        </>
    )
}
