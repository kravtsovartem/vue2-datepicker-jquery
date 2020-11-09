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
require("jquery-ui-dist/jquery-ui.min.js") // Or npm i jquery-ui And require('jquery-ui/ui/widgets/datepicker') (more small bundle)
require("jquery-ui-dist/jquery-ui.min.css")
...
```

App.vue

```html
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
  import Vue2DatepickerJquery from 'vue2-datepicker-jquery'

  export default {
    name: 'App',
    components: { Vue2DatepickerJquery },
    data() {
      return {
        options: {
          firstDay: 1,
          changeYear: true,
          changeMonth: true,
          dateFormat: 'yy.mm.dd',
        },
        locale: 'ru',
        date: new Date().toLocaleDateString(),
      }
    },
  }
</script>
```

..or CDN..

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      http-equiv="X-UA-Compatible"
      content="IE=edge"
    />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1.0"
    />
    <script src="https://unpkg.com/jquery"></script>
    <script src="https://unpkg.com/jqueryui"></script>
    <link
      rel="stylesheet"
      href="https://unpkg.com/jqueryui/jquery-ui.css"
    />
    <script src="https://unpkg.com/vue"></script>
    <script src="https://unpkg.com/vue2-datepicker-jquery"></script>
  </head>
  <body>
    <div id="app">
      <vue2-datepicker-jquery
        v-model="date"
        :locale="locale"
        :options="options"
      />
    </div>

    <script>
      new Vue({
        el: '#app',
        data: {
          options: {
            firstDay: 1,
            changeYear: true,
            changeMonth: true,
            dateFormat: 'yy.mm.dd',
          },
          locale: 'ru',
          date: new Date().toLocaleDateString(),
        },
      })
    </script>
  </body>
</html>
```

## Theme

Rewriting jquery-ui.css

## Internationalization

```html
<vue2-datepicker-jquery
  v-model="date"
  locale="ru"
></vue2-datepicker-jquery>
```

### Props

| Prop    | Description                          | Type     | Default |
| ------- | ------------------------------------ | -------- | ------- |
| value   | '20.12.2020'                         | `String` | 'date'  |
| locale  | localization: ru, en                 | `String` | 'en'    |
| options | https://api.jqueryui.com/datepicker/ | `String` | {}      |

### Events

| Name  | Description                          | Callback Arguments |
| ----- | ------------------------------------ | ------------------ |
| input | When the value change(v-model event) | date               |

Copyright (c) 2020-present kravtsovartem

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fkravtsovartem%2Fvue2-datepicker-jquery.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fkravtsovartem%2Fvue2-datepicker-jquery?ref=badge_shield)
