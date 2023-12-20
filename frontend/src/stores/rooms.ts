import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { type Ref } from 'vue'

interface Room {
  id: string
  coins: number
  area: {
    xmin: number
    xmax: number
    ymin: number
    ymax: number
    zmin: number
    zmax: number
  }
}

export const useRoomsStore = defineStore('rooms', () => {
  const rooms: Ref<Room[]> = ref([])
  function fetchRooms(){
    axios.get('http://localhost:3001/rooms')
      .then((response) => {
        rooms.value = (response.data)
      })
      .catch((error) => {
        console.error('Error fetching rooms:', error)
      })
  }

  return { rooms, fetchRooms }
})