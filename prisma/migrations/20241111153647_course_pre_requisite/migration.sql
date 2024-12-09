/*
  Warnings:

  - The primary key for the `courseToPrerequisites` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `prerequisiteId` on the `courseToPrerequisites` table. All the data in the column will be lost.
  - Added the required column `preRequisiteId` to the `courseToPrerequisites` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "courseToPrerequisites" DROP CONSTRAINT "courseToPrerequisites_prerequisiteId_fkey";

-- AlterTable
ALTER TABLE "courseToPrerequisites" DROP CONSTRAINT "courseToPrerequisites_pkey",
DROP COLUMN "prerequisiteId",
ADD COLUMN     "preRequisiteId" TEXT NOT NULL,
ADD CONSTRAINT "courseToPrerequisites_pkey" PRIMARY KEY ("courseId", "preRequisiteId");

-- AddForeignKey
ALTER TABLE "courseToPrerequisites" ADD CONSTRAINT "courseToPrerequisites_preRequisiteId_fkey" FOREIGN KEY ("preRequisiteId") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
