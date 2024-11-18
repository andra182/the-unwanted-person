import React, { useState } from 'react'
import TypeIt from "typeit-react";

import "./style.css"
const PageDialog = () => {
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertClass, setAlertClass] = useState('');

    const handleButtonClick = () => {
        setAlertVisible(true);
        setAlertClass('animate-slide-in');
        setTimeout(() => {
            setAlertClass('animate-slide-out');
            setTimeout(() => {
                setAlertVisible(false);
                setAlertClass(''); // Reset class after hiding
            }, 500); // Durasi animasi keluar
        }, 3000); // Menyembunyikan alert setelah 3 detik
    };


    return (
        <div className='bg-black'>
            <img src="/bg.png" alt="" srcset="" className='absolute opacity-80 w-screen h-screen overflow-y-hidden' />
            <p className='p-10 relative text-xl font-bold text-white'>DAY 1</p>
            <div className='relative bottom-14'>
                <div className="bottom-28 h-screen relative flex justify-center items-center">
                    <p className='text-4xl font-bold text-black '>Ini Adalah Hari Pertama Dimulai</p>
                    <img className="w-96" src="/Tocil.png" alt="" srcset="" />
                </div>

                <div className='relative bottom-56 bg-[#F9E3B4] p-5 mx-36 rounded-2xl border-2 border-black border-solid'>
                    <div className="top-[-3vh]  border-2 border-black  absolute rounded-xl px-5 py-1 bg-[#fffaad]">
                       <p className='font-semibold'>Clara</p> 
                    </div>
                    
                    <p className='text-black text-xl font-medium' id='simpleUsage'>
                    <TypeIt
                            options={{
                                speed: 50,
                                waitUntilVisible: true,
                            }}
                        >
                            lorem*500.
                        </TypeIt>
                    </p>
                    <div className="relative z-10 flex gap-10 mt-10">
                        <button className="button-56" role="button" onClick={handleButtonClick}>WKWK YATIM GOBLOK</button>
                        <button className="button-56" role="button">YATIM MAH YATIM AJA</button>
                    </div>
                </div>

                {alertVisible && (
                    <div className={`fixed top-20 left-5 bg-red-500 text-white p-4 rounded-lg transition-transform ${alertClass}`}>
                       Perkataan Anda Menyakiti Perasaan Clara
                    </div>
                )}
            </div>
        </div>
    )
}

export default PageDialog