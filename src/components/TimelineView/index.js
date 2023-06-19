// Write your code here
import {Chrono} from 'react-chrono'

import {Component} from 'react'

import CourseTimelineCard from '../CourseTimelineCard'

import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    const courseItemsList = timelineItemsList.filter(
      eachItem => eachItem.categoryId === 'COURSE',
    )
    const projectItemsList = timelineItemsList.filter(
      eachItem => eachItem.categoryId === 'PROJECT',
    )

    console.log(courseItemsList)
    return (
      <div className="bg-container">
        <h1 className="timeline-heading">
          MY JOURNEY OF <br /> <span className="span-element"> CCBP 4.0 </span>
        </h1>
        <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
          {courseItemsList.map(eachCourse => (
            <CourseTimelineCard courses={eachCourse} key={eachCourse.id} />
          ))}
          {projectItemsList.map(eachProject => (
            <ProjectTimelineCard projects={eachProject} key={eachProject.id} />
          ))}
        </Chrono>
      </div>
    )
  }
}

export default TimelineView
