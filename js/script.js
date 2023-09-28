const url = "https://raddythebrand.github.io/apex-legends/data.json"
const loader = document.getElementById('loading')

async function getLegends(){
    try {

        const res = await fetch(url);
        const data = await res.json();

    } catch (error) {
        console.log(error)
        
    }
}

getLegends();