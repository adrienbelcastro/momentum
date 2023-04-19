const SignUpForm = () => {
  return (
    <div className="details">
      <h2 className="details__subheader">Warehouse Details</h2>
      <form>
        <label className="details__container">
          <h6 className="details__form-title">Warehouse Name</h6>
          <input
            className="details__input"
            type="text"
            name="Warehouse Name"
            placeholder="Washington"
          />
        </label>
      </form>
      <form>
        <label className="details__container">
          <h6 className="details__form-title">Street Address</h6>
          <input
            className="details__input"
            type="text"
            name="Street Address"
            placeholder="33 Pearl Street SW"
          />
        </label>
      </form>
      <form>
        <label className="details__container">
          <h6 className="details__form-title">City</h6>
          <input
            className="details__input"
            type="text"
            name="City"
            placeholder="Washington"
          />
        </label>
      </form>
      <form>
        <label className="details__container">
          <h6 className="details__form-title">Country</h6>
          <input
            className="details__input"
            type="text"
            name="Country"
            placeholder="USA"
          />
        </label>
      </form>
    </div>
  );
};

export default SignUpForm;
