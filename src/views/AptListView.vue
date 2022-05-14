<template>
  <div class="container-fluid">
    <div class="row m-3">
      <div class="col-4">
        <h2 class="font-weight-bold mt-5 mb-3">아파트별 거래 정보</h2>

        <form
          method="get"
          action="${pageContext.request.contextPath }/history/aptList.do"
          class="d-grid gap-3 d-sm-flex mb-5"
        >
          <div class="row">
            <div class="col-9">
              <input
                id="location"
                name="aptName"
                type="text"
                class="form-control"
                placeholder="서울특별시 종로구 사직동"
              />
            </div>
            <div class="col-3">
              <button id="join_btn" type="submit" class="btn btn-secondary">
                <i class="bi bi-search"></i>
              </button>
            </div>
          </div>
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
                        <span class="distSubway" style="color:#ffc107;float:right">지하철: <%=history.getDistFromSubway()%>m</span>
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
