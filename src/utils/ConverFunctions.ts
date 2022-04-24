import { Employee } from "../interfaces/Employee"
import { Manager } from "../interfaces/Manager"

export const converEmployeeToManager = (person: Employee):Manager=> {
    const manager: Manager = {
        id:person.id,
        first_name: person.first_name,
        last_name: person.last_name,
        email: person.email,
        gender: person.gender,
        ip_address: person.ip_address
    };
    return manager;
};