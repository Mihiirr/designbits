-- CreateTable
CREATE TABLE `Industry` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `color` ENUM('LIGHT_GRAY', 'GRAY', 'BROWN', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'PURPLE', 'PINK', 'RED') NOT NULL DEFAULT 'LIGHT_GRAY',
    `updatedAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `notionTagId` VARCHAR(191) NULL,

    UNIQUE INDEX `Industry_name_key`(`name`),
    UNIQUE INDEX `Industry_notionTagId_key`(`notionTagId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_IndustryToPost` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_IndustryToPost_AB_unique`(`A`, `B`),
    INDEX `_IndustryToPost_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
