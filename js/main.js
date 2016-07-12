// Firebase Config
var config = {
    apiKey: "AIzaSyA45lx4yYAW1GEUQDYNehB_0NejTsXEGJs",
    authDomain: "fir-app-4125e.firebaseapp.com",
    databaseURL: "https://fir-app-4125e.firebaseio.com"
};

var activeList, listViewers;

/**
 * @source: https://developer.mozilla.org/en-US/docs/Web/API/URLUtils/search#Get_the_value_of_a_single_search_param
 * @param key
 */
function getQueryParam(key) {
    return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

function createList(db, name) {
    var list = db.ref('lists').push();
    list.set({'name' : name});
    return list;
}

function createItem(listRef, title) {
    listRef.child('items').push().set(title);
}

function setListUrl(listRef) {
    var listUrl = '?list=' + listRef.key;
    history.replaceState(null, '', listUrl);
    $('#list-url').text(location.origin + location.pathname + listUrl);
}

function watch(listReference)
{
    activeList = listReference;

    activeList.on("value", function(snap) {
       if(null == snap.val()) {
           unwatch();
       }
    });

    activeList.child('name').once('value').then(function(snap) {
        $('#list-name').text(snap.val());
    });

    activeList.child('items').on("value", function(snap) {
        var items = snap.val();
        
        $('#item-count').text(snap.numChildren());
        $('#list-items').empty();
        for(var key in items) {
            $('#list-items').append('<li data-key="'+ key +'"><input type="checkbox"> '+ items[key] +'</li>')
        }
    });

    setListUrl(activeList);
    $('#list').show();
    
    return activeList;
}

function unwatch()
{
    activeList = null;
    listViewers.end();
    $('#list').hide();
    history.replaceState(null, '', location.origin + location.pathname);
    alert('List has been deleted!');
}

function countMe(db, listKey) {
    listViewers = new Gathering(db, listKey);
    listViewers.join();
    listViewers.onUpdated(function(count, users) {
        $('#user-count').text(count);
    });
}