<template>
  <div>
    <h3>{{ this.$route.params.id }}</h3>
    <CreatePoll
      title="Edit poll"
      :pollDetails="pollDetails"
      :allowExpansion="false"
    />
  </div>
</template>

<script>
import CreatePoll from "~/components/CreatePoll";
export default {
  transition: "poll",
  components: { CreatePoll },
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
