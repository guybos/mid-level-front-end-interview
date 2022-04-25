import './App.css'
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store/store';
import EmployeeDiv from './components/employees/EmloyeeDiv';
import ManagerDiv from './components/managers/ManagerDiv';
import { useEffect } from 'react';
import { currentEmployeeSelector } from './store/employees/EmployeeSelectors';
import { fetchAllEmployeeAction } from './store/employees/EmployeeActions';
import { fetchAllManagerAction } from './store/managers/managerActions';
import { currentManagerSelector } from './store/managers/managerSelectors';


const App =() => {

    const dispatch = useDispatch();
    const { employees } = useSelector(currentEmployeeSelector);
    const { managers } = useSelector(currentManagerSelector);
    
    useEffect(() => {
        dispatch(fetchAllManagerAction());
        dispatch(fetchAllEmployeeAction());
    },[]);

    return (
        <div className="App">
            <EmployeeDiv 
            className="employees"
            employees={employees!}
            managers={managers!}
            header='Employees' 
            placeHolder='Search employee name' 
            />

            <ManagerDiv 
            className="management" 
            header='Management' 
            managers={managers!}
            placeHolder='Search manager name' 
            />


        </div>
    )
}
const AppWrapper =() => (
    <Provider store={store}>
        <App />
    </Provider>
)
export default AppWrapper;
