<template>
  <div id="#main" class="container">
    <!-- Left Section -->
    <LeftSection :form="form" :v$="v$" />

    <!-- Right Section -->
    <RightSection :Svg1="Svg1" :Svg2="Svg2" :Svg3="Svg3" :Svg4="Svg4" />
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

import LeftSection from "@/components/LeftSection.vue";
import RightSection from "@/components/RightSection.vue";

import Svg1 from "@/static/images/svgs/1.svg";
import Svg2 from "@/static/images/svgs/2.svg";
import Svg3 from "@/static/images/svgs/3.svg";
import Svg4 from "@/static/images/svgs/4.svg";

export default {
  setup() {
    const form = reactive({ email: "", password: "" });
    const rules = {
      email: { required, email },
      password: { required },
    };
    const v$ = useVuelidate(rules, form);

    watch(
      () => form.email,
      () => {
        v$.value.email.$touch();
      }
    );

    watch(
      () => form.password,
      () => {
        v$.value.password.$touch();
      }
    );

    onMounted(() => {
      const mm = useGsap.matchMedia();
      mm.add("(max-width: 1024px)", () => {
        useGsap.to(".svg1", {
          duration: 3,
          rotation: 360,
          opacity: 1,
          stagger: 1,
          ease: "power2.inOut",
          transformOrigin: "40px 180px",
          force3D: true,
          repeat: -1,
        });

        useGsap.to(".svg2", {
          duration: 3.5,
          rotation: 360,
          opacity: 1,
          stagger: 1,
          ease: "power2.inOut",
          transformOrigin: "-30px -145px",
          force3D: true,
          repeat: -1,
        });

        useGsap.to(".svg3", {
          duration: 4.5,
          rotation: 360,
          opacity: 1,
          stagger: 1.5,
          ease: "power2.inOut",
          transformOrigin: "45px -95px",
          force3D: true,
          repeat: -1,
        });

        useGsap.to(".svg4", {
          duration: 5.5,
          rotation: 360,
          opacity: 1,
          stagger: 1,
          ease: "power2.inOut",
          transformOrigin: "70px 80px",
          force3D: true,
          repeat: -1,
        });
        useGsap.to(".card-container", {
          x: 500,
          opacity: 1,
          delay: 0.3,
        });
      });

      // useGsap.from("#main", {
      //   y: 100,
      //   opacity: 0,
      //   delay: 1,
      // });

      useGsap.from("#form", {
        y: 100,
        opacity: 0,
        delay: 1,
      });

      useGsap.from("#description", {
        x: -100,
        opacity: 0,
        delay: 1.5,
      });

      useGsap.from("#title", {
        y: -400,
        opacity: 0,
        delay: 1,
      });

      useGsap.from(".card-container", {
        x: 500,
        opacity: 0,
        delay: 0.8,
      });

      mm.add("(min-width: 1025px)", () => {
        useGsap.to(".circle", {
          duration: 1,
          rotation: 360,
          opacity: 1,
          stagger: 0.5,
          ease: "power2.inOut",
          force3D: true,
        });

        useGsap.to(".svg1", {
          opacity: 0,
          delay: 3,
        });

        // Desktop animation
        useGsap.to(".svg1", {
          duration: 2.5,
          rotation: 360,
          opacity: 1,
          stagger: 1,
          ease: "power2.inOut",
          transformOrigin: "100px 440px",
          force3D: true,
          repeat: -1,
        });

        useGsap.to(".svg2", {
          duration: 3.5,
          rotation: 360,
          opacity: 1,
          stagger: 1,
          ease: "power2.inOut",
          transformOrigin: "-60px -330px",
          force3D: true,
          repeat: -1,
        });

        useGsap.to(".svg3", {
          duration: 4.5,
          rotation: 360,
          opacity: 1,
          stagger: 1.5,
          ease: "power2.inOut",
          transformOrigin: "100px -230px",
          force3D: true,
          repeat: -1,
        });

        useGsap.to(".svg4", {
          duration: 5.5,
          rotation: 360,
          opacity: 1,
          stagger: 1,
          ease: "power2.inOut",
          transformOrigin: "170px 180px",
          force3D: true,
          repeat: -1,
        });
      });
    });
    return { form, v$, Svg1, Svg2, Svg3, Svg4 };
  },
};
</script>

<style lang="scss">
.container {
  background: #f9f9f9;
  max-width: 100%;
  display: grid;
  grid-template-areas:
    "a c"
    "b c";
  grid-template-columns: 35% 1fr;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-areas:
      "a"
      "c"
      "b";
    grid-template-columns: 1fr;
  }
  @media (max-width: 1024px) {
    grid-template-areas:
      "a"
      "c"
      "b";
    grid-template-columns: 1fr;
  }
}
</style>
