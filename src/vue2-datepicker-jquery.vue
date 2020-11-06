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

.ui-datepicker {
  width: 17em;
  padding: 0.2em 0.2em 0;
  display: none;
}
.ui-datepicker .ui-datepicker-header {
  position: relative;
  padding: 0.2em 0;
}
.ui-datepicker .ui-datepicker-prev,
.ui-datepicker .ui-datepicker-next {
  position: absolute;
  top: 2px;
  width: 1.8em;
  height: 1.8em;
}
.ui-datepicker .ui-datepicker-prev-hover,
.ui-datepicker .ui-datepicker-next-hover {
  top: 1px;
}
.ui-datepicker .ui-datepicker-prev {
  left: 2px;
}
.ui-datepicker .ui-datepicker-next {
  right: 2px;
}
.ui-datepicker .ui-datepicker-prev-hover {
  left: 1px;
}
.ui-datepicker .ui-datepicker-next-hover {
  right: 1px;
}
.ui-datepicker .ui-datepicker-prev span,
.ui-datepicker .ui-datepicker-next span {
  display: block;
  position: absolute;
  left: 50%;
  margin-left: -8px;
  top: 50%;
  margin-top: -8px;
}
.ui-datepicker .ui-datepicker-title {
  margin: 0 2.3em;
  line-height: 1.8em;
  text-align: center;
}
.ui-datepicker .ui-datepicker-title select {
  font-size: 1em;
  margin: 1px 0;
}
.ui-datepicker select.ui-datepicker-month,
.ui-datepicker select.ui-datepicker-year {
  width: 45%;
}
.ui-datepicker table {
  width: 100%;
  font-size: 0.9em;
  border-collapse: collapse;
  margin: 0 0 0.4em;
}
.ui-datepicker th {
  padding: 0.7em 0.3em;
  text-align: center;
  font-weight: bold;
  border: 0;
}
.ui-datepicker td {
  border: 0;
  padding: 1px;
}
.ui-datepicker td span,
.ui-datepicker td a {
  display: block;
  padding: 0.2em;
  text-align: right;
  text-decoration: none;
}
.ui-datepicker .ui-datepicker-buttonpane {
  background-image: none;
  margin: 0.7em 0 0 0;
  padding: 0 0.2em;
  border-left: 0;
  border-right: 0;
  border-bottom: 0;
}
.ui-datepicker .ui-datepicker-buttonpane button {
  float: right;
  margin: 0.5em 0.2em 0.4em;
  cursor: pointer;
  padding: 0.2em 0.6em 0.3em 0.6em;
  width: auto;
  overflow: visible;
}
.ui-datepicker
  .ui-datepicker-buttonpane
  button.ui-datepicker-current {
  float: left;
}

/* with multiple calendars */
.ui-datepicker.ui-datepicker-multi {
  width: auto;
}
.ui-datepicker-multi .ui-datepicker-group {
  float: left;
}
.ui-datepicker-multi .ui-datepicker-group table {
  width: 95%;
  margin: 0 auto 0.4em;
}
.ui-datepicker-multi-2 .ui-datepicker-group {
  width: 50%;
}
.ui-datepicker-multi-3 .ui-datepicker-group {
  width: 33.3%;
}
.ui-datepicker-multi-4 .ui-datepicker-group {
  width: 25%;
}
.ui-datepicker-multi
  .ui-datepicker-group-last
  .ui-datepicker-header,
.ui-datepicker-multi
  .ui-datepicker-group-middle
  .ui-datepicker-header {
  border-left-width: 0;
}
.ui-datepicker-multi .ui-datepicker-buttonpane {
  clear: left;
}
.ui-datepicker-row-break {
  clear: both;
  width: 100%;
  font-size: 0;
}

/* RTL support */
.ui-datepicker-rtl {
  direction: rtl;
}
.ui-datepicker-rtl .ui-datepicker-prev {
  right: 2px;
  left: auto;
}
.ui-datepicker-rtl .ui-datepicker-next {
  left: 2px;
  right: auto;
}
.ui-datepicker-rtl .ui-datepicker-prev:hover {
  right: 1px;
  left: auto;
}
.ui-datepicker-rtl .ui-datepicker-next:hover {
  left: 1px;
  right: auto;
}
.ui-datepicker-rtl .ui-datepicker-buttonpane {
  clear: right;
}
.ui-datepicker-rtl
  .ui-datepicker-buttonpane
  button {
  float: left;
}
.ui-datepicker-rtl
  .ui-datepicker-buttonpane
  button.ui-datepicker-current,
.ui-datepicker-rtl .ui-datepicker-group {
  float: right;
}
.ui-datepicker-rtl
  .ui-datepicker-group-last
  .ui-datepicker-header,
.ui-datepicker-rtl
  .ui-datepicker-group-middle
  .ui-datepicker-header {
  border-right-width: 0;
  border-left-width: 1px;
}
</style>