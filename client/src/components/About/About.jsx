import hero from '../../assets/hero.jpg';

// export default function About() {
//     return (
//         <div className='min-h-screen p-8 font-raleway'>
//             <div className='max-w-4xl mx-auto'>
//                 <h1 className='text-4xl font-bold mb-4'>About Anglers Hub</h1>

//                 <p className='text-lg mb-8'>Welcome to Anglers Hub, Where Every Catch Tells a Story!</p>

//                 <section className='mb-8'>
//                     <h2 className='text-2xl font-bold mb-4'>Our Mission</h2>
//                     <p>
//                         At Anglers Hub, we believe that every fishing adventure is a unique tale waiting to be told.
//                         Whether you&apos;re an avid angler with years of experience or a newcomer to the world of
//                         fishing, our platform is designed to be your digital companion on the journey of exploration,
//                         excitement, and camaraderie.
//                     </p>
//                 </section>

//                 <section className='mb-8'>
//                     <h2 className='text-2xl font-bold mb-4'>Who We Are</h2>
//                     <p>
//                         Anglers Hub was born out of a shared love for the thrill of the catch and the joy of sharing
//                         those moments with a like-minded community. We understand the significance of each fish caught -
//                         the anticipation, the struggle, and the triumph - and we wanted to create a space where anglers
//                         of all levels can come together to celebrate their fishing stories.
//                     </p>
//                 </section>

//                 <section className='mb-8'>
//                     <h2 className='text-2xl font-bold mb-4'>What Sets Us Apart</h2>
//                     <ul className='list-disc list-inside'>
//                         <li>
//                             <strong>Community Focus:</strong> Anglers Hub is more than just a logging platform;
//                             it&apos;s a thriving community of anglers. Share your expertise, learn from others, and
//                             build connections that extend beyond the shores.
//                         </li>
//                         <li>
//                             <strong>User-Friendly Experience:</strong> We&apos;ve designed our platform with simplicity
//                             in mind. Logging your catches, exploring fishing spots, and connecting with fellow anglers
//                             is easy and enjoyable.
//                         </li>
//                     </ul>
//                 </section>

//                 <section className='mb-8'>
//                     <h2 className='text-2xl font-bold mb-4'>Join Us on the Journey</h2>
//                     <p>
//                         Whether you&apos;re a weekend warrior, a competitive angler, or someone just starting to explore
//                         the world of fishing, Anglers Hub is here for you. Join our community, log your catches, and
//                         let&apos;s create a tapestry of fishing stories together.
//                     </p>
//                     <p className='mt-4'>🎣 Happy Fishing! 🎣</p>
//                 </section>
//             </div>
//         </div>
//     );
// }

const About = () => {
    return (
        <div className='min-h-screen p-4 md:p-8 font-raleway'>
            <div className='max-w-4xl mx-auto'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 text-gray-500 text-center'>
                    About Anglers Hub
                </h1>

                <img
                    src={hero}
                    alt='About [Your Website Name]'
                    className='w-full h-64 object-cover mb-8 md:mb-12 rounded-lg'
                />

                <p className='text-base md:text-lg mb-4 md:mb-8'>
                    Welcome to Anglers Hub, Where Every Catch Tells a Story!
                </p>

                {/* ... Rest of the content remains the same ... */}

                <section className='mb-8'>
                    <h2 className='text-2xl font-bold mb-4'>Our Mission</h2>
                    <p>
                        At Anglers Hub, we believe that every fishing adventure is a unique tale waiting to be told.
                        Whether you&apos;re an avid angler with years of experience or a newcomer to the world of
                        fishing, our platform is designed to be your digital companion on the journey of exploration,
                        excitement, and camaraderie.
                    </p>
                </section>

                <section className='mb-8'>
                    <h2 className='text-2xl font-bold mb-4'>Who We Are</h2>
                    <p>
                        Anglers Hub was born out of a shared love for the thrill of the catch and the joy of sharing
                        those moments with a like-minded community. We understand the significance of each fish caught -
                        the anticipation, the struggle, and the triumph - and we wanted to create a space where anglers
                        of all levels can come together to celebrate their fishing stories.
                    </p>
                </section>

                <section className='mb-8'>
                    <h2 className='text-2xl font-bold mb-4'>What Sets Us Apart</h2>
                    <ul className='list-disc list-inside'>
                        <li>
                            <strong>Community Focus:</strong> Anglers Hub is more than just a logging platform;
                            it&apos;s a thriving community of anglers. Share your expertise, learn from others, and
                            build connections that extend beyond the shores.
                        </li>
                        <li>
                            <strong>User-Friendly Experience:</strong> We&apos;ve designed our platform with simplicity
                            in mind. Logging your catches, exploring fishing spots, and connecting with fellow anglers
                            is easy and enjoyable.
                        </li>
                    </ul>
                </section>

                <section className='mb-8'>
                    <h2 className='text-2xl font-bold mb-4'>Join Us on the Journey</h2>
                    <p>
                        Whether you&apos;re a weekend warrior, a competitive angler, or someone just starting to explore
                        the world of fishing, Anglers Hub is here for you. Join our community, log your catches, and
                        let&apos;s create a tapestry of fishing stories together.
                    </p>
                    <p className='mt-4'>🎣 Happy Fishing! 🎣</p>
                </section>
            </div>
        </div>
    );
};

export default About;
