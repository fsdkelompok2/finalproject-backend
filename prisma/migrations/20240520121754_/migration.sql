/*
  Warnings:

  - You are about to drop the column `shopping_preference` on the `product` table. All the data in the column will be lost.
  - Added the required column `sex_cat` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `shopping_preference`,
    ADD COLUMN `sex_cat` VARCHAR(255) NOT NULL;
