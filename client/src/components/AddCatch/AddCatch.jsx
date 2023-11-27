const AddCatch = () => {
    return (
        <form>
            <div className='space-y-12'>
                <div className='border-b border-gray-900/10 pb-12'>
                    <h2 className='text-base font-semibold leading-7 text-gray-900 text-xl'>Location Info</h2>
                    <p className='mt-1 text-sm leading-6 text-gray-600'>Write the location of the caught fish.</p>

                    <div className='mt-10 space-y-10'>
                        <fieldset>
                            <legend className='text-sm font-semibold leading-6 text-gray-900'>Reservoir Type *</legend>

                            <div className='mt-4 space-y-4'>
                                <div className='flex items-center gap-x-3'>
                                    <input
                                        id='river'
                                        name='waterBody'
                                        type='radio'
                                        className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                    />
                                    <label
                                        htmlFor='river'
                                        className='block text-sm font-medium leading-6 text-gray-900'>
                                        River
                                    </label>
                                </div>
                                <div className='flex items-center gap-x-3'>
                                    <input
                                        id='dam'
                                        name='waterBody'
                                        type='radio'
                                        className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                    />
                                    <label htmlFor='dam' className='block text-sm font-medium leading-6 text-gray-900'>
                                        Dam
                                    </label>
                                </div>
                                <div className='flex items-center gap-x-3'>
                                    <input
                                        id='pond'
                                        name='waterBody'
                                        type='radio'
                                        className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                    />
                                    <label htmlFor='pond' className='block text-sm font-medium leading-6 text-gray-900'>
                                        Pond
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                    </div>

                    <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4'>
                        <div className='sm:col-span-2 sm:col-start-1'>
                            <label htmlFor='city' className='block text-sm font-medium leading-6 text-gray-900'>
                                Reservoir Name *
                            </label>
                            <div className='mt-2'>
                                <input
                                    type='text'
                                    name='city'
                                    id='city'
                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                />
                            </div>
                        </div>

                        <div className='sm:col-span-2'>
                            <label htmlFor='region' className='block text-sm font-medium leading-6 text-gray-900'>
                                Area / Province *
                            </label>
                            <div className='mt-2'>
                                <input
                                    type='text'
                                    name='region'
                                    id='region'
                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border-b border-gray-900/10 pb-12'>
                    <h2 className='text-base font-semibold leading-7 text-gray-900 text-xl'>Catch Info</h2>
                    <p className='mt-1 text-sm leading-6 text-gray-600'>
                        Write some details about the fish you caught.
                    </p>

                    <div className='mt-10 space-y-10'>
                        <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                            <div className='sm:col-span-3'>
                                <label htmlFor='fishType' className='block text-sm font-medium leading-6 text-gray-900'>
                                    Fish Type *
                                </label>
                                <div className='mt-2'>
                                    <select
                                        id='fishType'
                                        name='fishType'
                                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'>
                                        <option>---</option>
                                        <option>Catfish</option>
                                        <option>Pike</option>
                                        <option>Perch</option>
                                        <option>Trout</option>
                                        <option>Mullet</option>
                                        <option>Zander (Whitefish)</option>
                                        <option>Sturgeon</option>
                                        <option>Barbel</option>
                                        <option>Common Bream</option>
                                        <option>Common Carp</option>
                                        <option>Grass Carp</option>
                                        <option>Silver Carp</option>
                                        <option>Crucian Carp</option>
                                    </select>
                                </div>
                            </div>

                            <div className='sm:col-span-3'>
                                <label
                                    htmlFor='fishWeight'
                                    className='block text-sm font-medium leading-6 text-gray-900'>
                                    Weight [kg] *
                                </label>
                                <div className='mt-2'>
                                    <input
                                        type='number'
                                        step={0.01}
                                        min={0.01}
                                        max={400}
                                        name='fishWeight'
                                        id='fishWeight'
                                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='col-span-full'>
                            <label htmlFor='details' className='block text-sm font-medium leading-6 text-gray-900'>
                                Details
                            </label>
                            <p className='mt-3 text-sm leading-6 text-gray-600'>
                                Write a few sentences about the catch, baits or the fishing gear used.
                            </p>
                            <div className='mt-2'>
                                <textarea
                                    id='details'
                                    name='details'
                                    rows={3}
                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                    defaultValue={''}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-6 flex items-center justify-end gap-x-6'>
                <button type='button' className='text-sm font-semibold leading-6 text-gray-900'>
                    Cancel
                </button>
                <button
                    type='submit'
                    className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                    Save
                </button>
            </div>
        </form>
    );
};

export default AddCatch;
