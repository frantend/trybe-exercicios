const myRemove = required('./exercicio-01.js');

test('Verifica se a chamada myRemove([1,2,3,4], 3 retorna o array esperado)', () => {
  expect(myRemove().toBe());
});
test('Verifica se é uma função', () => {
  expect(myRemove()).toBe('function');
});