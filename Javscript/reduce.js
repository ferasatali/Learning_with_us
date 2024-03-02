console.log("LearnWithUS", '"LearnWithUS"');

const items = [
    { category: 'Fruit', name: 'Apple' },
    { category: 'Vegetable', name: 'Carrot' },
    { category: 'Fruit', name: 'Banana' },
    { category: 'Vegetable', name: 'Broccoli' },
  ];
  
  const groupedByCategory = items.reduce((acc, current) => {
    const key = current.category;
    (acc[key] || (acc[key] = [])).push(current);
    return acc;
  }, {});
  
  console.log(groupedByCategory);

  
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArray.reduce((acc, current) => acc.concat(current), []);
console.log(`Flattened Array: ${flattenedArray}`);


const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, current) => acc + current, 0);

console.log(`Sum of the array: ${sum}`);

