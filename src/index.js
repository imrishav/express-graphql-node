import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import { resolvers} from './resolver';
import { typeDefs } from './typeDefs';
// import { typeDefs, resolvers } from './schema';



const startServer = async () => {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    
    server.applyMiddleware({ app });
    await mongoose.connect('mongodb://localhost:27017/testGraphql', { useNewUrlParser: true });
    
    app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
    
    
};

startServer()




