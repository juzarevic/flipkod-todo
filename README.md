# FlipkodTodo

You should be able to run the project with:
1. Run  `npm install` in the root of project folder
1. Serve the app any way you like (example below).
1. Open it in browser (tested in Firefox)
### What is done (2020-02-23, 4 hrs of work)
1. Project setup, investigating and experimenting with Angular Material.
1. Task module with service, model (interface), list component and detail component.
1. Refactorings along the way.
1. Service is semi-mocked. In service, we have state that is held in variable.
Three methods are developed that imitate REST methods: List (GET /tasks/), Create (POST /tasks/), Update (POST /tasks/{id})
Besides that, one method is developed for getting the empty model/object.
1. `mat-table` is used and refined to enable sort, filter, paginate. Also, row clicking handler is developed.
1. One dialog is used by DRY principle for editing and creating task. Copy of model is used to not get weird live updating
the table while editing in the dialog.
1. Snack bar is used for response to user when change is made.
1. This README.md is written.

### What is done (2020-02-24, 2 hrs of work)
1. Multi-selecting is developed, delete button is shown when applicable (when there is selection).
1. Module and component for deleting is developed, Delete (DELETE /tasks/{id}) method that imitate REST method is developed.
1. Whole CRUD is now done.

### What (is found out for now, or deliberately skipped for delivering quickly, that) should be fixed in existing functionality
1. Error handling for 'response' from service
1. Cosmetics for Filter and button area and dialog box
1. Generally, conforming Material design guidelines
1. Code comments.
1. In Delete modal, there is irritating default browser button. Don't now why it doesn't render as Material button.

### Remarks
Some subtasks for creating this TODO app are omitted since they are somewhat not applicable. Task entering and
viewing doesn't take much space since there are small amount of fields. Because of that, from UX perspective, 
it's better to retain View / Edit / Delete in popup, not on separate page. Since application is highly modular,
and Delete/Edit/Add components doesn't hold much logic for popup functionality, it's not expensive to refactor
the project in the future if task UI becomes to large, with a lot of functionalities. Because of all of that,
application doesn't have Back button nor two pages - it has only one page and popups where needed.

Below is the default README.md for Angular Project. 

___

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
