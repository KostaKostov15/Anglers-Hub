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
            message: 'Username must be at least 3 characters',
        },
    },
};

export const reservoirName_validation = {
    id: 'reservoirName',
    name: 'reservoirName',
    type: 'text',
    label: 'Reservoir Name *',
    placeholder: 'Iskar',
    multiline: false,
    validation: {
        required: {
            value: true,
            message: 'Reservoir name is required',
        },
        minLength: {
            value: 3,
            message: 'Reservoir name should be at least 3 characters',
        },
    },
};

export const region_validation = {
    id: 'region',
    name: 'region',
    type: 'text',
    label: 'Area / Province *',
    placeholder: 'Sofia',
    multiline: false,
    validation: {
        required: {
            value: true,
            message: 'Region is required',
        },
    },
};

export const fishSpecie_validation = {
    id: 'fishSpecie',
    name: 'fishSpecie',
    label: 'Fish Specie *',
    multiline: false,
    options: [
        { value: '---' },
        { value: 'Pike' },
        { value: 'Trout' },
        { value: 'Perch' },
        { value: 'Carp' },
        { value: 'Catfish' },
        { value: 'Sturgeon' },
    ],

    validation: {
        required: {
            value: true,
            message: 'Fish specie is required',
        },
        pattern: {
            value: /\w+/g,
            message: 'Please select fish specie',
        },
    },
};

export const fishWeight_validation = {
    id: 'fishWeight',
    name: 'fishWeight',
    type: 'number',
    label: 'Fish Weight (kg) *',
    placeholder: '1.35',
    multiline: false,
    validation: {
        required: {
            value: true,
            message: 'Fish weight is required',
        },
        min: {
            value: 0.1,
            message: 'Fish weight must be between 0.1 and 400',
        },
        max: {
            value: 400,
            message: 'Fish weight must be between 0.1 and 400',
        },
    },
};

export const imageUrl_validation = {
    id: 'imageUrl',
    name: 'imageUrl',
    type: 'text',
    label: 'Image Url *',
    placeholder: 'http://example.com/image/1',
    multiline: false,
    validation: {
        required: {
            value: true,
            message: 'Image Url is required',
        },
    },
};

export const details_validation = {
    id: 'details',
    name: 'details',
    type: 'text',
    label: 'Details',
    placeholder: 'Write a few sentences about the catch, baits or the fishing gear used',
    multiline: true,
    validation: {},
};
