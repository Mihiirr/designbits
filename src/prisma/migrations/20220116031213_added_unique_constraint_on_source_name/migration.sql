/*
  Warnings:

  - You are about to drop the column `createdBy` on the `Post` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Source` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `createdById` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Post` DROP COLUMN `createdBy`,
    ADD COLUMN `createdById` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Source_name_key` ON `Source`(`name`);
