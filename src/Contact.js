import React,{ useState } from "react";

const Contact = () => {

  const [data, setData] = useState({
    fullname:'',
    phone:'',
    email:'',
    msg:"",
  });

  const InputEvent = (event) => {
    const { name,value } =event.target;

    setData((preVal) =>{
       return{
         ...preVal,
         [name]: value,
       }
    })
  }

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Your Name : ${data.fullname}, Your Phone No. : ${data.phone}, Your Email : ${data.email}, Your Message : ${data.msg} `)

  };

  return (
    <>
    <form onSubmit={formSubmit} action="">
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                FullName
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="fullname"
                value={data.fullname}
                onChange={InputEvent}
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Phone
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              name="phone"
              value={data.phone}
              onChange={InputEvent}
              placeholder="Mobile Number"
              required
            />
          </div>
          <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            name="email"
            value={data.email}
            onChange={InputEvent}
            placeholder="name@example.com"
            required
          />
        </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                name="msg"
                value={data.msg}
                onChange={InputEvent}
                rows="3"
              ></textarea>
            </div>
            <div class="col-12">
            <button class="btn btn-get-started" type="submit">Submit form</button>
          </div>
          </div>
        </div>
      </div>
      </form>
    </>
  );
};

export default Contact;
