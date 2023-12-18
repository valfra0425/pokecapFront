import { defineStore } from "pinia";
import type { Pkb, PkbPut } from "../utils/types";
import axios from "axios";

export const usePkbStore = defineStore("pkb", {
    state: () => {
        return {
            pkbs: [] as Pkb[],
            pkb: {} as Pkb,
            loading: 0
        };
    },
    getters: {
    },
    actions: {
        async getPkb(id: number, owner: string): Promise<Pkb> {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/pkb/${owner}/${id}`
            );
            this.pkb = response.data;
            return this.pkb;
        },
        async putPkb(id: number, pkb: PkbPut): Promise<Pkb> {
            const response = await axios.put(
                `${import.meta.env.VITE_API_URL}/pkb/${id}`, pkb
            );
            this.pkb = response.data;
            return this.pkb;
        }
    },
});