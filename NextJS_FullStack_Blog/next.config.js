const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "moulivj",
        mongodb_password: "password",
        mongodb_clustername: "clustername",
        mongodb_database: "my-site-database-key",
      },
    };
  }

  return {
    env: {
      mongodb_username: "moulivj",
      mongodb_password: "password",
      mongodb_clustername: "clustername",
      mongodb_database: "my-site-database-key-production",
    },
  };
};
