const graphqlQueries = {
  bar: `
    query {
      video_games (
        order_by: {
          name: asc
        }
      ) {
        id
        label:name
        data: followers
        backgroundColor:color
      }
    }
  `,
  pie: `
    query {
      video_games (
        order_by: {
          name: asc
        }
      ) {
        id
        label:name
        data: followers
        backgroundColor:color
      }
    }
  `,
  doughnut: `
    query {
      video_games (
        order_by: {
          name: asc
        }
      ) {
        id
        label:name
        data: followers
        backgroundColor:color
      }
    }
  `,
  line: `
    query {
      video_games (
        order_by: {
          name: asc
        }
      ) {
        id
        label:name
        data: followers
        pointBackgroundColor: color
        fill: false_flag
      }
    }
  `,
  radar: `
    query {
      video_games (
        order_by: {
          name: asc
        }
      ) {
        id
        label:name
        data: followers
        pointBackgroundColor: color
        fill: false_flag
      }
    }
  `,
  scatter: `
    query {
      DataSet1: scatter {
        id
        data_r: r1
        data_x: x1
        data_y: x2
        backgroundColor: backgroundColor1
      }
      DataSet2: scatter {
        id
        data_r: r2
        data_x: x2
        data_y: y2
        backgroundColor: backgroundColor2
      }
    }
  `,
  bubble: `
    query {
      DataSet1: scatter {
        id
        data_r: r1
        data_x: x1
        data_y: x2
        backgroundColor: backgroundColor1
      }
      DataSet2: scatter {
        id
        data_r: r2
        data_x: x2
        data_y: y2
        backgroundColor: backgroundColor2
      }
    }
  `,
  mixed: `
    query {
      VideoGamesPriceInDollars: video_games (
        order_by: {
          name: asc
        }
      ) {
        id
        label:name
        data: price
        pointBackgroundColor: color
        fill: false_flag
      }
      VideoGamesFollowers : video_games (
        order_by: {
          name: asc
        }
      ) {
        id
        label:name
        data: followers
        backgroundColor: color
      }
    }
  `

}

export default graphqlQueries;