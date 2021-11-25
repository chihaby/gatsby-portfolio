import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"

const Testt = ({ data }) => {
  const {
    strapiTestt: { title, image },
  } = data
  return (
    <>
      <section>
        {title}
        <div>
          <img src={image.url} alt={title} />
          <article>
            <Title title={title} />
          </article>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  {
    strapiTestt {
      title
      image {
        url
      }
    }
  }
`

export default Testt
