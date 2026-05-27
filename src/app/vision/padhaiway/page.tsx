import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, CheckCircle2, BookOpen, Cpu, Code, Shield, Users, GraduationCap, Gamepad2, BarChart3, Accessibility, Briefcase, MessageCircle, Sparkles, Download, Wifi, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "PadhaiWay — E-Learning Platform for Class 6 to 12",
  description: "Comprehensive e-learning platform for Class 6 to 12 students. AI-powered tutoring, live classes, video lessons, and personalized learning paths. Quality education for every child across India.",
  keywords: [
    "e-learning platform class 6-12",
    "online education India",
    "class 6 to 12 learning",
    "AI tutoring India",
    "PadhaiWay",
    "online coaching",
    "live classes",
    "video lessons",
    "exam preparation",
  ],
};

const featureCategories = [
  {
    icon: BookOpen,
    title: "Core Learning Experience",
    features: [
      "Comprehensive Video Library — Class 6-12 video content across all subjects",
      "AI Tutor — Conversational AI tutor that answers questions 24/7",
      "Multi-Subject Coverage — Mathematics, Science, Languages, and more",
      "Adaptive Learning Path — Personalized recommendations based on performance",
      "Multi-Language Interface — Hindi, English, Odia, and regional languages",
      "Voice-First Interaction — Voice queries for students with low literacy",
      "Bookmarks & Notes — Save timestamps and add in-app notes",
      "Lesson Resume — Picks up exactly where the student left off",
    ],
  },
  {
    icon: GraduationCap,
    title: "Curriculum Alignment",
    features: [
      "NEP 2020 Aligned — Content mapped to National Education Policy 2020",
      "CBSE Curriculum — Complete coverage for Class 6-12",
      "State Board Support — Content for major state boards",
      "NCERT-Aligned Content — Chapter-level textbook mapping",
      "Olympiad Prep — JEE, NEET foundation, and Olympiad preparation",
      "Competitive Exam Track — Foundation courses for engineering and medical entrance",
    ],
  },
  {
    icon: Shield,
    title: "Digital Safety",
    features: [
      "Safe Internet Practices — Essential online safety habits",
      "Privacy Awareness — Understanding personal data protection",
      "Digital Citizenship — Responsible technology use",
      "Cyberbullying Prevention — Identifying and reporting abuse",
      "Screen Time Management — Healthy digital habits",
      "Parental Controls — Family safety configurations",
    ],
  },
  {
    icon: Cpu,
    title: "Future Skills",
    features: [
      "Introduction to AI — What is artificial intelligence",
      "How Machines Learn — Basics of machine learning",
      "AI Ethics — Responsible use of technology",
      "Coding Basics — Visual programming fundamentals",
      "Digital Literacy — Essential computer skills",
      "Career Guidance — Technology career paths",
    ],
  },
  {
    icon: Sparkles,
    title: "3D Interactive Learning",
    features: [
      "Interactive 3D Models — Visualize complex concepts in 3D",
      "Human Anatomy — Explore body systems interactively",
      "Chemical Structures — 3D molecular visualization",
      "Astronomy — Interactive space exploration",
      "Physics Simulations — Virtual experiments",
      "Historical Artifacts — 3D historical objects",
    ],
  },
  {
    icon: MessageCircle,
    title: "Live & Interactive Learning",
    features: [
      "Live Doubt Sessions — Real-time doubt resolution",
      "Peer Learning Groups — Collaborative study sessions",
      "Expert Interactions — Sessions with subject matter experts",
      "Interactive Quizzes — Gamified assessments",
      "Progress Tracking — Real-time learning analytics",
      "Achievement Badges — Rewards for learning milestones",
    ],
  },
  {
    icon: BarChart3,
    title: "Assessment & Progress",
    features: [
      "Adaptive Testing — Questions that adjust to student level",
      "Detailed Analytics — Comprehensive learning insights",
      "Skill Gap Analysis — Identify areas for improvement",
      "Progress Reports — Shareable academic reports",
      "Mock Tests — Simulated exam practice",
      "Performance Trends — Track improvement over time",
    ],
  },
  {
    icon: Gamepad2,
    title: "Gamification",
    features: [
      "Learning Quests — Story-driven educational journeys",
      "Virtual Rewards — Coins, badges, and collectibles",
      "Leaderboards — Friendly competition",
      "Streak System — Daily learning motivation",
      "Unlockable Content — Rewards for consistent learning",
      "Educational Games — Fun learning activities",
    ],
  },
  {
    icon: Users,
    title: "Parent & Teacher Modules",
    features: [
      "Dashboard Access — Monitor learning progress",
      "Report Cards — Detailed academic reports",
      "Study Planner — Organized learning schedules",
      "Teacher Tools — Classroom management features",
      "Parent Alerts — Notifications for important updates",
      "Feedback System — Direct communication channel",
    ],
  },
  {
    icon: Briefcase,
    title: "School & Institution",
    features: [
      "Bulk Deployment — Scale across entire schools",
      "Admin Dashboard — Centralized management",
      "Attendance Integration — Sync with school systems",
      "Curriculum Mapping — Align with school curriculum",
      "Performance Benchmarks — Compare with peers",
      "API Access — Integrate with existing systems",
    ],
  },
  {
    icon: Accessibility,
    title: "Accessibility & Inclusion",
    features: [
      "Screen Reader Support — Accessible to visually impaired",
      "High Contrast Mode — Better visibility options",
      "Font Size Control — Adjustable text sizes",
      "Audio Descriptions — Voice-guided navigation",
      "Low Data Mode — Optimized for limited bandwidth",
      "Multi-Device Sync — Learn anywhere on any device",
    ],
  },
];

const highlights = [
  { icon: BookOpen, stat: "Class 6-12", label: "Complete Coverage" },
  { icon: Sparkles, stat: "AI", label: "Powered Tutoring" },
  { icon: Users, stat: "Live", label: "Interactive Classes" },
];

export default function PadhaiWayPage() {
  return (
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="section relative overflow-hidden" style={{ background: "linear-gradient(135deg, #FF6B00 0%, #FF8C00 50%, #FFA500 100%)" }}>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
        }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-8">
              <Image
                src="/images/padhaiway-logo.jpeg"
                alt="PadhaiWay Logo"
                width={220}
                height={80}
                className="mx-auto object-contain"
              />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              E-Learning Platform for Class 6 to 12
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              AI-powered tutoring, live classes, and personalized learning paths
              for students across India.
            </p>
            <a href="https://padhaiway.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-[#FF6B00] hover:bg-gray-100 border-0 text-base px-8 py-6 font-semibold">
                Visit PadhaiWay <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="py-8" style={{ background: "linear-gradient(90deg, #FF6B00 0%, #FF8C00 100%)" }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 text-white">
            {highlights.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <item.icon className="w-8 h-8 opacity-90" />
                <div>
                  <p className="text-2xl font-bold">{item.stat}</p>
                  <p className="text-sm opacity-80">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-6 bg-[var(--color-surface)]">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <p className="text-2xl font-bold" style={{ color: "#FF6B00" }}>1.4 billion</p>
              <p className="text-sm text-[var(--color-text-muted)]">learners on the wrong side of the digital divide</p>
            </div>
            <div>
              <p className="text-2xl font-bold" style={{ color: "#FF6B00" }}>Built for regions</p>
              <p className="text-sm text-[var(--color-text-muted)]">where edtech apps don&apos;t load</p>
            </div>
            <div>
              <p className="text-2xl font-bold" style={{ color: "#FF6B00" }}>Aligned with</p>
              <p className="text-sm text-[var(--color-text-muted)]">NEP 2020 · PM SHRI · NIPUN Bharat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4 tracking-tight">
              Complete Learning Platform
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Everything needed for holistic education — from foundational learning to future skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.title} className="card p-6 hover:border-[#FF6B00] transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FF6B00 0%, #FF8C00 100%)" }}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--color-text)] group-hover:text-[#FF6B00] transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                        <CheckCircle2 className="w-4 h-4 text-[#FF6B00] mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4 tracking-tight">
                Why PadhaiWay Exists
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-[var(--color-text-secondary)] space-y-6">
              <p>
                Every child deserves access to quality education, regardless of where they are born.
                But the reality is stark: 1.4 billion people live in regions where edtech doesn&apos;t work —
                not because the content isn&apos;t good, but because the infrastructure assumes connectivity that doesn&apos;t exist.
              </p>
              <p>
                PadhaiWay is built on a simple conviction: <strong className="text-[var(--color-text)]">the best education technology is one that doesn&apos;t need the internet to work.</strong>
              </p>
            </div>
            <blockquote className="border-l-4 border-[#FF6B00] pl-8 py-4 mt-8">
              <p className="text-2xl font-serif italic text-[var(--color-text-secondary)] leading-relaxed mb-6">
                &ldquo;A child in a remote village deserves the same quality of AI-powered learning as a child in Delhi or London. Not as charity — as a right.&rdquo;
              </p>
              <cite className="text-[var(--color-text)] font-medium not-italic">
                — Biswas Mishra, Founder & CEO, on the conviction behind PadhaiWay
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)" }}>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255,107,0,0.2) 0%, transparent 50%)`,
        }} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Education?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Partner with us to bring AI-powered learning to your institution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://padhaiway.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#FF6B00] hover:bg-[#e66000] text-white border-0 text-base px-8 py-6">
                  Visit PadhaiWay <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-base px-8 py-6">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
