import { Request, Response } from "express";
import { connectionDB } from "../database/db.js";

export async function create(req: Request, res: Response) {
  const { name, type } = req.body;

  try {
    await connectionDB.query(
      "INSERT INTO wines (name, type) VALUES ($1, $2);",
      [name, type]
    );

    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function findAll(req: Request, res: Response) {
  try {
    const { rows } = await connectionDB.query("SELECT * FROM wines;");

    res.send(rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function findById(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const { rows } = await connectionDB.query(
      "SELECT * FROM wines WHERE id = $1;",
      [id]
    );

    if (rows.length === 0) {
      res.sendStatus(404);
    }

    res.send(rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function update(req: Request, res: Response) {}

export async function remove(req: Request, res: Response) {}
