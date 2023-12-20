<script setup lang="ts">
import { useCoinsStore } from '../stores/coins'
import { storeToRefs } from 'pinia'
import  { usePopupStore } from '../stores/popup'
import Form from './Form.vue'


const coinsStore = useCoinsStore()
const { coins } = storeToRefs(coinsStore)

const popupStore = usePopupStore()
const { players } = storeToRefs(popupStore)

</script>

<template>
  <div v-if="coins.length > 0" class="p-4 text-center">
    <h1 class="text-2xl font-bold">Coins</h1>
    <ul class="mt-2">
      <li>Coins left: {{ coins.length }}</li>
      <li>Amount of players {{ players }}</li>
    </ul>
  </div>
  <Form v-if="coins.length > 0"></Form>
</template>

