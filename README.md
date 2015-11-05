Hamburger Icon Creator: _hamburgerMenuIconCreator.scss

Create a div that nests one child div

///@mixin hamburgerIconBox()
Style your parent div by declaring @include hamburgerIconBox.
hamburgerIconBox() passes 5 editable parameters:

1. $icon-height: 30px
2. $icon-width: 30px
3. $b-rad: 0px;
4. $padding: 4px;
5. $bg-color: #fff;

hamburgerIconBox() also declares the following styles:

1. box-sizing: border-box;
2. display: flex;
3. line-height: 0;
4. cursor: pointer;

A @content block is also provided for more styling flexibility.

///@mixin hamburgerIconBorder
You may style a border around your hamburgerIconBox() by declaring
hamburgerIconBorder(). hamburgerIconBorder() is nestable within hamburgerIconBox().
hamburgerIconBorder() passes 3 editable parameters:

1. $border-thickness: 1px;
2. $border-style: solid;
3. $border-color: #000;

///@mixin hamburgerIconBars
Style your child div by declaring @include hamburgerIconBars.
hamburgerIconBars() passes 4 editable parameters:

1. $height: 90%;
2. $bar-height: 4px;
3. $bar-width: 100%;
4. $bar-color: #000;

hamburgerIconBars() also declares the following styles:

1. box-sizing: border-box;
2. display: flex;
3. margin: auto;
4. position: relative;

hamburgerIconBars() renders the middle bar by declaring the pseudo element ::before and declares the following style within this rule:

1. @extend %pseudos.
2. margin: auto;

A @content block is also provided for more styling flexibility.

///Hover states
Declare @include hamburgerIconBoxHover, @include hamburgerIconBarsHover, and @include hamburgerIconBorderHover with your parent div's styling rule to add hover state styles. All parameters are equal to those passed in the static state mixins;


Hidden Mobile Menu Instructions: hamburgerPluginScript.js

Include the following script elements in your HTML file.
<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="scripts/hamburgerPluginScript.js"></script>

You can create a menu that animates from the left, right, top, or bottom of your browser window when a user activates your hamburger icon. Make sure to declare a width property with a number value when styling your hidden menu.

From left:
Create a class called "hamburger-icon_side-left" in the parent div that houses your hamburger icon . Nest an "x" icon in a div, with a class called "x_side-left".

From right:
Create a class called "hamburger-icon_side-right" in the parent div that houses your hamburger icon . Nest an "x" icon in a div, with a class called "x_side-right".

From top:
Create a class called "hamburger-icon_top" in the parent div that houses your hamburger icon . Nest an "x" icon in a div, with a class called "x_top".

From bottom:
Create a class called "hamburger-icon_bottom" in the parent div that houses your hamburger icon . Nest an "x" icon in a div, with a class called "x_bottom".

***Hidden menu Sass and X icon styles to come***# mobileMenuPlug-ins 
