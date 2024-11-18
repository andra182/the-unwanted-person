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

    const NamaKarakter = (params) => {
        return <div className=""></div>
    }


    return (
        <div className='bg-black'>
            <img src="/bg.png" alt="" srcset="" className='absolute opacity-80 w-screen h-screen overflow-y-hidden' />
            <p className='p-10 relative text-xl font-bold text-white'>DAY 1</p>
            <div className='relative bottom-14'>
                <div className="bottom-20 h-screen relative flex justify-center items-center">
                    {/* <p className='text-4xl font-bold text-black '>Ini Adalah Hari Pertama Dimulai</p>    */}
                    <img className="w-80" src="/Tocil.png" alt="" srcset="" />
                </div>

                <div className='relative bottom-56 bg-[#ffe680] shadow-multi-outline p-5 mx-36 rounded-2xl'>
                    <div className="top-[-4vh]  border-4 border-black  absolute rounded-xl px-5 py-1 bg-[#fffaad]">
                       <p className='font-semibold'>Clara</p> 
                    </div>
                    
                    <p className='text-black text-xl font-medium' id='simpleUsage'>
                    <TypeIt
                            options={{
                                speed: 50,
                                waitUntilVisible: true,
                                startDelay : 4000
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
                    <div className={`fixed top-20 left-5 bg-red-500 text-white p-4 rounded-lg transition-transform flex items-center gap-3 ${alertClass}`}>
                       <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3l9 17h-18l9 -17Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 10v4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"/></path><path stroke-dasharray="2" stroke-dashoffset="2" d="M12 17v0.01"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="2;0"/></path></g></svg>
                       Perkataan Anda Menyakiti Perasaan Clara
                    </div>
                )}
            </div>
        </div>
    )
}

export default PageDialog