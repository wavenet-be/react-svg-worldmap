# CHANGELOG

## 1.0.22
* On hover - add highlight to border of current country by making the stroke 2 instead of 1.

## 1.0.23
* On hover - refine the highlighting. 

## 1.0.24

* Fixed dependency bug for d3-geo not being a module
* Added marker type that is still in progress in beta (see README.md file for more detail)

## 1.0.25

* Renamed the islands to avoid confusion
* Added user control over map styling using stylingFunction (see README.md file for more detail)

## 1.0.26

* Bug fix returning functionality due to the default styling function

## 1.0.27

* Bug fix, console.log that was forgotten, solved issue

## 1.0.28

* Marker update, changed the style of markers and updated them to be circular because I believe that those would be more optimal for small countries rather than a larger icon like the old version

## 1.0.29

* Reduce the size of the countries.geo.json by limiting number preceision to 3 digits

## 1.0.30

* Tried to reduce the size of countries.geo.json even more by changing the structure of the file and adding the extra properties programatically.
* Changed names so they have spaces in between multiple words ex. UnitedStates -> United States

## 1.0.31

* Fixed bug with new data where some countries did not display properly

## 1.0.32

* Minify geo json.

## 1.0.33

* Uglified our exported files, looking for change in size of file

## 1.0.34

* Restored JSON to previous implementation so that it works with the code I wrote and highlights the right things