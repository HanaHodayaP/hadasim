import * as repository from './person.repository.js'
import * as check from '../verification.js'

export async function getAll(request, response, next) {
    const persons = await repository.getAll();
    response.send(persons);
}

export async function addPerson(request,response,next){
    const person = request.body;
    try {
        if(check.isAlpha(person.name) && check.isAlpha(person.street) && check.isValidPhoneNumber9(person.tel) && check.isValidPhoneNumber10(person.cel) &&  check.isValidId(person.id) && check.isDateBefore(person.birthDate,person.positive) && check.isDateBefore(person.positive,person.health))
        {
            await repository.create(person); 
        }
       response.status(200).send('add person'); 
    } catch (error) {
        response.status(500).send(error.message);
    }
}

export async function deletePerson(request, response, next) {
    const id = request.params.id;
    try {
        await repository.deletePerson(id); 
        response.status(200).send('Person deleted successfully.'); 
    } catch (error) {
        response.status(500).send(error.message);
    }
}

export async function getById(request, response, next) {
    const id = request.params.id;
    try {
        const result= await repository.getById(id); 
        response.send(result[0]) 
    } catch (error) {
        response.status(500).send(error.message);
    }
}

export async function findByIdAndUpdate(request, response, next) {
    const id = request.params.id;
    const person = request.body
    try {
        const result= await repository.findByIdAndUpdate(id,person); 
        response.send(result[0]) 
    } catch (error) {
        response.status(500).send(error.message);
    }
}