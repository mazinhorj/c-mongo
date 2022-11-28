const {MongoClient} = require('mongodb');

const uri = "mongodb://localhost:27017/testemongodb";

const client = new MongoClient(uri);

const run = async () => {
    try {
        await client.connect();
        console.log('Conectando ao MongoDB')
    } catch (error) {
        console.log(error)
    }
}

run()