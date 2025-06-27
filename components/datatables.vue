<template>
  <div>
    <h3>Table</h3>
    <v-data-table :items="users" :headers="hearder"> </v-data-table>
  </div>
</template>
<script>

export default {
  data() {
    return {
      users: [],
      hearder:[
        { text:'id',value:'id'},
        { text:'name',value:'name'},
        { text:'username',value:'username'},

      ]
    }
  },
  async mounted() {
    await this.fetchDataJson()
  },
  methods: {
    async fetchDataJson() {
    let result =  await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
      console.table(result)

      this.users = result
    },
  },
}
</script>
