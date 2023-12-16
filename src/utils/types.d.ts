import { ObjectId } from 'mongodb';

export interface Pkm {
    _id: ObjectId;
    id: number;
    name: string;
    sprite: string;
    type: string[];
}