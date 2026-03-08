
/*footer*/
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `&copy;Copyright ${thisYear} Meghan Daniel. All rights reserved.`;
footer.appendChild(copyright);


const headers = new Headers ({
    "content-type": 'application/json',
    "x-api-key": 'live_v9taGUTKrGgD0RkhBFBO0uNkkw3SGS73oHVvG8DKVZoH6IInVMPYXBHOEIuEbgOH'

})

var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

fetch("https://api.thecatapi.com/v1/breeds", requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

/*async function fetchData(url) {
    try {
        const url= ''
        const response = await fetch(url, {
            headers: {
                'x-api-key': 'live_v9taGUTKrGgD0RkhBFBO0uNkkw3SGS73oHVvG8DKVZoH6IInVMPYXBHOEIuEbgOH'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
            //const projectSection = document.getElementById('Projects');
            //const projectList = projectSection.querySelector('ul'); 
            console.log('Fetching data...', data);         
            //for (let i = 0; i < data.length; i++) {
                   // const project = document.createElement('li');
                   // project.innerText = data[i].name;
                  //  projectList.appendChild(project);
           // }
        console.log(data);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
 
}     */


function generateRandomBreed() {
    fetch("https://api.thecatapi.com/v1/breeds", requestOptions)
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const breed = data[randomIndex];
            const breedList = document.querySelector('#generator ul');
            breedList.innerHTML = `
                <li><strong>Name:</strong> ${breed.name}</li><br>
                <li><strong>Description:</strong> ${breed.description}</li><br>
                <li><strong>Temperament:</strong> ${breed.temperament}</li><br>
                <li><strong>Wikipedia URL:</strong> <a href="${breed.wikipedia_url}" target="_blank">${breed.wikipedia_url}</a></li>
            `;
        })
        .catch(error => console.error('Error:', error));
}

function generateCatPersonality() {
    fetch("https://api.thecatapi.com/v1/breeds", requestOptions)
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const breed = data[randomIndex];
            const breedList = document.querySelector('#quiz ul');
            breedList.innerHTML = `
                <li><strong>Name:</strong> ${breed.name}</li><br>
                <li><strong>Description:</strong> ${breed.description}</li><br>
                <li><strong>Temperament:</strong> ${breed.temperament}</li><br>
                <li>${breed.reference_image_id ? `<img src="https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg" alt="${breed.name}" style="max-width: 300px;">` : 'No image available'}</li>

            `;
        })
        .catch(error => console.error('Error:', error));
}