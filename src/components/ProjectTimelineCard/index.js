// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projects} = props
  const {imageUrl, projectTitle, projectUrl, duration, description} = projects

  return (
    <>
      <div className="project-container">
        <img className="project-img" src={imageUrl} alt="project" />
        <div className="duration-container">
          <h1>{projectTitle}</h1>
          <div className="icon-container">
            <AiFillCalendar className="clock-icon" />
            <p className="course-duration">{duration} </p>
          </div>
        </div>
        <p className="description">{description} </p>
        <a className="project-link" href={projectUrl}>
          Visit
        </a>
      </div>
    </>
  )
}

export default ProjectTimelineCard
