# 🇨🇷 AI-Powered Electoral Analysis Framework

[![Playwright Tests](https://img.shields.io/badge/Framework-Playwright-green)](https://playwright.dev/)
[![Language-TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)](https://www.typescriptlang.org/)
[![Status-Active](https://img.shields.io/badge/Status-Active-brightgreen)](#)

## 🎯 Project Overview
This repository contains a professional end-to-end testing framework for **Voto-CR**, an AI-driven RAG (Retrieval-Augmented Generation) application built with Streamlit **designed and developed by Katherine Aguilar**.

## 👤 Author & Developer
**Katherine Aguilar Camacho**
* *Quality & AI Engineer*
* [LinkedIn Profile](https://www.linkedin.com/in/katherine-aguilar-4749b481)
* [Personal Website/Portfolio](https://kathagcam.github.io/)

---

### Key Engineering Goals:
* **Scalability:** Implementing a Page Object Model (POM) architecture for long-term maintenance.
* **Resilience:** Handling the unique challenges of Streamlit’s dynamic DOM and asynchronous AI execution.

---

## 🏗️ Architecture & Best Practices

The framework is built with a **Senior-level architecture**, focusing on separation of concerns:

* **Page Object Model (POM):** Encapsulated UI logic within page classes to minimize maintenance debt.
* **Custom Fixtures:** Utilizes Playwright Fixtures to provide "Ready-to-use" page objects to tests, reducing boilerplate.
* **Environment Agnostic:** Configured with a `baseURL` and relative paths.


---

## 📂 Project Structure

```text
├── e2e/               # Test suites (kebab-case)
│   └── home.spec.ts
├── pages/               # Page Object classes (PascalCase)
│   ├── BasePage.ts      # Shared logic & state guards
│   └── HomePage.ts      # Streamlit-specific locators
├── fixtures/            # Dependency injection & setup
│   └── baseTest.ts
├── playwright.config.ts # Global configurations & timeouts
└── package.json         # Scripts & dependencies

### 🚀 Execution Guide

1. **Clone the Repository**
\`\`\`bash
git clone https://github.com/kathagcam/voto-cr-qa.git
cd voto-cr-qa
\`\`\`

2. **Run Tests**
\`\`\`bash
npx playwright test
\`\`\`