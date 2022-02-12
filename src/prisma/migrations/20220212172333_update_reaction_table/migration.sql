/*
  Warnings:

  - A unique constraint covering the columns `[postId,userId]` on the table `PostReaction` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `PostReaction_postId_userId_key` ON `PostReaction`(`postId`, `userId`);
