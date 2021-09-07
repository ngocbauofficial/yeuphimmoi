<template>
  <main class="my-10">
    <ProductCarousel :data="productHomePageTop" />
    <div class="my-5">
      <img class="mx-auto h-6 block" src="/images/divider.png" />
    </div>
    <div class="grid mt-10 m-1 grid-cols-12 grid-flow-col gap-12">
      <div class="col-span-9">
        <h1
          class="
            order-1
            text-xl
            sm:text-xl
            sm:leading-none
            font-extrabold
            tracking-tight
            text-gray-200
            mb-4
          "
        >
          <span class="m-1">Phim Đang Hot</span>
        </h1>
        <!-- Create Card By Joker Banny -->

        <ProductHomePage />
      </div>
      <div class="col-span-3">
        <TopView />
      </div>
    </div>
  </main>
</template>

<script>
import ProductCarousel from "../components/ProductCarousel";
import TopView from "../components/TopView";
import ProductHomePage from "../components/ProductHomePage";
export default {
  components: {
    ProductCarousel,
    TopView,
    ProductHomePage,
  },
  data() {
    return {
      productHomePageTop: [],
    };
  },
  async mounted() {
    const productHomePageTop = await this.$getProductHomePageTop({
      Start: 0,
      Length: 16,
    }).then((res) => {
      return res.data.data.data;
    });
    this.productHomePageTop = productHomePageTop;
  },
};
</script>
