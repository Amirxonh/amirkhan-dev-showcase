import { Github, Send, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <div className="flex items-center justify-center gap-5 mb-6">
        <a href="https://github.com/Amirxonh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Github size={20} />
        </a>
        <a href="https://t.me/nagap_la" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Send size={20} />
        </a>
        <a href="https://instagram.com/amirxon.lbodullayev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Instagram size={20} />
        </a>
      </div>
      <p className="text-sm text-muted-foreground">
        Built by Amirkhan Ibodullayev
      </p>
      <p className="mt-1 text-xs text-muted-foreground">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
