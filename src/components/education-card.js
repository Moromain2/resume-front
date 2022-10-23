import React from 'react'
import styled from 'styled-components'

const EducationCardStyles = styled.div`
    margin-bottom: .75em;
    padding: 1.5em 1em;
    border: 1px solid ${(props) => props.theme.mainText};
    border-radius: 1em;
    &:last-of-type {
        margin-bottom: 0;
    }
    .card-label {
        margin-bottom: 0;
    }
`

const EducationCard = (props) => {
    return (
        <EducationCardStyles>
            <h2 className="card-subheader">{props.school}</h2>
            <h1 className="card-header">{props.diploma}</h1>
            <h3 className="card-label">{props.gradYear}</h3>
        </EducationCardStyles>
    )
}

export default EducationCard
