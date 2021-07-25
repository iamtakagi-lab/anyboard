import { AnonymitiesRepository } from '../repositories/anonymities'
import { PostsRepository } from '../repositories/posts'
import { useDatabase } from './database'

export const usePostsRepo = () => {
    return new PostsRepository(useDatabase())
}

export const useAnonymitiesRepo = () => {
    return new AnonymitiesRepository(useDatabase())
}