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
      <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <c:if test="${id != null }">
            <span style="color: white; padding: 15px">${name }님</span>
          </c:if>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdownPortfolio"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              ><i class="h3 bi bi-person-circle"></i
            ></a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownPortfolio"
            >
              <c:choose>
                <c:when test="${id == null }">
                  <li>
                    <a
                      id="login_li"
                      class="dropdown-item"
                      href="${pageContext.request.contextPath }/member/login_form.do"
                      >로그인</a
                    >
                  </li>
                </c:when>
                <c:otherwise>
                  <li>
                    <a
                      id="logout_li"
                      class="dropdown-item"
                      href="${pageContext.request.contextPath }/member/logout.do"
                      >로그아웃</a
                    >
                  </li>
                </c:otherwise>
              </c:choose>
              <li>
                <a id="" class="dropdown-item" href="portfolio-item.html"
                  >내 관심목록</a
                >
              </li>
              <li>
                <a
                  id="member_edit_li"
                  class="dropdown-item"
                  href="${pageContext.request.contextPath }/member/modify_form.do"
                  >내 정보관리</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div> -->
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
