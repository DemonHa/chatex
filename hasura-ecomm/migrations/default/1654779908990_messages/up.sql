CREATE TABLE IF NOT EXISTS "public"."messages" (
  "id" TEXT,
  "user_id" TEXT NOT NULL,
  "room_id" TEXT NOT NULL,
  "message" TEXT NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);

ALTER TABLE ONLY "public"."messages"
ADD CONSTRAINT "messages_user_id_fkey"
FOREIGN KEY (user_id) REFERENCES users(id)
ON UPDATE CASCADE
ON DELETE CASCADE
NOT DEFERRABLE;

ALTER TABLE ONLY "public"."messages"
ADD CONSTRAINT "messages_room_id_fkey"
FOREIGN KEY (room_id) REFERENCES rooms(id)
ON UPDATE CASCADE
ON DELETE CASCADE
NOT DEFERRABLE;