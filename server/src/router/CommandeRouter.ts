import express from "express";
import { postUser } from "../controllers/postUser";

import { loginUser } from "../controllers/loginUser";

import GetShops from "../controllers/GetShops";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: The books managing API
 */

/**
 * @swagger
 * /user:
 *   post:
 *     summary: post User
 *     tags: [User]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       404:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       500:
 *         description: error
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *
 */
router.route("/user").post(postUser);

/**
 * @swagger
 * tags:
 *   name: Login
 *   description: Login
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login
 *     tags: [Login]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       404:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *       500:
 *         description: error
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *
 */
router.route("/login").post(loginUser);

/**
 * @swagger
 * tags:
 *   name: Shops
 */
/**
 * @swagger
 * paths:
 *   /shops:
 *     get:
 *       summary: Get all shops
 *       tags: [Shops]
 *       responses:
 *         200:
 *           description: ok
 *           content:
 *             application/json:
 *               schema:
 *                  type: object
 *         404:
 *           description: not found
 *           content:
 *             application/json:
 *               schema:
 *                  type: object
 *         500:
 *           description: error
 *           content:
 *             application/json:
 *               schema:
 *                  type: object
 *
 */
router.route("/shops").get(GetShops);

export default router;
