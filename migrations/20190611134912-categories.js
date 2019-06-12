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

  db.insert('Category',[
    {
      title: "Coats & Jackets",
      slug: "coats-and-jackets"
    },
    {
      title: "Tshirts",
      slug: "t-shirts"
    },
    {
      title: "Jeans",
      slug: "jeans"
    },
    {
      title: "Shoes",
      slug: "shoes"
    }
  ], callback);
  
};

exports.down = function(db, callback) {
  db.dropTable('Category', callback);
};

exports._meta = {
  version: 1,
};
