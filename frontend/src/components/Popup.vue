<!-- Popup.vue -->
<template>
</template>

<script setup lang="ts">
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { watch } from 'vue'

import { usePopupStore } from '../stores/popup'
import { storeToRefs } from 'pinia'


const popupStore = usePopupStore()
const { popup } = storeToRefs(popupStore)

const showToast = (message: string, type: string) => {
  if (type === 'success') {
    toast.success(message, { autoClose: 2000 })
  } else if (type === 'error') {
    toast.error(message, { autoClose: 2000 })
  }
}

// Watch for changes in the 'message' variable
watch(() => popup.value, (value) => {
  if (value.message !== "") {
    showToast(value.message, value.status)
    popup.value.message = ""
    popup.value.status = ""
  }
})
</script>
