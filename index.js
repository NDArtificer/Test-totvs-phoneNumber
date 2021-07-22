/**
 * Desafio: escrever uma função que aceite um array de inteiros (de 0 a 9), que retorne uma string desses numeros no formato de um telefone (`"(XX) XXXX-XXXX"` ou `"(XX) XXXXX-XXXX"`).
 * Caso nao seja um telefone valido, retornar uma string vazia.
 *
 * Voce pode testar o seu codigo rodando o comando `npm run test` no terminal
 * e tambem pode alterar o arquivo `index.test.js` se desejar.
 * Apos enviado, seu codigo sera validado com outros cenarios de teste tambem.
 *
 * @example `formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])` retorna `"(12) 3456-7890"`
 * @param numbers array de digitos inteiros (0-9) com os numeros do telefone
 * @returns numero de telefone formatado
 */
function formatPhoneNumber(numbers) {
  var phone = numbers.join(''); // join the array values in one String

  if (numbers.length == 10) {
    // verifying size of the string
    phone = phone.replace(/(\d{2})?(\d{4})?(\d{4})/, '($1) $2-$3');
    // convert the string using regex to (XX) XXXX-XXXX
  } else if (numbers.length == 11) {
    phone = phone.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3');
    //convert the string using regex to (XX) XXXXX-XXXX
  } else {
    return '';
  }
  return phone;
}

module.exports = formatPhoneNumber;
