export default () => ({ previousValue: rocBuilder }) => () => () => {
    const {
        buildConfig,
        builder,
        info
    } = rocBuilder;

    buildConfig.resolve.extensions.push('.ts', '.tsx');

    // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
    var tsLoader = {
        test: /\.tsx?$/,
        loader: 'ts-loader'
    };
    buildConfig.module.loaders.push(tsLoader);

    // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
    var tsPreLoader = {
        test: /\.js$/,
        loader: 'source-map-loader'
    };
    buildConfig.module.preLoaders.push(tsPreLoader);

    return {
        buildConfig,
        builder,
        info
    };
};
