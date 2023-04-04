module.exports = {
    isProduction: false || process.env.isProduction,
    mongoDbUrl: 'mongodb://localhost:27017/oauth_server' || process.env.mongoDbUrl,
    salt: 'a5828e9d6052dc3b14a93e07a5932dd9' || process.env.salt
};