import { Anonymity, Post } from '@prisma/client'

export type AnonymityCreateArgs = {
  address: Anonymity['address']
}

export type PostCreateRequest = {
  text: Post['text']
  replyTo: Post['replyTo']
}

export type PostCreateResponse = {
  success: Boolean
}

export type PostCreateArgs = {
  address: Anonymity['address']
  text: Post['text']
  replyTo: Post['replyTo']
}

export type PostsSearchQuery = {
  keywords?: string[]
  anonymities?: number[]
  hashtags?: string[]
}
