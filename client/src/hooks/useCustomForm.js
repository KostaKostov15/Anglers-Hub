import { useState } from 'react';

export default function useCustomForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);

    const onChange = (event) => {
        let newValue = '';

        const { value, name } = event.target;

        switch (event.target.type) {
            case 'number':
                newValue = Number(value);
                break;
            default:
                newValue = value;
                break;
        }

        setValues((oldState) => ({
            ...oldState,
            [name]: newValue,
        }));
    };

    const onSubmit = (event) => {
        event.preventDefault();

        submitHandler(values);
        setValues(initialValues);
    };

    return {
        values,
        onChange,
        onSubmit,
    };
}
