const path = require ('path');

console.log(module);
console.log(_dirname);
console.log(_filename);


module.exports = {
    entry : './src/index.js',
    output : {
        filname : 'bundle.js',
        path:path. resolve(_dirname,'dist')
    }
    
}

const htmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
    Plugins: [
        new htmlWebpackPlugin()
    ]
};



Plugins:[

    new htmlWebpackPlugin({
        template : './src/index.html',
        filename : 'index.html',
        inject : 'body'
    })
]