import { Post } from "@prisma/client";
import { WebhookClient } from "discord.js";
import { resolve } from "path/posix";
import env from "../common/env";

export default async (post: Post) => {
    if (env.DISCORD_WEBHOOK_URL.length > 0) {
        const splitUrl = env.DISCORD_WEBHOOK_URL.split('/')
        const webhook = new WebhookClient(splitUrl[5], splitUrl[6])
        let message
        message += "-------------------------------\n"
        message += "[" + post.authorId + "さんが書き込みました](" + env.BASE_URL + "/posts/" + post.id + "\n"
        const replies = post.replyTo.split(",")
        if (replies.length > 0) {
            replies.map((id) => {
                message += "[>>" + id + "](" + env.BASE_URL + "/posts/" + id + ") "
            })
            message += "への返信\n"
        }
        message += post.text + "\n"
        message += post.postedAt
        message += "-------------------------------"
        return await webhook.send(message)
    }
}