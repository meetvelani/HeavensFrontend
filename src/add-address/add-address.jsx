import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./add-address.scss";
// import { Link } from "react-router-dom";
import { Country, State, City } from 'country-state-city';
import { addAddress } from "../apiCalls";
import { toast } from "react-toastify";
import { useStateValue } from "../StateProvider";



function AddAddress() {
  const [, dispatch] = useStateValue();

  const [selectedCountryCode, setSelectedCountryCode] = useState();
  // const [selectedStateCode, setSelectedStateCode] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const activeCountry = (countryCode) => {
    setSelectedCountryCode(countryCode)
    setStates(State.getStatesOfCountry(countryCode))
  }
  const activeState = (stateCode) => {
    console.log(City.getCitiesOfState(selectedCountryCode, stateCode))
    setCities(City.getCitiesOfState(selectedCountryCode, stateCode))
  }



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    dispatch({
      type: "SET_LOADER_STATUS",
      status: true,
    })

    data.token = sessionStorage.getItem("token") || ""
    console.log(data);
    const re = await addAddress(data);
    if (re.status[0].Message === "Successfully Address Added.") {
      toast.success(re.status[0].Message)
      window.history.back()

    }
    else if (re.status[0].Message === "Invalid Token.") {
      toast.warning("Please Login.")

    }

    else {
      toast.error(re.status[0].Message)
    }
    dispatch({
      type: "SET_LOADER_STATUS",
      status: false,
    })
  };
  useEffect(() => {
    setCountries(Country.getAllCountries())

  }, [])
  return (
    <div>
      <div className="container-add-address">
        <div className="heading">
          <h1>Add a delivery address</h1>
          <hr className="line-yellow" />
        </div>
        <div className="form-add-address">
          <form className="ui-form-ad" onSubmit={handleSubmit(onSubmit)}>
            <div className="each-form-field">
              <label>
                Name.
                <span className="text-danger">*</span>
              </label>
              <input
                placeholder="Enter the name"
                type="text"
                {...register("fullName", { required: true })}
              />

              {errors.fullName && <p>Please check the Name</p>}
            </div>
            <div className="each-form-field">
              <label>
                mobile number.
                <span className="text-danger">*</span>
              </label>
              <input
                placeholder="Enter the  mobile number"
                type="text"
                {...register("phoneNumber", { required: true, pattern: /^[6-9]\d{9}$/i, })}
              />

              {errors.phoneNumber && <p>Please check the mobile number</p>}
            </div>

            <div className="each-form-field">
              <label>
                Enter the address Flat, House no.
                <span className="text-danger">*</span>
              </label>
              <input
                placeholder="Enter the address"
                type="text"
                {...register("houseNumber", { required: true })}
              />

              {errors.houseNumber && <p>Please check the address</p>}
            </div>
            <div className="each-form-field">
              <label>
                Area, Street,<span className="text-danger">*</span>
              </label>
              <input
                placeholder="Enter Area, Street"
                type="text"
                {...register("area", { required: true })}
              />

              {errors.area && <p>Please check the Area, Street</p>}
            </div>
            <div className="each-form-field">
              <label>
                Landmark<span className="text-danger">*</span>
              </label>
              <input
                placeholder="Landmark"
                type="text"
                {...register("landmark", { required: true })}
              />

              {errors.landmark && <p>Please check the Landmark</p>}
            </div>
            <div className="each-form-field">
              <label>
                PinCode<span className="text-danger">*</span>
              </label>
              <input
                placeholder="pincode"
                type="text"
                {...register("pinCode", { required: true, pattern: /^[0-9]\d{5}$/i, })}
              />

              {errors.pinCode && <p>Please check the pinCode</p>}
            </div>
            {/* ************************************************************* */}

            <div id="container">
              <div className="each-form-field">
                <label>
                  Country<span className="text-danger">*</span>
                </label>
                <select
                  // {...register("country")}
                  defaultValue=""

                  {...register("country", { required: true })}
                  onChange={(e) => activeCountry(e.target.selectedOptions[0].id)}
                >
                  <option value="" disabled >--Choose Country--</option>
                  {countries.map((value, key) => {
                    return (
                      <option value={value.name} id={value.isoCode} key={value.isoCode}>
                        {value.name}
                      </option>
                    );
                  })}
                </select>
                {errors.country && <p>Please check the Country</p>}

              </div>

              <div className="each-form-field">
                <label>
                  State<span className="text-danger">*</span>
                </label>
                <select
                  // {...register("state")}
                  {...register("state", { required: true })}
                  defaultValue=""
                  onChange={(e) => activeState(e.target.selectedOptions[0].id)}
                >
                  <option value="" disabled >--Choose State--</option>
                  {states.map((e, key) => {
                    return (
                      <option value={e.name} id={e.isoCode} key={key}>
                        {e.name}
                      </option>
                    );
                  })}
                </select>
                {errors.country && <p>Please check the State</p>}

              </div>

              <div className="each-form-field">
                <label>
                  City<span className="text-danger">*</span>
                </label>
                <select
                  value={selectedCity}
                  // {...register("city")}
                  {...register("city", { required: true })}
                  defaultValue=""
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option value="" disabled>--Choose City--</option>
                  {cities.map((e, key) => {
                    return (
                      <option value={e.name} key={key}>
                        {e.name}
                      </option>
                    );
                  })}
                </select>
                {errors.city && <p>Please check the City</p>}

              </div>
            </div>

            {/* ************************************************************* */}
            {/* <Link to="/checkout"> */}
            <button className="save-address" type="submit">
              Save Address
            </button>
            {/* </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddAddress;
