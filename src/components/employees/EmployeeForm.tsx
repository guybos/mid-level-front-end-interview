import { useEffect, useState } from "react";
import { Form, FormControl, InputGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Employee, EmployeeRequest } from "../../interfaces/Employee";
import { addEmployeeAction, deleteEmployeeAction, fetchEmployeeAction, updateEmployeeAction } from "../../store/employees/EmployeeActions";
import { currentEmployeeSelector } from "../../store/employees/EmployeeSelectors";

type EmployeeFormProps = {
    actionName: string,
    list: Employee[],
    employee?: Employee
    close: () => void
}

function EmployeeForm({
    actionName,
    list,
    employee,
    close
}: EmployeeFormProps) {

    useEffect(() => {
        if (employee !== undefined) {
            const request: EmployeeRequest = {
                employee: employee,
                all: list
            }
            dispatch(fetchEmployeeAction(request));
        }
    });


    const dispatch = useDispatch();
    const { currentEmployee } = useSelector(currentEmployeeSelector);
    const [validated, setValidated] = useState(false);

    const [firstName, setFirstName] = useState(currentEmployee?.first_name!);
    const [lastName, setLastName] = useState(currentEmployee?.last_name!);
    const [email, setEmail] = useState(currentEmployee?.email!);
    const [ipAdress, setIpAdress] = useState(currentEmployee?.ip_address!);
    const [gender, setGender] = useState(currentEmployee?.gender!);

    const update = async (person: Employee, list: Employee[]) =>{
        console.log(person?.id!);
        dispatch(updateEmployeeAction({employee: person, all:list}));
    }

    const add= async (person: Employee, list: Employee[]) =>{
        console.log(person?.id!);
        dispatch(addEmployeeAction({employee: person, all:list}));
    }
    const deleteFunc = async (person: Employee, list: Employee[]) =>{
        console.log(person?.id!);
        dispatch(deleteEmployeeAction({employee: person, all:list}));
    }

    const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        const employee: Employee = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            gender: gender,
            ip_address: ipAdress,
            id: actionName == "add" ? list.length + 1 : currentEmployee?.id!
        }
        if(actionName == "update"){
            update(employee, list!);
        }else if(actionName ="add"){
            add(employee, list!);
        }else{
            deleteFunc(employee, list!);
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