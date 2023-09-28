const url = "https://raddythebrand.github.io/apex-legends/data.json"
const loader = document.getElementById('loading');
const loaderFrame = document.getElementById('loading-frame')

async function getLegends(){
    try {

        const respose = await fetch(url);
        const data = await res.json();
        console.log(data);

        if (respose){
            loader.style.display = 'none';
        }

    } catch (error) {
        console.log(error);
        loaderFrame.innerHTML = "Error"
    }
}

getLegends();