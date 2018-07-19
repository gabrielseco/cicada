const path = require('path');

const SRC = path.join(__dirname, '../../src');

const resolve = {
  alias: {
    actions: path.join(SRC, 'actions'),
    adapters: path.join(SRC, 'adapters'),
    behaviours: path.join(SRC, 'behaviours'),
    components: path.join(SRC, 'components'),
    config: path.join(SRC, 'config'),
    containers: path.join(SRC, 'containers'),
    fakes: path.join(SRC, 'fakes'),
    reducers: path.join(SRC, 'reducers'),
    services: path.join(SRC, 'services'),
    styles: path.join(SRC, 'styles'),
    types: path.join(SRC, 'types')
  }
};

module.exports = resolve;
