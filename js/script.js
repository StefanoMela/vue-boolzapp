const { createApp } = Vue

createApp({
  data() {
    return {
      contacts,
      activeUser: 0,
    }
  }
}).mount('#app')
