-- CreateEnum
CREATE TYPE "AgeCategory" AS ENUM ('U11', 'U13', 'U15', 'U17', 'U19', 'SENIOR');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('SINGLES', 'DOUBLES', 'MIXED_DOUBLES');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "OrganisationType" AS ENUM ('SCHOOL', 'COLLEGE', 'ORGANISATION');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'CREATED', 'AUTHORIZED', 'CAPTURED', 'FAILED', 'REFUNDED');

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "razorpayPaymentId" TEXT,
    "razorpayOrderId" TEXT,
    "razorpaySignature" TEXT,
    "amount" INTEGER NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'INR',
    "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "paymentMethod" TEXT,
    "description" TEXT,
    "playerId" TEXT,
    "tournamentPlayerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RegisteredPlayer" (
    "id" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "placeOfBirth" TEXT NOT NULL,
    "identificationMarks" TEXT NOT NULL,
    "imageLink" TEXT NOT NULL,
    "dobProofLink" TEXT NOT NULL,
    "communicationAddress" TEXT NOT NULL,
    "pinCode" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contactNumber" TEXT NOT NULL,
    "organisationType" "OrganisationType" NOT NULL,
    "organisationName" TEXT NOT NULL,
    "organisationEmail" TEXT NOT NULL,
    "organisationContact" TEXT NOT NULL,
    "organisationAddress" TEXT NOT NULL,
    "nameOfContact" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL,
    "fatherContact" TEXT NOT NULL,
    "motherName" TEXT NOT NULL,
    "motherContact" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RegisteredPlayer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TournamentPlayer" (
    "id" TEXT NOT NULL,
    "player1Name" TEXT NOT NULL,
    "player1Gender" "Gender" NOT NULL,
    "player1Email" TEXT NOT NULL,
    "player1Phone" TEXT NOT NULL,
    "player1DateOfBirth" TEXT NOT NULL,
    "player1DobProofLink" TEXT NOT NULL,
    "player2Name" TEXT,
    "player2Gender" "Gender",
    "player2Email" TEXT,
    "player2Phone" TEXT,
    "player2DateOfBirth" TEXT,
    "player2DobProofLink" TEXT,
    "category" "Category" NOT NULL,
    "ageCategory" "AgeCategory" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TournamentPlayer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Payment_razorpayPaymentId_key" ON "Payment"("razorpayPaymentId");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_razorpayOrderId_key" ON "Payment"("razorpayOrderId");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_playerId_key" ON "Payment"("playerId");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_tournamentPlayerId_key" ON "Payment"("tournamentPlayerId");

-- CreateIndex
CREATE INDEX "Payment_status_createdAt_idx" ON "Payment"("status", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "RegisteredPlayer_playerId_key" ON "RegisteredPlayer"("playerId");

-- CreateIndex
CREATE UNIQUE INDEX "RegisteredPlayer_email_key" ON "RegisteredPlayer"("email");

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "RegisteredPlayer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_tournamentPlayerId_fkey" FOREIGN KEY ("tournamentPlayerId") REFERENCES "TournamentPlayer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
