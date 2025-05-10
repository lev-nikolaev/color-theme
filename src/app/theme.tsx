'use client';

import { useEffect, useState } from 'react';

const COLORS = [
  { name: 'Red', value: '#e74c3c' },
  { name: 'Green', value: '#2ecc71' },
  { name: 'Blue', value: '#3498db' },
  { name: 'Purple', value: '#9b59b6' },
  { name: 'Orange', value: '#e67e22' },
  { name: 'Dark', value: '#1a1a1a' },
];

export default function ThemeColorDemo() {
  const [color, setColor] = useState(COLORS[0].value);

  useEffect(() => {
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'theme-color');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', color);
  }, [color]);

  return (
    <main style={{
      minHeight: '100dvh',
      padding: '2rem',
      backgroundColor: color,
      color: '#fff',
      fontFamily: 'sans-serif',
      transition: 'background-color 0.3s',
    }}>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {COLORS.map(({ name, value }) => (
          <button
            key={value}
            onClick={() => setColor(value)}
            style={{
              backgroundColor: value,
              border: 'none',
              padding: '0.75rem 1rem',
              color: '#fff',
              cursor: 'pointer',
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            {name}
          </button>
        ))}
      </div>
    </main>
  );
}