/*
  Warnings:

  - The primary key for the `category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category_id` on the `category` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `category` DROP PRIMARY KEY,
    DROP COLUMN `category_id`,
    ADD PRIMARY KEY (`category_name`);
