// import { Form, Button } from "react-bootstrap";
// import { useState } from "react";
// import emailjs from "@emailjs/browser";

export function Cart() {
  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [message, setMessage] = useState("");

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_xt4vs37",
  //       "template_4w0k96b",
  //       form.current,
  //       "XdYpMXiV8FmkJug6r"
  //     )
  //     .then(
  //       (result) => {
  //         alert("Your message has been sent!");
  //         console.log(result);
  //       },
  //       (error) => {
  //         alert("An error occurred.");
  //         console.log(error);
  //       }
  //     );
  // };

  return (
    <>
      {/* <Form className="m-3 d-flex flex-column">
        <h1 style={{ textAlign: "center" }} className="m-3">
          CONTACT ME
        </h1>
        <Form.Group controlId="formGroupName" className="m-2">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formGroupEmail" className="m-2">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formGroupMessage" className="m-2">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ resize: "none" }}
            rows={5}
          />
        </Form.Group>
        <Button className="m-2" value="Submit" variant="primary" type="submit">
          Submit
        </Button>
      </Form> */}
    </>
  );
}
