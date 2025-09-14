import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-blue-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">SecureFlow</span>
            </div>
            <p className="text-blue-200 text-sm">
              Professional business solutions with enterprise-grade security and seamless collaboration tools.
            </p>
            <div className="flex space-x-4">
              <Github className="h-5 w-5 text-blue-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-blue-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-blue-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-blue-200">
              <li className="hover:text-white cursor-pointer transition-colors">Meeting Scheduling</li>
              <li className="hover:text-white cursor-pointer transition-colors">Video Conferencing</li>
              <li className="hover:text-white cursor-pointer transition-colors">Document Management</li>
              <li className="hover:text-white cursor-pointer transition-colors">Secure Payments</li>
              <li className="hover:text-white cursor-pointer transition-colors">Enterprise Security</li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-blue-200">
              <li className="hover:text-white cursor-pointer transition-colors">Documentation</li>
              <li className="hover:text-white cursor-pointer transition-colors">API Reference</li>
              <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact Support</li>
              <li className="hover:text-white cursor-pointer transition-colors">Status Page</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-blue-200">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contact@secureflow.com</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-200">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-200">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300">
          <p>&copy; 2024 SecureFlow. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;