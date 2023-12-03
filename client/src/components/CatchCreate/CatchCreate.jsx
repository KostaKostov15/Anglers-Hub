import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ReservoirNameInput from './FormEntries/ReservoirNameInput';
import RegionInput from './FormEntries/RegionInput';
import FishSpecieSelect from './FormEntries/FishSpecieSelect';
import FishWeightInput from './FormEntries/FishWeightInput';
import ImageUrlInput from './FormEntries/ImageUrlInput';
import DetailsInput from './FormEntries/DetailsInput';

import { create } from '../../services/dataService';
import Path from '../../paths';

const formInitialState = {
    reservoirName: '',
    region: '',
    fishSpecie: '',
    fishWeight: '',
    imageUrl: '',
    details: '',
};

const CatchCreate = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState(formInitialState);

    const changeHandler = (e) => {
        let value = '';

        switch (e.target.type) {
            case 'number':
                value = Number(e.target.value);
                break;
            default:
                value = e.target.value;
                break;
        }

        setFormValues((state) => ({
            ...state,
            [e.target.name]: value,
        }));
    };

    const resetFormHandler = () => {
        setFormValues(formInitialState);
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        await create(formValues);

        resetFormHandler();

        navigate(Path.Home);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='space-y-12'>
                <div className='border-b border-gray-900/10 pb-12'>
                    <h2 className='text-base font-semibold leading-7 text-gray-900 text-xl'>Location Info</h2>
                    <p className='mt-1 text-sm leading-6 text-gray-600'>Write the location of the caught fish.</p>

                    <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4'>
                        <ReservoirNameInput value={formValues.reservoirName} onChange={changeHandler} />

                        <RegionInput value={formValues.region} onChange={changeHandler} />
                    </div>
                </div>

                <div className='border-b border-gray-900/10 pb-12'>
                    <h2 className='text-base font-semibold leading-7 text-gray-900 text-xl'>Catch Info</h2>
                    <p className='mt-1 text-sm leading-6 text-gray-600'>
                        Write some details about the fish you caught.
                    </p>

                    <div className='mt-10 space-y-10'>
                        <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                            <FishSpecieSelect value={formValues.fishSpecie} onChange={changeHandler} />

                            <FishWeightInput value={formValues.fishWeight} onChange={changeHandler} />
                        </div>

                        <ImageUrlInput value={formValues.imageUrl} onChange={changeHandler} />

                        <DetailsInput value={formValues.details} onChange={changeHandler} />
                    </div>
                </div>
            </div>

            <div className='mt-6 flex items-center justify-end gap-x-6'>
                <button
                    onClick={resetFormHandler}
                    type='button'
                    className='text-sm font-semibold leading-6 text-gray-900'>
                    Cancel
                </button>
                <button
                    type='submit'
                    className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                    Create
                </button>
            </div>
        </form>
    );
};

export default CatchCreate;
