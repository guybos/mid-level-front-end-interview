import { Manager, ManagerRequest } from "../interfaces/Manager"
import {checkEqualManager, checkManagerId} from '../utils/CompareFunctions';
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
    var managers = Object.assign([],  request.all);
    console.log(request.manager);
    try {
        managers.push(request.manager);
    } catch (error) {
        console.log(error);
    }
    console.log(managers);
    return managers;
}
const Update = async (request: ManagerRequest) =>{
    var managers = Object.assign([],  request.all);
    for(let i=0; i< managers.length; i++){
        if(checkManagerId(managers[i],request.manager.id))
            managers.splice(i,1, request.manager);
    }
    return managers;
}
const Delete = async (request: ManagerRequest) =>{
    var managers = Object.assign([],  request.all);
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