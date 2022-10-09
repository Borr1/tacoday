import pool from "../database";
import { Request, Response } from "express";

export const postUser = async (req: Request, res: Response) => {
  try {
    const { first_name, last_name, username, email, password } = req.body;
    let sql = `INSERT INTO users(first_name, last_name, username,email,password) VALUES ('${first_name}','${last_name}','${username}','${email}','${password}')`;
    const newUser = await pool.query(sql);
    console.log(sql);
    if (newUser.rowCount > 0) {
      res.json({ error: false, data: newUser.rows });
    } else {
      res.json({ error: true });
    }
  } catch (error) {
    console.log(error);
  }
};
