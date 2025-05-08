import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Din pålitelige partner for alle rørleggertjenester
          </h1>
          <p className="text-xl text-gray-100 mb-8 animate-fade-in">
            Profesjonell rørlegging og VVS-tjenester for både private og bedrifter. 
            Vi leverer kvalitet, pålitelighet og ekspertise i hvert eneste prosjekt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a href="#contact" className="btn btn-primary text-lg">
              Få gratis befaring
            </a>
            <a href="#services" className="btn btn-secondary bg-transparent text-white border-white hover:bg-white/10 text-lg">
              Se våre tjenester <ArrowRight className="inline-block ml-1 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default Hero;