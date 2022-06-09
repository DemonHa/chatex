CREATE TABLE IF NOT EXISTS "public"."rooms" (
  "id" TEXT,
  "user_id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  CONSTRAINT "rooms_pkey" PRIMARY KEY ("id")
);

ALTER TABLE ONLY "public"."rooms"
ADD CONSTRAINT "rooms_user_id_fkey"
FOREIGN KEY (user_id) REFERENCES users(id)
ON UPDATE CASCADE
ON DELETE CASCADE
NOT DEFERRABLE;