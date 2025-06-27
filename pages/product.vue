<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1 class="text-center">รายการสินค้า IT</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col
                v-for="product in products"
                :key="product.id"
                cols="12"
                sm="6"
                md="4"
            >
                <v-card>
                    <v-img :src="product.image" height="200px"></v-img>
                    <v-card-title>{{ product.name }}</v-card-title>
                    <v-card-subtitle>{{ product.brand }}</v-card-subtitle>
                    <v-card-text>
                        <div>ราคา: {{ product.price }} บาท</div>
                        <div>{{ product.description }}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn :to="'/detail_product/' + product.id" color="primary" text>ดูรายละเอียด</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "ProductPage",
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: "โน้ตบุ๊ค Lenovo IdeaPad",
                    brand: "Lenovo",
                    price: 18900,
                    description: "โน้ตบุ๊คสำหรับงานทั่วไป หน้าจอ 15.6 นิ้ว",
                    image: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                },
                {
                    id: 2,
                    name: "สมาร์ทโฟน Samsung Galaxy S23",
                    brand: "Samsung",
                    price: 29900,
                    description: "สมาร์ทโฟนรุ่นใหม่ กล้องคมชัด แบตอึด",
                    image: "https://cdn.vuetifyjs.com/images/cards/road.jpg"
                },
                {
                    id: 3,
                    name: "หูฟังไร้สาย Sony WH-1000XM4",
                    brand: "Sony",
                    price: 9900,
                    description: "หูฟังตัดเสียงรบกวนคุณภาพสูง",
                    image: "https://cdn.vuetifyjs.com/images/cards/house.jpg"
                }
            ]
        };
    }
};
</script>

<style scoped>
.text-center {
    text-align: center;
}
</style>