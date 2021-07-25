import { Post } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import { PostsTimeline } from '../../components/posts/posts-timeline'
import { useBackend } from '../../hooks/backend'

export const PostsPage: React.VFC<{}> = () => {
  const backend = useBackend()
  const [posts, setPosts] = useState<Array<Post>>()

  useEffect(() => {
      //初期描画
      backend.getPosts().then((data) => {
          setPosts(data)
      })
      //10秒毎に取得
      const interval = setInterval(() => {
        backend.getPosts().then((data) => {
              setPosts(data)
          })
      }, 1000 * 10);
      return () => clearInterval(interval);
  }, [])


  return (
    <>
      {posts ? <PostsTimeline posts={posts}/> : null}
    </>
  )
}