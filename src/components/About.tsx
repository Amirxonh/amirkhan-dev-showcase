import AnimatedSection from "./AnimatedSection";

const About = () => (
  <AnimatedSection className="py-24 px-6">
    <div className="max-w-3xl mx-auto" id="about">
      <h2 className="text-3xl font-bold tracking-tight text-foreground">About Me</h2>
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        <div className="rounded-xl bg-card border border-border p-6">
          <p className="text-sm text-muted-foreground">Age</p>
          <p className="mt-1 text-xl font-semibold text-foreground">17</p>
        </div>
        <div className="rounded-xl bg-card border border-border p-6">
          <p className="text-sm text-muted-foreground">Education</p>
          <p className="mt-1 text-lg font-semibold text-foreground">Al-Khwarazmiy Specialized Boarding School</p>
          <p className="text-sm text-muted-foreground">11th Grade</p>
        </div>
      </div>
      <p className="mt-8 text-muted-foreground leading-relaxed">
        I'm deeply passionate about technology, coding, and continuous learning. Every day, I strive to sharpen my skills in web development, explore new frameworks, and build meaningful projects that solve real-world problems. I believe in the power of self-education and the endless possibilities that come with writing code.
      </p>
    </div>
  </AnimatedSection>
);

export default About;
