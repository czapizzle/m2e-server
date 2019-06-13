'use strict';

let dbm;
let type;
let seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable(
    'Product',
    {
      columns: {
        id: {type: 'int', primaryKey: true, autoIncrement: true},
        sku: 'string',
        title: 'string',
        slug: 'string',
        image: 'string',
        category: 'string',
        description: 'string',
        stock: 'string',
        price: 'string',
      },
      ifNotExists: true,
    },
    callback,
  );

  db.insert('Product', [
  {
    sku: "111445GB3",
    title: "Leather Jacket",
    slug: "leather-jacket",
    image: "https://dummyimage.com/300x400/f2f2f2/c0c2db.jpg",
    category: "coats-and-jackets",
    stock: 6,
    price: 54.99
  },{
    sku: "121445GB3",
    title: "Blue Tshirts",
    slug: "blue-tshirts",
    image: "https://dummyimage.com/300x400/f2f2f2/c0c2db.jpg",
    category: "t-shirts",
    stock: 11,
    price: 8.00
  },{
    sku: "121443GB3",
    title: "Black Jeans",
    slug: "black-jeans",
    image: "https://dummyimage.com/300x400/f2f2f2/c0c2db.jpg",
    category: "jeans",
    stock: 8,
    price: 32.99
  },{
    sku: "1R1443GB3",
    title: "Brown Shoes",
    slug: "brown-shoes",
    image: "https://dummyimage.com/300x400/f2f2f2/c0c2db.jpg",
    category: "shoes",
    stock: 7,
    price: 29.99
  },{
    sku: "1R1663GB3",
    title: "Blue Jeans",
    slug: "blue-jeans",
    image: "https://dummyimage.com/300x400/f2f2f2/c0c2db.jpg",
    category: "jeans",
    stock: 2,
    price: 32.99
  },{
    sku: "8R1663GB3",
    title: "Black Shoes",
    slug: "black-shoes",
    image: "https://dummyimage.com/300x400/f2f2f2/c0c2db.jpg",
    category: "shoes",
    stock: 10,
    price: 25.00
  },{
    sku: "8R1663G63",
    title: "Trainers",
    slug: "trainers",
    image: "https://dummyimage.com/300x400/f2f2f2/c0c2db.jpg",
    category: "shoes",
    stock: 9,
    price: 38.99
  },{
    sku: "8R1663G23",
    title: "Parka Jacket",
    slug: "parka-jacket",
    image: "https://dummyimage.com/300x400/f2f2f2/c0c2db.jpg",
    category: "coats-and-jackets",
    stock: 8,
    price: 49.99
  },{
    sku: "1R1663G23",
    title: "Bed Slippers",
    slug: "bed-slippers",
    image: "https://dummyimage.com/300x400/f2f2f2/c0c2db.jpg",
    category: "shoes",
    stock: 20,
    price: 9.99
  },{
    sku: "1R1HT3G23",
    title: "Pink Tshirt",
    slug: "pink-tshirt",
    image: "https://dummyimage.com/300x400/f2f2f2/c0c2db.jpg",
    category: "t-shirts",
    stock: 5,
    price: 8.00
  },{
    sku: "YR1HT3G23",
    title: "Yellow Tshirt",
    slug: "yellow-tshirt",
    image: "https://dummyimage.com/300x400/f2f2f2/c0c2db.jpg",
    category: "t-shirts",
    stock: 6,
    price: 8.00
  },{
    sku: "RR1HT3G23",
    title: "Red Tshirt",
    slug: "red-tshirt",
    image: "https://dummyimage.com/300x400/f2f2f2/c0c2db.jpg",
    category: "t-shirts",
    stock: 6,
    price: 8.00
  }
], callback);

};

exports.down = function(db, callback) {
  db.dropTable('Product', callback);
};

exports._meta = {
  version: 1,
};
