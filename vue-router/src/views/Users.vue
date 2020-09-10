<template>
  <v-layout row wrap pt-5 text-xs-center style="max-width:500px;margin: 0 auto;">
    <v-flex xs12>
      <h1>Users</h1>
      <p>유저를 검색해 주세요.</p>
    </v-flex>
    <v-flex xs12>
      <v-text-field v-model="userId" label="유저 번호를 입력하세요"></v-text-field>
      <v-btn @click="$router.push({name: `users-detail`, params:{id:userId}})">검색</v-btn>
    </v-flex>
    <v-flex xs12>
      <router-view></router-view>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      userId: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log("before Enter");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("before leave");
    next();
  },
  created() {
    console.log("router", this.$router); // 라우터에 선언되어있는 라우터객체들 옵션값들을 의미
    console.log("route", this.$route); // 현재 주소 param값이 어떤 값이 내려오는지 , params로 어떤 값이 내려오는지
    console.log("created");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>