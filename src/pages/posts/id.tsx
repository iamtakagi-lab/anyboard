import { Post } from '@prisma/client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { PostPageContent } from '../../components/posts/post-page-content'
import { useBackend } from '../../hooks/backend'

export const PostsIdPage: React.VFC<{ id: string }> = ({ id }) => {

  const [post, setPost] = useState<Post | null>()
  const backend = useBackend()

  useEffect(() => {
    backend.getPost(id).then((data) => {
      setPost(data)
    })
  }, [])

  return (
    <>
      {
        post ? (
          <PostPageContent post={post}/>
        ) : null
      }
    </>
  )
}
