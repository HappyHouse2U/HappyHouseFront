<template>
  <div>
    <main class="flex-shrink-0">
      <!-- Header-->
      <header class="py-5">
        <div class="container px-5">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-xxl-6">
              <div class="text-center my-5">
                <h1 class="fw-bolder mb-3 font-weight-bold">공지사항</h1>
                <p class="lead fw-normal text-muted mb-4">
                  서비스 이용을 안내하기 위한 공지사항을 게시합니다.
                </p>
                <a
                  class="btn btn-warning btn-lg font-weight-bold"
                  href="#scroll-target"
                  >확인하기</a
                >
              </div>
            </div>
          </div>
        </div>
      </header>
      <!-- About section one-->
      <section class="py-5" id="scroll-target">
        <div class="container px-5 my-5">
          <div class="row justify-content-end" style="padding: 10px">
            <div class="col-3">
              <form name="pageForm" id="pageForm">
                <input type="hidden" name="act" id="act" value="list" />
                <input type="hidden" name="pg" id="pg" value="" />
                <input type="hidden" name="key" id="key" value="${key }" />
                <input type="hidden" name="word" id="word" value="${word }" />
              </form>
              <div class="ml-3 row justify-content-end">
                <form
                  class="form-inline"
                  action="${pageContext.request.contextPath }/board/list.do"
                >
                  <input type="hidden" name="act" value="list" />
                  <input type="hidden" name="pg" value="1" />
                  <select name="key" class="form-control">
                    <option value="writer">아이디</option>
                    <option value="title">제목</option>
                    <option value="no">글번호</option>
                  </select>

                  <input type="text" class="ml-1 form-control" name="word" />
                  <button
                    type="submit"
                    class="ml-1 btn btn-outline-warning col-12"
                  >
                    검색
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div class="row gx-5 align-items-center">
            <c:if test="${!empty boards}">
              <div class="col">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>번호</th>
                      <th>제목</th>
                      <th>작성자</th>
                      <th>작성일</th>
                    </tr>
                  </thead>
                  <tbody>
                    <c:forEach var="board" items="${boards }">
                      <tr
                        onClick="location.href='${pageContext.request.contextPath}/board/select.do?no=${board.no }'"
                      >
                        <td>${board.no }</td>
                        <td>${board.title }</td>
                        <td>${board.writer }</td>
                        <td>${board.date }</td>
                      </tr>
                    </c:forEach>
                  </tbody>
                </table>
              </div>
              <div class="row justify-content-center">
                <div class="col-12">${navi.navigator }</div>
              </div>
            </c:if>

            <c:if test="${empty boards}">
              <div>작성한 글이 없습니다.</div>
            </c:if>
          </div>
          <div class="row justify-content-end">
            <div class="col-1">
              <a
                class="btn btn-warning"
                href="${pageContext.request.contextPath }/board/regist_form.do"
                >글작성</a
              >
            </div>
          </div>
        </div>
      </section>

      <!-- Team members section-->
      <section class="py-5 bg-light">
        <div class="container px-5 my-5">
          <div class="text-center">
            <h2 class="fw-bolder">Our team</h2>
            <p class="lead fw-normal text-muted mb-5">
              Dedicated to quality and your success
            </p>
          </div>
          <div
            class="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center"
          >
            <div class="col mb-5 mb-5 mb-xl-0">
              <div class="text-center">
                <img
                  class="img-fluid rounded-circle mb-4 px-4"
                  src="@/assets/driver.png"
                  alt="..."
                />
                <h5 class="fw-bolder">홍유진</h5>
                <div class="fst-italic text-muted">홀로 남은자</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
