export const URI = process.env.REACT_APP_API_URI

export async function getProjects() {
    return await fetch(`${URI}/projects`)
    .then( data => data.json() )
}

export async function getSkills() {
    return await fetch(`${URI}/knowledges`)
    .then( data => data.json() )
}

export async function getAbout() {
    return await fetch(`${URI}/about`)
    .then( data => data.json() )
}

export async function getBlogs() {
    return await fetch(`${URI}/blogs`)
    .then( data => data.json() )
}