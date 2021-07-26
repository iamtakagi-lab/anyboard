import { Post } from '@prisma/client'
import * as React from 'react'
import Link from 'next/link'

export const PostItem: React.VFC<{ post: Post }> = ({ post }) => (
  <>
    <div className="m-5 border-b">

      <Link href={`/posts/${post.id}`}>
        <p className="hover:text-gray-300 cursor-pointer">
          ID: {post.id}
        </p>
      </Link>
      <p>{post.authorId} さん</p>
      <p>{post.text}</p>
      <p>{post.postedAt}</p>
    </div>
  </>
)
