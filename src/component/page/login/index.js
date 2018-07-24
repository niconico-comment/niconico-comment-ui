import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {FaLock, FaUser} from 'react-icons/lib/fa'
import {Field, Form} from 'react-final-form'

import styled from "styled-components";

import actions from '../../../actions/auth-actions'

const LoginForm = styled.section.attrs({className: 'form-login'})`
    margin-top: 2rem;
`;

const LoginPage = (props) => (
    <LoginForm className={'form-login'}>
        <Form
            onSubmit={props.onLogin}
            render={({handleSubmit, pristine, invalid}) => (
                <form onSubmit={handleSubmit}>
                    <div className={'field'}>
                        <Field name={'userId'}>
                            {({input, meta}) => (
                                <p className={'control has-icons-left'}>
                                    <input type={'text'} {...input} className={'input'} placeholder={'User ID'}/>

                                    <span className={'icon is-small is-left'}>
                                        <FaUser/>
                                    </span>
                                </p>
                            )}
                        </Field>
                    </div>
                    <div className={'field'}>
                        <Field name={'password'}>
                            {({input, meta}) => (
                                <div className={'control'}>
                                    <p className={'control has-icons-left'}>
                                        <input type={'password'} {...input} className={'input'}
                                               placeholder={'Password'}/>
                                        <span className={'icon is-small is-left'}>
                                            <FaLock/>
                                        </span>
                                    </p>
                                </div>
                            )}
                        </Field>
                    </div>
                    <div className={'field'}>
                        <p className={'control'}>
                            <button className={'button is-success'} disabled={pristine || invalid}>
                                Login
                            </button>
                        </p>
                    </div>
                </form>
            )}
        />
    </LoginForm>
)

export default withRouter(connect(
    null,
    (dispatch, props) => {
        return {
            onLogin: (values) => {
                dispatch(actions.authLogin({
                    id: values.userId,
                    password: values.password
                }))
                props.history.push('/login')
            }
        }
    }
)(LoginPage))