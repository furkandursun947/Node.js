const User = require("../models/User.model");
const BaseService = require("./Base.service");





class UserService extends BaseService {
    constructor(){
        super(User);
    }
}


module.exports = new UserService();