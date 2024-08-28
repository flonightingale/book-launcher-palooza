import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Start-Up Century</h1>
              <p className="text-xl mb-6">Discover the future of entrepreneurship and innovation</p>
              <Button className="bg-white text-blue-600 hover:bg-blue-100">Get the Book</Button>
            </div>
            <div className="md:w-1/2">
              <img src="https://www.startup-century.com/assets/book-cover-3d.png" alt="Start-Up Century Book Cover" className="mx-auto object-cover max-w-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* About the Book */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About the Book</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">The Entrepreneurial Revolution</h3>
                <p>Explore how startups are reshaping industries and driving innovation across the globe.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Future-Proof Strategies</h3>
                <p>Learn actionable strategies to thrive in the rapidly evolving business landscape of the 21st century.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <img src="https://www.startup-century.com/assets/author.jpg" alt="Author" className="rounded-full mx-auto object-cover w-48 h-48" />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">About the Author</h2>
              <p className="text-lg mb-4">John Doe is a renowned entrepreneur and thought leader in the startup ecosystem. With over 20 years of experience founding and scaling successful companies, John brings a wealth of knowledge and insights to "Start-Up Century".</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Shape the Future?</h2>
          <p className="text-xl mb-8">Get your copy of "Start-Up Century" today and embark on your entrepreneurial journey.</p>
          <Button className="bg-white text-blue-600 hover:bg-blue-100">Order Now</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Start-Up Century. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
