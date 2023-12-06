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
            value: 30,
            message: 'Email should be at most 30 characters',
        },
        pattern: {
            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            message: 'Invalid email address',
        },
    },
};

export const password_validation = {
    id: 'password',
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password ...',
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
