/*
  Warnings:

  - The primary key for the `Industry` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Industry` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `A` on the `_IndustryToPost` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - A unique constraint covering the columns `[slug]` on the table `Industry` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Industry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Industry` DROP PRIMARY KEY,
    ADD COLUMN `slug` VARCHAR(191) NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `_IndustryToPost` MODIFY `A` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Industry_slug_key` ON `Industry`(`slug`);
