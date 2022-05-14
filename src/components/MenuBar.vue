<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container px-5">
      <img class="navbar-brand" src="../assets/logo.png" height="50" />
      <router-link to="/" class="navbar-brand">HappyHouse</router-link>
      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav mx-5">
          <li class="nav-item active">
            <router-link to="/board" class="nav-link">공지사항</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/history/reg" class="nav-link"
              >지역별 실거래가</router-link
            >
          </li>
          <li class="nav-item active">
            <router-link to="/history/apt" class="nav-link"
              >아파트별 실거래가</router-link
            >
          </li>
          <li class="nav-item active">
            <router-link to="/news" class="nav-link">오늘의 뉴스</router-link>
          </li>
        </ul>
      </div>
      <user-button></user-button>
    </div>
  </nav>
</template>

<script>
import UserButton from "@/components/UserButton.vue";
export default {
  components: {
    UserButton,
  },
};
</script>

<style></style>
