/*
  Warnings:

  - You are about to drop the column `payment_id` on the `order` table. All the data in the column will be lost.
  - You are about to drop the `payment` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `email` to the `verification_code` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `order_payment_id_fkey`;

-- DropForeignKey
ALTER TABLE `payment` DROP FOREIGN KEY `payment_customer_id_fkey`;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `payment_id`;

-- AlterTable
ALTER TABLE `shipment` MODIFY `shipment_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `verification_code` ADD COLUMN `email` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `payment`;
