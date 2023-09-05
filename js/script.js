var DateTime = luxon.DateTime;

const { createApp } = Vue

createApp({
  data() {
    return {
      contacts,
      
      activeUser: 0,

      searchedTxt: "",

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

    checkString () {

      for (const searchedUser of this.contacts) {
        
        if(!searchedUser.name.toLowerCase().includes(this.searchedTxt.toLowerCase())) {

          searchedUser.visible = false;

        } else {

          searchedUser.visible = true;
        }
      }
    }
  }
}).mount('#app')


// prendere stringa - includere stringa cercata - se non è inclusa false 