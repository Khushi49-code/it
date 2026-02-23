'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard');
    }, 1000);
  };

  // All styles inline - Clean white version
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',  // Pure white background
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
      fontFamily: 'Arial, sans-serif'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '16px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.1)',  // Light shadow only
      width: '100%',
      maxWidth: '400px',
      border: '1px solid #f0f0f0'  // Light border
    },
    header: {
      background: '#2563eb',  // Solid blue header
      padding: '32px',
      textAlign: 'center' as const,
      color: 'white',
      borderRadius: '16px 16px 0 0'
    },
    headerTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      margin: '0 0 8px 0'
    },
    headerSub: {
      fontSize: '14px',
      opacity: '0.9',
      margin: 0
    },
    formContainer: {
      padding: '32px'
    },
    welcomeText: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '24px'
    },
    inputGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '6px'
    },
    inputWrapper: {
      position: 'relative' as const
    },
    input: {
      width: '100%',
      padding: '12px 12px 12px 40px',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      fontSize: '14px',
      outline: 'none',
      boxSizing: 'border-box' as const,
      transition: 'border-color 0.2s'
    },
    inputIcon: {
      position: 'absolute' as const,
      left: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '20px',
      height: '20px',
      opacity: '0.4'
    },
    passwordToggle: {
      position: 'absolute' as const,
      right: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px',
      color: '#6b7280'
    },
    rememberRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '24px'
    },
    checkbox: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    checkboxInput: {
      width: '16px',
      height: '16px',
      cursor: 'pointer'
    },
    checkboxLabel: {
      fontSize: '14px',
      color: '#4b5563'
    },
    forgotLink: {
      fontSize: '14px',
      color: '#2563eb',
      textDecoration: 'none',
      cursor: 'pointer',
      background: 'none',
      border: 'none'
    },
    button: {
      width: '100%',
      padding: '14px',
      background: '#2563eb',  // Solid blue button
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      transition: 'background-color 0.2s'
    },
    buttonDisabled: {
      opacity: 0.5,
      cursor: 'not-allowed'
    },
    demoBox: {
      marginTop: '24px',
      padding: '16px',
      backgroundColor: '#f9fafb',  // Light gray background
      borderRadius: '8px',
      border: '1px solid #f0f0f0'
    },
    demoTitle: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#374151',
      marginBottom: '8px'
    },
    demoText: {
      fontSize: '13px',
      color: '#4b5563',
      margin: '4px 0'
    },
    footer: {
      marginTop: '24px',
      textAlign: 'center' as const,
      fontSize: '14px',
      color: '#6b7280'
    },
    footerLink: {
      color: '#2563eb',
      textDecoration: 'none',
      fontWeight: '500',
      marginLeft: '4px',
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    },
    spinner: {
      width: '20px',
      height: '20px',
      border: '2px solid #ffffff',
      borderTopColor: 'transparent',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }
  };

  return (
    <div style={styles.container}>
      {/* Add keyframes for spinner animation */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        input:focus {
          border-color: #2563eb !important;
        }
      `}</style>

      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.headerTitle}>IT Asset Manager</h1>
          <p style={styles.headerSub}>Service Ticket System</p>
        </div>

        {/* Form */}
        <div style={styles.formContainer}>
          <h2 style={styles.welcomeText}>Welcome Back!</h2>

          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div style={styles.inputGroup}>
              <label style={styles.label}>Email Address</label>
              <div style={styles.inputWrapper}>
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' /%3E%3C/svg%3E"
                  style={styles.inputIcon}
                  alt="email"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={styles.input}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div style={styles.inputGroup}>
              <label style={styles.label}>Password</label>
              <div style={styles.inputWrapper}>
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' /%3E%3C/svg%3E"
                  style={styles.inputIcon}
                  alt="lock"
                />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={styles.input}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={styles.passwordToggle}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div style={styles.rememberRow}>
              <div style={styles.checkbox}>
                <input type="checkbox" id="remember" style={styles.checkboxInput} />
                <label htmlFor="remember" style={styles.checkboxLabel}>Remember me</label>
              </div>
              <button type="button" style={styles.forgotLink}>
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                ...styles.button,
                ...(loading ? styles.buttonDisabled : {})
              }}
            >
              {loading ? (
                <div style={styles.spinner} />
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Demo Credentials */}
          <div style={styles.demoBox}>
            <p style={styles.demoTitle}>Demo Credentials:</p>
            <p style={styles.demoText}>👤 Admin: admin@demo.com / admin123</p>
            <p style={styles.demoText}>👤 Technician: tech@demo.com / tech123</p>
          </div>

          {/* Footer */}
          <div style={styles.footer}>
            Don't have an account?
            <button style={styles.footerLink}>
              Contact Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}