import { useState} from "react";
import Filter from '../Filter';
import EmployeeList from './EmployeeList';
import { Employee } from '../../interfaces/Employee';
import { Manager } from '../../interfaces/Manager';
import { Button } from "react-bootstrap";
import EmployeeDialog from "./EmployeeDialog";


type EmployeeDivProps = {
    className: string,
    header: string,
    placeHolder: string,
    employees: Employee[],
    managers: Manager[]
}

function EmployeeDiv({
    className,
    header,
    placeHolder,
    employees,
    managers
}: EmployeeDivProps) {

    const emptyEmployee: Employee = {
        id: 0,
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        ip_address: ""
    };
    const [FilterValue, setFilterValue] = useState('');
    const [show, setShow] = useState(false);
    const [actionName, setActionName] = useState('');
    const [currentEmployee, setCurrentEmployee] = useState<Employee>(emptyEmployee);
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
        setCurrentEmployee(emptyEmployee);
    };



    const filteredList = employees!.filter(person => {
        const name = person.first_name + ' ' + person.last_name;
        return name.toLowerCase().includes(FilterValue.toLowerCase());
    })

    const showDialog = () => {
        setActionName("add");
        setCurrentEmployee(emptyEmployee);
        handleShow();
    }

    return (
        <div className={className}>
            <h2>{header}</h2>
            <Filter value={FilterValue} onChange={setFilterValue} placeHolder={placeHolder} />
            <Button onClick={showDialog}>Add Employee</Button>
            <EmployeeList handleShow={handleShow} setEmployee={setCurrentEmployee}
             setAction={setActionName} employees={filteredList!} managers={managers} />
            <EmployeeDialog header={actionName} list={employees!} employee={currentEmployee!} show={show} close={handleClose} />
        </div>
    );

}

export default EmployeeDiv;