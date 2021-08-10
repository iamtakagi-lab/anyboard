import { Post } from '@prisma/client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { PostItem } from '../../components/posts/post-item'
import { useBackend } from '../../hooks/backend'

export const getInitialProps = ({query}) => {
  return {
    query
  }
}

const PostsIdPage: React.VFC<{query}> = ({query}) => {
  const [post, setPost] = useState<Post | null>()
  const backend = useBackend()

  useEffect(() => {
    backend.getPost(query.id).then((data) => {
      setPost(data)
    })
  }, [])

  return (
    <>
      {
        post ? (
          <PostItem post={post}/>
        ) : null
      }
    </>
  )
}

export default PostsIdPage
