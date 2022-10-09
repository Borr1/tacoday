import pool from "../database";
import { Request, Response } from "express";

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    let sql = `select u.username,u.password from users u where u.password='${password}' and u.username='${username}'`;
    const newUser = await pool.query(sql);
    console.log(newUser.rowCount);
    if (newUser.rowCount > 0) {
      res.json({ error: false, data: newUser.rows });
    } else {
      res.json({ error: true });
    }
  } catch (error) {
    console.log(error);
  }
};
