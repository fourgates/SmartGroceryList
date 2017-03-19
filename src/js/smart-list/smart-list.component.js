import selectize from 'selectize';

class SmartListCtrl {

  constructor(AppConstants, $scope, $timeout) {
    'ngInject';

    this.$onInit = function(){
      // app
      this.appName = AppConstants.appName;
      this._$timeout = $timeout;

      // date picker
      this.isOpen = false;
      this.dateOptions = {
        dateDisabled: this.disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
      };

      // shopping list
      $scope.$watchCollection(() => this.currentList.list, this.onListChange());
    }
  }
    // date picker fnc's
  disabled(data) {
    var date = data.date,
    mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  openDatePicker(){
    this.isOpen = true;
  };

  // never let the list be empty 
  onListChange (newValue, oldValue) {
      // we need () => to get the right scope
      return () => {
          // if list is empty, add an item
          if(this.currentList.list.length == 0){
            this.currentList.list.push({
              item: ""
            })
          }
          this.initSelectize();
      };
  }
  // getter
  getList(){
    return this.currentList.list;
  }

  //add an item to this list
  addItem(){
  	this.currentList.list.push({
    	aile: null
    })
    this.initSelectize();
  }

  initSelectize(){
    this._$timeout(function(){
        $('select').selectize({
          options:[]
        });
    })
  }
  // removed a selected item
  removeItem(item){
    var index = this.currentList.list.indexOf(item);
    this.currentList.list.splice(index,1);
  }
}

let SmartList = {
  controller: SmartListCtrl,
  templateUrl: 'smart-list/smart-list.html',
  bindings:{
    currentList: '='
  },
};

export default SmartList;
