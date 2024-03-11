/* 1 - O código representa um loop onde a variável K é incrementada de 1 em 1 até que chegue no valor do INDICE.

A cada iteração, o valor de K é somado à variável SOMA.

K = 1, SOMA = 1 (primeira iteração: SOMA = 0 + 1)
K = 2, SOMA = 3 (segunda iteração: SOMA = 1 + 2)
K = 3, SOMA = 6 (terceira iteração: SOMA = 3 + 3)
K = 4, SOMA = 10 (quarta iteração: SOMA = 6 + 4)
K = 5, SOMA = 15 (quinta iteração: SOMA = 10 + 5)
K = 6, SOMA = 21 (sexta iteração: SOMA = 15 + 6)
K = 7, SOMA = 28 (sétima iteração: SOMA = 21 + 7)
K = 8, SOMA = 36 (oitava iteração: SOMA = 28 + 8)
K = 9, SOMA = 45 (nona iteração: SOMA = 36 + 9)
K = 10, SOMA = 55 (décima iteração: SOMA = 45 + 10)
K = 11, SOMA = 66 (onzième iteração: SOMA = 55 + 11)
K = 12, SOMA = 78 (dozzième iteração: SOMA = 66 + 12)
K = 13, SOMA = 91 (treizième iteração: SOMA = 78 + 13)
Ao final do processamento, o valor da variável SOMA será 91.*/

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);

/* PRÓXIMA QUESTÃO ---------------------------------------------------------------------------------------------------------------------------

2 - Neste código em JavaScript, a função Fibonacci realiza a verificação se um número pertence à sequência de Fibonacci,
e o programa solicita que o usuário informe um número, exibindo uma mensagem indicando se o número pertence ou não à sequência de Fibonacci.*/

function Fibonacci(num) {
    let a = 0, b = 1;
    while (a <= num) {
        if (a === num) {
            return true;
        }
        [a, b] = [b, a + b];
    }
    return false;
}

// Número a ser verificado
let numeroInformado = parseInt(prompt("Informe um número:"));

// Verifica se o número pertence à sequência de Fibonacci
if (Fibonacci(numeroInformado)) {
    console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`);
}

/* PRÓXIMA QUESTÃO ---------------------------------------------------------------------------------------------------------------------------

3 - a) A lógica aqui é adicionar 2 ao número anterior. Então, o próximo elemento seria 7 + 2 = 9.

b) Cada número é o dobro do número anterior. O próximo seria 64 * 2 = 128.

c) Representa os quadrados dos números naturais. O próximo elemento seria 7^2 = 49.

d) Essa representa os quadrados dos números pares. O próximo elemento seria 8^2 = 64.

e) Essa é a sequência de Fibonacci. Seria a soma dos dois anteriores, então 8 + 5 = 13.

f) --- 

PRÓXIMA QUESTÃO ---------------------------------------------------------------------------------------------------------------------------

4 - Primeira visita:

Ligue o primeiro interruptor e aguarde alguns minutos.
Desligue o primeiro interruptor e ligue o segundo interruptor.
Segunda visita:

Entre na sala.
Agora, há dois possíveis cenários:

Se a lâmpada estiver acesa, você sabe que o segundo interruptor controla essa lâmpada.
Se a lâmpada estiver apagada, mas ainda estiver quente, o primeiro interruptor controla essa lâmpada.

PRÓXIMA QUESTÃO ---------------------------------------------------------------------------------------------------------------------------

5 - */

def inverter_string(original):
    tamanho = len(original)
    invertida = ""

    # Itera da última posição até a primeira da string original
    for i in range(tamanho - 1, -1, -1):
        invertida += original[i]

    return invertida

# Exemplo de uso
string_original = input("Informe uma string: ")
string_invertida = inverter_string(string_original)

print("String original:", string_original)
print("String invertida:", string_invertida)

/*Este programa define uma função inverter_string que recebe uma string como entrada e retorna uma nova string com os caracteres invertidos. O loop for itera da última posição até a primeira da string original, construindo a string invertida. O exemplo de uso solicita que o usuário informe uma string e imprime tanto a string original quanto a string invertida.*/