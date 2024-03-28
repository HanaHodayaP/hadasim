import express from "express";
import * as controller from './corona.controller.js'

export const coronaRouter = express.Router();

coronaRouter.get('/corona/:id', controller.getById);
coronaRouter.get('/corona', controller.getCorona);
coronaRouter.post('/corona',controller.addCorona);
coronaRouter.delete('/corona', controller.deleteCorona);