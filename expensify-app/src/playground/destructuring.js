const pole = ['auto', 'kolo', 'motorka'];
const [item1, item2, item3] = pole;
console.log(`Items ${item1}, ${item2}, ${item3}`);

const items = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];
const [coffe, , price] = items;

console.log(`A medium ${coffe} costs ${price}`);