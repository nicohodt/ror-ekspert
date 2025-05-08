import React, { useState } from 'react';
import { X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

const Gallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('alle');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Komplett badsanering',
      description: 'Totalrenovering av bad med nye rør, avløp og sanitærutstyr i en leilighet fra 90-tallet.',
      category: 'bad',
      image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      title: 'Kjøkkenoppgradering',
      description: 'Installasjon av nye vannrør og avløp i forbindelse med kjøkkenrenovering i enebolig.',
      category: 'kjøkken',
      image: 'https://images.pexels.com/photos/1454805/pexels-photo-1454805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      title: 'Varmepumpeinstallasjon',
      description: 'Installasjon av luft-til-vann varmepumpe med vannbåren gulvvarme i nybygget enebolig.',
      category: 'varme',
      image: 'https://images.pexels.com/photos/20046689/pexels-photo-20046689/free-photo-of-utstyr-oppvarming-innovativ-teknikk-alfa-innotec.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 4,
      title: 'Lekkasjereparasjon',
      description: 'Utbedring av skjult vannlekkasje i vegg med utskifting av skadede rør.',
      category: 'reparasjon',
      image: 'https://images.pexels.com/photos/8486966/pexels-photo-8486966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 5,
      title: 'Nytt badekar',
      description: 'Demontering av gammelt og installasjon av nytt badekar med moderne vannarmatur.',
      category: 'bad',
      image: 'https://images.pexels.com/photos/6588592/pexels-photo-6588592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 6,
      title: 'Rørfornying',
      description: 'Fornying av gamle avløpsrør ved bruk av strømpeteknikk i leilighetsbygg.',
      category: 'reparasjon',
      image: 'https://images.pexels.com/photos/2253900/pexels-photo-2253900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  const categories = ['alle', 'bad', 'kjøkken', 'varme', 'reparasjon'];

  const filteredProjects =
    activeCategory === 'alle'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="gallery" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Våre prosjekter</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Ta en titt på noen av våre nylig gjennomførte prosjekter. Hvert prosjekt er utført 
          med høy kvalitet og fokus på detaljer for å sikre langvarig funksjonalitet.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors capitalize`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card p-0 overflow-hidden cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 line-clamp-2">{project.description}</p>
                <div className="mt-4">
                  <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm capitalize">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto relative animate-fade-in">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-1/2">
                <h3 className="text-2xl font-bold mb-3">{selectedProject.title}</h3>
                <p className="text-gray-600 mb-4">{selectedProject.description}</p>
                <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm capitalize">
                  {selectedProject.category}
                </span>
                <div className="mt-6">
                  <h4 className="font-bold mb-2">Om prosjektet:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>Gjennomføringstid: 3 uker</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>Kvalitetssikret av fagansvarlig</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>Garanti: 5 år på arbeid og materialer</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <a
                    href="#contact"
                    className="btn btn-primary w-full text-center"
                    onClick={() => setSelectedProject(null)}
                  >
                    Kontakt oss for lignende prosjekt
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;