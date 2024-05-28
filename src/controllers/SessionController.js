/*
  index (listALL): listagem de sessoes
  store (add): criar uma sessao
  show (list): quando queremos listar uma UNICA sessao
  update: quando queremos alterar alguma sessao
  destroy (delete): quando queremos deletar uma sessao
*/

import User from '../models/User'
import * as Yup from 'yup' //valida dados

class SessionController {
  async store(req, res) {  //adicionar
    const schema = Yup.object().shape({
      email: Yup.string().email().required()
    })
    
    const { email } = req.body //o if vai responder - vai mander responder
    if(!(await schema.isValid(req.body))) { //pergunta se foi validado
      return res.status(400).json({ error: 'Falha na validação'})
    }
    let user = await User.findOne({ email }) //acha um email, loga se tiver e cria se nao tiver
    if(!user) {
      user = await User.create({ email })
    }
    return res.json(user)
  }
}

export default new SessionController()