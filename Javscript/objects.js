


const y = {
  x: 10,
  y: 20,
  tell: () => {
    return "hllo tell";
  },
  tell1: function () {
    return "In tell";
  },
  t: [
    1,
    2,
    3,
    33,
    4,
    () => {
      return "hello";
    },
    function () {
      return "hllo tell1";
    },
  ],
};

// console.log(y,'before');

// y.tell1 = 'hello';



console.log(y.t[5],'after');