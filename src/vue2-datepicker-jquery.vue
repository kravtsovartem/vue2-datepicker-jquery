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
export default {
  name: 'date-picker',
  props: {
    value: {
      type: String,
      default: new Date().toLocaleDateString()
    },
    locale: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: () => { }
    }
  },
  mounted: function () {

    $.datepicker.regional['ru'] = {
      closeText: "Закрыть",
      prevText: "&#x3C;Пред",
      nextText: "След&#x3E;",
      currentText: "Сегодня",
      monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
      monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн",
        "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
      dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
      dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
      dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      weekHeader: "Нед"
    }

    $.datepicker.setDefaults($.datepicker.regional[this.locale])
    $(this.$refs.jquery_date_picker).datepicker({
      onSelect: (date) => {
        this.$emit('input', date)
      },
      ...this.options,
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

<style>
.jquery_date_picker {
  position: relative;
}

.jquery_date_picker__close {
  position: absolute;
  right: 10px;
  cursor: pointer;
}
</style>