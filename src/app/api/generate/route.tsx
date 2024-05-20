import { ImageResponse } from '@vercel/og'


// const font = fetch(new URL('@host/assets/TYPEWR__.TTF', import.meta.url)).then(
//   (res) => res.arrayBuffer()
// )

export async function GET(request: Request) {
  // const data = await request.;
  // const fontData = await font
  const url = new URL(request.url);

  const queryParams = Object.fromEntries(url.searchParams.entries());

  const stringQuery = JSON.stringify(queryParams, null, 2)

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: 'white',
          height: '100%',
          width: '100%',
          fontSize: 100,
          fontFamily: 'Typewriter',
          paddingTop: '100px',
          paddingLeft: '50px',
        }}
      >
       {stringQuery}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      status: 200,
      statusText: 'OK',
    }
  )
}