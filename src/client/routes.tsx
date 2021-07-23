import React from "react"
import Rocon from "rocon/react"
import { IndexPage } from "./pages"
import { PostsPage } from "./pages/posts"
import { PostsIdPage } from "./pages/posts/id"
import { PostsSearchQueryPage } from "./pages/posts/search/query"

export const postsRoute = Rocon.Path()
  .any("id", {
    action: ({ id }) => <PostsIdPage id={id} />,
  })
  .route("search")
  .exact({
    action: () => <PostsPage />
  })

export const postsSearchRoute = postsRoute._.search
  .attach(Rocon.Search("keywords", { searchKey: "keywords" }))
  .attach(Rocon.Search("anominities", { searchKey: "anominities" }))
  .attach(Rocon.Search("hashtags", { searchKey: "hashtags" }))
  .action(({ keywords, anominities, hashtags }) => <PostsSearchQueryPage keywords={keywords} anonymities={anominities} hashtags={hashtags} />);

export const routes = Rocon.Path()
  .exact({
    action: () => <IndexPage />,
  })
  .route("posts", (route) => route.attach(postsRoute))

