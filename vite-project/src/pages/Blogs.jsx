import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sun,
  Calendar,
  User,
  Eye,
  ArrowRight,
  X,
  Clock,
  Tag,
  Share2,
  BookOpen,
  Zap,
  Leaf,
  Home,
  TrendingUp,
  Shield,
  DollarSign
} from 'lucide-react';
import { useTheme } from '../components/Navbar';
import { blogPosts } from './blogData';

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

// Blog Modal Component
const BlogModal = ({ blog, isOpen, onClose, theme }) => {
  if (!blog) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-900 via-[#2f4ecc] to-gray-800 text-white border border-white/20' 
                  : 'bg-gradient-to-br from-white via-yellow-50 to-orange-50 text-gray-900 border border-yellow-200'
              }`}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className={`absolute top-6 right-6 z-10 p-3 rounded-full ${
                  theme === 'dark' ? 'bg-red-500/20 hover:bg-red-500/30 text-white' : 'bg-red-100 hover:bg-red-200 text-red-600'
                } backdrop-blur-sm transition-all duration-300`}
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Hero Image */}
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-t from-black/60 to-transparent' : 'bg-gradient-to-t from-black/40 to-transparent'}`} />
                <div className="absolute bottom-6 left-6">
                  <motion.div 
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      theme === 'dark' ? 'bg-yellow-400/20 text-yellow-300 backdrop-blur-sm' : 'bg-orange-500/20 text-white backdrop-blur-sm'
                    }`}
                  >
                    {blog.category}
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl lg:text-4xl font-bold mb-6 leading-tight"
                >
                  {blog.title}
                </motion.h1>

                {/* Meta Info */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200/20"
                >
                  <div className="flex items-center">
                    <User className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'text-yellow-400' : 'text-orange-600'}`} />
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{blog.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'text-yellow-400' : 'text-orange-600'}`} />
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{blog.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'text-yellow-400' : 'text-orange-600'}`} />
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{blog.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'text-yellow-400' : 'text-orange-600'}`} />
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{blog.views} views</span>
                  </div>
                </motion.div>

                {/* Blog Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className={`prose prose-lg max-w-none ${
                    theme === 'dark' ? 'prose-invert prose-yellow' : 'prose-orange'
                  }`}
                >
                  <div className="text-lg leading-relaxed space-y-6">
                    {blog.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>

                {/* Tags */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-12 pt-8 border-t border-gray-200/20"
                >
                  <div className="flex flex-wrap gap-3">
                    {blog.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          theme === 'dark' 
                            ? 'bg-yellow-400/20 text-yellow-300 border border-yellow-400/30' 
                            : 'bg-orange-100 text-orange-700 border border-orange-200'
                        }`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Blogs = () => {
  const { theme } = useTheme();
  const [particles] = useState(Array.from({ length: 20 }, (_, i) => i));
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
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

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedBlog(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

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
                    <BookOpen className={`w-8 h-8 mr-3 ${theme === 'dark' ? 'text-yellow-400' : 'text-orange-600'}`} />
                  </motion.div>
                  <span className={`${theme === 'dark' ? 'text-yellow-300' : 'text-orange-800'} font-semibold text-lg`}>Solar Insights & Updates</span>
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
                    Solar Knowledge
                  </motion.span>
                  <motion.span 
                    className={`bg-gradient-to-r ${theme === 'dark' ? 'from-yellow-400 via-yellow-300 to-white' : 'from-yellow-500 via-orange-500 to-red-500'} bg-clip-text text-transparent block`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    Hub
                  </motion.span>
                </motion.h1>

                <motion.p 
                  className={`text-xl lg:text-2xl leading-relaxed max-w-5xl mx-auto ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
                  variants={fadeInUp}
                >
                  Stay informed with the latest insights, trends, and expert advice on solar energy solutions in India. From installation guides to policy updates, we've got you covered.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Blog Grid Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={stagger} 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {blogPosts.map((blog, index) => (
                <motion.article
                  key={blog.id}
                  variants={fadeInScale}
                  whileHover={{ scale: 1.03, y: -10 }}
                  className={`group overflow-hidden rounded-3xl shadow-xl transition-all duration-500 ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-br from-[#2f4ecc]/30 to-gray-800/30 border border-white/10 backdrop-blur-md hover:border-yellow-400/50' 
                      : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg hover:border-orange-300 hover:shadow-xl'
                  }`}
                >
                  {/* Blog Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                        theme === 'dark' 
                          ? 'bg-yellow-400/20 text-yellow-300 border border-yellow-400/30' 
                          : 'bg-orange-500/20 text-white border border-orange-500/30'
                      }`}>
                        {blog.category}
                      </span>
                    </div>

                    {/* Read Time */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                        theme === 'dark' 
                          ? 'bg-black/40 text-white' 
                          : 'bg-white/40 text-gray-900'
                      }`}>
                        {blog.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 transition-all duration-300">
                      {blog.title}
                    </h3>

                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4 line-clamp-3 leading-relaxed`}>
                      {blog.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className={`flex items-center justify-between mb-6 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {blog.author}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {blog.date}
                        </span>
                      </div>
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {blog.views}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {blog.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className={`px-2 py-1 rounded-full text-xs ${
                            theme === 'dark' 
                              ? 'bg-yellow-400/10 text-yellow-400' 
                              : 'bg-orange-100 text-orange-600'
                          }`}
                        >
                          #{tag}
                        </span>
                      ))}
                      {blog.tags.length > 2 && (
                        <span className={`px-2 py-1 rounded-full text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                          +{blog.tags.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* Read More Button */}
                    <motion.button
                      onClick={() => openModal(blog)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 hover:from-yellow-300 hover:to-yellow-200 shadow-lg shadow-yellow-400/25' 
                          : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-400 hover:to-red-400 shadow-lg shadow-orange-500/25'
                      }`}
                    >
                      Read More
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.article>
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
                <Zap className={`w-24 h-24 mx-auto ${theme === 'dark' ? 'text-yellow-400' : 'text-white'}`} />
              </motion.div>
              
              <h2 className={`text-5xl lg:text-6xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
                Ready to Go Solar?
              </h2>
              
              <p className={`text-xl lg:text-2xl mb-12 max-w-4xl mx-auto ${theme === 'dark' ? 'text-gray-200' : 'text-white/90'} leading-relaxed`}>
                Transform your energy future today. Get a free consultation and discover how solar can save you money while helping the environment.
              </p>
              
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 ${theme === 'dark' ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' : 'bg-white text-orange-600 hover:bg-gray-100'} shadow-xl hover:shadow-2xl`}
              >
                Get Free Consultation
                <ArrowRight className="ml-3 w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Blog Modal */}
      <BlogModal 
        blog={selectedBlog}
        isOpen={isModalOpen}
        onClose={closeModal}
        theme={theme}
      />
    </div>
  );
};

export default Blogs;