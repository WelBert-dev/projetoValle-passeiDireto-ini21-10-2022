// Projeto Valle
// Objetivos:

// Automatizar solução "passei direto" 

// Fluxo: pesquisar pelo titulo da solução > acessar automaticamente o "passei direto" e realizar o search > pegar a tag pre > tratar a lista e converter em array > realizar this >
// Finalizando: Gerar um .doc formatado com a pergunta e as respectivas respostas.


// Link alvo (para testes): https://www.passeidireto.com/arquivo/76959267/teste-do-capitulo-6-cybersecurity-essentials 

// Primeira solução:

const preCap6 = document.querySelector(".preview-text.fancy-scroll.pd-paragraph-sm");
const preCap6Tratado = preCap6.firstChild;
const preCap6TratadoSemN = preCap6Tratado.textContent.split("\n");
const preCap6TratadoSemNeSemSpace = preCap6TratadoSemN.map(x => x.split(" "));

for (let i = 0; i < preCap6TratadoSemNeSemSpace.length; i++) {
    for (let x = 0; x < preCap6TratadoSemNeSemSpace[i].length; x++) {
        if (preCap6TratadoSemNeSemSpace[i][x] == "Correto!Correto!") {
            console.log(preCap6TratadoSemNeSemSpace[i])
        }
    }
}

// melhoria no for:


for (let i = 0; i < preSemNeSemSpace.length; i++) {
    for (let x = 0; x < preSemNeSemSpace[i].length; x++) {
        if (preSemNeSemSpace[i][x] == "Correto!Correto!" || preSemNeSemSpace[i][x] == "ptsPergunta") {
            if (preSemNeSemSpace[i][x] == "ptsPergunta") {
                console.log(preSemNeSemSpace[i].join(" "))
            } else {
                console.log(console.log(preSemNeSemSpace[i].join(" ")))
            }
        }
    }
}

/\ gerando undefined porém funcional!


// formatado corrente:

for (let i = 0; i < preSemNeSemSpace.length; i++) {
    for (let x = 0; x < preSemNeSemSpace[i].length; x++) {
        if (preSemNeSemSpace[i][x] == "Correto!Correto!" || preSemNeSemSpace[i][x] == "ptsPergunta" || preSemNeSemSpace[i][x] == "Resposta corretaResposta correta") {
            if (preSemNeSemSpace[i][x] == "Resposta corretaResposta correta") {
                console.log("achou", i, x)
            }
            if (preSemNeSemSpace[i][x] == "ptsPergunta") {
                console.log(preSemNeSemSpace[i].join(" "))
            } else {
                console.log(preSemNeSemSpace[i].join(" "))
            }
        }
    }
}












--------------------------------------------------------// respostas sem tratamento // -------------------------------------------------------------------------------------------------------

02/05/2020 Teste do Capítulo 5: Cybersecurity Essentials
https://660925297.netacad.com/courses/983887/quizzes/8846278 1/20
Teste do Capítulo 5
Entrega Sem prazo Pontos 40 Perguntas 20 Limite de tempo Nenhum
Tentativas permitidas Sem limite
Instruções
Histórico de tentativas
Tentativa Tempo Pontuação
MAIS RECENTE Tentativa 1 17 minutos 38 de 40
Enviado 2 mai em 19:08
Esse teste abrange o conteúdo em Cybersecurity Essentials 1.0 Capítulo 5. Ele foi criado para fornecer uma oportunidade adicional de praticar
as habilidades e o conhecimento apresentados no capítulo e de ajudá-lo a se preparar para o teste final. Você terá várias chances e a nota não
será incluída no histórico de notas.
Há vários tipos de tarefas que podem estar disponíveis neste teste.
NOTE: Os testes permitem pontuação de crédito parcial em todos os tipos de itens para fomentar o aprendizado. Pontos em testes podem
também ser deduzidos por respostas incorretas.
Formulário 33937
Fazer o teste novamente
2 / 2 ptsPergunta 1
https://660925297.netacad.com/courses/983887/quizzes/8846278/history?version=1
https://660925297.netacad.com/courses/983887/quizzes/8846278/take?user_id=10873749
02/05/2020 Teste do Capítulo 5: Cybersecurity Essentials
https://660925297.netacad.com/courses/983887/quizzes/8846278 2/20
Qual método tenta todas as senhas possíveis até que uma correspondência seja encontrada?
 nuvem 
 dicionário 
 rainbow tables 
 criptográfico 
 data de nascimento 
 força bruta Correto!Correto!
Refer to curriculum topic: 5.1.1 
Dois métodos comuns para decifrar hashes são o dicionário e a força bruta. Depois de um tempo, o
método de força bruta sempre decifrará uma senha.
2 / 2 ptsPergunta 2
Um usuário está avaliando a infraestrutura de segurança de uma empresa e percebe que alguns sistemas
de autenticação não estão usando as melhores práticas relacionadas ao armazenamento de senhas. O
usuário consegue decifrar senhas muito rápido e acessar dados confidenciais. O usuário deseja apresentar
02/05/2020 Teste do Capítulo 5: Cybersecurity Essentials
https://660925297.netacad.com/courses/983887/quizzes/8846278 3/20
uma recomendação para a empresa sobre a implementação adequada de salting para evitar técnicas de
violação de senha. Quais são as três melhores práticas na implementação de salting? (Escolha três.)
 Um salt deve ser exclusivo para cada senha. Correto!Correto!
 Um salt deve ser exclusivo. Correto!Correto!
 Salts devem ser curtos. 
 Salts não são uma prática recomendada eficiente. 
 Um salt não deve ser reutilizado. Correto!Correto!
 O mesmo salt deve ser usado para cada senha. 
Refer to curriculum topic: 5.1.2 
O salting deve ser exclusivo e não reutilizado. Fazer o oposto fará com que senhas sejam quebradas
facilmente.
2 / 2 ptsPergunta 3
Uma violação recente em uma empresa foi atribuída à capacidade de um hacker de acessar o banco de
dados corporativo por meio do site da empresa, com o uso de dados malformados em um formulário de
02/05/2020 Teste do Capítulo 5: Cybersecurity Essentials
https://660925297.netacad.com/courses/983887/quizzes/8846278 4/20
login. Qual é o problema com o site da empresa?
 criptografia fraca 
 validação de entrada pobre Correto!Correto!
 falta de patches de sistema operacional 
 nomes de usuário ruins 
Refer to curriculum topic: 5.4.2 
A capacidade de transmitir dados malformados através de um site é uma forma de validação de
entrada pobre.
2 / 2 ptsPergunta 4
Identifique as três situações em que a função de criptografia pode ser aplicada. (Escolha três)
 PKI Correto!Correto!
 IPsec Correto!Correto!
 PPoE 
02/05/2020 Teste do Capítulo 5: Cybersecurity Essentials
https://660925297.netacad.com/courses/983887/quizzes/8846278 5/20
 DES 
 CHAP Correto!Correto!
 WPA 
Refer to curriculum topic: 5.1.1 
Três situações em que uma função hash pode ser usada são:
Quando o IPSec estiver sendo usado
Quando a autenticação por roteamento estiver ativada
Nas respostas de desafios dentro de protocolos, como PPP CHAP
Em contratos assinados digitalmente e certificados PKI
0 / 2 ptsPergunta 5
Qual é o processo passo a passo para criar uma assinatura digital?
 
Criar uma message digest; criptografar a digest com a chave pública do remetente e empacotar a mensagem, a
síntese criptografada e a chave pública juntos para assinar o documento.
02/05/2020 Teste do Capítulo 5: Cybersecurity Essentials
https://660925297.netacad.com/courses/983887/quizzes/8846278 6/20
 
Criar uma mensagem, criptografar a mensagem com um hash MD5 e enviar o pacote com uma chave pública. 
 
Criar um hash de SHA-1; criptografar o hash com a chave privada do remetente e empacotar a mensagem, o
hash criptografado e a chave pública juntos para o documento assinado.
Você respondeuVocê respondeu
 
Criar uma message digest; criptografar a digest com a chave privada do remetente e empacotar a mensagem, a
digest criptografada e a chave pública juntos a fim de assinar o documento.
Resposta corretaResposta correta
Refer to curriculum topic: 5.2.2 
Para criar uma assinatura digital, devem ser seguidas estas etapas:
1. A mensagem e a message digest são criadas.
2. A digest e chave privada são criptografadas.
3. A mensagem, a message digest criptografada e a chave pública são empacotadas para criar o
documento assinado.
2 / 2 ptsPergunta 6
02/05/2020 Teste do Capítulo 5: Cybersecurity Essentials
https://660925297.netacad.com/courses/983887/quizzes/8846278 7/20
Foi solicitado que um usuário implementasse o IPSec para conexões externas de entrada. O usuário
planeja usar SHA-1 como parte da implementação. O usuário deseja garantir a integridade e a
autenticidade da conexão. Qual ferramenta de segurança o usuário pode usar?
 MD5 
 HMAC Correto!Correto!
 SHA256 
 ISAKMP 
Refer to curriculum topic: 5.1.3 
O HMAC fornece uma chave secreta como recurso adicional para garantir a integridade e a
autenticação.
2 / 2 ptsPergunta 7
Um usuário baixa de um site um driver atualizado para uma placa de vídeo. Uma mensagem de aviso
aparece na tela dizendo que o driver não é aprovado. O que está faltando nesta parte do software?
02/05/2020 Teste do Capítulo 5: Cybersecurity Essentials
https://660925297.netacad.com/courses/983887/quizzes/8846278 8/20
 assinatura digital Correto!Correto!
 código fonte 
 reconhecimento de código 
 ID válida 
Refer to curriculum topic: 5.2.2 
A assinatura de código é um método de verificação de integridade do código
2 / 2 ptsPergunta 8
Quais são os três tipos de ataques que podem ser evitados ao utilizar salting? (Escolha três.)
 tabelas de pesquisa Correto!Correto!
 adivinhação 
 engenharia social 
 phishing 
02/05/2020 Teste do Capítulo 5: Cybersecurity Essentials
https://660925297.netacad.com/courses/983887/quizzes/8846278 9/20
 navegação bisbilhoteira 
 tabelas de pesquisa reversa Correto!Correto!
 rainbow tables Correto!Correto!
Refer to curriculum topic: 5.1.2 
O salting faz com que tabelas pré-calculadas não tenham efeito devido à sequência aleatória que é
usada.
2 / 2 ptsPergunta 9
Qual das opções é um ponto forte do uso de uma função de hash?
 Pode levar apenas uma mensagem de tamanho fixo. 
 Tem uma saída de tamanho variável. 
 Não é usado comumente na segurança. 
 Dois arquivos diferentes podem ser criados com a mesma saída. 
 É uma função unidirecional e não reversível. Correto!Correto!
02/05/2020 Teste do Capítulo 5: Cybersecurity Essentials
https://660925297.netacad.com/courses/983887/quizzes/8846278 10/20
Refer to curriculum topic: 5.1.1 
Compreender as propriedades de uma função hash mostra sua aplicabilidade como função
unidirecional, tamanho de entrada arbitrária e saída fixa.
2 / 2 ptsPergunta 10
Qual é o padrão para uma infraestrutura de chave pública gerenciar certificados digitais?
 NIST-SP800 
 x.509 Correto!Correto!
 PKI 
 x.503 
Refer to curriculum topic: 5.3.2 
O padrão x.509 é para uma infraestrutura PKI e x.500 é para estruturas de diretório.
