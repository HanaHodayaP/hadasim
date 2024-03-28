import * as db from '../db.service.js'

export async function create(corona) {
    const countResult = await db.query(`SELECT COUNT(*) AS rowCount FROM coron WHERE id = ${corona.id}`);
    const rowCount = countResult[0].rowCount;
    const checkIfExistsQuery = `SELECT COUNT(*) AS rowCount FROM coron WHERE id = '${corona.id}' and getDate = '${corona.getDate}' and factor = '${corona.factor}'`;
    const result = await db.query(checkIfExistsQuery);
    const rowCount1 = result[0].rowCount;


    if(rowCount < 4 && rowCount1==0) {
        await db.query(`INSERT INTO coron (id, getDate, factor) 
                       VALUES ('${corona.id}', '${corona.getDate}', '${corona.factor}')`);
    } else {
        throw new Error('Cannot add new vaccine');
    }
}


export async function getById(id) 
{

    const result = await db.query(
        `SELECT * FROM coron WHERE id=${id}`
      );
    return result;
}


export async function deleteCorona(corona) {
    const result = await db.query(
        `DELETE FROM coron WHERE getDate='${corona.getDate}' and factor='${corona.factor}' and id='${corona.id}'`);  
    if (!result.affectedRows) {
      throw new Error('Error in deleting corona');
    }
}

export async function getCorona(corona) {
    const result = await db.query(
        `SELECT * FROM coron WHERE getDate='${corona.getDate}' and factor='${corona.factor}' and id='${corona.id}'`);  
    if (!result.affectedRows) {
      throw new Error('Error in getting corona');
    }
    return result;
}
