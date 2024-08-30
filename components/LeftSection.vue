<template>
  <div id="left" class="left-section self-center">
    <h6 id="title" class="title uppercase text-6xl w-[100%]">Test Form</h6>
    <p id="description" class="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      fermentum elit nec est congue, non tincidunt purus dapibus. Vivamus et
      interdum eros.
    </p>
  </div>

  <form id="form" class="form" @submit.prevent="submitForm">
    <input
      type="email"
      placeholder="Email"
      v-model="form.email"
      @input="v$.email.$touch()"
      class="input"
    />

    <div
      class="input-errors"
      v-for="error of v$.email.$errors"
      :key="error.$uid"
    >
      <div class="error-msg">{{ error.$message }}</div>
    </div>

    <input
      type="password"
      placeholder="Password"
      v-model="form.password"
      @input="v$.password.$touch()"
      class="input"
    />
    <div
      class="input-errors"
      v-for="error of v$.password.$errors"
      :key="error.$uid"
    >
      <div class="error-msg">{{ error.$message }}</div>
    </div>

    <button type="submit" class="submit-btn">Apply</button>
  </form>
</template>

<script>
export default {
  name: "LeftSection",
  props: {
    form: Object,
    v$: Object,
  },
  computed: {
    isFormInvalid() {
      // check validation errors
      return this.v$.email.$errors || this.v$.password.$errors;
    },
  },
  methods: {
    submitForm() {
      if (!this.v$.$invalid) {
        // logic for send request
        alert(
          `Form submitted\nEmail: ${this.form.email}\nPSWD: ${this.form.password}`
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped src="@/assets/scss/left-section.scss"></style>
