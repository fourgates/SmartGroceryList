# SmartGroceryList
A way to make grocery shopping quicker!

# SmartGroceryList Features 

1. ~add checkbox to each row and strike through if checked~
1. ~if checkbox is marked display a delete button~
1. each row should have an autocomplete that gets populated from previous lists
1. be able to create a recipe and save it. when users want to cook that again
they can add it and all the ingredients get added to list
1. integrate amazon alexa shopping list 
1. be able to select a grocery store and based on the name of an item see if anything is on sale or if there are any coupons.
   1. if i put milk on the list and im going to shop rite, search shop rite coupons to see if any milk is on sale
1. build out hardware to be able to clip phone to a shopping cart for quick use 
1. add a date picker to keep track of shopping list dates
1. need to create a data structure to store weekly lists (needed to populate autocomplete from previous week(s))
    1. date
    1. list of items
1. gulp needs to inject css
1. ~abstract product to grocery-list component~
1.  need a search / list component
	1. date filters
   1.  product filters
   1.   recipe filters
1. create a staples component that agregates common products from the past x weeks
  1. if less than 5 lists exist return anything that occurs more than once
14. create a shopping list service
  1. getList
  2. saveList
  3. getStaples
  4. searchList
15. move date picker to its own component
16. CRUD list operations
17. Need to fix selectize, to be able to load items that are already selected