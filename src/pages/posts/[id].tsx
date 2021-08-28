import { Post } from '@prisma/client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { PostItem } from '../../components/posts/post-item'
import { useBackend } from '../../hooks/backend'
import { useRouter } from 'next/router'

const PostsIdPage: React.VFC<{}> = ({}) => {
  const router = useRouter()
  const { id } = router.query
  
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
