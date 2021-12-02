import React from "react"
import Seo from "../components/Seo"
import { FaEnvelopeSquare, FaPhoneAlt } from "react-icons/fa"

const contact = () => {
  return (
    <>
      <Seo title="Contact" />
      <section className="contact-page">
        <h3>get in touch</h3>

        <FaEnvelopeSquare className="social-icon" size={40}></FaEnvelopeSquare>
        <span>
          <bold>chihaby@gmail.com</bold>
        </span>

        <FaPhoneAlt className="social-icon" size={40}></FaPhoneAlt>
        <span> 510 - 630 - 9741</span>
      </section>
    </>
  )
}

export default contact
