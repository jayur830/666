'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [is666, set666] = useState<boolean>(false);
  const [tick, setTick] = useState<number>();

  useEffect(() => {
    if (is666) {
      document.body.style.backgroundColor = 'red';
    }
  }, [is666]);

  useEffect(() => {
    if (tick) {
      setTimeout(
        () => {
          console.log('mounted');
          setTick(new Date().getTime());
        },
        Math.round(Math.random() * 1000) % 6666,
      );
    }
  }, [tick]);

  return (
    <div
      style={{
        position: 'relative',
        height: '100%',
      }}
    >
      {is666 ? (
        <>
          {Array(66)
            .fill(1)
            .map((_, i) => (
              <span
                key={i}
                style={{
                  position: 'absolute',
                  top: `${Math.round(Math.random() * 1000) % 100}%`,
                  left: `${Math.round(Math.random() * 1000) % 100}%`,
                  fontSize: 12 + (Math.round(Math.random() * 1000) % 66),
                  fontWeight: 700,
                  transform: `rotate(${Math.round(Math.random() * 1000) % 360}deg)`,
                  transition: 'all 66ms',
                }}
              >
                {Array(3 + (Math.round(Math.random() * 1000) % 9))
                  .fill('6')
                  .join('')}
              </span>
            ))}
        </>
      ) : (
        <button
          onClick={() => {
            set666(true);
            setTick(new Date().getTime());
          }}
          style={{
            backgroundColor: is666 ? 'red' : undefined,
          }}
        >
          666
        </button>
      )}
    </div>
  );
}
