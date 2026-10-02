import { useState, useEffect } from 'react'
import { profile } from '../data/portfolioData'
import { CloseIcon, ArrowRightIcon, MailIcon } from './Icons'

function MinimizeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...props}>
      <path d="M5 12h14" />
    </svg>
  )
}

export default function ComposeModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'Opportunity for Deep Vadhadiya',
    message:
      'Hi Deep,\n\nI came across your portfolio and would love to connect regarding a potential opportunity.\n\nLooking forward to hearing from you!\n\nBest regards,',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [minimized, setMinimized] = useState(false)

  // Pre-fill name & email from localStorage when modal opens
  useEffect(() => {
    if (open) {
      const savedName = localStorage.getItem('compose_name') || ''
      const savedEmail = localStorage.getItem('compose_email') || ''
      setForm((prev) => ({
        ...prev,
        name: savedName,
        email: savedEmail,
      }))
      setStatus('idle')
      setMinimized(false)
    }
  }, [open])

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _subject: form.subject,
          message: form.message,
          _captcha: false,
        }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        // Save name & email to localStorage for next time
        localStorage.setItem('compose_name', form.name)
        localStorage.setItem('compose_email', form.email)
        setStatus('success')
        setTimeout(() => { setStatus('idle'); onClose() }, 2500)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (!open) return null

  return (
    <>
      {/* Backdrop — only shown when modal is expanded */}
      {!minimized && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px]"
          onClick={onClose}
        />
      )}

      {/* Compose window — bottom-right, Gmail-style */}
      <div
        className={`fixed bottom-0 right-6 z-50 w-[26rem] rounded-t-xl shadow-2xl border border-ink-border/30 bg-ink-950 flex flex-col transition-all duration-300 ${
          minimized ? 'h-12' : 'h-[32rem]'
        }`}
        style={{ boxShadow: '0 -4px 40px rgba(79,227,194,0.08), 0 20px 60px rgba(0,0,0,0.6)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div
          className="flex items-center justify-between px-4 py-3 bg-ink-800 rounded-t-xl cursor-pointer select-none"
          onClick={() => setMinimized((m) => !m)}
        >
          <div className="flex items-center gap-2">
            <MailIcon width={14} height={14} className="text-mint-400" />
            <span className="font-mono text-xs text-paper-200 font-semibold tracking-wide">
              New Message
            </span>
          </div>
          <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setMinimized((m) => !m)}
              className="text-paper-400 hover:text-paper-100 transition-colors p-0.5"
              aria-label="Minimize"
            >
              <MinimizeIcon />
            </button>
            <button
              onClick={onClose}
              className="text-paper-400 hover:text-red-400 transition-colors p-0.5"
              aria-label="Close"
            >
              <CloseIcon width={16} height={16} />
            </button>
          </div>
        </div>

        {/* Body */}
        {!minimized && (
          <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
            {/* To field */}
            <div className="flex items-center gap-3 px-4 py-2 border-b border-ink-border/20">
              <span className="font-mono text-[11px] text-paper-500 w-12 shrink-0">To</span>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="flex-1 bg-transparent text-sm text-paper-100 placeholder:text-paper-600 outline-none"
              />
            </div>

            {/* From (display only) */}
            <div className="flex items-center gap-3 px-4 py-2 border-b border-ink-border/20">
              <span className="font-mono text-[11px] text-paper-500 w-12 shrink-0">From</span>
              <span className="text-sm text-paper-400 font-mono">{profile.email}</span>
            </div>

            {/* Subject */}
            <div className="flex items-center gap-3 px-4 py-2 border-b border-ink-border/20">
              <span className="font-mono text-[11px] text-paper-500 w-12 shrink-0">Subject</span>
              <input
                required
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="flex-1 bg-transparent text-sm text-paper-100 placeholder:text-paper-600 outline-none"
              />
            </div>

            {/* Name */}
            <div className="flex items-center gap-3 px-4 py-2 border-b border-ink-border/20">
              <span className="font-mono text-[11px] text-paper-500 w-12 shrink-0">Name</span>
              <input
                required
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="flex-1 bg-transparent text-sm text-paper-100 placeholder:text-paper-600 outline-none"
              />
            </div>

            {/* Message body */}
            <textarea
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              className="flex-1 px-4 py-3 bg-transparent text-sm text-paper-200 leading-relaxed outline-none resize-none placeholder:text-paper-600"
              placeholder="Write your message…"
            />

            {/* Status banners */}
            {status === 'success' && (
              <div className="mx-4 mb-2 px-3 py-2 rounded-lg bg-mint-500/10 border border-mint-500/30 text-mint-400 text-xs font-mono">
                ✓ Message sent! I'll reply within 24 hrs.
              </div>
            )}
            {status === 'error' && (
              <div className="mx-4 mb-2 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
                ✗ Failed to send. Try again.
              </div>
            )}

            {/* Footer toolbar */}
            <div className="flex items-center gap-3 px-4 py-3 border-t border-ink-border/20 bg-ink-900/50">
              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className="inline-flex items-center gap-2 rounded-full bg-mint-500 text-ink-950 font-semibold px-5 py-2 text-xs shadow-glow hover:bg-mint-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending…' : status === 'success' ? 'Sent ✓' : 'Send'}
                {status !== 'sending' && status !== 'success' && (
                  <ArrowRightIcon width={13} height={13} />
                )}
              </button>
              <span className="text-[10px] text-paper-600 font-mono">Press Esc to close</span>
            </div>
          </form>
        )}
      </div>
    </>
  )
}
