import { Router } from "express";

import { DisplayBusinessList,
ProcessBusinessAddPage,
ProcessBusinessEditPage,
DisplayBusinessAddPage,
DisplayBusinessEditPage,
ProcessBusinessDelete } from "../controllers/business.controller.server.js"

import  { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/business-list', DisplayBusinessList);
router.get('/business-add', DisplayBusinessAddPage);
router.post('/business-add', AuthGuard, ProcessBusinessAddPage);
router.post('/business-edit/:id', AuthGuard, ProcessBusinessEditPage);
router.get('/business-edit/:id', AuthGuard, DisplayBusinessEditPage);
router.get('/business-delete/:id', AuthGuard, ProcessBusinessDelete);

export default router;