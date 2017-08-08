module.exports = {
  entry : './app/app.jsx', //where it should start processing the code.Is where the webpack starts compiling the bundle.FIrst file web pack looks
  output: {
    path : __dirname,
    filename : './public/bundle.js'
  },
  //takes an extension array. the file extension that wants to process
  resolve : {
    //root: __dirname,//give the react1 folder name - Note Webpack 1 configuration. wont work on webppack 2 ,
    modules:[__dirname,'node_modules'],
    alias:{
      Main: 'app/components/Main.jsx'
    },
    extensions :['','.js','.jsx']//adding * in place of empty throws error as it check for all file extension
  },
  module:{
    loaders:[
      {
        //we are telling the babel-loader to take our files, parse them through
        //react and use es2015 aswell
        //To specify the files we use test
        loader:'babel-loader',
        query :{
          presets : ['react','es2015','stage-0']
        },
        test:/\.jsx?$/,
        //folders dont want to be parsed
        exclude:/(node_modules|bower_components)/
      }
    ]
  }
}
