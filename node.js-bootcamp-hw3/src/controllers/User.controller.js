const hs = require("http-status");
const UserService = require("../services/User.service");


class UserController{
    index(req, res){
        UserService.list()
        .then((userList) => {
            if(!userList) res.status(hs.INTERNAL_SERVER_ERROR).send({ error: "Serverlarla ilgili bir problem oluştu."})
            res.status(hs.OK).send(userList);
        })
        .catch((err) => {res.status(hs.INTERNAL_SERVER_ERROR).send(err)});
    }

    register(req, res){
        // TODO :  Password e hash işlemi
        UserService.add(req.body)
        .then((user) => {
            if(!user) res.status(hs.INTERNAL_SERVER_ERROR).send({ error: "Serverlarla ilgili bir problem oluştu."})
            res.status(hs.OK).send(user);
        })
        .catch((err) => {res.status(hs.INTERNAL_SERVER_ERROR).send(err)});
    }

    login(req, res){
        UserService.findOne(req.body)
        .then((user) => {
            if(!user) return res.status(hs.NOT_FOUND).send({message: "Böyle bir kullanıcı bulunamadı."});
            user = {
                nickname: user[0].nickname,
                tokens: 'sadasd'   // TODO : JWT TOKEN İŞLEMİ
            }
            res.status(hs.OK).send(user);
        })
        .catch((err) => res.status(hs.INTERNAL_SERVER_ERROR).send(err));
    }
}

module.exports = new UserController();