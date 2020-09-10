<template>
  <div class="yellow lighten-3 pa-3">
    <h3>회원 정보를 수정할 수 있습니다.</h3>
    <p>수정사항</p>
    <v-text-field v-model="user.name" label="이름"></v-text-field>
    <v-text-field v-model="user.address" label="주소"></v-text-field>
    <v-text-field v-model="user.phone" label="전화번호"></v-text-field>
    <v-radio-group v-model="user.hasDog">
      <v-radio label="반려견있음" :value="true"></v-radio>
      <v-radio label="반려견없음" :value="false"></v-radio>
      <v-btn @click="changeUser">수정</v-btn>
    </v-radio-group>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: ["name", "address", "phone", "hasDog"],
  data() {
    return {
      user: {},
    };
    
  },
  created() {
    this.user.name = this.name;
    this.user.address = this.address;
    this.user.phone = this.phone;
    this.user.hasDog = this.hasDog;
  },
  methods: {
    changeUser() {
      this.$emit("child", this.user);
      // eventBus.$emit("userWasEdited", new Date());
      eventBus.userWasEdited(new Date());
    },
  },
};
</script>