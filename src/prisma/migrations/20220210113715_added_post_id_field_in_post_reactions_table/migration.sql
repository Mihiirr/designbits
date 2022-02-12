/*
  Warnings:

  - Added the required column `postId` to the `PostReaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `PostReaction` ADD COLUMN `postId` VARCHAR(191) NOT NULL;
