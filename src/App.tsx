import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useRef } from 'react';
import { 
  Palette, 
  Code, 
  Smartphone, 
  Zap,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Send
} from 'lucide-react';
import { ServiceCard } from './components/ServiceCard';
import { PortfolioItem } from './components/PortfolioItem';
import { TestimonialCard } from './components/TestimonialCard';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { toast } from 'sonner@2.0.3';

export default function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  const testimonials = [
    {
      quote: "PixelFlow transformed our digital presence completely. Their attention to detail and creative vision exceeded our expectations.",
      author: "Sarah Chen",
      role: "Marketing Director",
      company: "TechStart Inc",
      rating: 5
    },
    {
      quote: "Working with PixelFlow was seamless. They delivered a stunning website that perfectly captured our brand essence.",
      author: "Michael Rodriguez",
      role: "CEO",
      company: "InnovateCorp",
      rating: 5
    },
    {
      quote: "The team at PixelFlow is incredibly talented. They turned our ideas into a beautiful, functional design system.",
      author: "Emily Johnson",
      role: "Product Manager",
      company: "DesignPro",
      rating: 5
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    toast.success("Message sent! We'll get back to you soon.");
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1511752229301-31156e2e6b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMHdvcmtzcGFjZSUyMG1vZGVybnxlbnwxfHx8fDE3NTgxMzUwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-purple-800/60 to-pink-900/80" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Welcome to{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              PixelFlow
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed"
          >
            We craft digital experiences that inspire, engage, and convert. 
            Your vision, brought to life through innovative design and cutting-edge technology.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25"
            >
              Start Your Project
              <Zap className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white/80" />
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Crafting Digital{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Masterpieces
                </span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At PixelFlow, we believe every pixel tells a story. Founded by a team of passionate designers 
                and developers, we specialize in creating digital experiences that not only look stunning but 
                drive real business results.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our collaborative approach ensures that your brand's unique voice shines through every 
                interaction, from the first click to the final conversion.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1700561570982-5f845601c505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMGNyZWF0aXZlfGVufDF8fHx8MTc1ODEzNTAwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Creative team collaboration"
                className="relative z-10 w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From concept to launch, we provide comprehensive digital solutions 
              that elevate your brand and drive growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={Palette}
              title="Brand Design"
              description="Complete visual identity systems that make your brand unforgettable and instantly recognizable."
              delay={0}
            />
            <ServiceCard
              icon={Code}
              title="Web Development"
              description="Custom websites and web applications built with modern technologies for optimal performance."
              delay={0.1}
            />
            <ServiceCard
              icon={Smartphone}
              title="Mobile Apps"
              description="Native and cross-platform mobile applications that deliver exceptional user experiences."
              delay={0.2}
            />
            <ServiceCard
              icon={Zap}
              title="Digital Strategy"
              description="Data-driven strategies that amplify your digital presence and accelerate business growth."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Featured{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Work
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore our latest projects and see how we've helped brands 
              transform their digital presence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioItem
              image="https://images.unsplash.com/photo-1730794545099-14902983739d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzU4MDk3OTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              title="E-commerce Platform"
              category="Web Design & Development"
              delay={0}
            />
            <PortfolioItem
              image="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU4MDcwOTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              title="Fitness Mobile App"
              category="Mobile App Design"
              delay={0.1}
            />
            <PortfolioItem
              image="https://images.unsplash.com/photo-1658863025658-4a259cc68fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3NTgwMzQ0MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              title="Brand Identity System"
              category="Branding & Visual Identity"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What Our{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Don't just take our word for it. See what our clients have to say 
              about working with PixelFlow.
            </p>
          </motion.div>

          <div className="relative">
            <TestimonialCard {...testimonials[currentTestimonial]} />
            
            <div className="flex justify-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                ←
              </Button>
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial 
                        ? 'bg-purple-500' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Let's Create{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your digital presence? Get in touch with us 
              and let's discuss your next project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Input placeholder="Your Name" className="rounded-xl" />
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Input type="email" placeholder="Your Email" className="rounded-xl" />
                  </motion.div>
                </div>
                <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Input placeholder="Subject" className="rounded-xl" />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Textarea 
                    placeholder="Tell us about your project..." 
                    rows={6} 
                    className="rounded-xl" 
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-xl"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-gray-800">Email Us</h4>
                  <p className="text-gray-600">hello@pixelflow.studio</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-gray-800">Call Us</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-gray-800">Visit Us</h4>
                  <p className="text-gray-600">123 Creative Street, Design City, DC 12345</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                PixelFlow
              </h3>
              <p className="text-gray-400 max-w-md">
                Creating digital experiences that inspire, engage, and convert.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-4 mt-6 md:mt-0"
            >
              {[
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Github, href: '#' }
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ y: -3, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 mt-8 pt-8 text-center"
          >
            <p className="text-gray-400">
              © 2024 PixelFlow. All rights reserved. Crafted with ❤️ and creativity.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}