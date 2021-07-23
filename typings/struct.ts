import { Anonymity, Post } from '@prisma/client'

export type AnonymityCreateArgs = {
  address: Anonymity['address']
}

export type PostCreateRequest = {
  text: Post['text']
}

export type PostCreateResponse = {
  success: Boolean
}

export type PostCreateArgs = {
  address: Anonymity['address']
  text: Post['text']
}

export type PostsSearchQuery = {
  keywords?: string
  anonymities?: string
  hashtags?: string
}
