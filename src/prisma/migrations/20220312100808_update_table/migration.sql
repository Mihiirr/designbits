/*
  Warnings:

  - A unique constraint covering the columns `[postId,type,size]` on the table `VideoSource` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `VideoSource` ADD COLUMN `size` ENUM('THUMBNAIL_240P', 'SMALL_360P', 'MEDIUM_480P', 'LARGE_720P', 'HIGH_RES_1080P') NOT NULL DEFAULT 'MEDIUM_480P';

-- CreateIndex
CREATE UNIQUE INDEX `VideoSource_postId_type_size_key` ON `VideoSource`(`postId`, `type`, `size`);
