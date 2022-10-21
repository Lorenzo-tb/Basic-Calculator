let btns = document.querySelectorAll("button");
let tela = document.querySelector("#tela")

let total = 0;
let valorum = "";
let valordois = "";





btns.forEach( (btn)=>{
    btn.addEventListener("click", (e)=>{
        let bval;
        
        bval = e.target.innerHTML;
        tela.innerHTML +=bval;

        if(bval == "AC"){
            tela.innerHTML = "";
            valorum = "";
            valordois = "";
            total = 0;
        }


        switch(bval){
            case '0':
                valorum += "0";
                break;

            case '1':
                valorum += "1";
                break;

            case '2':
                valorum += "2";
                break;

            case '3':
                valorum += "3";
                break;

            case '4':
                valorum += "4";
                break;

            case '5':
                valorum += "5";
                break;

            case '6':
                valorum += "6";
                break;

            case '7':
                valorum += "7";
                break;

            case '8':
                valorum += "8";
                break;

            case '9':
                valorum += "9";
                break;

            case '.':
                valorum += ".";
                break;
        }

        switch(bval){
            case "+":
                valorum += "+";
                break;

            case "-":
                valorum += "-";
                break;

            case "/":
                valorum += "/";
                break;

            case "*":
                valorum += "*";
                break;
            
            case "=":
                if(valorum == "4.20"){
                    let referenciadois = document.createElement("a");
                    tela.append(referenciadois);
                    referenciadois.innerHTML = "Click e veja a magia";
                    referenciadois.setAttribute("href","https://www.youtube.com/watch?v=dQw4w9WgXcQ");
                }

                else if(valorum == "1993"){
                    let referenciaum = document.createElement("a");
                    tela.append(referenciaum);
                    referenciaum.innerHTML = "O Que Candido Farias?";
                    referenciaum.setAttribute("href","https://br.linkedin.com/in/c%C3%A2ndido-farias-4ab97747");
                    
                    
                }

                else{
                    total = eval(valorum);
                    tela.innerHTML = total;
                    valorum = total;
                }
                break;

            case "DEL":
                console.log("vtnc");
                valorum = valorum.replace(/.$/, '');
                tela.innerHTML = valorum;
                break;

            
        }

        if(valorum == "69+4.20" && bval == "="){
            
        }

    })
}
)

