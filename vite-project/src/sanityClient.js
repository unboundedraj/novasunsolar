import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "fgmqv9iq", // find in sanity.config.ts or sanity.json
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-01",
});
