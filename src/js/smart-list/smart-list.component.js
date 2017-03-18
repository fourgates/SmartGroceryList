import selectize from 'selectize';

// TODO - SmartGroceryList Features 
//  -1-. add checkbox to each row and strike through if checked
//  -2-. if checkbox is marked display a delete button
// 3. each row should have an autocomplete that gets populated from previous lists
// 4. be able to create a recipe and save it. when users want to cook that again
//    they can add it and all the ingrediants get added to list
// 5. integrate amazon alexa shopping list 
// 6. be able to select a grocery store and based on the name of an item see if anything is on sale
//    or if there are any coupons.
//    ie. if i put milk on the list and im going to shop rite, search shop rite coupons to see if 
//        any milk is on sale 
// 7. build out hardware to be able to clip phone to a shopping cart for quick use 
// 8. add a date picker to keep track of shopping list dat
// -9.- need to create a data structure to store weekly lists (needed to populate autocomplete from previous week(s))
//     a. date
//     b. list of items
// 10. gulp needs to inject css
// -11.- abstract product to grocery-list component
// 12. need a search / list component
//      a. date filters
//      b. product filters
//      c. recipe filters
// 13. create a staples component that agregates common products from the past x weeks
//      a. if less than 5 lists exist return anything that occurs more than once
// 14. create a shopping list service
//      a. getList
//      b. saveList
//      c. getStaples
//      d. searchList
// 15. move date picker to its own component
// 16. CRUD list operations
class SmartListCtrl {
  constructor(AppConstants, $scope, $timeout) {
    'ngInject';
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
    this.currentList = {
      listId: null,
      list: [],
      date: new Date()
    }
    $scope.$watchCollection(() => this.currentList.list, this.onListChange());

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
          // init selectize
          this._$timeout(function(){
              $('select').selectize({
                options:[]
              });
          })
      };
  }
  // getter
  getList(){
    return this.currentList.list;
  }

  //add an item to this list
  addItem(){
  	this.currentList.list.push({
    	aile: null,
    	item: "Milk"
    })
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
  templateUrl: 'smart-list/smart-list.html'
};

export default SmartList;
