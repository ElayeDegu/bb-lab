import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function openDB() {
  return open({
    filename: './assets.db',
    driver: sqlite3.Database
  });
}

export default async function handler(req, res) {
  const db = await openDB();
  const assets = await db.all('SELECT * FROM assets');
  res.status(200).json(assets);
}
