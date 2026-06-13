import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2 } from 'lucide-react';

export function ContactForm() {
  const { t } = useTranslation();
  const { ref, isRevealed } = useScrollReveal(0.1);

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ firstName: '', lastName: '', email: '', message: '' });

      // Clear success alert after 5s
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-24 bg-cream text-charcoal transition-all duration-1000 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-earth bg-earth/10 px-3.5 py-1.5 rounded-full inline-block">
            {t('nav.contact')}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-forest">
            {t('contact.title')}
          </h2>
          <p className="text-charcoal/60 max-w-xl mx-auto font-body text-sm">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-cream-dark/40 space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-forest/5 text-forest rounded-2xl shrink-0">
                  <MapPin className="h-6 w-6 text-earth" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-semibold text-forest text-lg">
                    {t('contact.address')}
                  </h4>
                  <p className="text-sm font-body text-charcoal/70 leading-relaxed">
                    Ruko Gading Shopping Arcade, Blok B No. 8 BJ - BH Jalan Tanjung Duren RT.15 12, RT.5/RW.5, Tj. Duren Sel., Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-forest/5 text-forest rounded-2xl shrink-0">
                  <Mail className="h-6 w-6 text-earth" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-semibold text-forest text-lg">
                    {t('contact.emailLabel')}
                  </h4>
                  <p className="text-sm font-body text-charcoal/70">
                    info@nusaalamkomoditas.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-forest/5 text-forest rounded-2xl shrink-0">
                  <Phone className="h-6 w-6 text-earth" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-semibold text-forest text-lg">
                    {t('contact.phone')}
                  </h4>
                  <p className="text-sm font-body text-charcoal/70">
                    +62 817-671-2525
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-forest/5 text-forest rounded-2xl shrink-0">
                  <Clock className="h-6 w-6 text-earth" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-semibold text-forest text-lg">
                    {t('contact.hours')}
                  </h4>
                  <p className="text-sm font-body text-charcoal/70">
                    {t('contact.hoursVal')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 shadow-md border border-cream-dark/40 relative overflow-hidden">
              {submitSuccess && (
                <div className="mb-6 p-4 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-2xl flex items-center space-x-3 text-sm font-body animate-in fade-in duration-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>{t('contact.success')}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold font-body text-charcoal/60 uppercase">
                      {t('contact.firstName')}
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-cream/30 hover:bg-cream/50 focus:bg-white border-2 border-cream-dark/50 focus:border-earth rounded-xl px-4 py-3 font-body text-sm outline-none transition"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold font-body text-charcoal/60 uppercase">
                      {t('contact.lastName')}
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-cream/30 hover:bg-cream/50 focus:bg-white border-2 border-cream-dark/50 focus:border-earth rounded-xl px-4 py-3 font-body text-sm outline-none transition"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-xs font-bold font-body text-charcoal/60 uppercase">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-cream/30 hover:bg-cream/50 focus:bg-white border-2 border-cream-dark/50 focus:border-earth rounded-xl px-4 py-3 font-body text-sm outline-none transition"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-bold font-body text-charcoal/60 uppercase">
                    {t('contact.message')}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-cream/30 hover:bg-cream/50 focus:bg-white border-2 border-cream-dark/50 focus:border-earth rounded-xl px-4 py-3 font-body text-sm outline-none transition resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-earth hover:bg-earth-dark text-forest-dark font-body font-bold text-sm rounded-full shadow-lg hover:shadow-earth/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="h-5 w-5 border-2 border-forest-dark border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>{t('contact.send')}</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Map Embed Container */}
        <div className="rounded-3xl overflow-hidden shadow-lg border border-cream-dark/40 h-[400px]">
          <iframe
            title="Office Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6648508741728!2d106.78535448885495!3d-6.175602799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f65f18e54bd3%3A0x45f7db34da804907!2sFish%20%26%20Cheap!5e0!3m2!1sid!2sid!4v1781333088854!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>
      </div>
    </section>
  );
}
