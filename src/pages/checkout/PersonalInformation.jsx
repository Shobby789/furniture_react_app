import "./CheckoutDetails.css";

export default function PersonalInformation({ formDetail, setFormDetail }) {
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormDetail((values) => ({ ...values, [name]: value }));
  };
  return (
    <div className="pt-5">
      <div className="container fluid py-2 text-center">
        <form className="informationForm m-3 py-5 px-3 mx-auto bg-white rounded">
          <h3 className="text-center mb-5 fw-semibold">Personal Information</h3>
          <div className="row mb-3">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <label
                for="exampleInputEmail1"
                className="form-label float-start ms-1"
              >
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="form-control w-100 p-2 border-1 outline-none rounded"
                name="firstName"
                value={formDetail.firstName}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 lastName">
              <label
                for="exampleInputEmail1"
                className="form-label float-start ms-1"
              >
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="form-control p-2 border-1 outline-none rounded"
                name="lastName"
                value={formDetail.lastName}
                onChange={handleOnChange}
                required
              />
            </div>
          </div>

          {/* Address */}
          <div className="w-100 mb-3 px-3">
            <label
              for="exampleInputEmail1"
              className="form-label float-start ms-1"
            >
              Address
            </label>
            <input
              type="text"
              placeholder="Enter Your Complete Address"
              className="form-control w-100 p-2 border-1 outline-none rounded"
              name="address"
              value={formDetail.address}
              onChange={handleOnChange}
              required
            />
          </div>

          {/* City & State */}
          <div className="row mb-3 w-100">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <label
                for="exampleInputEmail1"
                className="form-label float-start"
              >
                City
              </label>
              <select
                className="form-select border-1"
                aria-label="Default select example"
                name="city"
                value={formDetail.city}
                onChange={handleOnChange}
                required
              >
                <option selected>Karachi</option>
                <option value="1">Hyderabad</option>
                <option value="2">Islamabad</option>
                <option value="3">Lahore</option>
              </select>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <label
                for="exampleInputEmail1"
                className="form-label float-start"
              >
                State
              </label>
              <select
                className="form-select border-1"
                aria-label="Default select example"
                name="state"
                value={formDetail.state}
                onChange={handleOnChange}
                required
              >
                <option selected>Sindh</option>
                <option value="1">Punjab</option>
                <option value="2">Balochistan</option>
                <option value="3">KPK</option>
              </select>
            </div>
          </div>

          {/* Email & Phone */}
          <div className="row w-100 mb-3">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <label
                for="exampleInputEmail1"
                className="form-label float-start"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                className="form-control border-1 rounded p-2 w-100"
                value={formDetail.email}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <label
                for="exampleInputEmail1"
                className="form-label float-start"
              >
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Phone no."
                className="form-control border-1 rounded p-2 w-100"
                name="phoneNumber"
                value={formDetail.phoneNumber}
                onChange={handleOnChange}
                required
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
