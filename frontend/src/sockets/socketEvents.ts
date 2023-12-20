import { useCoinsStore } from '../stores/coins'; // Ajusta la ruta según tu estructura de carpetas
import { usePopupStore } from '../stores/popup';
import { storeToRefs } from 'pinia'; // Agrega esta línea para importar storeToRefs

// Función para manejar el evento 'roomData'
export function handleRoomData(roomData: any) {
  const coinsStore = useCoinsStore();
  coinsStore.updateRoomsCoins(roomData.coins);
}

// Otras funciones para manejar diferentes eventos si es necesario

export function handlePlayersChange(data: any) {
  const popupStore = usePopupStore();
  const { players } = storeToRefs(popupStore);
  players.value = data.usersInRoom;
  if (data.joined) popupStore.sendMessage('A new player joined the room, id' + data.id, 'success');
}

export function handleError(data: any) {
  const popupStore = usePopupStore();
  popupStore.sendMessage(data, 'error');
}

export function handleCoinGrabbed(data: any) {
  const popupStore = usePopupStore();
  popupStore.sendMessage('A player grabbed a coin in room ' + data.room, 'success');
}
