import React, { Component } from 'react';
import {Text, View} from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }
    renderButton() {
        if(this.props.loading) {
            return <Spinner size="large" />
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button>
        );
    }
    renderError() {
        if(this.props.error) {
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    render() {
        return(
    <View>
        <View style = {{backgroundColor: '#1100ff'}}>
            <Card>
                <CardSection>
                    <Input label="Email: " placeholder="abc@gmail.com" onChangeText={this.onEmailChange.bind(this)} 
                        value={this.props.email} /> 
                </CardSection>
                    
                <CardSection>
                    <Input secureTextEntry label="Password: " placeholder="password" 
                        onChangeText={this.onPasswordChange.bind(this)} value={this.props.password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        </View>
         <Text style = {{fontSize: 15}}>


            Note:- If you don't have an account then sign up on this page else sign-in on the same page.
         </Text>
    </View>
        );     
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    }
}
const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading,
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);