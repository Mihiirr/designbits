/*
  Warnings:

  - You are about to drop the column `commentId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `imageSrc` on the `Source` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Comment` DROP COLUMN `commentId`,
    ADD COLUMN `parentCommentId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Source` DROP COLUMN `imageSrc`;

-- CreateTable
CREATE TABLE `SourceLogo` (
    `id` VARCHAR(191) NOT NULL,
    `sourceId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
