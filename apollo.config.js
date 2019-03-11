module.exports = {
  client: {
    service: {
      name: "my-graphql-app",
      url: "https://graphql2chartjs.herokuapp.com/v1alpha1/graphql",
      headers: {
        "x-hasura-admin-secret": "advancedbitch"
      }
    }
  }
};