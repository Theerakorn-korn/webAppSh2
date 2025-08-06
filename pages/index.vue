<template>
  <v-container>
    <v-card>
      <v-card-title>
        จัดการข้อมูลผู้ใช้ระบบ
        <v-spacer />
        <v-btn color="primary" @click="openDialog()">เพิ่มผู้ใช้</v-btn>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="users"
        :search="search"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-text-field v-model="search" label="ค้นหา" class="mx-4" />
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn icon small color="blue" @click="editItem(item)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon small color="red" @click="deleteItem(item)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Dialog Form -->
    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card-title>
          <span class="text-h6">{{ editedIndex === -1 ? 'เพิ่ม' : 'แก้ไข' }} ผู้ใช้</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field label="Username" v-model="editedItem.usersystems_uid" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Password" v-model="editedItem.usersystems_upass" type="password" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="ชื่อ-นามสกุล" v-model="editedItem.usersystems_name" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="อีเมล" v-model="editedItem.usersystems_email" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="เบอร์โทรศัพท์" v-model="editedItem.usersystems_phone" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  label="สถานะ"
                  v-model="editedItem.usersystems_status"
                  :items="['active', 'inactive']"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="ประเภทผู้ใช้" v-model="editedItem.usersystems_type" />
              </v-col>
              <!-- Add other fields as needed -->
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="blue darken-1" text @click="closeDialog()">ยกเลิก</v-btn>
          <v-btn color="green darken-1" text @click="save()">บันทึก</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      dialog: false,
      users: [],
      editedIndex: -1,
      editedItem: {
        usersystems_id: '',
        usersystems_uid: '',
        usersystems_uname: '',
        usersystems_upass: '',
        usersystems_name: '',
        usersystems_status: '',
        usersystems_type: '',
        usersystems_phone: '',
        usersystems_email: '',
        usersystems_provinceid: '',
        usersystems_prefectureid: '',
        usersystems_districtid: '',
        usersystems_title: '',
        usersystems_prefix: '',
        usersystems_iven: '',
        usersystems_typecol: '',
        usersystems_onoff: '',
      },
      headers: [
        { text: 'ชื่อผู้ใช้', value: 'usersystems_uid' },
        { text: 'ชื่อ-นามสกุล', value: 'usersystems_name' },
        { text: 'อีเมล', value: 'usersystems_email' },
        { text: 'เบอร์โทร', value: 'usersystems_phone' },
        { text: 'สถานะ', value: 'usersystems_status' },
        { text: 'ประเภท', value: 'usersystems_type' },
        { text: 'จัดการ', value: 'actions', sortable: false },
      ],
      testAPI:'',
    }
  },
  mounted() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      let res = await this.$http.post('usersystems.php',{
        ApiKey:'ovecktc2025'
      })
      this.users = res.data
    },
    openDialog() {
      this.editedIndex = -1
      this.editedItem = {
        usersystems_id: '',
        usersystems_uid: '',
        usersystems_uname: '',
        usersystems_upass: '',
        usersystems_name: '',
        usersystems_status: '',
        usersystems_type: '',
        usersystems_phone: '',
        usersystems_email: '',
        usersystems_provinceid: '',
        usersystems_prefectureid: '',
        usersystems_districtid: '',
        usersystems_title: '',
        usersystems_prefix: '',
        usersystems_iven: '',
        usersystems_typecol: '',
        usersystems_onoff: '',
      }
      this.dialog = true
    },
    editItem(item) {
      this.editedIndex = this.users.findIndex(u => u.usersystems_id === item.usersystems_id)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    async deleteItem(item) {
      if (confirm(`ยืนยันการลบผู้ใช้ ${item.usersystems_uid}?`)) {
        await this.$axios.$post('http://localhost/api/usersystems.delete.php', {
          usersystems_id: item.usersystems_id
        })
        this.fetchUsers()
      }
    },
    async save() {
      if (this.editedIndex === -1) {
        await this.$axios.$post('http://localhost/api/usersystems.insert.php', this.editedItem)
      } else {
        await this.$axios.$post('http://localhost/api/usersystems.update.php', this.editedItem)
      }
      this.fetchUsers()
      this.closeDialog()
    },
    closeDialog() {
      this.dialog = false
    }
  }
}
</script>
