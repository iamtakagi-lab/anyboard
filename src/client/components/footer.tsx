import * as React from 'react'
import { FiGithub } from 'react-icons/fi'

export const Footer: React.VFC<{}> = () => (
  <footer className="desc w-full my-6 space-y-1 mt-7">
    <a
      className="text-sm underline"
      href="https://github.com/iamtakagi/anonytify"
    >
      View code of this app
      <FiGithub className="inline block ml-1" />
    </a>
  </footer>
)
