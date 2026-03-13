import { Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const achievements = [
  { title: "IELTS Score", value: "6.0" },
  { title: "SAT Math Score", value: "700" },
];

const Achievements = () => (
  <AnimatedSection className="py-24 px-6">
    <div className="max-w-3xl mx-auto" id="achievements">
      <h2 className="text-3xl font-bold tracking-tight text-foreground">Achievements</h2>
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        {achievements.map((a) => (
          <div
            key={a.title}
            className="rounded-xl bg-card border border-border p-8 hover:-translate-y-1 transition-transform duration-200"
          >
            <Award className="text-foreground" size={28} strokeWidth={1.5} />
            <p className="mt-4 text-sm text-muted-foreground">{a.title}</p>
            <p className="mt-1 text-3xl font-bold text-foreground">{a.value}</p>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Achievements;
