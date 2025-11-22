import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Wrench, 
  CheckCircle, 
  Zap,
  Settings,
  PlayCircle,
  Award,
  Users,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';
import { useTheme } from '../components/Navbar';
import { useEffect, useState } from 'react'
import { client } from '../sanityClient';
const OurWorkFlow = () => {
  const { theme } = useTheme();

    const [steps, setSteps] = useState([])


    useEffect(() => {
    const fetchSteps = async () => {
      const data = await client.fetch(`*[_type == "workflowStep"] | order(number asc)`)
      setSteps(data)
      console.log(data) // Log the fetched data to verify
    }
    fetchSteps()
  }, [])

  if (!steps.length) return null

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

 

  const handleContactRedirect = () => {
    // Replace with your actual contact page route
    window.location.href = '/contact';
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

        {/* Header Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.div
                variants={fadeInUp}
                className="space-y-6"
              >
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-white block">Our</span>
                  <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent block">
                    WORKFLOW
                  </span>
                </h1>
                
                <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 to-white rounded-full mx-auto"></div>
                
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  Let's Contribute To The Earth - A comprehensive step-by-step process to bring solar energy to your doorstep with excellence and precision
                </p>
              </motion.div>
            </motion.div>

            {/* Workflow Steps */}
            <div className="relative max-w-6xl mx-auto">
              {/* Central Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-yellow-400 to-white/30 h-full hidden lg:block"></div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="space-y-16"
              >
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                    className={`relative flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col items-center gap-8`}
                  >
                    {/* Timeline Circle */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden lg:block">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center border-4 border-white/20 backdrop-blur-sm shadow-lg`}
                      >
                        <span className="text-lg font-bold text-white">
                          {step.number}
                        </span>
                      </motion.div>
                    </div>

                    {/* Content Card */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'} bg-gradient-to-br from-[#2f4ecc]/20 to-gray-800/20 p-6 lg:p-8 rounded-3xl backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl hover:border-yellow-400/30 transition-all duration-300 group`}
                    >
                      {/* Mobile Number Circle */}
                      <div className="lg:hidden mb-6 flex justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center border-2 border-white/20 backdrop-blur-sm`}
                        >
                          <span className="text-lg font-bold text-white">
                            {step.number}
                          </span>
                        </motion.div>
                      </div>

                      <div className="flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-6">
                        <div className="w-full lg:w-40 h-48 lg:h-32 rounded-xl overflow-hidden flex-shrink-0">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <motion.div
                              whileHover={{ rotate: 360, scale: 1.2 }}
                              transition={{ duration: 0.6 }}
                            >
                              <step.icon className={`w-8 h-8 ${step.color} group-hover:scale-110 transition-transform`} />
                            </motion.div>
                            <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                              {step.title}
                            </h3>
                          </div>
                          
                          <div className="mb-4">
                            <span className={`text-sm ${step.color} font-semibold bg-white/10 px-3 py-1 rounded-full`}>
                              Duration: {step.duration}
                            </span>
                          </div>
                          
                          <ul className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="text-gray-300 leading-relaxed group-hover:text-white transition-colors flex items-start">
                                <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Enhanced Bottom Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mt-20"
            >
              <div className="bg-gradient-to-r from-yellow-400/10 to-transparent p-8 rounded-3xl backdrop-blur-sm border border-yellow-400/20 mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                  Excellence Beyond Installation
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-6">
                  <span className="text-yellow-400 font-semibold">We believe that excellent customer service goes beyond installation</span> - 
                  it's about transparency, communication, and ensuring that our customers feel confident about their solar investment. Our commitment extends to 25 years of comprehensive support, making us your lifelong solar partner.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                    <h4 className="text-yellow-400 font-bold text-lg mb-2">Quality Assurance</h4>
                    <p className="text-gray-300">Premium components, rigorous testing, and certified installations ensure maximum performance.</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                    <h4 className="text-yellow-400 font-bold text-lg mb-2">Expert Support</h4>
                    <p className="text-gray-300">Dedicated support team available throughout the entire process and beyond.</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                    <h4 className="text-yellow-400 font-bold text-lg mb-2">Long-term Partnership</h4>
                    <p className="text-gray-300">25-year warranty and maintenance program ensures lasting peace of mind.</p>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 p-8 rounded-3xl backdrop-blur-sm border border-yellow-400/30"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Solar Journey?</h3>
                <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                  Let our experts guide you through every step of the process. Contact us today for a personalized consultation and quote.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    onClick={handleContactRedirect}
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 215, 0, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Us Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.button>
                  
                  <motion.button
  onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=jayantk735@gmail.com', '_blank')}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
>
  <Mail className="w-5 h-5 mr-2" />
  Email Consultation
</motion.button>
                </div>
              </motion.div>
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

      {/* Header Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="space-y-6"
            >
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900 block">Our</span>
                <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent block">
                  WORKFLOW
                </span>
              </h1>
              
              <div className="h-1 w-32 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto"></div>
              
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Let's Contribute To The Earth - A comprehensive step-by-step process to bring solar energy to your doorstep with excellence and precision
              </p>
            </motion.div>
          </motion.div>

          {/* Workflow Steps */}
          <div className="relative max-w-6xl mx-auto">
            {/* Central Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-400 to-yellow-300 h-full hidden lg:block"></div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-16"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                  className={`relative flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col items-center gap-8`}
                >
                  {/* Timeline Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden lg:block">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center border-4 border-orange-200 shadow-lg`}
                    >
                      <span className="text-lg font-bold text-gray-900">
                        {step.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'} bg-white p-6 lg:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group border border-orange-200`}
                  >
                    {/* Mobile Number Circle */}
                    <div className="lg:hidden mb-6 flex justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center border-2 border-orange-200 shadow-lg`}
                      >
                        <span className="text-lg font-bold text-gray-900">
                          {step.number}
                        </span>
                      </motion.div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-6">
                      <div className="w-full lg:w-40 h-48 lg:h-32 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.6 }}
                          >
                            <step.icon className={`w-8 h-8 ${step.color} group-hover:scale-110 transition-transform`} />
                          </motion.div>
                          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                            {step.title}
                          </h3>
                        </div>
                        
                        <div className="mb-4">
                          <span className={`text-sm ${step.color} font-semibold bg-orange-50 px-3 py-1 rounded-full`}>
                            Duration: {step.duration}
                          </span>
                        </div>
                        
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors flex items-start">
                              <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Enhanced Bottom Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-xl border border-yellow-300 mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Excellence Beyond Installation
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
                <span className="text-orange-600 font-semibold">We believe that excellent customer service goes beyond installation</span> - 
                it's about transparency, communication, and ensuring that our customers feel confident about their solar investment. Our commitment extends to 25 years of comprehensive support, making us your lifelong solar partner.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-orange-200">
                  <h4 className="text-orange-600 font-bold text-lg mb-2">Quality Assurance</h4>
                  <p className="text-gray-600">Premium components, rigorous testing, and certified installations ensure maximum performance.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-orange-200">
                  <h4 className="text-orange-600 font-bold text-lg mb-2">Expert Support</h4>
                  <p className="text-gray-600">Dedicated support team available throughout the entire process and beyond.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-orange-200">
                  <h4 className="text-orange-600 font-bold text-lg mb-2">Long-term Partnership</h4>
                  <p className="text-gray-600">25-year warranty and maintenance program ensures lasting peace of mind.</p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-yellow-200 to-orange-200 p-8 rounded-3xl shadow-xl border border-orange-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Solar Journey?</h3>
              <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
                Let our experts guide you through every step of the process. Contact us today for a personalized consultation and quote.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={handleContactRedirect}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 165, 0, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
                
                <motion.button
  onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=jayantk735@gmail.com', '_blank')}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
>
  <Mail className="w-5 h-5 mr-2" />
  Email Consultation
</motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurWorkFlow;