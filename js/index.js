async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const repositories = await response.json();
            const projectSection = document.getElementById('Projects');
            const projectList = projectSection.querySelector('ul'); 
            console.log('Fetching repositories...', projectList);         
            for (let i = 0; i < repositories.length; i++) {
                    const project = document.createElement('li');
                    project.innerText = repositories[i].name;
                    projectList.appendChild(project);
            }
        console.log(repositories);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
 
}     

fetchData('https://api.github.com/users/mdanimal/repos');
