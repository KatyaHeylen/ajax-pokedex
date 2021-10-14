const btn = document.getElementById("run");
const output = document.getElementById("output");

const getData = async (id) => {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
    let data = await response.json();
    return data;
}

    btn.addEventListener("click", () => {
        let i = document.getElementById("poke-id").value;
        getData(i)
            .then((data) => {
                console.log(data);
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

//

