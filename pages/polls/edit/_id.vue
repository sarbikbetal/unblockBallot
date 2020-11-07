<template>
  <div>
    <h1>Sample route for editing a poll</h1>
    <h3>{{ this.$route.params.id }}</h3>
  </div>
</template>

<script>
import PollCardExpanded from "~/components/PollCardExpanded";
export default {
  transition: "poll",
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
