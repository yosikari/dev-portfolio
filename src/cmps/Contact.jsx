import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import '../styles/Contact.css'

function Contact() {
  const form = useRef()
  const [status, setStatus] = useState('idle')

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('loading')

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
    )
    .then((result) => {
        console.log('Success:', result.text)
        setStatus('success')
        
        if (form.current) {
            form.current.reset()
        }
        
        setTimeout(() => setStatus('idle'), 5000)
    })
    .catch((error) => {
        console.error('Error:', error.text)
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
    })
  }

  return (
    <section className="contact container" id="contact">
      <motion.div
        className="contact__wrapper"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="contact__info">
          <h2 className="section-title">Let's <span>Talk</span></h2>
          <p>Interested in working together? Drop me a message and I'll reply to your email directly.</p>
        </div>

        <form ref={form} className="contact__form" onSubmit={sendEmail}>
          <div className="form-group">

            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">

            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">

            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          
          <button 
            type="submit" 
            className={`btn-primary submit-btn ${status}`} 
            disabled={status === 'loading' || status === 'success'}
          >
            {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
          </button>

          {status === 'success' && <p className="status-msg success-msg">Message sent successfully!</p>}
          {status === 'error' && <p className="status-msg error-msg">Something went wrong. Please try again.</p>}
        </form>
      </motion.div>
    </section>
  )
}

export default Contact