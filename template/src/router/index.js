import Vue from 'vue';
import VueRouter from 'vue-router';

import routeConfig from './route-config';

Vue.use(VueRouter);

const router = new VueRouter();

router.beforeEach((transition) => {
  window.scrollTo(0, 0);
  transition.next();
});

routeConfig(router);

export default router;
