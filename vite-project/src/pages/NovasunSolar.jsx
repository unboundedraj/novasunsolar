import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  TrendingUp, 
  Shield, 
  Users, 
  Zap, 
  Star,
  CheckCircle,
  Target,
  Calculator,
  Settings,
  Lightbulb,
  BarChart3,
  Download,
  Mail,
  Phone,
  MapPin,
  Globe
} from 'lucide-react';
import { useTheme } from '../components/Navbar';

const NovasunSolar = () => {
  const { theme } = useTheme();

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const rotateAnimation = {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  };

  const features = [
    {
      icon: Users,
      title: "Your Exclusive Partner",
      description: "Comprehensive solutions from start to finish with 25 years of operation and maintenance services. Expert management team personally oversees every client engagement, regardless of project size.",
      color: theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
    },
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description: "Solar PV plants designed with cutting-edge equipment, highest quality ratings and performance assurances. We incorporate technological innovations to ensure your solar investment is future-proof.",
      color: theme === 'dark' ? 'text-yellow-400' : 'text-orange-600'
    },
    {
      icon: BarChart3,
      title: "Dynamic Financial Projections",
      description: "Real-time financial models with transparent cash flow analysis, taxation and subsidy rules. Solar Saving sheets facilitate easy comparison for captive installations and informed investment decisions.",
      color: theme === 'dark' ? 'text-green-400' : 'text-green-600'
    },
    {
      icon: Shield,
      title: "Quality & Performance Assurance",
      description: "Strong 'brand' around your solar projects with guaranteed plant performance, robust equipment warranties, and power generation guarantees - all tailored to your success.",
      color: theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
    }
  ];

  const highlights = [
    { icon: Award, text: "25 Years Warranty", color: theme === 'dark' ? 'text-yellow-400' : 'text-orange-500' },
    { icon: Target, text: "Expert Oversight", color: theme === 'dark' ? 'text-green-400' : 'text-green-600' },
    { icon: Settings, text: "Future-Proof Technology", color: theme === 'dark' ? 'text-blue-400' : 'text-blue-600' },
    { icon: TrendingUp, text: "Transparent ROI", color: theme === 'dark' ? 'text-purple-400' : 'text-purple-600' }
  ];

  const handleDownloadBrochure = () => {
    const link = document.createElement('a');
    link.href = '/assets/Novasun-Solar-Brochure.pdf';
    link.download = 'Novasun-Solar-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (theme === 'dark') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#2f4ecc] to-gray-800 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={rotateAnimation}
            className="absolute -top-20 -right-20 w-96 h-96 bg-yellow-400/5 rounded-full"
          />
          <motion.div
            animate={{ ...rotateAnimation, rotate: [360, 0] }}
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full"
          />
          <motion.div
            animate={floatingAnimation}
            className="absolute top-1/2 left-1/4 w-4 h-4 bg-yellow-400 rounded-full opacity-60"
          />
          <motion.div
            animate={{ ...floatingAnimation, y: [10, -10, 10] }}
            className="absolute top-1/3 right-1/3 w-3 h-3 bg-white rounded-full opacity-40"
          />
        </div>

        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="text-center mb-20"
            >
              {/* Company Logo */}
              <motion.div
                variants={fadeInUp}
                className="mb-12"
              >
                <div className="flex justify-center mb-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative"
                  >
                    <img
                      src="/assets/novasun-dark.jpg"
                      alt="Novasun Solar Logo"
                      className="h-32 w-auto rounded-2xl shadow-2xl shadow-yellow-400/20 border border-white/10"
                    />
                    <motion.div
                      animate={{ 
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-transparent"
                    />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="space-y-6"
              >
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white block">Why Choose</span>
                  <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent block">
                    NOVASUN SOLAR?
                  </span>
                </h1>
                
                <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 to-white rounded-full mx-auto"></div>
                
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  Your exclusive partner for comprehensive solar solutions, combining cutting-edge technology with unmatched service excellence.
                </p>
              </motion.div>
            </motion.div>

            {/* Highlights Bar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-[#2f4ecc]/30 to-gray-800/30 rounded-2xl backdrop-blur-sm border border-white/10"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <highlight.icon className={`w-12 h-12 ${highlight.color} mb-3`} />
                  </motion.div>
                  <span className="text-white font-semibold text-sm">{highlight.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid lg:grid-cols-2 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                  whileHover={{ scale: 1.03, rotateY: 5 }}
                  className="bg-gradient-to-br from-[#2f4ecc]/20 to-gray-800/20 p-8 rounded-3xl backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl hover:border-yellow-400/30 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="flex-shrink-0"
                    >
                      <feature.icon className={`w-16 h-16 ${feature.color} group-hover:scale-110 transition-transform`} />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors">
                        {feature.description}
                      </p>
                      
                      {/* Animated underline */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="h-0.5 bg-gradient-to-r from-yellow-400 to-transparent mt-4"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mt-20"
            >
              <div className="bg-gradient-to-r from-yellow-400/10 to-transparent p-8 rounded-3xl backdrop-blur-sm border border-yellow-400/20">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Partner with Excellence?
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Experience the Novasun Solar difference - where cutting-edge technology meets uncompromising quality and service.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 215, 0, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 flex items-center justify-center"
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Get Your Solar Quote
                  </motion.button>
                  
                  <motion.button
                    onClick={handleDownloadBrochure}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm hover:bg-white/5 transition-all duration-300 flex items-center justify-center"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Brochure
                  </motion.button>
                  
                  <motion.button
                  onClick={() => window.location.href = '/contact'}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm hover:bg-white/5 transition-all duration-300 flex items-center justify-center"
                  >
                    <Lightbulb className="w-5 h-5 mr-2" />
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Company Information Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-20"
            >
              <div className="bg-gradient-to-br from-[#2f4ecc]/20 to-gray-800/20 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Get in Touch</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Contact Information */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold">Office Address</p>
                        <p className="text-gray-300">Plot no. 4, Ganapati Vihar, Khargapur,</p>
                        <p className="text-gray-300">Gomti Nagar Ext., Lucknow-226010</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold">Phone Numbers</p>
                        <p className="text-gray-300">+91 8866055333, +91 8318493980</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold">Email</p>
                        <p className="text-gray-300">info@novasunsolar.com</p>
                        <p className="text-gray-300">jayantk735@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <div>
                        <p className="text-white font-semibold">Website</p>
                        <p className="text-gray-300">www.novasunsolar.com</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Company Details */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-white font-semibold mb-2">Company Information</p>
                      <p className="text-gray-300">CIN: U70101GJ2015PTC083121</p>
                      <p className="text-gray-300 mt-2 italic">(A unit of Soil and Brick Infraventures Pvt Ltd)</p>
                    </div>
                    
                    <div className="pt-4 border-t border-white/10">
                      <motion.button
                        onClick={handleDownloadBrochure}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 flex items-center justify-center"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download Our Brochure
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  // Light Theme
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-white text-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={rotateAnimation}
          className="absolute -top-20 -right-20 w-96 h-96 bg-yellow-400/10 rounded-full"
        />
        <motion.div
          animate={{ ...rotateAnimation, rotate: [360, 0] }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-400/10 rounded-full"
        />
        <motion.div
          animate={floatingAnimation}
          className="absolute top-1/2 left-1/4 w-4 h-4 bg-orange-400 rounded-full opacity-60"
        />
        <motion.div
          animate={{ ...floatingAnimation, y: [10, -10, 10] }}
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-yellow-500 rounded-full opacity-40"
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center mb-20"
          >
            {/* Company Logo */}
            <motion.div
              variants={fadeInUp}
              className="mb-12"
            >
              <div className="flex justify-center mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative"
                >
                  <img
                    src="/assets/novasun-light.png"
                    alt="Novasun Solar Logo"
                    className="h-32 w-auto rounded-2xl shadow-2xl shadow-orange-500/20 border border-orange-200"
                  />
                  <motion.div
                    animate={{ 
                      opacity: [0.3, 0.7, 0.3],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-transparent"
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="space-y-6"
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900 block">Why Choose</span>
                <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent block">
                  NOVASUN SOLAR?
                </span>
              </h1>
              
              <div className="h-1 w-32 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto"></div>
              
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Your exclusive partner for comprehensive solar solutions, combining cutting-edge technology with unmatched service excellence.
              </p>
            </motion.div>
          </motion.div>

          {/* Highlights Bar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-yellow-200"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <highlight.icon className={`w-12 h-12 ${highlight.color} mb-3`} />
                </motion.div>
                <span className="text-gray-900 font-semibold text-sm">{highlight.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                whileHover={{ scale: 1.03, rotateY: 5 }}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group border border-yellow-200"
              >
                <div className="flex items-start space-x-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0"
                  >
                    <feature.icon className={`w-16 h-16 ${feature.color} group-hover:scale-110 transition-transform`} />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors">
                      {feature.description}
                    </p>
                    
                    {/* Animated underline */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-0.5 bg-gradient-to-r from-orange-500 to-transparent mt-4"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-xl border border-yellow-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Partner with Excellence?
              </h2>
              <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                Experience the Novasun Solar difference - where cutting-edge technology meets uncompromising quality and service.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 165, 0, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-300 flex items-center justify-center"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Get Your Solar Quote
                </motion.button>
                
                <motion.button
                  onClick={handleDownloadBrochure}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Brochure
                </motion.button>
                
                <motion.button
                onClick={() => window.location.href = '/contact'}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
                >
                  <Lightbulb className="w-5 h-5 mr-2" />
                  Learn More
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Company Information Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-20"
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get in Touch</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold">Office Address</p>
                      <p className="text-gray-600">Plot no. 4, Ganapati Vihar, Khargapur,</p>
                      <p className="text-gray-600">Gomti Nagar Ext., Lucknow-226010</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold">Phone Numbers</p>
                      <p className="text-gray-600">+91 8866055333, +91 8318493980</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold">Email</p>
                      <p className="text-gray-600">info@novasunsolar.com</p>
                      <p className="text-gray-600">jayantk735@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold">Website</p>
                      <p className="text-gray-600">www.novasunsolar.com</p>
                    </div>
                  </div>
                </div>
                
                {/* Company Details */}
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-900 font-semibold mb-2">Company Information</p>
                    <p className="text-gray-600">CIN: U70101GJ2015PTC083121</p>
                    <p className="text-gray-600 mt-2 italic">(A unit of Soil and Brick Infraventures Pvt Ltd)</p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <motion.button
                      onClick={handleDownloadBrochure}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-300 flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Our Brochure
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NovasunSolar;