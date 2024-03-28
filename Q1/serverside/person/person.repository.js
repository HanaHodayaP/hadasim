import * as db from '../db.service.js'


export async function create(person) {
   await db.query(`INSERT INTO person (id,name, city,street ,number ,birthDate ,tel ,cel ,positive ,health) 
    VALUES ('${person.id}','${person.name}', '${person.city}','${person.street}','${person.number}' ,'${person.birthDate}' ,'${person.tel}' ,'${person.cel}','${person.positive.length == 0? NULL:person.positive}','${person.health.length == 0?NULL:person.health}')`
    )
}

export async function getAll(){
    const data = await db.query( 'SELECT * FROM person');
    return data;
}

export async function deletePerson(id) {
    const result = await db.query(
        `DELETE FROM person WHERE id=${id}`
      );

  
    if (!result.affectedRows) {
      throw new Error('Error in deleting person');
    }

}

export async function getById(id) {

    const result = await db.query(
        `SELECT * FROM person WHERE id=${id}`
      );
    if (!result.length) {
      throw new Error('PERSON NOT FOUND');
    }
    return result;
}

export async function findByIdAndUpdate(id, person){
    const result = await db.query(
        `UPDATE person 
         SET name="${person.name}", city='${person.city}', street='${person.street}', 
         number='${person.number}', tel='${person.tel}' , cel='${person.cel}' , birthDate='${person.birthDate}'
         , positive='${person.positive}' , health='${person.health}' 
         WHERE id=${id}`
    );

    let message = 'Error in updating person';

    if (result.affectedRows) {
        message = 'Person updated successfully';
    }
    return { message };
  }

