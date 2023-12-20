import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { type Ref } from 'vue'
import socket from '../socket'

interface Coin {
  id: string
  room: string
  position: {
    x: number
    y: number
    z: number
  }
}
interface Room {
  name: string
  coins: Coin[]
}

export const useCoinsStore = defineStore('coins', () => {
  const coins: Ref<Coin[]> = ref([])
  function joinRoom(roomId: string){
    socket.emit('leaveRoom')
    socket.emit('joinRoom', roomId )
    axios.get('http://localhost:3001/rooms/' + roomId)
  }
  function updateRoomsCoins(new_coins: Coin[]) {
    coins.value = new_coins
  }
  function checkPointCollision(point: { x: number, y: number, z: number }) {
    const collision = coins.value.find(coin => {
      const x = Math.abs(coin.position.x - point.x) == 0.0
      const y = Math.abs(coin.position.y - point.y) == 0.0
      const z = Math.abs(coin.position.z - point.z) == 0.0
      return x && y && z
    })
    if (collision) {
      socket.emit('grabCoin', {roomId: collision.room, coinId: collision.id})
    }
    return collision
  }
  return { coins, updateRoomsCoins, joinRoom, checkPointCollision }
})

socket.on('roomData', (roomData: Room) => {
  const coinsStore = useCoinsStore()
  coinsStore.updateRoomsCoins(roomData.coins)
})