export const getTasks = hasError => new Promise((resolve, reject) => setTimeout(() => {
    if(hasError) return reject('Cannot fetch the list')

    return resolve({tasks: [ { id: 0, text: "Learn HTML and CSS", completed: true },
        { id: 1, text: "Get good at JavaScript", completed: true },
        { id: 2, text: "Master React", completed: false },
        { id: 3, text: "Discover Redux", completed: false },
        { id: 4, text: "Build amazing apps", completed: false }]})
}, 1000))

export const deleteTask = (id) => new Promise((resolve, reject) => setTimeout(() => {
    if(!id) return reject('No id')
    
    return resolve(`${id} has been deleted`)
}, 1000))

export const addTask = (text) => new Promise((resolve, reject) => setTimeout(() => {
    if(!text) return reject('No text for task')

    return resolve(`Task for ${text} has been added`)
}, 1000))

export const toggleTask = id => new Promise((resolve, reject) => setTimeout(() => {
    if(!id) return reject('No id')

    return resolve(`${id} has been toggled`)
}, 1000))