import { Button, Modal } from "react-bootstrap";
import { Employee } from "../../interfaces/Employee";
import EmployeeForm from "./EmployeeForm";

type DialogProps = {
    header: string;
    list: Employee[],
    employee?: Employee
    show: boolean,
    close: () => void,
}

function EmployeeDialog({
    header,
    list,
    employee,
    show,
    close
}: DialogProps){

    return (
        <Modal show ={show} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>{header}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <EmployeeForm actionName={header} list={list} employee={employee!} close={close} />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={close}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EmployeeDialog;