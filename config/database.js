if(process.env.NODE_ENV === 'production' ){
    module.exports = {
        mongoURI: 'mongodb://<kashish>:<kash123#>@ds123971.mlab.com:23971/jotvideo'
    }
}
else{
    module.exports = {
        mongoURI: 'mongodb://localhost/vidjot'
    }
}