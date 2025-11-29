/*
  Warnings:

  - You are about to drop the column `last_logged_in` on the `UserAuth` table. All the data in the column will be lost.
  - You are about to drop the column `last_login_device` on the `UserAuth` table. All the data in the column will be lost.
  - You are about to drop the column `last_login_ip` on the `UserAuth` table. All the data in the column will be lost.
  - You are about to drop the column `login_count` on the `UserAuth` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserAuth" DROP COLUMN "last_logged_in",
DROP COLUMN "last_login_device",
DROP COLUMN "last_login_ip",
DROP COLUMN "login_count";

-- CreateTable
CREATE TABLE "LoginActivity" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "loggedIn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ipAddress" TEXT,
    "device" TEXT,

    CONSTRAINT "LoginActivity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LoginActivity" ADD CONSTRAINT "LoginActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
