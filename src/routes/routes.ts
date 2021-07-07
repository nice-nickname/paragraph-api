import {Router} from "express";
import ExercisesRouter from "./exercises/ExercisesRouter";

const router = Router()

// ===================
// /api
// ===================

router
    .use(ExercisesRouter)

export default router