import { useEffect, useState} from "react";
import  Filter from '../Filter';
import  ManagerList from './ManagerList';
import { Button } from "react-bootstrap";
import ManagerDialog from "./ManagerDialog";
import { Manager } from "../../interfaces/Manager";
import { useDispatch, useSelector } from "react-redux";
import { currentManagerSelector } from "../../store/managers/managerSelectors";
import { fetchAllManagerAction } from "../../store/managers/managerActions";


type ManagerDivProps = {
    className: string,
    header: string,
    placeHolder: string,
}

function ManagerDiv({
    className,
    header,
    placeHolder,
}: ManagerDivProps) {

    const dispatch = useDispatch();
    const { managers } = useSelector(currentManagerSelector);
    
    useEffect(() => {
        dispatch(fetchAllManagerAction(managers));
    },[managers]);

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