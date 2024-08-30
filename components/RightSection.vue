<template>
  <div id="right" class="right-section">
    <div class="smooth-bg"></div>
    <div class="circle large">
      <img :src="Svg1" alt="SVG" class="svg-icon svg1" />
      <img :src="Svg2" alt="SVG" class="svg-icon svg2" />
    </div>
    <div class="circle medium">
      <img :src="Svg3" alt="SVG" class="svg-icon svg3" />
    </div>
    <div class="circle small">
      <img :src="Svg4" alt="SVG" class="svg-icon svg4" />
    </div>
    <FlipCard />
  </div>
</template>

<script>
import FlipCard from "./FlipCard.vue";

export default {
  name: "RightSection",
  components: { FlipCard },
  props: ["Svg1", "Svg2", "Svg3", "Svg4"],
};
</script>

<style lang="scss" scoped src="@/assets/scss/right-section.scss"></style>
