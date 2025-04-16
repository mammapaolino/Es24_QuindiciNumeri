window.addEventListener("load", function(){
    creaMatrice();
});

function creaMatrice(){
    const wrapper = document.getElementById("wrapper");

    for (let i = 0; i < 16; i ++){
        const div = document.createElement("div");
        div.addEventListener("click", divClick);
        div.id = `div${i/4}-${i % 4}`;
        wrapper.appendChild(div);
    }
}

function divClick(){
    const i = this.id.split('-')[1];
    const j = this.id.split('-')[2];

    if(j - 1>= 0) {
        const sopra = document.getElementById(`div-${i}-${j - 1}`);

        if (sopra.textContent == "") {

        }
    }

}

function scambiaDiv(piena, vu)

function caricaMatrice(){
    for(let cont = 1; cont <= 15; cont++){
        do{
            const i = Math.floor(Math.random() * 4);
            const j = Math.floor(Math.random() * 4);

            const divRnd = document.getElementById(`div-${i}-${j}`);

        }while(divRnd.textContent != "");

        divRnd.style
    }
}