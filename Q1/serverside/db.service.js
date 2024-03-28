
import mysql from 'mysql2/promise'
import * as config from './config.js'

export async function query(sql, params) {
    const connection = await mysql.createConnection(config.config.db);
    const [results, ] = await connection.execute(sql, params);
    return results;
  }
  