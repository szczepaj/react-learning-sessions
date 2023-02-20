const projects = [
    { id: 1, name: "Bored App", description: 'App that shows us activities when we are bored' },
    { id: 2, name: "Factorial", description: 'App calculates factorials with the help of memoization' },
    { id: 3, name: "Planet", description: 'Planets search and filter app' },
    { id: 4, name: "Shopping", description: 'Lets make a shopping list' }
];

export const getProjects = () => {
    return projects;
};

export const getProjectById = (projectId) => {
    return projects.find((project) => project.id === projectId);
};
