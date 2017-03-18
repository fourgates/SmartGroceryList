class HomeCtrl {

  constructor(AppConstants) {
    'ngInject';

    // app
    this.appName = AppConstants.appName;
  	this.loadResults();
  }

  loadResults(){
  	this.results = [
	    {
	  		date: new Date(),
	  		numberOfItem: 1,
	  		list: [
	  			{
	              item: "Butter",
	              aile: 3
	            }
	  		]

	  	},
	  	{
	  		date: new Date(),
	  		numberOfItem: 2,
	  		list: [
	  			{
	              item: "Milk",
	              aile: 1
	            },
	            {
	              item: "Butter",
	              aile: 3
	            }
	  		]
	  	}
  	];
  }
  getList(){
  	return this.results;
  }

  loadList(list){
  	this.currentList = list;
  }
}

export default HomeCtrl;
