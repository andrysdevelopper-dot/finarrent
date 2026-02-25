-- CreateTable
CREATE TABLE "DemandeFinancement" (
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
    "adminNotes" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "DemandeFinancement_reference_key" ON "DemandeFinancement"("reference");
