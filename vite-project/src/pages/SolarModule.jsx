import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Battery,
  Home,
  Sun,
  Wifi,
  WifiOff,
  Grid3X3,
  Power,
  Settings,
  ChevronRight,
  Star,
  CheckCircle,
  ArrowRight,
  Target,
  Eye,
  Users,
  Award,
  Clock,
  DollarSign,
  Leaf,
  TrendingUp,
  Shield
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

const SolarModule = () => {
  const { theme } = useTheme();
  const [activeSystem, setActiveSystem] = useState(0);
  const [particles] = useState(Array.from({ length: 20 }, (_, i) => i));

  // Animation variants (matching WhySolar)
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

  // Solar system data with proper image paths
  const solarSystems = [
    {
      id: 0,
      title: "On Grid System",
      subtitle: "Grid-Tied Solar Solution",
      image: "assets/on-grid-system.png",
      icon: Grid3X3,
      description: "Connected to the utility grid, allowing you to sell excess energy back through net metering and draw power when needed. Most cost-effective solution for urban areas.",
      features: [
        "Net metering capability",
        "Lower initial investment", 
        "Grid backup available",
        "Sell excess energy back"
      ],
      benefits: [
        "Fastest ROI (3-5 years)",
        "Government subsidies available",
        "Minimal maintenance required",
        "Grid stability guaranteed"
      ],
      techSpecs: [
        "No battery storage needed",
        "Bi-directional meter required",
        "Grid synchronization",
        "Automatic shutdown safety"
      ]
    },
    {
      id: 1,
      title: "Hybrid System", 
      subtitle: "Best of Both Worlds",
      image: "assets/hybrid-system.png",
      icon: Zap,
      description: "Combines grid connection with battery storage for maximum flexibility, energy security, and intelligent power management during outages and peak hours.",
      features: [
        "Battery backup included",
        "Grid-tied benefits",
        "Power during outages", 
        "Smart energy management"
      ],
      benefits: [
        "Complete energy security",
        "Load shifting capability",
        "Maximum self-consumption",
        "Future-ready technology"
      ],
      techSpecs: [
        "Advanced battery management",
        "Automatic switching",
        "Peak hour optimization",
        "Remote monitoring"
      ]
    },
    {
      id: 2,
      title: "Off Grid System",
      subtitle: "Complete Energy Independence", 
      image: "assets/off-grid-system.png",
      icon: Battery,
      description: "Completely independent system with comprehensive battery storage, perfect for remote locations, farmhouses, and achieving total energy autonomy.",
      features: [
        "Complete independence",
        "Large battery bank",
        "No grid dependency",
        "Remote location ready"
      ],
      benefits: [
        "Total energy freedom", 
        "No electricity bills ever",
        "Perfect for remote areas",
        "Expandable system design"
      ],
      techSpecs: [
        "Charge controller system",
        "Deep cycle batteries",
        "Backup generator ready",
        "System monitoring"
      ]
    }
  ];

  const currentSystem = solarSystems[activeSystem];

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
        {/* Header Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center max-w-6xl mx-auto">
              <motion.div variants={fadeInUp} className="space-y-8">
                <motion.div
                  variants={fadeInScale}
                  className={`inline-flex items-center px-8 py-4 rounded-full ${theme === 'dark' ? 'bg-[#2f4ecc]/30 border border-yellow-400/50 backdrop-blur-md' : 'bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300/50 shadow-xl backdrop-blur-sm'}`}
                >
                  <motion.div animate={pulse}>
                    <Sun className={`w-8 h-8 mr-3 ${theme === 'dark' ? 'text-yellow-400' : 'text-orange-600'}`} />
                  </motion.div>
                  <span className={`${theme === 'dark' ? 'text-yellow-300' : 'text-orange-800'} font-semibold text-lg`}>Solar System Solutions</span>
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
                    Choose Your Perfect
                  </motion.span>
                  <motion.span 
                    className={`bg-gradient-to-r ${theme === 'dark' ? 'from-yellow-400 via-yellow-300 to-white' : 'from-yellow-500 via-orange-500 to-red-500'} bg-clip-text text-transparent block`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    Solar Solution
                  </motion.span>
                </motion.h1>

                <motion.p 
                  className={`text-xl lg:text-2xl leading-relaxed max-w-5xl mx-auto ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
                  variants={slideInFromBottom}
                >
                  Explore our three comprehensive solar system options designed to meet different energy needs, budgets, and installation requirements. From grid-tied efficiency to complete independence.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* System Selection Tabs */}
        <section className={`py-12 ${theme === 'dark' ? 'bg-black/20 backdrop-blur-sm' : 'bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-100'}`}>
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={stagger}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {solarSystems.map((system, index) => {
                const IconComponent = system.icon;
                return (
                  <motion.button
                    key={system.id}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveSystem(index)}
                    className={`flex items-center px-8 py-4 rounded-full transition-all duration-300 shadow-xl backdrop-blur-sm border ${
                      activeSystem === index
                        ? theme === 'dark'
                          ? 'bg-yellow-400 text-gray-900 border-yellow-400'
                          : 'bg-orange-500 text-white border-orange-500'
                        : theme === 'dark'
                          ? 'bg-white/10 text-white hover:bg-white/20 border-white/20'
                          : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-200'
                    }`}
                  >
                    <IconComponent className="w-6 h-6 mr-3" />
                    <span className="font-semibold">{system.title}</span>
                  </motion.button>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div 
              key={activeSystem}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* System Image */}
              <motion.div 
                variants={fadeInLeft}
                className={`relative p-8 rounded-3xl shadow-2xl border backdrop-blur-md ${theme === 'dark' ? 'bg-gradient-to-br from-[#2f4ecc]/40 to-gray-800/40 border-white/20' : 'bg-white/80 border-yellow-200 shadow-yellow-100/50'}`}
              >
                <motion.div
                  animate={floating}
                  className="relative"
                >
                  <img 
                    src={`/${currentSystem.image}`}
                    alt={currentSystem.title}
                    className="w-full h-auto rounded-2xl"
                  />
                  
                  {/* Floating Icons */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-4 -right-4"
                  >
                    <div className={`w-16 h-16 rounded-full ${theme === 'dark' ? 'bg-gradient-to-r from-yellow-400 to-yellow-300' : 'bg-gradient-to-r from-orange-600 to-red-600'} flex items-center justify-center shadow-lg`}>
                      <Sun className={`w-8 h-8 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`} />
                    </div>
                  </motion.div>

                  <motion.div
                    animate={pulse}
                    className="absolute -bottom-4 -left-4"
                  >
                    <div className={`w-16 h-16 rounded-full ${theme === 'dark' ? 'bg-gradient-to-r from-white to-gray-100' : 'bg-gradient-to-r from-yellow-500 to-orange-500'} flex items-center justify-center shadow-lg`}>
                      <Power className={`w-8 h-8 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`} />
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* System Details */}
              <motion.div variants={fadeInRight} className="space-y-8">
                <div>
                  <motion.div 
                    className="flex items-center mb-6"
                    variants={fadeInUp}
                  >
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 rounded-full ${theme === 'dark' ? 'bg-gradient-to-r from-yellow-400 to-yellow-300' : 'bg-gradient-to-r from-orange-600 to-red-600'} flex items-center justify-center shadow-lg mr-6`}
                    >
                      {React.createElement(currentSystem.icon, {
                        className: `w-10 h-10 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`
                      })}
                    </motion.div>
                    <div>
                      <h2 className="text-4xl lg:text-5xl font-bold">{currentSystem.title}</h2>
                      <p className={`${theme === 'dark' ? 'text-yellow-300' : 'text-orange-600'} font-semibold text-lg`}>
                        {currentSystem.subtitle}
                      </p>
                    </div>
                  </motion.div>

                  <p className={`text-lg leading-relaxed mb-8 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                    {currentSystem.description}
                  </p>
                </div>

                {/* Features, Benefits, and Tech Specs */}
                <div className="grid md:grid-cols-3 gap-6">
                  <motion.div variants={fadeInUp}>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Settings className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'text-yellow-400' : 'text-orange-500'}`} />
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {currentSystem.features.map((feature, index) => (
                        <motion.li 
                          key={index}
                          variants={fadeInUp}
                          className="flex items-start"
                        >
                          <CheckCircle className={`w-4 h-4 mr-2 mt-1 ${theme === 'dark' ? 'text-green-400' : 'text-green-500'} flex-shrink-0`} />
                          <span className={`text-sm ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Star className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'text-yellow-400' : 'text-orange-500'}`} />
                      Benefits
                    </h3>
                    <ul className="space-y-2">
                      {currentSystem.benefits.map((benefit, index) => (
                        <motion.li 
                          key={index}
                          variants={fadeInUp}
                          className="flex items-start"
                        >
                          <Star className={`w-4 h-4 mr-2 mt-1 ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-500'} flex-shrink-0`} />
                          <span className={`text-sm ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Shield className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'text-yellow-400' : 'text-orange-500'}`} />
                      Tech Specs
                    </h3>
                    <ul className="space-y-2">
                      {currentSystem.techSpecs.map((spec, index) => (
                        <motion.li 
                          key={index}
                          variants={fadeInUp}
                          className="flex items-start"
                        >
                          <ArrowRight className={`w-4 h-4 mr-2 mt-1 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'} flex-shrink-0`} />
                          <span className={`text-sm ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{spec}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* CTA Button */}
                <motion.div 
                  variants={fadeInUp}
                  className="pt-6"
                >
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-xl hover:shadow-2xl ${theme === 'dark' ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' : 'bg-orange-500 text-white hover:bg-orange-600'}`}
                  >
                    Get Quote for {currentSystem.title}
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* System Comparison */}
        <section className={`py-24 ${theme === 'dark' ? 'bg-black/30 backdrop-blur-sm' : 'bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-50'}`}>
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-5xl lg:text-6xl font-bold mb-8">
                Quick <span className={theme === 'dark' ? 'text-yellow-400' : 'text-orange-600'}>Comparison</span>
              </h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-xl max-w-4xl mx-auto`}>
                Compare all three solar system types to find the perfect match for your energy needs.
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              variants={stagger}
              className="grid md:grid-cols-3 gap-8"
            >
              {solarSystems.map((system, index) => {
                const IconComponent = system.icon;
                return (
                  <motion.div
                    key={system.id}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, y: -10 }}
                    onClick={() => setActiveSystem(index)}
                    className={`p-8 rounded-2xl cursor-pointer transition-all duration-500 shadow-xl backdrop-blur-md border ${
                      activeSystem === index
                        ? theme === 'dark'
                          ? 'bg-gradient-to-br from-yellow-400/20 to-yellow-300/20 border-2 border-yellow-400'
                          : 'bg-gradient-to-br from-orange-100 to-yellow-100 border-2 border-orange-400'
                        : theme === 'dark'
                          ? 'bg-gradient-to-br from-[#2f4ecc]/30 to-gray-800/30 border border-white/10 hover:bg-white/20'
                          : 'bg-gradient-to-br from-white to-gray-50 border border-yellow-200 hover:shadow-2xl'
                    }`}
                  >
                    <div className="text-center">
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }} 
                        transition={{ duration: 0.6 }}
                        className="mb-6"
                      >
                        <IconComponent className={`w-16 h-16 mx-auto ${theme === 'dark' ? 'text-yellow-400' : 'text-orange-500'}`} />
                      </motion.div>
                      <h4 className="text-2xl font-bold mb-4">{system.title}</h4>
                      <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {system.subtitle}
                      </p>
                      <div className="space-y-2">
                        {system.features.slice(0, 2).map((feature, i) => (
                          <div key={i} className="flex items-center justify-center">
                            <CheckCircle className={`w-3 h-3 mr-2 ${theme === 'dark' ? 'text-green-400' : 'text-green-500'}`} />
                            <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SolarModule;