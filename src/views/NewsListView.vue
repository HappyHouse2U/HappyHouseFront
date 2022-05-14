<template>
  <div>
    <main class="flex-shrink-0">
      <header class="py-5">
        <div class="container px-5">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-xxl-6">
              <div class="text-center my-5">
                <h1 class="fw-bolder mb-3 font-weight-bold">오늘의 뉴스</h1>
                <p class="lead fw-normal text-muted mb-4">
                  아파트에 관련된 오늘의 뉴스입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section class="py-5" id="scroll-target">
        <div class="container px-5 my-5">
          <div class="row gx-5 align-items-center">
            <c:if test="${!empty newsList}">
              <div class="col">
                <table class="table table-striped">
                  <tbody>
                    <c:forEach var="news" items="${newsList }">
                      <tr>
                        <td>
                          <a href="${news.link }" target="_blank"
                            >${news.title }</a
                          >
                        </td>
                      </tr>
                    </c:forEach>
                  </tbody>
                </table>
              </div>
            </c:if>

            <c:if test="${empty newsList}">
              <div>뉴스를 불러오지 못했습니다.</div>
            </c:if>
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
