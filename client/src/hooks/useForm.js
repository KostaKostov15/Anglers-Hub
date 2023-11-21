import { useState } from 'react';

export default function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);

    const onChange = (event) => {
        const { value, name } = event.target;

        setValues((oldState) => ({
            ...oldState,
            [name]: value,
        }));
    };

    const onSubmit = (event) => {
        event.preventDefault();

        submitHandler(values);
    };

    return {
        values,
        onChange,
        onSubmit,
    };
}
