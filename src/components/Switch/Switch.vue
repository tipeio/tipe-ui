<template>
  <label class="switch">
    <input type="checkbox">
    <span class="slider round"/>
  </label>
</template>

<script>
export default {
  name: 'TipeSwitch'
}
</script>

<style scoped lang="postcss">
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 24px;
}

/* Hide default HTML checkbox */
.switch input {
  display: none;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  background-color: rgba(152, 152, 152, 0.11);
}

.slider:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: -1.5px;
  background-color: white;
  border: 2px #d0d7dd solid;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-image: var(--purple-gradient);
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 24px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
