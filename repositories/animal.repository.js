import { connect } from "../config/pg/postgres.js"; 

async function insertAnimal(animal) {
  const conn = await connect();
  try {
    const sql = `INSERT INTO animais (nome, tipo, proprietario_id)
                 VALUES ($1, $2, $3) RETURNING *`;
    const values = [animal.nome, animal.tipo, animal.proprietario_id];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}


export default {
  insertAnimal
}