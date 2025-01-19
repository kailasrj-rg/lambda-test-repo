import * as _ from 'lodash';

export const handler = async (event) => {
    // Lamda TEST 1 !!!!!!
    const max = 100;
    const val = _.random(max);
    const response = {
      statusCode: 200,
      body: JSON.stringify(`Hello from Test Lambda! max: ${max} is ${val}`),
    };
    return response;
  };
  