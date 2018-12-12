const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'dev';
const dbUri = process.env.MONGODB_URI || `mongodb://localhost/bandwagon-${env}`;
const secret = process.env.SECRET || 'jammin';

module.exports = { port, env, dbUri, secret };
