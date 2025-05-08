import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle the form submission here
    console.log('Form submitted:', formState);
    // Simulate a successful submission
    setIsSubmitted(true);
    // Reset form after submission
    setFormState({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: 'Telefon',
      details: ['(+47) 12 34 56 78', 'Mandag - Fredag: 07:00 - 16:00'],
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: 'E-post',
      details: ['kontakt@rorekspert.no', 'Svar innen 24 timer'],
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: 'Åpningstider',
      details: ['Mandag - Fredag: 07:00 - 16:00', 'Lørdag - Søndag: Stengt'],
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: 'Adresse',
      details: ['Rørleggergata 123', '0123 Oslo, Norge'],
    },
  ];

  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Kontakt oss</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Har du spørsmål eller ønsker et tilbud? Fyll ut skjemaet under, eller kontakt 
          oss direkte via telefon eller e-post. Vi svarer så raskt som mulig.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Send oss en melding</h3>
            {isSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded flex items-center mb-6">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Takk for din henvendelse! Vi tar kontakt med deg så snart som mulig.</span>
              </div>
            ) : null}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Navn
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    E-post
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Melding
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className="input resize-none"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full md:w-auto">
                Send melding
              </button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-blue-600 text-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-bold mb-8 text-white">Kontaktinformasjon</h3>
              <div className="space-y-8">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex">
                    <div className="bg-blue-500 rounded-full p-3 mr-4 h-min">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      {item.details.map((detail, index) => (
                        <p key={index} className="text-blue-100">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <h4 className="font-bold mb-4">Følg oss på sosiale medier</h4>
                <div className="flex space-x-4">
                  {['facebook', 'instagram', 'linkedin'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="bg-blue-500 hover:bg-blue-400 p-2 rounded-full inline-block transition-colors"
                    >
                      <span className="sr-only">{platform}</span>
                      <svg
                        className="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        {platform === 'facebook' && (
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        )}
                        {platform === 'instagram' && (
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        )}
                        {platform === 'linkedin' && (
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;