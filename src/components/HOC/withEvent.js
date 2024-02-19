import React from "react";
import { useEventContext } from "app/App";
import { Navigate } from "react-router-dom";

export default function withEvent(Component) {
    return function withEventComponent() {
        const { event } = useEventContext();

        return event ?
            <Component /> :
            <Navigate to="/event" />
    }
}