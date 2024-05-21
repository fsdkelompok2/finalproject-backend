/*
  Warnings:

  - You are about to drop the column `img_thumb` on the `product_details` table. All the data in the column will be lost.
  - Added the required column `product_thumb` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `product_thumb` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `product_details` DROP COLUMN `img_thumb`;