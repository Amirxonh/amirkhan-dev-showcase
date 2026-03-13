import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center px-6 pt-16">
    <div className="text-center max-w-2xl">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-heading text-5xl md:text-6xl font-bold tracking-tight text-foreground"
      >
        Amirkhan Ibodullayev
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-4 text-lg text-muted-foreground"
      >
        Student • Aspiring Software Developer
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-4 text-muted-foreground max-w-lg mx-auto leading-relaxed"
      >
        I am a 17-year-old student passionate about programming, building web applications, and learning modern technologies.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="mt-8 flex items-center justify-center gap-4"
      >
        <Button asChild size="lg">
          <a href="#projects">View Projects</a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="#contact">Contact Me</a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default Hero;
