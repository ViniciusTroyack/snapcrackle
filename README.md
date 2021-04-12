# SnapCrackle

Entrega: SnapCrackle
Escreva uma função chamada snapCrackle que leva um parâmetro: maxValue.
Esta função deve fazer um loop de 1 até maxValue (inclusive) e montar uma string com as seguintes condições para cada número:
Se o número for ímpar, no lugar dele, concatenar "Snap, " no final da string.
Se o número for múltiplo de 5, no lugar dele, concatenar "Crackle, " no final da string.
Se o número for tanto ímpar quanto múltiplo de 5, no lugar dele, concatenar "SnapCrackle, " no final da string.
Se número não for nem ímpar nem múltiplo de 5, concatenar o próprio número e ", " no final da string.
Esta função deve fazer o console.log() da string final depois de maxValue iterações do loop.
Exemplo
snapCrackle(12) deve mostrar a string Snap, 2, Snap, 4, SnapCrackle, 6, Snap, 8, Snap, Crackle, Snap, 12,

Bônus (2 pontos máx)
Escreva uma segunda função chamada snapCracklePrime com 1 regra adicional: Se o número for primo, no lugar dele, concatenar "Prime, " no final da string

snapCracklePrime(15) deve mostrar a string Snap, Prime, SnapPrime, 4, SnapCracklePrime, 6, SnapPrime, 8, Snap, Crackle, SnapPrime, 12, SnapPrime, 14, SnapCrackle,