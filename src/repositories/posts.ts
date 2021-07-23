import { Anonymity, Post } from '@prisma/client'
import { PostCreateArgs, PostsSearchQuery } from 'typings/struct'
import { anonyRepo } from "../constants"
import { Database } from '../database'

export class PostsRepository {
  private db: Database

  constructor(db) {
    this.db = db
  }

  async getMany(): Promise<Array<Post>> {
    return new Promise(async (resolve, reject) => {
      resolve(await this.db.client.post.findMany({
        orderBy: {
          postedAt: 'desc'
        }
      }))
    })
  }

  async findById(id: Post['id']): Promise<Post | null> {
    return new Promise(async (resolve, reject) => {
      const post = await this.db.client.post.findUnique({
        where: {
          id: id
        },
      })
      resolve(post)
    })
  }

  async search({ keywords, anonymities, hashtags }: PostsSearchQuery): Promise<Array<Post> | null> {
    return new Promise(async (resolve, reject) => {
      const posts = await this.getMany()
      const searchPosts = posts.filter(v => v.text.includes(keywords)).filter(v => v.text.includes(hashtags)).filter(v => v.authorId.toLocaleString().includes(anonymities));
      resolve(searchPosts)
    })
  }

  async create({ text, address }: PostCreateArgs): Promise<Post> {
    return new Promise(async (resolve, reject) => {
      let anonymity = await anonyRepo.findByAddress(address)
      if (anonymity == null) {
        anonymity = await anonyRepo.create({ address })
      }
      const post = await this.db.client.post.create({
        data: {
          authorId: anonymity.id,
          text: text
        },
      })
      resolve(post)
    })
  }
}