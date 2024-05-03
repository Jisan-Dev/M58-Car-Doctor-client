import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
  const service = useLoaderData();
  return (
    <div>
      <h1>
        Checkout: <strong>{service?.title}</strong>{' '}
      </h1>
    </div>
  );
};

export default CheckOut;
