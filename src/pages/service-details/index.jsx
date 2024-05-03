import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
  const service = useLoaderData();

  return (
    <div className="container mx-auto">
      <h1>Service Details: {service?.title}</h1>
      <Link to={`/checkout/${service?._id}`}>
        <button className="btn btn-primary"> Checkout </button>
      </Link>
    </div>
  );
};

export default ServiceDetails;
