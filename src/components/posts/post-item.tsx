import { Post } from '@prisma/client'
import * as React from 'react'

export const PostItem: React.VFC<{ post: Post }> = ({ post }) => (
  <>
    <div className="m-5 border-b">

      <p className="hover:text-gray-300"> 
        ID: {post.id}
      </p>
      <p>{post.authorId} さん</p>
      <p>{post.text}</p>
      <p>{post.postedAt}</p>
    </div>
  </>
)
