import pool from "../database";
import { Request, Response } from "express";

const GetShops = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM shops ;`);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};
export default GetShops;
