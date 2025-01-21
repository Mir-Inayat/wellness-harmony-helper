import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-20"
    >
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-4"
      >
        Welcome to
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-6xl font-bold text-center mb-6 text-balance"
      >
        A New Way to Experience Design
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg md:text-xl text-center text-muted-foreground max-w-2xl mb-8 text-balance"
      >
        Discover the perfect balance of form and function with our minimalist approach to modern design.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex gap-4"
      >
        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover-lift">
          Get Started
        </button>
        <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover-lift">
          Learn More
        </button>
      </motion.div>
    </motion.section>
  );
};