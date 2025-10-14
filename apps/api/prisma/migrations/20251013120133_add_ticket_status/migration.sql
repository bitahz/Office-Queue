-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TICKET" (
    "TicketID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "TicketNumber" TEXT NOT NULL,
    "StartTime" DATETIME NOT NULL,
    "EndTime" DATETIME,
    "Date" DATETIME NOT NULL,
    "ServiceID" INTEGER NOT NULL,
    "CounterID" INTEGER,
    "status" TEXT NOT NULL DEFAULT 'WAITING',
    CONSTRAINT "TICKET_ServiceID_fkey" FOREIGN KEY ("ServiceID") REFERENCES "SERVICE" ("ServiceID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TICKET_CounterID_fkey" FOREIGN KEY ("CounterID") REFERENCES "COUNTER" ("CounterID") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_TICKET" ("CounterID", "Date", "EndTime", "ServiceID", "StartTime", "TicketID", "TicketNumber") SELECT "CounterID", "Date", "EndTime", "ServiceID", "StartTime", "TicketID", "TicketNumber" FROM "TICKET";
DROP TABLE "TICKET";
ALTER TABLE "new_TICKET" RENAME TO "TICKET";
CREATE UNIQUE INDEX "TICKET_TicketNumber_key" ON "TICKET"("TicketNumber");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
