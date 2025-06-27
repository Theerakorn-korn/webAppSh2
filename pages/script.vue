<!-- ส่วน Design UI -->
<template>
    <v-container>   
        <div v-for="item in pic" :key="item.id">
            <v-img class="mt-1" :src="item.src" :height="item.height" width="item.width"></v-img>
        </div>

        <v-row>
            <v-col cols="12" md="6" v-for="item in product" :key="item.id">
                <v-card>
                    <div>
                       สินค้า : {{ item.name }}
                    </div>
                    <div>
                       ราคา {{ item.price }} บาท
                    </div>
                    <div>
                       รายละเอียด : {{ item.detail }}
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<!-- ส่วน Method -->
<script>
export default {
    data(){
        return{
            name:"T.Korn",
            pic:[
                {src:"https://picsum.photos/seed/picsum/200/300",height:"300",width:"300"},
                {src:"https://picsum.photos/seed/picsum/200/300",height:"300",width:"300"},
                {src:"https://picsum.photos/seed/picsum/200/300",height:"300",width:"300"},
                {src:"https://picsum.photos/seed/picsum/200/300",height:"300",width:"300"},
            ],
            product:[
                {name:"เสื้อ",price:"100",detail:"เสื้อผ้าฝ้าย"},
                {name:"กางเกง",price:"200",detail:"กางเกงยีนส์"},
                {name:"กระเป๋า",price:"300",detail:"กระเป๋าหนัง"},
                {name:"ร้องเท้า",price:"400",detail:"ร้องเท้ากีฬา"},
            ]

        }
    }
}
</script>

