'use server';

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dr9prmfjk',
  api_key: '734856569644433',
  api_secret: 'ZBvSrAliwa3xuDN_-qQCqgC1Lzw'
});

const generateHash = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export async function generarImagen(data: any) {
  try {
    // Realizamos la llamada a la API para generar la imagen
    const queryParams = new URLSearchParams(data).toString();
    const url = `http://localhost:3000/api/generate?${queryParams}`;
    console.log(url);
    
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Error al generar la imagen');
    }

    // Convertimos la respuesta a un buffer
    const buffer = await response.arrayBuffer();

    // Subimos el buffer a Cloudinary
    const opciones = { public_id: generateHash() };
    const imgUrl = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload(
        `data:image/svg+xml;base64,${Buffer.from(buffer).toString('base64')}`,
        opciones,
        (error, result) => {
          if (error) {
            console.error(error);
            reject(error);
          } else {
            console.log(result);
            resolve(result);
          }
        }
      );
    });

    return { imgUrl, public_id: opciones.public_id };
  } catch (error) {
    console.error(error);
    return { error };
  }
}
