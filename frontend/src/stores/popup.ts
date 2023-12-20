import { ref, computed } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { type Ref } from 'vue'
import socket from '../socket'



export const usePopupStore = defineStore('popup', () => {
  const popup: Ref<{message:string, status:string}> = ref({ message: '', status: '' })
  const players: Ref<number> = ref(0)
  function sendMessage(message: string, status: string){
    popup.value = { message, status}
  }
  
  
  return { popup, sendMessage, players }
})

socket.on('playersChange', (data) => {
  const popupStore = usePopupStore()
  const { players } = storeToRefs(popupStore)
  players.value = data.usersInRoom
  if (data.joined) popupStore.sendMessage('A new player joined the room, id' + data.id, 'success')
})

socket.on('error', (data) => {
  const popupStore = usePopupStore()
  popupStore.sendMessage(data, 'error')
})

socket.on('coinGrabbed', (data) => {
  const popupStore = usePopupStore()
  popupStore.sendMessage('A player grabbed a coin in room ' + data.room, 'success')
})
