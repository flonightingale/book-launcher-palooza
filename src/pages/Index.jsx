import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-sky-400">
      {/* Header */}
      <header className="bg-sky-400 text-bright-yellow py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">START-UP CENTURY</h1>
          <div>
            <Button className="bg-bright-yellow text-sky-400 hover:bg-yellow-200 mr-2">Chat with the book</Button>
            <Button className="bg-bright-yellow text-sky-400 hover:bg-yellow-200">Buy the book!</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-sky-400 text-bright-yellow py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8">START-UP CENTURY OUT NOW</h1>
          <p className="text-2xl md:text-4xl mb-12">START-UP CENTURY: WHY WE'RE ALL BECOMING ENTREPRENEURS AND HOW TO MAKE IT WORK FOR EVERYONE</p>
          <Button className="bg-bright-yellow text-sky-400 hover:bg-yellow-200 text-xl px-8 py-4">Buy the book</Button>
        </div>
      </section>

      {/* About the Book */}
      <section className="py-16 bg-sky-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-bright-yellow">About the Book</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-sky-400 border-bright-yellow border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-bright-yellow">The Rise of Entrepreneurship</h3>
                <p className="text-white">Explore why new businesses are being launched in record numbers and how technologies like AI and automation are fueling this trend.</p>
              </CardContent>
            </Card>
            <Card className="bg-sky-400 border-bright-yellow border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-bright-yellow">The Future of Work</h3>
                <p className="text-white">Discover what it means to live in a world where most people are self-employed or work in small entrepreneurial endeavors.</p>
              </CardContent>
            </Card>
            <Card className="bg-sky-400 border-bright-yellow border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-bright-yellow">Entrepreneurial Frontiers</h3>
                <p className="text-white">Learn about opportunities in robotics, healthcare, energy, and construction, and how start-ups will solve 21st-century challenges.</p>
              </CardContent>
            </Card>
            <Card className="bg-sky-400 border-bright-yellow border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-bright-yellow">Adapting to Change</h3>
                <p className="text-white">Understand the policy changes needed to support entrepreneurs and how to make education and public services more innovative.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-sky-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-bright-yellow">What People Are Saying</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-sky-400 border-bright-yellow border-2">
              <CardContent className="p-6">
                <p className="text-white italic mb-4">"This brilliant book is essential reading for anyone wanting to understand why….we are all entrepreneurs now"</p>
                <p className="text-bright-yellow font-semibold">Martha Lane-Fox, Chancellor of The Open University, Board Member of Chanel and Twitter</p>
              </CardContent>
            </Card>
            <Card className="bg-sky-400 border-bright-yellow border-2">
              <CardContent className="p-6">
                <p className="text-white italic mb-4">"We need more entrepreneurs, risk-takers and wealth creators. This vital book is packed with good ideas that will help budding entrepreneurs succeed."</p>
                <p className="text-bright-yellow font-semibold">Sir James Dyson, Chief Engineer and Founder of Dyson</p>
              </CardContent>
            </Card>
            <Card className="bg-sky-400 border-bright-yellow border-2">
              <CardContent className="p-6">
                <p className="text-white italic mb-4">"The next few decades will be driven by builders rather than big companies. Start-Up Century shows why."</p>
                <p className="text-bright-yellow font-semibold">Mustafa Suleyman, CEO of Microsoft AI and Co-Founder of DeepMind</p>
              </CardContent>
            </Card>
            <Card className="bg-sky-400 border-bright-yellow border-2">
              <CardContent className="p-6">
                <p className="text-white italic mb-4">"James argues insightfully why, today more than ever, is the time to start up and what governments and institutions do to support the self-employed"</p>
                <p className="text-bright-yellow font-semibold">Maria Raga, Former CEO, Depop.com</p>
              </CardContent>
            </Card>
            <Card className="bg-sky-400 border-bright-yellow border-2">
              <CardContent className="p-6">
                <p className="text-white italic mb-4">"A PASSIONATE BOOK DEFENDING ENTREPRENEURSHIP AND EXPLAINING THE CHALLENGES AND OPPORTUNITIES THEY FACE"</p>
                <p className="text-bright-yellow font-semibold">Hiroki Takuchi, Founder & CEO of GoCardless</p>
              </CardContent>
            </Card>
            <Card className="bg-sky-400 border-bright-yellow border-2">
              <CardContent className="p-6">
                <p className="text-white italic mb-4">"In Start-Up Century, James captures the forces at play to empower people with ideas to build."</p>
                <p className="text-bright-yellow font-semibold">Scott Belsky, Founder of Behance, Author of the Messy Middle</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="bg-sky-400 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <img src="/assets/james-wise-headshot.jpg" alt="James Wise" className="rounded-full mx-auto object-cover w-48 h-48 border-4 border-bright-yellow" />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4 text-bright-yellow">About the Author</h2>
              <p className="text-lg mb-6 text-white">James Wise has worked with some of the most successful technology companies of the last decade. As a venture capitalist and Partner at Balderton, a fund that's backed over 20 'unicorn' start-ups, he has supported entrepreneurs as they've grown from their living rooms to Nasdaq IPOs.</p>
              <p className="text-lg mb-6 text-white">He sits on the board of companies focused on the global challenges of sustainability, artificial intelligence and healthcare. James is a member of the UK Government's Industrial Development Advisory Board, a trustee of the charity Demos and has written and contributed widely for publications like The Times, The Guardian, The Telegraph and the BBC.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-bright-yellow text-sky-400 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Shape the Future?</h2>
          <p className="text-xl mb-8">Get your copy of "Start-Up Century" today and embark on your entrepreneurial journey.</p>
          <Button className="bg-sky-400 text-bright-yellow hover:bg-sky-500">Order Now</Button>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: "url('/assets/james-wise-book.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Connect with James Wise</h2>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/jameswise" target="_blank" rel="noopener noreferrer" className="text-white hover:text-bright-yellow transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://twitter.com/jameswise" target="_blank" rel="noopener noreferrer" className="text-white hover:text-bright-yellow transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sky-500 text-bright-yellow py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Start-Up Century. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
