-- AlterTable
ALTER TABLE `Post` ADD COLUMN `notionSourceId` VARCHAR(191) NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);