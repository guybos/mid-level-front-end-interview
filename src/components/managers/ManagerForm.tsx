import { useEffect, useState } from "react";
import { Form, FormControl, InputGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Manager, ManagerRequest } from "../../interfaces/Manager";
import { addManagerAction, deleteManagerAction, fetchManagerAction, updateManagerAction } from "../../store/managers/managerActions";
import { currentManagerSelector } from "../../store/managers/managerSelectors";

type ManagerFormProps = {
    actionName: string,
    list: Manager[],
    manager?: Manager
    close: () => void
}

function EmployeeForm({
    actionName,
    list,
    manager,
    close
}: ManagerFormProps) {

    
    const dispatch = useDispatch();
    const { currentManager } = useSelector(currentManagerSelector);

    useEffect(() => {
        if (manager !== undefined) {
            const request: ManagerRequest = {
                manager: manager,
                all: list
            }
            dispatch(fetchManagerAction(request));
        }
    },[manager]);


    const [validated, setValidated] = useState(false);
    const [firstName, setFirstName] = useState(manager?.first_name!);
    const [lastName, setLastName] = useState(manager?.last_name!);
    const [email, setEmail] = useState(manager?.email!);
    const [ipAdress, setIpAdress] = useState(manager?.ip_address!);
    const [gender, setGender] = useState(manager?.gender!);

    const update = async (person: Manager, list: Manager[]) =>{
        console.log(person?.id!);
        dispatch(updateManagerAction({manager: person, all:list}));
    }

    const add= async (person: Manager, list: Manager[]) =>{
        console.log(person?.id!);
        dispatch(addManagerAction({manager: person, all:list}));
    }
    const deleteFunc = async (person: Manager, list: Manager[]) =>{
        console.log(person?.id!);
        dispatch(deleteManagerAction({manager: person, all:list}));
    }

    const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        const mangaer: Manager = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            gender: gender,
            ip_address: ipAdress,
            id: actionName == "add" ? list.length + 1 : currentManager?.id!
        }
        if(actionName == "update"){
            update(mangaer, list!);
        }else if(actionName ="add"){
            add(mangaer, list!);
        }else{
            deleteFunc(mangaer, list!);
        }
        setValidated(true);
        close();
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="First Name"
                    aria-label="First Name"
                    required
                    value={firstName}
                    onChange={e => setFirstName(e.currentTarget.value!)}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Last Name"
                    aria-label="Last Name"
                    required
                    value={lastName}
                    onChange={e => setLastName(e.currentTarget.value!)}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Email"
                    aria-label="Email"
                    required
                    value={email}
                    onChange={e => setEmail(e.currentTarget.value!)}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Ip Adress"
                    aria-label="Ip Adress"
                    required
                    value={ipAdress}
                    onChange={e => setIpAdress(e.currentTarget.value!)}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Gender"
                    aria-label="Gender"
                    required
                    value={gender}
                    onChange={e => setGender(e.currentTarget.value!)}
                />
            </InputGroup>
            <Button className="sumbit" type="submit">{actionName}</Button>
        </Form>
    );
}

export default EmployeeForm;