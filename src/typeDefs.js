import { gql } from 'apollo-server-express';


export const typeDefs = gql`
    type Query{
        hello: String!
        profiles: [Profile!]!
    }

    type Profile {
        id: ID!
        name: String!
    }


    type Mutation {
        createProfile(name:String!): Profile!
    }
`;
