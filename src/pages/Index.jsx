import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import TestimonialCard from '../components/TestimonialCard';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  const testimonials = [
    { quote: "This brilliant book is essential reading for anyone wanting to understand why….we are all entrepreneurs now", author: "Martha Lane-Fox, Chancellor of The Open University, Board Member of Chanel and Twitter" },
    { quote: "We need more entrepreneurs, risk-takers and wealth creators. This vital book is packed with good ideas that will help budding entrepreneurs succeed.", author: "Sir James Dyson, Chief Engineer and Founder of Dyson" },
    { quote: "The next few decades will be driven by builders rather than big companies. Start-Up Century shows why.", author: "Mustafa Suleyman, CEO of Microsoft AI and Co-Founder of DeepMind" },
    { quote: "James argues insightfully why, today more than ever, is the time to start up and what governments and institutions do to support the self-employed", author: "Maria Raga, Former CEO, Depop.com" },
    { quote: "A passionate defense of entreprenuership and the challenges we face", author: "Hiroki Takuchi, Founder & CEO of GoCardless" },
    { quote: "In Start-Up Century, James captures the forces at play to empower people with ideas to build.", author: "Scott Belsky, Founder of Behance, Author of the Messy Middle" },
  ];

  return (
    <div ref={scrollRef} className="min-h-screen bg-sky-400 text-bright-yellow overflow-y-auto">
      {/* Header */}
      <header className="fixed w-full z-50 bg-sky-400 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">START-UP CENTURY</h1>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-bright-yellow">
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
          <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} md:items-center`}>
            <a href="#about" className="block md:inline-block mt-4 md:mt-0 md:ml-6" onClick={(e) => {
              e.preventDefault();
              document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
            }}>About</a>
            <a href="#testimonials" className="block md:inline-block mt-4 md:mt-0 md:ml-6">Testimonials</a>
            <a href="#author" className="block md:inline-block mt-4 md:mt-0 md:ml-6">Author</a>
            <Button className="mt-4 md:mt-0 md:ml-6 bg-bright-yellow text-sky-400 hover:bg-yellow-200" onClick={() => window.open('https://www.amazon.co.uk/Start-Up-Century-becoming-entrepreneurs-everyone/dp/1399410598', '_blank')}>Buy the book</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <motion.div style={{ opacity, scale, y }} className="text-center z-30 relative px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-bright-yellow text-shadow-lg">START-UP CENTURY</h1>
          <p className="text-xl md:text-3xl mb-6 text-white text-shadow-md max-w-3xl mx-auto">Why we're all becoming entrepreneurs — and how to make it work for everyone</p>
          <p className="text-lg md:text-xl mb-10 text-white text-shadow-md">By James Wise</p>
          <Button className="bg-bright-yellow text-sky-800 hover:bg-yellow-300 text-xl px-8 py-4 font-semibold" onClick={() => window.open('https://www.amazon.co.uk/Start-Up-Century-becoming-entrepreneurs-everyone/dp/1399410598', '_blank')}>
            Buy the book <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="/assets/Screenshot 2024-08-28 at 17.06.24.png" alt="Background" className="w-full h-full object-cover brightness-110" />
        </motion.div>
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="text-bright-yellow w-10 h-10" />
        </motion.div>
      </section>

      {/* Book Preview Section */}
      <section id="about" className="py-20 bg-sky-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.img 
                src="/assets/Book cover.jpg" 
                alt="Start-Up Century Book Cover" 
                className="w-full max-w-md mx-auto shadow-2xl rounded-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-4xl font-bold mb-6">About the Book</h2>
              <p className="text-xl mb-6">Explore why new businesses are being launched in record numbers and how technologies like AI and automation are fueling this trend.</p>
              <p className="text-xl mb-6">Discover what it means to live in a world where most people are self-employed or work in small entrepreneurial endeavors.</p>
              <p className="text-xl mb-6">Learn about opportunities in robotics, healthcare, energy, and construction, and how start-ups will solve 21st-century challenges.</p>
              <Button className="bg-bright-yellow text-sky-400 hover:bg-yellow-200 text-xl px-8 py-4" onClick={() => window.open('https://www.amazon.co.uk/Start-Up-Century-becoming-entrepreneurs-everyone/dp/1399410598', '_blank')}>
                Get Your Copy <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-sky-400">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">What People Are Saying</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section id="author" className="py-20 bg-sky-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <motion.img 
                src="/assets/james-wise-headshot.jpg" 
                alt="James Wise" 
                className="rounded-full mx-auto object-cover w-48 h-48 border-4 border-bright-yellow"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-3xl font-bold mb-4">About the Author</h2>
              <p className="text-lg mb-6">James Wise has worked with some of the most successful technology companies of the last decade. As a venture capitalist and Partner at Balderton, a fund that's backed over 20 'unicorn' start-ups, he has supported entrepreneurs as they've grown from their living rooms to Nasdaq IPOs.</p>
              <p className="text-lg mb-6">He sits on the board of companies focused on the global challenges of sustainability, artificial intelligence and healthcare. James is a member of the UK Government's Industrial Development Advisory Board, a trustee of the charity Demos and has written and contributed widely for publications like The Times, The Guardian, The Telegraph and the BBC.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-bright-yellow text-sky-400 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Shape the Future?</h2>
          <p className="text-xl mb-8">Get your copy of "Start-Up Century" today and embark on your entrepreneurial journey.</p>
          <Button className="bg-sky-400 text-bright-yellow hover:bg-sky-500 text-xl px-8 py-4" onClick={() => window.open('https://www.amazon.co.uk/Start-Up-Century-becoming-entrepreneurs-everyone/dp/1399410598', '_blank')}>
            Order Now <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sky-500 text-bright-yellow py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://www.instagram.com/startupcentury" target="_blank" rel="noopener noreferrer" className="text-bright-yellow hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://x.com/jamespaulwise" target="_blank" rel="noopener noreferrer" className="text-bright-yellow hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
          </div>
          <p>&copy; 2024 Start-Up Century. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
