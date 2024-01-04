-- CreateTable
CREATE TABLE "resultado" (
    "id" TEXT NOT NULL,
    "bimestre" TEXT NOT NULL,
    "disciplina" TEXT NOT NULL,
    "nota" DOUBLE PRECISION NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "resultado_pkey" PRIMARY KEY ("id")
);
