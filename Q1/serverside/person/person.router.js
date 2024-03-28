import express from "express";
import * as controller from './person.controller.js'
export const router = express.Router();

router.get('/persons', controller.getAll);
router.post('/person',controller.addPerson);
router.get('/persons/:id',controller.getById);
router.delete('/persons/:id', controller.deletePerson);
router.put('/persons/:id', controller.findByIdAndUpdate);
 