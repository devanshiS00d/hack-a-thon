import { motion } from 'motion/react';

interface GradientLayoutProps {
  children: React.ReactNode;
}

export function GradientLayout({ children }: GradientLayoutProps) {
  return (
    <div className="bg-gradient-to-b from-[#f0f0e8] via-[#e0b3d3] via-[76.926%] to-[#eec887] to-[90.388%] min-h-screen flex items-center justify-center font-['Manrope:Regular',_sans-serif] font-normal">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl px-8"
      >
        {children}
      </motion.div>
    </div>
  );
}
