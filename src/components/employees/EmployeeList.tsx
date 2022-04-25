import { useDispatch } from 'react-redux';
import { ListGroup, Badge, Button } from 'react-bootstrap';
import { fibonacci } from '../../utils/GeneralFunctions';
import { Employee } from '../../interfaces/Employee';
import { deleteEmployeeAction } from '../../store/employees/EmployeeActions';
import { converEmployeeToManager } from '../../utils/ConverFunctions';
import { addManagerAction } from '../../store/managers/managerActions';
import { Manager } from '../../interfaces/Manager';

type EmployeeListProps = {
    employees: Employee[]
    managers: Manager[],
    setAction: (action: string) => void,
    setEmployee: (employee: Employee) =>void,
    handleShow: () => void,
}

function EmployeeList({
    employees,
    managers,
    setAction,
    handleShow,
    setEmployee
}: EmployeeListProps) {

    const dispatch = useDispatch();

    const Transfer = async (employee: Employee) => {
        console.log("start Transfer");
        const newManager = converEmployeeToManager(employee);
        dispatch(deleteEmployeeAction({
            employee: employee,
            all: employees!
        }));
        dispatch(addManagerAction({
            manager: newManager,
            all: managers!
        }))
    }

    const openDialog = (chosenAction: string, employee: Employee) => {
        console.log("start Action " + chosenAction);
        setAction(chosenAction);
        setEmployee(employee);
        handleShow();
    }

    return (
        <ListGroup>
            {
                employees!.map((employee, index) =>
                (
                    <ListGroup.Item key={employee.first_name + index}>
                        <span>{employee.first_name} {employee.last_name}</span>
                        <Button onClick={(e) => Transfer(employee)}>Transfer</Button>
                        <Button onClick={(e) => openDialog("update", employee)}>update</Button>
                        <Button onClick={(e) => openDialog("delete", employee)}>delete</Button>
                        <Badge bg="primary">{fibonacci()}</Badge>
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
    );
}

export default EmployeeList;