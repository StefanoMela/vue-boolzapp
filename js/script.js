const { createApp } = Vue

createApp({
  data() {
    return {
      contacts,
      
      activeUser: 0,

      newMessage: {
        date: '04/09/2023 16:30:00',
        message: '',
        status: 'sent'
      },

      newReply: {
        date: '04/09/2023 16:31:00',
        message: 'Ok!',
        status: 'received'
      },
    }
  },
  methods: {

    addMesssage() {

      let toWrite = { ...this.newMessage };

      if (this.newMessage.message.length > 1){
        this.contacts[this.activeUser].messages.push(toWrite);
        this.newMessage.message = "";

        setTimeout(this.addReply, 1000)
      };
  },
    addReply() {

      this.contacts[this.activeUser].messages.push(this.newReply)

    },
  }
}).mount('#app')