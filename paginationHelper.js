/*
 For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a  utility class helpful for querying paging information related to an array.

 The class is designed to take in an array of values and an integer indicating how many items will be allowed per each  page. The types of values contained within the collection/array are not relevant.

 The following are some examples of how this class is used:

 var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
 helper.pageCount(); //should == 2
 helper.itemCount(); //should == 6
 helper.pageItemCount(0); //should == 4
 helper.pageItemCount(1); // last page - should == 2
 helper.pageItemCount(2); // should == -1 since the page is invalid

 // pageIndex takes an item index and returns the page that it belongs on
 helper.pageIndex(5); //should == 1 (zero based index)
 helper.pageIndex(2); //should == 0
 helper.pageIndex(20); //should == -1
 helper.pageIndex(-10); //should == -1
*/

function PaginationHelper(collection, itemsPerPage){
  this.collection = collection
  this.itemsPerPage = itemsPerPage
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection? this.collection.length : 0
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.itemCount() / this.itemsPerPage)
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  if(pageIndex < 0 || pageIndex > (this.pageCount() - 1)) return -1
  return this.collection.slice(
    this.itemsPerPage * pageIndex, 
    this.itemsPerPage * pageIndex + this.itemsPerPage
  ).length
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  if(itemIndex < 0 || itemIndex > (this.itemCount() - 1)) return -1
  return Math.ceil((itemIndex + 1) / this.itemsPerPage) - 1
}