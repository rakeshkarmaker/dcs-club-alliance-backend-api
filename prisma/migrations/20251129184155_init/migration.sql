/*
  Warnings:

  - You are about to drop the column `is_public` on the `Event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "is_public",
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "is_free" BOOLEAN NOT NULL DEFAULT true;
