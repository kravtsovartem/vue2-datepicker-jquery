<template>
  <span class="jquery_date_picker">
    <input
      type="text"
      :value="value"
      ref="jquery_date_picker"
    />
    <span
      @click="clearDate"
      class="jquery_date_picker__close"
    >X</span>
  </span>
</template>

<script>
const $ = window.jQuery

export default {
  name: 'date-picker',
  props: {
    value: {
      type: String,
      default: new Date().toLocaleDateString()
    },
    'date-format': {
      type: String,
      default: 'dd.mm.yy'
    },
    'change-month': {
      type: Boolean,
      default: false
    },
    'change-year': {
      type: Boolean,
      default: false
    },
    'first-day': {
      type: Number,
      default: 1
    }
  },
  mounted: function () {
    $.datepicker.regional['ru'] = {
      closeText: 'Закрыть',
      prevText: 'Пред',
      nextText: 'След',
      monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
        'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
      dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
      dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
      dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      weekHeader: 'Нед',
      dateFormat: this.dateFormat,
      firstDay: this.firstDay,
      changeMonth: this.changeMonth,
      changeYear: this.changeYear
    }

    $.datepicker.setDefaults($.datepicker.regional['ru'])
    $(this.$refs.jquery_date_picker).datepicker({
      onSelect: (date) => {
        this.$emit('input', date)
      }
    })

    $(this.$refs.jquery_date_picker).datepicker('setDate', this.value)
  },
  beforeDestroy: function () {
    $(this.$refs.jquery_date_picker).datepicker('hide').datepicker('destroy');
  },
  methods: {
    clearDate () {
      this.$emit('input', '')
    }
  }
}
</script>

<style scoped>
.jquery_date_picker {
  position: relative;
}

.jquery_date_picker__close {
  position: absolute;
  right: 10px;
  cursor: pointer;
}
</style>