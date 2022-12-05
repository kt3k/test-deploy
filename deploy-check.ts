import { retry } from "https://deno.land/std@0.167.0/async/retry.ts";

const projectName = "kt3k-test-deploy";
const branch = Deno.args[0]

if (!branch) {
  console.log("Usage: deno run deploy-check.ts <branch-name>");
  Deno.exit(1);
}

const deployName = branch === "main" ? projectName : `${projectName}--${branch.replace(/\//g, "-")}`;

retry(async () => {
  console.log(`Checking https://${deployName}.deno.dev`)
  const resp = await fetch(`https://${deployName}.deno.dev`);
  await resp.text();
  if (resp.status !== 200) {
    throw new Error("failed");
  }
});
