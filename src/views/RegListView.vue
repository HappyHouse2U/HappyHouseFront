<template>
  <div class="container-fluid">
    <div class="row m-3">
      <div class="col-4">
        <h2 class="font-weight-bold mt-5 mb-3">지역별 거래 정보</h2>

        <form
          method="get"
          action="${pageContext.request.contextPath }/history/regList.do"
          class="d-grid gap-3 d-sm-flex mb-5"
        >
          <select name="sido" id="sido" class="form-select"></select>
          <select name="sigugun" id="sigugun" class="form-select">
            <option value="">시/군/구</option>
          </select>
          <select name="dong" id="dong" class="form-select">
            <option value="">동/읍/면</option>
          </select>
          <button
            type="submit"
            id="addr_search_btn"
            name="addr_search_btn"
            class="btn btn-secondary y w-25"
          >
            <i class="bi bi-search"></i>
          </button>
        </form>

        <!-- <ul class="list-group" style="height:620px; overflow:scroll;">
                    <%
                        List<History> list = (List<History>) request.getAttribute("historyList");
                        for (History history : list) {
                    %>
                    <li class="list-group-item list-group-item-action" onClick="location.href='${pageContext.request.contextPath}/history/detail.do?no=<%=history.getNo() %>'">
                        <h5 class="font-weight-bold"><%=history.getAptName() %><span
                                class="badge badge-warning">New</span></h5>
                        <div class="aptPrice">거래금액: <%=history.getAmount() %>만</div>
                        <div class="aptArea">전용면적: <%=history.getArea() %>
                        </div>
                        <div class="transactionDate">최근 거래일 : <%=history.getYear() %>.<%=history.getMonth() %>
                        </div>
                    </li>
                    <% } %>
                </ul> -->
      </div>
      <div class="col-8">
        <kakao-map></kakao-map>
      </div>
    </div>
  </div>
</template>

<script>
import KakaoMap from "@/components/KakaoMap.vue";
export default {
  components: {
    KakaoMap,
  },
};
</script>

<style></style>
