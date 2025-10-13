/*
  Warnings:

  - You are about to drop the `COUNTER` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `COUNTER_SERVICE` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SERVICE` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TICKET` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "COUNTER";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "COUNTER_SERVICE";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "SERVICE";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "TICKET";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Counter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Service" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "avgServiceTime" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "CounterService" (
    "counterId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,

    PRIMARY KEY ("counterId", "serviceId"),
    CONSTRAINT "CounterService_counterId_fkey" FOREIGN KEY ("counterId") REFERENCES "Counter" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CounterService_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "StartTime" DATETIME NOT NULL,
    "EndTime" DATETIME,
    "serviceId" INTEGER NOT NULL,
    "counterId" INTEGER,
    "status" TEXT NOT NULL DEFAULT 'WAITING',
    CONSTRAINT "Ticket_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Ticket_counterId_fkey" FOREIGN KEY ("counterId") REFERENCES "Counter" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Counter_number_key" ON "Counter"("number");
