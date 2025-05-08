import React from 'react';
import { Wrench, Droplet, Home, ShowerHead as Shower, WrenchIcon, AlertTriangle, PenTool, BookOpen } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Home className="h-12 w-12 text-blue-600" />,
      title: 'Rørlegging i nybygg',
      description: 'Komplett installasjon av rør- og avløpssystemer i nybygg, med fokus på kvalitet og fremtidsrettede løsninger.',
    },
    {
      icon: <Shower className="h-12 w-12 text-blue-600" />,
      title: 'Rehabilitering av bad og kjøkken',
      description: 'Modernisering og oppgradering av eksisterende rørinstallasjoner i bad og kjøkken, inkludert montering av nye sanitærutstyr.',
    },
    {
      icon: <AlertTriangle className="h-12 w-12 text-blue-600" />,
      title: 'Akutt rørleggerhjelp',
      description: 'Rask utrykning ved vannlekkasjer, tette rør eller andre akutte problemer, med tilgjengelighet 24/7.',
    },
    {
      icon: <Droplet className="h-12 w-12 text-blue-600" />,
      title: 'Vannlekkasjer og tette rør',
      description: 'Effektiv lokalisering og reparasjon av vannlekkasjer, samt åpning av tette rør og avløp med moderne utstyr.',
    },
    {
      icon: <WrenchIcon className="h-12 w-12 text-blue-600" />,
      title: 'VVS-vedlikehold',
      description: 'Regelmessig vedlikehold og serviceavtaler for VVS-anlegg til bedrifter og borettslag, for forebygging av problemer.',
    },
    {
      icon: <PenTool className="h-12 w-12 text-blue-600" />,
      title: 'VVS-rådgivning',
      description: 'Profesjonell rådgivning for valg av løsninger, materialer og systemer til både private og profesjonelle aktører.',
    },
    {
      icon: <Wrench className="h-12 w-12 text-blue-600" />,
      title: 'Montering av utstyr',
      description: 'Fagmessig montering av sanitærutstyr, varmtvannsberedere, varmepumper og andre VVS-produkter.',
    },
    {
      icon: <BookOpen className="h-12 w-12 text-blue-600" />,
      title: 'Inspeksjon og rapportering',
      description: 'Grundig inspeksjon av rørsystemer med kamera og utarbeidelse av tilstandsrapporter med anbefalte tiltak.',
    },
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Våre tjenester</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Vi tilbyr et bredt spekter av rørlegger- og VVS-tjenester for både private og 
          bedriftskunder. Med vår ekspertise og erfaring kan vi håndtere alle typer oppdrag, 
          store som små.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="card hover:shadow-lg hover:-translate-y-2 group h-full flex flex-col"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-auto">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="btn btn-primary">
            Få gratis befaring
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;