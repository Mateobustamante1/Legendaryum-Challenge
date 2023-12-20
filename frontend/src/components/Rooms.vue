<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoomsStore } from '../stores/rooms'
import { storeToRefs } from 'pinia'
import { useCoinsStore } from '../stores/coins'

const roomsStore = useRoomsStore()
const { rooms } = storeToRefs(roomsStore)
const { fetchRooms } = roomsStore


const coinsStore = useCoinsStore()
const { joinRoom } = coinsStore

onMounted(fetchRooms)
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4 text-center">Available Rooms</h1>
    <ul class="flex justify-center space-x-4">
      <li v-for="room in rooms" :key="room.id">
        <button @click="joinRoom(room.id)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{{ room.id }}</button>
      </li>
    </ul>
  </div>
</template>
        

