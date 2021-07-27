import { Post } from "@prisma/client";
import { MessageEmbed, WebhookClient } from "discord.js";

import env from "../common/env";

export default async (post: Post) => {
    if (env.DISCORD_WEBHOOK_URL.length > 0) {
        const splitUrl = env.DISCORD_WEBHOOK_URL.split('/')
        const webhook = new WebhookClient(splitUrl[5], splitUrl[6])
        const embed = new MessageEmbed()
        embed.setTitle("[" + post.authorId + "さんが書き込みました](" + env.BASE_URL + "/posts/" + post.id)
        const replies = post.replyTo.split(",")
        if (replies.length > 0) {
            let rep = ""
            replies.map((id) => {
                rep += "[>>" + id + "](" + env.BASE_URL + "/posts/" + id + ")"
            })
            embed.addField("返信先", rep, false)
        }
        embed.addField("内容", post.text, false)
        return await webhook.send(embed)
    }
}