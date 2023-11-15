import { defineStore } from 'pinia'
export const useMusicStore = defineStore("musicStore",  {
    state: () => ({
        activeMusic: null,
        musicItems: {},
        isLoading: true,
        activeAlbum: null
    }),
    getters: {

    },
    actions: {
        changeAlbum(album) {
            this.activeMusic = album[0] //Назначаем первый трек по умолчанию
            this.activeAlbum = album
        },
        backTrack() { //Прошлый трек
            if (!(this.activeMusic === this.activeAlbum[0])) {
                let index = this.activeAlbum.indexOf(this.activeMusic)
                this.activeMusic = this.activeAlbum[index - 1]}
        },
        nextTrack(){ //Следующий трек
            if (!(this.activeMusic === this.activeAlbum[length-1])) {
                let index = this.activeAlbum.findIndex(el => el === this.activeMusic);
                this.activeMusic = this.activeAlbum[index + 1]
            }
        },
    }
})
