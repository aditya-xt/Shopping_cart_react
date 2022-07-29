export const products = [
  {
    id: 111,
    emoji: String.fromCodePoint(127746),
    name: "Umbrella",
    price: 200
  },

  {
    id: 222,
    emoji: String.fromCodePoint(127850),
    name: "Cookie",
    price: 100
  },

  {
    id: 333,
    emoji: String.fromCodePoint(127936),
    name: "Basketball",
    price: 2000
  },

  {
    id: 444,
    emoji: String.fromCodePoint(128096),
    name: "Shoes",
    price: 1000
  },

  {
    id: 555,
    emoji: String.fromCodePoint(128142),
    name: "Diamond",
    price: 20000
  },

  {
    id: 666,
    emoji: String.fromCodePoint(127758),
    name: "Globe",
    price: 300
  },

  {
    id: 777,
    emoji: String.fromCodePoint(127762),
    name: "Moon",
    price: 500
  },
  {
    id: 990,
    emoji: String.fromCodePoint(127752),
    name: "Rainbow",
    price: 150
  },
  {
    id: 991,
    emoji: String.fromCodePoint(127755),
    name: "Volcano",
    price: 1500
  },
  {
    id: 888,
    emoji: String.fromCodePoint(127751),
    name: "House",
    price: 40000
  },
  {
    id: 992,
    emoji: String.fromCodePoint(127756),
    name: "Galaxy",
    price: 300000
  }
];

export function getProduct(num) {
  return products.find((product) => product.id === num);
}
