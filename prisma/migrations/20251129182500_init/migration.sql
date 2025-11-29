/*
  Warnings:

  - Added the required column `mission` to the `Club` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vision` to the `Club` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Club" ADD COLUMN     "banner" TEXT,
ADD COLUMN     "logo" TEXT,
ADD COLUMN     "mission" TEXT NOT NULL,
ADD COLUMN     "vision" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "form_link" TEXT;
