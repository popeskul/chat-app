import { createApp } from 'vue'
import Chat from '@/components/Chat.vue'
import Message from '@/components/Message.vue'

export default () => {
    document.addEventListener('DOMContentLoaded', () => {
        const app = createApp(Chat)
        app.mount('#app-chat')
    })

    document.addEventListener('DOMContentLoaded', () => {
        const app = createApp(Message)
        app.mount('#app-message')
    })
}
