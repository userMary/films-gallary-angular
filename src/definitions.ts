export type FilmsSearchResponse = {
    Response: "True" | "False",
    Error?: string,
    Search?: Film[],
    totalResults?: string
};

export type Film = {
    "Title": string,
    "Year": string,
    "imdbID": string,
    "Type": string,
    "Poster": string
};

export type FilmInfo = {
    "Title": string,
    "Year": string,
    "Rated": string,
    "Released": string,
    "Runtime": string,
    "Genre": string,
    "Director": string,
    "Writer": string,
    "Actors": string,
    "Plot": string,
    "Language": string,
    "Country": string,
    "Awards": string,
    "Poster": string,
    "Ratings": Rating[],
    "Metascore": string,
    "imdbRating": string,
    "imdbVotes": string,
    "imdbID": string,
    "Type": string,
    "totalSeasons": string,
    "Response": string
};

type Rating = {
    "Source": string,
    "Value": string
}