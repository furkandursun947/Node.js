class BaseService{

    constructor(BaseModel) {
        this.BaseModel = BaseModel;
    }

    list(where){
        return this.BaseModel.find(where || {});
    }

    add(data){
        console.log("geldi1", data);
        return new this.BaseModel(data).save();
    }

    findOne(where){
        return this.BaseModel.find(where);
    }
}


module.exports = BaseService;