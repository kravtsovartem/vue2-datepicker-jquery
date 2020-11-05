# vue2-datepicker-jquery

> A JQuery Datepicker Component For Vue2

<a href="https://travis-ci.org/kravtsovartem/vue2-datepicker-jquery">
  <img src="https://travis-ci.org/kravtsovartem/vue2-datepicker-jquery.svg?branch=master" alt="build:passed">
</a>
<a href="https://coveralls.io/github/kravtsovartem/vue2-datepicker-jquery">
  <img src="https://coveralls.io/repos/github/kravtsovartem/vue2-datepicker-jquery/badge.svg?branch=master&service=github" alt="Badge">
</a>
<a href="https://www.npmjs.com/package/vue2-datepicker-jquery">
  <img src="https://img.shields.io/npm/v/vue2-datepicker-jquery.svg" alt="npm">
</a>
<a href="LICENSE">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT">
</a>

## Demo

<https://kravtsovartem.github.io/vue2-datepicker-jquery/>

## Install

```bash
$ npm install vue2-datepicker-jquery jquery jquery-ui-dist --save
```

## Usage

main.js

```js
...
window.$ = window.JQuery = require("jquery")
require("jquery-ui-dist/jquery-ui.min.js")
require("jquery-ui-dist/jquery-ui.min.css")
...
```

app.vue

```html
<template>
  <div id="app">
    <vue2-datepicker-jquery
      v-model="date"
      :dateFormat="format"
    ></vue2-datepicker-jquery>
  </div>
</template>

<script>
  import Vue2DatepickerJquery from 'vue2-datepicker-jquery'

  export default {
    name: 'App',
    components: { Vue2DatepickerJquery },
    data() {
      return {
        date: new Date().toLocaleDateString(),
        format: 'yy.mm.dd',
      }
    },
  }
</script>
```

## Theme

Rewriting jquery-ui.css

## Internationalization

So far only Russian

### Props

| Prop         | Description                       | Type      | Default    |
| ------------ | --------------------------------- | --------- | ---------- |
| value        | '20.12.2020'                      | `String`  | 'date'     |
| date-format  | to set the date format            | `String`  | 'dd.mm.yy' |
| change-month | possibility of changing the month | `Boolean` | 'false'    |
| change-year  | possibility of changing the year  | `Boolean` | 'false'    |
| first-day    | first day week                    | `Number`  | 1          |

### Events

| Name  | Description                          | Callback Arguments |
| ----- | ------------------------------------ | ------------------ |
| input | When the value change(v-model event) | date               |

Copyright (c) 2020-present kravtsovartem
