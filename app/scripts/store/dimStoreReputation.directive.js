(function() {
  'use strict';

  angular.module('dimApp')
    .directive('dimStoreReputation', StoreReputation);

  StoreReputation.$inject = ['dimStoreService', '$window'];

  function StoreReputation(dimStoreService, $window) {
    return {
      controller: StoreReputationCtrl,
      controllerAs: 'vm',
      bindToController: true,
      replace: true,
      restrict: 'E',
      scope: {
        'store': '=storeData'
      },
      template: [
        '<div>',
        '<dim-category-header category="Reputation"></dim-category-header>',
        '<div class="sub-section sort-progression">',
        '  <div class="unequipped">',
        '    <span class="item" ng-if="faction.color" ng-repeat="faction in vm.store.progression.progressions | orderBy:\'order\' track by $index" title="{{faction.label}}\n{{faction.progressToNextLevel}}/{{faction.nextLevelAt}}\nLevel: {{faction.level}}">',
        '      <svg width="48" height="48">',
        '        <polygon stroke-dasharray="130" fill="{{faction.color}}" points="24,1 47,24 24,47 1,24"/>',
        '        <image xlink:href="" ng-attr-xlink:href="{{faction.icon | bungieIcon}}" ng-attr-x="{{faction.scale === \'.8\' ? 6 : 48-(faction.scale*48)}}" ng-attr-y="{{faction.scale === \'.8\' ? 6 : 48-(faction.scale*48)}}" width="48" height="48" ng-attr-transform="scale({{faction.scale}})" />',
        '        <polygon fill-opacity="0" stroke="#666" stroke-width="2" points="24,1 47,24 24,47 1,24" stroke-linecap="square"/>',
        '        <polygon stroke-dasharray="130" ng-if="faction.progressToNextLevel > 0" style="stroke-dashoffset:{{130-(130*faction.progressToNextLevel/faction.nextLevelAt)}}" fill-opacity="0" stroke="#FFF" stroke-width="2" points="24,1 47,24 24,47 1,24" stroke-linecap="square"/>',
        '      </svg>',
        '      <span class="item-stat item-faction" ng-bind="faction.level"></span>',
        '    </span>',
        '  </div>',
        '</div>',
        '</div>'
      ].join('')
    };
  }

  StoreReputationCtrl.$inject = ['$scope', 'dimStoreService', 'dimCategory', 'dimInfoService', 'dimBucketService'];

  function StoreReputationCtrl($scope, dimStoreService, dimCategory, dimInfoService, dimBucketService) {
    var vm = this;
  }
})();
