<template>
    <v-container>
        <v-card v-if="product" class="mx-auto" max-width="500">
            <v-img :src="product.image" height="300px"></v-img>
            <v-card-title>{{ product.name }}</v-card-title>
            <v-card-subtitle>ราคา: {{ product.price }} บาท</v-card-subtitle>
            <v-card-text>
                <div>{{ product.description }}</div>
            </v-card-text>
        </v-card>
        <v-alert v-else type="error" outlined>
            ไม่พบข้อมูลสินค้า
        </v-alert>
    </v-container>
</template>

<script>
export default {
    async asyncData({ params }) {
    
        const products = [
            { id: '1', name: 'สินค้า A', price: 100, description: 'รายละเอียดสินค้า A', image: 'https://via.placeholder.com/400x300' },
            { id: '2', name: 'สินค้า B', price: 200, description: 'รายละเอียดสินค้า B', image: 'https://via.placeholder.com/400x300' },
              { id: '3', name: 'สินค้า C', price: 200, description: 'รายละเอียดสินค้า B', image: 'https://via.placeholder.com/400x300' },
        ];
        const product = products.find(p => p.id === params.id);
        return { product };
    }
}
</script>