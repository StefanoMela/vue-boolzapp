var DateTime = luxon.DateTime;

const now = DateTime.now();

let msgTime = DateTime.now().toLocaleString(DateTime.TIME_SIMPLE);

let msgDate = DateTime.now().toLocaleString(DateTime.DATE_SHORT);

console.log(msgTime , msgDate);


const { createApp } = Vue

createApp({
  data() {
    return {
      contacts,
      

      msgTime: msgTime,
      msgDate: msgDate,

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
    },

    randomTime() {

      let rndTime 

    },
    }
}).mount('#app')
