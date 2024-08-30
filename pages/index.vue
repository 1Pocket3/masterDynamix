<template>
  <div id="main" class="container">
    <!-- Left Section -->
    <div id="left" class="left-section self-center">
      <h6 id="title" class="title uppercase text-6xl w-[100%] mt-[60%]">
        Test Form
      </h6>
      <p id="description" class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        fermentum elit nec est congue, non tincidunt purus dapibus. Vivamus et
        interdum eros.
      </p>
    </div>

    <!-- Form Section -->
    <form id="form" class="form ml-[10%]">
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

    <!-- Right Section -->
    <div id="right" class="right-section">
      <div class="smooth-bg"></div>
      <div id="#circle" class="circle large">
        <img id="#svg1" :src="Svg1" alt="SVG" class="svg-icon svg1" />
        <img id="#svg2" :src="Svg2" alt="SVG" class="svg-icon svg2" />
      </div>
      <div class="circle medium">
        <img id="#svg3" :src="Svg3" alt="SVG" class="svg-icon svg3" />
      </div>
      <div class="circle small">
        <img id="#svg4" :src="Svg4" alt="SVG" class="svg-icon svg4" />
      </div>

      <!-- Flip Card Section -->
      <div class="card-container">
        <div class="card">
          <div class="card-front">
            <!-- Front Content Here -->
          </div>
          <div class="card-back">
            <!-- Back Content Here -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import Svg1 from "@/assets/svgs/1.svg";
import Svg2 from "@/assets/svgs/2.svg";
import Svg3 from "@/assets/svgs/3.svg";
import Svg4 from "@/assets/svgs/4.svg";

export default {
  setup() {
    const form = reactive({ email: "", password: "" });
    const rules = {
      email: { required, email },
      password: { required },
    };
    const v$ = useVuelidate(rules, form);

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
        // useGsap.from(".circle", {
        //   y: -100,
        //   opacity: 0,
        //   delay: 1,
        // });
        useGsap.from(".card-container", {
          x: 500,
          opacity: 0,
          delay: 0.3,
        });
      });

      useGsap.from("#main", {
        y: 100,
        opacity: 0,
        delay: 1,
      });

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
        delay: 1.2,
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

<style lang="scss" scoped>
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

.left-section {
  grid-area: a;
  background: #f9f9f9;
  padding: 0px 60px 0px 70px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
  @media (max-width: 1024px) {
    width: 100%;
    padding: 20px;
  }
}

.svg-icon {
  width: 100px;
  height: 100px;
  object-fit: contain;
  &.svg1 {
    position: absolute;
    top: -50px;
    right: 50%;
  }
  &.svg2 {
    position: absolute;
    bottom: -30px;
    right: 30%;
  }
  &.svg3 {
    position: absolute;
    bottom: -40px;
    right: 50%;
  }
  @media (max-width: 1024px) {
    &.svg1 {
      position: absolute;
      top: -17px;
      right: 50%;
      width: 32.67px;
      height: 32.67px;
    }

    &.svg2 {
      position: absolute;
      bottom: -12px;
      right: 30%;
      width: 34.38px;
      height: 34.38px;
    }

    &.svg3 {
      position: absolute;
      bottom: -25px;
      right: 50%;
      width: 47.12px;
      height: 47.12px;
    }

    &.svg4 {
      width: 44.79px;
      height: 44.79px;
    }
  }
}

.title {
  white-space: nowrap;
  font-weight: 600;
  margin-bottom: 10px;

  @media (max-width: 640px) {
    font-size: 48px;
    text-align: none;
  }

  @media (max-width: 1024px) {
    font-size: 48px;
    margin-top: 30px;
  }
}

.description {
  display: block;
  margin-bottom: 20px;
  width: 100%;
  font-size: 16px;
  color: #202020;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 15px;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
    margin-bottom: 15px;
    width: 100%;
  }
}

.form {
  grid-area: b;
  width: 328px;
  display: flex;
  flex-direction: column;
  position: relative;
  top: -150px;

  @media (max-width: 1024px) {
    margin-top: 40%;
    // top: -160px;
  }
}

.input {
  margin-bottom: 10px;
  padding: 10px;
  width: 350px;
  padding-left: 18px;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 8px;
  }
}

.submit-btn {
  background: linear-gradient(25deg, #0061b9, #0299eb);
  width: 35%;
  margin-top: 30px;
  color: white;
  font-weight: bold;
  padding: 10px;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #002244, #007acc);
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 0.875rem;
  }
}

.right-section {
  grid-area: c;
  position: relative;
  background: #f9f9f9;

  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 300px;
    width: 100%;
  }
  @media (max-width: 1024px) {
    height: 472.39px;
    width: 100%;
  }
}

.circle {
  z-index: 0;
  position: absolute;
  border-radius: 50%;
  border: 4px solid #000;
}

.large {
  display: flex;
  width: 778px;
  height: 778px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  // @media (max-width: 768px) {
  //   width: 330.26px;
  //   height: 330.26px;
  // }

  @media (max-width: 1024px) {
    width: 330.26px;
    height: 330.26px;
  }
}

.medium {
  display: flex;
  width: 566px;
  height: 566px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 1024px) {
    width: 240.27px;
    height: 240.27px;
  }
}

.small {
  width: 354px;
  height: 354px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  rotate: 10px;

  @media (max-width: 1024px) {
    width: 150.27px;
    height: 150.27px;
  }
}

.card-container {
  rotate: -5.84deg;
  position: relative;
  width: 395px;
  height: 249.9px;
  perspective: 1000px; /* Gives the 3D effect */
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 167.68px;
    height: 106.08px;
  }

  @media (max-width: 1024px) {
    width: 400px;
    height: 250px;
  }
}

.card {
  width: 100%;
  height: 100%;
  position: absolute;
  transition: transform 0.8s ease-in-out;
  transform-style: preserve-3d; /* Preserves the 3D effect */
  border-radius: 18px;
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* Hides the back side when flipping */
  border-radius: 18px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-front {
  background: linear-gradient(
    135deg,
    rgb(238, 237, 90) 10%,
    rgb(234, 200, 57),
    rgb(234, 200, 57),
    rgb(221, 254, 120) 90%
  );
}

.card-back {
  background: linear-gradient(
    135deg,
    rgb(120, 220, 254) 10%,
    rgb(57, 200, 234),
    rgb(57, 200, 234),
    rgb(120, 237, 238) 90%
  );
  transform: rotateY(180deg); /* Initially hide the back side */
}

.card-container:hover .card {
  transform: rotateY(180deg); /* Flip the card on hover */
}

@media (max-width: 768px) {
  .card-container {
    width: 167.68px;
    height: 106.08px;
  }
}

.inner-radiant {
  rotate: -5.84deg;
  position: absolute;
  width: 480px;
  height: 260px;
  border-radius: 18px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: radial-gradient(circle at 100% 100%, red 0%, blue 50%);

  @media (max-width: 768px) {
    width: 120px;
    height: 80px;
  }
}

.smooth-bg {
  rotate: 45deg;
  position: absolute;
  width: 250.71px;
  height: 506.54px;
  border-radius: 18px;
  filter: blur(80px);
  //   top: 60%;
  //   transform: translate(-24%, 50%);

  background: radial-gradient(circle, rgba(152, 209, 241) 0%, #0098ea 100%)
    no-repeat;

  @media (max-width: 1024px) {
    width: 143.15px;
    height: 289.22px;
    filter: blur(50px);
  }
}
</style>
