import { Employee, EmployeeRequest } from "../interfaces/Employee"
import {checkEmployeeId, checkEqualEmployees} from '../utils/CompareFunctions';
import employees from "../EMPLOYEES.json";

const GetAll = async() => {
    return employees;
}

const Get = async (request: EmployeeRequest) =>{
    const employees = request.all;
    for(let currentEmployee of employees){
        if(checkEqualEmployees(currentEmployee, request.employee))
            return currentEmployee;
    }
}

const Add = async (request: EmployeeRequest) =>{
    var employees = Object.assign([],  request.all);
    employees.push(request.employee);    
    return employees;
}

const Update = async (request: EmployeeRequest) =>{
    var employees = Object.assign([],  request.all);
    for(let i=0; i< employees?.length; i++){
        if(checkEmployeeId(employees[i],request.employee.id))
            employees.splice(i,1, request.employee);
    }
    return employees;
}

const Delete = async (request: EmployeeRequest) =>{
    var employees = Object.assign([],  request.all);
    for(let i=0; i< employees.length; i++){
        if(checkEqualEmployees(employees[i], request.employee))
            employees.splice(i,1);
    }
   return employees;
}

const Employees ={
    Get,
    GetAll,
    Add,
    Update,
    Delete,
}

export default Employees;