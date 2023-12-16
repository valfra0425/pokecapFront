import { defineStore } from "pinia";
import type { Pkm } from "../utils/types";
import axios from "axios";

export const usePkmStore = defineStore("pkm", {
  state: () => {
    return {
      pkms: [] as Pkm[],
      pkm: {} as Pkm,
      loading: 0
    };
  },
  getters: {
  },
  actions: {
    async getPkms(): Promise<Pkm[]> {
        const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/pkm`
        );
        this.pkms = response.data;
        return this.pkms;
    },
    async getPkm(id: number): Promise<Pkm> {
        const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/pkm/${id}`
        );
        this.pkm = response.data;
        return this.pkm;
    }
  },
});
