import { Post } from "@prisma/client";
import { MessageEmbed, WebhookClient } from "discord.js";

import env from "../common/env";

export default async (post: Post) => {
    if (env.DISCORD_WEBHOOK_URL.length > 0) {
        const splitUrl = env.DISCORD_WEBHOOK_URL.split('/')
        const webhook = new WebhookClient(splitUrl[5], splitUrl[6])
        const embed = new MessageEmbed()
        embed.setTitle(post.authorId + "さんが書き込みました")
        embed.setColor("#7CFC00")
        embed.addField("ページリンク", env.BASE_URL + "posts/" + post.id, false)
        if (post.replyTo.length > 0) {
            let rep = ""
            const replies = post.replyTo.split(",")
            replies.map((id) => {
                rep += "[>>" + id + "](" + env.BASE_URL + "/posts/" + id + ") "
            })
            embed.addField("返信先", rep, false)
        }
        embed.addField("内容", post.text, false)
        return await webhook.send(embed)
    }
}
