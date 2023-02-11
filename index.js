// Projeto Valle 21/10/2022
// Objetivos:

// Automatizar solução "passei direto" 

// Fluxo: pesquisar pelo titulo da solução > acessar automaticamente o "passei direto" e realizar o search > 
// > pegar a tag pre (firstChild do querySelector) > tratar o textContent e converter em array simples e depois biDimensional (split("\n") e depois split(" ")  
// > realizar this (this = essas funções abaixo > 
// Finalizando: Gerar um .doc formatado com a pergunta e as respectivas respostas.

// Link alvo (para testes): https://www.passeidireto.com/arquivo/76959267/teste-do-capitulo-6-cybersecurity-essentials 

// Primeira solução:


// pega a div container do <pre>
const preCap6 = document.querySelector(".preview-text.fancy-scroll.pd-paragraph-sm");

// finalmente pega a tag <pre>
const preCap6Tratado = preCap6.firstChild;

// faz o primeiro tratamento do texto e splita nos enter (ou seja, cada linha do texto)
const preCap6TratadoSemN = preCap6Tratado.textContent.split("\n");

// transforma em array biDimensional agora splitando pelos espaços (para poder comparar no for)
const preCap6TratadoSemNeSemSpace = preCap6TratadoSemN.map(x => x.split(" "));


// Solução primaria (sem tratamentos e melhorias aqui ja é possível verificar as corretas
for (let i = 0; i < preCap6TratadoSemNeSemSpace.length; i++) {
    for (let x = 0; x < preCap6TratadoSemNeSemSpace[i].length; x++) {
        if (preCap6TratadoSemNeSemSpace[i][x] == "Correto!Correto!") {
            console.log(preCap6TratadoSemNeSemSpace[i])
        }
    }
}



//------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Solução secundária: melhoria no for (Aqui melhora a vizualização sobre qual pergunta é referênte a resposta. (Separando em namespaces)

for (let i = 0; i < preCap6TratadoSemNeSemSpace.length; i++) {
    for (let x = 0; x < preCap6TratadoSemNeSemSpace[i].length; x++) {
        if (preCap6TratadoSemNeSemSpace[i][x] == "Correto!Correto!" || preCap6TratadoSemNeSemSpace[i][x] == "ptsPergunta") {
            if (preCap6TratadoSemNeSemSpace[i][x] == "ptsPergunta") {
                console.log(preCap6TratadoSemNeSemSpace[i].join(" "))
            } else {
                console.log(preCap6TratadoSemNeSemSpace[i].join(" "))
            }
        }
    }
}

/\ gerando undefined porém funcional!


// Solução terceária: formatado corrente (Faltando ajustes!) 
// Solução necessária pois foi detectado que não é só a string "Correto!Correto!" a flag necessária pois também tem "Resposta corretaResposta correta"
// melhorias para tratar e gerar um resultado mais coerente. 

for (let i = 0; i < preCap6TratadoSemNeSemSpace.length; i++) {
    for (let x = 0; x < preCap6TratadoSemNeSemSpace[i].length; x++) {
        if (preCap6TratadoSemNeSemSpace[i][x] == "Correto!Correto!" || preCap6TratadoSemNeSemSpace[i][x] == "ptsPergunta" || preCap6TratadoSemNeSemSpace[i][x] == "Resposta corretaResposta correta") {
            if (preCap6TratadoSemNeSemSpace[i][x] == "Resposta corretaResposta correta") {
                console.log("achou", i, x)
            }
            if (preCap6TratadoSemNeSemSpace[i][x] == "ptsPergunta") {
                console.log(preCap6TratadoSemNeSemSpace[i].join(" "))
            } else {
                console.log(preCap6TratadoSemNeSemSpace[i].join(" "))
            }
        }
    }
}



//------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Solução quaternária: Ajusta lógica para melhoria de performance e identificar flag faltante "Resposta corretaResposta correta".

for (let i = 0; i < preCap6TratadoSemNeSemSpace.length; i++) {
    if (preCap6TratadoSemNeSemSpace[i] == "Resposta corretaResposta correta"){
        console.log("achou for de fora", i, x);
        }       
    
    for (let x = 0; x < preCap6TratadoSemNeSemSpace[i].length; x++) {
            
        if (preCap6TratadoSemNeSemSpace[i][x] == "ptsPergunta") {
            console.log("================================================");
            console.log(preCap6TratadoSemNeSemSpace[i].join(" "));
        }
        else if (preCap6TratadoSemNeSemSpace[i][x] == "Correto!Correto!"){
            console.log(preCap6TratadoSemNeSemSpace[i].join(" "));
        }
        else if (preCap6TratadoSemNeSemSpace[i][x] == "Resposta corretaResposta correta"){
            console.log("achou for de dentro", i, x);
        }
    }
}


//------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Solução quintenária: Ajusta UX e melhora visibilidade.

for (let i = 0; i < preCap6TratadoSemNeSemSpace.length; i++) {
    if (preCap6TratadoSemNeSemSpace[i] == "Resposta corretaResposta correta"){
        console.log("achou for de fora", i, x);
    }       
    
    for (let x = 0; x < preCap6TratadoSemNeSemSpace[i].length; x++) {
            
        if (preCap6TratadoSemNeSemSpace[i][x] == "ptsPergunta") {
            console.log("================================================");
            console.log(preCap6TratadoSemNeSemSpace[i].join(" "));
            var flag = "pamonha";
            cont = 1;
            while (!preCap6TratadoSemNeSemSpace[i + cont][0] == ""){
                console.log(preCap6TratadoSemNeSemSpace[i + cont].join(" "));
                cont++;
            }
        }
        else if (preCap6TratadoSemNeSemSpace[i][x] == "Correto!Correto!"){
            console.log(preCap6TratadoSemNeSemSpace[i].join(" ").replace("Correto!Correto!", " ✓ Correto"));
        }
        else if (preCap6TratadoSemNeSemSpace[i][x] == "Resposta corretaResposta correta"){
            console.log("achou for de dentro", i, x);
        }
    }
}



//------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Solução sextenária: Ajusta visibilidade, filtra URL e Data com regex (Obs: pergunta 01 não cai no filtro, analisar lógica) porém de resto esta funcional.
// e acrescenta uns frufru pra deixar centralizado e de acordo com comprimento do texto

// Obs: Alguns cenários não funcionando (exemplo a parte 01 do cap06, a questão 1 não cai nos filtros e retorna apenas a resposta correta (faltando pergunta)

var reg = /([0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4})/g;
var regUrl = /((?:https|http|ftp)?:\/\/)?([^\/,\s]+\.[^\/,\s]+?)(?=\/|,|\s|$|\?|#)(.*)/gm;
// var str = "Um texto com uma data aqui 01/01/2012 e mais uma aqui 03/04/2000";
// var todasAsDatas = str.match(reg);


// pega a maior linha contando a quantidade de string

var max = preCap6TratadoSemN[0].length;
var indexOfMax = preCap6TratadoSemN[0];
for (let i = 0; i < preCap6TratadoSemN.length; i++) {
    if (preCap6TratadoSemN[i].length >= max && !preCap6TratadoSemN[i].match(reg) && !preCap6TratadoSemN[i].match(regUrl) && preCap6TratadoSemN[i] != 'as habilidades e o conhecimento apresentados no capítulo e de ajudá-lo a se preparar para o teste final. Você terá várias chances e a nota não') {
        max = preCap6TratadoSemN[i].length;
        indexOfMax = preCap6TratadoSemN[i];
    }
    console.log(max, indexOfMax);
}


for (let i = 0; i < preCap6TratadoSemNeSemSpace.length; i++) {
    if (preCap6TratadoSemNeSemSpace[i] == "Resposta corretaResposta correta") {
        console.log("achou for de fora", i, x);
    }

    for (let x = 0; x < preCap6TratadoSemNeSemSpace[i].length; x++) {
        if (preCap6TratadoSemNeSemSpace[i][x] == "ptsPergunta") {
            console.log((String("=").repeat(max)));
            console.log((String(" ").repeat((max / 2) - (preCap6TratadoSemNeSemSpace[i].join(" ").length / 2))) + "[ " + preCap6TratadoSemNeSemSpace[i].join(" ") + " ]");
            console.log("");
            var flag = "pamonha";
            cont = 1;
            while (!preCap6TratadoSemNeSemSpace[i + cont][0] == "" && !preCap6TratadoSemNeSemSpace[i + cont][0].match(reg) && !preCap6TratadoSemNeSemSpace[i + cont][0].match(regUrl)) {
                console.log(preCap6TratadoSemNeSemSpace[i + cont].join(" "));
                cont++;
            }
            console.log("");
            break;
            
        } else if (preCap6TratadoSemNeSemSpace[i][x] == "" && !preCap6TratadoSemNeSemSpace[i].find(r => r == "Correto!Correto!") && !preCap6TratadoSemNeSemSpace[i].find(r => r == "Refer")) {
            console.log("[ ]" + preCap6TratadoSemNeSemSpace[i].join(" "));
            break;
        } else if (preCap6TratadoSemNeSemSpace[i][x] != "" && preCap6TratadoSemNeSemSpace[i][x] == "Correto!Correto!") {
            console.log("[X]" + preCap6TratadoSemNeSemSpace[i].join(" ").replace("Correto!Correto!", " ✓ Correto"));
            break;
        } else if (preCap6TratadoSemNeSemSpace[i][x] == "Resposta corretaResposta correta") {
            console.log("achou for de dentro", i, x);
            break;
        } else if (preCap6TratadoSemNeSemSpace[i][0] == "Refer") {
            console.log("");
            console.log((String(" ").repeat((max / 2) - (preCap6TratadoSemNeSemSpace[i].join(" ").length / 2))) + "- " +  preCap6TratadoSemNeSemSpace[i].join(" "));
            break;
        }
    }
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------- Solução setenária: Melhora UX e retira informações desnecessárias! ---------------- faltando terminar

// Obs: Aqui ja ajusta e cai na flag a pergunta 01 da parte 01 do cap06 

// pega a div container do <pre>
const preCap6 = document.querySelector(".preview-text.fancy-scroll.pd-paragraph-sm");

// finalmente pega a tag <pre>
const preCap6Tratado = preCap6.firstChild;

// faz o primeiro tratamento do texto e splita nos enter (ou seja, cada linha do texto)
const preCap6TratadoSemN = preCap6Tratado.textContent.split("\n");

// transforma em array biDimensional agora splitando pelos espaços (para poder comparar no for)
const preCap6TratadoSemNeSemSpace = preCap6TratadoSemN.map(x => x.split(" "));


// Limpa e elimina as URL's e Datas aleatórias com regex:

var regData = /([0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4})/g;
var regUrl = /((?:https|http|ftp)?:\/\/)?([^\/,\s]+\.[^\/,\s]+?)(?=\/|,|\s|$|\?|#)(.*)/gm;
// var todasAsDatas = str.match(reg);
var novoArrayTratado = [];

for (let i = 0; i < preCap6TratadoSemN.length; i++) {
    if(!preCap6TratadoSemN[i].match(regUrl) && !preCap6TratadoSemN[i].match(regData)) {
        novoArrayTratado.push(preCap6TratadoSemN[i]);
    }
}

var novoArrayTratadoSemSpace = novoArrayTratado.map(x => x.split(" "));

// pega a maior linha contando a quantidade de string

var max = novoArrayTratado[0].length;
for (let i = 0; i < novoArrayTratado.length; i++) {
    if (novoArrayTratado[i].length >= max && novoArrayTratado[i] != 'as habilidades e o conhecimento apresentados no capítulo e de ajudá-lo a se preparar para o teste final. Você terá várias chances e a nota não') {
        max = novoArrayTratado[i].length;
        indexOfMax = novoArrayTratado[i];
    }
    console.log(max, indexOfMax);
}

for (let i = 0; i < novoArrayTratadoSemSpace.length; i++) {
    if (novoArrayTratadoSemSpace[i] == "Resposta corretaResposta correta") {
        console.log("achou for de fora", i, x);
    }

    for (let x = 0; x < novoArrayTratadoSemSpace[i].length; x++) {
        if (novoArrayTratadoSemSpace[i][x] == "ptsPergunta") {
            console.log((String("=").repeat(max)));
            console.log((String(" ").repeat((max / 2) - (novoArrayTratadoSemSpace[i].join(" ").length / 2))) + "[ " + novoArrayTratadoSemSpace[i].join(" ") + " ]");
            console.log("");
            var flag = "pamonha";
            cont = 1;
            while (!novoArrayTratadoSemSpace[i + cont][0] == "") {
                if(cont == 1){
			console.log(novoArrayTratadoSemSpace[i][x + 1] + "-) " + novoArrayTratadoSemSpace[i + cont].join(" "));
		}else {
			console.log(novoArrayTratadoSemSpace[i + cont].join(" "));
		}
		        console.log("de fora");
                cont++;
            }
            console.log("");
            break;
            
        } else if (novoArrayTratadoSemSpace[i][x] == "" && !novoArrayTratadoSemSpace[i].find(r => r == "Correto!Correto!") && !novoArrayTratadoSemSpace[i].find(r => r == "Refer")) {
            console.log("[ ]" + novoArrayTratadoSemSpace[i].join(" "));
            break;
        } else if (novoArrayTratadoSemSpace[i][x] != "" && novoArrayTratadoSemSpace[i][x] == "Correto!Correto!") {
	    var respCorreta = "%c[X]" + novoArrayTratadoSemSpace[i].join(" ").replace("Correto!Correto!", " ✓ Correto");
            console.log(respCorreta, "background: #FFF; color: #289b10");
            break;
        } else if (novoArrayTratadoSemSpace[i][x] == "Resposta corretaResposta correta") {
            console.log("achou for de dentro", i, x);
            break;
        } else if (novoArrayTratadoSemSpace[i][0] == "Refer") {
            console.log("");
            console.log((String(" ").repeat((max / 2) - (novoArrayTratadoSemSpace[i].join(" ").length / 2))) + "%c- " +  novoArrayTratadoSemSpace[i].join(" "), "background: #FFF; color: #f57c0b");
            break;
        }
    }
}


//------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Solução setenária: Refatorada, código diferente com menas funções e tornado os mesmos resultados

// pega a div container do <pre>
const preCap6 = document.querySelector(".preview-text.fancy-scroll.pd-paragraph-sm");

// finalmente pega a tag <pre>
const preCap6Tratado = preCap6.firstChild;

// faz o primeiro tratamento do texto e splita nos enter (ou seja, cada linha do texto)
const preCap6TratadoSemN = preCap6Tratado.textContent.split("\n");

// transforma em array biDimensional agora splitando pelos espaços (para poder comparar no for)
const preCap6TratadoSemNeSemSpace = preCap6TratadoSemN.map(x => x.split(" "));


// Limpa e elimina as URL's e Datas aleatórias com regex:

var regData = /([0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4})/g;
var regUrl = /((?:https|http|ftp)?:\/\/)?([^\/,\s]+\.[^\/,\s]+?)(?=\/|,|\s|$|\?|#)(.*)/gm;
// var todasAsDatas = str.match(reg);
var novoArrayTratado = [];

for (let i = 0; i < preCap6TratadoSemN.length; i++) {
    if(!preCap6TratadoSemN[i].match(regUrl) && !preCap6TratadoSemN[i].match(regData)) {
        novoArrayTratado.push(preCap6TratadoSemN[i]);
	console.log("dentro do if", preCap6TratadoSemN[i]);
    }
    console.log("FORA do if", preCap6TratadoSemN[i], "URL",preCap6TratadoSemN[i] == preCap6TratadoSemN[i].match(regUrl), "DATA",preCap6TratadoSemN[i] == preCap6TratadoSemN[i].match(regData));
}

var novoArrayTratadoSemSpace = novoArrayTratado.map(x => x.split(" "));

// pega a maior linha contando a quantidade de string

var max = novoArrayTratado[0].length;
for (let i = 0; i < novoArrayTratado.length; i++) {
    if (novoArrayTratado[i].length >= max && novoArrayTratado[i] != 'as habilidades e o conhecimento apresentados no capítulo e de ajudá-lo a se preparar para o teste final. Você terá várias chances e a nota não') {
        max = novoArrayTratado[i].length;
        indexOfMax = novoArrayTratado[i];
    }
    console.log(max, indexOfMax);
}

for (let i = 0; i < novoArrayTratadoSemSpace.length; i++) {
    if (novoArrayTratadoSemSpace[i] == "Resposta corretaResposta correta") {
        console.log("achou for de fora", i, x);
    }

    for (let x = 0; x < novoArrayTratadoSemSpace[i].length; x++) {
        if (novoArrayTratadoSemSpace[i][x] == "ptsPergunta") {
            console.log((String("=").repeat(max)));
            console.log((String(" ").repeat((max / 2) - (novoArrayTratado[i].length / 2))) + "[ " + novoArrayTratado[i] + " ]");
            console.log("");
            var flag = "pamonha";
            cont = 1;
            while (!novoArrayTratadoSemSpace[i + cont][0] == "") {
		console.log(novoArrayTratadoSemSpace[i + cont][0]);
                if(cont == 1){
			console.log(novoArrayTratadoSemSpace[i][x + 1] + "-) " + novoArrayTratado[i + cont]);
		}else {
			console.log(novoArrayTratado[i + cont]);
		}
                cont++;
            }
            console.log("");
            break;
            
        } else if (novoArrayTratadoSemSpace[i][x] == "" && !novoArrayTratadoSemSpace[i].find(r => r == "Correto!Correto!") && !novoArrayTratadoSemSpace[i].find(r => r == "Refer")) {
            console.log("[ ]" + novoArrayTratado[i]);
            break;
        } else if (novoArrayTratadoSemSpace[i][x] != "" && novoArrayTratadoSemSpace[i][x] == "Correto!Correto!") {
	    var respCorreta = "%c[X]" + novoArrayTratado[i].replace("Correto!Correto!", " ✓ Correto");
            console.log(respCorreta, "background: #FFF; color: #289b10");
            break;
        } else if (novoArrayTratadoSemSpace[i][x] == "Resposta corretaResposta correta") {
            console.log("achou for de dentro", i, x);
            break;
        } else if (novoArrayTratadoSemSpace[i][0] == "Refer") {
            console.log("");
            console.log((String(" ").repeat((max / 2) - (novoArrayTratado[i].length / 2))) + "%c- " +  novoArrayTratado[i], "background: #FFF; color: #f57c0b");
            break;
        }
    }
}



// Caçando o erro:
// Funcional (Aqui limpa a listagem por completo) 
var regData = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;
var regUrl = /((?:https|http|ftp)?:\/\/)?([^\/,\s]+\.[^\/,\s]+?)(?=\/|,|\s|$|\?|#)(.*)/gm;
// var todasAsDatas = str.match(reg);
var novoArrayTratado = [];

for (let i = 0; i < preCap6TratadoSemN.length; i++) {
    if (!preCap6TratadoSemN[i].match(regUrl) && !preCap6TratadoSemN[i].split(" ")[0].match(regData) || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Escolha")) {
        novoArrayTratado.push(preCap6TratadoSemN[i]);
        console.log("dentro do if", preCap6TratadoSemN[i]);
    }
    console.log("FORA do if", preCap6TratadoSemN[i], "URL", preCap6TratadoSemN[i] == preCap6TratadoSemN[i].match(regUrl), "DATA", String(String(preCap6TratadoSemN[i]).split(" ")).match(regData) == true, "Arraydimensão2index0", preCap6TratadoSemNeSemSpace[i][0], "testando", preCap6TratadoSemN[22].match(regUrl));
}



//------------------------------------------------------------------------------------------------------------------------------------------------------
// Solução octavenaria: realiza parsing das duas logicas na logica raiz funcional:

// Melhor solução até agora (26/10/2022)
// Capitulo 01 (Total 11 Perguntas): https://www.passeidireto.com/arquivo/77326978/cybersecurity-essentials-capitulo-1-cisco 
// Capitulo 02/01: (Aqui: 14 com Total 20 Perguntas): https://www.passeidireto.com/arquivo/81552774/teste-do-capitulo-2-cybersecurity-essentials
// Capitulo 02/02: https://www.passeidireto.com/arquivo/81552774/teste-do-capitulo-2-cybersecurity-essentials/2
// Capitulo 03/01: https://www.passeidireto.com/arquivo/78199544/teste-do-capitulo-3-cybersecurity-essentials
// Capitulo 03/02: https://www.passeidireto.com/arquivo/78199544/teste-do-capitulo-3-cybersecurity-essentials/2
// Capitulo 04/01: https://www.passeidireto.com/arquivo/78039593/teste-do-capitulo-4-cybersecurity-essentials <-- EM TODOS SITES SOBRE QUEBROU UM POUCO
// Capitulo 04/02: https://www.passeidireto.com/arquivo/78039593/teste-do-capitulo-4-cybersecurity-essentials/2
// Capitulo 05/01: https://www.passeidireto.com/arquivo/76959266/teste-do-capitulo-5-cybersecurity-essentials
// Capitulo 05/02: https://www.passeidireto.com/arquivo/76959266/teste-do-capitulo-5-cybersecurity-essentials/2
// Capitulo 06/01: https://www.passeidireto.com/arquivo/76959267/teste-do-capitulo-6-cybersecurity-essentials
// Capitulo 06/02: https://www.passeidireto.com/arquivo/76959267/teste-do-capitulo-6-cybersecurity-essentials/2

// pega a div container do <pre>
const preCap6 = document.querySelector(".preview-text.fancy-scroll.pd-paragraph-sm");

// finalmente pega a tag <pre>
const preCap6Tratado = preCap6.firstChild;

// faz o primeiro tratamento do texto e splita nos enter (ou seja, cada linha do texto)
const preCap6TratadoSemN = preCap6Tratado.textContent.split("\n");

// transforma em array biDimensional agora splitando pelos espaços (para poder comparar no for)
const preCap6TratadoSemNeSemSpace = preCap6TratadoSemN.map(x => x.split(" "));

// Faz tratamento do array simples de 1 dimensão:

var regData = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;
var regUrl = /((?:https|http|ftp)?:\/\/)?([^\/,\s]+\.[^\/,\s]+?)(?=\/|,|\s|$|\?|#)(.*)/gm;

var novoArrayTratado = [];

for (let i = 0; i < preCap6TratadoSemN.length; i++) {
    if (!preCap6TratadoSemN[i].match(regUrl) && !preCap6TratadoSemN[i].split(" ")[0].match(regData) || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Escolha") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "Refer")) {
        novoArrayTratado.push(preCap6TratadoSemN[i]);
    }
}

var novoArrayTratadoSemSpace = novoArrayTratado.map(x => x.split(" "));

// pega a maior linha contando a quantidade de string

var max = novoArrayTratado[0].length;
for (let i = 0; i < novoArrayTratado.length; i++) {
    if (novoArrayTratado[i].length >= max && novoArrayTratado[i] != 'as habilidades e o conhecimento apresentados no capítulo e de ajudá-lo a se preparar para o teste final. Você terá várias chances e a nota não') {
        max = novoArrayTratado[i].length;
        indexOfMax = novoArrayTratado[i];
    }
}

for (let i = 0; i < novoArrayTratadoSemSpace.length; i++) {
    if (novoArrayTratadoSemSpace[i] == "Resposta corretaResposta correta") {
        console.log("achou for de fora", i, x);
    }

    for (let x = 0; x < novoArrayTratadoSemSpace[i].length; x++) {
        if (novoArrayTratadoSemSpace[i][x] == "ptsPergunta") {
            console.log((String("=").repeat(max)));
            console.log((String(" ").repeat((max / 2) - (novoArrayTratado[i].length / 2))) + "[ " + novoArrayTratado[i] + " ]");
            console.log("");
            var cont = 1;
            while (!novoArrayTratadoSemSpace[i + cont][0] == "") {
                if(cont == 1){
			console.log(novoArrayTratadoSemSpace[i][x + 1] + "-) " + novoArrayTratado[i + cont]);
		}else {
			console.log(novoArrayTratado[i + cont]);
		}
                cont++;
            }
            console.log("");
            break;
            
        } else if (novoArrayTratadoSemSpace[i][x] == "" && !novoArrayTratadoSemSpace[i].find(r => r == "Correto!Correto!") && !novoArrayTratadoSemSpace[i].find(r => r == "Refer")) {
            console.log("[ ]" + novoArrayTratado[i]);
            break;
        } else if (novoArrayTratadoSemSpace[i][x] != "" && novoArrayTratadoSemSpace[i][x] == "Correto!Correto!") {
	    var respCorreta = "%c[X]" + novoArrayTratado[i].replace("Correto!Correto!", " ✓ Correto");
            console.log(respCorreta, "background: #FFF; color: #289b10");
            break;
        } else if (novoArrayTratadoSemSpace[i][x] == "Resposta corretaResposta correta") {
            console.log("achou for de dentro", i, x);
            break;
        } else if (novoArrayTratadoSemSpace[i][0] == "Refer") {
            console.log("");
            console.log((String(" ").repeat((max / 2) - (novoArrayTratado[i].length / 2))) + "%c- " +  novoArrayTratado[i], "background: #FFF; color: #f57c0b");
            break;
        }
    }
}


// ------------------------------------------------------------------

// Solução novactenaria: Tenta deixar o algoritmo generico para todos tipos de formatos de entrada, aqui ta dificil kkkk
// IMCOMPLETO!

// verifica qual o formato das respostas:
for (let i = 0; i < novoArrayTratado.length; i++) {
    if (novoArrayTratado[i].split(":")[0] == "The correct answer is") {
	console.log("---------------------------------------");
        console.log(novoArrayTratado[i]);
        for (let x = 0; x < novoArrayTratado.length; x++) {
            for (let y = 0; y < novoArrayTratado[x].length; y++) {
                if (novoArrayTratado[x][y] == "?" || novoArrayTratado[x][y] == "." || novoArrayTratado[x][y] == ":" && novoArrayTratado[x].split(":")[0] != "The correct answer is") {
                    console.log(novoArrayTratado[x]);
		    if (novoArrayTratado[x].split(" ")[0] == "Refer")
		    {
			    let cont = 1;
			    while (novoArrayTratado[x + cont].split(" ")[0] != "Refer" || ) {
				console.log(novoArrayTratado[x]);
			    	cont ++;
			    }
		    }
                }
            }
        }
    }
}


for (let i = 0; i < novoArrayTratado.length; i++) {
    if (novoArrayTratado[i].split(":")[0] == "The correct answer is" || novoArrayTratado[i].split(":")[0] == "The correct answer are" ) {
	console.log("---------------------------------------");
        console.log(novoArrayTratado[i]);
        for (let x = 0; x < novoArrayTratado.length; x++) {
            for (let y = 0; y < novoArrayTratado[x].length; y++) {
                console.log(novoArrayTratado[x]);
            }
        }
    }
}



// ------------------------------------------------------------------

// Solução dez: Ajusta filtro para o capitulo 02, porém não adiciona nada.
// objetivo: tornar genérico para todos tipos de entrada (aos poucos vou tratando rsrs) - 01/11/2022
// obs: mudanças realizadas no for filtro da criação do novoArrayTratado

// Melhor solução até agora (01/11/2022)
// Capitulo 01 (Total 11 Perguntas): https://www.passeidireto.com/arquivo/77326978/cybersecurity-essentials-capitulo-1-cisco 

// MELHORIAS PARA ESSE LINK:
// Capitulo 02/01: (Aqui: 14 com Total 20 Perguntas): https://www.passeidireto.com/arquivo/81552774/teste-do-capitulo-2-cybersecurity-essentials

// Capitulo 02/02: https://www.passeidireto.com/arquivo/81552774/teste-do-capitulo-2-cybersecurity-essentials/2
// Capitulo 03/01: https://www.passeidireto.com/arquivo/78199544/teste-do-capitulo-3-cybersecurity-essentials
// Capitulo 03/02: https://www.passeidireto.com/arquivo/78199544/teste-do-capitulo-3-cybersecurity-essentials/2
// Capitulo 04/01: https://www.passeidireto.com/arquivo/78039593/teste-do-capitulo-4-cybersecurity-essentials <-- EM TODOS SITES SOBRE QUEBROU UM POUCO
// Capitulo 04/02: https://www.passeidireto.com/arquivo/78039593/teste-do-capitulo-4-cybersecurity-essentials/2
// Capitulo 05/01: https://www.passeidireto.com/arquivo/76959266/teste-do-capitulo-5-cybersecurity-essentials
// Capitulo 05/02: https://www.passeidireto.com/arquivo/76959266/teste-do-capitulo-5-cybersecurity-essentials/2
// Capitulo 06/01: https://www.passeidireto.com/arquivo/76959267/teste-do-capitulo-6-cybersecurity-essentials
// Capitulo 06/02: https://www.passeidireto.com/arquivo/76959267/teste-do-capitulo-6-cybersecurity-essentials/2


// pega a div container do <pre>
const preCap6 = document.querySelector(".preview-text.fancy-scroll.pd-paragraph-sm");

// finalmente pega a tag <pre>
const preCap6Tratado = preCap6.firstChild;

// faz o primeiro tratamento do texto e splita nos enter (ou seja, cada linha do texto)
const preCap6TratadoSemN = preCap6Tratado.textContent.split("\n");

// transforma em array biDimensional agora splitando pelos espaços (para poder comparar no for)
const preCap6TratadoSemNeSemSpace = preCap6TratadoSemN.map(x => x.split(" "));

// Faz tratamento do array simples de 1 dimensão:

var regData = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;
var regUrl = /((?:https|http|ftp)?:\/\/)?([^\/,\s]+\.[^\/,\s]+?)(?=\/|,|\s|$|\?|#)(.*)/gm;

var novoArrayTratado = [];

for (let i = 0; i < preCap6TratadoSemN.length; i++) {
    if (!preCap6TratadoSemN[i].match(regUrl) && !preCap6TratadoSemN[i].split(" ")[0].match(regData) || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Escolha") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Es-colha") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Escolher") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "Refer")) {
        novoArrayTratado.push(preCap6TratadoSemN[i]);
    }
}

var novoArrayTratadoSemSpace = novoArrayTratado.map(x => x.split(" "));

// pega a maior linha contando a quantidade de string

var max = novoArrayTratado[0].length;
for (let i = 0; i < novoArrayTratado.length; i++) {
    if (novoArrayTratado[i].length >= max && novoArrayTratado[i] != 'as habilidades e o conhecimento apresentados no capítulo e de ajudá-lo a se preparar para o teste final. Você terá várias chances e a nota não') {
        max = novoArrayTratado[i].length;
        indexOfMax = novoArrayTratado[i];
    }
}

for (let i = 0; i < novoArrayTratadoSemSpace.length; i++) {
    if (novoArrayTratadoSemSpace[i] == "Resposta corretaResposta correta") {
        console.log("achou for de fora", i, x);
    }

    for (let x = 0; x < novoArrayTratadoSemSpace[i].length; x++) {
        if (novoArrayTratadoSemSpace[i][x] == "ptsPergunta") {
            console.log((String("=").repeat(max)));
            console.log((String(" ").repeat((max / 2) - (novoArrayTratado[i].length / 2))) + "[ " + novoArrayTratado[i] + " ]");
            console.log("");
            var cont = 1;
            while (!novoArrayTratadoSemSpace[i + cont][0] == "") {
                if(cont == 1){
			console.log(novoArrayTratadoSemSpace[i][x + 1] + "-) " + novoArrayTratado[i + cont]);
		}else {
			console.log(novoArrayTratado[i + cont]);
		}
                cont++;
            }
            console.log("");
            break;
            
        } else if (novoArrayTratadoSemSpace[i][x] == "" && !novoArrayTratadoSemSpace[i].find(r => r == "Correto!Correto!") && !novoArrayTratadoSemSpace[i].find(r => r == "Refer")) {
            console.log("[ ]" + novoArrayTratado[i]);
            break;
        } else if (novoArrayTratadoSemSpace[i][x] != "" && novoArrayTratadoSemSpace[i][x] == "Correto!Correto!") {
	    var respCorreta = "%c[X]" + novoArrayTratado[i].replace("Correto!Correto!", " ✓ Correto");
            console.log(respCorreta, "background: #FFF; color: #289b10");
            break;
        } else if (novoArrayTratadoSemSpace[i][x] == "Resposta corretaResposta correta") {
            console.log("achou for de dentro", i, x);
            break;
        } else if (novoArrayTratadoSemSpace[i][0] == "Refer") {
            console.log("");
            console.log((String(" ").repeat((max / 2) - (novoArrayTratado[i].length / 2))) + "%c- " +  novoArrayTratado[i], "background: #FFF; color: #f57c0b");
            break;
        }
    }
}


--------------------------------------------------------// Melhoria do algoritmo anterior para ficar mais genérico ainda ------------------------------------

// pega a div container do <pre>
const preCap6 = document.querySelector(".preview-text.fancy-scroll.pd-paragraph-sm");

// finalmente pega a tag <pre>
const preCap6Tratado = preCap6.firstChild;

// faz o primeiro tratamento do texto e splita nos enter (ou seja, cada linha do texto)
const preCap6TratadoSemN = preCap6Tratado.textContent.split("\n");

// transforma em array biDimensional agora splitando pelos espaços (para poder comparar no for)
const preCap6TratadoSemNeSemSpace = preCap6TratadoSemN.map(x => x.split(" "));

// Faz tratamento do array simples de 1 dimensão:

var regData = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;
var regUrl = /((?:https|http|ftp)?:\/\/)?([^\/,\s]+\.[^\/,\s]+?)(?=\/|,|\s|$|\?|#)(.*)/gm;

var novoArrayTratado = [];

for (let i = 0; i < preCap6TratadoSemN.length; i++) {
    if (!preCap6TratadoSemN[i].match(regUrl) && !preCap6TratadoSemN[i].split(" ")[0].match(regData) || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Escolha") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Es-colha") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Escolher") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "Refer")) {
        novoArrayTratado.push(preCap6TratadoSemN[i]);
    }
}

var novoArrayTratadoSemSpace = novoArrayTratado.map(x => x.split(" "));

// pega a maior linha contando a quantidade de string

var max = novoArrayTratado[0].length;
for (let i = 0; i < novoArrayTratado.length; i++) {
    if (novoArrayTratado[i].length >= max && novoArrayTratado[i] != 'as habilidades e o conhecimento apresentados no capítulo e de ajudá-lo a se preparar para o teste final. Você terá várias chances e a nota não') {
        max = novoArrayTratado[i].length;
        indexOfMax = novoArrayTratado[i];
    }
}

for (let i = 0; i < novoArrayTratadoSemSpace.length; i++) {
    if (novoArrayTratadoSemSpace[i] == "Resposta corretaResposta correta") {
        console.log("achou for de fora", i, x);
    }

    for (let x = 0; x < novoArrayTratadoSemSpace[i].length; x++) {
        if (novoArrayTratadoSemSpace[i][x] == "ptsPergunta") {
            console.log((String("=").repeat(max)));
            console.log((String(" ").repeat((max / 2) - (novoArrayTratado[i].length / 2))) + "[ " + novoArrayTratado[i] + " ]");
            console.log("");
            var cont = 1;
            while (!novoArrayTratadoSemSpace[i + cont][0] == "") {
                if (cont == 1) {
                    console.log(novoArrayTratadoSemSpace[i][x + 1] + "-) " + novoArrayTratado[i + cont]);
                } else {
                    console.log(novoArrayTratado[i + cont]);
                }
                cont++;
            }
            console.log("");
            break;

        } else if (novoArrayTratadoSemSpace[i][x] == "" && !novoArrayTratadoSemSpace[i].find(r => r == "Correto!Correto!") && !novoArrayTratadoSemSpace[i].find(r => r == "Refer") && !novoArrayTratadoSemSpace[i].find(r => r == "corretaesposta")) {
            console.log("[ ]" + novoArrayTratado[i].replace("ocê respondeuocê respondeu", "").trim() + ".");
            break;
        } else if (novoArrayTratadoSemSpace[i][x] != "" && novoArrayTratadoSemSpace[i][x] == "Correto!Correto!" || novoArrayTratadoSemSpace[i][x] == "corretaesposta") { 
            if (novoArrayTratadoSemSpace[i][x] == "Correto!Correto!") {
                var respCorreta = "%c[X]" + novoArrayTratado[i].replace("Correto!Correto!", " ✓ Correto");
            } else if (novoArrayTratadoSemSpace[i][x] == "corretaesposta") {
                var respCorreta = "%c[X]" + novoArrayTratado[i].replace("esposta corretaesposta correta", " ✓ Correto");
            }
            console.log(respCorreta, "background: #FFF; color: #289b10");
            break;
        } else if (novoArrayTratadoSemSpace[i][x] == "Resposta corretaResposta correta") {
            console.log("achou for de dentro", i, x);
            break;
        } else if (novoArrayTratadoSemSpace[i][0] == "Refer") {
            console.log("");
            console.log((String(" ").repeat((max / 2) - (novoArrayTratado[i].length / 2))) + "%c- " + novoArrayTratado[i], "background: #FFF; color: #f57c0b");
            break;
        }
    }
}



// --------------------------------------------------------------------------------------------------

// Solução onze: Ajusta filtro para o capitulo 04, porém não adiciona nada.
// objetivo: tornar genérico para todos tipos de entrada (aos poucos vou tratando rsrs) - 04/11/2022
// obs: mudanças realizadas no for principal, na logica flag do "Correto!Correto! aonde considera tambem para strings com essa flag "colada"

// Melhor solução até agora (04/11/2022) - Erros ocorrendo por falta de padrão nos retornos! a lógica esta boa! :D
// MELHORIAS PARA ESSE LINK:
// https://www.passeidireto.com/arquivo/78039593/teste-do-capitulo-4-cybersecurity-essentials

// Capitulo 02/01: https://www.passeidireto.com/arquivo/81552774/teste-do-capitulo-2-cybersecurity-essentials/ - OK
// Capitulo 02/02: https://www.passeidireto.com/arquivo/81552774/teste-do-capitulo-2-cybersecurity-essentials/2 - OK
// Capitulo 03/01: https://www.passeidireto.com/arquivo/78199544/teste-do-capitulo-3-cybersecurity-essentials - OK Porém não prita o (Escolher dois..)
// Capitulo 03/02: https://www.passeidireto.com/arquivo/78199544/teste-do-capitulo-3-cybersecurity-essentials/2 - OK Porém o mesmo problema anterior
// Capitulo 04/01: https://www.passeidireto.com/arquivo/78039593/teste-do-capitulo-4-cybersecurity-essentials - OK 100% corrigido :D
// Capitulo 04/02: https://www.passeidireto.com/arquivo/78039593/teste-do-capitulo-4-cybersecurity-essentials/2 - OK Porém buga a 17 <------ OBS (SEMPRE BUGOU, n apenas nessa versao!)
// Capitulo 05/01: https://www.passeidireto.com/arquivo/76959266/teste-do-capitulo-5-cybersecurity-essentials - OK Porém buga na 5 <-------- OBS (SEMPRE BUGOU, n apenas nessa versao!)
// Capitulo 05/02: https://www.passeidireto.com/arquivo/76959266/teste-do-capitulo-5-cybersecurity-essentials/2 - OK 
// Capitulo 06/01: https://www.passeidireto.com/arquivo/76959267/teste-do-capitulo-6-cybersecurity-essentials - OK
// Capitulo 06/02: https://www.passeidireto.com/arquivo/76959267/teste-do-capitulo-6-cybersecurity-essentials/2 - OK

// pega a div container do <pre>
const preCap6 = document.querySelector(".preview-text.fancy-scroll.pd-paragraph-sm");

// finalmente pega a tag <pre>
const preCap6Tratado = preCap6.firstChild;

// faz o primeiro tratamento do texto e splita nos enter (ou seja, cada linha do texto)
const preCap6TratadoSemN = preCap6Tratado.textContent.split("\n");

// transforma em array biDimensional agora splitando pelos espaços (para poder comparar no for)
const preCap6TratadoSemNeSemSpace = preCap6TratadoSemN.map(x => x.split(" "));

// Faz tratamento do array simples de 1 dimensão:

var regData = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;
var regUrl = /((?:https|http|ftp)?:\/\/)?([^\/,\s]+\.[^\/,\s]+?)(?=\/|,|\s|$|\?|#)(.*)/gm;

var novoArrayTratado = [];

for (let i = 0; i < preCap6TratadoSemN.length; i++) {
    if (!preCap6TratadoSemN[i].match(regUrl) && !preCap6TratadoSemN[i].split(" ")[0].match(regData) || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Escolha") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Es-colha") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Escolher") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "Refer")) {
        novoArrayTratado.push(preCap6TratadoSemN[i]);
    }
}

var novoArrayTratadoSemSpace = novoArrayTratado.map(x => x.split(" "));

// pega a maior linha contando a quantidade de string

var max = novoArrayTratado[0].length;
for (let i = 0; i < novoArrayTratado.length; i++) {
    if (novoArrayTratado[i].length >= max && novoArrayTratado[i] != 'as habilidades e o conhecimento apresentados no capítulo e de ajudá-lo a se preparar para o teste final. Você terá várias chances e a nota não') {
        max = novoArrayTratado[i].length;
        indexOfMax = novoArrayTratado[i];
    }
}

for (let i = 0; i < novoArrayTratadoSemSpace.length; i++) {
    if (novoArrayTratadoSemSpace[i] == "Resposta corretaResposta correta") {
        console.log("achou for de fora", i, x);
    }

    for (let x = 0; x < novoArrayTratadoSemSpace[i].length; x++) {
        if (novoArrayTratadoSemSpace[i][x] == "ptsPergunta") {
            console.log((String("=").repeat(max)));
            console.log((String(" ").repeat((max / 2) - (novoArrayTratado[i].length / 2))) + "[ " + novoArrayTratado[i] + " ]");
            console.log("");
            var cont = 1;
            while (!novoArrayTratadoSemSpace[i + cont][0] == "") {
                if (cont == 1) {
                    console.log(novoArrayTratadoSemSpace[i][x + 1] + "-) " + novoArrayTratado[i + cont]);
                } else {
                    console.log(novoArrayTratado[i + cont]);
                }
                cont++;
            }
            console.log("");
            break;

        } else if (novoArrayTratadoSemSpace[i][x] == "" && !novoArrayTratadoSemSpace[i].find(r => r == "Correto!Correto!") && !novoArrayTratadoSemSpace[i].find(r => r == "Refer") && !novoArrayTratadoSemSpace[i].find(r => r == "corretaesposta") && !novoArrayTratadoSemSpace[i].find(r => r.split("!").find(h => h == "Correto"))) { 
		if (novoArrayTratado[i] != null && novoArrayTratado[i] != "" && novoArrayTratado[i] != " ") {
			console.log("[ ]" + novoArrayTratado[i].replace("ocê respondeuocê respondeu", "").trim() + ".");
		}
            
            break;
        } else if (novoArrayTratadoSemSpace[i][x] != "" && novoArrayTratadoSemSpace[i][x] == "Correto!Correto!" || novoArrayTratadoSemSpace[i][x] == "corretaesposta" || novoArrayTratadoSemSpace[i][x].split("!").find(h => h == "Correto")) { 
            if (novoArrayTratadoSemSpace[i][x] == "Correto!Correto!") {
                var respCorreta = "%c[X]" + novoArrayTratado[i].replace("Correto!Correto!", " ✓ Correto");
            } else if (novoArrayTratadoSemSpace[i][x] == "corretaesposta") {
                var respCorreta = "%c[X]" + novoArrayTratado[i].replace("esposta corretaesposta correta", " ✓ Correto");
            }
            console.log(respCorreta, "background: #FFF; color: #289b10");
            break;
        } else if (novoArrayTratadoSemSpace[i][x] == "Resposta corretaResposta correta") {
            console.log("achou for de dentro", i, x);
            break;
        } else if (novoArrayTratadoSemSpace[i][0] == "Refer") {
            console.log("");
            console.log((String(" ").repeat((max / 2) - (novoArrayTratado[i].length / 2))) + "%c- " + novoArrayTratado[i], "background: #FFF; color: #f57c0b");
            break;
        }
    }
}


// -------------------------------------------------------------------------------------------------- AQUI ESTA MEIO ÃHM ainda...

// pega a div container do <pre>
const preCap6 = document.querySelector(".preview-text.fancy-scroll.pd-paragraph-sm");

// finalmente pega a tag <pre>
const preCap6Tratado = preCap6.firstChild;

// faz o primeiro tratamento do texto e splita nos enter (ou seja, cada linha do texto)
const preCap6TratadoSemN = preCap6Tratado.textContent.split("\n");

// transforma em array biDimensional agora splitando pelos espaços (para poder comparar no for)
const preCap6TratadoSemNeSemSpace = preCap6TratadoSemN.map(x => x.split(" "));

// Faz tratamento do array simples de 1 dimensão:

var regData = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;
var regUrl = /((?:https|http|ftp)?:\/\/)?([^\/,\s]+\.[^\/,\s]+?)(?=\/|,|\s|$|\?|#)(.*)/gm;

var novoArrayTratado = [];

for (let i = 0; i < preCap6TratadoSemN.length; i++) {
    if (!preCap6TratadoSemN[i].match(regUrl) && !preCap6TratadoSemN[i].split(" ")[0].match(regData) || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Escolha") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Es-colha") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Escolher") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "Refer" || preCap6TratadoSemN[i].split(" ").find(res => res.split(".") == ")"))) {
        novoArrayTratado.push(preCap6TratadoSemN[i]);
    }
}

var novoArrayTratadoSemSpace = novoArrayTratado.map(x => x.split(" "));

// pega a maior linha contando a quantidade de string

var max = novoArrayTratado[0].length;
for (let i = 0; i < novoArrayTratado.length; i++) {
    if (novoArrayTratado[i].length >= max && novoArrayTratado[i] != 'as habilidades e o conhecimento apresentados no capítulo e de ajudá-lo a se preparar para o teste final. Você terá várias chances e a nota não') {
        max = novoArrayTratado[i].length;
        indexOfMax = novoArrayTratado[i];
    }
}

for (let i = 0; i < novoArrayTratadoSemSpace.length; i++) {
    if (novoArrayTratadoSemSpace[i] == "Resposta corretaResposta correta") {
        console.log("achou for de fora", i, x);
    }

    for (let x = 0; x < novoArrayTratadoSemSpace[i].length; x++) {
        if (novoArrayTratadoSemSpace[i][x] == "ptsPergunta") {
            console.log((String("=").repeat(max)));
            console.log((String(" ").repeat((max / 2) - (novoArrayTratado[i].length / 2))) + "[ " + novoArrayTratado[i] + " ]");
            console.log("");
            var cont = 1;
            while (!novoArrayTratadoSemSpace[i + cont][0] == "") {
                if (cont == 1) {
                    console.log(novoArrayTratadoSemSpace[i][x + 1] + "-) " + novoArrayTratado[i + cont]);
                } else {
                    console.log(novoArrayTratado[i + cont]);
                }
                cont++;
            }
            console.log("");
            break;

        } else if (novoArrayTratadoSemSpace[i][x] == "" && !novoArrayTratadoSemSpace[i].find(r => r == "Correto!Correto!") && !novoArrayTratadoSemSpace[i].find(r => r == "Refer") && !novoArrayTratadoSemSpace[i].find(r => r == "corretaesposta") && !novoArrayTratadoSemSpace[i].find(r => r.split("!").find(h => h == "Correto"))) { 
		if (novoArrayTratado[i] != null && novoArrayTratado[i] != "" && novoArrayTratado[i] != " ") {
			console.log("[ ]" + novoArrayTratado[i].replace("ocê respondeuocê respondeu", "").trim() + ".");
		}
            
            break;
        } else if (novoArrayTratadoSemSpace[i][x] != "" && novoArrayTratadoSemSpace[i][x] == "Correto!Correto!" || novoArrayTratadoSemSpace[i][x] == "corretaesposta" || novoArrayTratadoSemSpace[i][x].split("!").find(h => h == "Correto")) { 
            if (novoArrayTratadoSemSpace[i][x] == "Correto!Correto!") {
                var respCorreta = "%c[X]" + novoArrayTratado[i].replace("Correto!Correto!", " ✓ Correto");
            } else if (novoArrayTratadoSemSpace[i][x] == "corretaesposta") {
                var respCorreta = "%c[X]" + novoArrayTratado[i].replace("esposta corretaesposta correta", " ✓ Correto");
            }
            console.log(respCorreta, "background: #FFF; color: #289b10");
            break;
        } else if (novoArrayTratadoSemSpace[i][x] == "Resposta corretaResposta correta") {
            console.log("achou for de dentro", i, x);
            break;
        } else if (novoArrayTratadoSemSpace[i][0] == "Refer") {
            console.log("");
            console.log((String(" ").repeat((max / 2) - (novoArrayTratado[i].length / 2))) + "%c- " + novoArrayTratado[i], "background: #FFF; color: #f57c0b");
            break;
        }

    }
}

--------------------------------------------------------// respostas sem tratamento // -------------------------------------------------------------------------------------------------------



Null área


// -------------------------------------------------------------------------------------------------- AQUI ESTA MEIO ÃHM ainda...

// pega a div container do <pre>
const preCap6 = document.querySelector(".preview-text.fancy-scroll.pd-paragraph-sm");

// finalmente pega a tag <pre>
const preCap6Tratado = preCap6.firstChild;

// faz o primeiro tratamento do texto e splita nos enter (ou seja, cada linha do texto)
const preCap6TratadoSemN = preCap6Tratado.textContent.split("\n");

// transforma em array biDimensional agora splitando pelos espaços (para poder comparar no for)
const preCap6TratadoSemNeSemSpace = preCap6TratadoSemN.map(x => x.split(" "));

// Faz tratamento do array simples de 1 dimensão:

var regData = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;
var regUrl = /((?:https|http|ftp)?:\/\/)?([^\/,\s]+\.[^\/,\s]+?)(?=\/|,|\s|$|\?|#)(.*)/gm;

var novoArrayTratado = [];

for (let i = 0; i < preCap6TratadoSemN.length; i++) {
    if (!preCap6TratadoSemN[i].match(regUrl) && !preCap6TratadoSemN[i].split(" ")[0].match(regData) || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Escolha") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Es-colha") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Escolher") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "Refer" || preCap6TratadoSemN[i].split(" ").find(res => res.split(".") == ")"))) {
        novoArrayTratado.push(preCap6TratadoSemN[i]);
    }
}

var novoArrayTratadoSemSpace = novoArrayTratado.map(x => x.split(" "));

// pega a maior linha contando a quantidade de string

var max = novoArrayTratado[0].length;
for (let i = 0; i < novoArrayTratado.length; i++) {
    if (novoArrayTratado[i].length >= max && novoArrayTratado[i] != 'as habilidades e o conhecimento apresentados no capítulo e de ajudá-lo a se preparar para o teste final. Você terá várias chances e a nota não') {
        max = novoArrayTratado[i].length;
        indexOfMax = novoArrayTratado[i];
    }
}

for (let i = 0; i < novoArrayTratadoSemSpace.length; i++) {
    if (novoArrayTratadoSemSpace[i] == "Resposta corretaResposta correta") {
        console.log("achou for de fora", i, x);
    }

    for (let x = 0; x < novoArrayTratadoSemSpace[i].length; x++) {
        if (novoArrayTratadoSemSpace[i][x] == "ptsPergunta") {
            console.log((String("=").repeat(max)));
            console.log((String(" ").repeat((max / 2) - (novoArrayTratado[i].length / 2))) + "[ " + novoArrayTratado[i] + " ]");
            console.log("");
            var cont = 1;
            while (!novoArrayTratadoSemSpace[i + cont][0] == "") {
                if (cont == 1) {
                    console.log(novoArrayTratadoSemSpace[i][x + 1] + "-) " + novoArrayTratado[i + cont]);
                } else {
                    console.log(novoArrayTratado[i + cont]);
                }
                cont++;
            }
            console.log("");
            break;

        } else if (novoArrayTratadoSemSpace[i][x] == "" && !novoArrayTratadoSemSpace[i].find(r => r == "Correto!Correto!") && !novoArrayTratadoSemSpace[i].find(r => r == "Refer") && !novoArrayTratadoSemSpace[i].find(r => r == "corretaesposta") && !novoArrayTratadoSemSpace[i].find(r => r.split("!").find(h => h == "Correto"))) { 
		if (novoArrayTratado[i] != null && novoArrayTratado[i] != "" && novoArrayTratado[i] != " ") {
			console.log("[ ]" + novoArrayTratado[i].replace("ocê respondeuocê respondeu", "").trim() + ".");
		}
            
            break;
        } else if (novoArrayTratadoSemSpace[i][x] != "" && novoArrayTratadoSemSpace[i][x] == "Correto!Correto!" || novoArrayTratadoSemSpace[i][x] == "corretaesposta" || novoArrayTratadoSemSpace[i][x].split("!").find(h => h == "Correto")) { 
            if (novoArrayTratadoSemSpace[i][x] == "Correto!Correto!") {
                var respCorreta = "%c[X]" + novoArrayTratado[i].replace("Correto!Correto!", " ✓ Correto");
            } else if (novoArrayTratadoSemSpace[i][x] == "corretaesposta") {
                var respCorreta = "%c[X]" + novoArrayTratado[i].replace("esposta corretaesposta correta", " ✓ Correto");
            }
            console.log(respCorreta, "background: #FFF; color: #289b10");
            break;
        } else if (novoArrayTratadoSemSpace[i][x] == "Resposta corretaResposta correta") {
            console.log("achou for de dentro", i, x);
            break;
        } else if (novoArrayTratadoSemSpace[i][0] == "Refer") {
            console.log("");
            console.log((String(" ").repeat((max / 2) - (novoArrayTratado[i].length / 2))) + "%c- " + novoArrayTratado[i], "background: #FFF; color: #f57c0b");
            break;
        }

    }
}

--------------------------------------------------------// respostas sem tratamento // -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------- AQUI ESTA MEIO ÃHM ainda...

// pega a div container do <pre>
const preCap6 = document.querySelector(".preview-text.fancy-scroll.pd-paragraph-sm");

// finalmente pega a tag <pre>
const preCap6Tratado = preCap6.firstChild;

// faz o primeiro tratamento do texto e splita nos enter (ou seja, cada linha do texto)
const preCap6TratadoSemN = preCap6Tratado.textContent.split("\n");

// transforma em array biDimensional agora splitando pelos espaços (para poder comparar no for)
const preCap6TratadoSemNeSemSpace = preCap6TratadoSemN.map(x => x.split(" "));

// Faz tratamento do array simples de 1 dimensão:

var regData = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;
var regUrl = /((?:https|http|ftp)?:\/\/)?([^\/,\s]+\.[^\/,\s]+?)(?=\/|,|\s|$|\?|#)(.*)/gm;

var novoArrayTratado = [];

for (let i = 0; i < preCap6TratadoSemN.length; i++) {
    if (!preCap6TratadoSemN[i].match(regUrl) && !preCap6TratadoSemN[i].split(" ")[0].match(regData) || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Escolha") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Es-colha") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Escolher") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "Refer" || preCap6TratadoSemN[i].split(" ").find(res => res.split(".") == ")"))) {
        novoArrayTratado.push(preCap6TratadoSemN[i]);
    }
}

var novoArrayTratadoSemSpace = novoArrayTratado.map(x => x.split(" "));

// pega a maior linha contando a quantidade de string

var max = novoArrayTratado[0].length;
for (let i = 0; i < novoArrayTratado.length; i++) {
    if (novoArrayTratado[i].length >= max && novoArrayTratado[i] != 'as habilidades e o conhecimento apresentados no capítulo e de ajudá-lo a se preparar para o teste final. Você terá várias chances e a nota não') {
        max = novoArrayTratado[i].length;
        indexOfMax = novoArrayTratado[i];
    }
}

for (let i = 0; i < novoArrayTratadoSemSpace.length; i++) {
    if (novoArrayTratadoSemSpace[i] == "Resposta corretaResposta correta") {
        console.log("achou for de fora", i, x);
    }

    for (let x = 0; x < novoArrayTratadoSemSpace[i].length; x++) {
        if (novoArrayTratadoSemSpace[i][x] == "ptsPergunta") {
            console.log((String("=").repeat(max)));
            console.log((String(" ").repeat((max / 2) - (novoArrayTratado[i].length / 2))) + "[ " + novoArrayTratado[i] + " ]");
            console.log("");
            var cont = 1;
            while (!novoArrayTratadoSemSpace[i + cont][0] == "") {
                if (cont == 1) {
                    console.log(novoArrayTratadoSemSpace[i][x + 1] + "-) " + novoArrayTratado[i + cont]);
                } else {
                    console.log(novoArrayTratado[i + cont]);
                }
                cont++;
            }
            console.log("");
            break;

        } else if (novoArrayTratadoSemSpace[i][x] == "" && !novoArrayTratadoSemSpace[i].find(r => r == "Correto!Correto!") && !novoArrayTratadoSemSpace[i].find(r => r == "Refer") && !novoArrayTratadoSemSpace[i].find(r => r == "corretaesposta") && !novoArrayTratadoSemSpace[i].find(r => r.split("!").find(h => h == "Correto"))) { 
		if (novoArrayTratado[i] != null && novoArrayTratado[i] != "" && novoArrayTratado[i] != " ") {
			console.log("[ ]" + novoArrayTratado[i].replace("ocê respondeuocê respondeu", "").trim() + ".");
		}
            
            break;
        } else if (novoArrayTratadoSemSpace[i][x] != "" && novoArrayTratadoSemSpace[i][x] == "Correto!Correto!" || novoArrayTratadoSemSpace[i][x] == "corretaesposta" || novoArrayTratadoSemSpace[i][x].split("!").find(h => h == "Correto")) { 
            if (novoArrayTratadoSemSpace[i][x] == "Correto!Correto!") {
                var respCorreta = "%c[X]" + novoArrayTratado[i].replace("Correto!Correto!", " ✓ Correto");
            } else if (novoArrayTratadoSemSpace[i][x] == "corretaesposta") {
                var respCorreta = "%c[X]" + novoArrayTratado[i].replace("esposta corretaesposta correta", " ✓ Correto");
            }
            console.log(respCorreta, "background: #FFF; color: #289b10");
            break;
        } else if (novoArrayTratadoSemSpace[i][x] == "Resposta corretaResposta correta") {
            console.log("achou for de dentro", i, x);
            break;
        } else if (novoArrayTratadoSemSpace[i][0] == "Refer") {
            console.log("");
            console.log((String(" ").repeat((max / 2) - (novoArrayTratado[i].length / 2))) + "%c- " + novoArrayTratado[i], "background: #FFF; color: #f57c0b");
            break;
        }

    }
}

--------------------------------------------------------// respostas sem tratamento // -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------- AQUI ESTA MEIO ÃHM ainda...

// pega a div container do <pre>
const preCap6 = document.querySelector(".preview-text.fancy-scroll.pd-paragraph-sm");

// finalmente pega a tag <pre>
const preCap6Tratado = preCap6.firstChild;

// faz o primeiro tratamento do texto e splita nos enter (ou seja, cada linha do texto)
const preCap6TratadoSemN = preCap6Tratado.textContent.split("\n");

// transforma em array biDimensional agora splitando pelos espaços (para poder comparar no for)
const preCap6TratadoSemNeSemSpace = preCap6TratadoSemN.map(x => x.split(" "));

// Faz tratamento do array simples de 1 dimensão:

var regData = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;
var regUrl = /((?:https|http|ftp)?:\/\/)?([^\/,\s]+\.[^\/,\s]+?)(?=\/|,|\s|$|\?|#)(.*)/gm;

var novoArrayTratado = [];

for (let i = 0; i < preCap6TratadoSemN.length; i++) {
    if (!preCap6TratadoSemN[i].match(regUrl) && !preCap6TratadoSemN[i].split(" ")[0].match(regData) || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Escolha") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Es-colha") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Escolher") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "Refer" || preCap6TratadoSemN[i].split(" ").find(res => res.split(".") == ")"))) {
        novoArrayTratado.push(preCap6TratadoSemN[i]);
    }
}

var novoArrayTratadoSemSpace = novoArrayTratado.map(x => x.split(" "));

// pega a maior linha contando a quantidade de string

var max = novoArrayTratado[0].length;
for (let i = 0; i < novoArrayTratado.length; i++) {
    if (novoArrayTratado[i].length >= max && novoArrayTratado[i] != 'as habilidades e o conhecimento apresentados no capítulo e de ajudá-lo a se preparar para o teste final. Você terá várias chances e a nota não') {
        max = novoArrayTratado[i].length;
        indexOfMax = novoArrayTratado[i];
    }
}

for (let i = 0; i < novoArrayTratadoSemSpace.length; i++) {
    if (novoArrayTratadoSemSpace[i] == "Resposta corretaResposta correta") {
        console.log("achou for de fora", i, x);
    }

    for (let x = 0; x < novoArrayTratadoSemSpace[i].length; x++) {
        if (novoArrayTratadoSemSpace[i][x] == "ptsPergunta") {
            console.log((String("=").repeat(max)));
            console.log((String(" ").repeat((max / 2) - (novoArrayTratado[i].length / 2))) + "[ " + novoArrayTratado[i] + " ]");
            console.log("");
            var cont = 1;
            while (!novoArrayTratadoSemSpace[i + cont][0] == "") {
                if (cont == 1) {
                    console.log(novoArrayTratadoSemSpace[i][x + 1] + "-) " + novoArrayTratado[i + cont]);
                } else {
                    console.log(novoArrayTratado[i + cont]);
                }
                cont++;
            }
            console.log("");
            break;

        } else if (novoArrayTratadoSemSpace[i][x] == "" && !novoArrayTratadoSemSpace[i].find(r => r == "Correto!Correto!") && !novoArrayTratadoSemSpace[i].find(r => r == "Refer") && !novoArrayTratadoSemSpace[i].find(r => r == "corretaesposta") && !novoArrayTratadoSemSpace[i].find(r => r.split("!").find(h => h == "Correto"))) { 
		if (novoArrayTratado[i] != null && novoArrayTratado[i] != "" && novoArrayTratado[i] != " ") {
			console.log("[ ]" + novoArrayTratado[i].replace("ocê respondeuocê respondeu", "").trim() + ".");
		}
            
            break;
        } else if (novoArrayTratadoSemSpace[i][x] != "" && novoArrayTratadoSemSpace[i][x] == "Correto!Correto!" || novoArrayTratadoSemSpace[i][x] == "corretaesposta" || novoArrayTratadoSemSpace[i][x].split("!").find(h => h == "Correto")) { 
            if (novoArrayTratadoSemSpace[i][x] == "Correto!Correto!") {
                var respCorreta = "%c[X]" + novoArrayTratado[i].replace("Correto!Correto!", " ✓ Correto");
            } else if (novoArrayTratadoSemSpace[i][x] == "corretaesposta") {
                var respCorreta = "%c[X]" + novoArrayTratado[i].replace("esposta corretaesposta correta", " ✓ Correto");
            }
            console.log(respCorreta, "background: #FFF; color: #289b10");
            break;
        } else if (novoArrayTratadoSemSpace[i][x] == "Resposta corretaResposta correta") {
            console.log("achou for de dentro", i, x);
            break;
        } else if (novoArrayTratadoSemSpace[i][0] == "Refer") {
            console.log("");
            console.log((String(" ").repeat((max / 2) - (novoArrayTratado[i].length / 2))) + "%c- " + novoArrayTratado[i], "background: #FFF; color: #f57c0b");
            break;
        }

    }
}

--------------------------------------------------------// respostas sem tratamento // -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------- AQUI ESTA MEIO ÃHM ainda...

// pega a div container do <pre>
const preCap6 = document.querySelector(".preview-text.fancy-scroll.pd-paragraph-sm");

// finalmente pega a tag <pre>
const preCap6Tratado = preCap6.firstChild;

// faz o primeiro tratamento do texto e splita nos enter (ou seja, cada linha do texto)
const preCap6TratadoSemN = preCap6Tratado.textContent.split("\n");

// transforma em array biDimensional agora splitando pelos espaços (para poder comparar no for)
const preCap6TratadoSemNeSemSpace = preCap6TratadoSemN.map(x => x.split(" "));

// Faz tratamento do array simples de 1 dimensão:

var regData = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;
var regUrl = /((?:https|http|ftp)?:\/\/)?([^\/,\s]+\.[^\/,\s]+?)(?=\/|,|\s|$|\?|#)(.*)/gm;

var novoArrayTratado = [];

for (let i = 0; i < preCap6TratadoSemN.length; i++) {
    if (!preCap6TratadoSemN[i].match(regUrl) && !preCap6TratadoSemN[i].split(" ")[0].match(regData) || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Escolha") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Es-colha") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Escolher") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "Refer" || preCap6TratadoSemN[i].split(" ").find(res => res.split(".") == ")"))) {
        novoArrayTratado.push(preCap6TratadoSemN[i]);
    }
}

var novoArrayTratadoSemSpace = novoArrayTratado.map(x => x.split(" "));

// pega a maior linha contando a quantidade de string

var max = novoArrayTratado[0].length;
for (let i = 0; i < novoArrayTratado.length; i++) {
    if (novoArrayTratado[i].length >= max && novoArrayTratado[i] != 'as habilidades e o conhecimento apresentados no capítulo e de ajudá-lo a se preparar para o teste final. Você terá várias chances e a nota não') {
        max = novoArrayTratado[i].length;
        indexOfMax = novoArrayTratado[i];
    }
}

for (let i = 0; i < novoArrayTratadoSemSpace.length; i++) {
    if (novoArrayTratadoSemSpace[i] == "Resposta corretaResposta correta") {
        console.log("achou for de fora", i, x);
    }

    for (let x = 0; x < novoArrayTratadoSemSpace[i].length; x++) {
        if (novoArrayTratadoSemSpace[i][x] == "ptsPergunta") {
            console.log((String("=").repeat(max)));
            console.log((String(" ").repeat((max / 2) - (novoArrayTratado[i].length / 2))) + "[ " + novoArrayTratado[i] + " ]");
            console.log("");
            var cont = 1;
            while (!novoArrayTratadoSemSpace[i + cont][0] == "") {
                if (cont == 1) {
                    console.log(novoArrayTratadoSemSpace[i][x + 1] + "-) " + novoArrayTratado[i + cont]);
                } else {
                    console.log(novoArrayTratado[i + cont]);
                }
                cont++;
            }
            console.log("");
            break;

        } else if (novoArrayTratadoSemSpace[i][x] == "" && !novoArrayTratadoSemSpace[i].find(r => r == "Correto!Correto!") && !novoArrayTratadoSemSpace[i].find(r => r == "Refer") && !novoArrayTratadoSemSpace[i].find(r => r == "corretaesposta") && !novoArrayTratadoSemSpace[i].find(r => r.split("!").find(h => h == "Correto"))) { 
		if (novoArrayTratado[i] != null && novoArrayTratado[i] != "" && novoArrayTratado[i] != " ") {
			console.log("[ ]" + novoArrayTratado[i].replace("ocê respondeuocê respondeu", "").trim() + ".");
		}
            
            break;
        } else if (novoArrayTratadoSemSpace[i][x] != "" && novoArrayTratadoSemSpace[i][x] == "Correto!Correto!" || novoArrayTratadoSemSpace[i][x] == "corretaesposta" || novoArrayTratadoSemSpace[i][x].split("!").find(h => h == "Correto")) { 
            if (novoArrayTratadoSemSpace[i][x] == "Correto!Correto!") {
                var respCorreta = "%c[X]" + novoArrayTratado[i].replace("Correto!Correto!", " ✓ Correto");
            } else if (novoArrayTratadoSemSpace[i][x] == "corretaesposta") {
                var respCorreta = "%c[X]" + novoArrayTratado[i].replace("esposta corretaesposta correta", " ✓ Correto");
            }
            console.log(respCorreta, "background: #FFF; color: #289b10");
            break;
        } else if (novoArrayTratadoSemSpace[i][x] == "Resposta corretaResposta correta") {
            console.log("achou for de dentro", i, x);
            break;
        } else if (novoArrayTratadoSemSpace[i][0] == "Refer") {
            console.log("");
            console.log((String(" ").repeat((max / 2) - (novoArrayTratado[i].length / 2))) + "%c- " + novoArrayTratado[i], "background: #FFF; color: #f57c0b");
            break;
        }

    }
}

--------------------------------------------------------// respostas sem tratamento // -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------- AQUI ESTA MEIO ÃHM ainda...

// pega a div container do <pre>
const preCap6 = document.querySelector(".preview-text.fancy-scroll.pd-paragraph-sm");

// finalmente pega a tag <pre>
const preCap6Tratado = preCap6.firstChild;

// faz o primeiro tratamento do texto e splita nos enter (ou seja, cada linha do texto)
const preCap6TratadoSemN = preCap6Tratado.textContent.split("\n");

// transforma em array biDimensional agora splitando pelos espaços (para poder comparar no for)
const preCap6TratadoSemNeSemSpace = preCap6TratadoSemN.map(x => x.split(" "));

// Faz tratamento do array simples de 1 dimensão:

var regData = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;
var regUrl = /((?:https|http|ftp)?:\/\/)?([^\/,\s]+\.[^\/,\s]+?)(?=\/|,|\s|$|\?|#)(.*)/gm;

var novoArrayTratado = [];

for (let i = 0; i < preCap6TratadoSemN.length; i++) {
    if (!preCap6TratadoSemN[i].match(regUrl) && !preCap6TratadoSemN[i].split(" ")[0].match(regData) || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Escolha") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Es-colha") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Escolher") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "Refer" || preCap6TratadoSemN[i].split(" ").find(res => res.split(".") == ")"))) {
        novoArrayTratado.push(preCap6TratadoSemN[i]);
    }
}

var novoArrayTratadoSemSpace = novoArrayTratado.map(x => x.split(" "));

// pega a maior linha contando a quantidade de string

var max = novoArrayTratado[0].length;
for (let i = 0; i < novoArrayTratado.length; i++) {
    if (novoArrayTratado[i].length >= max && novoArrayTratado[i] != 'as habilidades e o conhecimento apresentados no capítulo e de ajudá-lo a se preparar para o teste final. Você terá várias chances e a nota não') {
        max = novoArrayTratado[i].length;
        indexOfMax = novoArrayTratado[i];
    }
}

for (let i = 0; i < novoArrayTratadoSemSpace.length; i++) {
    if (novoArrayTratadoSemSpace[i] == "Resposta corretaResposta correta") {
        console.log("achou for de fora", i, x);
    }

    for (let x = 0; x < novoArrayTratadoSemSpace[i].length; x++) {
        if (novoArrayTratadoSemSpace[i][x] == "ptsPergunta") {
            console.log((String("=").repeat(max)));
            console.log((String(" ").repeat((max / 2) - (novoArrayTratado[i].length / 2))) + "[ " + novoArrayTratado[i] + " ]");
            console.log("");
            var cont = 1;
            while (!novoArrayTratadoSemSpace[i + cont][0] == "") {
                if (cont == 1) {
                    console.log(novoArrayTratadoSemSpace[i][x + 1] + "-) " + novoArrayTratado[i + cont]);
                } else {
                    console.log(novoArrayTratado[i + cont]);
                }
                cont++;
            }
            console.log("");
            break;

        } else if (novoArrayTratadoSemSpace[i][x] == "" && !novoArrayTratadoSemSpace[i].find(r => r == "Correto!Correto!") && !novoArrayTratadoSemSpace[i].find(r => r == "Refer") && !novoArrayTratadoSemSpace[i].find(r => r == "corretaesposta") && !novoArrayTratadoSemSpace[i].find(r => r.split("!").find(h => h == "Correto"))) { 
		if (novoArrayTratado[i] != null && novoArrayTratado[i] != "" && novoArrayTratado[i] != " ") {
			console.log("[ ]" + novoArrayTratado[i].replace("ocê respondeuocê respondeu", "").trim() + ".");
		}
            
            break;
        } else if (novoArrayTratadoSemSpace[i][x] != "" && novoArrayTratadoSemSpace[i][x] == "Correto!Correto!" || novoArrayTratadoSemSpace[i][x] == "corretaesposta" || novoArrayTratadoSemSpace[i][x].split("!").find(h => h == "Correto")) { 
            if (novoArrayTratadoSemSpace[i][x] == "Correto!Correto!") {
                var respCorreta = "%c[X]" + novoArrayTratado[i].replace("Correto!Correto!", " ✓ Correto");
            } else if (novoArrayTratadoSemSpace[i][x] == "corretaesposta") {
                var respCorreta = "%c[X]" + novoArrayTratado[i].replace("esposta corretaesposta correta", " ✓ Correto");
            }
            console.log(respCorreta, "background: #FFF; color: #289b10");
            break;
        } else if (novoArrayTratadoSemSpace[i][x] == "Resposta corretaResposta correta") {
            console.log("achou for de dentro", i, x);
            break;
        } else if (novoArrayTratadoSemSpace[i][0] == "Refer") {
            console.log("");
            console.log((String(" ").repeat((max / 2) - (novoArrayTratado[i].length / 2))) + "%c- " + novoArrayTratado[i], "background: #FFF; color: #f57c0b");
            break;
        }

    }
}


--------------------------------------------------------// respostas sem tratamento // -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------- AQUI ESTA MEIO ÃHM ainda...

// pega a div container do <pre>
const preCap6 = document.querySelector(".preview-text.fancy-scroll.pd-paragraph-sm");

// finalmente pega a tag <pre>
const preCap6Tratado = preCap6.firstChild;

// faz o primeiro tratamento do texto e splita nos enter (ou seja, cada linha do texto)
const preCap6TratadoSemN = preCap6Tratado.textContent.split("\n");

// transforma em array biDimensional agora splitando pelos espaços (para poder comparar no for)
const preCap6TratadoSemNeSemSpace = preCap6TratadoSemN.map(x => x.split(" "));

// Faz tratamento do array simples de 1 dimensão:

var regData = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;
var regUrl = /((?:https|http|ftp)?:\/\/)?([^\/,\s]+\.[^\/,\s]+?)(?=\/|,|\s|$|\?|#)(.*)/gm;

var novoArrayTratado = [];

for (let i = 0; i < preCap6TratadoSemN.length; i++) {
    if (!preCap6TratadoSemN[i].match(regUrl) && !preCap6TratadoSemN[i].split(" ")[0].match(regData) || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Escolha") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Es-colha") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "(Escolher") || preCap6TratadoSemN[i].split(" ").find(res => res.split(" ") == "Refer" || preCap6TratadoSemN[i].split(" ").find(res => res.split(".") == ")"))) {
        novoArrayTratado.push(preCap6TratadoSemN[i]);
    }
}

var novoArrayTratadoSemSpace = novoArrayTratado.map(x => x.split(" "));

// pega a maior linha contando a quantidade de string

var max = novoArrayTratado[0].length;
for (let i = 0; i < novoArrayTratado.length; i++) {
    if (novoArrayTratado[i].length >= max && novoArrayTratado[i] != 'as habilidades e o conhecimento apresentados no capítulo e de ajudá-lo a se preparar para o teste final. Você terá várias chances e a nota não') {
        max = novoArrayTratado[i].length;
        indexOfMax = novoArrayTratado[i];
    }
}

for (let i = 0; i < novoArrayTratadoSemSpace.length; i++) {
    if (novoArrayTratadoSemSpace[i] == "Resposta corretaResposta correta") {
        console.log("achou for de fora", i, x);
    }

    for (let x = 0; x < novoArrayTratadoSemSpace[i].length; x++) {
        if (novoArrayTratadoSemSpace[i][x] == "ptsPergunta") {
            console.log((String("=").repeat(max)));
            console.log((String(" ").repeat((max / 2) - (novoArrayTratado[i].length / 2))) + "[ " + novoArrayTratado[i] + " ]");
            console.log("");
            var cont = 1;
            while (!novoArrayTratadoSemSpace[i + cont][0] == "") {
                if (cont == 1) {
                    console.log(novoArrayTratadoSemSpace[i][x + 1] + "-) " + novoArrayTratado[i + cont]);
                } else {
                    console.log(novoArrayTratado[i + cont]);
                }
                cont++;
            }
            console.log("");
            break;

        } else if (novoArrayTratadoSemSpace[i][x] == "" && !novoArrayTratadoSemSpace[i].find(r => r == "Correto!Correto!") && !novoArrayTratadoSemSpace[i].find(r => r == "Refer") && !novoArrayTratadoSemSpace[i].find(r => r == "corretaesposta") && !novoArrayTratadoSemSpace[i].find(r => r.split("!").find(h => h == "Correto"))) { 
		if (novoArrayTratado[i] != null && novoArrayTratado[i] != "" && novoArrayTratado[i] != " ") {
			console.log("[ ]" + novoArrayTratado[i].replace("ocê respondeuocê respondeu", "").trim() + ".");
		}
            
            break;
        } else if (novoArrayTratadoSemSpace[i][x] != "" && novoArrayTratadoSemSpace[i][x] == "Correto!Correto!" || novoArrayTratadoSemSpace[i][x] == "corretaesposta" || novoArrayTratadoSemSpace[i][x].split("!").find(h => h == "Correto")) { 
            if (novoArrayTratadoSemSpace[i][x] == "Correto!Correto!") {
                var respCorreta = "%c[X]" + novoArrayTratado[i].replace("Correto!Correto!", " ✓ Correto");
            } else if (novoArrayTratadoSemSpace[i][x] == "corretaesposta") {
                var respCorreta = "%c[X]" + novoArrayTratado[i].replace("esposta corretaesposta correta", " ✓ Correto");
            }
            console.log(respCorreta, "background: #FFF; color: #289b10");
            break;
        } else if (novoArrayTratadoSemSpace[i][x] == "Resposta corretaResposta correta") {
            console.log("achou for de dentro", i, x);
            break;
        } else if (novoArrayTratadoSemSpace[i][0] == "Refer") {
            console.log("");
            console.log((String(" ").repeat((max / 2) - (novoArrayTratado[i].length / 2))) + "%c- " + novoArrayTratado[i], "background: #FFF; color: #f57c0b");
            break;
        }

    }
}

