import React from "react";

const Contact = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thanks for submitting!");
  };

  return (
    <div className="home" style={{margin:15}}>
      <p>info@arunimacollection.com</p>
      <p className="lead">123-456-7890</p>
     
      <p>498 Dwarka Sec-21 New Delhi</p>
      <p className="lead">India</p>
      <hr></hr>
      <br></br>
      <br></br>

      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} method="POST">
            <div className="mb-3">
              <label for="exampleForm" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                className="fullName"
                class="form-control"
                id="exampleForm"
                placeholder="Arunima Prajapati"
              />
            </div>
            <div className="mb-3">
              <label for="exampleForm" className="form-label">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="email form-control"
                placeholder="arunimacollection@gmail.com"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                name="message"
                rows="3"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-dark btn-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
