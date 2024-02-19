import React, { createContext, useContext, useState } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Home from 'pages/home';
import About from 'pages/about';
import Course from 'pages/course';
import CourseSinglePage from 'pages/course/course-single';
import Event from 'pages/event';
import EventSinglePage from 'pages/event/event-single';
import Contact from 'pages/contact';
import Error from 'pages/404';
import { Storage } from 'helpers';
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query';
import withCourse from 'comp/HOC/withCourse';
import withEvent from 'comp/HOC/withEvent';

export const CourseContext = createContext(null);
export const useCourseContext = () => useContext(CourseContext);

export const EventContext = createContext(null);
export const useEventContext = () => useContext(EventContext);

export const queryClient = new QueryClient();

const CourseSingle = withCourse(CourseSinglePage);
const EventSingle = withEvent(EventSinglePage);

const App = () => {
    const [course, setCourse] = useState(Storage.get("course"));
    const [event, setEvent] = useState(Storage.get("event"));

    const courseChangeHandler = (value) => {
        setCourse(value);
        Storage.set("course", value);
    }

    const eventChangeHandler = (value) => {
        setEvent(value);
        Storage.set("event", value);
    }

    return (
        <div className='App'>
            <QueryClientProvider client={queryClient}>
                <CourseContext.Provider value={{
                    course,
                    courseChangeHandler,
                }}>
                    <EventContext.Provider value={{
                        event,
                        eventChangeHandler,
                    }}>
                        <Switch>
                            <Route path="/" exact element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/course" exact element={<Course />} />
                            <Route path="/course/course-single" element={<CourseSingle />} />
                            <Route path="/event" element={<Event />} />
                            <Route path="/event/event-single" element={<EventSingle />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="*" element={<Error />} />
                        </Switch>
                    </EventContext.Provider>
                </CourseContext.Provider>
            </QueryClientProvider>
        </div>
    );
}

export default App;