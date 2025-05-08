import React from 'react';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Høy kvalitet',
      description: 'Vi bruker kun materialer av høyeste kvalitet og arbeider etter gjeldende standarder.',
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Erfarne fagfolk',
      description: 'Våre rørleggere har solid faglig bakgrunn og bred erfaring fra ulike typer prosjekter.',
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: 'Rask service',
      description: 'Vi stiller raskt opp ved akutte problemer og holder alltid tidsfrister.',
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-blue-600" />,
      title: 'Fornøyd-garanti',
      description: 'Vi er ikke fornøyde før du er fornøyd, og jobber til resultatet er perfekt.',
    },
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Om RørEkspert AS</h2>
          <p className="text-lg text-gray-600">
            RørEkspert AS har over 20 års samlet erfaring innen rørlegging og VVS. 
            Vi er et team av dedikerte fagfolk som brenner for å levere gode løsninger 
            til våre kunder. Vårt mål er å skape langvarige relasjoner gjennom pålitelig 
            service og kvalitetsarbeid.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-md h-80">
            <img
              src="https://images.pexels.com/photos/8486932/pexels-photo-8486932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Rørlegger i arbeid"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Vi tar på oss alle typer oppdrag</h3>
            <p className="text-gray-600 mb-6">
              Fra små reparasjoner til komplette bad- og kjøkkenrenoveringer. Vi har 
              kompetansen og utstyret som kreves for å løse alle rørleggeroppdrag, 
              uansett størrelse og kompleksitet.
            </p>
            <ul className="space-y-2">
              {['Nybygg og rehabilitering', 'Akutte rørleggertjenester', 'Forebyggende vedlikehold', 'VVS-rådgivning'].map((item) => (
                <li key={item} className="flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="card hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;