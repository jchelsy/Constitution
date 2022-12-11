PAGE:
-    index.html
STYLESHEET:
-    styles.css
SCRIPTS:
-    main.js
OTHER:
-    header-bg.jpg



OBJECTIVES:

- Demonstrate the designing a website, showcasing the 10 Sections of Article I of the U.S. Constitution.

- Demonstrate a comprehensive understanding in the basic markup structure of an HTML document.

- Demonstrate an intuitive usage of a variety of HTML elements.

- Demonstrate sufficient knowledge of HTML document metadata, and its purpose(s).

- Showcase proper understanding of how to utilize an External CSS Stylesheet.

- Demonstrate adequate understanding of how to apply CSS styles to a variety of HTML attributes, and how to most effectively use them in the given scenario.

- Demonstrate an effective combination of HTML and CSS to create a user-friendly interface that is well-designed in regards to both visual appeal and easy navigation.

- Demonstrate an adequate level of understanding towards creating the highest-possible level of efficiency, in the creation of both HTML and CSS design, and their integration together.
- This includes, but is not limited to...
    - Using the minimum amount of code necessary to achieve a particular result.
    - Using self-explanatory code to reduce the amount of source code commenting.
    - Utilizing structural HTML elements to improve code readability & CSS design.

- Create a self-explanatory interface for minimum confusion among the user(s).

- Contains properly-formatted, easy-to-read, and well-commented code.

+ Demonstrate sufficient knowledge of integrating script(s) within an HTML document, via an external JavaScript file.

+ Demonstrate a rudimentary level of knowledge in using proper JavaScript syntax.

+ Demonstrate sufficient comprehension in using jQuery selectors, for the purpose of selecting and manipulating HTML element(s).

+ Showcase basic comprehension of attaching an event handler to an HTML element & passing a function to the event (for it order to be called when the event "fires").

+ Showcase the proper usage of a variety of jQuery functions (including, but not limited to: the css(), scroll(), and height() methods).



PAGE DESIGN:

- The site is composed of a single page, with the navigation linking to anchor points further down the page.

- There are 3 main parts of the site: a header, navigation menu, and main content section.

- The header is composed of a "Banner" that has been darkened, with a pale-white Title overlayed on top of the banner.

- The viewport height of the text was set to a lower value than the image, in order to have the text appear higher up (rather than perfectly centered).


- After the Header "Banner", there is a navigation menu, labelled with Roman Numerals 1-10.

- The navigation menu uses a radial gradient, along with a (lighter) top border & a (darker) bottom border, in order to fit the "old parchment" theme.


- While scrolling, when the Header "Banner" is passed, a simple jQuery script modifies CSS attributes applied to the navigation menu, in order to make it stick to the top of the page past that point.

- This creates a result where, after scrolling past the "Banner", the navigation menu no longer scrolls (it stays at the very top), and when the page scrolls back up, it reverts back to the default, where the navigation menu is right below the "Banner" Header.


- Next, the main content has a slightly textured effect, along with chosen colors to give a parchment-like appearance.

- Each Article Section is separated into a <section> tag, containing a label of which Section it is, and <p> paragraphs, describing it.

- The navigation menu (fixed at the top) has each item anchored to its corresponding Section (1-10) in the main content.

- Finally, a Footer is present at the bottom of the page, which also fits in line with the "old parchment" theme.


- On a separate note, a smooth scrolling effect has also been included, which means: when an item in the navigaton menu is selected, there is a scrolling animation to the Section, as opposed to an an instantaneous re-location.