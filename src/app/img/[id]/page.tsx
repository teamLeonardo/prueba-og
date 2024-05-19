import { Metadata } from 'next'; // if using TypeScript
const getUrlImage = (id: string) => `https://home.ripley.com.pe/Attachment/WOP_5/2018308544674/2018308544674-1.jpg`;

// or Dynamic metadata

export const generateMetadata = ({ params }: { params: { id: string } }): Metadata => {
    const { id: idParam }: any = params
    const urlImg = getUrlImage(idParam);
    return {
        openGraph: {
            title: 'Hoy gane la apuesta',
            description: 'Muy buena apuesta',
            url: 'https://www.apuestatotal.com/?id=' + idParam,
            siteName: 'www.apuestatotal.com',
            images: [
                {
                    url: urlImg, // Dynamic og route
                    width: 800,
                    height: 600,
                },
                {
                    url: urlImg, // Dynamic og route
                    width: 1800,
                    height: 1600,
                    alt: 'Hoy gane la apuesta', // Optional
                },
            ],
            locale: 'es_ES',
            type: 'website',
        },
    }

};
export default function PageId({ params }: { params: { id: string } }) {
    return (
        <div>
        </div>
    );
}
