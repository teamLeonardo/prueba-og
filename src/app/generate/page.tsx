'use client';

import { generarImagen } from "@host/modules/server";
import { useState } from "react";


export default function Home() {
    const [link, setLick] = useState<string>('');
    const dataPeopleSingle = {
        id: '1234567890',
        name: 'Juan',
        age: '25',
        city: 'Lima',
        country: 'Perú',
        cuote: 10.40,
        ganacia: 10000,
        lastname: 'Perez torres'
    }
    // const generarImagen = async () => {
    //     const datos: string = await fetch('http://localhost:3000/api/generate', {
    //         body: JSON.stringify(dataPeopleSingle),
    //         method: 'POST'
    //     }).then(res => res.text());
    //     console.log(datos);
    // }
    const generarImagenLocal = async () => {
        try {
            const datos = await generarImagen(dataPeopleSingle);
            console.log(datos);
            const host = process.env.DEV ? 'http://localhost:3000' : 'https://prueba-og.vercel.app';
            const newLink = `${host}/img/${datos?.public_id}`;
            setLick(newLink);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <pre>
                {JSON.stringify(dataPeopleSingle, null, 2)}
            </pre>
            <button onClick={() => generarImagenLocal()}>Generar imagen</button>
            <div>
                {
                    link ?? (
                        <span>{link}</span>
                    )
                }
            </div>

        </div>
    );
}