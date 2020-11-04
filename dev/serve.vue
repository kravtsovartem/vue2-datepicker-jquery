<script>
import Vue from 'vue';
import Vue2DatepickerJquery from '@/vue2-datepicker-jquery.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    Vue2DatepickerJquery
  }
});
</script>

<template>
  <div id="app">
    <vue2-datepicker-jquery />
  </div>
</template>
