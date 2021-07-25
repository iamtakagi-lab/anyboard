import * as React from 'react'
import { PostCreateButton } from './posts/post-create-button'
import ThemeSwitch from './theme-switch'

export const Header: React.VFC<{}> = () => (
  <header className="flex">
    <div className="desc w-full my-6 space-y-1">
      <h1 className="hover:text-gray-300 text-xl">
        anyboard
      </h1>
      <p className="hover:text-gray-300">
        <div className="flex items-center justify-start my-1">投稿一覧</div>
      </p>
    </div>
    <div className="mt-5">
      <PostCreateButton/>
    </div>
  </header>
)
