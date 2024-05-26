'use client';

import { useState } from 'react';

const CardPage: React.FC = () => {
  const [isImgData, setIsImgData] = useState<any>(null);
  const data = {
    id: '1234567890',
    name: 'Juan',
    age: '25',
    city: 'Lima',
    country: 'Perú',
    cuote: 10.40,
    ganacia: 10000,
    lastname: 'Perez torres',
    timenow: Date.now(),
    money: 's/20'
  }
  const generarImagenLocal = async () => {
    try {
      const res = await fetch('https://twilight-darkness-0b2c.leonardosm3-14.workers.dev/generarImagen', {
        body: JSON.stringify(data),
        method: 'POST'
      })
      const datos = await res.json();
      setIsImgData(datos);
      console.log(datos);
      // const datos = await generarImagen(data);
      // setIsImgData(datos);
      // console.log(datos);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center gap-4 flex-col bg-gray-100">
      {
        isImgData && Object.keys(isImgData).length > 0 && (
          <>

            <div
              className="bg-white shadow-md rounded-lg w-96 h-auto aspect-video relative overflow-hidden"
            >
              <img src={isImgData?.imgUrl} alt="" className="absolute z-0 top-0 left-0 w-full h-full object-cover" />
            </div>
            <a className="bg-[#4b9844] text-white py-3 px-5 rounded-full transition duration-200" 
            href={`${isImgData?.link}`} target="_blank" rel="noreferrer">
              <span className="text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
              Abrir enlace
            </a>
          </>

        )
      }

      <button onClick={() => generarImagenLocal()} className="bg-[#ED1C24] text-white py-3 px-5 rounded-full transition duration-200">
        generar imagen
      </button>
    </div>
  );
};

export default CardPage;
