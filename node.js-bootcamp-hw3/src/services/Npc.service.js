const Npc = require("../models/Npc.model");
const BaseService = require("./Base.service");





class NpcService extends BaseService {
    constructor(){
        super(Npc);
    }
}


module.exports = new NpcService();