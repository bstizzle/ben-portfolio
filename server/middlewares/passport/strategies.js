const { Strategy } = require('passport-strategy');

class GraphqlStrategy extends Strategy {
  constructor(verify) {
    super();

    if(!verify) {
      throw new Error('Graphql strategy requires a verify callback')
    }

    this.verify = verify;
    this.name = 'graphql';
  }

  authenticate(_, options) {
    console.log('calling authenticate in strategy');

    const done = () => {
      console.log('Calling done in authenticate callback');
    }

    this.verify(options, done);
  }
}

module.exports = GraphqlStrategy;