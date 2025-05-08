import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Anders Johansen',
      location: 'Oslo',
      text: 'RørEkspert AS hjalp oss med å renovere badet vårt. De leverte kvalitetsarbeid til avtalt tid og pris. Rørleggerne var profesjonelle og ryddige. Veldig fornøyd med resultatet!',
      rating: 5,
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      name: 'Kari Pedersen',
      location: 'Drammen',
      text: 'Da vi oppdaget en vannlekkasje i kjelleren, rykket RørEkspert AS ut raskt. De lokaliserte problemet og fikset det effektivt. God kommunikasjon underveis og rimelig pris. Anbefales!',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      name: 'Ola Nordmann',
      location: 'Bærum',
      text: 'Vi har brukt RørEkspert AS til flere prosjekter i huset vårt, og de leverer alltid topp kvalitet. Nylig installerte de et nytt kjøkken for oss, og vi er veldig fornøyde med arbeidet.',
      rating: 4,
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 4,
      name: 'Marte Hansen',
      location: 'Asker',
      text: 'RørEkspert AS hjalp oss med å installere en varmepumpe. De ga oss gode råd om hvilken modell som passet best for vårt hjem, og installasjonen gikk knirkefritt. Kan virkelig anbefale dem!',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <section id="testimonials" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Kundeuttalelser</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Hør hva våre kunder sier om tjenestene våre. Vi er stolte av å ha mange 
          fornøyde kunder som har delt sine erfaringer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card hover:shadow-lg group">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-600 text-white p-8 rounded-lg shadow-md inline-block max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">Tilfreds med tjenestene våre?</h3>
            <p className="mb-6">
              Vi setter stor pris på tilbakemeldinger fra våre kunder. Hvis du har brukt 
              tjenestene våre, vil vi gjerne høre om din erfaring.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-blue-50"
            >
              Del din erfaring
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;