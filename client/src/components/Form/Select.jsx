/* eslint-disable react/prop-types */
import { useFormContext } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';

import { findFormError } from '../../util/findFormError';
import { isFormInvalid } from '../../util/isFormInvalid';

export default function Select({ id, label, type, validation, name, className, options, defaultValue }) {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const inputError = findFormError(errors, name);
    const isInvalid = isFormInvalid(inputError);

    const input_tailwind =
        'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';

    return (
        <div className={className}>
            <div className='flex items-center justify-between'>
                <label htmlFor={id} className='block text-sm font-medium leading-6 text-gray-900'>
                    {label}
                </label>
            </div>

            <div className='mt-2'>
                <select
                    id={id}
                    type={type}
                    className={input_tailwind}
                    defaultValue={defaultValue}
                    {...register(name, validation)}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.value}
                        </option>
                    ))}
                </select>

                <AnimatePresence mode='wait' initial={false}>
                    {isInvalid && <InputError message={inputError.error.message} key={inputError.error.message} />}
                </AnimatePresence>
            </div>
        </div>
    );
}

const InputError = ({ message }) => {
    return (
        <motion.p
            className='flex items-center gap-1 mt-2 font-medium text-sm text-red-500 rounded-md'
            {...framer_error}>
            {message}
        </motion.p>
    );
};

const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
};
