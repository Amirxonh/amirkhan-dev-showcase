import { Send, Instagram, Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const contacts = [
  { icon: Send, label: "Telegram", value: "@nagap_la", href: "https://t.me/nagap_la" },
  { icon: Instagram, label: "Instagram", value: "amirxon.lbodullayev", href: "https://instagram.com/amirxon.lbodullayev" },
];

const Contact = () => (
  <AnimatedSection className="py-24 px-6">
    <div className="max-w-3xl mx-auto" id="contact">
      <h2 className="text-3xl font-bold tracking-tight text-foreground">Contact</h2>
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-card border border-border p-8 hover:-translate-y-1 transition-transform duration-200 block"
          >
            <c.icon className="text-foreground" size={28} strokeWidth={1.5} />
            <p className="mt-4 text-sm text-muted-foreground">{c.label}</p>
            <p className="mt-1 font-medium text-foreground">{c.value}</p>
          </a>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Contact;
