import {Router} from "express";
import TextController from "../../core/controllers/exercises/TextController";
import TextService from "../../core/services/exercises/TextService";

const router = Router()

// ===================
// /api/exercises
// ===================

const controller = new TextController(new TextService())

router
    .get('/', controller.getAll)
    .get('/:id', controller.getById)
    .post('/', controller.post)
    .delete('/:id', controller.delete)

export default router