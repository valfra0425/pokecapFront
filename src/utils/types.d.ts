import { ObjectId } from 'mongodb';

export interface Pkm {
    _id: ObjectId;
    id: number;
    name: string;
    sprite: string;
    type: string[];
}

export interface Trainer {
    _id: ObjectId;
    name: string;
    sprite: string;
    time: number[];
}