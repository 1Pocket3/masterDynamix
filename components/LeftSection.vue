<template>
  <div id="left" class="left-section self-center">
    <h6 id="title" class="title uppercase text-6xl w-[100%]">Test Form</h6>
    <p id="description" class="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      fermentum elit nec est congue, non tincidunt purus dapibus. Vivamus et
      interdum eros.
    </p>
  </div>
  <form id="form" class="form">
    <input
      type="email"
      placeholder="Email"
      v-model="form.email"
      class="input"
    />
    <input
      type="password"
      placeholder="Password"
      v-model="form.password"
      class="input"
    />
    <button type="submit" class="submit-btn">Apply</button>
  </form>
</template>

<script>
export default {
  name: "LeftSection",
  props: ["form"],
};
</script>

<style lang="scss" scoped src="@/assets/scss/left-section.scss"></style>
