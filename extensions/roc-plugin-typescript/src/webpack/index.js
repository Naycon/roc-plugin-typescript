import path from 'path';

export default () => () => (webpackConfig = {}) => {
    // Register extensions
    webpackConfig.resolve.extensions.push('.ts', '.tsx');

    const jsLoader = webpackConfig.module.loaders.find(loader => loader.id === 'babel');

    // Make sure ts and tsx files are processed by babel after being the typescript compiler is done
    const babelLoader = {
        ...jsLoader,
        id: 'babel-ts',
        test: /\.tsx?$/,
    };
    // (Webpack calls loaders in reverse order, so we add babel before typescript)
    webpackConfig.module.loaders.push(babelLoader);

    // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
    const tsLoader = {
        test: /\.tsx?$/,
        loader: 'ts-loader',
    };
    webpackConfig.module.loaders.push(tsLoader);

    // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
    const tsPreLoader = {
        test: /\.js$/,
        loader: 'source-map-loader',
    };
    webpackConfig.module.preLoaders.push(tsPreLoader);

    const modulesPath = path.join(__dirname, '../../node_modules');
    webpackConfig.resolveLoader.root.push(modulesPath);

    return webpackConfig;
};
