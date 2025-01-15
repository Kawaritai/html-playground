# Notes
- State Management: Flux is a design pattern used for managing data flow in applications, but here, for building interacting data visualisations
    - [https://github.com/facebookarchive/flux/tree/main/examples/flux-concepts](https://github.com/facebookarchive/flux/tree/main/examples/flux-concepts)
- To compile all notable external resources
- Data Manipulation: Lodash has general functions useful for data work. 
  - Example: Visit https://jsconsole.com and load it with `:load lodash`
  - Named because it is represented by the low-dash, "_"
  - Has no side-effects (doesn't change objects passed to it)
  
- D3 in Depth: https://www.d3indepth.com/shapes/
- Object constancy: technique to help elements transition smoothly.
- Use .transition before specifying attributes. Can also add delay based on index of elements. Use a "key function" to ensure mixed up dataset doesn't screw up the visualisation.
For CSS, notable use of static and dynamic transitions.


# End Notes (from basic book)
Some of the things you learned were:
- What D3 is and what it’s used for
- D3’s approach to constructing data visualisations – how it’s more of a building blocks approach rather than a collection of ready-made charts
- The main functional aspects of D3, namely selections and its large collection of modules
- In-depth looks at selections and data joins
- Data requests using D3
- D3’s scale functions
- Layout functions (to separate the geometric computations from the rendering code)
- Different approaches to JavaScript modules
- Joining arrays to groups of elements
- Event handling with D3
- Flourish’s popup library
- Simple state management
- Using lodash to manipulate data
- D3’s transitions
- Detailed styling with CSS

Along the way you built Energy Explorer. Some key aspects of the build were:
- Using a layout function to perform the geometric computations. This makes the application easier to test and also would make it easier to switch to a different rendering library if necessary
- Joining an array to a group of elements in order to place a country’s circles in a single <g> element
- A significant amount of detailed styling, which hopefully has shown you the amount of CSS work that is often necessary to build a real-world data visualisation
- Adding an information popup to the visualisation
- Handling state using something similar to the Flux pattern. This is a simple, but powerful pattern that’s useful when building data visualisations (and other interactive applications)
- Using D3 to create a menu
- Sorting the countries using lodash
- Adding transitions (animations) to the visualisation
- Adding a legend, header, and footer to the visualisation

Data Visualisation Inspiration:
- https://wattenberger.com
- https://www.youtube.com/user/currankelleher
- https://shirleywu.studio