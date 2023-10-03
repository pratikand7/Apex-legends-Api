const url = "https://raddythebrand.github.io/apex-legends/data.json";
const loader = document.getElementById('loading');
const loadingFrame = document.getElementById('loading-frame');

const ul = document.getElementById('legends');
const list = document.createDocumentFragment();

async function getLegends(){
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if (response){
            loader.style.display = 'none';
        }
        listLegends(data);

    } catch (error) {
        console.log(error);
        loadingFrame.innerHTML = "Error"
    }
}


function listLegends(data){
    data.map(function(legend){

        const legendText = "Legend";
        const item = document.createElement('li');
        item.innerHTML = legendText;
        list.appendChild(item);
    });
    ul.appendChild(list);

}

getLegends();