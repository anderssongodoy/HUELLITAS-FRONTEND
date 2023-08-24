import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {

    return (
        <>
            <div className=''>
                <div className="h-screen grid grid-cols-2">
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-5xl ml-32 -mt-72'>ENCUENTRA A TU</div>
                        <div className='text-secondary text-4xl ml-32'>COMPAÑERO DE VIDA</div>
                        <div className="mt-12">
                            <Link className="bg-secondary text-white hover:bg-white hover:text-secondary px-4 py-2 rounded" to="/adopcion">VER MASCOTAS</Link>
                        </div>
                    </div>
                    <div className='relative flex justify-center overflow-hidden'>
                        <div className='absolute bottom-32 left-0 right-0 h-24 bg-green-500 rounded-bl-full rounded-br-full'></div>
                        <div className='absolute top-32 left-0 right-0 bottom-56 bg-green-500'></div>
                        <div className='absolute top-20 left-0 right-0 h-24 bg-green-500 rounded-tl-full rounded-tr-full transform -translate-y-1/2'></div>
                        <img className='max-w-full max-h-full z-10 -mt-32' src='/images/imagehome.png' alt='Descripción de la imagen' />
                    </div>
                </div>
            </div>
        </>
    );
};