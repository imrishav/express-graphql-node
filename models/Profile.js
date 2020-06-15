import mongoose from 'mongoose';


export const Profile = mongoose.model('Profile', { name: String });
