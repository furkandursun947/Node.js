const hs = require("http-status");
const NpcService = require("../services/Npc.service");


class NpcController{
    index(req, res){
        NpcService.list()
        .then((npcList) => {
            if(!npcList) res.status(hs.INTERNAL_SERVER_ERROR).send({ error: "Serverlarla ilgili bir problem oluştu."})
            res.status(hs.OK).send(npcList);
        })
        .catch((err) => {res.status(hs.INTERNAL_SERVER_ERROR).send(err)});
    }

    create(req, res){
        console.log("geldi");
        NpcService.add(req.body).then((createdNpc) => {
            if(!createdNpc) return res.status(hs.INTERNAL_SERVER_ERROR).send({ error: "Serverlarla ilgili bir problem oluştu."})
            res.status(hs.OK).send(createdNpc);
        })
        .catch((err) => {res.status(hs.INTERNAL_SERVER_ERROR).send(err)});
    }
}

module.exports = new NpcController();