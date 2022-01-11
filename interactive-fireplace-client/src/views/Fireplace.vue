<template>
  <div class="fireplace">
    <div :style="{ background: color }" id="fire"></div>
    <canvas id="qrcode"></canvas>
  </div>
</template>

<script>
import QRCode from "qrcode";
import Fireplace from "../scripts/FireplaceCanvas";
export default {
  name: "Fireplace",
  data() {
    return {
      color: "#ffa500",
    };
  },
  mounted() {
    const fireplace = new Fireplace("#fire", 10);
    this.$socket.on("fire", () => {
      fireplace.throwWood(10);
    });
    const canvas = document.getElementById("qrcode");
    const socketId = this.$socket.id;

    QRCode.toCanvas(
      canvas,
      `http://${window.location.hostname}:8080/wood/?id=${socketId}`,
      { width: 100 },
      function (error) {
        if (error) console.error(error);
        console.log("success!");
      }
    );
  },
};
</script>

<style lang="scss" scoped>
.fireplace {
  #qrcode {
    position: absolute;
    z-index: 3;
    right: 1rem;
    bottom: 1rem;
  }
}
</style>