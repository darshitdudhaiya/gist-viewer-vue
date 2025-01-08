# 📦 **Gist Viewer Vue**

[![NPM Version](https://img.shields.io/npm/v/gist-viewer-vue.svg)](https://www.npmjs.com/package/gist-viewer-vue)  
Easily embed and display GitHub Gists in your Vue applications with syntax highlighting, line numbers, and a responsive design.

## 🗂 Table of Contents
- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Usage](#-usage)
  - [Global Registration](#1-global-registration)
  - [Local Registration](#2-local-registration)
- [Props](#-props)
- [Example](#-example)
- [Customization](#-customization)
  - [Using Tailwind CSS](#using-tailwind-css)
- [Development & Contribution](#-development--contribution)
- [Contributing](#-contributing)
  - [Steps to Contribute](#steps-to-contribute)
  - [Guidelines](#guidelines)
- [License](#-license)
- [Support](#-support)


## 🚀 Features
- **Responsive Design**: Each file is scrollable horizontally for better readability.  
- **Syntax Highlighting**: Beautiful syntax highlighting for all major programming languages.  
- **Line Numbers**: Displays line numbers alongside your Gist content.  
- **Customizable**: Built with Tailwind CSS, easy to style and customize.  
- **TypeScript Support**: Fully typed and compatible with TypeScript.



## 📥 Installation

Install the package via npm or yarn:

```bash
npm install gist-viewer-vue
```
or
```bash
yarn add gist-viewer-vue
```


## 🛠️ Usage
### **1. Global Registration**

Register the package globally in your `main.ts` or `main.js` file:
```JavaScript
import { createApp } from "vue";
import App from "./App.vue";
import GistViewer from "gist-viewer-vue";

const app = createApp(App);

app.use(GistViewer); // Registers the plugin globally
app.mount("#app");

```
You can now use the `<GistViewer>` component anywhere in your app.

### **2. Local Registration**

To use it in a specific component, import it locally:

```HTML
<script setup lang="ts">
import GistViewer from "gist-viewer-vue";
</script>

<template>
  <GistViewer gistUrl="https://gist.github.com/your-username/your-gist-id" />
</template>
```


⚙️ Props
---

| Props  | Type | Required | Default | Description |
| ------- | ------ | ----------- | -------- | ------- |
| `gistUrl` | `string` | ✅ | `null` | The URL of the GitHub Gist you want to display.




## 📚 Example

Here's an example of using the `GistViewer` component:
```HTML
<template>
  <div>
    <h1>My GitHub Gist</h1>
    <GistViewer gistUrl="https://gist.github.com/your-username/your-gist-id" />
  </div>
</template>

<script setup lang="ts">
import GistViewer from "gist-viewer-vue";
</script>
```


## 🎨 Customization

### **Using Tailwind CSS**

This package uses Tailwind CSS for styling. You can customize the styles by modifying your Tailwind configuration or overriding the default styles.




## 🧪 Development & Contribution

We welcome contributions! Follow these steps to set up the package locally:

- Clone the repository:
	```bash
	git clone https://github.com/darshitdudhaiya/gist-viewer-vue.git
	```
- Install dependencies:
	```bash
	npm install
	```
- Run the development server:
	```bash
	npm run dev
	```


## 🤝 Contributing

We love contributions from the community! To contribute to this project, follow these guidelines:

### Steps to Contribute

1.  **Fork the Repository**: Click the "Fork" button on the repository page.

2.  **Clone Your Fork**: Clone the repository to your local machine:
    ```bash
    git clone https://github.com/your-username/gist-viewer-vue.git
    ```

3. **Create a Branch**: Create a new branch for your feature or fix:
	```bash
	git checkout -b my-feature-branch
	```

4.   **Make Changes**: Implement your changes in the codebase.

5.  **Commit Changes**: Commit your changes with a clear and concise message
	```bash
	git commit -m "Add feature: XYZ"
	```

6. **Push Changes**: Push your branch to your fork:
	```bash
	git push origin my-feature-branch
	```	

7.  **Submit a Pull Request**: Go to the original repository and open a Pull Request. Provide details about the changes you made.

### Guidelines

-   Ensure your code follows the project's style and conventions.
-   Write clear commit messages.
-   Add tests if you’re introducing new functionality.
-   Make sure your changes don’t break existing features.
-   Update documentation if necessary.


## 📝 License

This project is licensed under the [MIT License](LICENSE).


## 📞 Support

If you need help or have any questions, please reach out via [LinkedIn](https://linkedin.com/in/darshitdudhaiya).

---

Made with ❤️ by Darshit Dudhaiya. Follow me on [LinkedIn](https://linkedin.com/in/darshitdudhaiya).
