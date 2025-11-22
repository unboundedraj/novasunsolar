import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, 
  Zap, 
  Leaf, 
  Award, 
  TrendingUp, 
  Shield, 
  Users, 
  Target,
  Eye,
  Heart,
  Star,
  CheckCircle,
  Building,
  Home as HomeIcon,
  Lightbulb,
  Globe,
  ArrowRight,
  Wrench,
  Diamond,
  UserCheck,
  Focus,

} from 'lucide-react';
import { useTheme } from '../components/Navbar';

const About = () => {
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

  const stats = [
    { icon: Building, value: '250+', label: 'kW Installed', color: 'text-yellow-500' },
    { icon: Users, value: '15+', label: 'Years Experience', color: 'text-blue-500' },
    { icon: Award, value: '100%', label: 'Customer Satisfaction', color: 'text-green-500' },
    { icon: HomeIcon, value: '100+', label: 'kW Residential', color: 'text-purple-500' },
    { icon: Building, value: '150+', label: 'kW Commercial', color: 'text-orange-500' }
  ];

  const coreValues = [
    {
      icon: Wrench,
      title: 'Expert Workmanship',
      description: 'Skilled and precise execution with attention to every detail',
      color: 'text-blue-500'
    },
    {
      icon: Diamond,
      title: 'Premium-Grade Materials',
      description: 'Use of high-quality components for lasting performance',
      color: 'text-purple-500'
    },
    {
      icon: UserCheck,
      title: 'Customer Satisfaction',
      description: 'Delivering impeccable customer service at every touchpoint',
      color: 'text-green-500'
    },
    {
      icon: Focus,
      title: 'Client-Focused Strategy',
      description: 'Tailoring solutions to meet the unique needs of our clients',
      color: 'text-orange-500'
    },
    {
      icon: Star,
      title: 'Quality as Our Guiding Star',
      description: 'Sourcing the finest materials and ensuring precise installation',
      color: 'text-yellow-500'
    }
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
        <section className="relative pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="text-center max-w-6xl mx-auto"
            >
              <motion.div
                variants={fadeInUp}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex items-center px-6 py-3 bg-[#2f4ecc]/20 border border-yellow-400/30 rounded-full backdrop-blur-sm"
                >
                  <Sun className="w-6 h-6 text-yellow-400 mr-3" />
                  <span className="text-yellow-300 font-medium">About Novasun Solar</span>
                </motion.div>

                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white block">Powering India's</span>
                  <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent block">
                    Solar Revolution
                  </span>
                </h1>

                <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 to-white rounded-full mx-auto"></div>

                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  A division of Soil and Brick Infraventures Pvt Ltd, specializing in solar energy solutions 
                  with over 15 years of infrastructure excellence.
                </p>
              </motion.div>
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
              className="grid grid-cols-2 lg:grid-cols-5 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="text-center p-6 bg-gradient-to-br from-[#2f4ecc]/30 to-gray-800/30 rounded-2xl backdrop-blur-sm border border-white/10 shadow-xl"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                  </motion.div>
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInLeft}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white">
                    Who We <span className="text-yellow-400">Are</span>
                  </h2>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Novasun Solar ensures seamless installation and top-notch services for solar-powered 
                    systems. We use premium components, backed by our commitment to excellence.
                  </p>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    At Novasun, you're not just a client; you're a partner. We tailor solutions to your 
                    unique needs, ensuring satisfaction every step of the way.
                  </p>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    Our prowess extends to having successfully executed over <span className="text-yellow-400 font-semibold">100 kW</span> in 
                    Residential Rooftop installations and an impressive <span className="text-yellow-400 font-semibold">150 kW</span> in the 
                    Commercial segment.
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center"
                  >
                    <Globe className="w-6 h-6 text-gray-900" />
                  </motion.div>
                  <div>
                    <p className="text-white font-semibold">Making India Energy Independent</p>
                    <p className="text-gray-400 text-sm">Through widespread solar installations</p>
                  </div>
                </div>
              </motion.div>

              {/* Right Visual */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInRight}
                className="relative"
              >
                <div className="relative">
                  <motion.div
                    animate={floatingAnimation}
                    className="bg-gradient-to-br from-[#2f4ecc]/40 to-gray-800/40 p-8 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl"
                  >
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-yellow-400/10 p-4 rounded-xl text-center">
                        <Leaf className="w-8 h-8 text-green-400 mx-auto mb-2" />
                        <div className="text-sm text-gray-300">Clean Energy</div>
                      </div>
                      <div className="bg-yellow-400/10 p-4 rounded-xl text-center">
                        <Shield className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                        <div className="text-sm text-gray-300">Premium Quality</div>
                      </div>
                      <div className="bg-yellow-400/10 p-4 rounded-xl text-center">
                        <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                        <div className="text-sm text-gray-300">Expert Team</div>
                      </div>
                      <div className="bg-yellow-400/10 p-4 rounded-xl text-center">
                        <Award className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                        <div className="text-sm text-gray-300">Industry Leader</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-yellow-400 to-white rounded-full flex items-center justify-center shadow-xl"
                  >
                    <Sun className="w-8 h-8 text-gray-900" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Our <span className="text-yellow-400">Purpose</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Mission */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInLeft}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-[#2f4ecc]/30 to-gray-800/30 p-8 rounded-3xl backdrop-blur-sm border border-white/10 shadow-xl"
              >
                <div className="flex items-center mb-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mr-4"
                  >
                    <Target className="w-8 h-8 text-gray-900" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white">Mission</h3>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  "Our mission is to harness the power of the sun to create sustainable, organized energy 
                  solutions. Through widespread solar panel installations, we aim to empower communities, 
                  reduce carbon emissions, and pave the way toward a cleaner, brighter future."
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInRight}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-[#2f4ecc]/30 to-gray-800/30 p-8 rounded-3xl backdrop-blur-sm border border-white/10 shadow-xl"
              >
                <div className="flex items-center mb-6">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4"
                  >
                    <Eye className="w-8 h-8 text-gray-900" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white">Vision</h3>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our vision is to revolutionize the energy landscape through strategic solar project 
                  installations. We envision a world where clean energy powers progress, empowers 
                  underserved regions, and leaves a lasting legacy of environmental stewardship.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Core <span className="text-yellow-400">Values</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and define who we are
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="bg-gradient-to-br from-[#2f4ecc]/20 to-gray-800/20 p-8 rounded-2xl backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className={`w-16 h-16 ${value.color} mb-6 group-hover:scale-110 transition-transform`} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 text-gray-900">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-4xl mx-auto space-y-8"
            >
              <h2 className="text-4xl lg:text-5xl font-bold">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl opacity-90 leading-relaxed">
                Join hundreds of satisfied customers who trust Novasun Solar for their clean energy journey
              </p>
              
              <motion.button
              onClick={() => window.location.href = '/contact'}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gray-900 text-yellow-400 font-bold text-lg rounded-xl shadow-2xl hover:shadow-gray-900/50 transition-all duration-300 inline-flex items-center"
              >
                Get Your Solar Quote
                <ArrowRight className="w-6 h-6 ml-3" />
              </motion.button>
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
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center max-w-6xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300/50 rounded-full shadow-lg"
              >
                <Sun className="w-6 h-6 text-orange-600 mr-3" />
                <span className="text-orange-800 font-medium">About Novasun Solar</span>
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900 block">Powering India's</span>
                <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent block">
                  Solar Revolution
                </span>
              </h1>

              <div className="h-1 w-32 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto"></div>

              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                A division of Soil and Brick Infraventures Pvt Ltd, specializing in solar energy solutions 
                with over 15 years of infrastructure excellence.
              </p>
            </motion.div>
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
            className="grid grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="text-center p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                </motion.div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  Who We <span className="text-orange-600">Are</span>
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Novasun Solar ensures seamless installation and top-notch services for solar-powered 
                  systems. We use premium components, backed by our commitment to excellence.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Novasun, you're not just a client; you're a partner. We tailor solutions to your 
                  unique needs, ensuring satisfaction every step of the way.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Our prowess extends to having successfully executed over <span className="text-orange-600 font-semibold">100 kW</span> in 
                  Residential Rooftop installations and an impressive <span className="text-orange-600 font-semibold">150 kW</span> in the 
                  Commercial segment.
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center"
                >
                  <Globe className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <p className="text-gray-900 font-semibold">Making India Energy Independent</p>
                  <p className="text-gray-600 text-sm">Through widespread solar installations</p>
                </div>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  animate={floatingAnimation}
                  className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-3xl shadow-2xl border border-yellow-200"
                >
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-green-100 p-4 rounded-xl text-center">
                      <Leaf className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <div className="text-sm text-gray-700">Clean Energy</div>
                    </div>
                    <div className="bg-blue-100 p-4 rounded-xl text-center">
                      <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-sm text-gray-700">Premium Quality</div>
                    </div>
                    <div className="bg-purple-100 p-4 rounded-xl text-center">
                      <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <div className="text-sm text-gray-700">Expert Team</div>
                    </div>
                    <div className="bg-orange-100 p-4 rounded-xl text-center">
                      <Award className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                      <div className="text-sm text-gray-700">Industry Leader</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl"
                >
                  <Sun className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-orange-600">Purpose</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-yellow-200"
            >
              <div className="flex items-center mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mr-4"
                >
                  <Target className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-900">Mission</h3>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                "Our mission is to harness the power of the sun to create sustainable, organized energy 
                solutions. Through widespread solar panel installations, we aim to empower communities, 
                reduce carbon emissions, and pave the way toward a cleaner, brighter future."
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-yellow-200"
            >
              <div className="flex items-center mb-6">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mr-4"
                >
                  <Eye className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-900">Vision</h3>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our vision is to revolutionize the energy landscape through strategic solar project 
                installations. We envision a world where clean energy powers progress, empowers 
                underserved regions, and leaves a lasting legacy of environmental stewardship.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Core <span className="text-orange-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group border border-yellow-200"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className={`w-16 h-16 ${value.color} mb-6 group-hover:scale-110 transition-transform`} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Join hundreds of satisfied customers who trust Novasun Solar for their clean energy journey
            </p>
            
            <motion.button
            onClick={() => window.location.href = '/contact'}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-orange-600 font-bold text-lg rounded-xl shadow-2xl hover:shadow-white/50 transition-all duration-300 inline-flex items-center"
            >
              Get Your Solar Quote
              <ArrowRight className="w-6 h-6 ml-3" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;