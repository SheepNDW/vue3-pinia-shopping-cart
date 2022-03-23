import { defineStore } from 'pinia'

export const useStatusStore = defineStore('statusStore', {
  state: () => {
    return {
      loadingItem: '',
      messages: []
    }
  },
  actions: {
    pushMessage(data) {
      const { title, content, style = 'success' } = data
      this.messages.push({ style, title, content })
    }
  }
})