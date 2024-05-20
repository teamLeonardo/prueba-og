'use client';

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ComponenteRedirect() {
    const { replace } = useRouter();
    const params = useParams<{ id: string }>()
    useEffect(() => {
        if (params.id) {
            replace(`https://www.apuestatotal.com/?id=${params.id}`)
        }
    }, [params.id])
    return (
        <div>
            {
                params.id ?? (
                    <img src={`http://res.cloudinary.com/dr9prmfjk/image/upload/v1716178056/${params.id}.png`} alt="timg" />
                )
            }
        </div>
    );
}