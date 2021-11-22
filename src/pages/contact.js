import React from "react"
import Seo from "../components/Seo"
import {
  FaEnvelopeSquare,
  FaPhoneAlt
} from "react-icons/fa"

const contact = () => {
  return (
    <>
      <Seo title="Contact" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
            <FaEnvelopeSquare className="social-icon" size={32}>chihaby@gmail.com</FaEnvelopeSquare>
            <FaPhoneAlt className="social-icon" size={32}>(510)630-9741</FaPhoneAlt>
          {/* <form>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form> */}
        </article>
      </section>
    </>
  )
}

export default contact
