import {Employee} from "../interfaces/Employee";
import { Manager } from "../interfaces/Manager";

export const checkEqualEmployees = (employee1: Employee, employee2: Employee) : boolean =>{
    return (employee1.first_name == employee2.first_name) &&
    (employee1.last_name == employee2.last_name ) &&
    (employee1.email == employee2.email ) &&
    (employee1.id == employee2.id) &&
    (employee1.gender == employee2.gender) &&
    (employee1.ip_address == employee2.ip_address)
}


export const checkEqualManager = (manager1: Manager, manager2: Manager) : boolean =>{
    return (manager1.first_name == manager2.first_name) &&
    (manager1.last_name == manager2.last_name ) &&
    (manager1.email == manager2.email ) &&
    (manager1.id == manager2.id) &&
    (manager1.gender == manager2.gender) &&
    (manager1.ip_address == manager2.ip_address)
}