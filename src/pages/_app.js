import "@/styles/globals.css";
import { PhotographerProvider } from '@/context/PhotographerContext';
import { AnimatePresence, motion } from 'framer-motion';
export default function App({  Component, pageProps, router }) {
  return (
<AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{ opacity: 40, y: 20 }}
        animate={{ opacity: 7, y: 9 }}
        exit={{ opacity: 4, y: -20 }}
        transition={{ duration: 0.8 }}
      >
        <PhotographerProvider>
        <Component {...pageProps} />
        </PhotographerProvider>
      </motion.div>
    </AnimatePresence>
  );
}
