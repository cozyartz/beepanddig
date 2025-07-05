import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

export default function ToastDemo() {
  const showSuccessToast = () => {
    toast.success('🎉 Great find! Your metal detector settings are optimized!', {
      duration: 4000,
    });
  };

  const showErrorToast = () => {
    toast.error('⚠️ Battery low! Please charge your metal detector.', {
      duration: 4000,
    });
  };

  const showLoadingToast = () => {
    toast.loading('🔍 Scanning for treasures nearby...', {
      duration: 3000,
    });
  };

  const showCustomToast = () => {
    toast('🏆 New treasure location discovered in Michigan!', {
      icon: '⚒️',
      duration: 4000,
    });
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-2"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        onClick={showSuccessToast}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Success Toast
      </motion.button>
      
      <motion.button
        onClick={showErrorToast}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Error Toast
      </motion.button>
      
      <motion.button
        onClick={showLoadingToast}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Loading Toast
      </motion.button>
      
      <motion.button
        onClick={showCustomToast}
        className="bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Custom Toast
      </motion.button>
    </motion.div>
  );
}