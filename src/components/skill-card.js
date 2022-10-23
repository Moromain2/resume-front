import React from 'react'
import styled from 'styled-components'

const SkillCardStyles = styled.div`
    border: 1px solid ${(props) => props.theme.mainText};
    border-radius: 1em;
    padding: 1em .5em;
    text-align: center;
    .skill-icon {
        display: flex;
        justify-content: center;
        margin-bottom: .5em;
        svg {
            width: auto;
            height: 2.5em;
            path {
                fill: ${(props) => props.theme.mainText};
            }
        }
    }
    h2 {
        text-transform: uppercase;
        font-size: .625em;
        line-height: 1.4em;
        margin-bottom: .8em;
    }
    meter {
        margin-bottom: .25em;
        width: 100%;
        &::-webkit-meter-bar {
            background: ${(props) => props.theme.mainText};
            padding: 1px;
            display: flex;
            align-items: center;
        }
        &::-webkit-meter-optimum-value {
            background: ${(props) => props.theme.mainBackground};
            height: .25em;
            border-radius: 1em;
        }
    }
    .tag {
        width: fit-content;
        margin: auto;
    }
`

const SkillCard = (props) => {
    return (
        <SkillCardStyles>
            <div dangerouslySetInnerHTML={{__html: props.icon}} className="skill-icon"/>
            <h2>{props.title}</h2>
            {props.progress ? 
                <>
                    <meter id={props.id} max="100" value={props.progress}>{props.progress} %</meter>
                    <div className="tag">{props.progress} %</div>
                </>
                : null
            }
        </SkillCardStyles>
    )
}

export default SkillCard
