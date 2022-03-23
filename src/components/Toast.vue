<script>
import Toast from 'bootstrap/js/dist/toast'
import { onMounted, ref } from 'vue'
export default {
  name: 'Toast',
  props: {
    msg: {
      type: Object
    }
  },
  setup() {
    const toastRef = ref(null)

    onMounted(() => {
      const toast = new Toast(toastRef.value, {
        delay: 3000
      })

      toast.show()
    })

    return {
      toastRef
    }
  }
}
</script>

<template>
  <div
    class="toast"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    ref="toastRef"
  >
    <div class="toast-header">
      <span
        :class="`bg-${msg.style}`"
        class="p-2 rounded me-2 d-inline-block"
      ></span>
      <strong class="me-auto">{{ msg.title }}</strong>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
    <div class="toast-body" v-if="msg.content">
      {{ msg.content }}
    </div>
  </div>
</template>
