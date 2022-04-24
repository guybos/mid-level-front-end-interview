import { useDispatch, useSelector } from 'react-redux';
import {ListGroup, Badge} from 'react-bootstrap';
import {fibonacci} from '../../utils/GeneralFunctions';
import { Employee} from '../../interfaces/Employee';
import { currentEmployeeSelector } from '../../store/employees/EmployeeSelectors';
import { deleteEmployeeAction, updateEmployeeAction } from '../../store/employees/EmployeeActions';
import { currentManagerSelector } from '../../store/managers/managerSelectors';
import EmployeeDialog from './EmployeeDialog';
import { useState } from 'react';
import { checkEqualEmployees } from '../../utils/CompareFunctions';
import { converEmployeeToManager } from '../../utils/ConverFunctions';
import { addManagerAction } from '../../store/managers/managerActions';
import {Manager} from '../../interfaces/Manager';

type EmployeeListProps ={
    employees: Employee[]
    managers: Manager[],
}

function EmployeeList({
    employees,
    managers
}: EmployeeListProps) {

    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [actionName, setActionName] = useState('');
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const Transfer = async(employee: Employee) =>{
        const newManager = converEmployeeToManager(employee);
        dispatch(deleteEmployeeAction({
            employee: employee, 
            all:employees!
        }));
        dispatch(addManagerAction({
            manager: newManager,
            all: managers!
        }))
    }

    const openDialog = (chosenAction: string) =>{
        setActionName(chosenAction);
        handleShow();
    }

    return (
        <ListGroup>
            {
                employees!.map((employee, index) =>
                (
                    <ListGroup.Item key={employee.first_name +index}>
                        <span>{employee.first_name} {employee.last_name}</span>
                        <Badge bg="primary" onClick={(e) => Transfer(employee)}>Transfer</Badge>
                        <Badge bg="primary" onClick={(e) => openDialog("update")}>update</Badge>
                        <Badge bg="primary" onClick={(e) => openDialog("delete")}>delete</Badge>
                        <Badge bg="primary">{fibonacci()}</Badge>
                        <EmployeeDialog header={actionName} list={employees} employee={employee} show={show} close={handleClose} />
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
    );
}

export default EmployeeList;