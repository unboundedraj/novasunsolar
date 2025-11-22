import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sun,
  Target,
  Eye,
  Wrench,
  Diamond,
  UserCheck,
  Focus,
  Star,
  Leaf,
  Globe,
  Shield,
  TrendingUp,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
  Heart,
  Users,
  Home,
  DollarSign,
  Lightbulb
} from 'lucide-react';
import { useTheme } from '../components/Navbar';
import { client } from '../sanityClient';
// Particle component for background effect
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

const WhySolar = () => {
  const { theme } = useTheme();
  const [particles] = useState(Array.from({ length: 20 }, (_, i) => i));

  // Enhanced animations
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

  // Icon mapping function to convert string names to React components
  const getIconComponent = (iconName) => {
    const iconMap = {
      'Wrench': Wrench,
      'Diamond': Diamond,
      'UserCheck': UserCheck,
      'Focus': Focus,
      'Star': Star,
      'Shield': Shield,
      'Sun': Sun,
      'Target': Target,
      'Eye': Eye,
      'Leaf': Leaf,
      'Globe': Globe,
      'TrendingUp': TrendingUp,
      'Award': Award,
      'Clock': Clock,
      'CheckCircle': CheckCircle,
      'ArrowRight': ArrowRight,
      'Zap': Zap,
      'Heart': Heart,
      'Users': Users,
      'Home': Home,
      'DollarSign': DollarSign,
      'Lightbulb': Lightbulb
    };
    
    return iconMap[iconName] || Star; // Default to Star if icon not found
  };

  // Core values - expanded
  // const values = [
  //   { icon: Wrench, title: 'Expert Workmanship', description: 'Our certified technicians bring years of experience and precision to every installation, ensuring optimal performance and longevity.', color: 'text-blue-500' },
  //   { icon: Diamond, title: 'Premium Materials', description: 'We source only the finest solar panels and components from trusted manufacturers, guaranteeing reliability and efficiency.', color: 'text-purple-500' },
  //   { icon: UserCheck, title: 'Customer Excellence', description: 'Your satisfaction drives our commitment. We provide comprehensive support from consultation to post-installation maintenance.', color: 'text-green-500' },
  //   { icon: Focus, title: 'Tailored Solutions', description: 'Every project is unique. We design custom solar systems that perfectly match your energy needs and budget requirements.', color: 'text-orange-500' },
  //   { icon: Star, title: 'Quality Assurance', description: 'Our rigorous quality control processes ensure that every system meets the highest industry standards and delivers exceptional performance.', color: 'text-yellow-500' },
  //   { icon: Shield, title: 'Reliability & Trust', description: 'Built on transparency and integrity, we provide comprehensive warranties and ongoing support you can depend on.', color: 'text-red-500' },
  // ];
 const [values, setValues] = useState([]);
  const [data, setData] = useState({ mission: '', vision: '' });
  useEffect(() => {
    const fetchValues = async () => {
      

      const query = `*[_type == "missionVision"][0]{mission, vision}`;
      const result = await client.fetch(query);
      if (result) setData(result);
      // const data = await client.fetch(query);
      
      const data = await client.fetch(`*[_type == "valueItem"] | order(number asc)`)

      setValues(data);

      // console.log(values);
    };

    fetchValues();
  }, []);


  // Benefits section
  const benefits = [
    { icon: DollarSign, title: 'Significant Savings', description: 'Reduce your electricity bills by up to 90% and achieve complete energy independence within years.', accent: 'green' },
    { icon: Leaf, title: 'Environmental Impact', description: 'Cut your carbon footprint dramatically while contributing to a cleaner, more sustainable future for generations.', accent: 'emerald' },
    { icon: TrendingUp, title: 'Property Value Boost', description: 'Solar installations increase property value by an average of 4-6%, making it a smart long-term investment.', accent: 'blue' },
    { icon: Zap, title: 'Energy Independence', description: 'Break free from rising energy costs and grid dependency with your own renewable power generation system.', accent: 'purple' },
  ];

  // Why choose us section
  const whyChooseUs = [
    { icon: Award, title: '15+ Years Experience', description: 'Industry-leading expertise with thousands of successful installations across India.' },
    { icon: Users, title: '500+ Happy Customers', description: 'Trusted by homeowners and businesses nationwide for reliable solar solutions.' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock customer service and technical support for complete peace of mind.' },
    { icon: CheckCircle, title: '25-Year Warranty', description: 'Comprehensive warranty coverage on panels and workmanship for long-term protection.' },
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
                    <Sun className={`w-8 h-8 mr-3 ${theme === 'dark' ? 'text-yellow-400' : 'text-orange-600'}`} />
                  </motion.div>
                  <span className={`${theme === 'dark' ? 'text-yellow-300' : 'text-orange-800'} font-semibold text-lg`}>Why Solar with Novasun?</span>
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
                    More Than Energy,
                  </motion.span>
                  <motion.span 
                    className={`bg-gradient-to-r ${theme === 'dark' ? 'from-yellow-400 via-yellow-300 to-white' : 'from-yellow-500 via-orange-500 to-red-500'} bg-clip-text text-transparent block`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    A Movement Towards Independence
                  </motion.span>
                </motion.h1>

                <motion.p 
                  className={`text-xl lg:text-2xl leading-relaxed max-w-5xl mx-auto ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
                  variants={slideInFromBottom}
                >
                  We don't just install solar panels. At Novasun Solar, we empower communities, reduce carbon footprints, and drive India's journey to energy independence with premium solutions tailored just for you. Join thousands of satisfied customers who have already made the switch to clean, renewable energy.
                </motion.p>

                <motion.div 
                  className="flex flex-wrap justify-center gap-6 mt-12"
                  variants={stagger}
                >
                  <motion.div variants={fadeInUp} className={`px-6 py-3 rounded-full ${theme === 'dark' ? 'bg-yellow-400/20' : 'bg-orange-100'} backdrop-blur-sm`}>
                    <span className={`${theme === 'dark' ? 'text-yellow-300' : 'text-orange-700'} font-medium`}>✓ 15+ Years Experience</span>
                  </motion.div>
                  <motion.div variants={fadeInUp} className={`px-6 py-3 rounded-full ${theme === 'dark' ? 'bg-yellow-400/20' : 'bg-orange-100'} backdrop-blur-sm`}>
                    <span className={`${theme === 'dark' ? 'text-yellow-300' : 'text-orange-700'} font-medium`}>✓ 500+ Installations</span>
                  </motion.div>
                  <motion.div variants={fadeInUp} className={`px-6 py-3 rounded-full ${theme === 'dark' ? 'bg-yellow-400/20' : 'bg-orange-100'} backdrop-blur-sm`}>
                    <span className={`${theme === 'dark' ? 'text-yellow-300' : 'text-orange-700'} font-medium`}>✓ 25-Year Warranty</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className={`py-24 ${theme === 'dark' ? 'bg-black/30 backdrop-blur-sm' : 'bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-100'}`}>
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInLeft} 
              className={`p-10 rounded-3xl shadow-2xl border backdrop-blur-md ${theme === 'dark' ? 'bg-gradient-to-br from-[#2f4ecc]/40 to-gray-800/40 border-white/20' : 'bg-white/80 border-yellow-200 shadow-yellow-100/50'}`}
            >
              <div className="flex items-center mb-8">
                <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }} 
                  className={`w-20 h-20 flex items-center justify-center rounded-full ${theme === 'dark' ? 'bg-gradient-to-r from-yellow-400 to-yellow-300' : 'bg-gradient-to-r from-orange-600 to-red-600'} shadow-lg`}
                >
                  <Target className={`w-10 h-10 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`} />
                </motion.div>
                <h3 className="text-4xl font-bold ml-6">Mission</h3>
              </div>
              <p className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'} text-lg leading-relaxed`}>
                {data.mission}
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInRight} 
              className={`p-10 rounded-3xl shadow-2xl border backdrop-blur-md ${theme === 'dark' ? 'bg-gradient-to-br from-[#2f4ecc]/40 to-gray-800/40 border-white/20' : 'bg-white/80 border-yellow-200 shadow-yellow-100/50'}`}
            >
              <div className="flex items-center mb-8">
                <motion.div 
                  animate={floating} 
                  className={`w-20 h-20 flex items-center justify-center rounded-full ${theme === 'dark' ? 'bg-gradient-to-r from-white to-gray-100' : 'bg-gradient-to-r from-yellow-500 to-orange-500'} shadow-lg`}
                >
                  <Eye className={`w-10 h-10 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`} />
                </motion.div>
                <h3 className="text-4xl font-bold ml-6">Vision</h3>
              </div>
              <p className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'} text-lg leading-relaxed`}>
                {data.vision}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8">
                Why Choose <span className={theme === 'dark' ? 'text-yellow-400' : 'text-orange-600'}>Solar Energy?</span>
              </h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-xl max-w-4xl mx-auto`}>
                Discover the life-changing benefits of switching to solar energy and join the renewable revolution.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-10">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={fadeInScale}
                  whileHover={{ scale: 1.02, rotateX: 5 }}
                  className={`p-8 rounded-2xl shadow-xl transition-all duration-500 group ${theme === 'dark' ? 'bg-gradient-to-br from-[#2f4ecc]/30 to-gray-800/30 border border-white/10 backdrop-blur-md' : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg'}`}
                >
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }} 
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                  >
                    <benefit.icon className={`w-16 h-16 text-${benefit.accent}-500 group-hover:text-${benefit.accent}-400 transition-colors`} />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-lg`}>{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className={`py-24 ${theme === 'dark' ? 'bg-black/20 backdrop-blur-sm' : 'bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-50'}`}>
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8">
                Our <span className={theme === 'dark' ? 'text-yellow-400' : 'text-orange-600'}>Core Values</span>
              </h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-xl max-w-4xl mx-auto`}>
                The foundational principles that guide every project, every customer interaction, and every future we build together.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((val, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  className={`p-8 rounded-2xl shadow-xl transition-all duration-500 group ${theme === 'dark' ? 'bg-gradient-to-br from-[#2f4ecc]/30 to-gray-800/30 border border-white/10 backdrop-blur-md' : 'bg-gradient-to-br from-white to-gray-50 border border-yellow-200 shadow-yellow-100/30'}`}
                >
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.2 }} 
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                  >
                    {React.createElement(getIconComponent(val.icon), {
                      className: `w-16 h-16 ${val.color} group-hover:scale-110 transition-all duration-300`
                    })}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4">{val.title}</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>{val.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8">
                Why Choose <span className={theme === 'dark' ? 'text-yellow-400' : 'text-orange-600'}>Novasun Solar?</span>
              </h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-xl max-w-4xl mx-auto`}>
                Experience the difference that expertise, dedication, and innovation make in your solar journey.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className={`text-center p-8 rounded-2xl ${theme === 'dark' ? 'bg-gradient-to-b from-[#2f4ecc]/20 to-gray-800/20 border border-white/10 backdrop-blur-md' : 'bg-gradient-to-b from-white to-gray-50 border border-gray-200 shadow-lg'}`}
                >
                  <motion.div 
                    animate={pulse}
                    className={`w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full ${theme === 'dark' ? 'bg-yellow-400' : 'bg-orange-500'}`}
                  >
                    <item.icon className={`w-10 h-10 ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`} />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{item.description}</p>
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
                <Lightbulb className={`w-24 h-24 mx-auto ${theme === 'dark' ? 'text-yellow-400' : 'text-white'}`} />
              </motion.div>
              
              <h2 className={`text-5xl lg:text-6xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
                Ready to Make the Switch?
              </h2>
              
              <p className={`text-xl lg:text-2xl mb-12 max-w-4xl mx-auto ${theme === 'dark' ? 'text-gray-200' : 'text-white/90'} leading-relaxed`}>
                Join thousands of satisfied customers who have already transformed their energy future. Let's create a customized solar solution that's perfect for your needs and budget.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 ${theme === 'dark' ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' : 'bg-white text-orange-600 hover:bg-gray-100'} shadow-xl hover:shadow-2xl`}
                >
                  Get Your Free Consultation
                  <ArrowRight className="ml-3 w-6 h-6" />
                </motion.a>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold border-2 transition-all duration-300 ${theme === 'dark' ? 'border-white text-white hover:bg-white hover:text-gray-900' : 'border-white text-white hover:bg-white hover:text-orange-600'} backdrop-blur-sm`}
                >
                  <Heart className="mr-3 w-6 h-6" />
                  Call Us: +91 8866055333
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className={`mt-12 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-white/80'}`}
              >
                ✓ Free Site Assessment • ✓ No Hidden Charges • ✓ 25-Year Warranty • ✓ Easy EMI Options
              </motion.div>
            </motion.div>
          </div>
          
          {/* Background decorative elements */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 opacity-20"
          >
            <Sun className="w-32 h-32 text-white" />
          </motion.div>
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 left-10 opacity-20"
          >
            <Globe className="w-24 h-24 text-white" />
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default WhySolar;