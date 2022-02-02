/*
  Warnings:

  - Added the required column `previewUrl` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `videoUrl` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Post` ADD COLUMN `previewUrl` VARCHAR(191) NOT NULL,
    ADD COLUMN `videoUrl` VARCHAR(191) NOT NULL;
