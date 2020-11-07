<template>
  <v-col>
    <h3>{{ this.$route.params.id }}</h3>
    <v-col cols="12" sm="9" md="7" xl="5" class="mx-auto">
      <EditPoll title="Edit poll" :pollDetails="pollDetails" />
    </v-col>
  </v-col>
</template>

<script>
import EditPoll from "~/components/EditPoll";
export default {
  transition: "poll",
  components: { EditPoll },
  data() {
    return {
      pollId: this.$route.params.id,
      pollDetails: {
        question: "Which character do you want to choose?",
        options: ["Rick", "Morty", "Summer", "Jerry", "Beth"],
        id: "1adf34wf90nd140ud412",
      },
    };
  },
};
</script>

<style>
.poll-enter-active {
  transition: all 0.3s;
}
.poll-enter {
  opacity: 0.1;
}
.poll-leave-to,
.poll-leave {
  opacity: 0;
}
.poll-move {
  transition: transform 0.2s;
}
</style>
