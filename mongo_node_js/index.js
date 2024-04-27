const {MongoClient} = require(id : "mongodb");

const uri = 'mongodb://127.0.0.1'
const client = new MongoClient(uri);


const main = async (): Promise<string > =>{

    await client.connect();
    const db = client.db(dbName: "shop");
    const collection = db.collection(name: "products");
   const data =await collection.find({price:{$gt:1200}}).toArray();
   console.log(data);
   return "done";
};

main()
    .then(console.log())
    .catch((e:  any) :void =>console.log(e))
    .finally(() :Promise<void>=>client.close());

