/* eslint-disable react/prop-types */
import { useFormContext } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';

import { findInputError } from '../../util/findInputError';
import { isFormInvalid } from '../../util/isFormInvalid';

export default function Input({ id, label, type, placeholder, validation, name, multiline, className }) {
    const {
        register,
        watch,
        formState: { errors },
    } = useFormContext();

    const inputError = findInputError(errors, name);
    const isInvalid = isFormInvalid(inputError);

    const rePasswordValidation = {
        required: {
            value: true,
            message: 'Confirm Password is required',
        },

        validate: (val) => {
            if (watch('password') != val) {
                return "Passwords don't match";
            }
        },
    };

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
                {multiline ? (
                    <textarea
                        id={id}
                        type={type}
                        className={input_tailwind}
                        placeholder={placeholder}
                        {...register(name, validation)}></textarea>
                ) : (
                    <input
                        id={id}
                        type={type}
                        className={input_tailwind}
                        placeholder={placeholder}
                        {...register(name, name == 'rePassword' ? rePasswordValidation : validation)}
                    />
                )}

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
            className='flex items-center gap-1 mt-2 font-medium text-sm text-red-500  rounded-md'
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
