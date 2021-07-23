-- CreateTable
CREATE TABLE "Anonymity" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "address" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "postedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "replyTo" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Anonymity" ADD COLUMN     "userAgents" TEXT[];

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "content",
ADD COLUMN     "text" TEXT NOT NULL,
ALTER COLUMN "replyTo" DROP NOT NULL;