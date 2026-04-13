import { Router } from "express";
import { validateRegisterUser } from "../validator/auth.validator";
import { Register } from "../controllers/auth.controller";

const router = Router()

router.post('/register',validateRegisterUser,Register)

export default router