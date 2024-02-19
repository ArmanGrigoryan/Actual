export const getCourses = async () => {
    const data = await fetch("/courses.json", {
        "Content-type": "application/json",
    });
    const result = await data.json();

    return result;
}

export const getEvents = async () => {
    const data = await fetch("/events.json", {
        "Content-type": "application/json",
    });
    const result = await data.json();

    return result;
}

export const getReviews = async () => {
    const data = await fetch("/reviews.json", {
        "Content-type": "application/json",
    });
    const result = await data.json();

    return result;
}

export const getNews = async () => {
    const data = await fetch("/news.json", {
        "Content-type": "application/json",
    });
    const result = await data.json();

    return result;
}