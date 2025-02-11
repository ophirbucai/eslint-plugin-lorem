# eslint-plugin-lorem

[![npm](https://img.shields.io/npm/v/eslint-plugin-lorem.svg)](https://www.npmjs.com/package/eslint-plugin-lorem)

**Tired of placeholder text creeping into your production code?**
Meet `eslint-plugin-lorem` – a lightweight ESLint plugin designed to catch unwanted strings (like Lorem Ipsum) in your codebase before they ever see the light of day.

## Why Use It?
- **Keep Your Code Clean:**

  Prevent accidental placeholder text (and the inevitable scolding from the marketing team) from ending up in your production code.

- **Easy to Configure:**

  With a simple setup, you can tailor the plugin to fit the specific needs of your project.

## Features
- **Multi-file Support:**
  Works seamlessly with JavaScript, React, Vue, Svelte, and HTML files.

- **Template Literal Detection:**
  Scans both regular strings and template literals for unwanted placeholder text.

- **Customizable:**
  Easily add or override the list of strings to check according to your project's needs.

- **Flexible Rule Disabling:**
  Disable the rule on specific lines, blocks, or entire files as needed.

## Quick Start
Add to your `.eslintrc.json`:

```json
{
  "extends": ["plugin:lorem/recommended"]
}
```
> In a future version we will support flat configuration (`eslint.config.js`).

## Example Configuration

Add the following to your ESLint configuration file:

```json
{
  "plugins": ["lorem"],
  "rules": {
    "lorem/no-lorem": ["error", {
      "strings": ["custom text"], // Add any additional strings you wish to check
      "override": true // Set to true to completely replace default strings
    }]
  }
}
```
This configuration tells ESLint to flag any occurrences of the specified strings, ensuring that your code remains professional and free from unwanted placeholder text.

## Get Started

Install the plugin via npm:

```bash
npm install eslint-plugin-lorem --save-dev
```
Then integrate it into your ESLint configuration as shown above. Now you can rest easy knowing that any stray Lorem Ipsum or other placeholder text will be caught early in your development process.
 
 
_Keep your codebase clean and professional with `eslint-plugin-lorem`—because placeholder text doesn't belong in production!_

---

### Disabling the Rule
Sometimes you may need to disable the rule:

- #### For a Single Line:
  ```js
  Copy
  // eslint-disable-next-line lorem/no-lorem
  const text = "Lorem ipsum dolor sit amet";
  ```
- #### For a Block:
  ```js
  /* eslint-disable lorem/no-lorem */
  const text1 = "Lorem ipsum dolor sit amet";
  const text2 = "Lorem ipsum dolor sit amet";
  /* eslint-enable lorem/no-lorem */
  ```
- #### For an Entire File:
  Place at the top of the file:

  ```js
  /* eslint-disable lorem/no-lorem */
  ```
## Default Strings Checked
  By default, the plugin checks for common placeholder strings such as:

- "lorem"
- "ipsum"
- "לורם"
- "איפסום"

## License

This project is licensed under the MIT-0 License.