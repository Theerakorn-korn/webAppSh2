<template>
  <v-container>
    <v-card>
      <v-card-title>
        รายการหนังสือ
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="fetchBooks">รีเฟรช</v-btn>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="books"
        :loading="loading"
        class="elevation-1"
        loading-text="กำลังโหลดข้อมูล..."
        no-data-text="ไม่มีข้อมูลหนังสือ"
      ></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      books: [],
      loading: false,
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'ชื่อหนังสือ', value: 'title' },
        { text: 'ผู้แต่ง', value: 'author' },
        { text: 'สำนักพิมพ์', value: 'publisher' },
        { text: 'ปีที่พิมพ์', value: 'publish_year' },
        { text: 'ISBN', value: 'isbn' },
        { text: 'หมวดหมู่', value: 'genre' },
        { text: 'หน้า', value: 'pages' },
        { text: 'ราคา', value: 'price' },
        { text: 'สต็อก', value: 'stock' },
      ],
    };
  },
  methods: {
    async fetchBooks() {
      this.loading = true;
      try {
        const res = await fetch('http://localhost:8080/library_pytdb/book_select.php');
        const json = await res.json();
        if (json.status === 'success') {
          this.books = json.data;
        } else {
          console.error('API error:', json.message);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
      this.loading = false;
    },
  },
  mounted() {
    this.fetchBooks();
  },
};
</script>
