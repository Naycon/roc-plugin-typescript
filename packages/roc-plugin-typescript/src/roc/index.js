import builder from '../builder';

export default {
    actions: {
        typescript: {
            hook: 'build-webpack',
            action: builder,
            description: 'Adds typescript support to Webpack.'
        }
    },
    required: {
        'roc-package-webpack': '^1.0.0-alpha.10'
    }
};
