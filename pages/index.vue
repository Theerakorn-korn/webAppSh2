<template>
  <v-container fluid>
    <div class="mt-10">
      <datatables />
     
    </div>
    <carousel />

    <NuxtLogo />
    <Tutorial />

    <!-- Banner -->
    <v-img src="/banner.jpg" height="400px" class="mb-4">
      <v-row class="fill-height" align="center" justify="center">
        <v-col class="text-center">
          <h1 class="display-2 text-white font-weight-bold">
            ยินดีต้อนรับสู่ร้าน IT
          </h1>
          <p class="subtitle-1 text-white">สินค้าไอทีทุกชนิด พร้อมส่งถึงคุณ</p>
          <v-btn color="primary" large>ช้อปเลย</v-btn>
        </v-col>
      </v-row>
    </v-img>

    <!-- Categories Section -->
    <v-row>
      <v-col cols="12" class="text-center">
        <h2>หมวดหมู่สินค้า</h2>
      </v-col>
      <v-col cols="6" md="3" v-for="category in categories" :key="category.id">
        <v-card class="text-center">
          <v-img :src="category.image" height="150px"></v-img>
          <v-card-title>{{ category.name }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <!-- Featured Products Section -->
    <v-row class="mt-4">
      <v-col cols="12" class="text-center">
        <h2>สินค้าแนะนำ</h2>
      </v-col>
      <v-col
        cols="12"
        md="4"
        v-for="product in featuredProducts"
        :key="product.id"
      >
        <v-card>
          <v-img :src="product.image" height="200px"></v-img>
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-subtitle>ราคา: {{ product.price }} บาท</v-card-subtitle>
          <v-card-text>{{ product.description }}</v-card-text>
          <v-card-actions>
            <v-btn color="primary">ดูรายละเอียด</v-btn>
            <v-btn color="secondary">เพิ่มลงในรถเข็น</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import carousel from '~/components/carousel.vue'
import datatables from '~/components/datatables.vue'

import NuxtLogo from '~/components/NuxtLogo.vue'
import Tutorial from '~/components/Tutorial.vue'
export default {
  components: {
    carousel,
    NuxtLogo,
    Tutorial,
    datatables,
  },
  data() {
    return {
      categories: [
        { id: 1, name: 'Laptop', image: '/categories/laptop.jpg' },
        { id: 2, name: 'Smartphone', image: '/categories/smartphone.jpg' },
        { id: 3, name: 'Tablet', image: '/categories/tablet.jpg' },
        { id: 4, name: 'Accessories', image: '/categories/accessories.jpg' },
      ],
      featuredProducts: [
        {
          id: 1,
          name: 'Laptop X',
          price: 25000,
          description: 'โน้ตบุ๊คทรงพลัง...',
          image: '/products/laptop-x.jpg',
        },
        {
          id: 2,
          name: 'Smartphone Y',
          price: 15000,
          description: 'สมาร์ทโฟนล้ำสมัย...',
          image: '/products/smartphone-y.jpg',
        },
        {
          id: 3,
          name: 'Tablet Z',
          price: 12000,
          description: 'แท็บเล็ตที่เหมาะ...',
          image: '/products/tablet-z.jpg',
        },
      ],

      sum: '',
    }
  },

  mounted() {
    this.cal()
    this.featchdata()
  },

  methods: {
    async cal() {
      let a = 5
      let b = 10
      let sum = parseInt(a + b)
      this.sum = sum
    },

    async featchdata() {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((json) => console.log(json))
    },
  },
}
</script>
