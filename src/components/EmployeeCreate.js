import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View} from 'react-native';
import { employeeUpdate, employeeCreate } from '../actions';
import {Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';
class EmployeeCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }
    render() {
        return (
        <View style = {{backgroundColor: '#ff8a65'}}>
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress = {this.onButtonPress.bind(this)}>
                        Create!
                    </Button>
                </CardSection>
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

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);