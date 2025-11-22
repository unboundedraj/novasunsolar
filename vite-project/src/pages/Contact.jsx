import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Sun,
  MapPin,
  Phone,
  Mail,
  Globe,
  Copy,
  Check,
  Building,
  FileText,
  Users,
  Award,
  Zap,
  Heart,
  ExternalLink,
  MessageCircle,
  Clock,
  Shield,
} from "lucide-react";
import { useTheme } from "../components/Navbar";
import { client } from "../sanityClient";

const iconMap = {
  MapPin: MapPin,
  Phone: Phone,
  Mail: Mail,
  Globe: Globe,
  Building: Building,
  FileText: FileText,
  // Add more if needed
};
// Particle component for background effect
const Particle = ({ theme }) => {
  const [position, setPosition] = useState({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  });

  useEffect(() => {
    const moveParticle = () => {
      setPosition((prev) => ({
        x: prev.x + (Math.random() - 0.5) * 2,
        y: prev.y + (Math.random() - 0.5) * 2,
      }));
    };

    const interval = setInterval(moveParticle, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={`absolute w-2 h-2 rounded-full ${
        theme === "dark" ? "bg-yellow-400/20" : "bg-orange-400/20"
      }`}
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

// Copy to clipboard component
const CopyableItem = ({
  icon: Icon,
  label,
  value,
  href,
  theme,
  isEmail = false,
  isWebsite = false,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleClick = (e) => {
    if (isEmail) {
      e.preventDefault();
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${value}&su=Inquiry%20about%20Solar%20Solutions&body=Dear%20Novasun%20Solar%20Team,%0D%0A%0D%0AI%20am%20interested%20in%20your%20solar%20energy%20solutions.%20Please%20provide%20more%20information.%0D%0A%0D%0AThank%20you.`,
        "_blank"
      );
    } else if (isWebsite) {
      e.preventDefault();
      window.open(href, "_blank");
    } else if (href && href.startsWith("tel:")) {
      window.location.href = href;
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className={`group relative p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
        theme === "dark"
          ? "bg-gradient-to-br from-[#2f4ecc]/30 to-gray-800/30 border border-white/10 backdrop-blur-md hover:border-yellow-400/50 hover:shadow-xl hover:shadow-yellow-400/10"
          : "bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1" onClick={handleClick}>
          <div className="flex items-center mb-3">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className={`w-12 h-12 flex items-center justify-center rounded-xl mr-4 ${
                theme === "dark"
                  ? "bg-yellow-400/20 text-yellow-400"
                  : "bg-orange-100 text-orange-600"
              }`}
            >
              <Icon className="w-6 h-6" />
            </motion.div>
            <div className="flex-1">
              <h3
                className={`text-lg font-semibold ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {label}
              </h3>
            </div>
          </div>

          <p
            className={`${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            } leading-relaxed break-all`}
          >
            {value}
          </p>

          {(isEmail || isWebsite) && (
            <div className="mt-3">
              <span
                className={`inline-flex items-center text-sm ${
                  theme === "dark" ? "text-yellow-400" : "text-orange-600"
                }`}
              >
                {isEmail ? "Click to send email" : "Click to visit website"}
                <ExternalLink className="w-4 h-4 ml-2" />
              </span>
            </div>
          )}
        </div>

        <motion.button
          onClick={handleCopy}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`ml-4 p-3 rounded-xl transition-all duration-300 ${
            copied
              ? theme === "dark"
                ? "bg-green-500/20 text-green-400"
                : "bg-green-100 text-green-600"
              : theme === "dark"
              ? "bg-white/10 text-white hover:bg-white/20"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
          title="Copy to clipboard"
        >
          {copied ? (
            <Check className="w-5 h-5" />
          ) : (
            <Copy className="w-5 h-5" />
          )}
        </motion.button>
      </div>

      {copied && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-sm font-medium ${
            theme === "dark"
              ? "bg-green-500 text-white"
              : "bg-green-600 text-white"
          } shadow-lg z-10`}
        >
          Copied!
        </motion.div>
      )}
    </motion.div>
  );
};

const Contact = () => {
  const { theme } = useTheme();
  const [particles] = useState(Array.from({ length: 20 }, (_, i) => i));

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await client.fetch(
          '*[_type == "contact"] | order(_createdAt asc)'
        );
        setContacts(data);
        console.log("Fetched contacts:", contacts);
      } catch (err) {
        console.error("Failed to fetch contacts:", err);
      }
    };

    fetchContacts();
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } },
  };
  const floating = {
    y: [-10, 10, -10],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  };
  const pulse = {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  };

  // Company features
  const features = [
    {
      icon: Award,
      title: "15+ Years Experience",
      description:
        "Over a decade of infrastructure excellence and solar expertise",
    },
    {
      icon: Shield,
      title: "Trusted Partnership",
      description: "A unit of Soil and Brick Infraventures Pvt Ltd",
    },
    {
      icon: Users,
      title: "500+ Happy Customers",
      description:
        "Serving communities across India with reliable solar solutions",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer service and technical assistance",
    },
  ];

  return (
    <div
      className={`min-h-screen overflow-hidden relative ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-[#2f4ecc] to-gray-800 text-white"
          : "bg-gradient-to-br from-orange-50 via-yellow-50 to-white text-gray-900"
      }`}
    >
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
        <Sun
          className={`w-20 h-20 ${
            theme === "dark" ? "text-yellow-400/20" : "text-orange-400/20"
          }`}
        />
      </motion.div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="text-center max-w-6xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="space-y-8">
                <motion.div
                  variants={fadeInScale}
                  className={`inline-flex items-center px-8 py-4 rounded-full ${
                    theme === "dark"
                      ? "bg-[#2f4ecc]/30 border border-yellow-400/50 backdrop-blur-md"
                      : "bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300/50 shadow-xl backdrop-blur-sm"
                  }`}
                >
                  <motion.div animate={pulse}>
                    <MessageCircle
                      className={`w-8 h-8 mr-3 ${
                        theme === "dark" ? "text-yellow-400" : "text-orange-600"
                      }`}
                    />
                  </motion.div>
                  <span
                    className={`${
                      theme === "dark" ? "text-yellow-300" : "text-orange-800"
                    } font-semibold text-lg`}
                  >
                    Get in Touch
                  </span>
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
                    Contact
                  </motion.span>
                  <motion.span
                    className={`bg-gradient-to-r ${
                      theme === "dark"
                        ? "from-yellow-400 via-yellow-300 to-white"
                        : "from-yellow-500 via-orange-500 to-red-500"
                    } bg-clip-text text-transparent block`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    Novasun Solar
                  </motion.span>
                </motion.h1>

                <motion.p
                  className={`text-xl lg:text-2xl leading-relaxed max-w-5xl mx-auto ${
                    theme === "dark" ? "text-gray-200" : "text-gray-700"
                  }`}
                  variants={fadeInUp}
                >
                  Ready to harness the power of the sun? Connect with our solar
                  experts today. Every contact detail below is copyable for your
                  convenience.
                </motion.p>

                <motion.div
                  className="flex flex-wrap justify-center gap-6 mt-12"
                  variants={stagger}
                >
                  <motion.div
                    variants={fadeInUp}
                    className={`px-6 py-3 rounded-full ${
                      theme === "dark" ? "bg-yellow-400/20" : "bg-orange-100"
                    } backdrop-blur-sm`}
                  >
                    <span
                      className={`${
                        theme === "dark" ? "text-yellow-300" : "text-orange-700"
                      } font-medium`}
                    >
                      ✓ Click to Copy
                    </span>
                  </motion.div>
                  <motion.div
                    variants={fadeInUp}
                    className={`px-6 py-3 rounded-full ${
                      theme === "dark" ? "bg-yellow-400/20" : "bg-orange-100"
                    } backdrop-blur-sm`}
                  >
                    <span
                      className={`${
                        theme === "dark" ? "text-yellow-300" : "text-orange-700"
                      } font-medium`}
                    >
                      ✓ Instant Email
                    </span>
                  </motion.div>
                  <motion.div
                    variants={fadeInUp}
                    className={`px-6 py-3 rounded-full ${
                      theme === "dark" ? "bg-yellow-400/20" : "bg-orange-100"
                    } backdrop-blur-sm`}
                  >
                    <span
                      className={`${
                        theme === "dark" ? "text-yellow-300" : "text-orange-700"
                      } font-medium`}
                    >
                      ✓ Quick Access
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Company Info Section */}
        <section
          className={`py-16 ${
            theme === "dark"
              ? "bg-black/20 backdrop-blur-sm"
              : "bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-100"
          }`}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <div
                className={`inline-flex items-center justify-center p-8 rounded-3xl shadow-2xl border backdrop-blur-md ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#2f4ecc]/40 to-gray-800/40 border-white/20"
                    : "bg-white/80 border-yellow-200 shadow-yellow-100/50"
                }`}
              >
                <motion.div animate={floating} className="mr-6">
                  <Sun
                    className={`w-16 h-16 ${
                      theme === "dark" ? "text-yellow-400" : "text-orange-600"
                    }`}
                  />
                </motion.div>
                <div className="text-left">
                  <h2
                    className={`text-3xl font-bold mb-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Novasun Solar
                  </h2>
                  <p
                    className={`text-lg ${
                      theme === "dark" ? "text-yellow-300" : "text-orange-600"
                    } font-semibold mb-1`}
                  >
                    Let's contribute to the earth
                  </p>
                  <p
                    className={`${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    A division of Soil and Brick Infraventures Pvt Ltd,
                    specializing in solar energy solutions with over 15 years of
                    infrastructure excellence.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Details Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Contact{" "}
                <span
                  className={
                    theme === "dark" ? "text-yellow-400" : "text-orange-600"
                  }
                >
                  Information
                </span>
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                } text-xl max-w-3xl mx-auto`}
              >
                Click any item to copy to clipboard. Email and website links
                will open directly.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            >
              {contacts.map((contact, index) => {
                const IconComponent = iconMap[contact.icon] || Globe; // fallback icon

                return (
                  <motion.div
                    variants={fadeInUp}
                    key={index}
                    className={
                      contact.label === "Office Address" ? "md:col-span-2" : ""
                    }
                  >
                    <CopyableItem
                      icon={IconComponent}
                      label={contact.label}
                      value={contact.value}
                      href={contact.href}
                      theme={theme}
                      isEmail={contact.isEmail}
                      isWebsite={contact.isWebsite}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section
          className={`py-24 ${
            theme === "dark"
              ? "bg-black/20 backdrop-blur-sm"
              : "bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-50"
          }`}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why Choose{" "}
                <span
                  className={
                    theme === "dark" ? "text-yellow-400" : "text-orange-600"
                  }
                >
                  Us?
                </span>
              </h2>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                } text-xl max-w-3xl mx-auto`}
              >
                Experience the difference that expertise, dedication, and
                innovation make.
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
                  whileHover={{ y: -10 }}
                  className={`text-center p-8 rounded-2xl ${
                    theme === "dark"
                      ? "bg-gradient-to-b from-[#2f4ecc]/20 to-gray-800/20 border border-white/10 backdrop-blur-md"
                      : "bg-gradient-to-b from-white to-gray-50 border border-gray-200 shadow-lg"
                  }`}
                >
                  <motion.div
                    animate={pulse}
                    className={`w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full ${
                      theme === "dark" ? "bg-yellow-400" : "bg-orange-500"
                    }`}
                  >
                    <feature.icon
                      className={`w-10 h-10 ${
                        theme === "dark" ? "text-gray-900" : "text-white"
                      }`}
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p
                    className={`${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section
          className={`py-24 ${
            theme === "dark"
              ? "bg-gradient-to-r from-[#2f4ecc]/40 via-gray-800/40 to-[#2f4ecc]/40 backdrop-blur-md"
              : "bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600"
          } relative overflow-hidden`}
        >
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <motion.div animate={floating} className="mb-8">
                <Heart
                  className={`w-24 h-24 mx-auto ${
                    theme === "dark" ? "text-yellow-400" : "text-white"
                  }`}
                />
              </motion.div>

              <h2
                className={`text-5xl lg:text-6xl font-bold mb-8 ${
                  theme === "dark" ? "text-white" : "text-white"
                }`}
              >
                Let's Build a Sustainable Future Together
              </h2>

              <p
                className={`text-xl lg:text-2xl mb-12 max-w-4xl mx-auto ${
                  theme === "dark" ? "text-gray-200" : "text-white/90"
                } leading-relaxed`}
              >
                Your journey to clean, renewable energy starts with a simple
                conversation. Reach out to us today and discover how solar can
                transform your energy future.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className={`text-lg ${
                  theme === "dark" ? "text-gray-300" : "text-white/80"
                }`}
              >
                ✓ Free Consultation • ✓ Custom Solutions • ✓ 15+ Years
                Experience • ✓ 24/7 Support
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
            <Zap className="w-24 h-24 text-white" />
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
