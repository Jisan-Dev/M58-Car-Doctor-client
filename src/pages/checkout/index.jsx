import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const bookingInfo = {
      customerName: name,
      date: date,
      email: email,
      serviceId: service?._id,
      serviceName: service?.title,
      price: service?.price,
    };
    console.log(bookingInfo);
  };
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-3xl">Book Service: {service?.title} </h2>
      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due amount</span>
            </label>
            <input type="text" defaultValue={'$' + service?.price} className="input input-bordered" />
          </div>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
        </div>
      </form>
      <div className="card-body"></div>
    </div>
  );
};

export default CheckOut;
