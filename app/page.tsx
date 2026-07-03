import Image from 'next/image'
import { Mail, ExternalLink, Send } from 'lucide-react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { SiUpwork, SiFiverr } from 'react-icons/si'

import Header from '@/components/header'

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      {/* Hero Section */}
      <section id="home" className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen px-4 sm:px-6 lg:px-12 py-16 md:py-20 mt-16 overflow-hidden gap-2 sm:gap-4 md:gap-8 lg:gap-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-background to-background opacity-40" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        {/* Profile Image - Visible on all sizes */}
        <div className="relative flex flex-shrink-0 lg:w-2/5 items-center justify-center mb-1 sm:mb-3 md:mb-6 lg:mb-0">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-transparent opacity-100 blur-3xl scale-105 hidden sm:block" />
            <Image
              src="/profile.png"
              alt="Talha Tahir"
              width={340}
              height={340}
              priority
              className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[340px] lg:h-[340px] rounded-full object-cover object-[calc(50%+10px)_center] border-2 border-primary/50 shadow-2xl"
            />
          </div>
        </div>

        {/* Content - Bold, Oversized */}
        <div className="flex flex-col justify-center w-full lg:w-3/5 lg:items-start items-center text-center lg:text-left">
          {/* Oversized Name - Single Line */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-1 sm:mb-2 lg:mb-4 leading-tight animate-fade-in-up lg:text-left">
            <span className="text-foreground">Talha </span>
            <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
              Tahir
            </span>
          </h1>

          {/* Divider with Pipe - Animated */}
          <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8 lg:mb-14 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-2xl sm:text-3xl lg:text-5xl font-black text-foreground">|</span>
            <p className="text-sm sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
              ll code solutions that actually work
            </p>
          </div>

          {/* Services Separated Items */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-foreground/90">Landing Pages</span>
            <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 bg-primary rounded-full" />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-foreground/90">SaaS Software</span>
            <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 bg-primary rounded-full" />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-foreground/90">Chatbots</span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 bg-primary rounded-full" />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-foreground/90">Automation</span>
          </div>

          {/* Personality-Driven Bio */}
          <p className="text-xs sm:text-base md:text-lg lg:text-xl text-foreground/85 leading-relaxed mb-4 sm:mb-8 lg:mb-12 lg:text-left max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Landing pages that convert. AI chatbots that talk back. Automation that saves you from soul-crushing repetitive tasks. I build web products for businesses that want to grow without burning out their team.
          </p>

          {/* Secondary Description */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 lg:mb-12 lg:text-left max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Currently building SaaS apps and helping founders move faster.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-base md:text-lg group"
            >
              <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Let&apos;s talk
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 text-base md:text-lg"
            >
              See my work
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-20 text-balance">
            Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Service Card 1 */}
            <div className="p-6 md:p-8 bg-card border border-border rounded-lg hover:border-primary/60 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex flex-col group">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-foreground group-hover:text-primary transition-colors">Landing Pages</h3>
              <p className="text-sm md:text-base text-foreground/70 flex-grow group-hover:text-foreground/85 transition-colors">
                High-converting landing pages designed to engage visitors and drive conversions. Clean design, fast load times, and mobile-responsive.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="p-6 md:p-8 bg-card border border-border rounded-lg hover:border-primary/60 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex flex-col group">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-foreground group-hover:text-primary transition-colors">AI Chatbots</h3>
              <p className="text-sm md:text-base text-foreground/70 flex-grow group-hover:text-foreground/85 transition-colors">
                Intelligent chatbots powered by modern AI to automate customer service, answer questions, and improve user engagement 24/7.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="p-6 md:p-8 bg-card border border-border rounded-lg hover:border-primary/60 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex flex-col group">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-foreground group-hover:text-primary transition-colors">Business Automation</h3>
              <p className="text-sm md:text-base text-foreground/70 flex-grow group-hover:text-foreground/85 transition-colors">
                Custom automation workflows to streamline your business processes, save time, and reduce manual work.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="p-6 md:p-8 bg-card border border-border rounded-lg hover:border-primary/60 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex flex-col group">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-foreground group-hover:text-primary transition-colors">SaaS Applications</h3>
              <p className="text-sm md:text-base text-foreground/70 flex-grow group-hover:text-foreground/85 transition-colors">
                Web-based SaaS solutions built with modern technologies. Scalable, secure, and designed for growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-20 text-balance">
            Portfolio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Project Card 1 */}
            <div className="group overflow-hidden rounded-lg bg-card border border-border hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              <div className="relative w-full h-48 bg-muted overflow-hidden">
                <Image
                  src="/2.PNG"
                  alt="Pulse Studio — Fitness Landing Page"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div  className="p-6 md:p-8 flex flex-col">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-foreground group-hover:text-primary transition-colors">Pulse Studio Fitness Landing Page</h3>
                <p className="text-sm md:text-base text-foreground/70 mb-6 md:mb-8 flex-grow group-hover:text-foreground/85 transition-colors">
                  A conversion-focused landing page with hero section, features, testimonials, and CTA.
                </p>
                <a
                  href="https://pulse-by-talha-tahir.vercel.app/"
                  
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 hover:gap-3 font-medium text-sm transition-all"
                >
                  View Live <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group overflow-hidden rounded-lg bg-card border border-border hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              <div className="relative w-full h-48 bg-muted overflow-hidden">
                <Image
                  src="/chatbot.PNG"
                  alt="AI Customer Support Chatbot"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-foreground group-hover:text-primary transition-colors">AI Customer Support Chatbot</h3>
                <p className="text-sm md:text-base text-foreground/70 mb-6 md:mb-8 flex-grow group-hover:text-foreground/85 transition-colors">
                  Intelligent chatbot that handles customer inquiries, provides instant support, and learns over time.
                </p>
                <a
                  href="https://ai-chatbot-by-talha-tahir.vercel.app/"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 hover:gap-3 font-medium text-sm transition-all"
                >
                  View Live <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group overflow-hidden rounded-lg bg-card border border-border hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              <div className="relative w-full h-48 bg-muted overflow-hidden">
                <Image
                  src="/22.PNG"
                  alt="Automation Dashboard"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col h-full">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-foreground group-hover:text-primary transition-colors">Business Automation Tool</h3>
                <p className="text-sm md:text-base text-foreground/70 mb-6 md:mb-8 flex-grow group-hover:text-foreground/85 transition-colors">
                  Automated workflow that captures contact form submissions, sends instant email notifications, and logs leads — built with Make.com webhooks and Gmail integration.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 hover:gap-3 font-medium text-sm transition-all"
                >
                  View Live <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 md:mb-8 text-balance">
            Let&apos;s Work Together
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-foreground/70 mb-8 md:mb-12 text-balance">
            Have a project in mind? I&apos;d love to hear from you. Get in touch and let&apos;s discuss your next idea.
          </p>

          <a
            href="talhatahir1299@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-base md:text-lg"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </a>

          <p className="mt-6 md:mt-8 text-xs md:text-sm text-muted-foreground">
            Gmail: Talhatahir1299@gmail.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
          <p className="text-sm text-muted-foreground">© 2025 Talha Tahir. All rights reserved.</p>
          <div className="flex gap-6 items-center">
            <a
              href="https://github.com/TalhaTahir44"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/talha-tahir-76a00b1b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.fiverr.com/s/2KYr64k"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Fiverr"
            >
              <SiFiverr className="w-5 h-5" />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01fce4d9602a545212?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Upwork"
            >
              <SiUpwork className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/+923107924892"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 z-50 group hover:scale-110"
        aria-label="Contact on WhatsApp"
        title="Contact on WhatsApp"
      >
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l6.29-.97C9.5 23.13 10.74 23.5 12 23.5c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.41 0-2.73-.33-3.88-.94l-.28-.15-2.89.45.45-2.89-.15-.27C4.46 14.73 4 13.37 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
          <path d="M16.5 12.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75zm-3 0c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75zm-3 0c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75z"/>
        </svg>
      </a>
    </main>
  )
}
