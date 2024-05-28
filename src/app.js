//const express = require('express');
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors' //segurança
import path from 'path'
import routes from './router'
import dotenv from 'dotenv'

dotenv.config()
class App{
  constructor() {
    this.server = express() //ativar o servidor
    mongoose.connect(process.env.DATABASE, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true
    }) //executar o servidor
    this.middlewares() //conectar com o middle
    this.routes() //conectar com o routes
  }

  middlewares() {
    this.server.use(cors()) //solicitacao externa: pode atender
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'uploads')) //subir na pasta uploads automatico
    ) //caminho que grava os arquivos
    this.server.use(express.json())
  }

  routes() {
    this.server.use(routes)
  }
}

export default new App().server