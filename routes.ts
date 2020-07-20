import { Router } from "https://deno.land/x/oak/mod.ts";
import { getPaths, getPath } from "./controllers/paths.ts";

const router = new Router();

router.get("/api/v1/paths", getPaths).get("/api/v1/paths/:path", getPath);

export default router;
