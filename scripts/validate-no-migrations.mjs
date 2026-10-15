import { access } from "node:fs/promises";

const forbidden = ["prisma", "migrations", "db/migrations"];
const existing = [];

for (const path of forbidden) {
  try {
    await access(path);
    existing.push(path);
  } catch (error) {
    if (error?.code !== "ENOENT") throw error;
  }
}

if (existing.length > 0) {
  throw new Error(
    `Static frontend unexpectedly contains migration paths: ${existing.join(", ")}`,
  );
}

process.stdout.write("No database migration surface is present.\n");
