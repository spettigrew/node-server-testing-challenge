// Update with your config settings.
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/users.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};

// Notes from Jason's Lecture
// const sqlite = {
//   client: "sqlite3",
//   useNullAsDefault: true,
//   migrations: {
//     directory: "./data/migrations",
//   },
//   seeds: {
//     directory: "./data/seeds",
//   },
// }

// module.exports = {
//   dev: {
//     ...sqlite,
//     connection: {
//       filename: "./data/dev.db3",
//     },
//   },
//   test: {
//     ...sqlite,
//     connection: {
//       filename: "./data/test.db3",
//     },
//   },
// }
