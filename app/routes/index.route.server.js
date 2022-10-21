import { Router } from "express";
import { displayAboutPage, 
    displayContactPage, 
    displayHomePage, 
    displayProjectsPage, 
    displayServicesPage,
    displayBusinessPage,
    button } from "../controllers/index.controller.server.js";

const router = Router();

router.get('/', displayHomePage);
router.get('/home', displayHomePage);
router.get('/about', displayAboutPage);
router.get('/projects', displayProjectsPage);
router.get('/services', displayServicesPage);
router.get('/contact', displayContactPage);
router.get('/redirect', button)
router.get('/business-list', displayBusinessPage);

export default router;
