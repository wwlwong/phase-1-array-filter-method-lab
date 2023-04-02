// Code your solution here
function findMatching(driver, name){
    return driver.filter(function (names) {
        return names.toUpperCase() == name.toUpperCase();
    });

}

function fuzzyMatch(driver, letter) {
    return driver.filter(function (names) {
        return names.startsWith(letter) == true;
    });
}

function matchName(driver, string) {
    let filterNames =  driver.filter(function(names) {
        return names.name == string;
      });
    return filterNames;
}