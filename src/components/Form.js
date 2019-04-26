import React from "react";
import { navigateTo } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
  
      <form
      name="contact"
      method="post"
      action="/no-cache=1"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={this.handleSubmit}
      className="form-wrapper"
      >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
          <label className="form-label">
          Don’t fill this out:{" "}
          <input name="bot-field" onChange={this.handleChange} className="form-field" />
          </label>
      </p>
      <p>
          <label className="form-label">
          Your name:<br />
          <input type="text" name="name" onChange={this.handleChange} className="form-field" />
          </label>
      </p>
      <p>
          <label className="form-label">
          Your email:<br />
          <input type="email" name="email" onChange={this.handleChange} className="form-field" />
          </label>
      </p>
      <p>
        <label className="form-label">Your Role: <br />
        <select name="role[]" multiple>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        </label>
      </p>
      <p>
          <button type="submit" class='btn-primary'>Send</button>
      </p>
      </form>
   
    );
  }
}

