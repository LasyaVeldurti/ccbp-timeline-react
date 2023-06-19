// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courses} = props
  const {courseTitle, duration, description, tagsList} = courses

  return (
    <div className="course-container">
      <div className="course-title-container">
        <h1>{courseTitle} </h1>
        <div className="icon-container">
          <AiFillClockCircle className="clock-icon" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description} </p>
      <ul className="tag-list-ul-container">
        {tagsList.map(tag => (
          <li key={tag.id} className="tag-item">
            <button className="tag-btn" type="button">
              {tag.name}{' '}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
