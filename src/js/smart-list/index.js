import angular from 'angular';

// Create the module where our functionality can attach to
let module = angular.module('app.smart-list', []);

// Components
import SmartList from './smart-list.component';
module.component('smartList', SmartList);

export default module;
