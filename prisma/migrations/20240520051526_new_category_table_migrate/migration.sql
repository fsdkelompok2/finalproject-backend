/*
  Warnings:

  - You are about to alter the column `category_name` on the `category` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - A unique constraint covering the columns `[category_name]` on the table `category` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `category` MODIFY `category_name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `category_category_name_key` ON `category`(`category_name`);
