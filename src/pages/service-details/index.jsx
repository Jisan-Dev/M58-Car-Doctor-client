import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const [service, setService] = useState({});

  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        console.log(data);
      });
  }, [id]);

  return (
    <div>
      <h1>Service Details: {service?.title}</h1>
    </div>
  );
};

export default ServiceDetails;
