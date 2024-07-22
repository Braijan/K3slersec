import { ImageResponse } from 'next/og';

export function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get('title') || 'K3strel Sec';

  try {
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #1a2a3a, #1f3c52, #2b4c64)',
            color: 'white',
            position: 'relative',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 30,
              left: 30,
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(0, 0, 0, 0.5)',
              padding: '12px 24px',
              borderRadius: '10px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
            }}
          >
            <span
              style={{
                width: 50,
                height: 50,
                background: '#4caf50',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                fontSize: 28,
                fontWeight: 700,
              }}
            >
              KS
            </span>
            <span
              style={{
                marginLeft: 20,
                fontSize: 24,
                fontWeight: 500,
              }}
            >
              k3strelsec.com
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              padding: '20px 60px',
              margin: '0 42px',
              fontSize: 48,
              maxWidth: 700,
              textAlign: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
            }}
          >
            {title}
          </div>
          <img
            src={new URL('/images/k3strelsec-og.png', url.origin).toString()}
            alt="K3strel Sec Logo"
            style={{
              position: 'absolute',
              bottom: 30,
              right: 30,
              width: '120px',
              height: 'auto',
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error('Failed to create OG Image:', error);
    return new Response('Failed to create OG Image', { status: 500 });
  }
}
