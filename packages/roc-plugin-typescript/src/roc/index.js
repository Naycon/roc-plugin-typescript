import config from '../config/roc.config.js';
import builder from '../builder';

import { name } from './util';

export default {
    name,
    config,
    actions: {
        typescript: {
            hook: 'build-webpack',
            action: builder,
            description: 'Adds typescript support to Webpack.'
        }
    }
};
