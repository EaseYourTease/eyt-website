import Link from 'next/link';
import { Zap, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const footerLinks = {
  Solutions: [
    { label: 'For Corporates', href: '/for-corporates' },
    { label: 'For Schools', href: '/for-schools' },
    { label: 'For Institutes', href: '/for-institutes' },
    { label: 'All Solutions', href: '/solutions' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact', href: '/contact' },
  ],
  Services: [
    { label: 'AI Workflow Automation', href: '/solutions' },
    { label: 'AI Training Programs', href: '/solutions' },
    { label: 'AI Strategy Consulting', href: '/solutions' },
  ],
};

export function Footer() {
  return (
    <footer className="glass border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg">
                Ease Your <span className="text-primary">Tease</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm mb-6 max-w-xs">
              Building AI-native systems that automate operations, empower teams, and drive measurable growth.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-bg font-semibold text-sm hover:shadow-neon-cyan transition-all"
            >
              Book Strategy Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            2026 Ease Your Tease. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
