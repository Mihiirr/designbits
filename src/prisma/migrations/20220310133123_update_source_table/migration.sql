/*
  Warnings:

  - A unique constraint covering the columns `[sourceId,type,size]` on the table `SourceLogo` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Source` ADD COLUMN `notionSourceId` VARCHAR(191) NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `NotionSourceSeedLog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `notionPageId` VARCHAR(191) NOT NULL,
    `itemId` VARCHAR(191) NOT NULL,
    `itemType` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `SourceLogo_sourceId_type_size_key` ON `SourceLogo`(`sourceId`, `type`, `size`);
