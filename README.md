# SmartGroceryList
A way to make grocery shopping quicker!

# Features 
* ~create a list of groceries and be able to order them by the aile they should be in~
* be able to create a recipe and save it. when users want to cook that again they can add it and all the ingredients get added to list
* integrate amazon alexa shopping list 
* be able to select a grocery store and based on the name of an item see if anything is on sale or if there are any coupons.
   * if i put milk on the list and im going to shop rite, search shop rite coupons to see if any milk is on sale
* build out hardware to be able to clip phone to a shopping cart for quick use 

# Bugs
* Need to fix selectize, to be able to load items that are already selected
* gulp needs to inject css

# TODO
* create a staples component that aggregates common products from the past x weeks
  * if less than 5 lists exist return anything that occurs more than once
* create a shopping list service
  * getList
  * saveList
  * getStaples
  * searchList
* move date picker to its own component
* CRUD list operations
*  need a search / list component
	* date filters
   *  product filters
   *   recipe filters
* each row should have an autocomplete that gets populated from previous lists
* ~need to create a data structure to store weekly lists (needed to populate autocomplete from previous week(s))~
    * date
    * list of items
* ~add a date picker to keep track of shopping list dates~
* ~add checkbox to each row and strike through if checked~
* ~if checkbox is marked display a delete button~
* ~abstract product to grocery-list component~