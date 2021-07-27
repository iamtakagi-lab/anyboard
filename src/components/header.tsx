import * as React from 'react'
import { PostCreateButton } from './posts/post-create-button'
import Link from 'next/link'

export const Header: React.VFC<{}> = () => (
  <header className="flex">
    <div className="desc w-full my-6 space-y-1">
      <Link href="/">
        <p className="hover:text-gray-300 text-xl cursor-pointer">
          anyboard
        </p>
      </Link>
      <p className="hover:text-gray-300">
        <Link href="/posts"> 
        <p className="flex items-center justify-start my-1 cursor-pointer">投稿を見る 
        </p> 
        </Link>
      </p>
    </div>
    <div className="mt-5">
      <PostCreateButton />
    </div>
  </header>
)
