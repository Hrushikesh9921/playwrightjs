# Playwright Test Automation

This repository contains end-to-end test automation using Playwright with ZeroStep AI integration. The project includes example tests demonstrating AI-powered test automation and traditional Playwright test scenarios.

## Features

- **Playwright Test Framework**: Modern end-to-end testing with cross-browser support
- **ZeroStep AI Integration**: AI-powered test automation using `@zerostep/playwright`
- **HTML Test Reports**: Comprehensive test reports generated after test runs
- **Example Tests**: Sample tests including AI-driven tests and traditional Playwright tests

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18 or higher
- **npm**: Comes bundled with Node.js

## Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd VScodeMCP
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure ZeroStep** (if using AI tests):
   - Create a `zerostep.config.json` file in the root directory
   - Add your ZeroStep token:
     ```json
     {
       "TOKEN": "your-zerostep-token-here"
     }
     ```
   - **Note**: The `zerostep.config.json` file is already in `.gitignore` to protect your token

4. **Set up environment variables** (for MFCentral tests):
   - Create a `.env` file in the root directory (optional, or set in your shell)
   - Add the following variables:
     ```bash
     USERID=your-user-id
     PASSWORD=your-password
     ```

## Running Tests

### Using Playwright UI Mode

The Playwright UI mode provides an interactive interface to run and debug tests visually.

1. **Launch Playwright UI**:
   ```bash
   npx playwright test --ui
   ```

2. **In the Playwright UI**:
   - You'll see a list of all available tests in the left sidebar
   - Click on any test to view its details
   - Use the **▶️ Run** button to execute individual tests or all tests
   - Watch tests run in real-time with live browser preview
   - Debug tests by setting breakpoints and inspecting elements
   - View test results, screenshots, and traces directly in the UI

3. **Features in UI Mode**:
   - **Test Explorer**: Browse all test files and individual tests
   - **Live Browser Preview**: See the browser actions as tests execute
   - **Time Travel**: Step through test execution with timeline controls
   - **Element Inspector**: Inspect and interact with page elements
   - **Console Logs**: View console output and network requests
   - **Screenshots & Videos**: Automatically captured for failed tests

### Running Tests from Command Line

**Run all tests**:
```bash
npx playwright test
```

**Run a specific test file**:
```bash
npx playwright test tests/example.spec.js
```

**Run tests in headed mode** (see the browser):
```bash
npx playwright test --headed
```

**Run tests in debug mode**:
```bash
npx playwright test --debug
```

**Run tests with specific browser**:
```bash
npx playwright test --project=chromium
```

## Test Structure

- **`tests/example.spec.js`**: AI-powered test using ZeroStep to interact with web pages using natural language
- **`tests/mfcentralTest.spec.js`**: Traditional Playwright test for MFCentral login flow

## Configuration

The project uses `playwright.config.js` for test configuration:
- **Test Directory**: `./tests`
- **Browser**: Chromium (Desktop Chrome)
- **Reporter**: HTML reporter (reports saved in `playwright-report/`)
- **Retries**: 2 retries on CI, 0 locally
- **Parallel Execution**: Enabled for faster test runs

## Viewing Test Reports

After running tests, view the HTML report:
```bash
npx playwright show-report
```

This will open the latest test report in your browser, showing:
- Test execution summary
- Passed and failed tests
- Screenshots and videos
- Execution traces
- Performance metrics

## Project Structure

```
VScodeMCP/
├── tests/                    # Test files
│   ├── example.spec.js      # AI-powered test example
│   └── mfcentralTest.spec.js # MFCentral login test
├── playwright.config.js      # Playwright configuration
├── zerostep.config.json      # ZeroStep configuration (gitignored)
├── package.json              # Project dependencies
└── README.md                 # This file
```

## Troubleshooting

**Issue**: Tests fail with ZeroStep errors
- **Solution**: Ensure `zerostep.config.json` exists with a valid token

**Issue**: MFCentral test fails with missing credentials
- **Solution**: Set `USERID` and `PASSWORD` environment variables

**Issue**: Playwright browsers not installed
- **Solution**: Run `npx playwright install` to install browser binaries

## Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [ZeroStep Playwright Documentation](https://zerostep.com/docs)
- [Playwright UI Mode Guide](https://playwright.dev/docs/test-ui-mode)

## License

ISC

