import page1View from '../views/page1';
import page2View from '../views/page2';

export default (router) => {
  router.map({
    '/page1': {
      name: 'page1',
      component: page1View
    },
    '/page2': {
      name: 'page2',
      component: page2View
    }
  });
};
