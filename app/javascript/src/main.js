import { createApp } from 'vue'
import Chat from '@/components/Chat.vue'

export default () => {
    document.addEventListener('DOMContentLoaded', () => {
        const app = createApp(Chat)
        app.mount('#app-chat')
    })
}
