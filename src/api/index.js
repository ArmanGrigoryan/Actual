import { Request } from "./api";

export const getCourses = async () => {
    const request = new Request();
    const data = await request.Get("/courses.json");
    const result = await new Promise(res => setTimeout(() => res(data.json()), 500));

    return result;
}

export const getEvents = async () => {
    const request = new Request();
    const data = await request.Get("/events.json");
    const result = await new Promise(res => setTimeout(() => res(data.json()), 500));

    return result;
}

export const getReviews = async () => {
    const request = new Request();
    const data = await request.Get("/reviews.json");
    const result = await data.json();

    return result;
}

export const getNews = async () => {
    const request = new Request();
    const data = await request.Get("/news.json");
    const result = await data.json();

    return result;
}

export const subscribeMail = (value) => {
    const request = new Request(true);
    return request.Post("/send-mail", { filters: { toEmail: value } });
}