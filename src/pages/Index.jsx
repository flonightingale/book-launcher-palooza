import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-sky-400">
      {/* Header */}
      <header className="bg-sky-400 text-yellow-300 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">START-UP CENTURY</h1>
          <div>
            <Button className="bg-yellow-300 text-sky-400 hover:bg-yellow-200 mr-2">Chat with the book</Button>
            <Button className="bg-yellow-300 text-sky-400 hover:bg-yellow-200">Buy the book!</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-sky-400 text-yellow-300 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8">START-UP CENTURY OUT NOW</h1>
          <p className="text-2xl md:text-4xl mb-12">START-UP CENTURY: WHY WE'RE ALL BECOMING ENTREPRENEURS AND HOW TO MAKE IT WORK FOR EVERYONE</p>
          <Button className="bg-yellow-300 text-sky-400 hover:bg-yellow-200 text-xl px-8 py-4">Buy the book</Button>
        </div>
      </section>

      {/* About the Book */}
      <section className="py-16 bg-sky-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-yellow-300">About the Book</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-sky-400 border-yellow-300 border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-yellow-300">The Entrepreneurial Revolution</h3>
                <p className="text-white">Explore how startups are reshaping industries and driving innovation across the globe.</p>
              </CardContent>
            </Card>
            <Card className="bg-sky-400 border-yellow-300 border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-yellow-300">Future-Proof Strategies</h3>
                <p className="text-white">Learn actionable strategies to thrive in the rapidly evolving business landscape of the 21st century.</p>
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
              <img src="/assets/james-wise-headshot.jpg" alt="James Wise" className="rounded-full mx-auto object-cover w-48 h-48 border-4 border-yellow-300" />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4 text-yellow-300">About the Author</h2>
              <p className="text-lg mb-6 text-white">James Wise has worked with some of the most successful technology companies of the last decade. As a venture capitalist and Partner at Balderton, a fund that's backed over 20 'unicorn' start-ups, he has supported entrepreneurs as they've grown from their living rooms to Nasdaq IPOs.</p>
              <p className="text-lg mb-6 text-white">He sits on the board of companies focused on the global challenges of sustainability, artificial intelligence and healthcare. James is a member of the UK Government's Industrial Development Advisory Board, a trustee of the charity Demos and has written and contributed widely for publications like The Times, The Guardian, The Telegraph and the BBC.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-300 text-sky-400 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Shape the Future?</h2>
          <p className="text-xl mb-8">Get your copy of "Start-Up Century" today and embark on your entrepreneurial journey.</p>
          <Button className="bg-sky-400 text-yellow-300 hover:bg-sky-500">Order Now</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sky-500 text-yellow-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Start-Up Century. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
