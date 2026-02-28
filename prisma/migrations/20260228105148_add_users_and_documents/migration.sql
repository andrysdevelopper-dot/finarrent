-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "auth0Id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "role" TEXT NOT NULL DEFAULT 'client',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "filename" TEXT NOT NULL,
    "originalName" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "mimeType" TEXT,
    "type" TEXT NOT NULL DEFAULT 'autre',
    "fileSize" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "demandeId" TEXT NOT NULL,
    CONSTRAINT "Document_demandeId_fkey" FOREIGN KEY ("demandeId") REFERENCES "DemandeFinancement" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DemandeFinancement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "reference" TEXT NOT NULL,
    "requestType" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "siren" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "equipmentType" TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT,
    "status" TEXT NOT NULL DEFAULT 'en_attente',
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "adminNotes" TEXT,
    "userId" TEXT,
    CONSTRAINT "DemandeFinancement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_DemandeFinancement" ("adminNotes", "amount", "companyName", "createdAt", "email", "equipmentType", "firstName", "id", "ipAddress", "lastName", "message", "phone", "reference", "requestType", "sector", "siren", "status", "updatedAt", "userAgent") SELECT "adminNotes", "amount", "companyName", "createdAt", "email", "equipmentType", "firstName", "id", "ipAddress", "lastName", "message", "phone", "reference", "requestType", "sector", "siren", "status", "updatedAt", "userAgent" FROM "DemandeFinancement";
DROP TABLE "DemandeFinancement";
ALTER TABLE "new_DemandeFinancement" RENAME TO "DemandeFinancement";
CREATE UNIQUE INDEX "DemandeFinancement_reference_key" ON "DemandeFinancement"("reference");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "User_auth0Id_key" ON "User"("auth0Id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
