import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sun,
  Target,
  DollarSign,
  CreditCard,
  PiggyBank,
  TrendingUp,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
  Heart,
  Users,
  Home,
  Lightbulb,
  IndianRupee,
  Calculator,
  FileText,
  Shield,
  Banknote,
  Percent,
  Calendar,
  Star,
  Building,
  Leaf,
  Gift
} from 'lucide-react';
import { useTheme } from '../components/Navbar';

// Particle component for background effect (matching WhySolar)
const Particle = ({ theme }) => {
  const [position, setPosition] = useState({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  });

  useEffect(() => {
    const moveParticle = () => {
      setPosition(prev => ({
        x: prev.x + (Math.random() - 0.5) * 2,
        y: prev.y + (Math.random() - 0.5) * 2,
      }));
    };

    const interval = setInterval(moveParticle, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={`absolute w-2 h-2 rounded-full ${theme === 'dark' ? 'bg-yellow-400/20' : 'bg-orange-400/20'}`}
      animate={{
        x: position.x,
        y: position.y,
        opacity: [0.2, 0.8, 0.2],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

const FinancialAssistance = () => {
  const { theme } = useTheme();
  const [particles] = useState(Array.from({ length: 20 }, (_, i) => i));

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
  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };
  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
  };
  const floating = {
    y: [-10, 10, -10],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  };
  const pulse = {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  };
  const slideInFromBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  // PM Surya Ghar subsidy data - Updated with new data
  const subsidyData = [
    { capacity: '1 KW', systemCost: '₹75,000', centralSubsidy: '₹30,000', stateSubsidy: '₹15,000', finalCost: '₹30,000' },
    { capacity: '2 KW', systemCost: '₹1,40,000', centralSubsidy: '₹60,000', stateSubsidy: '₹30,000', finalCost: '₹50,000' },
    { capacity: '3 KW', systemCost: '₹1,95,000', centralSubsidy: '₹78,000', stateSubsidy: '₹30,000', finalCost: '₹87,000' },
    { capacity: '4 KW', systemCost: '₹2,40,000', centralSubsidy: '₹78,000', stateSubsidy: '₹30,000', finalCost: '₹1,32,000' },
    { capacity: '5 KW', systemCost: '₹3,00,000', centralSubsidy: '₹78,000', stateSubsidy: '₹30,000', finalCost: '₹1,92,000' },
    { capacity: '6 KW', systemCost: '₹3,60,000', centralSubsidy: '₹78,000', stateSubsidy: '₹30,000', finalCost: '₹2,52,000' },
    { capacity: '7 KW', systemCost: '₹4,20,000', centralSubsidy: '₹78,000', stateSubsidy: '₹30,000', finalCost: '₹3,12,000' },
    { capacity: '8 KW', systemCost: '₹4,64,000', centralSubsidy: '₹78,000', stateSubsidy: '₹30,000', finalCost: '₹3,56,000' },
    { capacity: '9 KW', systemCost: '₹5,22,000', centralSubsidy: '₹78,000', stateSubsidy: '₹30,000', finalCost: '₹4,14,000' },
    { capacity: '10 KW', systemCost: '₹5,80,000', centralSubsidy: '₹78,000', stateSubsidy: '₹30,000', finalCost: '₹4,72,000' },
  ];

  // Financing options
  const financingOptions = [
    {
      icon: Building,
      title: 'SBI Surya Ghar Loan',
      rate: '7.0% p.a.',
      features: ['Up to ₹6,00,000', 'No processing fee', '10-year tenure', 'Quick approval'],
      color: 'blue'
    },
    {
      icon: Banknote,
      title: 'HDFC Solar Loan',
      rate: '7.5% p.a.',
      features: ['Up to ₹10,00,000', 'Minimal documentation', '15-year tenure', 'Flexible EMI'],
      color: 'green'
    },
    {
      icon: CreditCard,
      title: 'ICICI Bank Solar',
      rate: '8.0% p.a.',
      features: ['Up to ₹5,00,000', 'Digital process', '7-year tenure', 'Pre-approved limits'],
      color: 'purple'
    },
    {
      icon: PiggyBank,
      title: 'Axis Bank Green',
      rate: '7.25% p.a.',
      features: ['Up to ₹8,00,000', 'Green energy rates', '12-year tenure', 'Fast disbursement'],
      color: 'emerald'
    }
  ];

  // Benefits data
  const benefits = [
    {
      icon: Gift,
      title: 'Government Subsidies',
      description: 'Up to 60% subsidy on solar systems under PM Surya Ghar Yojana',
      value: '₹78,000',
      subtitle: 'Maximum subsidy'
    },
    {
      icon: Percent,
      title: 'Low Interest Rates',
      description: 'Special solar loan rates starting from 7% per annum',
      value: '7.0%',
      subtitle: 'Starting rate'
    },
    {
      icon: Calendar,
      title: 'Flexible Tenure',
      description: 'Loan repayment options up to 15 years',
      value: '15 Years',
      subtitle: 'Maximum tenure'
    },
    {
      icon: Shield,
      title: 'No Collateral',
      description: 'Unsecured loans available for solar installations',
      value: '100%',
      subtitle: 'Collateral-free'
    }
  ];

  // Key features of PM Surya Ghar
  const pmSuryaFeatures = [
    'Free electricity up to 300 units per month',
    'Net metering facility for excess power sale',
    'Substantial government subsidies up to ₹78,000',
    'Easy online application process',
    'Support for 1 crore households nationwide',
    'Promotes clean and renewable energy',
    'Reduces electricity bills significantly',
    'Creates employment opportunities'
  ];

  return (
    <div className={`min-h-screen overflow-hidden relative ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-[#2f4ecc] to-gray-800 text-white' : 'bg-gradient-to-br from-orange-50 via-yellow-50 to-white text-gray-900'}`}>
      {/* Particle Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map((particle) => (
          <Particle key={particle} theme={theme} />
        ))}
      </div>

      {/* Floating Sun Animation */}
      <motion.div
        className="fixed top-20 right-10 pointer-events-none z-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Sun className={`w-20 h-20 ${theme === 'dark' ? 'text-yellow-400/20' : 'text-orange-400/20'}`} />
      </motion.div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center max-w-6xl mx-auto">
              <motion.div variants={fadeInUp} className="space-y-8">
                <motion.div
                  variants={fadeInScale}
                  className={`inline-flex items-center px-8 py-4 rounded-full ${theme === 'dark' ? 'bg-[#2f4ecc]/30 border border-yellow-400/50 backdrop-blur-md' : 'bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300/50 shadow-xl backdrop-blur-sm'}`}
                >
                  <motion.div animate={pulse}>
                    <IndianRupee className={`w-8 h-8 mr-3 ${theme === 'dark' ? 'text-yellow-400' : 'text-orange-600'}`} />
                  </motion.div>
                  <span className={`${theme === 'dark' ? 'text-yellow-300' : 'text-orange-800'} font-semibold text-lg`}>Financial Assistance</span>
                </motion.div>

                <motion.h1 
                  className="text-5xl lg:text-8xl font-bold leading-tight"
                  variants={fadeInUp}
                >
                  <motion.span 
                    className="block"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    Make Solar
                  </motion.span>
                  <motion.span 
                    className={`bg-gradient-to-r ${theme === 'dark' ? 'from-yellow-400 via-yellow-300 to-white' : 'from-yellow-500 via-orange-500 to-red-500'} bg-clip-text text-transparent block`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    Affordable for Everyone
                  </motion.span>
                </motion.h1>

                <motion.p 
                  className={`text-xl lg:text-2xl leading-relaxed max-w-5xl mx-auto ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
                  variants={slideInFromBottom}
                >
                  Explore comprehensive financial assistance options including PM Surya Ghar Yojana subsidies, low-interest solar loans, and flexible EMI plans. Make your transition to solar energy economical and hassle-free.
                </motion.p>

                <motion.div 
                  className="flex flex-wrap justify-center gap-6 mt-12"
                  variants={stagger}
                >
                  <motion.div variants={fadeInUp} className={`px-6 py-3 rounded-full ${theme === 'dark' ? 'bg-yellow-400/20' : 'bg-orange-100'} backdrop-blur-sm`}>
                    <span className={`${theme === 'dark' ? 'text-yellow-300' : 'text-orange-700'} font-medium`}>✓ Up to 60% Subsidy</span>
                  </motion.div>
                  <motion.div variants={fadeInUp} className={`px-6 py-3 rounded-full ${theme === 'dark' ? 'bg-yellow-400/20' : 'bg-orange-100'} backdrop-blur-sm`}>
                    <span className={`${theme === 'dark' ? 'text-yellow-300' : 'text-orange-700'} font-medium`}>✓ 7% Interest Rate</span>
                  </motion.div>
                  <motion.div variants={fadeInUp} className={`px-6 py-3 rounded-full ${theme === 'dark' ? 'bg-yellow-400/20' : 'bg-orange-100'} backdrop-blur-sm`}>
                    <span className={`${theme === 'dark' ? 'text-yellow-300' : 'text-orange-700'} font-medium`}>✓ No Collateral</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* PM Surya Ghar Yojana Section */}
        <section className={`py-24 ${theme === 'dark' ? 'bg-black/30 backdrop-blur-sm' : 'bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-100'}`}>
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8">
                PM Surya Ghar <span className={theme === 'dark' ? 'text-yellow-400' : 'text-orange-600'}>Muft Bijli Yojana</span>
              </h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-xl max-w-4xl mx-auto`}>
                The Government of India's flagship scheme providing substantial subsidies up to 60% for systems up to 2kW capacity and 40% for systems between 2-3kW capacity, enabling free electricity up to 300 units per month.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Yojana Image */}
              <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={fadeInLeft} 
                className={`p-8 rounded-3xl shadow-2xl border backdrop-blur-md ${theme === 'dark' ? 'bg-gradient-to-br from-[#2f4ecc]/40 to-gray-800/40 border-white/20' : 'bg-white/80 border-yellow-200 shadow-yellow-100/50'}`}
              >
                <motion.div animate={floating}>
                  <img 
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="PM Surya Ghar Yojana"
                    className="w-full h-auto rounded-2xl"
                  />
                </motion.div>
              </motion.div>

              {/* Yojana Features */}
              <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={fadeInRight}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-4xl font-bold mb-6 flex items-center">
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }} 
                      className={`w-16 h-16 flex items-center justify-center rounded-full ${theme === 'dark' ? 'bg-gradient-to-r from-yellow-400 to-yellow-300' : 'bg-gradient-to-r from-orange-600 to-red-600'} shadow-lg mr-4`}
                    >
                      <Target className={`w-8 h-8 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`} />
                    </motion.div>
                    Key Features
                  </h3>
                </div>

                <motion.div variants={stagger} className="space-y-4">
                  {pmSuryaFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start"
                    >
                      <CheckCircle className={`w-6 h-6 mr-4 mt-1 ${theme === 'dark' ? 'text-green-400' : 'text-green-500'} flex-shrink-0`} />
                      <span className={`text-lg ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.a
                  href="https://pmsuryaghar.gov.in/"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-xl hover:shadow-2xl ${theme === 'dark' ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' : 'bg-orange-500 text-white hover:bg-orange-600'}`}
                >
                  Apply for PM Surya Ghar Yojana
                  <ArrowRight className="ml-3 w-5 h-5" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Subsidy Table Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8">
                Subsidy <span className={theme === 'dark' ? 'text-yellow-400' : 'text-orange-600'}>Structure</span>
              </h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-xl max-w-4xl mx-auto`}>
                Complete breakdown of subsidies available under PM Surya Ghar Yojana for different system capacities.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInScale}
              className={`overflow-hidden rounded-3xl shadow-2xl border backdrop-blur-md ${theme === 'dark' ? 'bg-gradient-to-br from-[#2f4ecc]/40 to-gray-800/40 border-white/20' : 'bg-white/80 border-yellow-200 shadow-yellow-100/50'}`}
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className={`${theme === 'dark' ? 'bg-yellow-400/20' : 'bg-orange-100'}`}>
                    <tr>
                      <th className={`px-6 py-4 text-left font-bold ${theme === 'dark' ? 'text-yellow-300' : 'text-orange-800'}`}>System Capacity</th>
                      <th className={`px-6 py-4 text-left font-bold ${theme === 'dark' ? 'text-yellow-300' : 'text-orange-800'}`}>System Cost</th>
                      <th className={`px-6 py-4 text-left font-bold ${theme === 'dark' ? 'text-yellow-300' : 'text-orange-800'}`}>Central Subsidy</th>
                      <th className={`px-6 py-4 text-left font-bold ${theme === 'dark' ? 'text-yellow-300' : 'text-orange-800'}`}>State Subsidy</th>
                      <th className={`px-6 py-4 text-left font-bold ${theme === 'dark' ? 'text-yellow-300' : 'text-orange-800'}`}>Final Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subsidyData.map((row, index) => (
                      <motion.tr
                        key={index}
                        variants={fadeInUp}
                        className={`border-t ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'} hover:${theme === 'dark' ? 'bg-white/5' : 'bg-orange-50'} transition-colors`}
                      >
                        <td className={`px-6 py-4 font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{row.capacity}</td>
                        <td className={`px-6 py-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{row.systemCost}</td>
                        <td className={`px-6 py-4 font-semibold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>{row.centralSubsidy}</td>
                        <td className={`px-6 py-4 font-semibold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>{row.stateSubsidy}</td>
                        <td className={`px-6 py-4 font-bold text-xl ${theme === 'dark' ? 'text-yellow-400' : 'text-orange-600'}`}>{row.finalCost}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={`py-24 ${theme === 'dark' ? 'bg-black/20 backdrop-blur-sm' : 'bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-50'}`}>
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8">
                Financial <span className={theme === 'dark' ? 'text-yellow-400' : 'text-orange-600'}>Benefits</span>
              </h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={fadeInScale}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className={`text-center p-8 rounded-2xl shadow-xl transition-all duration-500 backdrop-blur-md border ${theme === 'dark' ? 'bg-gradient-to-br from-[#2f4ecc]/30 to-gray-800/30 border-white/10' : 'bg-gradient-to-br from-white to-gray-50 border-yellow-200 shadow-yellow-100/30'}`}
                >
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }} 
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                  >
                    <benefit.icon className={`w-16 h-16 mx-auto ${theme === 'dark' ? 'text-yellow-400' : 'text-orange-500'}`} />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <div className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-yellow-400' : 'text-orange-600'}`}>
                    {benefit.value}
                  </div>
                  <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {benefit.subtitle}
                  </p>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-sm`}>{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Financing Options Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8">
                Solar Loan <span className={theme === 'dark' ? 'text-yellow-400' : 'text-orange-600'}>Options</span>
              </h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-xl max-w-4xl mx-auto`}>
                Choose from leading banks offering competitive interest rates starting from 7% per annum with flexible tenure options.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {financingOptions.map((option, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  className={`p-8 rounded-2xl shadow-xl transition-all duration-500 backdrop-blur-md border ${theme === 'dark' ? 'bg-gradient-to-br from-[#2f4ecc]/30 to-gray-800/30 border-white/10' : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 shadow-lg'}`}
                >
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.2 }} 
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                  >
                    <option.icon className={`w-16 h-16 text-${option.color}-500`} />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                  <div className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-yellow-400' : 'text-orange-600'}`}>
                    {option.rate}
                  </div>
                  <ul className="space-y-2">
                    {option.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className={`w-4 h-4 mr-2 mt-1 ${theme === 'dark' ? 'text-green-400' : 'text-green-500'} flex-shrink-0`} />
                        <span className={`text-sm ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className={`py-24 ${theme === 'dark' ? 'bg-gradient-to-r from-[#2f4ecc]/40 via-gray-800/40 to-[#2f4ecc]/40 backdrop-blur-md' : 'bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600'} relative overflow-hidden`}>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <motion.div 
                animate={floating}
                className="mb-8"
              >
                <Calculator className={`w-24 h-24 mx-auto ${theme === 'dark' ? 'text-yellow-400' : 'text-white'}`} />
              </motion.div>
              
              <h2 className={`text-5xl lg:text-6xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
                Calculate Your Savings Today
              </h2>
              
              <p className={`text-xl lg:text-2xl mb-12 max-w-4xl mx-auto ${theme === 'dark' ? 'text-gray-200' : 'text-white/90'} leading-relaxed`}>
                Get personalized financial assistance options including subsidy calculations, loan EMI details, and payback analysis. Start your solar journey with complete financial transparency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 ${theme === 'dark' ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' : 'bg-white text-orange-600 hover:bg-gray-100'} shadow-xl hover:shadow-2xl`}
                >
                  Get Financial Consultation
                  <Calculator className="ml-3 w-6 h-6" />
                </motion.a>
                
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold border-2 transition-all duration-300 ${theme === 'dark' ? 'border-white text-white hover:bg-white hover:text-gray-900' : 'border-white text-white hover:bg-white hover:text-orange-600'} backdrop-blur-sm`}
                >
                  <FileText className="mr-3 w-6 h-6" />
                  Contact Now
                </motion.a>
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className={`mt-12 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-white/80'}`}
              >
                ✓ Free Subsidy Calculation • ✓ Loan Pre-Approval • ✓ EMI Planning • ✓ ROI Analysis
              </motion.div>
            </motion.div>
          </div>
          
          {/* Background decorative elements */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 opacity-20"
          >
            <IndianRupee className="w-32 h-32 text-white" />
          </motion.div>
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 left-10 opacity-20"
          >
            <PiggyBank className="w-24 h-24 text-white" />
          </motion.div>
        </section>

        {/* Additional Info Section */}
        <section className={`py-16 ${theme === 'dark' ? 'bg-black/20 backdrop-blur-sm' : 'bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-100'}`}>
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={stagger}
              className="grid md:grid-cols-3 gap-8 text-center"
            >
              <motion.div variants={fadeInUp} className="space-y-4">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-yellow-400' : 'bg-orange-500'}`}>
                  <Clock className={`w-8 h-8 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`} />
                </div>
                <h3 className="text-xl font-bold">Quick Processing</h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Loan approvals in 48-72 hours with minimal documentation required
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-4">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-yellow-400' : 'bg-orange-500'}`}>
                  <Shield className={`w-8 h-8 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`} />
                </div>
                <h3 className="text-xl font-bold">Government Backed</h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  All schemes are backed by Government of India with guaranteed benefits
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-4">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-yellow-400' : 'bg-orange-500'}`}>
                  <Users className={`w-8 h-8 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`} />
                </div>
                <h3 className="text-xl font-bold">Expert Support</h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Dedicated financial advisors to guide you through the entire process
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FinancialAssistance;