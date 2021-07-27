import { Post } from '@prisma/client'
import * as React from 'react'
import Link from 'next/link'

export const PostItem: React.VFC<{ post: Post }> = ({ post }) => (
  <>

    <Link href={`/posts/${post.id}`}>
      <p className="hover:text-gray-300 cursor-pointer">
        Post ID: {post.id}
      </p>
    </Link>
    <p>書き込んだ人: {post.authorId}さん</p>
    <p>
      {post.replyTo.length > 0 ? 
        post.replyTo.split(',').map((id) => {
          return (
            <Link href={`/posts/${id}`}>
              <p className="hover:text-gray-300 cursor-pointer mr-2 inline">
              {'>>'}{id}
              </p>
            </Link>
          )
        }): null}</p>
    <p>{post.text}</p>
    <p>{post.postedAt}</p>
  </>
)
