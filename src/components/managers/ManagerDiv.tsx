import { useState} from "react";
import  Filter from '../Filter';
import  ManagerList from './ManagerList';
import { Button } from "react-bootstrap";
import ManagerDialog from "./ManagerDialog";
import { Manager } from "../../interfaces/Manager";


type ManagerDivProps = {
    className: string,
    header: string,
    placeHolder: string,
    managers: Manager[],
}

function ManagerDiv({
    className,
    header,
    placeHolder,
    managers
}: ManagerDivProps) {

    const emptyManager: Manager = {
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
    const [currentManager, setCurrentManager] = useState<Manager>(emptyManager);
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
        setCurrentManager(emptyManager);
    }

    const filteredList = managers!.filter(person => {
        const name = person.first_name + ' ' + person.last_name;
        return name.toLowerCase().includes(FilterValue.toLowerCase());
    }); 

    const showDialog = () => {
        setActionName("add");
        setCurrentManager(emptyManager);
        handleShow();
    }

    return (
        <div className={className}>
            <h2>{header}</h2>
            <Filter value={FilterValue} onChange={setFilterValue} placeHolder={placeHolder} />
            <Button onClick={showDialog}>Add Manager</Button>
            <ManagerList managers={filteredList!} setAction={setActionName} 
            setManager={setCurrentManager} handleShow={handleShow}/>
            <ManagerDialog header={actionName} list={managers!} manager={currentManager!} show={show} close={handleClose} />
            
        </div>

    );
}

export default ManagerDiv;