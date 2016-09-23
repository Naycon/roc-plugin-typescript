# roc-plugin-typescript
A roc plugin for compiling typescript (*.ts and *.tsx) files. It uses
[ts-loader](https://github.com/TypeStrong/ts-loader) for to let webpack compile
typescript files and adds source maps via
[source-map-loader](https://github.com/webpack/source-map-loader).

## How to use?
Add the plugin as a dev dependency of your [roc](http://www.getroc.org) application:
```
npm install --save-dev roc-plugin-typescript
```

The plugin will automatically hook into webpacks build process and add a loader
for *.ts and *.tsx files. The compiler will look for a `tsconfig.json` file in
the root of you roc project, which you can use for configuration.

## Documentation
- [Actions](/packages/roc-plugin-typescript/docs/Actions.md)
- [Commands](/packages/roc-plugin-typescript/docs/Commands.md)
- [Hooks](/packages/roc-plugin-typescript/docs/Hooks.md)
- [Settings](/packages/roc-plugin-typescript/docs/Settings.md)