import { Dumbbell, Dribbble, Code } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const hobbies = [
  { icon: Dumbbell, label: "Fitness" },
  { icon: Dribbble, label: "Football" },
  { icon: Code, label: "Programming" },
];

const Hobbies = () => (
  <AnimatedSection className="py-24 px-6 bg-card">
    <div className="max-w-3xl mx-auto" id="hobbies">
      <h2 className="text-3xl font-bold tracking-tight text-foreground">Hobbies</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {hobbies.map((h) => (
          <div
            key={h.label}
            className="rounded-xl bg-background border border-border p-8 text-center hover:-translate-y-1 transition-transform duration-200"
          >
            <h.icon className="mx-auto text-foreground" size={32} strokeWidth={1.5} />
            <p className="mt-4 font-medium text-foreground">{h.label}</p>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Hobbies;
