import {Router} from 'express';
import { DisplayLoginPage, 
    DisplayRegisterPage,
    ProcessLoginPage,
    ProcessLogoutPage,
    ProcessRegisterPage } from '../controllers/auth.controller.server.js';

const router = Router();

router.get('/login', DisplayLoginPage);

router.get('/register', DisplayRegisterPage);

router.post('/login', ProcessLoginPage);

router.post('/register', ProcessRegisterPage);

router.get('/logout', ProcessLogoutPage);

export default router;