import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  sectionTitleAnimation, 
  fadeInAnimation 
} from "@/lib/framer-animations";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all fields before submitting.",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would typically send the data to your server
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! I will get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  
  return (
    <section id="contact" className="py-20 bg-dark text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionTitleAnimation}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Get In <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">Touch</span>
            </h2>
            <p className="mt-4 text-gray-300 text-lg">
              Have a question or want to work together? Reach out to me!
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInAnimation}
            >
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-primary mt-1"><i className="fas fa-envelope"></i></div>
                    <div className="ml-4">
                      <p className="text-gray-300">Email</p>
                      <a href="mailto:contact@example.com" className="text-white hover:text-primary transition-colors">
                        contact@example.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-primary mt-1"><i className="fas fa-map-marker-alt"></i></div>
                    <div className="ml-4">
                      <p className="text-gray-300">Location</p>
                      <p className="text-white">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a 
                    href="#" 
                    className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a 
                    href="#" 
                    className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a 
                    href="#" 
                    className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInAnimation}
            >
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-secondary text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-secondary text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-secondary text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message here..."
                  />
                </div>
                <div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent text-white font-medium py-2 px-4 rounded-lg hover:opacity-90 transition-colors"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
