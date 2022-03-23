<script>
import { useStatusStore } from '@/stores/statusStore'
import { storeToRefs } from 'pinia'
import Toast from './Toast.vue'
export default {
  name: 'ToastMessage',
  components: { Toast },
  setup() {
    const status = useStatusStore()
    const { messages } = storeToRefs(status)

    return {
      messages
    }
  }
}
</script>

<template>
  <div
    class="toast-container position-absolute pe-3 top-0 end-0 mt-2"
    style="z-index: 1050"
  >
    <Toast v-for="(msg, key) in messages" :key="key" :msg="msg" />
  </div>
</template>
