import * as _ from 'lodash';

export const handler = async (event) => {
    // TODO implement
    const max = 10;
    const val = _.random(max);
    const response = {
      statusCode: 200,
      body: JSON.stringify(`Hello from Test Lambda! max: ${max} is ${val}`),
    };
    return response;
  };
  