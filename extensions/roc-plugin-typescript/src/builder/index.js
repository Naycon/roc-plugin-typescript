import path from 'path';

export default () => ({ previousValue: rocBuilder }) => () => () => {
    const {
        buildConfig,
        builder,
        info
    } = rocBuilder;

    // Register extensions
    buildConfig.resolve.extensions.push('.ts', '.tsx');

    // Make sure ts and tsx files are processed by babel after being the typescript compiler is done
    const babelLoader = {
        test: /\.tsx?$/,
        loader: 'babel-loader'
    };
    // (Webpack calls loaders in reverse order, so we add babel before typescript)
    buildConfig.module.loaders.push(babelLoader);

    // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
    const tsLoader = {
        test: /\.tsx?$/,
        loader: 'ts-loader'
    };
    buildConfig.module.loaders.push(tsLoader);

    // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
    const tsPreLoader = {
        test: /\.js$/,
        loader: 'source-map-loader'
    };
    buildConfig.module.preLoaders.push(tsPreLoader);

    const modulesPath = path.join(__dirname, '../../node_modules');
    rocBuilder.buildConfig.resolveLoader.root.push(modulesPath);

    return {
        buildConfig,
        builder,
        info
    };
};
