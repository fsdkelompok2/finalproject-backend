/*
  Warnings:

  - Added the required column `img_thumb` to the `Product_Details` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product_details` ADD COLUMN `img_thumb` VARCHAR(255) NOT NULL;
