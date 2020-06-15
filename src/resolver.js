import { Profile } from '../models/Profile';

export const resolvers = {
    Query: {
        hello: () => "hello",
        profiles: () => Profile.find()
    },
    Mutation: {
        createProfile: async (_, {name}) => {
            const rishav = new Profile({ name });
            await rishav.save();
            return rishav;
        } 
    }
};

