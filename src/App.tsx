import './App.css'
import { Provider } from 'react-redux';
import store from './store/store';
import EmployeeDiv from './components/employees/EmloyeeDiv';
import ManagerDiv from './components/managers/ManagerDiv';


const App =() => {

    return (
        <div className="App">
            <EmployeeDiv 
            className="employees"
            header='Employees' 
            placeHolder='Search employee name' 
            />

            <ManagerDiv 
            className="management" 
            header='Management' 
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
