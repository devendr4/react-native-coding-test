import fs from "node:fs";
import path from "node:path";
import { exit } from "node:process";

import { z } from "zod";

export const environmentConfigSchema = z
  .object({
    EXPO_PUBLIC_ORDERS_URL: z.string(),
  })
  .strict();

export type EnvieonmentConfigSchemaType = z.infer<
  typeof environmentConfigSchema
>;

const environmentFile = path.join(__dirname, `../../.env`);

(() => {
  try {
    const fileExists = fs.existsSync(environmentFile);

    if (!fileExists) {
      console.error(
        `❌ Missing .env file. Make sure you have .env file in the root directory.`,
      );

      throw new Error("Error");
    }

    const content = fs.readFileSync(environmentFile, "utf8");
    const environmentVariables = content.split("\n").filter(Boolean);

    const jsonObject: { [key: string]: string } = {};

    for (let environmentVariable of environmentVariables) {
      if (environmentVariable === "") {
        return;
      }
      const [key, value] = environmentVariable.split("=");

      jsonObject[key] = value;
    }

    const parsed = environmentConfigSchema.safeParse(jsonObject);

    if (!parsed.success) {
      console.error(
        `\n❌ Missing the following variables in .env file, Make sure all required variables are defined in the .env file:`,
      );
      console.error(parsed.error.flatten().fieldErrors);
      console.log("\n");

      throw new Error("Error");
    }
  } catch {
    exit(1);
  }
})();
