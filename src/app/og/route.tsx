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
            fontWeight: 700,
            background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
            color: 'white',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 30,
              left: 30,
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(0, 0, 0, 0.6)',
              padding: '10px 20px',
              borderRadius: '8px',
            }}
          >
            <span
              style={{
                width: 40,
                height: 40,
                background: '#4caf50',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                fontSize: 24,
                fontWeight: 700,
              }}
            >
              KS
            </span>
            <span
              style={{
                marginLeft: 15,
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
              padding: '20px 50px',
              margin: '0 42px',
              fontSize: 40,
              maxWidth: 550,
              textAlign: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              borderRadius: '10px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    return new Response('Failed to create OG Image', { status: 500 });
  }
}
