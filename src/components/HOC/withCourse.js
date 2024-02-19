import React from "react";
import { useCourseContext } from "app/App";
import { Navigate } from "react-router-dom";

export default function withCourse(Component) {
    return function withCourseComponent() {
        const { course } = useCourseContext();

        return course ?
            <Component /> :
            <Navigate to="/course" />
    }
}