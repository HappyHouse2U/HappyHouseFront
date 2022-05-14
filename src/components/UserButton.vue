<template>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <span v-if="id != ''" style="color: white; padding: 15px"
        >{{ name }}님</span
      >
      <li class="nav-item dropdown">
        <b-dropdown
          size="lg"
          variant="dark"
          toggle-class="text-decoration-none"
        >
          <template #button-content>
            <i class="h3 bi bi-person-circle"></i>
          </template>
          <b-dropdown-item v-if="id === ''" href="#">로그인</b-dropdown-item>
          <b-dropdown-item v-else @click="logout">로그아웃</b-dropdown-item>
          <!-- <b-dropdown-item href="#">내 관심목록</b-dropdown-item> -->
          <b-dropdown-item v-if="id != ''" href="#"
            >내 정보관리</b-dropdown-item
          >
        </b-dropdown>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      name: "",
    };
  },
  methods: {
    logout() {
      this.id = "";
      this.name = "";
    },
  },
};
</script>

<style></style>
