/*
  Warnings:

  - You are about to drop the `_CartToProduct_Details` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_CartToProduct_Details` DROP FOREIGN KEY `_CartToProduct_Details_A_fkey`;

-- DropForeignKey
ALTER TABLE `_CartToProduct_Details` DROP FOREIGN KEY `_CartToProduct_Details_B_fkey`;

-- AlterTable
ALTER TABLE `Product_Details` ADD COLUMN `cart_id` INTEGER NULL;

-- DropTable
DROP TABLE `_CartToProduct_Details`;

-- AddForeignKey
ALTER TABLE `Product_Details` ADD CONSTRAINT `Product_Details_cart_id_fkey` FOREIGN KEY (`cart_id`) REFERENCES `cart`(`cart_id`) ON DELETE SET NULL ON UPDATE CASCADE;
