<template>
  <div class="wood">
    <div @click="throwWood" class="wood-block"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hostId: null,
    };
  },
  methods: {
    throwWood() {
      this.$socket.emit("wood", this.hostId);
    },
  },
  mounted() {
    //get the id from the url params
    this.hostId = new URLSearchParams(document.location.search).get("id");
  },
};
</script>

<style lang="scss" scoped>
.wood {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .wood-block {
    width: 200px;
    height: 200px;
    background-color: rgb(138, 138, 138);
  }
  #qrscanner {
    width: 100%;
    max-width: 100vw;
    max-height: 100vh;
  }
}
</style>