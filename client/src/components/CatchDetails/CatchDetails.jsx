/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import CatchEdit from './CatchEdit/CatchEdit';
import CatchDelete from './CatchDelete/CatchDelete';
import AuthContext from '../../contexts/authContext';
import { getById, remove } from '../../services/dataService';

import {
    MapPinIcon,
    CalendarDaysIcon,
    UserCircleIcon,
    HandThumbUpIcon,
    HandThumbDownIcon,
    ChevronRightIcon,
} from '@heroicons/react/24/outline';
import Path from '../../paths';
import Loader from '../Loader/Loader';
import dateFormatter from '../../util/dateFormatter';
import { addLike, getByCatchId, getIsCatchLiked, removeLike } from '../../services/likeService';

export default function CatchDetails() {
    const [catchDetails, setCatchDetails] = useState({});
    const [catchLikes, setCatchLikes] = useState(0);
    const [isCatchLiked, setIsCatchLiked] = useState(false);

    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isLikeLoading, setIsLikeLoading] = useState(false);

    const { userId, isAuthenticated } = useContext(AuthContext);
    const { catchId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const result = await getById(catchId);
            const likes = await getByCatchId(catchId);

            if (isAuthenticated) {
                const isLiked = await getIsCatchLiked(catchId);

                isLiked.length > 0 && setIsCatchLiked(true);
            }

            setCatchDetails(result);
            setCatchLikes(likes);
            setIsLoading(false);
        };

        fetchData();
    }, [catchId]);

    const toggleEditModal = () => {
        setIsEditOpen((oldState) => !oldState);
    };

    const toggleDeleteModal = () => {
        setIsDeleteOpen((oldState) => !oldState);
    };

    const updateCatchDetails = (data) => {
        setCatchDetails(data);
    };

    const deleteCatch = async () => {
        setIsLoading(true);
        await remove(catchId);

        setIsLoading(false);
        navigate(Path.Browse);
    };

    const handleLikeSubmit = async () => {
        setIsLikeLoading(true);

        try {
            await addLike({ catchId: catchId });

            setIsLikeLoading(false);
            setIsCatchLiked(true);
            setCatchLikes((oldValue) => {
                return (oldValue += 1);
            });
        } catch (err) {
            console.log(err.message);
            setIsLikeLoading(false);
        }
    };

    const handleDislikeSubmit = async () => {
        setIsLikeLoading(true);

        try {
            await removeLike(catchId);

            setIsLikeLoading(false);
            setIsCatchLiked(false);
            setCatchLikes((oldValue) => {
                return (oldValue -= 1);
            });
        } catch (err) {
            console.log(err.message);
            setIsLikeLoading(false);
        }
    };

    return (
        <>
            {isAuthenticated ? (
                <CatchEdit
                    isOpen={isEditOpen}
                    toggleModal={toggleEditModal}
                    catchId={catchId}
                    catchDetails={catchDetails}
                    updateCatchDetails={updateCatchDetails}
                />
            ) : null}
            {isAuthenticated ? (
                <CatchDelete isOpen={isDeleteOpen} toggleModal={toggleDeleteModal} deleteCatch={deleteCatch} />
            ) : null}
            <div className='bg-white'>
                {/* Catch info */}
                {isLoading ? (
                    <Loader />
                ) : (
                    <div className='mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-2 lg:pt-2'>
                        <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
                            <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
                                {catchDetails?.owner?.username}
                                {"'s Catch"}
                            </h1>

                            <div className='flex justify-start items-center mt-1'>
                                <h3 className='text-sm text-sky-700 pr-1'>
                                    <MapPinIcon className='h-5 w-5' />
                                </h3>
                                <p className='text-base font-medium text-sky-700 capitalize'>
                                    {catchDetails.reservoirName}
                                    {', '}
                                    {catchDetails.region}
                                </p>
                            </div>
                        </div>

                        {/* Catch information */}
                        <div className='mt-4 lg:row-span-3 lg:mt-0'>
                            <div className='aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg'>
                                <img
                                    src={catchDetails.imageUrl}
                                    alt={catchDetails.fishSpecie}
                                    className='h-full w-full object-cover object-center'
                                />
                            </div>

                            {/* Fish weight */}
                            <h2 className='sr-only'>Catch information</h2>
                            <p className='text-3xl tracking-tight text-gray-900 mt-5 text-center'>
                                {catchDetails.fishSpecie}
                                <span className='ml-2 text-sky-700'>{catchDetails.fishWeight}</span>
                                <span className='text-base uppercase'> kg</span>
                            </p>

                            {/* Likes */}
                            {isAuthenticated && userId != catchDetails.owner?._id && (
                                <div className='mt-3'>
                                    <h3 className='sr-only'>Likes</h3>
                                    <div className='flex items-center justify-center'>
                                        <div className='flex items-center gap-6 justify-between'>
                                            {isLikeLoading ? (
                                                <Loader />
                                            ) : (
                                                <>
                                                    {isCatchLiked ? (
                                                        <button onClick={handleDislikeSubmit}>
                                                            <HandThumbDownIcon className='text-red-500 h-10 w-10' />
                                                        </button>
                                                    ) : (
                                                        <button onClick={handleLikeSubmit}>
                                                            <HandThumbUpIcon className='text-sky-700 h-10 w-10' />
                                                        </button>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                            <p className='mt-3 text-xl tracking-tight text-gray-900 text-center'>
                                Total Likes: <span className='ml-2 text-sky-700 text-3xl'>{catchLikes}</span>
                            </p>

                            {/* Actions - edit, delete */}
                            {isAuthenticated && userId === catchDetails?.owner?._id ? (
                                <>
                                    <button
                                        onClick={toggleEditModal}
                                        className='mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                                        Edit
                                    </button>
                                    <button
                                        onClick={toggleDeleteModal}
                                        className='mt-2 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                                        Delete
                                    </button>
                                </>
                            ) : null}
                        </div>

                        <div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6'>
                            {/* Hours Fished */}
                            <div className='mt-5'>
                                <h2 className='text-lg font-semibold text-gray-900'>Hours Fished</h2>

                                <div className='flex justify-start items-center mt-2 pl-2 gap-2'>
                                    <ChevronRightIcon className='h-4 w-4'></ChevronRightIcon>
                                    <p className='text-base font-medium text-gray-600 capitalize'>
                                        {catchDetails.hoursFished}
                                    </p>
                                </div>
                            </div>

                            {/* Weather */}
                            <div className='mt-5'>
                                <h2 className='text-lg font-semibold text-gray-900'>Weather</h2>

                                <div className='flex justify-start items-center mt-2 pl-2 gap-2'>
                                    <ChevronRightIcon className='h-4 w-4'></ChevronRightIcon>
                                    <p className='text-base font-medium text-gray-600 capitalize'>
                                        {catchDetails.weather}
                                    </p>
                                </div>
                            </div>

                            {/* Fish bait */}
                            <div className='mt-5'>
                                <h2 className='text-lg font-semibold text-gray-900'>Bait</h2>

                                <div className='flex justify-start items-center mt-2 pl-2 gap-2'>
                                    <ChevronRightIcon className='h-4 w-4'></ChevronRightIcon>
                                    <p className='text-base font-medium text-gray-600 capitalize'>
                                        {catchDetails.fishBait}
                                    </p>
                                </div>
                            </div>

                            {/* Details */}
                            <div className='mt-5'>
                                <h2 className='text-lg font-semibold text-gray-900'>Details</h2>

                                <div className='mt-2 space-y-1 pl-2'>
                                    <p className='text-base font-medium text-gray-600'>{catchDetails.details}</p>
                                </div>
                            </div>

                            {/* Creation info */}
                            <div className='mt-5'>
                                <h2 className='text-lg font-semibold text-gray-900'>Creation Info</h2>

                                <div className='mt-2 space-y-1 pl-2'>
                                    <div className='flex items-center gap-4'>
                                        <UserCircleIcon className='h-5 w-5'></UserCircleIcon>
                                        <p className='text-base font-medium text-gray-600'>
                                            {catchDetails.owner?.email}
                                        </p>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <CalendarDaysIcon className='h-5 w-5'></CalendarDaysIcon>
                                        <p className='text-base font-medium text-gray-600'>
                                            {dateFormatter(catchDetails.createdAt)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
