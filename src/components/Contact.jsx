import React, { useState } from 'react'
import { Github, Mail, Twitter, Linkedin, Send, MapPin, Calendar, Phone, MessageCircle, SendHorizonal, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/antono4', color: 'hover:bg-gray-700', bg: 'bg-gray-600' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/antono4', color: 'hover:bg-sky-500', bg: 'bg-sky-500' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/antono4', color: 'hover:bg-blue-600', bg: 'bg-blue-600' },
    { icon: MessageCircle, label: 'Discord', url: '#', color: 'hover:bg-indigo-500', bg: 'bg-indigo-500' },
  ]

  const quickActions = [
    { icon: Mail, label: 'Email', value: 'antonockr1@gmail.com', action: () => window.location.href = 'mailto:antonockr1@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+62 812 XXXX XXXX', action: () => {} },
    { icon: MapPin, label: 'Location', value: 'Jakarta, Indonesia', action: () => {} },
    { icon: Calendar, label: 'Availability', value: 'Open to opportunities', action: () => {} },
  ]

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return
    
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="h-full bg-gradient-to-br from-slate-900 to-slate-800 p-6 overflow-auto">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-3">Get In Touch</h1>
          <p className="text-white/60 text-lg">Have a project in mind? Let's create something amazing together.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left Column - Info */}
          <div className="md:col-span-2 space-y-6">
            {/* Profile Card */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 mb-4">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-3xl font-bold text-white">
                    AN
                  </div>
                </div>
                <h2 className="text-xl font-bold text-white mb-1">Antono</h2>
                <p className="text-blue-400 text-sm mb-4">Full Stack Developer</p>
                
                {/* Quick Info */}
                <div className="w-full space-y-3">
                  {quickActions.map((item, index) => (
                    <button
                      key={index}
                      onClick={item.action}
                      className="w-full flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <item.icon size={18} className="text-blue-400" />
                      </div>
                      <div className="text-left">
                        <p className="text-white/40 text-xs">{item.label}</p>
                        <p className="text-white text-sm group-hover:text-blue-400 transition-colors">{item.value}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-4">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 p-3 rounded-xl ${link.bg} text-white transition-all hover:scale-105 hover:shadow-lg`}
                    >
                      <Icon size={18} />
                      <span className="text-sm font-medium">{link.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-2xl p-6 border border-green-500/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400 font-medium">Usually responds within 24 hours</span>
              </div>
              <p className="text-white/60 text-sm">I'm always excited to hear about new projects and opportunities!</p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="md:col-span-3">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 h-full">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6 animate-bounce">
                    <CheckCircle size={40} className="text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/60 mb-6 max-w-sm">Thanks for reaching out. I'll get back to you as soon as possible.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
                    <p className="text-white/60">Fill out the form below and I'll get back to you shortly.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/60 text-sm mb-2 font-medium">Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors`}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2 font-medium">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/60 text-sm mb-2 font-medium">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-white/60 text-sm mb-2 font-medium">Message *</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className={`w-full px-4 py-3 bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors resize-none`}
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <SendHorizonal size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
