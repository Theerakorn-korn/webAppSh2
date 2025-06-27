<template>
  <v-container class="mt-5" max-width="500px">
    <v-card>
      <v-card-title>
        สมัครสมาชิก
      <v-spacer></v-spacer>
      <v-btn to="/inspire">
        Home
      </v-btn>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
            v-model="user.name"
            :rules="[v => !!v || 'กรุณากรอกชื่อ']"
            label="ชื่อ"
            required
          ></v-text-field>
          <v-text-field
            v-model="user.email"
            :rules="[v => /.+@.+\..+/.test(v) || 'อีเมลไม่ถูกต้อง']"
            label="อีเมล"
            required
          ></v-text-field>
          <v-text-field
            v-model="user.password"
            :rules="[v => v.length >= 6 || 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร']"
            label="รหัสผ่าน"
            type="password"
            required
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="submit" :disabled="!valid">
          สมัครสมาชิก
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      user: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // ส่งข้อมูลไปยัง backend หรือแสดงผลลัพธ์
        alert('สมัครสมาชิกสำเร็จ!');
      }
    }
  }
}
</script></template>