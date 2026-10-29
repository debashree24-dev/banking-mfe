# BankingMfe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deploying to GitHub Pages

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the `bank-shell`, `loan-mfe`, and `insurance-mfe` projects and deploys them to GitHub Pages. In the repository settings, open **Pages** and set **Build and deployment → Source** to **GitHub Actions**. The workflow deploys on pushes to `main` or `master`, or can be run manually from the **Actions** tab.

The host app is published at the repository site URL, with the remote apps under `/loan-mfe/` and `/insurance-mfe/`. The remote URLs are configured in `projects/bank-shell/public/federation.manifest.json`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
