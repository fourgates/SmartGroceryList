class HomeCtrl {
  constructor(AppConstants, $scope) {
    'ngInject';
    this.list = [{
    	aile:5,
    	item: "Milk"
    }]
    this.appName = AppConstants.appName;

  }

  getList(){
    return this.list;
  }

  addItem(){
  	this.list.push({
    	aile:5,
    	item: "Milk"
    })
  }
}

export default HomeCtrl;
