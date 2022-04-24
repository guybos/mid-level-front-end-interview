import { ManagerRequest } from "../interfaces/Manager"
import {checkEqualManager} from '../utils/CompareFunctions';
import management from "../MANAGEMENT.json";

const GetAll = async() => {
    return management;
    
}

const Get = async (request: ManagerRequest) =>{
    const managers = request.all;
    for(let currentManager of managers){
        if(checkEqualManager(currentManager, request.manager))
            return currentManager;
    }
}

const Add = async (request: ManagerRequest) =>{
    var managers = request.all;
    managers.push(request.manager);
    return managers;
}
const Update = async (request: ManagerRequest) =>{
    var managers = request.all;
    for(let i=0; i< managers.length; i++){
        if(managers[i].id == request.manager.id)
            managers.splice(i,1, request.manager);
    }
    return managers;
}
const Delete = async (request: ManagerRequest) =>{
    var managers = request.all;
    for(let i=0; i< managers.length; i++){
        if(checkEqualManager(managers[i], request.manager))
            managers.splice(i,1);
    }
    return managers;
}

const Management ={
    Get,
    GetAll,
    Add,
    Update,
    Delete,
}

export default Management;