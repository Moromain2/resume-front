import React from 'react'
import EducationCard from '../components/education-card'
import { graphql } from 'gatsby'
import { AnimatePresence, motion } from "framer-motion"


const EducationPage = ({data}) => {
  const educationData = data.educationQuery.nodes
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
                {educationData.map((education) => (
                    <EducationCard
                        key={education.id}
                        school={education.education_university}
                        diploma={education.education_diploma}
                        gradYear={education.education_graduation_date}
                    />
                ))}
            </motion.div>
        </AnimatePresence>
    )
}

export const query = graphql`
  query {
    educationQuery: allStrapiEducation {
      nodes {
        education_university
        education_diploma
        education_graduation_date(formatString: "YYYY")
        id
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

export default EducationPage
