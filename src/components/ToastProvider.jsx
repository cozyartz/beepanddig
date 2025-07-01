import { Toaster } from 'react-hot-toast';

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: 'var(--background)',
          color: 'var(--text)',
          border: '1px solid var(--gray-light)',
          borderRadius: '12px',
          boxShadow: 'var(--box-shadow)',
          fontSize: '16px',
          fontFamily: 'Atkinson, system-ui, sans-serif',
        },
        success: {
          iconTheme: {
            primary: 'var(--accent)',
            secondary: 'var(--background)',
          },
        },
        error: {
          iconTheme: {
            primary: '#ef4444',
            secondary: 'var(--background)',
          },
        },
      }}
    />
  );
}