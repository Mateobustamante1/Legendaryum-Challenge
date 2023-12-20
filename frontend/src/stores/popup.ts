import { ref, computed } from 'vue';
import { defineStore, storeToRefs } from 'pinia';  // Asegúrate de tener esta importación
import { type Ref } from 'vue';
import socket from '../sockets/socket';
import { handlePlayersChange, handleError, handleCoinGrabbed } from '../sockets/socketEvents'; // Ajusta la ruta según tu estructura de carpetas

export const usePopupStore = defineStore('popup', () => {
  const popup: Ref<{ message: string; status: string }> = ref({ message: '', status: '' });
  const players: Ref<number> = ref(0);

  function sendMessage(message: string, status: string) {
    popup.value = { message, status };
  }

  return { popup, sendMessage, players };
});

// Manejo de eventos socket.on
socket.on('playersChange', handlePlayersChange);
socket.on('error', handleError);
socket.on('coinGrabbed', handleCoinGrabbed);
// Agrega otras llamadas socket.on si es necesario
