# Project Name

## Overview

This project uses Playwright for end-to-end testing and GitHub Actions for continuous integration and deployment (CI/CD).

## Prerequisites

- Node.js
- npm or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/55stella/ui-automation-task.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```bash
   npm install
   ```
3. Run test and generate report
  npm run ui:test
  npm run allure-report
  npm run default-report




## Running Tests Locally

To run tests locally:

```bash
npx playwright test
```

## CI/CD Pipeline with GitHub Actions

The CI/CD pipeline is defined in the `.github/workflows/playwrite.yml` file and runs on:

- Pushes to the `main` branch
- Pull requests to the `main` branch


## Common Issues

### `net::ERR_ABORTED` or `frame was detached` Error

- Ensure the page is fully loaded before interacting:

  