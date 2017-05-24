import { lazyFunctionRequire } from 'roc';

const lazyRequire = lazyFunctionRequire(require);

export default {
    name: 'roc-plugin-typescript',
    description: `
    A roc plugin for compiling typescript (*.ts and *.tsx) files. It uses
    [ts-loader](https://github.com/TypeStrong/ts-loader) for to let webpack compile
    typescript files and adds source maps via
    [source-map-loader](https://github.com/webpack/source-map-loader).

    ## How to use?
    Add the plugin as a dev dependency of your [roc](http://www.getroc.org) application:
    \`\`\`
    npm install --save-dev roc-plugin-typescript
    \`\`\`

    The plugin will automatically hook into webpacks build process and add a loader
    for *.ts and *.tsx files. The compiler will look for a \`tsconfig.json\` file in
    the root of you roc project, which you can use for configuration.
    `,
    actions: [{
        hook: 'build-webpack',
        description: 'Adds typescript support to Webpack.',
        action: lazyRequire('../webpack'),
    }],
    required: {
        'roc-package-webpack': '^1.0.0-beta.4',
    },
};
