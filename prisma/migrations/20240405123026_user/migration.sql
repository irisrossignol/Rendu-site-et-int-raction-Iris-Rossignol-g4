/*
  Warnings:

  - Added the required column `cards` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `favoriteCard` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `house` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `likedCard` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `cards` INTEGER NOT NULL,
    ADD COLUMN `favoriteCard` INTEGER NOT NULL,
    ADD COLUMN `house` VARCHAR(191) NOT NULL,
    ADD COLUMN `likedCard` INTEGER NOT NULL;
