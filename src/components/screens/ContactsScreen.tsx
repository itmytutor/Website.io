import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, GraduationCap, Loader2, AlertCircle } from 'lucide-react';

const GOOGLE_SCRIPT_DEPLOYMENT_ID = 'AKfycbzYVgnZUaduCm6Wwhjmx9fL0ak5nJOd5kazIM6ilMBiVLUUAre_bgZXA_gg9MY3rWI7';
const GOOGLE_SCRIPT_URL = `https://script.google.com/macros/s/${GOOGLE_SCRIPT_DEPLOYMENT_ID}/exec`;

interface ContactsScreenProps {
  onExplorePrograms?: () => void;
}

export const ContactsScreen: React.FC<ContactsScreenProps> = ({}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childName: '',
    topic: 'Sped ( Special Education )',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [lastSubmission, setLastSubmission] = useState<{
    'Parent / Guardian Full Name': string;
    'Mobile / Phone Number': string;
    'Email Address': string;
    'Student Name': string;
    'Program of Interest': string;
    'How Can We Best Help Your Child': string;
    timestamp: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const now = new Date();
    const formattedDate = now.toLocaleString('en-PH', {
      timeZone: 'Asia/Manila',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const receivedRecord = {
      'Parent / Guardian Full Name': formData.name.trim(),
      'Mobile / Phone Number': formData.phone.trim(),
      'Email Address': formData.email.trim(),
      'Student Name': formData.childName.trim() || 'N/A',
      'Program of Interest': formData.topic,
      'How Can We Best Help Your Child': formData.message.trim(),
      timestamp: formattedDate,
    };

    const formParams = new URLSearchParams();
    // Primary headers matching Form Receiver CSV
    formParams.append('Parent / Guardian Full Name', receivedRecord['Parent / Guardian Full Name']);
    formParams.append('Mobile / Phone Number', receivedRecord['Mobile / Phone Number']);
    formParams.append('Email Address', receivedRecord['Email Address']);
    formParams.append('Student Name', receivedRecord['Student Name']);
    formParams.append('Program of Interest', receivedRecord['Program of Interest']);
    formParams.append('How Can We Best Help Your Child', receivedRecord['How Can We Best Help Your Child']);

    // Fallback/standard aliases
    formParams.append('How Can We Best Help Your Child?', receivedRecord['How Can We Best Help Your Child']);
    formParams.append('name', receivedRecord['Parent / Guardian Full Name']);
    formParams.append('phone', receivedRecord['Mobile / Phone Number']);
    formParams.append('email', receivedRecord['Email Address']);
    formParams.append('childName', receivedRecord['Student Name']);
    formParams.append('studentName', receivedRecord['Student Name']);
    formParams.append('topic', receivedRecord['Program of Interest']);
    formParams.append('program', receivedRecord['Program of Interest']);
    formParams.append('message', receivedRecord['How Can We Best Help Your Child']);
    formParams.append('timestamp', formattedDate);
    formParams.append('Timestamp', formattedDate);
    formParams.append('date', formattedDate);
    formParams.append('formData', JSON.stringify(receivedRecord));

    try {
      // Submitting via no-cors mode to allow Google Apps Script web app redirect without CORS blockage
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: formParams.toString(),
      });

      setLastSubmission(receivedRecord);
      setSubmitted(true);
    } catch (err: unknown) {
      console.error('Error submitting form to Google Sheets:', err);
      setSubmitError('Unable to submit inquiry at this moment. Please check your network connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white flex flex-col font-sans">
      {/* Banner */}
      <section className="bg-[#ebeceb] border-b border-gray-300 text-[#35363a] px-6 lg:px-12 py-9">
        <span className="text-[10px] uppercase font-condensed tracking-wider font-bold text-gray-500 block mb-1">
          Admissions, Consultations & Inquiries
        </span>
        <h1 className="font-condensed text-3xl lg:text-4xl font-bold tracking-tight text-[#222326]">
          CONTACT <span className="lowercase">mytutorph</span>
        </h1>
        <p className="mt-2 text-xs lg:text-sm text-gray-600 max-w-xl font-body leading-relaxed">
          Connect directly with our educational coordinators to discuss your child’s unique needs, request learning assessments, or arrange 1-on-1 tutoring sessions.
        </p>
      </section>

      <div className="p-6 lg:p-10 space-y-10">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="border border-gray-200 p-5 bg-[#fbfbfb] shadow-xs">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-[#35363a] flex items-center justify-center mb-3">
              <Phone className="w-4 h-4 text-[#2b5da6]" />
            </div>
            <h3 className="font-condensed text-base font-bold text-[#35363a] uppercase mb-1">
              Admissions Hotline
            </h3>
            <p className="text-xs text-gray-500 mb-2">Speak directly with a coordinator</p>
            <a
              href="tel:+639159937065"
              className="font-condensed text-lg font-bold text-[#2b5da6] hover:text-[#1c3f73] block"
            >
              +63 915 993 7065
            </a>
            <span className="text-[10px] text-gray-400 mt-1 block">
              Mon - Fri: 8:00 AM - 5:00 PM
            </span>
          </div>

          <div className="border border-gray-200 p-5 bg-[#fbfbfb] shadow-xs">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-[#35363a] flex items-center justify-center mb-3">
              <Mail className="w-4 h-4 text-[#2b5da6]" />
            </div>
            <h3 className="font-condensed text-base font-bold text-[#35363a] uppercase mb-1">
              Email Coordination
            </h3>
            <p className="text-xs text-gray-500 mb-2">Typically answered within 3 business hours</p>
            <div className="space-y-1 text-xs">
              <div>
                <span className="text-[10px] text-gray-400 block">Email:</span>
                <a
                  href="mailto:admin@mytutorph.com"
                  className="font-semibold text-gray-700 hover:text-[#2b5da6]"
                >
                  admin@mytutorph.com
                </a>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 p-5 bg-[#fbfbfb] shadow-xs">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-[#35363a] flex items-center justify-center mb-3">
              <MapPin className="w-4 h-4 text-[#2b5da6]" />
            </div>
            <h3 className="font-condensed text-base font-bold text-[#35363a] uppercase mb-1">
              Learning Center Hub
            </h3>
            <p className="text-xs text-gray-500 mb-2">Main Office</p>
            <address className="not-italic text-xs text-gray-700 space-y-0.5">
              <p className="font-semibold">MyTutorPH Learning Center</p>
              <p>2/F Lucky Plaza Bldg., Burgos St.,</p>
              <p>La Paz, Iloilo City</p>
            </address>
          </div>
        </div>

        {/* Online Contact Message Form */}
        <section id="inquiry-form" className="border border-gray-200 bg-white p-6 scroll-mt-20 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="w-5 h-5 text-[#2b5da6]" />
            <h2 className="font-condensed text-2xl font-bold text-[#35363a] uppercase">
              Send an Inquiry or Book an Assessment
            </h2>
          </div>
          <p className="text-xs text-gray-500 mb-6">
            Tell us about your learner and how we can best support their growth:
          </p>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 p-6 text-emerald-950 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-emerald-200/60 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-condensed text-xl font-bold uppercase text-emerald-900 leading-tight">
                      Inquiry Successfully Received!
                    </h4>
                    <p className="text-[11px] text-emerald-700">
                      Form data recorded and transmitted to Google Spreadsheet receiver.
                    </p>
                  </div>
                </div>
                <div className="text-[10px] font-mono bg-emerald-100/70 border border-emerald-200 px-2 py-1 rounded-xs text-emerald-800 self-start sm:self-auto">
                  {lastSubmission?.timestamp || 'Just now'}
                </div>
              </div>

              {/* Data Received Card (Matching Form Receiver CSV fields) */}
              <div className="bg-white border border-emerald-200/80 rounded-xs p-4 shadow-2xs">
                <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2">
                  <span className="text-[10px] uppercase font-condensed tracking-wider font-bold text-gray-500">
                    Data Received (Form Receiver Record)
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Transmitted
                  </span>
                </div>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-xs">
                  <div>
                    <dt className="text-[10px] font-condensed uppercase font-bold text-gray-500">
                      Parent / Guardian Full Name
                    </dt>
                    <dd className="font-semibold text-gray-900 mt-0.5">
                      {lastSubmission?.['Parent / Guardian Full Name'] || formData.name}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-[10px] font-condensed uppercase font-bold text-gray-500">
                      Mobile / Phone Number
                    </dt>
                    <dd className="font-semibold text-gray-900 mt-0.5">
                      {lastSubmission?.['Mobile / Phone Number'] || formData.phone}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-[10px] font-condensed uppercase font-bold text-gray-500">
                      Email Address
                    </dt>
                    <dd className="font-semibold text-gray-900 mt-0.5">
                      {lastSubmission?.['Email Address'] || formData.email}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-[10px] font-condensed uppercase font-bold text-gray-500">
                      Student Name
                    </dt>
                    <dd className="font-semibold text-gray-900 mt-0.5">
                      {lastSubmission?.['Student Name'] || formData.childName || 'N/A'}
                    </dd>
                  </div>

                  <div className="sm:col-span-2">
                    <dt className="text-[10px] font-condensed uppercase font-bold text-gray-500">
                      Program of Interest
                    </dt>
                    <dd className="font-semibold text-gray-900 mt-0.5">
                      {lastSubmission?.['Program of Interest'] || formData.topic}
                    </dd>
                  </div>

                  <div className="sm:col-span-2">
                    <dt className="text-[10px] font-condensed uppercase font-bold text-gray-500">
                      How Can We Best Help Your Child
                    </dt>
                    <dd className="text-gray-800 bg-gray-50 p-2.5 rounded-xs border border-gray-200 text-xs mt-1 whitespace-pre-wrap leading-relaxed">
                      {lastSubmission?.['How Can We Best Help Your Child'] || formData.message}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <p className="text-[11px] text-emerald-800 text-center sm:text-left">
                  Our coordinator will contact you at <strong>{lastSubmission?.['Email Address'] || formData.email}</strong> or <strong>{lastSubmission?.['Mobile / Phone Number'] || formData.phone}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setSubmitError(null);
                    setLastSubmission(null);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      childName: '',
                      topic: 'Sped ( Special Education )',
                      message: '',
                    });
                  }}
                  className="gray-btn text-xs font-condensed uppercase px-4 py-2 font-bold cursor-pointer shrink-0"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {submitError && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-xs p-3 rounded-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">{submitError}</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-condensed uppercase font-bold text-gray-600 block mb-1">
                    Parent / Guardian Full Name *
                  </label>
                  <input
                    type="text"
                    name="Parent / Guardian Full Name"
                    required
                    disabled={isSubmitting}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maria Santos"
                    className="w-full text-xs p-2 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-[#2b5da6] disabled:bg-gray-100 disabled:text-gray-400"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-condensed uppercase font-bold text-gray-600 block mb-1">
                    Mobile / Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="Mobile / Phone Number"
                    required
                    disabled={isSubmitting}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0917-123-4567"
                    className="w-full text-xs p-2 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-[#2b5da6] disabled:bg-gray-100 disabled:text-gray-400"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-condensed uppercase font-bold text-gray-600 block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="Email Address"
                    required
                    disabled={isSubmitting}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. maria.santos@example.com"
                    className="w-full text-xs p-2 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-[#2b5da6] disabled:bg-gray-100 disabled:text-gray-400"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-condensed uppercase font-bold text-gray-600 block mb-1">
                    Student Name
                  </label>
                  <input
                    type="text"
                    name="Student Name"
                    disabled={isSubmitting}
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    placeholder="e.g. Lucas Santos"
                    className="w-full text-xs p-2 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-[#2b5da6] disabled:bg-gray-100 disabled:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-condensed uppercase font-bold text-gray-600 block mb-1">
                  Program of Interest
                </label>
                <select
                  name="Program of Interest"
                  disabled={isSubmitting}
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full text-xs p-2 bg-white border border-gray-300 rounded-none font-condensed disabled:bg-gray-100 disabled:text-gray-400"
                >
                  <option value="Sped ( Special Education )">Sped ( Special Education )</option>
                  <option value="ECE (Early Childhood Education)">ECE (Early Childhood Education)</option>
                  <option value="Tutorials ( Individual Tutorials )">Tutorials ( Individual Tutorials )</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-condensed uppercase font-bold text-gray-600 block mb-1">
                  How Can We Best Help Your Child *
                </label>
                <textarea
                  name="How Can We Best Help Your Child"
                  required
                  rows={4}
                  disabled={isSubmitting}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your child's current challenges, favorite subjects, learning pacing, or schedule preferences..."
                  className="w-full text-xs p-2.5 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-[#2b5da6] disabled:bg-gray-100 disabled:text-gray-400"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[10px] text-gray-400">
                  Your family&apos;s privacy is strictly protected.
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#2b5da6] hover:bg-[#224d8b] disabled:bg-[#85a4d1] disabled:cursor-not-allowed text-white font-condensed text-xs uppercase font-bold px-6 py-2.5 rounded-xs flex items-center gap-1.5 cursor-pointer shadow-sm transition"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </section>
      </div>
    </div>
  );
};
