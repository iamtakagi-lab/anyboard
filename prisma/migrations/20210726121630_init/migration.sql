/*
  Warnings:

  - You are about to drop the column `address` on the `Anonymity` table. All the data in the column will be lost.
  - You are about to drop the column `userAgents` on the `Anonymity` table. All the data in the column will be lost.
  - Added the required column `ipAddress` to the `Anonymity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userAgent` to the `Anonymity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Anonymity" DROP COLUMN "address",
DROP COLUMN "userAgents",
ADD COLUMN     "ipAddress" TEXT NOT NULL,
ADD COLUMN     "userAgent" TEXT NOT NULL;
