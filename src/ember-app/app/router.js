import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-my-app1-building-l');
  this.route('i-i-s-my-app1-building-e',
  { path: 'i-i-s-my-app1-building-e/:id' });
  this.route('i-i-s-my-app1-building-e.new',
  { path: 'i-i-s-my-app1-building-e/new' });
  this.route('i-i-s-my-app1-employee-l');
  this.route('i-i-s-my-app1-employee-e',
  { path: 'i-i-s-my-app1-employee-e/:id' });
  this.route('i-i-s-my-app1-employee-e.new',
  { path: 'i-i-s-my-app1-employee-e/new' });
});

export default Router;
