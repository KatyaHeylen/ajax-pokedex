const btn = document.getElementById("run");
// const output = document.getElementById("output");

document.getElementById('poke-id').addEventListener('keyup', function(event) {
        if (event.code === 'Enter') {
            event.preventDefault();
            document.getElementById('run').click();
        }
    });

const getData = async (id) => {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
    let data = await response.json();
    return data;
}

    btn.addEventListener("click", () => {
        let i = document.getElementById("poke-id").value;
        getData(i)
            .then((data) => {
                let img = document.getElementById("creature");
                img.setAttribute("src", data.sprites.front_default);
                let name = document.querySelector("h2");
                name.textContent = data.name;
                let order = document.querySelector("h1");
                order.textContent = data.id;
                if (data.moves.length > 4) {
                    let move1 = document.querySelector("p.move1");
                    move1.textContent = data.moves[0].move.name;
                    let move2 = document.querySelector("p.move2");
                    move2.textContent = data.moves[1].move.name;
                    let move3 = document.querySelector("p.move3");
                    move3.textContent = data.moves[2].move.name;
                    let move4 = document.querySelector("p.move4");
                    move4.textContent = data.moves[3].move.name;
                }
            })
    })
//obtaining the link to the evolution-chain
const getLink = async (id) => {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + id);
    let linkChain = await response.json();
    return linkChain;
}

const getEvol = async (link) => {
    let response = await fetch(link);
    let dataEvol = await response.json();
    return dataEvol;
}

const getEvolpic = async (evolName) => {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/' + evolName.textContent);
    let evolPic = await response.json();
    return evolPic;
}
//get the data from evolution chain
    btn.addEventListener("click", () => {
        let x = document.getElementById("poke-id").value;
        getLink(x)
            .then((linkChain) => {
                let link = linkChain.evolution_chain.url;

                //get the data to have name of prev. evolution
                getEvol(link)
                    .then((dataEvol) => {
                        console.log(dataEvol);
                        let evolName = document.querySelector('h3');
                        evolName.textContent = dataEvol.chain.evolves_to[0].species.name;
                        getEvolpic(evolName)
                            .then((evolPic) => {
                                console.log(evolPic);
                                let pic = document.getElementById("evolpic");
                                pic.setAttribute("scr", evolPic.sprites.front_default);
                            })
                    })
            })
    })


// for (let i = 0; i < dataEvol.length; i++) {
                        //     let evolForms = evolForms.map((dataEvol) => {
                        //         dataEvol.chain.evolves_to[i].evolves_to[i].evolves_to[i].species.name




