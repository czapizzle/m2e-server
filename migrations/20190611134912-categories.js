'use strict';

exports.up = function(db, callback) {
  db.createTable(
    'Category',
    {
      columns: {
        id: {type: 'int', primaryKey: true, autoIncrement: true},
        title: 'string',
        slug: 'string',
      },
      ifNotExists: true,
    },
    callback,
  );

  db.insert(
    'Category',
    [
      {
        title: 'Coats & Jackets',
        slug: 'coats-and-jackets',
      },
      {
        title: 'Tshirts',
        slug: 't-shirts',
      },
      {
        title: 'Jeans',
        slug: 'jeans',
      },
      {
        title: 'Shoes',
        slug: 'shoes',
      },
    ],
    callback,
  );
};

exports.down = function(db, callback) {
  db.dropTable('Category', callback);
};

exports._meta = {
  version: 1,
};
