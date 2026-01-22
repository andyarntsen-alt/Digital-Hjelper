import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '30px',
          }}
        >
          {/* Logo */}
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '20px',
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '30px',
            }}
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1e40af"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="4" />
              <line x1="12" y1="2" x2="12" y2="6" />
              <line x1="12" y1="18" x2="12" y2="22" />
              <line x1="2" y1="12" x2="6" y2="12" />
              <line x1="18" y1="12" x2="22" y2="12" />
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                color: 'white',
                lineHeight: 1,
              }}
            >
              LettDigital
            </div>
            <div
              style={{
                fontSize: '32px',
                color: 'rgba(255,255,255,0.9)',
                marginTop: '10px',
              }}
            >
              Enkel veiledning for alle
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255,255,255,0.15)',
            padding: '20px 40px',
            borderRadius: '12px',
            marginTop: '20px',
          }}
        >
          <div
            style={{
              fontSize: '28px',
              color: 'white',
            }}
          >
            NAV • Skatteetaten • Helsenorge – steg for steg
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
