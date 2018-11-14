import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const Index = resolve => {
  import('@/page/index').then(module => {
    resolve(module);
  });
};
const Online = resolve => {
  import('@/page/online').then(module => {
    resolve(module);
  });
};
const Schedule = resolve => {
  import('@/page/schedule').then(module => {
    resolve(module);
  });
};
const Userinfo = resolve => {
  import('@/page/userinfo').then(module => {
    resolve(module);
  });
};
const InfoEdit = resolve => {
  import('@/page/info-edit').then(module => {
    resolve(module);
  });
};
const Login = resolve => {
  import('@/page/login').then(module => {
    resolve(module);
  });
};
const Register = resolve => {
  import('@/page/register').then(module => {
    resolve(module);
  });
};

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/online',
      name: 'online',
      component: Online
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: Userinfo
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule
    },
    {
      path: '/infoedit',
      name: 'infoedit',
      component: InfoEdit
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
});
