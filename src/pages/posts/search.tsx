// /posts/search?keywords=a,b&anominities=12,17&hashtags=#japan,#usa

import { Post } from '@prisma/client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { PostsTimeline } from '../../components/posts/posts-timeline'
import { useBackend } from '../../hooks/backend'

export const PostsSearchQueryPage: React.VFC<{ keywords: string, anonymities: string, hashtags: string}> = ({ keywords, anonymities, hashtags }) => {

  const [posts, setPosts] = useState<Array<Post>>()
  const backend = useBackend()

  useEffect(() => {
    backend.searchPosts({keywords, anonymities, hashtags}).then((data) => {
      setPosts(data)
    })
  }, [])

  return (
    <>
      {
        posts ? (
          <PostsTimeline posts={posts}/>
        ) : null
      }
    </>
  )
}
