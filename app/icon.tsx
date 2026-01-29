import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
    width: 512,
    height: 512,
};
export const contentType = 'image/png';

export default async function Icon() {
    const interBold = await fetch(
        new URL('https://unpkg.com/@fontsource/inter@5.0.8/files/inter-latin-700-normal.woff', import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 320,
                    background: '#020617', // Slate-950
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    borderRadius: '110px', // Squircle-ish
                    fontWeight: 700,
                    letterSpacing: '-0.08em',
                    paddingBottom: '30px', // Visual centering for lowercase 'b'
                    paddingRight: '10px'
                }}
            >
                b<span style={{ color: '#0891b2' }}>H</span>
            </div>
        ),
        {
            ...size,
            fonts: [
                {
                    name: 'Inter',
                    data: interBold,
                    style: 'normal',
                    weight: 700,
                },
            ],
        }
    );
}
