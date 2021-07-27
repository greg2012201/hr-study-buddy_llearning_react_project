import axios from 'axios'
import React from 'react'

const withEventsData = (WrappedComponent, group) => {
  return function WithEventsDataWrapper() {
    const [events, setEvents] = React.useState([])
    React.useEffect(() => {
      axios.get(`/events/${group}`).then(({ data }) => setEvents(data.events))
    }, [])
    return <WrappedComponent events={events} />
  }
}

export const DisplayEvents = (props) => {
  return <div>Log events {console.log(props)}</div>
}

export const DisplayEventsData = withEventsData(DisplayEvents, 'A')
