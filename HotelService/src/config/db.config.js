const dotenv=require('dotenv');
dotenv.config();

const config={
  development:{
    username:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    host:process.env.DB_HOST,
    dialect:'mysql'
  }
}

console.log("DB NAME:", process.env.DB_NAME);
console.log("HOST:", process.env.DB_HOST);

module.exports=config;