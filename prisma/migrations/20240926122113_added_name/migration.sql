/*
  Warnings:

  - Added the required column `name` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL
);
INSERT INTO "new_Project" ("id", "slug") SELECT "id", "slug" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
CREATE UNIQUE INDEX "Project_name_key" ON "Project"("name");
CREATE UNIQUE INDEX "Project_slug_key" ON "Project"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
