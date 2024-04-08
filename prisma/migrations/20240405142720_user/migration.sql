/*
  Warnings:

  - You are about to drop the column `cards` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `favoriteCard` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `house` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `likedCard` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `cards`,
    DROP COLUMN `favoriteCard`,
    DROP COLUMN `house`,
    DROP COLUMN `likedCard`;
