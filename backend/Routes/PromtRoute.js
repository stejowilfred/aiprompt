const express=require('express');

const {createPromt,deletePromt,getPromtById,listPromt,updatePromt}=require('../controller/AddPromt');

const routes=express.Router();

routes.post('/',createPromt);
routes.get('/',listPromt);
routes.get('/:id',getPromtById);
routes.put('/:id',updatePromt);
routes.delete('/:id',deletePromt);

module.exports = routes;