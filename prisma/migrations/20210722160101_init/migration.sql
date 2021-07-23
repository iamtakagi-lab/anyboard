/*
  Warnings:

  - You are about to drop the column `content` on the `Post` table. All the data in the column will be lost.
  - Added the required column `text` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Anonymity" ADD COLUMN     "userAgents" TEXT[];

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "content",
ADD COLUMN     "text" TEXT NOT NULL,
ALTER COLUMN "replyTo" DROP NOT NULL;
