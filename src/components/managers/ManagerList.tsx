import { useDispatch, useSelector } from 'react-redux';
import {ListGroup, Badge, Button} from 'react-bootstrap';
import {fibonacci} from '../../utils/GeneralFunctions';
import { Manager} from '../../interfaces/Manager';
import { currentEmployeeSelector } from '../../store/employees/EmployeeSelectors';
import { deleteEmployeeAction, updateEmployeeAction } from '../../store/employees/EmployeeActions';
import { currentManagerSelector } from '../../store/managers/managerSelectors';
import ManagerDialog from './ManagerDialog';
import { useState } from 'react';
import { checkEqualEmployees } from '../../utils/CompareFunctions';
import { converEmployeeToManager } from '../../utils/ConverFunctions';
import { addManagerAction } from '../../store/managers/managerActions';

type ManagerListProps ={
    managers: Manager[]
    setAction: (action: string) => void,
    setManager: (employee: Manager) =>void,
    handleShow: () => void,
}

function EmployeeList({
    managers,
    setAction,
    setManager,
    handleShow,
}: ManagerListProps) {

    const openDialog = (chosenAction: string, manager: Manager) =>{
        setAction(chosenAction);
        setManager(manager);
        handleShow();
    }

    return (
        <ListGroup>
            {
                managers!.map((manager, index) =>
                (
                    <ListGroup.Item key={manager.first_name + index}>
                        <span>{manager.first_name} {manager.last_name}</span>
                        <Button onClick={(e) => openDialog("update", manager)}>update</Button>
                        <Button onClick={(e) => openDialog("delete", manager)}>delete</Button>
                        <Badge bg="primary">{fibonacci()}</Badge>
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
    );
}

export default EmployeeList;