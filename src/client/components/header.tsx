import * as React from 'react'
import { Link } from 'rocon/react'
import { routes } from '../routes'
import { PostCreateButton } from './posts/post-create-button'
import ThemeSwitch from './theme-switch'

export const Header: React.VFC<{}> = () => (
  <header className="flex">
    <div className="desc w-full my-6 space-y-1">
      <Link route={routes.exactRoute} className="hover:text-gray-300 text-xl">
        anony
      </Link>
      <Link route={routes._.posts} className="hover:text-gray-300">
        <div className="flex items-center justify-start my-1">投稿一覧</div>
      </Link>
    </div>
    <div className="mt-5">
      <PostCreateButton/>
    </div>
  </header>
)
