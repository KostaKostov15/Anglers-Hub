/* eslint-disable no-useless-escape */

export const email_validation = {
    id: 'email',
    name: 'email',
    type: 'email',
    label: 'Email address',
    placeholder: 'peter@abv.bg',
    multiline: false,
    validation: {
        required: {
            value: true,
            message: 'Email is required',
        },
        maxLength: {
            value: 50,
            message: 'Email should be at most 50 characters',
        },
        pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: 'Invalid email address',
        },
    },
};

export const password_validation = {
    id: 'password',
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: '',
    multiline: false,
    validation: {
        required: {
            value: true,
            message: 'Password is required',
        },
        minLength: {
            value: 6,
            message: 'Password must be at least 6 characters',
        },
    },
};

export const rePassword_validation = {
    id: 'rePassword',
    name: 'rePassword',
    type: 'password',
    label: 'Confirm Password',
    placeholder: '',
    multiline: false,
    validation: {},
};

export const username_validation = {
    id: 'username',
    name: 'username',
    type: 'text',
    label: 'Username',
    placeholder: 'Peter',
    multiline: false,
    validation: {
        required: {
            value: true,
            message: 'Username is required',
        },
        minLength: {
            value: 3,
            message: 'Username should be at least 3 characters',
        },
    },
};
