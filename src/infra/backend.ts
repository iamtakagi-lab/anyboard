import { Post } from '@prisma/client'
import axios from 'axios'
import env from '../common/env'
import { PostCreateRequest, PostCreateResponse, PostsSearchQuery } from '../../typings/struct'
import { stringify } from 'querystring'

export class Backend {

  public baseUrl: string

  constructor() {
    this.baseUrl = env.BASE_URL
  }

  get client() {
    return axios.create({
      baseURL: this.baseUrl,
      timeout: 1000 * 60,
      withCredentials: true,
    })
  }

  async getPosts() {
    const { data } = await this.client.get<Array<Post> | null>('posts')
    return data
  }

  async getPost(id: string) {
    const { data } = await this.client.get<Post | null>(`posts?id=${id}`)
    return data
  }

  async searchPosts({ keywords, anonymities, hashtags }: PostsSearchQuery) {
    const { data } = await this.client.get<Array<Post> | null>(`posts/search` + stringify({
      keywords,
      anonymities,
      hashtags
    }))
    return data
  }

  async createPost(req: PostCreateRequest) {
    const { data } = await this.client.post<PostCreateResponse>('posts/create', req)
    return data
  }
}
