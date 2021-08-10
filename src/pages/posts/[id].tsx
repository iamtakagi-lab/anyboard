import { Post } from '@prisma/client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { PostItem } from '../../components/posts/post-item'
import { useBackend } from '../../hooks/backend'

export const getInitialProps = async ({query}) => {
  const { id } = query
  return {
    id
  }
}

const PostsIdPage: React.VFC<{id}> = ({id}) => {
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
          <PostItem post={post}/>
        ) : null
      }
    </>
  )
}

export default PostsIdPage
