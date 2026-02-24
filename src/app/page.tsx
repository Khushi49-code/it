// src/app/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard after 5 seconds
    const timer = setTimeout(() => {
      router.push('/dashboard');
    }, 5000);

    // Cleanup timeout if component unmounts
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div style={{ 
      padding: '20px', 
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#f3f4f6'
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        maxWidth: '500px',
        width: '90%'
      }}>
        <h1 style={{ 
          color: '#10b981', 
          fontSize: '32px',
          marginBottom: '20px'
        }}>
          ✅ System is Working!
        </h1>
        
   
        
        <div style={{
          width: '100%',
          height: '4px',
          background: '#e5e7eb',
          borderRadius: '2px',
          overflow: 'hidden',
          marginBottom: '20px'
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            background: '#3b82f6',
            animation: 'shrink 5s linear forwards'
          }} />
        </div>
        
        <p style={{ 
          fontSize: '14px', 
          color: '#6b7280'
        }}>
          Redirecting to dashboard in 5 seconds...
        </p>
        
        <button
          onClick={() => router.push('/dashboard')}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          Go to Dashboard Now
        </button>
      </div>

      <style jsx>{`
        @keyframes shrink {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      `}</style>
    </div>
  );
}
