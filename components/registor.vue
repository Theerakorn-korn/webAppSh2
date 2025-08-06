<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-alert text color="info" class="mb-6 elevation-2 rounded-lg">
          <h3 class="text-h5 font-weight-bold mb-2">Lorem Ipsum</h3>
          <div class="mb-2">
            Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et
            ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor
            urna a orci. Proin viverra, ligula sit amet ultrices semper, ligula
            arcu tristique sapien, a accumsan nisi mauris ac eros. Curabitur
            turpis.
          </div>
          <v-divider class="my-4 info" style="opacity: 0.22"></v-divider>
          <v-row align="center" no-gutters>
            <v-col class="grow">
              Proin magna. Vivamus in erat ut urna cursus vestibulum. Etiam
              imperdiet imperdiet orci.
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="shrink">
              <v-btn color="info" outlined rounded>Okay</v-btn>
            </v-col>
          </v-row>
        </v-alert>
        <v-card class="pa-6 elevation-3 rounded-xl signup-card">
          <h2 class="mb-6 text-center signup-title">สมัครสมาชิก</h2>
          <v-form>
            <v-text-field
              label="ชื่อ-นามสกุล"
              class="mb-4"
              outlined
              rounded
              dense
            ></v-text-field>
            <v-text-field
              label="เบอร์โทร"
              class="mb-4"
              outlined
              rounded
              dense
            ></v-text-field>
            <v-text-field
              label="ที่อยู่"
              class="mb-6"
              outlined
              rounded
              dense
            ></v-text-field>
            <v-row justify="center" class="mt-2">
              <v-btn color="success" class="mr-4 px-8 py-2" rounded large
                >บันทึก</v-btn
              >
              <v-btn color="warning" class="px-8 py-2" rounded large outlined
                >ยกเลิก</v-btn
              >
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>



<style scoped>
.signup-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
}
.signup-card {
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.12);
}
.signup-title {
  color: #1976d2;
  font-weight: 700;
  letter-spacing: 1px;
}
.v-text-field input {
  background: #f5f7fa !important;
  border-radius: 12px !important;
}
.v-btn {
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: background 0.2s, color 0.2s;
}
.v-btn.success {
  background: linear-gradient(90deg, #43e97b 0%, #38f9d7 100%);
  color: #fff;
  box-shadow: 0 2px 8px rgba(67, 233, 123, 0.15);
}
.v-btn.warning {
  background: linear-gradient(90deg, #f7971e 0%, #ffd200 100%);
  color: #fff;
  box-shadow: 0 2px 8px rgba(255, 210, 0, 0.12);
}
.v-btn.outlined {
  background: transparent !important;
  color: #1976d2 !important;
  border: 2px solid #1976d2 !important;
}
.v-alert {
  background: linear-gradient(90deg, #e3ffe6 0%, #e0eafc 100%);
  border-radius: 18px;
}
@media (max-width: 600px) {
  .signup-card {
    padding: 16px !important;
  }
  .signup-title {
    font-size: 1.3rem;
  }
}
</style>
