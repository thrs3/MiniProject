interface CalculateProps {
  bilangan1 : number;
  bilangan2 : number;
  operator : '/' | '*' | '-' | '+' | '=' | '%'
} 

export const calculate = ({bilangan1, bilangan2, operator}: CalculateProps) => {
  let hasil = 0
  if(operator === '/') {
    hasil += bilangan1 / bilangan2
  } else if(operator === '*') {
    hasil += bilangan1 * bilangan2
  } else if(operator === '-') {
    hasil += bilangan1 - bilangan2
  } else if(operator === '+') {
    hasil += bilangan1 + bilangan2
  } else if(operator === '%') {
    hasil += bilangan1 % bilangan2
  }

  return hasil
}