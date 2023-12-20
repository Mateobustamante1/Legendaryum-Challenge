

<script setup lang="ts">
import Rooms from './components/Rooms.vue'
import RoomInfo from './components/RoomInfo.vue';
import  Popup from './components/Popup.vue';
import Form from './components/Form.vue';
</script>


<template>
  <div class="w-1/3 mx-auto mt-8">
    <Popup/>
    <Rooms>
    </Rooms>
    <RoomInfo>
    </RoomInfo>
  </div>
</template>
