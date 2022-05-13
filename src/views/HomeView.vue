<template>
  <div>
    <!-- Header-->
    <header class="bg-dark py-5">
      <div class="container px-5">
        <div class="row gx-5 align-items-center justify-content-center">
          <div class="col-lg-8 col-xl-7 col-xxl-6">
            <div class="my-5 text-center text-xl-start">
              <h1 class="display-5 fw-bolder text-white mb-2">
                정확한 아파트 공공데이터!
              </h1>
              <p class="lead fw-normal text-white-50 mb-5">
                지금 지역을 선택하고 아파트 실거래가를 조회해보세요.
              </p>
              <!-- <form method="get" action="${pageContext.request.contextPath }/history/regList.do" class="d-grid gap-3 d-sm-flex">
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
                  ><i class="bi bi-search"></i></button>
                </form> -->
            </div>
          </div>
          <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
            <img
              class="img-fluid rounded-3 my-5"
              src="@/assets/main.png"
              alt="..."
            />
          </div>
        </div>
      </div>
    </header>
    <!-- Features section-->
    <section id="features">
      <div class="container px-5 my-5">
        <div class="row gx-5">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="card w-75 mb-5">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="@/assets/banner1.png"
                      class="d-block w-100"
                      alt="..."
                      height="250"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="@/assets/banner2.png"
                      class="d-block w-100"
                      alt="..."
                      height="250"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="@/assets/banner3.png"
                      class="d-block w-100"
                      alt="..."
                      height="250"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="card w-75">
              <div class="card-header">
                <i class="bi bi-megaphone-fill me-2" style="color: red"></i>
                <span class="fw-bold">공지사항</span>
                <!-- <router-link to="/board"
                    ><i class="bi bi-plus-circle float-end"
                  /></router-link> -->
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  공공택지 공급제도 주요 개선사항 안내
                </li>
                <li class="list-group-item">
                  올해 첫 사전청약, 16일부터 접수 시작
                </li>
                <li class="list-group-item">
                  LH 주거생활서비스, 입주민 중심으로 운영체계 개편
                </li>
                <li class="list-group-item">
                  대내외 경제 불확실성에 광주 아파트 가격 상승세 둔화
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="row gx-5 row-cols-1 row-cols-md-2">
              <div class="col mb-5 h-100">
                <img src="@/assets/card1.png" />
              </div>
              <div class="col mb-5 h-100">
                <img src="@/assets/card2.png" />
              </div>
              <div class="col mb-5 mb-md-0 h-100">
                <img src="@/assets/card3.png" />
              </div>
              <div class="col h-100">
                <img src="@/assets/card4.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Testimonial section-->
    <div class="py-5 bg-light">
      <div class="container px-5 my-5">
        <div class="row gx-5 justify-content-center">
          <div class="col-lg-10 col-xl-7">
            <div class="text-center">
              <div class="fs-4 mb-4 fst-italic">
                "무엇이든 이왕이면 쌀 때 사고, 비쌀 때 팔아야하지 않겠습니까!"
              </div>
              <div class="d-flex align-items-center justify-content-center">
                <img
                  class="rounded-circle me-3"
                  src="https://dummyimage.com/40x40/ced4da/6c757d"
                  alt="..."
                />
                <div class="fw-bold">
                  홍유진, 이유리
                  <span class="fw-bold text-primary mx-1">/</span>
                  CEO, HappyHouse
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
