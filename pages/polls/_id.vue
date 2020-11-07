<template>
  <PollCardExpanded :poll="pollDetails" />
</template>

<script>
import PollCardExpanded from "~/components/PollCardExpanded";
export default {
  transition: "poll",
  components: {
    PollCardExpanded,
  },
  data() {
    return {
      pollDetails: {
        question: "Which character do you want to choose?",
        options: ["Rick", "Morty", "Summer", "Jerry", "Beth"],
        id: "1adf34wf90nd140ud412",
        due: new Date(2020, 11, 10),
        orgName: "CodeIIEST",
        orgImg: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
      },
      pollId: this.$route.params.id,
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
