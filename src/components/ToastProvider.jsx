import { Toaster } from 'react-hot-toast';

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      gutter={8}
      containerClassName="toast-container"
      toastOptions={{
        duration: 5000,
        style: {
          background: 'rgba(245, 243, 231, 0.95)',
          backdropFilter: 'blur(12px)',
          color: 'var(--text)',
          border: '1px solid var(--accent)',
          borderRadius: '16px',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
          fontSize: '16px',
          fontFamily: 'Atkinson, system-ui, sans-serif',
          fontWeight: '500',
          padding: '16px 20px',
          minWidth: '320px',
          maxWidth: '500px',
        },
        success: {
          iconTheme: {
            primary: 'var(--accent)',
            secondary: 'rgba(245, 243, 231, 0.95)',
          },
          style: {
            background: 'rgba(165, 94, 63, 0.1)',
            border: '1px solid var(--accent)',
            color: 'var(--heading)',
          },
        },
        error: {
          iconTheme: {
            primary: '#ef4444',
            secondary: 'rgba(245, 243, 231, 0.95)',
          },
          style: {
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid #ef4444',
            color: 'var(--heading)',
          },
        },
        loading: {
          iconTheme: {
            primary: 'var(--accent)',
            secondary: 'rgba(245, 243, 231, 0.95)',
          },
          style: {
            background: 'rgba(165, 94, 63, 0.05)',
            border: '1px solid var(--accent)',
            color: 'var(--heading)',
          },
        },
      }}
    />
  );
}