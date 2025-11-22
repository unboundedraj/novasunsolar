import React from 'react';
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { 
  Sun, 
  Zap, 
  Leaf, 
  Award, 
  TrendingUp, 
  Shield, 
  Users, 
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Battery,
  Home as HomeIcon,
  Building,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Calculator,
  Target
} from 'lucide-react';
import { useTheme } from '../components/Navbar';
import { client } from '../sanityClient';


const Home = () => {
  const { theme } = useTheme();

  const [testimonials, setTestimonials] = useState([])
  const [footerData, setFooterData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      
      const testimonialData = await client.fetch(`*[_type == "testimonial"]`)
      const footerData = await client.fetch(`*[_type == "footer"][0]`)

      setTestimonials(testimonialData)
      setFooterData(footerData)
      console.log(footerData)
    }
    fetchData()
  }, [])

    if (!footerData) return null


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

  const stats = [
    { icon: Zap, value: '250+', label: 'kW Installed', color: 'text-yellow-500' },
    { icon: Users, value: '15+', label: 'Years Experience', color: 'text-blue-500' },
    { icon: Award, value: '100%', label: 'Customer Satisfaction', color: 'text-green-500' },
    { icon: Leaf, value: '12,500+', label: 'Trees Equivalent CO₂ Saved', color: 'text-emerald-500' }
  ];

  const features = [
    {
      icon: TrendingUp,
      title: 'Up to 100% Savings',
      description: 'Dramatically reduce or eliminate your electricity bills with our efficient solar rooftop solutions.',
      color: 'text-green-500'
    },
    {
      icon: Shield,
      title: '25 Years Warranty',
      description: 'Comprehensive operation and maintenance services backed by expert oversight and guaranteed performance.',
      color: 'text-blue-500'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Impact',
      description: 'Every 1 kWp system installed offsets carbon emissions equivalent to planting 50 trees annually.',
      color: 'text-emerald-500'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Expert workmanship using premium-grade materials and cutting-edge solar technology.',
      color: 'text-purple-500'
    }
  ];

  const services = [
    { icon: HomeIcon, title: 'Residential Solar', description: 'Custom home solar solutions' },
    { icon: Building, title: 'Commercial Solar', description: 'Large-scale business installations' },
    { icon: Calculator, title: 'Financial Planning', description: 'ROI analysis and subsidy assistance' },
    { icon: Target, title: 'Maintenance', description: '25-year support guarantee' }
  ];

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
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
          <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInLeft}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center px-6 py-3 bg-[#2f4ecc]/20 border border-yellow-400/30 rounded-full backdrop-blur-sm"
                >
                  <Sun className="w-6 h-6 text-yellow-400 mr-3" />
                  <span className="text-yellow-300 font-medium">Solar Excellence Since 2008</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="space-y-4"
                >
                  <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                    <span className="text-white block">NOVASUN</span>
                    <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent block">
                      SOLAR
                    </span>
                  </h1>
                  
                  <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-white rounded-full"></div>
                  
                  <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                    Transforming sunlight into savings. Join the solar revolution with India's most trusted solar energy partner.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-6"
                >
                  <motion.button
                  onClick={() => window.location.href = '/contact'}
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 215, 0, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 flex items-center justify-center group"
                  >
                    Get Free Solar Quote
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm hover:bg-white/5 transition-all duration-300 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: +91 8866055333
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
              className="relative"
            >
              <div className="relative">
                {/* Solar House Visualization */}
                <motion.div
                  animate={floatingAnimation}
                  className="relative bg-gradient-to-br from-[#2f4ecc] to-gray-800 p-8 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-sm"
                >
                  {/* House with Solar Roof */}
                  <div className="relative mb-6">
                    <motion.div 
                      className="w-full h-32 bg-gradient-to-br from-gray-600 to-gray-800 rounded-t-3xl relative overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 0.8 }}
                    >
                      {/* Solar Panels on Roof */}
                      <div className="absolute inset-2 grid grid-cols-4 gap-0.5">
  {[...Array(8)].map((_, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 1.2 + i * 0.1, duration: 0.6, ease: "backOut" }}
      className={`relative rounded-sm border ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700' 
          : 'bg-gradient-to-br from-slate-700 to-slate-900 border-slate-800'
      } overflow-hidden`}
    >
      {/* Solar Panel Grid Pattern */}
      <div className="absolute inset-0 grid grid-cols-2 gap-px p-0.5">
        {[...Array(4)].map((_, cellIndex) => (
          <div
            key={cellIndex}
            className={`rounded-sm ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-blue-900/50 to-indigo-900/50'
                : 'bg-gradient-to-br from-blue-800/60 to-indigo-900/60'
            }`}
          />
        ))}
      </div>
      
      {/* Reflective Shine Effect */}
      <motion.div
        animate={{ 
          x: [-20, 40, -20],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          delay: i * 0.5,
          ease: "easeInOut" 
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 w-2"
      />
      
      {/* Corner mounting points */}
      <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-gray-400 rounded-full" />
      <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-gray-400 rounded-full" />
    </motion.div>
  ))}
</div>
                      
                      {/* Energy Flow Animation */}
                      <motion.div
                        animate={{ 
                          opacity: [0.3, 1, 0.3],
                          scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      >
                        <Zap className="w-8 h-8 text-yellow-400" />
                      </motion.div>
                    </motion.div>
                    
                    {/* House Base */}
                    <motion.div 
  className={`w-full h-20 ${
    theme === 'dark' 
      ? 'bg-gradient-to-br from-slate-700 to-slate-800' 
      : 'bg-gradient-to-br from-gray-200 to-gray-300'
  } rounded-b-2xl border-t ${
    theme === 'dark' ? 'border-gray-600' : 'border-gray-400'
  } relative`}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1, duration: 0.8 }}
>
  {/* Building Windows Pattern */}
  <div className="absolute inset-2 grid grid-cols-6 grid-rows-3 gap-1">
    {[...Array(18)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0 }}
        animate={{ opacity: Math.random() > 0.3 ? 1 : 0.3 }}
        transition={{ 
          delay: 1.5 + Math.random() * 2,
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: Math.random() * 5 + 2,
          repeatType: "reverse"
        }}
        className={`rounded-sm ${
          theme === 'dark' ? 'bg-yellow-400/80' : 'bg-blue-400/80'
        }`}
      />
    ))}
  </div>
</motion.div>

<motion.div 
  className={`w-full h-20 ${
    theme === 'dark' 
      ? 'bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800' 
      : 'bg-gradient-to-r from-white via-gray-50 to-white'
  } rounded-b-2xl border-t ${
    theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
  } flex items-center justify-between px-4`}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1, duration: 0.8 }}
>
  {/* Left: Solar Input */}
  <div className="flex flex-col items-center">
    <Zap className={`w-4 h-4 ${
      theme === 'dark' ? 'text-yellow-400' : 'text-orange-500'
    } mb-1`} />
    <div className={`text-xs font-semibold ${
      theme === 'dark' ? 'text-yellow-400' : 'text-orange-600'
    }`}>Solar In</div>
  </div>
  
  {/* Center: Home */}
  <motion.div
    animate={{ scale: [1, 1.1, 1] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    <HomeIcon className={`w-6 h-6 ${
      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
    }`} />
  </motion.div>
  
  {/* Right: Grid Output */}
  <div className="flex flex-col items-center">
    <TrendingUp className={`w-4 h-4 ${
      theme === 'dark' ? 'text-green-400' : 'text-green-600'
    } mb-1`} />
    <div className={`text-xs font-semibold ${
      theme === 'dark' ? 'text-green-400' : 'text-green-600'
    }`}>Grid Out</div>
  </div>
</motion.div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Energy Generation</span>
                      <span className="font-bold text-yellow-400">15.2 kW</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
                        className="bg-gradient-to-r from-yellow-400 to-white h-3 rounded-full shadow-lg shadow-yellow-400/30"
                      />
                    </div>
                    <div className="text-sm text-gray-400">Daily Performance: 85% efficiency</div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-yellow-400 to-white rounded-full flex items-center justify-center shadow-xl"
                >
                  <Zap className="w-8 h-8 text-gray-900" />
                </motion.div>

                <motion.div
                  animate={floatingAnimation}
                  className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20"
                >
                  <div className="flex items-center space-x-2">
                    <Leaf className="w-6 h-6 text-green-400" />
                    <div>
                      <div className="text-sm font-semibold text-white">Carbon Saved</div>
                      <div className="text-xs text-gray-400">2.5 tons/year</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="text-center p-8 bg-gradient-to-br from-[#2f4ecc]/30 to-gray-800/30 rounded-2xl backdrop-blur-sm border border-white/10 shadow-xl"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <stat.icon className={`w-16 h-16 ${stat.color} mx-auto mb-6`} />
                  </motion.div>
                  <div className="text-4xl font-bold text-white mb-3">{stat.value}</div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-yellow-400">Novasun Solar</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Experience the difference with our premium solar solutions, expert craftsmanship, and unwavering commitment to customer satisfaction.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  className="bg-gradient-to-br from-[#2f4ecc]/20 to-gray-800/20 p-8 rounded-2xl backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className={`w-16 h-16 ${feature.color} mb-6 group-hover:scale-110 transition-transform`} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Solar Solutions</h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-[#2f4ecc]/30 to-gray-800/30 p-6 rounded-xl backdrop-blur-sm border border-white/10 text-center group"
                >
                  <service.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* Dark Theme Testimonials Section */}
<section className="py-20 bg-black/20 backdrop-blur-sm relative overflow-hidden">
  {/* Background Animation Elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{ rotate: 360, opacity: [0.1, 0.3, 0.1] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute -top-16 -right-16 w-48 h-48 bg-yellow-400/5 rounded-full"
    />
    <motion.div
      animate={{ rotate: -360, opacity: [0.05, 0.2, 0.05] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="absolute -bottom-16 -left-16 w-40 h-40 bg-white/5 rounded-full"
    />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Don't just take our word for it - hear from our satisfied customers who have made the switch to solar.
      </p>
    </motion.div>

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
      className="grid md:grid-cols-3 gap-8"
    >
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          whileHover={{ scale: 1.03, rotateY: 5 }}
          className="bg-gradient-to-br from-[#2f4ecc]/30 to-gray-800/30 p-8 rounded-2xl backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl hover:border-yellow-400/30 transition-all duration-300 group"
        >
          {/* Rating Stars */}
          <div className="flex items-center mb-6">
            {[...Array(testimonial.rating)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 + i * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                <Star className="w-6 h-6 text-yellow-400 fill-current mr-1" />
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mb-6"
          >
            <p className="text-gray-300 mb-4 italic text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
              "{testimonial.text}"
            </p>
          </motion.div>

          {/* Customer Info */}
          <motion.div
            whileHover={{ x: 5 }}
            className="border-t border-white/10 pt-4"
          >
            <div className="font-semibold text-white text-lg mb-1">{testimonial.name}</div>
            <div className="text-sm text-yellow-400 flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {testimonial.location}
            </div>
          </motion.div>

          {/* Hover Glow Effect */}
          <motion.div
            animate={{ 
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.02, 1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: index * 0.5 
            }}
            className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        </motion.div>
      ))}
    </motion.div>

    {/* Additional Trust Indicators */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="text-center mt-16"
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
        <div className="flex items-center space-x-2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Award className="w-6 h-6 text-yellow-400" />
          </motion.div>
          <span className="text-white font-medium">100% Customer Satisfaction</span>
        </div>
        
        <div className="w-1 h-6 bg-white/20 hidden sm:block" />
        
        <div className="flex items-center space-x-2">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Users className="w-6 h-6 text-yellow-400" />
          </motion.div>
          <span className="text-white font-medium">500+ Happy Customers</span>
        </div>
        
        <div className="w-1 h-6 bg-white/20 hidden sm:block" />
        
        <div className="flex items-center space-x-2">
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Shield className="w-6 h-6 text-yellow-400" />
          </motion.div>
          <span className="text-white font-medium">15+ Years Trusted</span>
        </div>
      </div>
    </motion.div>
  </div>
</section>

        {/* CTA Section */}
<section className="py-20 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 text-gray-900">
  <div className="container mx-auto px-4 text-center">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="max-w-5xl mx-auto space-y-8"
    >
      <h2 className="text-5xl lg:text-6xl font-bold">
        Ready to Go Solar?
      </h2>
      <p className="text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
        Join hundreds of satisfied customers who have made the switch to clean, renewable energy. Start your solar journey today!
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-5 bg-gray-900 text-yellow-400 font-bold text-lg rounded-xl shadow-2xl hover:shadow-gray-900/50 transition-all duration-300 flex items-center"
        >
          <Calculator className="w-6 h-6 mr-3" />
          Calculate Savings
        </motion.button>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center text-gray-900 font-semibold text-lg"
        >
          <Phone className="w-6 h-6 mr-3" />
          <span>Call: +91 8866055333</span>
        </motion.div>
      </div>

      {/* Missing Bottom Section - Added Here */}
      <div className="grid md:grid-cols-3 gap-6 mt-16 text-left">
        <div className="flex items-center space-x-3">
          <CheckCircle className="w-6 h-6 text-gray-900 flex-shrink-0" />
          <span>Free Site Assessment</span>
        </div>
        <div className="flex items-center space-x-3">
          <CheckCircle className="w-6 h-6 text-gray-900 flex-shrink-0" />
          <span>No Hidden Costs</span>
        </div>
        <div className="flex items-center space-x-3">
          <CheckCircle className="w-6 h-6 text-gray-900 flex-shrink-0" />
          <span>25 Year Warranty</span>
        </div>
      </div>
    </motion.div>
  </div>
</section>
        {/* Footer Contact Info - Enhanced with Dark Theme Styling */}
<section className={`py-12 relative overflow-hidden ${
  theme === 'dark' 
    ? 'bg-gradient-to-br from-gray-900 via-[#1a2951] to-gray-800' 
    : 'bg-gray-900'
} text-white`}>
  
  {/* Background Animation Elements for Dark Theme */}
  {theme === 'dark' && (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ rotate: 360, opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/5 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360, opacity: [0.05, 0.2, 0.05] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full"
      />
    </div>
  )}

  <div className="container mx-auto px-4 relative z-10">
      <div className="grid md:grid-cols-4 gap-8 text-center">

          {/* Call Us */}
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 text-yellow-400 mb-2" />
            <h3 className="font-semibold mb-1">Call Us</h3>
            <p className="text-gray-400">{footerData.callUs.phone1}</p>
            <p className="text-gray-400">{footerData.callUs.phone2}</p>
          </div>

          {/* Email Us */}
          <div className="flex flex-col items-center">
            <Mail className="w-8 h-8 text-yellow-400 mb-2" />
            <h3 className="font-semibold mb-1">Email Us</h3>
            <p className="text-gray-400">{footerData.emailUs.email1}</p>
            <p className="text-gray-400 text-xs">{footerData.emailUs.email2}</p>
          </div>

          {/* Visit Us */}
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 text-yellow-400 mb-2" />
            <h3 className="font-semibold mb-1">Visit Us</h3>
            <p className="text-gray-400 text-center text-sm">{footerData.visitUs.address}</p>
          </div>

          {/* Company Info */}
          <div className="flex flex-col items-center">
            <Building className="w-8 h-8 text-yellow-400 mb-2" />
            <h3 className="font-semibold mb-1">Company Info</h3>
            <p className="text-gray-400 text-xs text-center">CIN: {footerData.companyInfo.cin}</p>
            <p className="text-gray-400 text-xs text-center">{footerData.companyInfo.description}</p>
          </div>

        </div>

    {/* Bottom Border with Brand Colors */}
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.5 }}
      className={`mt-8 h-1 rounded-full mx-auto max-w-2xl ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-transparent via-yellow-400 to-transparent'
          : 'bg-gradient-to-r from-transparent via-yellow-500 to-transparent'
      }`}
    />

    {/* Copyright */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="text-center mt-6"
    >
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Novasun Solar. All rights reserved.
      </p>
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
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300/50 rounded-full shadow-lg"
              >
                <Sun className="w-6 h-6 text-orange-600 mr-3" />
                <span className="text-orange-800 font-medium">Solar Excellence Since 2008</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-4"
              >
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gray-900 block">NOVASUN</span>
                  <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent block">
                    SOLAR
                  </span>
                </h1>
                
                <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
                
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl">
                  Transforming sunlight into savings. Join the solar revolution with India's most trusted solar energy partner.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <motion.button
                onClick={() => window.location.href = '/contact'}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 165, 0, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Free Solar Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +91 8866055333
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
            className="relative"
          >
            <div className="relative">
              {/* Solar House Visualization */}
              <motion.div
                animate={floatingAnimation}
                className="relative bg-gradient-to-br from-white to-yellow-50 p-8 rounded-3xl shadow-2xl border border-yellow-200"
              >
                {/* House with Solar Roof */}
                <div className="relative mb-6">
                  <motion.div 
                    className="w-full h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-t-3xl relative overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    {/* Solar Panels on Roof */}
                    <div className="absolute inset-2 grid grid-cols-4 gap-0.5">
  {[...Array(8)].map((_, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 1.2 + i * 0.1, duration: 0.6, ease: "backOut" }}
      className={`relative rounded-sm border ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700' 
          : 'bg-gradient-to-br from-slate-700 to-slate-900 border-slate-800'
      } overflow-hidden`}
    >
      {/* Solar Panel Grid Pattern */}
      <div className="absolute inset-0 grid grid-cols-2 gap-px p-0.5">
        {[...Array(4)].map((_, cellIndex) => (
          <div
            key={cellIndex}
            className={`rounded-sm ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-blue-900/50 to-indigo-900/50'
                : 'bg-gradient-to-br from-blue-800/60 to-indigo-900/60'
            }`}
          />
        ))}
      </div>
      
      {/* Reflective Shine Effect */}
      <motion.div
        animate={{ 
          x: [-20, 40, -20],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          delay: i * 0.5,
          ease: "easeInOut" 
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 w-2"
      />
      
      {/* Corner mounting points */}
      <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-gray-400 rounded-full" />
      <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-gray-400 rounded-full" />
    </motion.div>
  ))}
</div>
                      
                      {/* Energy Flow Animation */}
                      <motion.div
                        animate={{ 
                          opacity: [0.3, 1, 0.3],
                          scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      >
                        <Zap className="w-8 h-8 text-yellow-400" />
                      </motion.div>
                    </motion.div>
                    
                    {/* House Base */}
                    <motion.div 
  className={`w-full h-20 ${
    theme === 'dark' 
      ? 'bg-gradient-to-br from-slate-700 to-slate-800' 
      : 'bg-gradient-to-br from-gray-200 to-gray-300'
  } rounded-b-2xl border-t ${
    theme === 'dark' ? 'border-gray-600' : 'border-gray-400'
  } relative`}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1, duration: 0.8 }}
>
  {/* Building Windows Pattern */}
  <div className="absolute inset-2 grid grid-cols-6 grid-rows-3 gap-1">
    {[...Array(18)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0 }}
        animate={{ opacity: Math.random() > 0.3 ? 1 : 0.3 }}
        transition={{ 
          delay: 1.5 + Math.random() * 2,
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: Math.random() * 5 + 2,
          repeatType: "reverse"
        }}
        className={`rounded-sm ${
          theme === 'dark' ? 'bg-yellow-400/80' : 'bg-blue-400/80'
        }`}
      />
    ))}
  </div>
</motion.div>

<motion.div 
  className={`w-full h-20 ${
    theme === 'dark' 
      ? 'bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800' 
      : 'bg-gradient-to-r from-white via-gray-50 to-white'
  } rounded-b-2xl border-t ${
    theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
  } flex items-center justify-between px-4`}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1, duration: 0.8 }}
>
  {/* Left: Solar Input */}
  <div className="flex flex-col items-center">
    <Zap className={`w-4 h-4 ${
      theme === 'dark' ? 'text-yellow-400' : 'text-orange-500'
    } mb-1`} />
    <div className={`text-xs font-semibold ${
      theme === 'dark' ? 'text-yellow-400' : 'text-orange-600'
    }`}>Solar In</div>
  </div>
  
  {/* Center: Home */}
  <motion.div
    animate={{ scale: [1, 1.1, 1] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    <HomeIcon className={`w-6 h-6 ${
      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
    }`} />
  </motion.div>
  
  {/* Right: Grid Output */}
  <div className="flex flex-col items-center">
    <TrendingUp className={`w-4 h-4 ${
      theme === 'dark' ? 'text-green-400' : 'text-green-600'
    } mb-1`} />
    <div className={`text-xs font-semibold ${
      theme === 'dark' ? 'text-green-400' : 'text-green-600'
    }`}>Grid Out</div>
  </div>
</motion.div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Energy Generation</span>
                    <span className="font-bold text-orange-600">15.2 kW</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 h-3 rounded-full shadow-lg"
                    />
                  </div>
                  <div className="text-sm text-gray-500">Daily Performance: 85% efficiency</div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl"
              >
                <Zap className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={floatingAnimation}
                className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-gray-200"
              >
                <div className="flex items-center space-x-2">
                  <Leaf className="w-6 h-6 text-green-500" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Carbon Saved</div>
                    <div className="text-xs text-gray-600">2.5 tons/year</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <stat.icon className={`w-16 h-16 ${stat.color} mx-auto mb-6`} />
                </motion.div>
                <div className="text-4xl font-bold text-gray-900 mb-3">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-orange-600">Novasun Solar</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience the difference with our premium solar solutions, expert craftsmanship, and unwavering commitment to customer satisfaction.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group border border-yellow-200"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className={`w-16 h-16 ${feature.color} mb-6 group-hover:scale-110 transition-transform`} />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solar Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solar energy solutions tailored to meet your specific needs and maximize your savings.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-yellow-200"
              >
                <service.icon className="w-12 h-12 text-orange-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers who have made the switch to solar.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl shadow-lg border border-yellow-200"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-5xl mx-auto space-y-8"
          >
            <h2 className="text-5xl lg:text-6xl font-bold">
              Ready to Go Solar?
            </h2>
            <p className="text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of satisfied customers who have made the switch to clean, renewable energy. Start your solar journey today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-orange-600 font-bold text-lg rounded-xl shadow-2xl hover:shadow-white/50 transition-all duration-300 flex items-center"
              >
                <Calculator className="w-6 h-6 mr-3" />
                Calculate Savings
              </motion.button>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center text-white font-semibold text-lg"
              >
                <Phone className="w-6 h-6 mr-3" />
                <span>Call: +91 8866055333</span>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-16 text-left">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                <span>Free Site Assessment</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                <span>No Hidden Costs</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                <span>25 Year Warranty</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact Info */}
      <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-center">

          {/* Call Us */}
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 text-yellow-400 mb-2" />
            <h3 className="font-semibold mb-1">Call Us</h3>
            <p className="text-gray-400">{footerData.callUs.phone1}</p>
            <p className="text-gray-400">{footerData.callUs.phone2}</p>
          </div>

          {/* Email Us */}
          <div className="flex flex-col items-center">
            <Mail className="w-8 h-8 text-yellow-400 mb-2" />
            <h3 className="font-semibold mb-1">Email Us</h3>
            <p className="text-gray-400">{footerData.emailUs.email1}</p>
            <p className="text-gray-400 text-xs">{footerData.emailUs.email2}</p>
          </div>

          {/* Visit Us */}
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 text-yellow-400 mb-2" />
            <h3 className="font-semibold mb-1">Visit Us</h3>
            <p className="text-gray-400 text-center text-sm">{footerData.visitUs.address}</p>
          </div>

          {/* Company Info */}
          <div className="flex flex-col items-center">
            <Building className="w-8 h-8 text-yellow-400 mb-2" />
            <h3 className="font-semibold mb-1">Company Info</h3>
            <p className="text-gray-400 text-xs text-center">CIN: {footerData.companyInfo.cin}</p>
            <p className="text-gray-400 text-xs text-center">{footerData.companyInfo.description}</p>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;