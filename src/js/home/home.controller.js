import selectize from 'selectize';

// TODO - SmartGroceryList Features 
// 1. add checkbox to each row and strike through if checked
// 2. if checkbox is marked display a delete button
// 3. each row should have an autocomplete that gets populated from previous lists
// 4. be able to create a recipe and save it. when users want to cook that again
//    they can add it and all the ingrediants get added to list
// 5. integrate amazon alexa shopping list 
// 6. be able to select a grocery store and based on the name of an item see if anything is on sale
//    or if there are any coupes.
//    ie. if i put milk on the list and im going to shop rite, search shop rite coupons to see if 
//        any milk is on sale 
// 7. build out hardware to be able to clip phone to a shopping cart for quick use 
// 8. 
class HomeCtrl {

  constructor(AppConstants, $scope, $timeout) {
    'ngInject';
    this.list = [{
    	aile:5,
    	item: "Milk"
    }]
    this.appName = AppConstants.appName;

    this._$timeout = $timeout;
    $timeout(function(){
        $('select').selectize({
          options:[]
        });
    })

    $scope.$watchCollection(() => this.list, this.coolNumberChanged());
  }

  coolNumberChanged (newValue, oldValue) {
      return () => {
          if(this.list.length == 0){
            this.list.push({
              aile:5,
              item: "Milk"
            })
          }
          console.log('change', this.list);
      };
  }
  getList(){
    return this.list;
  }

  addItem(){
  	this.list.push({
    	aile: null,
    	item: "Milk"
    })
    this._$timeout(function(){
        $('select').selectize({
          options:[]
        });
    })
  }

  removeItem(item){
    console.log('item', item);
    var index = this.list.indexOf(item);
    this.list.splice(index,1);
  }
}

export default HomeCtrl;
