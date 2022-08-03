const userController = {}
const companySchema = require('../model/companyModel');
const bcrypt =  require('bcrypt')


//--------------funções dentro do objeto userController--------------
userController.getAllUser = async (requisicao, resposta) =>{
    const companyAlls = await companySchema.find();
    
        resposta.send(companyAlls);
}

userController.postCheckPassoword = async (requisicao, resposta)=>{
    const usuarioLogango = requisicao.body.email;
    const usuarioAtual = await companySchema.findOne({email:usuarioLogango})
    const usuarioLogangoSenha = await bcrypt.hashSync(requisicao.body.senhaEncripitada, usuarioAtual.salt)
    
    if(usuarioAtual){
       if(usuarioLogangoSenha == usuarioAtual.senhaEncripitada ){
            resposta.send("Login Feito");
        }
        else{
            resposta.send("Credenciais não aceitas");
        }
    }

    resposta.send(usuarioLogangoSenha);
   
}

userController.postNewUser = async (requisicao, resposta)=>{
    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(requisicao.body.senhaEncripitada, salt);
    requisicao.body.senhaEncripitada = hashedPassword;
    requisicao.body.salt = salt;
    const novoUsuario = new companySchema (requisicao.body)
    await novoUsuario.save();
    const usuarios = await companySchema.find();
    resposta.send(`Usuario Salvo ${usuarios}`);
    console.log(usuarios);

}

userController.putChangeUser = async (requisicao, resposta)=>{
    const email = requisicao.params.email;
    const usuarioID = await companySchema.find({email:`${email}`});
    const usuarioIdUpdated = await companySchema.updateOne (usuarioID,{$set:requisicao.body});
    const usuarioModificado = await companySchema.findOne(usuarioIdUpdated);
    resposta.send(usuarioModificado);
}

userController.deleteUser = async (requisicao, resposta)=>{
    const email = requisicao.params.email;

    await companySchema.deleteOne({email:`${email}`})

    const usuariosAll = await companySchema.find();
    resposta.send(usuariosAll);
   
}

//-------------------------------------------------------------------
module.exports = userController;
