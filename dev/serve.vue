<template>
  <div id="app">
    <vue2-datepicker-jquery
      v-model="date"
      :locale="locale"
      :options="options"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import Vue2DatepickerJquery from '@/vue2-datepicker-jquery.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    Vue2DatepickerJquery
  },
  data () {
    return {
      options: {
        firstDay: 1,
        changeYear: true,
        changeMonth: true,
        dateFormat: 'yy.mm.dd',
      },
      locale: "ru",
      date: new Date().toLocaleDateString(),
    }
  }
});
</script>
