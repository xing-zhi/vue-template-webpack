import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import rootComponent from './App.vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const app = Vue.extend(rootComponent){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

router.start(app, 'app'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
