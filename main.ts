import { serve } from "https://raw.githubusercontent.com/denoland/deno_std/main/http/server.ts";
import "https://raw.githubusercontent.com/denoland/deno_std/main/node/module_all.ts";

serve(() => new Reseponse("ok"));
