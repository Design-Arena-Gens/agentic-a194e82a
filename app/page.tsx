'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Smile,
  Calendar,
  Award,
  Users,
  Clock,
  Star,
  Phone,
  MapPin,
  Mail,
  CheckCircle2,
  Sparkles,
  Shield,
  Heart,
  Zap,
  ArrowRight,
  Menu,
  X
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  const services = [
    {
      icon: Smile,
      title: 'ایمپلنت دندان',
      description: 'کاشت دندان با جدیدترین تکنولوژی و بدون درد',
      color: 'from-blue-500 to-cyan-500',
      features: ['ضمانت مادام‌العمر', 'بدون درد', 'یک روزه']
    },
    {
      icon: Sparkles,
      title: 'لمینیت و ونیر',
      description: 'طراحی لبخند رویایی با روکش‌های زیبا',
      color: 'from-purple-500 to-pink-500',
      features: ['طراحی دیجیتال', 'بدون تراش', 'ماندگاری بالا']
    },
    {
      icon: Zap,
      title: 'ارتودنسی نامرئی',
      description: 'اصلاح ردیف دندان‌ها بدون سیم و براکت',
      color: 'from-emerald-500 to-teal-500',
      features: ['نامرئی', 'راحت', 'قابل برداشت']
    },
    {
      icon: Star,
      title: 'بلیچینگ و سفیدکردن',
      description: 'دندان‌های سفید و درخشان در یک جلسه',
      color: 'from-yellow-500 to-orange-500',
      features: ['ایمن', 'سریع', 'ماندگار']
    },
    {
      icon: Shield,
      title: 'دندانپزشکی کودکان',
      description: 'مراقبت ویژه از دندان‌های کودکان',
      color: 'from-pink-500 to-rose-500',
      features: ['محیط دوستانه', 'بدون ترس', 'پزشک متخصص']
    },
    {
      icon: Heart,
      title: 'جراحی و کشیدن',
      description: 'جراحی‌های دهان و دندان بدون درد',
      color: 'from-red-500 to-pink-500',
      features: ['بیهوشی موضعی', 'کم‌خونریزی', 'بهبودی سریع']
    }
  ]

  const stats = [
    { icon: Users, value: '۲۰,۰۰۰+', label: 'بیمار راضی' },
    { icon: Award, value: '۲۰+', label: 'سال تجربه' },
    { icon: Star, value: '۴.۹', label: 'رتبه مراجعین' },
    { icon: Clock, value: '۲۴/۷', label: 'پشتیبانی آنلاین' }
  ]

  const testimonials = [
    {
      name: 'سارا احمدی',
      role: 'مهندس نرم‌افزار',
      content: 'از کیفیت خدمات و برخورد دوستانه پزشک و پرسنل بسیار راضی هستم. ایمپلنت دندانم عالی انجام شد.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'علی محمدی',
      role: 'معلم',
      content: 'بعد از سال‌ها نگرانی از دندانپزشک، اینجا تجربه بسیار خوبی داشتم. ارتودنسی نامرئی من عالی پیش رفت.',
      rating: 5,
      image: '👨‍🏫'
    },
    {
      name: 'مینا حسینی',
      role: 'دانشجو',
      content: 'لمینیت دندان‌هایم واقعاً فوق‌العاده شده. حرفه‌ای‌ترین کلینیکی که تا حالا رفتم.',
      rating: 5,
      image: '👩‍🎓'
    }
  ]

  const faqs = [
    {
      q: 'آیا ایمپلنت دندان دردناک است؟',
      a: 'خیر، با استفاده از بیهوشی موضعی پیشرفته، کاملاً بدون درد انجام می‌شود.'
    },
    {
      q: 'چه مدت طول می‌کشد تا ایمپلنت کامل شود؟',
      a: 'معمولاً ۳ تا ۶ ماه طول می‌کشد تا ایمپلنت کاملاً با استخوان جوش بخورد.'
    },
    {
      q: 'لمینیت چقدر دوام دارد؟',
      a: 'با مراقبت صحیح، لمینیت‌ها می‌توانند ۱۰ تا ۱۵ سال یا بیشتر دوام بیاورند.'
    },
    {
      q: 'آیا بیمه دندانپزشکی قبول می‌کنید؟',
      a: 'بله، با اکثر بیمه‌های معتبر همکاری داریم و امکان استفاده از بیمه تکمیلی وجود دارد.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 glass border-b"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center">
                <Smile className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-gray-900">کلینیک دکتر رضایی</h1>
                <p className="text-xs text-gray-600 hidden sm:block">مرکز تخصصی دندانپزشکی</p>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['خانه', 'خدمات', 'درباره ما', 'تماس'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
              <motion.a
                href="#appointment"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-2.5 rounded-full font-medium flex items-center gap-2 shadow-lg shadow-primary-500/30"
              >
                <Calendar className="w-4 h-4" />
                نوبت‌دهی آنلاین
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-white"
          >
            <div className="px-4 py-4 space-y-3">
              {['خانه', 'خدمات', 'درباره ما', 'تماس'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#appointment"
                className="block bg-gradient-to-r from-primary-600 to-accent-600 text-white px-4 py-3 rounded-xl font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                نوبت‌دهی آنلاین
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-transparent to-accent-50 opacity-50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-accent-100 px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-medium text-primary-700">پیشرو در دندانپزشکی زیبایی</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                لبخند رویایی شما،
                <span className="block text-gradient mt-2">مأموریت ماست</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                با بیش از ۲۰ سال تجربه و استفاده از جدیدترین تکنولوژی‌های دنیا،
                خدمات دندانپزشکی با کیفیت و بدون درد را به شما ارائه می‌دهیم.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.a
                  href="#appointment"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/40 transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  دریافت نوبت رایگان
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary-50 transition-all"
                >
                  مشاهده خدمات
                </motion.a>
              </div>

              <div className="flex items-center gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-700 font-medium">مشاوره رایگان</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-700 font-medium">اقساط بدون بهره</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-700 font-medium">ضمانت کتبی</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="relative z-10"
              >
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-100 to-accent-100 p-8 shadow-2xl">
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-9xl">
                    😁
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl glass"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-xl">۴.۹/۵</div>
                    <div className="text-sm text-gray-600">رضایت مراجعین</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl glass"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-xl">+۲۰هزار</div>
                    <div className="text-sm text-gray-600">بیمار راضی</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4"
                >
                  <stat.icon className="w-7 h-7 md:w-8 md:h-8" />
                </motion.div>
                <div className="text-3xl md:text-4xl font-extrabold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-white/90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
              خدمات <span className="text-gradient">تخصصی</span> ما
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              ارائه کامل‌ترین خدمات دندانپزشکی با بالاترین کیفیت و استانداردهای جهانی
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`} />

                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl md:text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all`}
                  >
                    اطلاعات بیشتر
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
              چرا <span className="text-gradient">کلینیک ما</span>؟
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              تفاوت‌های کلیدی که ما را در خدمات دندانپزشکی متمایز می‌کند
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Award,
                title: 'پزشکان متخصص و مجرب',
                description: 'تیمی از برترین دندانپزشکان با مدارک بین‌المللی',
                gradient: 'from-yellow-500 to-orange-500'
              },
              {
                icon: Zap,
                title: 'تجهیزات پیشرفته',
                description: 'استفاده از جدیدترین دستگاه‌های دندانپزشکی دنیا',
                gradient: 'from-blue-500 to-purple-500'
              },
              {
                icon: Shield,
                title: 'ضمانت کیفیت',
                description: 'ضمانت کتبی تمامی خدمات و مواد مصرفی',
                gradient: 'from-emerald-500 to-teal-500'
              },
              {
                icon: Heart,
                title: 'محیط دلنشین',
                description: 'فضای آرام و مدرن برای راحتی بیشتر شما',
                gradient: 'from-pink-500 to-rose-500'
              },
              {
                icon: Clock,
                title: 'نوبت‌دهی آسان',
                description: 'سیستم آنلاین نوبت‌دهی و پشتیبانی ۲۴ ساعته',
                gradient: 'from-purple-500 to-indigo-500'
              },
              {
                icon: Sparkles,
                title: 'اقساط بدون بهره',
                description: 'امکان پرداخت اقساطی بدون هیچ بهره‌ای',
                gradient: 'from-cyan-500 to-blue-500'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
              نظرات <span className="text-gradient">بیماران</span> ما
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              تجربه واقعی بیمارانی که به ما اعتماد کرده‌اند
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
              سوالات <span className="text-gradient">متداول</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              پاسخ به رایج‌ترین سوالات درباره خدمات ما
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="appointment" className="py-16 md:py-24 bg-gradient-to-br from-primary-600 via-purple-600 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              آماده دریافت لبخند رویایی‌تان هستید؟
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              همین حالا مشاوره رایگان دریافت کنید و اولین قدم را برای داشتن دندان‌های زیبا و سالم بردارید
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.a
                href="tel:02112345678"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all"
              >
                <Phone className="w-5 h-5" />
                تماس تلفنی: ۰۲۱-۱۲۳۴۵۶۷۸
              </motion.a>

              <motion.a
                href="#form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
              >
                <Calendar className="w-5 h-5" />
                فرم نوبت‌دهی آنلاین
              </motion.a>
            </div>

            <div className="flex items-center justify-center gap-8 text-white/90 flex-wrap">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>مشاوره رایگان</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>بدون هزینه ویزیت</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>تخفیف ویژه</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                با ما در <span className="text-gradient">تماس</span> باشید
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                تیم ما آماده است تا به تمامی سوالات شما پاسخ دهد و بهترین راهکار را برای سلامت دندان‌هایتان ارائه کند.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: 'آدرس',
                    content: 'تهران، خیابان ولیعصر، نرسیده به میدان ونک، پلاک ۱۲۳۴',
                    gradient: 'from-red-500 to-pink-500'
                  },
                  {
                    icon: Phone,
                    title: 'تلفن',
                    content: '۰۲۱-۱۲۳۴۵۶۷۸ | ۰۹۱۲۳۴۵۶۷۸۹',
                    gradient: 'from-blue-500 to-cyan-500'
                  },
                  {
                    icon: Mail,
                    title: 'ایمیل',
                    content: 'info@dental-clinic.ir',
                    gradient: 'from-purple-500 to-pink-500'
                  },
                  {
                    icon: Clock,
                    title: 'ساعات کاری',
                    content: 'شنبه تا پنج‌شنبه: ۹ صبح تا ۹ شب | جمعه: تعطیل',
                    gradient: 'from-emerald-500 to-teal-500'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-6 md:p-8 shadow-xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6">فرم نوبت‌دهی آنلاین</h3>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">نام و نام خانوادگی</label>
                  <input
                    type="text"
                    placeholder="نام کامل خود را وارد کنید"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">شماره تماس</label>
                  <input
                    type="tel"
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">نوع خدمت</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all">
                    <option>انتخاب کنید</option>
                    <option>ایمپلنت دندان</option>
                    <option>لمینیت و ونیر</option>
                    <option>ارتودنسی</option>
                    <option>بلیچینگ</option>
                    <option>دندانپزشکی کودکان</option>
                    <option>جراحی و کشیدن</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">تاریخ مورد نظر</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">توضیحات (اختیاری)</label>
                  <textarea
                    rows={4}
                    placeholder="توضیحات تکمیلی خود را بنویسید..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  ارسال درخواست نوبت
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                  <Smile className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">کلینیک دکتر رضایی</h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                مرکز تخصصی دندانپزشکی با بیش از ۲۰ سال سابقه درخشان در ارائه خدمات با کیفیت
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">دسترسی سریع</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">خانه</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">خدمات</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">درباره ما</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">تماس با ما</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">خدمات</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">ایمپلنت دندان</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ارتودنسی</a></li>
                <li><a href="#" className="hover:text-white transition-colors">لمینیت و ونیر</a></li>
                <li><a href="#" className="hover:text-white transition-colors">بلیچینگ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">اطلاعات تماس</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>تهران، خیابان ولیعصر</li>
                <li>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</li>
                <li>موبایل: ۰۹۱۲۳۴۵۶۷۸۹</li>
                <li>ایمیل: info@dental-clinic.ir</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© ۱۴۰۳ کلینیک دندانپزشکی دکتر رضایی. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
