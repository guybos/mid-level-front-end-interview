import { groupCollapsed } from "console";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Manager } from "../../interfaces/Manager";
import ManagerForm from "./ManagerForm";

type DialogProps = {
    header: string;
    list: Manager[],
    manager?: Manager
    show: boolean,
    close: () => void,
}

function EmployeeDialog({
    header,
    list,
    manager,
    show,
    close
}: DialogProps){
    
    return (
        <Modal show ={show} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>{header}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <ManagerForm actionName={header} list={list} manager={manager!} close={close} />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={close}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EmployeeDialog;