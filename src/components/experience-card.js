import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import ArrowIcon from '../images/icons/arrow-icon.svg'

const ExperienceCardStyles = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .75em;
    padding: 1.5em 1em;
    border: 1px solid ${(props) => props.theme.mainText};
    border-radius: 1em;
    &:last-of-type {
        margin-bottom: 0;
    }
    .tags-list {
        display: flex;
        li {
            margin-right: .25em;
        }
    }
    .arrow-icon {
        width: 1.5em;
        height: 1.5em;
        path {
            fill: ${(props) => props.theme.mainText};
        }
    }
`

const ExperienceCard = (props) => {
    return (
        <ExperienceCardStyles to={props.slug}>
            <div>
                <h2 className="card-subheader">{props.company}, {props.location}</h2>
                <h1 className="card-header">{props.title}</h1>
                {props.endDate ? (
                    <h3 className="card-label">{props.startDate.charAt(0).toUpperCase() + props.startDate.slice(1)} à {props.endDate}</h3>
                ) : (
                    <h3 className="card-label">Depuis {props.startDate}</h3>
                )}
                <ul className="tags-list">
                    {/* {props.tags.map((tag) => (
                        <li className="tag" key={tag}>{tag}</li>
                    ))} */}
                </ul>
            </div>
            <ArrowIcon className="arrow-icon"/>
        </ExperienceCardStyles>
    )
}

export default ExperienceCard
