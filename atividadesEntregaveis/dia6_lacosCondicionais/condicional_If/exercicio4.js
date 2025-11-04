import readline from "readline-sync"

let grupoPrincipal, subGrupo, alimentacao;

grupoPrincipal = readline.question("Seu animal é vertebrado ou invertebrado? ").toLowerCase();

if(grupoPrincipal === "vertebrado"){
    subGrupo = readline.question("Seu animal é uma ave ou mamifero? ").toLowerCase();

        if(subGrupo === "ave"){
            alimentacao = readline.question("Seu animal é carnivoro ou onivoro? ").toLowerCase();
                if (alimentacao === "carnivoro"){
                    console.log("Seu animal é uma Águia!");
                }else{
                    console.log("Seu animal é uma Pomba!");
                }
        }else if(subGrupo === "mamifero"){
            alimentacao = readline.question("Seu animal é onivoro ou herbivoro? ").toLowerCase();
                if (alimentacao === "onivoro"){
                    console.log("Seu animal é um Homem!");
                }else{
                    console.log("Seu animal é uma Vaca!");
                    }
        }

}

if(grupoPrincipal === "invertebrado"){
    subGrupo = readline.question("Seu animal é um inseto ou um anelideo? ").toLowerCase();

        if(subGrupo === "inseto"){
            alimentacao = readline.question("Seu animal é um hematofago ou herbivoro? ").toLowerCase();
                if (alimentacao === "hematofago"){
                    console.log("Seu animal é uma Pulga");
                }else{
                    console.log("Seu animal é uma Lagarta!")
                }
        }else if(subGrupo === "anelideo"){
            alimentacao = readline.question("Seu animal é um hematofago ou onivoro? ").toLowerCase();
                if (alimentacao === "hematofago"){
                    console.log("Seu animal é uma Sanguessuga!");
                }else{
                    console.log("Seu animal é uma Minhoca!");
                }
        }
}
            