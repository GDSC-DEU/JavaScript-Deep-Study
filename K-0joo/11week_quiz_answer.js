// email
let email = /[a-zA-Z0-9]@[a-zA-Z0-9]\.[a-zA-Z]/;

console.log(email.test('AAaa33@dfae.gsg'))
console.log(email.test('dd22.dfsf'))
console.log(email.test('werw111r@dfsg223'));
console.log(email.test('13213fdsdf'));

// phone
let phone = /01\d-\d{4}-\d{4}/;

console.log('This is phone');
console.log(phone.test('010-1234-2424'));
console.log(phone.test('010231233123'));
console.log(phone.test('adfsgfsagsag'));
console.log(phone.test('21321-412'));
console.log(phone.test('ㄱㄴㄱㄴㄷ-ㄱㄴㄱㄴㅁ'));

// postNum
let postNum = /([1-63]{2})+(\d{1})+([0-99]{2})/;

console.log('This is Post Number');
console.log(postNum.test('12151'));
console.log(postNum.test('asdfaw'));
console.log(postNum.test('12345678'));
console.log(postNum.test('31234'));
