/*
  Warnings:

  - A unique constraint covering the columns `[courseId,preRequisiteId]` on the table `courseToPrerequisites` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "courseToPrerequisites_courseId_preRequisiteId_key" ON "courseToPrerequisites"("courseId", "preRequisiteId");
