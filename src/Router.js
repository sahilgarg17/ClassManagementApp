import React from 'react';
import { Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key = "root" sceneStyle = {{paddingTop: 65}} hideNavBar>
                <Scene key = "auth">
                    <Scene key="login" component={LoginForm} title="Please Login!"
                    initial />
                </Scene>
                <Scene key = "main">
                    <Scene rightTitle="Add" 
                        onRight = {() => Actions.employeeCreate()}
                        key="employeeList" component={EmployeeList} title="Student List:" initial />
                    <Scene key = "employeeCreate" component={EmployeeCreate} title = "Create Student" />
                    <Scene key = "employeeEdit" component={EmployeeEdit} title = "Edit Student" />
                </Scene>
            </Scene>
        </Router>
    );
};
export default RouterComponent;