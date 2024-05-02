import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mt-32 font-inter">
      <div className="text-center">
        <h3 className="text-xl font-bold text-primary">Services</h3>
        <h2 className="text-neutral-900 text-[45px] font-bold">Our Service Area</h2>
        <p className="text-neutral-500 text-base font-normal max-w-[717px] capitalize mx-auto mb-10">
          the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.{' '}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
