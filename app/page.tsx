import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Cpu, Layers, Zap, Shield, BarChart3, Target, Rocket, Users, Building2, GraduationCap, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ease Your Tease | Build Systems. Not Experiments.',
  description: 'We build AI-native systems that automate operations, empower teams, and drive measurable growth.',
  openGraph: {
    title: 'Ease Your Tease | Build Systems. Not Experiments.',
    description: 'We build AI-native systems that automate operations, empower teams, and drive measurable growth.',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-size bg-[length:40px_40px] opacity-30" />
        <div className="absolute inset-0 bg-neon-cyan blur-[120px] opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[80px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-pulse-glow" />
        <div
          className="absolute top-[20%] right-[15%] w-4 h-4 bg-primary rounded-full animate-float"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1, scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <div
          className="absolute top-[60%] left-[10%] w-3 h-3 bg-secondary rounded-full animate-float"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1, scale: [1, 1.3, 1] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              AI Transformation Company
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Build Systems.<br />
              <span className="text-gradient">Not Experiments.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              We build AI-native systems that automate operations, empower teams, and drive measurable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#solutions"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-bg font-semibold transition-all hover:shadow-neon-cyan hover:scale-105"
              >
                Explore Solutions <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass border border-primary/30 text-primary font-semibold transition-all hover:bg-primary/10 hover:scale-105"
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'AI Systems Deployed' },
              { value: '200+', label: 'Organizations Transformed' },
              { value: '1M+', label: 'Processes Automated' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center glass rounded-2xl p-8 border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Most Organizations Are Built for the <span className="text-slate-500">Past.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Layers,
                title: 'Siloed Workflows',
                description: 'Manual processes and disconnected teams slow everything down.',
              },
              {
                icon: Cpu,
                title: 'Disconnected Tools',
                description: 'Too many platforms, no unified data, poor visibility across operations.',
              },
              {
                icon: Zap,
                title: 'AI Without Strategy',
                description: 'Random tools without a system create noise, not impact.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-8 border border-red-500/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <item.icon className="w-10 h-10 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-red-400">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
                {/* Broken system visual */}
                <div className="mt-6 flex gap-2">
                  <div className="w-8 h-8 bg-red-500/10 rounded-lg border border-red-500/30" />
                  <div className="w-8 h-8 bg-red-500/10 rounded-lg border border-red-500/30" />
                  <div className="w-8 h-8 bg-red-500/10 rounded-lg border border-red-500/30" />
                  <div className="w-8 h-8 bg-red-500/10 rounded-lg border border-red-500/30" />
                  <div className="w-8 h-8 bg-red-500/10 rounded-lg border border-red-500/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shift Section */}
      <section className="py-24 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-3xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Shift That Changes Everything
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="glass rounded-2xl p-8 border border-slate-700"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-slate-400 mb-6">Traditional Approach</h3>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 flex-shrink-0" />
                  Manual data entry and reporting
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 flex-shrink-0" />
                  Disconnected systems and silos
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 flex-shrink-0" />
                  Reactive decision-making
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 flex-shrink-0" />
                  Slow, paper-based processes
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 flex-shrink-0" />
                  Limited visibility and insights
                </li>
              </ul>
            </div>
            <div
              className="glass rounded-2xl p-8 border border-secondary/40 shadow-neon-green"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-secondary mb-6">AI-Native Approach</h3>
              <ul className="space-y-4 text-slate-200">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  AI automates 70% of routine tasks
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  Unified data platform with real-time insights
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  Predictive analytics for proactive decisions
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  Automated workflows across departments
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  Complete visibility and control
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core System Section */}
      <section id="solutions" className="py-24 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-3xl md:text-5xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Core System
          </h2>
          <p
            className="text-center text-slate-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Three pillars that transform how your organization operates
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Cpu,
                title: 'Intelligence',
                description: 'AI-powered insights that turn data into decisions.',
                color: 'primary',
              },
              {
                icon: Layers,
                title: 'Execution',
                description: 'Automated workflows that run your operations 24/7.',
                color: 'cyan',
              },
              {
                icon: Rocket,
                title: 'Growth',
                description: 'Measurable outcomes that scale with your ambition.',
                color: 'secondary',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-8 border border-slate-700 hover:border-primary/40 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <card.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-slate-400">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Cards Section */}
      <section className="py-24 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-3xl md:text-5xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Built For Every Organization
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Building2,
                title: 'For Corporates',
                description: 'AI execution engines that transform enterprise operations.',
                href: '/for-corporates',
              },
              {
                icon: GraduationCap,
                title: 'For Schools',
                description: 'NEP-aligned AI programs that build future-ready institutions.',
                href: '/for-schools',
              },
              {
                icon: BookOpen,
                title: 'For Institutes',
                description: 'AI labs and curriculum that power higher education.',
                href: '/for-institutes',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <card.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-slate-400 mb-4">{card.description}</p>
                <Link href={card.href} className="text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-3xl md:text-5xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How We Transform
          </h2>
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              { num: '01', title: 'Discover', desc: 'Deep assessment of your current systems' },
              { num: '02', title: 'Design', desc: 'Custom AI-native architecture' },
              { num: '03', title: 'Deploy', desc: 'Seamless integration and rollout' },
              { num: '04', title: 'Drive Impact', desc: 'Measure, optimize, and scale' },
            ].map((step, i) => (
              <div
                key={i}
                className="text-center glass rounded-2xl p-8 border border-primary/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-gradient mb-4">{step.num}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-24 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-3xl md:text-5xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Proof That It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { value: '70%', label: 'Time Saved', sub: 'Across client operations' },
              { value: '2X', label: 'Engagement Increase', sub: 'Student and customer engagement' },
              { value: '3X', label: 'Operational Efficiency', sub: 'Process throughput improvement' },
            ].map((card, i) => (
              <div
                key={i}
                className="text-center glass rounded-2xl p-10 border border-secondary/30"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-secondary mb-2">{card.value}</div>
                <div className="text-xl font-semibold mb-1">{card.label}</div>
                <div className="text-slate-500 text-sm">{card.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            A Future Where <span className="text-gradient">AI Systems</span> Power Human Potential.
          </h2>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div
            className="glass rounded-3xl p-12 md:p-16 border border-primary/20 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-primary/5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Let{'s'} Build Your <span className="text-gradient">AI-Native</span> Future.
              </h2>
              <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
                Ready to transform your organization with AI-native systems?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-bg font-semibold transition-all hover:shadow-neon-cyan hover:scale-105"
              >
                Book a Strategy Call <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
