import _ from 'lodash';
import {View} from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import {Card, CardSection, Button, Confirm } from './common';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
class EmployeeEdit extends Component {
    state = {showModal: false};
    UNSAFE_componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }
    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid })
    }
    onTextPress() {
        const {phone, shift} = this.props;
        Communications.text(phone, `Your upcoming class is on ${shift}`); 
    }
    onAccept() {
            const { uid } = this.props.employee;
            this.props.employeeDelete({uid});
    }
    onDecline() {
        this.setState({showModal: false});
    }
    render() {
        return (
        <View style = {{backgroundColor: '#ff8a65'}}>
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress = {this.onButtonPress.bind(this)}>
                       Save Changes!!
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress = {this.onTextPress.bind(this)}>
                        Text Schedule!!
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress = { () => this.setState({showModal: !this.state.showModal })}>
                        Suspend Student!!
                    </Button>
                </CardSection>
                <Confirm
                    visible = {this.state.showModal}
                    onAccept = { this.onAccept.bind(this)}
                    onDecline = { this.onDecline.bind(this)}
                >
                    Are you damn sure you want to suspend the student?
                </Confirm>
            </Card>
        </View>
        );
    };
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}
const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);