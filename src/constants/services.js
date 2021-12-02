import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `I am a web developer with industry experience in building websites and web applications. I specialize in JavaScript and have professional experience working with Node and React`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `I create custom website designs tailored to specific business needs. Responsive, easy to navigate, and user friendly.`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "Digital Marketing",
    text: `I conduct strategic marketing campaigns for clients and businesses towards their target audiences. Develop and implement effective search engine optimization (SEO).`,
  },
]

export default services
