<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원정보를 확인합니다.</h3>
    <p>상세사항</p>
    <v-list dense>
      <v-list-item>
        <v-list-item-content>이름:</v-list-item-content>
        <v-list-item-content class="align-end">{{ name }}</v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>주소:</v-list-item-content>
        <v-list-item-content class="align-end">{{ address }}</v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>전화번호:</v-list-item-content>
        <v-list-item-content class="align-end">{{ phone }}</v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>반려견유무:</v-list-item-content>
        <v-list-item-content class="align-end">{{ hasDogKr }}</v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>수정일자</v-list-item-content>
        <v-list-item-content class="align-end">{{ getDateAndTime(editeDate) }}</v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { eventBus } from "../main";
import { dateFormat } from "../mixins/dateFormat";
export default {
  data() {
    return {
      editeDate: null,
    };
  },
  props: ["name", "address", "phone", "hasDog"],
  computed: {
    hasDogKr() {
      return this.hasDog === true ? "있음" : "없음";
    },
  },
  created() {
    eventBus.$on("userWasEdited", (date) => {
      this.editeDate = date;
    });
  },
  methods: {
    // getDateAndTime(date) {
    //   if (date !== null) {
    //     let hour = date.getHours();
    //     let minutes = date.getMinutes();
    //     let fullDate = `${date.getFullYear()}/${
    //       date.getMonth() + 1
    //     }/${date.getDate()}`;
    //     return `${fullDate} ${hour}:${minutes}`;
    //   } else {
    //     return null;
    //   }
    // },
  },
  mixins: [dateFormat],
};
</script>