/*
  Warnings:

  - You are about to drop the column `EndTime` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `StartTime` on the `Ticket` table. All the data in the column will be lost.
  - Added the required column `startTime` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ticket" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "startTime" DATETIME NOT NULL,
    "endTime" DATETIME,
    "serviceId" INTEGER NOT NULL,
    "counterId" INTEGER,
    "status" TEXT NOT NULL DEFAULT 'WAITING',
    CONSTRAINT "Ticket_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Ticket_counterId_fkey" FOREIGN KEY ("counterId") REFERENCES "Counter" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Ticket" ("counterId", "id", "serviceId", "status") SELECT "counterId", "id", "serviceId", "status" FROM "Ticket";
DROP TABLE "Ticket";
ALTER TABLE "new_Ticket" RENAME TO "Ticket";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
