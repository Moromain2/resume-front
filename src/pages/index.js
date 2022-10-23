import * as React from "react"
import ExperienceCard from "../components/experience-card"
import { graphql } from "gatsby"
import { AnimatePresence, motion } from "framer-motion"

const IndexPage = ({ data }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        eyit={{ opacity: 0, y: 200 }}
        transition={{
            type: "spring",
            mass: 0.35,
            stiffness: 75,
            duration: 0.5
        }}
      >
        <div className="experience-cards-container">
          {data.experiencesQuery.nodes.map((experience) => (
            <ExperienceCard
              key={experience.id}
              company={experience.experience_company}
              location={experience.experience_location}
              title={experience.experience_title}
              startDate={experience.experience_start_date}
              endDate={experience.experience_end_date}
              slug={'experiences/' + experience.slug}
              // tags={experience.tag}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export const query = graphql`
query {
  experiencesQuery: allStrapiExperience {
    nodes {
      id
      slug
      experience_company
      experience_location
      experience_title
      experience_start_date(formatString: "MMMM YYYY" locale: "FR")
      experience_end_date(formatString: "MMMM YYYY" locale: "FR")
      tag {
        tag
      }
    }
  }
  seoQuery: allStrapiHero {
    nodes {
      SEO {
        id
        title
        description
      }
    }
  }
}
`

export const Head = ({ data }) => {
  const seoData = data.seoQuery.nodes[0].SEO
  return (
    <>
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
    </>
  )
}

export default IndexPage
