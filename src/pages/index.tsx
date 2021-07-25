import { Post, PrismaClient } from '@prisma/client'
import React, { Props, useEffect, useState } from 'react'
import { PostsTimeline } from '../components/posts/posts-timeline'
import { useBackend } from '../hooks/backend'

const IndexPage: React.VFC<{}> = () => {
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
      {posts ? <PostsTimeline posts={posts} /> : null}
    </>
  )
}

export default IndexPage