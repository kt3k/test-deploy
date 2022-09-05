import { serve } from "https://raw.githubusercontent.com/denoland/deno_std/main/http/server.ts";
import "https://deno.land/std@0.154.0/node/module_all.ts";

serve(() => new Response("ok"));
