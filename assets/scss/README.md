# Design and Core styling Architecture

> Explain about design UI/UX and Architecture styling of the project


## Table of contents

- [Design UI/UX Project](#design-ui/ux-project)
- [Why Using Vuetify](#why-using-vuetify)
- [Layout Structure](#layout-structure)
- [Layout Page](#layout-page)
- [Architecture Styling](#architeture-styling)

## Design UI/UX Project

This project is using [Vuetify](https://vuetifyjs.com/en/) for UI Library. Vuetify is built with [Material Design System](https://material.io/)

## Why Using Vuetify

Using Vuetify is the best solution for we creating or building some component with Material Theme Design.
Make the developer easier when developing the product and make our design consistent

## Layout Structure

Layout Structure is devided into 3 section
- Header (Navbar on the top)
- Content (In center of layout)
- Sidebar Menu (In the left of layout)

## Layout Page

List of Layout Page
- Layout [List](#layout-list)
- Layout [Form](#layout-form)

## Layout List

Layout List is layout for showing each of data, find the data and filtering data I choose table view for handling bunch of data. The reason using table view is for better user focusing when the user looking at the data. 
We have a search field on the left top for user find more specific data.
We have a create data button on the right top for user create data. 
The create data button is placed inside the layout list and not placed in the menu is for purpose:
- Reducing design complexity
- For better user journey
- Does not make users confused because the create button only exists in the layout list.

And in the Layout list have "Shortcut Hover Action" in the row of data in the table for shortcut action accessing page detail, page update and deleting the data. Making the table more attractive with "Shortcut Hover Action".

Before deleting the data I give Dialog (Modal) Component to confirmation user when user want to deleting the data.

## Layout Form

Layout Form is layout for create, read, update and delete the data.
This layout is for user fill the field and then storing to database.

## Architecture Styling

For Architecture Styling I using [Sass](https://sass-lang.com/) but I using Scss for beautify the code.
Combining [SMACSS](http://smacss.com/) + [BEM](http://getbem.com/introduction/) for Architecture.

## Thanks

Thank you for reading this explanation :)
