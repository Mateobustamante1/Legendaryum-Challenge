<script setup lang="ts">
import { useCoinsStore } from '../stores/coins'
import { ref } from 'vue'
import { usePopupStore } from '../stores/popup'

const popupStore = usePopupStore()
const { sendMessage } = popupStore

const coinsStore = useCoinsStore()
const { checkPointCollision } = coinsStore

const point = ref({x: 0, y: 0, z: 0})

const submitForm = () => {
  const colision = checkPointCollision(point.value)
  if (colision) {
    sendMessage("You found a coin", "success")
  } else {
    sendMessage("Try again", "error")
  }
}

</script>

<template>
  <div class="container mx-auto mt-3">
    <h1 class="text-2xl font-bold mb-4 text-center">Find the Coins</h1>
    <form @submit.prevent="submitForm">
      <div class="flex justify-center">
        <div class="flex flex-col">
          <div class="flex items-center mb-2">
            <label for="x" class="block mr-2">X:</label>
            <input type="number" id="x" v-model="point.x" step="0.01" required class="border border-gray-300 rounded-md p-2"/>
          </div>

          <div class="flex items-center mb-2">
            <label for="y" class="block mr-2">Y:</label>
            <input type="number" id="y" v-model="point.y" step="0.01" required class="border border-gray-300 rounded-md p-2"/>
          </div>

          <div class="flex items-center mb-2">
            <label for="z" class="block mr-2">Z:</label>
            <input type="number" id="z" v-model="point.z" step="0.01" required class="border border-gray-300 rounded-md p-2"/>
          </div>

          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Find</button>
        </div>
      </div>
    </form>
  </div>
</template>
