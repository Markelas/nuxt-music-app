import { defineStore } from 'pinia'
export const useMusicStore = defineStore("musicStore",  {
    state: () => ({
        activeMusic: null
    }),
    getters: {

    },
    actions: {
        changeAlbum(album) {
            this.activeMusic = album[0] //Назначаем первый трек по умолчанию
        }
    }
})
