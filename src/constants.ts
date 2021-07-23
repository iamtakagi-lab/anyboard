import { Database } from "./database"
import { AnonymitiesRepository } from "./repositories/anonymities"
import { PostsRepository } from "./repositories/posts"

const db = new Database()
export const postsRepo = new PostsRepository(db)
export const anonyRepo = new AnonymitiesRepository(db)