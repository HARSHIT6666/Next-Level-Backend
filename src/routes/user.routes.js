import { Router } from "express";
import registeUSer from "../controllers/user.controller.js";
const router = Router()

router.route("/register").post(registeUSer)
// router.route("/login").post(registeUSer)

export default  router