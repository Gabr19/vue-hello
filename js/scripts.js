const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      inputValue : '',
      buttonLabel: 'invia',
      link: 'https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197__480.jpg'
    }
  }
}).mount('#app')