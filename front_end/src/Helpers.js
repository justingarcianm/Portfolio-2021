export const URI = process.env.REACT_APP_API_URI

export function getProjects() {
    return fetch(`${URI}projects`)
    .then( data => data.json() )
}

export function getSkills() {
    return fetch(`${URI}knowledges`)
    .then( data => data.json() )
}

export function getAbout() {
    return fetch(`${URI}about`)
    .then( data => data.json() )
}