import { useState } from 'react'
import { contact, profile } from '../data/portfolioData'
import { ArrowRightIcon, MailIcon, PhoneIcon, LocationIcon } from './Icons'
import useReveal from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${profile.email}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
            _subject: 'New Inquiry for Backend Engineer - Deep Vadhadiya',
            _captcha: true,
          }),
        }
      )

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitted(true)
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 6000)
      } else {
        setError('Failed to send message. Please try again or reach out directly via email.')
      }
    } catch (err) {
      setError('Error sending message. Please reach out directly to deepvadhadiya@gmail.com.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 relative">
      <div className="container-px">
        <div ref={ref} className="reveal grid lg:grid-cols-[0.9fr,1.1fr] gap-14 lg:gap-16 items-start">
          {/* Left Copy & Info Cards */}
          <div>
            <p className="eyebrow mb-4">Initiate Connection</p>
            <h2 className="section-heading text-white">{contact.heading}</h2>
            <p className="section-sub text-slate-300/90">{contact.sub}</p>

            <div className="mt-10 space-y-3.5">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-md hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-300 group"
              >
                <span className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <MailIcon />
                </span>
                <div>
                  <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">// Direct Email</p>
                  <p className="text-white font-medium text-sm mt-0.5 group-hover:text-cyan-300 transition-colors">
                    {profile.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-md hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-300 group"
              >
                <span className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <PhoneIcon />
                </span>
                <div>
                  <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">// Phone &amp; WhatsApp</p>
                  <p className="text-white font-medium text-sm mt-0.5 group-hover:text-indigo-300 transition-colors">
                    {profile.phone}
                  </p>
                </div>
              </a>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(profile.location)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-md hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-300 group"
              >
                <span className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                  <LocationIcon />
                </span>
                <div>
                  <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">// Location</p>
                  <p className="text-white font-medium text-sm mt-0.5 group-hover:text-sky-300 transition-colors">
                    {profile.location}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="card p-7 sm:p-9 space-y-5 border-slate-800 bg-slate-900/70 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500" />

            {submitted && (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-sm font-medium flex items-center gap-2">
                <span>✓</span>
                <span>Thank you! Your message was transmitted directly to Deep's inbox.</span>
              </div>
            )}
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="font-mono text-xs text-slate-400 uppercase tracking-wider font-medium">
                  Your Name
                </label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Morgan"
                  className="mt-2 w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all text-sm"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-slate-400 uppercase tracking-wider font-medium">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="alex@company.com"
                  className="mt-2 w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all text-sm"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-slate-400 uppercase tracking-wider font-medium">
                  Project or Engineering Role Inquiry
                </label>
                <textarea
                  required
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your backend requirements, API needs, or engineering opportunity..."
                  className="mt-2 w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all text-sm resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 text-white font-semibold px-6 py-3.5 text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-60 cursor-pointer"
            >
              {loading ? 'Transmitting...' : 'Send Message'} <ArrowRightIcon width={16} height={16} />
            </button>

            <p className="text-[11px] font-mono text-slate-500 text-center">
              Transmitted directly to deepvadhadiya@gmail.com · Typical response within 24h
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
