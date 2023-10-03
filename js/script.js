const url = "https://raddythebrand.github.io/apex-legends/data.json"
const loader = document.getElementById('loading');
const loaderFrame = document.getElementById('loading-frame');

const ul = document.getElementById('legends');
const list = document.createDocumentFragment();

async function getLegends(){
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if (response){
            loader.style.display = "none";
        }

    } catch (error) {
        console.log(error);
        loaderFrame.innerHTML = "Error"
    }
}


function listLegends(){
    
}

getLegends();