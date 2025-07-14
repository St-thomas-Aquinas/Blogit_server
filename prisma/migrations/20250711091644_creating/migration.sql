-- CreateTable
CREATE TABLE "post" (
    "Id" SERIAL NOT NULL,
    "Title" TEXT NOT NULL,
    "synopisis" TEXT NOT NULL,
    "featureImage" TEXT NOT NULL,
    "contents" BYTEA NOT NULL,
    "DateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "LastUpdate" TIMESTAMP(3) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "post_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "usertable"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
