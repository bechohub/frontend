import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'bechoHub - India\'s Premiere B2B Network';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    const interBold = await fetch(
        new URL('https://unpkg.com/@fontsource/inter@5.0.8/files/inter-latin-700-normal.woff', import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
        (
            <div
                style={{
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}
            >
                {/* Abstract Backgrounds */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-200px',
                        left: '-200px',
                        width: '800px',
                        height: '800px',
                        borderRadius: '50%',
                        background: 'rgba(6, 182, 212, 0.15)', // Cyan-500
                        filter: 'blur(120px)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-100px',
                        right: '-100px',
                        width: '700px',
                        height: '700px',
                        borderRadius: '50%',
                        background: 'rgba(59, 130, 246, 0.15)', // Blue-500
                        filter: 'blur(120px)',
                    }}
                />

                {/* Logo */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                    }}
                >
                    <div style={{ color: '#020617', fontSize: 140, fontWeight: 700, letterSpacing: '-0.07em', lineHeight: 1 }}>becho</div>
                    <div style={{ color: '#0891b2', fontSize: 140, fontWeight: 700, letterSpacing: '-0.07em', lineHeight: 1 }}>Hub</div>
                </div>

                {/* Tagline */}
                <div style={{ fontSize: 36, color: '#64748b', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '20px' }}>
                    India&apos;s Premiere B2B Network
                </div>

                {/* URL */}
                <div style={{ fontSize: 24, color: '#94a3b8', fontWeight: 500, letterSpacing: '0.05em', position: 'absolute', bottom: '60px' }}>
                    bechohub.com
                </div>
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
