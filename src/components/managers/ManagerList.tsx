import { useDispatch, useSelector } from 'react-redux';
import {ListGroup, Badge} from 'react-bootstrap';
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
}

function EmployeeList({
    managers,
}: ManagerListProps) {

    const [show, setShow] = useState(false);
    const [actionName, setActionName] = useState('');
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const openDialog = (chosenAction: string) =>{
        setActionName(chosenAction);
        handleShow();
    }

    return (
        <ListGroup>
            {
                managers!.map((manager, index) =>
                (
                    <ListGroup.Item key={manager.first_name + index}>
                        <span>{manager.first_name} {manager.last_name}</span>
                        <Badge bg="primary" onClick={(e) => openDialog("update")}>update</Badge>
                        <Badge bg="primary" onClick={(e) => openDialog("delete")}>delete</Badge>
                        <Badge bg="primary">{fibonacci()}</Badge>
                        <ManagerDialog header={actionName} list={managers} manager={manager} show={show} close={handleClose} />
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
    );
}

export default EmployeeList;