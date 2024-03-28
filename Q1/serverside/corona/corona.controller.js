import * as repository from './corona.repository.js'


export async function getById(request, response, next) {
    const id = request.params.id;
    const coronas = await repository.getById(id);
    response.send(coronas);
}

export async function addCorona(request,response,next){
    const corona = request.body;
    try {
       await repository.create(corona); 
       response.status(200).send('add corona'); 
    } catch (error) {
        response.status(500).send(error.message);
    }
}

export async function deleteCorona(request, response, next) {
    const corona = request.body;
    try {
        await repository.deleteCorona(corona); 
        response.status(200).send('corona deleted successfully.'); 
    } catch (error) {
        response.status(500).send(error.message);
    }
}

export async function getCorona(request, response, next) {
    const corona = request.body;
    try {
        const cor=await repository.getCorona(corona); 
        response.status(200).send(cor); 
    } catch (error) {
        response.status(500).send(error.message);
    }
}