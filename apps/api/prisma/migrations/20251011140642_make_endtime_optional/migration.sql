-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TICKET" (
    "TicketID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "StartTime" DATETIME NOT NULL,
    "EndTime" DATETIME,
    "Date" DATETIME NOT NULL,
    "ServiceID" INTEGER NOT NULL,
    CONSTRAINT "TICKET_ServiceID_fkey" FOREIGN KEY ("ServiceID") REFERENCES "SERVICE" ("ServiceID") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_TICKET" ("Date", "EndTime", "ServiceID", "StartTime", "TicketID") SELECT "Date", "EndTime", "ServiceID", "StartTime", "TicketID" FROM "TICKET";
DROP TABLE "TICKET";
ALTER TABLE "new_TICKET" RENAME TO "TICKET";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
