const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { 
            '@primary-color': '#13c2c2',
            '@processing-color': '#10A1A1',
            '@text-color': '#000',
            '@heading-color': '#000'
        }
    }),
);