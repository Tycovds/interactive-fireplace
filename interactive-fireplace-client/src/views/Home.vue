<template>
  <div class="home">
    <div class="form">
      <router-link to="/fireplace">Host fireplace</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    a {
      border: none;
      outline: none;
      font-weight: 700;
      font-size: 2rem;
      color: #fff;
      background: none;
      cursor: pointer;
      margin-top: 2rem;
    }
  }
}
</style>
