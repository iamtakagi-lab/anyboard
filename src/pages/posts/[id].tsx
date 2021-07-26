import { Post } from '@prisma/client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { PostItem } from '../../components/posts/post-item'
import { useBackend } from '../../hooks/backend'
import { usePostsRepo } from '../../hooks/repositories'

export const getStaticProps = async ({ params: { id } }) => {
  return {
    props: {
      id
    }
  }
}

export const getStaticPaths = async () => {
  const posts = await usePostsRepo().getMany()
  const paths = posts.map(post => `/posts/${post.id.toString()}`)
  return { paths, fallback: true }
}

const PostsIdPage: React.VFC<{ id: string }> = ({ id }) => {

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
