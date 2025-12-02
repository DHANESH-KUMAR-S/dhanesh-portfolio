# 📋 Project Documentation

## 📚 Project Overview

This project, named "my-portfolio", is a personal portfolio website bootstrapped with Create React App. Its primary purpose is to showcase the developer's skills, projects, and certifications in an interactive and visually appealing manner.

### Project Purpose and Goals

*   **Display Portfolio**: Present a comprehensive overview of the developer's professional capabilities, including technical and soft skills.
*   **Showcase Projects**: Highlight key projects with detailed descriptions, technology stacks, and links to live demos or repositories.
*   **Feature Certifications**: Illustrate acquired certifications in an engaging, interactive gallery.
*   **Interactive User Experience**: Provide a dynamic and animated user interface using modern web technologies to create an immersive experience.
*   **Responsive Design**: Ensure the portfolio is accessible and looks great across various devices and screen sizes.
*   **Performance**: Optimize for good web performance, indicated by the inclusion of `web-vitals`.
*   **Maintainability**: Utilize a well-structured React component-based architecture for easy maintenance and future extensions.

### Technology Stack and Architecture

The project is a **Single Page Application (SPA)** built primarily with **React.js** for the frontend.

**Key Technologies:**

*   **React 19**: The core JavaScript library for building user interfaces.
*   **Material-UI (MUI) v7**: A popular React UI framework for pre-built, customizable components and a consistent design language.
*   **Framer Motion v12**: A powerful library for declarative animations, used for various UI transitions and effects.
*   **React Simple Typewriter v5**: A component for creating animated typing effects, used in the hero section.
*   **3D Graphics & Physics**:
    *   **@react-three/fiber v9**: A React renderer for Three.js, enabling 3D scenes to be managed declaratively within React.
    *   **@react-three/drei v10**: A collection of useful helpers and abstractions for React Three Fiber.
    *   **@react-three/rapier v2**: A physics engine wrapper for React Three Fiber, allowing realistic physical interactions in 3D scenes (though not directly visible in `App.js`, it's a dependency for potential future 3D physics).
    *   **Ogl v1**: A lightweight WebGL library used for custom shader-based graphics, notably for particles and the circular certificate gallery.
    *   **Three.js v0.178**: The underlying 3D graphics library for much of the 3D rendering (accessed via `@react-three/fiber` and `@react-three/drei`).
    *   **Meshline v3**: Used for drawing thick lines in Three.js, specifically for the lanyard component.
*   **State Management**: Standard React `useState` and `useMemo` hooks are used for local component state and performance optimizations.
*   **Styling**:
    *   **Material-UI's `sx` prop and `ThemeProvider`**: For consistent theming and styling.
    *   **CSS Modules/Global CSS**: `.css` files (`App.css`, `Particles.css`, `CircularGallery.css`, `Lanyard.css`, `ProfileCard.css`, `StarBorder.css`, `index.css`) for component-specific and global styles.
    *   **PostCSS, Autoprefixer, TailwindCSS (devDependencies)**: Indicate a modern CSS build pipeline for processing CSS, adding vendor prefixes, and potentially for utility-first styling (though Tailwind classes aren't explicitly seen in the provided JSX).
*   **Build Tools**:
    *   **Create React App (CRA) v5.0.1**: Provides a pre-configured development environment, webpack setup, and scripts for common tasks.
    *   **Webpack (indirectly via `react-scripts`)**: Bundles JavaScript, CSS, and other assets.
*   **Testing**:
    *   **Jest v27**: A JavaScript testing framework.
    *   **@testing-library/react v16, @testing-library/jest-dom v6, @testing-library/user-event v13**: Tools for writing user-centric tests that simulate user interactions and assert on DOM nodes.
*   **Deployment**:
    *   **gh-pages v6 (devDependency)**: A tool for deploying the build output to GitHub Pages.

The architecture is component-based, typical for a React application. The `App.js` file serves as the main orchestrator, assembling various sections and interactive elements. Graphics-intensive features like particles and the circular gallery leverage WebGL directly (via Ogl) or through React-Three-Fiber, demonstrating advanced frontend capabilities.

### Project Structure and Organization

```
my-portfolio/
├── public/
│   ├── favicon.ico
│   ├── index.html         # Main HTML template
│   ├── manifest.json      # PWA manifest
│   └── robots.txt         # SEO directives
├── src/
│   ├── App.css            # Global CSS for the App component
│   ├── App.js             # Main React application component
│   ├── App.test.js        # Basic test for the App component
│   ├── BlurText.js        # Animated text component
│   ├── CertificateModal.js # Modal for displaying certificates
│   ├── CertificationsSection.js # Section displaying certifications
│   ├── CircularGallery.css # CSS for CircularGallery
│   ├── CircularGallery.js # Interactive 3D gallery for certificates
│   ├── ClickSpark.js      # Click animation effect
│   ├── Lanyard.css        # CSS for Lanyard (not used in App.js)
│   ├── Lanyard.js         # 3D Lanyard component (not used in App.js)
│   ├── Particles.css      # CSS for Particles
│   ├── Particles.js       # Dynamic particle background
│   ├── ProfileCard.css    # CSS for ProfileCard
│   ├── ProfileCard.js     # Interactive 3D profile card
│   ├── ProjectCard3D.js   # 3D interactive project card
│   ├── ProjectModal.js    # Modal for displaying project details
│   ├── ScrollProgressBar.js # Scroll progress bar
│   ├── StarBorder.css     # CSS for StarBorder
│   ├── StarBorder.js      # Animated border component
│   ├── TechLogos.js       # Component for displaying technology logos
│   ├── certifications/    # Directory for certification images
│   │   └── ... (image files)
│   ├── bgavatar.png       # Background avatar image
│   ├── grain.webp         # Grain texture image
│   ├── index.css          # Global CSS
│   ├── index.js           # Entry point of the React application
│   ├── lanyard.png        # Lanyard texture image
│   ├── profile.png        # Profile image
│   ├── reportWebVitals.js # Web Vitals reporting utility
│   └── setupTests.js      # Jest setup file
├── package.json           # Project metadata and dependencies
├── package-lock.json      # Exact dependency tree
└── README.md              # Project instructions (CRA default)
```

## 📚 File Documentation

### 📄 `README.md`

#### 1. Purpose and Overview
This `README.md` file serves as the default entry point for a project bootstrapped with Create React App. It provides essential information for developers on how to get started, run various development scripts, and learn more about React and Create React App functionalities. It primarily focuses on the operational aspects of a standard React development workflow.

#### 2. Key Functions/Classes
This file does not contain any code functions or classes. It is a plain Markdown document.

#### 3. Dependencies
Implicitly relies on the Create React App environment and its underlying tools (Webpack, Babel, Jest, etc.) for the defined scripts to work.

#### 4. Usage Examples
The `README.md` itself *is* the usage example for the basic project scripts.

```bash
# Run the app in development mode
npm start

# Launch the test runner
npm test

# Build the app for production
npm run build

# Eject from Create React App configuration
npm run eject
```

#### 5. Code Comments
N/A (Markdown file).

#### 6. API Documentation
N/A.

---

### 📄 `package-lock.json`

#### 1. Purpose and Overview
The `package-lock.json` file is automatically generated by `npm` (or `yarn.lock` for Yarn) to record the exact versions of every package in the dependency tree that was installed, as well as their sub-dependencies. This ensures that anyone installing the project will get the exact same dependency graph, leading to reproducible builds across different environments and times.

#### 2. Key Functions/Classes
This file contains no executable code. It is a JSON data file.

#### 3. Dependencies
This file *is* the dependency record. It lists all direct and transitive dependencies for the project, including their versions, resolved URLs, and integrity hashes.

#### 4. Usage Examples
This file is typically managed automatically by npm/yarn. Developers do not manually edit it. It's used by `npm install` to ensure consistent dependency installation.

#### 5. Code Comments
N/A (JSON file).

#### 6. API Documentation
N/A.

---

### 📄 `package.json`

#### 1. Purpose and Overview
The `package.json` file is the manifest for the `my-portfolio` project. It contains essential metadata about the project, defines the scripts that can be run (e.g., for starting, building, testing the application), and lists all direct project dependencies and development dependencies.

#### 2. Key Functions/Classes
This file defines project metadata and scripts, but no executable code.

*   **`name`**: `my-portfolio` - The name of the project.
*   **`version`**: `0.1.0` - The current version of the project.
*   **`private`**: `true` - Indicates that the project is not intended to be published as a public npm package.
*   **`dependencies`**: Lists packages required for the application to run in production.
    *   `@emotion/react`, `@emotion/styled`: Emotion for CSS-in-JS.
    *   `@mui/icons-material`, `@mui/material`: Material-UI components and icons.
    *   `@react-three/drei`, `@react-three/fiber`, `@react-three/rapier`: For 3D graphics and physics with React.
    *   `@testing-library/*`: React testing utilities.
    *   `framer-motion`: For advanced animations.
    *   `meshline`: For drawing thick lines in Three.js.
    *   `ogl`: A lightweight WebGL library.
    *   `react`, `react-dom`, `react-scripts`: Core React and Create React App dependencies.
    *   `react-simple-typewriter`: For typing animation effects.
    *   `swiper`: Modern touch slider (though not directly used in `App.js`, it's available).
    *   `three`: Core 3D graphics library.
    *   `web-vitals`: For measuring web performance.
*   **`scripts`**: Defines executable scripts for common development tasks.
    *   `start`: Runs the app in development mode.
    *   `build`: Builds the app for production.
    *   `test`: Launches the test runner.
    *   `eject`: Ejects from Create React App configuration.
*   **`eslintConfig`**: Configures ESLint with React App specific rules.
*   **`browserslist`**: Specifies target browsers for CSS autoprefixing and Babel transpilation.
*   **`devDependencies`**: Lists packages required only for development and build processes.
    *   `autoprefixer`, `postcss`, `tailwindcss`: For CSS processing and utility-first styling.
    *   `gh-pages`: For deploying to GitHub Pages.

#### 3. Dependencies
The `dependencies` and `devDependencies` sections explicitly list all direct external libraries and frameworks used in the project. The full transitive dependency tree is recorded in `package-lock.json`.

#### 4. Usage Examples
```bash
# Start the development server
npm start

# Create a production build
npm run build

# Run tests
npm test

# Eject from Create React App (one-way operation)
npm run eject

# Deploy to GitHub Pages (assuming gh-pages is configured in scripts)
npm run deploy 
# Note: A "deploy" script is not explicitly defined in the provided package.json.
# It would typically be added to the "scripts" section, e.g.:
# "deploy": "gh-pages -d build"
```

#### 5. Code Comments
N/A (JSON file).

#### 6. API Documentation
N/A.

---

### 📁 `public/`

#### 📄 `public/index.html`

#### 1. Purpose and Overview
`index.html` is the **main entry point** of the React application. It's a static HTML file that serves as a template, into which the React application (bundled JavaScript and CSS) is injected during the build process. It defines the basic page structure, metadata (like title, description, favicon), and the root DOM element where the React app will mount.

#### 2. Key Functions/Classes
This file contains standard HTML markup and references. No executable code.

*   **`<meta>` tags**: Define character set, viewport, theme color, and a description for search engines.
*   **`<link>` tags**: Reference the favicon, apple touch icon, and the `manifest.json` for PWA capabilities. The `%PUBLIC_URL%` placeholder is replaced with the actual public path during the build.
*   **`<div id="root">`**: This is the primary DOM element where the React application will be rendered.
*   **`<noscript>` tag**: Provides a fallback message for users with JavaScript disabled.

#### 3. Dependencies
*   Relies on **Create React App's build process** to inject the bundled JavaScript and CSS.
*   References static assets within the `public` folder using the `%PUBLIC_URL%` placeholder.

#### 4. Usage Examples
This file is served by the development server or from the `build` folder in production. Developers typically do not interact with it directly during runtime, except for modifying its metadata or adding external scripts/fonts.

#### 5. Code Comments
The file includes extensive HTML comments provided by Create React App, explaining the purpose of various tags, the `%PUBLIC_URL%` placeholder, and instructions for development and production builds.

#### 6. API Documentation
N/A.

---

#### 📄 `public/manifest.json`

#### 1. Purpose and Overview
The `manifest.json` file is a standard web app manifest used by web browsers to understand a Progressive Web App (PWA). It provides information about the web application in a JSON text file, including its name, icons, start URL, display mode, theme, and background colors. This metadata allows the app to be installed on a user's home screen, behave more like a native application, and offer offline capabilities.

#### 2. Key Functions/Classes
This file defines configuration settings in JSON format. No executable code.

*   **`short_name`**: A short, human-readable name for the application.
*   **`name`**: The full name of the application.
*   **`icons`**: An array of icon objects, specifying source, type, and sizes for various platforms.
*   **`start_url`**: The URL that should be loaded when the application is launched from the home screen.
*   **`display`**: The preferred display mode for the web app (e.g., `standalone` for a native-like experience).
*   **`theme_color`**: The default theme color for the application, used in browser UI elements.
*   **`background_color`**: The background color that will be displayed before the application's stylesheet is loaded.

#### 3. Dependencies
N/A. This file is a configuration file for web browsers.

#### 4. Usage Examples
This file is automatically referenced by `public/index.html` and consumed by web browsers to enhance the user experience of the PWA.

#### 5. Code Comments
N/A (JSON file).

#### 6. API Documentation
N/A.

---

#### 📄 `public/robots.txt`

#### 1. Purpose and Overview
The `robots.txt` file is a plain text file that webmasters create to instruct web robots (commonly known as web crawlers or bots) on how to crawl pages on their website. For this project, the `robots.txt` is configured to allow all user agents (`User-agent: *`) to crawl all content (`Disallow:`) on the site. This is a common default for public-facing websites.

#### 2. Key Functions/Classes
This file contains directives for web robots. No executable code.

*   **`User-agent: *`**: Applies the following rules to all web robots.
*   **`Disallow:`**: An empty `Disallow` directive means all content on the website is allowed to be crawled.

#### 3. Dependencies
N/A. This file is a configuration file for web crawlers.

#### 4. Usage Examples
This file is placed at the root of the web server. Web crawlers automatically look for `robots.txt` at `yourdomain.com/robots.txt` before crawling the site.

#### 5. Code Comments
Includes a comment linking to `robotstxt.org` for more information on the format.

#### 6. API Documentation
N/A.

---

### 📁 `src/`

#### 📄 `src/App.css`

#### 1. Purpose and Overview
`App.css` provides basic styling for the main `App` component in a Create React App project. It includes default text alignment, styles for a rotating logo (which is part of the default CRA template but might not be visible in the current `App.js` structure), and header/link styles. It also defines a CSS animation for the logo.

#### 2. Key Functions/Classes
This file contains CSS declarations and an `@keyframes` rule. No JavaScript functions or classes.

*   `.App`: Basic text alignment for the root app container.
*   `.App-logo`: Styles for the logo, including its height and `pointer-events`.
*   `@media (prefers-reduced-motion: no-preference)`: Applies the spinning animation only if the user has no preference for reduced motion.
*   `.App-header`: Styles for a header section (from the default CRA template).
*   `.App-link`: Styles for links (from the default CRA template).
*   `@keyframes App-logo-spin`: Defines a 360-degree rotation animation.

#### 3. Dependencies
This file is imported into `src/App.js` and applies styles globally or to elements with matching class names within the React application.

#### 4. Usage Examples
```jsx
// In App.js
import './App.css';

function App() {
  return (
    <div className="App">
      {/* ... content that uses these styles */}
    </div>
  );
}
```

#### 5. Code Comments
N/A (CSS file).

#### 6. API Documentation
N/A.

---

#### 📄 `src/App.js`

#### 1. Purpose and Overview
`App.js` is the **main application component** of the portfolio website. It acts as the central orchestrator, managing the application's global state (like dark mode) and rendering various sections: a navigation bar, an interactive particle background, a 3D profile card, a hero section with dynamic text, technical and soft skills sections, a projects showcase, and a certifications gallery. It integrates multiple custom and third-party components to create a rich and interactive user experience.

#### 2. Key Functions/Classes

*   **`App()`** (Functional Component)
    *   **Purpose**: The root component that sets up the global theme, manages dark mode, and renders the main layout of the portfolio website. It wraps the entire application with `ScrollProgressBar` and `ClickSpark` for global effects.
    *   **Functionality**:
        *   Manages the `darkMode` state using `useState`.
        *   Creates a Material-UI `theme` dynamically based on `darkMode` using `useMemo` and `createTheme`.
        *   Renders global UI elements like `ScrollProgressBar`, `ClickSpark`, and `MyAppBar`.
        *   Renders the main content sections: `HeroSection`, `ProfileCard` (which overlaps the hero section), `SkillsSection`, `ProjectsSection`, and `CertificationsSection`.
    *   **Dependencies**: React (`useState`, `useMemo`), Material-UI (`ThemeProvider`, `CssBaseline`, `createTheme`), `ScrollProgressBar`, `ClickSpark`, `MyAppBar`, `Particles`, `ProfileCard`, `HeroSection`, `SkillsSection`, `ProjectsSection`, `CertificationsSection`, `bgavatar`, `grain`, `profile`.

*   **`MyAppBar({ darkMode, toggleDarkMode })`** (Functional Component)
    *   **Purpose**: Renders the application's fixed top navigation bar.
    *   **Functionality**: Displays the developer's name, navigation links to different sections, and a toggle button for dark/light mode. Uses `scrollToSection` for smooth scrolling.
    *   **Dependencies**: Material-UI (`AppBar`, `Toolbar`, `Typography`, `IconButton`, `Button`, `Stack`, `useTheme`), `@mui/icons-material` (`Brightness4`, `Brightness7`).

*   **`HeroSection()`** (Functional Component)
    *   **Purpose**: Presents the main introductory content of the portfolio.
    *   **Functionality**: Displays the developer's name, a dynamic typing effect for their roles/interests using `react-simple-typewriter`, and interactive buttons for "Download Resume" and "Connect for Projects".
    *   **Dependencies**: Material-UI (`Box`, `Container`, `Paper`, `Typography`, `Button`), `react-simple-typewriter` (`Typewriter`), `@mui/icons-material` (`DownloadIcon`, `ConnectWithoutContactIcon`), `motion` (for animations not directly shown in this snippet but implied by `framer-motion` dependency).

*   **`SkillsSection()`** (Functional Component)
    *   **Purpose**: Showcases the developer's technical and soft skills.
    *   **Functionality**:
        *   **Technical Skills**: Lists programming languages and technologies with animated `LinearProgress` bars.
        *   **Soft Skills**: Presents soft skills as interactive `motion.div` capsules with hover effects to reveal descriptions.
    *   **Dependencies**: Material-UI (`Box`, `Container`, `Typography`, `Stack`, `LinearProgress`, `Paper`), `framer-motion` (`motion`), `@emotion/react` (`keyframes`).

*   **`ProjectsSection()`** (Functional Component)
    *   **Purpose**: Displays a grid of project cards and manages the opening of a detailed project modal.
    *   **Functionality**: Renders multiple `ProjectCard3D` components, each representing a project. Clicking a card opens a `ProjectModal` with more information. The project grid is wrapped in a `StarBorder` component for visual effect.
    *   **Dependencies**: React (`useState`), Material-UI (`Box`, `Container`, `Typography`), `ProjectCard3D`, `ProjectModal`, `StarBorder`, `framer-motion` (`motion`).

*   **`scrollToSection(id)`** (Utility Function)
    *   **Purpose**: Provides smooth scrolling functionality to a specified HTML element ID.
    *   **Functionality**: Finds the element by ID and uses `scrollIntoView` with smooth behavior.

#### 3. Dependencies
*   **Internal Components**: `Particles`, `ProfileCard`, `CertificationsSection`, `ScrollProgressBar`, `ProjectCard3D`, `ProjectModal`, `StarBorder`, `BlurText`, `TechLogos`.
*   **React Libraries**: `react`, `@mui/material`, `@mui/icons-material`, `react-simple-typewriter`, `framer-motion`, `@emotion/react`.
*   **Assets**: `profile.png`, `bgavatar.png`, `grain.webp`, `resume.pdf` (referenced for download).

#### 4. Usage Examples
This file is the root of the React application. To run the application in a development server:
```bash
npm start
```
To build the application for production:
```bash
npm run build
```

The various sections (`HeroSection`, `SkillsSection`, `ProjectsSection`, `CertificationsSection`) are rendered directly within the `App` component's JSX. Navigation items use `scrollToSection` to jump to specific parts of the page.

#### 5. Code Comments
*   Comments within `SkillsSection` and `HeroSection` explain the data structures for skills and projects.
*   `shimmerKeyframes` is defined using `@emotion/react` `keyframes` for a visual effect.
*   Inline comments explain specific styling or logic choices, like the resume download.

#### 6. API Documentation

##### `App()`
*   **Description**: The main application component that orchestrates the entire portfolio layout and functionality.
*   **Parameters**: None.
*   **Returns**: `JSX.Element` - The rendered portfolio application.
*   **Exceptions**: None explicitly handled.

##### `MyAppBar({ darkMode, toggleDarkMode })`
*   **Description**: Renders the fixed top navigation bar with site title, navigation links, and a dark/light mode toggle.
*   **Parameters**:
    *   `darkMode` (boolean): `true` if dark mode is active, `false` otherwise.
    *   `toggleDarkMode` (function): Callback function to toggle the `darkMode` state.
*   **Returns**: `JSX.Element` - An AppBar component.
*   **Exceptions**: None.

##### `HeroSection()`
*   **Description**: Displays the introductory part of the portfolio, featuring the developer's name, dynamic title, and key action buttons.
*   **Parameters**: None.
*   **Returns**: `JSX.Element` - The hero section content.
*   **Exceptions**: None.

##### `SkillsSection()`
*   **Description**: Renders a section showcasing technical skills with progress bars and soft skills with interactive cards.
*   **Parameters**: None.
*   **Returns**: `JSX.Element` - The skills section content.
*   **Exceptions**: None.

##### `ProjectsSection()`
*   **Description**: Renders a section displaying a grid of interactive project cards and manages the opening of a detailed project modal.
*   **Parameters**: None.
*   **Returns**: `JSX.Element` - The projects section content.
*   **Exceptions**: None.

##### `scrollToSection(id)`
*   **Description**: Scrolls the viewport smoothly to the HTML element identified by the given ID.
*   **Parameters**:
    *   `id` (string): The `id` attribute of the target HTML element.
*   **Returns**: `void`.
*   **Exceptions**: If the element with the given ID does not exist, the function will silently do nothing (`el` will be `null`).

---

#### 📄 `src/App.test.js`

#### 1. Purpose and Overview
This file contains a basic example unit test for the `App` component, generated by Create React App. It uses `@testing-library/react` to render the component and `@testing-library/jest-dom` for custom matchers to assert that a specific text content is present in the document. This serves as a starting point for writing tests.

#### 2. Key Functions/Classes
*   **`test('renders learn react link', () => { ... })`**: A Jest test block.
    *   **Purpose**: Verifies that a specific text string (originally "learn react", though the current `App.js` might not render it) is present in the rendered `App` component.
    *   **Functionality**:
        *   `render(<App />)`: Renders the `App` component into a virtual DOM.
        *   `screen.getByText(/learn react/i)`: Queries the rendered DOM for an element containing the text "learn react" (case-insensitive).
        *   `expect(linkElement).toBeInTheDocument()`: Asserts that the found element is present in the document.
*   **`render`**: Function from `@testing-library/react` to render React components.
*   **`screen`**: Object from `@testing-library/react` providing query methods to interact with the rendered DOM.
*   **`expect`**: Jest function for making assertions.

#### 3. Dependencies
*   `@testing-library/react`: Provides utilities for testing React components.
*   `./App`: The component being tested.
*   `@testing-library/jest-dom`: Extends Jest with custom matchers for DOM assertions.

#### 4. Usage Examples
To run tests, navigate to the project directory in your terminal and execute:
```bash
npm test
# or
yarn test
```

#### 5. Code Comments
Includes comments explaining the purpose of `jest-dom` and linking to its documentation.

#### 6. API Documentation
N/A.

---

#### 📄 `src/BlurText.js`

#### 1. Purpose and Overview
The `BlurText` component is a React functional component designed to render text with an animated blur effect. It uses `framer-motion` for animations and `IntersectionObserver` to trigger the animation when the text enters the viewport. The animation gradually unblurs and adjusts the text's position. It can animate text word by word or character by character.

#### 2. Key Functions/Classes

*   **`BlurText({ text, delay, className, animateBy, direction, threshold, rootMargin, animationFrom, animationTo, easing, onAnimationComplete, stepDuration, color })`** (Functional Component)
    *   **Purpose**: Renders and animates text with a blur-in effect.
    *   **Functionality**:
        *   Splits the input `text` into segments (words or characters) based on `animateBy`.
        *   Uses `useRef` and `useState` with `IntersectionObserver` to detect when the component enters the viewport (`inView`).
        *   Defines default `from` and `to` animation states for `framer-motion` based on `direction`.
        *   Constructs `keyframes` dynamically for `framer-motion` transitions.
        *   Applies a staggered animation to each segment, with a configurable `delay` between segments.
        *   Applies `will-change` CSS property for performance optimization during animation.
    *   **Dependencies**: `react` (`useEffect`, `useRef`, `useState`, `useMemo`), `framer-motion` (`motion`).

*   **`buildKeyframes(from, steps)`** (Helper Function)
    *   **Purpose**: Creates a keyframes object suitable for `framer-motion` animations from an initial state and an array of step states.
    *   **Parameters**:
        *   `from` (object): The initial CSS properties.
        *   `steps` (array of objects): An array of objects, each representing a step in the animation with CSS properties.
    *   **Returns**: `object` - A keyframes object where each CSS property has an array of values representing its animation path.
    *   **Functionality**: Iterates through all unique CSS properties found in `from` and `steps`, then constructs an array of values for each property across the animation sequence.

#### 3. Dependencies
*   `react`: For component structure and hooks.
*   `framer-motion`: For declarative, performant animations.

#### 4. Usage Examples
This component is used in `src/ProjectModal.js` to animate project names and descriptions as they become visible.

```jsx
// Example usage in another component:
import BlurText from './BlurText';

function MySection() {
  return (
    <div>
      <BlurText
        text="This is an animated heading for my section."
        delay={50}
        animateBy="words"
        color="purple"
        className="my-custom-heading"
      />
      <BlurText
        text="A detailed description will appear smoothly."
        delay={20}
        animateBy="characters"
        direction="bottom"
        color="#333"
      />
    </div>
  );
}
```

#### 5. Code Comments
*   Explanation of the `buildKeyframes` helper function logic.
*   Comments on `defaultFrom` and `defaultTo` for clarity.
*   Performance hint regarding `will-change`.

#### 6. API Documentation

##### `BlurText({ text, delay, className, animateBy, direction, threshold, rootMargin, animationFrom, animationTo, easing, onAnimationComplete, stepDuration, color })`
*   **Description**: A React component that animates text (words or characters) with a blur-in effect when it enters the viewport.
*   **Parameters**:
    *   `text` (string): The string content to be animated.
    *   `delay` (number, default: `200`): The delay in milliseconds between the animation start of consecutive words or characters.
    *   `className` (string, default: `''`): CSS classes to apply to the main `p` element.
    *   `animateBy` (string, default: `'words'`): Specifies how the text should be broken down for animation. Accepted values: `'words'` or `'characters'`.
    *   `direction` (string, default: `'top'`): Determines the initial `y` offset for the blur animation. Accepted values: `'top'` (moves from -50px) or `'bottom'` (moves from 50px).
    *   `threshold` (number, default: `0.1`): `IntersectionObserver` threshold. The percentage of the target's visibility required to trigger `inView`.
    *   `rootMargin` (string, default: `'0px'`): `IntersectionObserver` root margin. Expands or shrinks the root's bounding box when computing intersections.
    *   `animationFrom` (object, optional): Custom `from` properties for the `framer-motion` animation. Overrides default.
    *   `animationTo` (array of objects, optional): Custom `to` keyframe steps for the `framer-motion` animation. Overrides default.
    *   `easing` (function, optional, default: `(t) => t * (2 - t)` (ease-out cubic)): A custom easing function for the animation.
    *   `onAnimationComplete` (function, optional): A callback function that is invoked when the *last* segment's animation completes.
    *   `stepDuration` (number, default: `0.35`): The duration in seconds for each step defined in `animationTo`.
    *   `color` (string, default: `'#1976d2'`): The CSS color value for the text.
*   **Returns**: `JSX.Element` - A `<p>` element containing `motion.span` elements for each text segment.
*   **Exceptions**: None explicitly handled.

---

#### 📄 `src/CertificateModal.js`

#### 1. Purpose and Overview
The `CertificateModal` component is a reusable React functional component that displays a certificate image in a modal dialog. It provides detailed information (certificate name and organization) and allows users to close it via a button or by clicking outside. It includes accessibility features like `Escape` key handling and focus trapping.

#### 2. Key Functions/Classes

*   **`CertificateModal({ certificate, isOpen, onClose })`** (Functional Component)
    *   **Purpose**: Renders a full-screen, interactive modal to display a single certificate.
    *   **Functionality**:
        *   Controls visibility based on `isOpen` prop.
        *   Prevents body scrolling when open.
        *   Closes on `Escape` key press or outside click.
        *   Extracts certificate name and organization from the `text` prop using `parseCertificateText`.
        *   Displays the certificate image, organization name (above), and certificate name (below).
        *   Applies fade-in and slide-in animations using CSS keyframes.
    *   **Dependencies**: React (`useEffect`, `useRef`), Material-UI (`Box`, `IconButton`, `Typography`, `Paper`), `@mui/icons-material` (`Close`).

*   **`parseCertificateText(text)`** (Helper Function)
    *   **Purpose**: Extracts the certificate name and organization from a given text string, assuming a specific format.
    *   **Parameters**:
        *   `text` (string): The input text, expected to be in the format "Certificate Name (Organization)".
    *   **Returns**: `object` - An object `{ certificateName: string, organization: string }`.
    *   **Functionality**: Uses a regular expression to match and extract the parts. If the format doesn't match, the entire text is treated as the certificate name.

#### 3. Dependencies
*   `react`: For component structure and hooks.
*   `@mui/material`: Material-UI components for UI elements.
*   `@mui/icons-material`: Material-UI icons (specifically `Close`).

#### 4. Usage Examples
This modal is used by the `CertificationsSection` to display selected certificates.

```jsx
// In CertificationsSection.js:
import CertificateModal from './CertificateModal';
// ...
const [selectedCertificate, setSelectedCertificate] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);

const handleCertificateClick = (certificate) => {
  setSelectedCertificate(certificate);
  setIsModalOpen(true);
};

const handleCloseModal = () => {
  setIsModalOpen(false);
  setSelectedCertificate(null);
};

return (
  <>
    {/* ... trigger handleCertificateClick ... */}
    <CertificateModal
      certificate={selectedCertificate}
      isOpen={isModalOpen}
      onClose={handleCloseModal}
    />
  </>
);
```

#### 5. Code Comments
*   Comments explaining `useEffect` hooks for managing body overflow and keyboard events (Escape key).
*   Definition of CSS `@keyframes` for modal entry/exit animations.
*   Explanation of focus trapping mechanism.

#### 6. API Documentation

##### `CertificateModal({ certificate, isOpen, onClose })`
*   **Description**: A full-screen modal component to display a certificate with its name, organization, and image.
*   **Parameters**:
    *   `certificate` (object): An object containing the certificate data.
        *   `image` (string): URL or path to the certificate image.
        *   `text` (string): Display text for the certificate, often in "Name (Organization)" format.
    *   `isOpen` (boolean): Controls the visibility of the modal. If `false`, the component renders `null`.
    *   `onClose` (function): A callback function invoked when the modal should be closed (e.g., by clicking the close button, pressing Escape, or clicking the backdrop).
*   **Returns**: `JSX.Element | null` - The modal dialog if `isOpen` is `true` and `certificate` is provided, otherwise `null`.
*   **Exceptions**: None explicitly handled within the component logic itself; relies on the parent component to provide valid `certificate` data.

---

#### 📄 `src/CertificationsSection.js`

#### 1. Purpose and Overview
The `CertificationsSection` component renders a dedicated section of the portfolio to showcase the developer's certifications. It utilizes the `CircularGallery` component to display a visually appealing, interactive 3D carousel of certificate images. When a certificate is clicked in the gallery, it triggers a `CertificateModal` to show the certificate in full detail.

#### 2. Key Functions/Classes

*   **`CertificationsSection()`** (Functional Component)
    *   **Purpose**: Orchestrates the display of certifications and handles user interaction for viewing detailed certificate images.
    *   **Functionality**:
        *   Manages the state for the currently `selectedCertificate` and `isModalOpen`.
        *   Passes the `certificates` data array to `CircularGallery`.
        *   Defines `handleCertificateClick` to update state and open the modal when a certificate is selected from the gallery.
        *   Defines `handleCloseModal` to reset state and close the modal.
        *   Renders a heading, the `CircularGallery`, and the `CertificateModal`.
    *   **Dependencies**: React (`useState`), Material-UI (`Typography`), `CircularGallery`, `CertificateModal`. Imports various certificate image assets.

*   **`certificates`** (Constant Array)
    *   **Purpose**: Stores metadata for each certification, including its image path and display text.
    *   **Structure**: An array of objects, where each object has:
        *   `image` (string): The path to the certificate image.
        *   `text` (string): The display text for the certificate (e.g., "MERN Stack Intro (Simplilearn)").

#### 3. Dependencies
*   `react`: For component structure and hooks.
*   `@mui/material`: Material-UI component (`Typography`).
*   `./CircularGallery`: Custom component for displaying a 3D circular gallery.
*   `./CertificateModal`: Custom modal component for detailed certificate view.
*   **Image Assets**: `Mern_Intro.png`, `Azura_CV.png`, `Java_Fundamental.png`, `Python_Foundations.png`, `Basics_of_Python.png`, `Python_Basic.png`, `Software_Engineer.png`, `Problem_Solving.png`, `Java_Basic.png`.

#### 4. Usage Examples
This component is designed to be integrated directly into the main `App.js` layout.

```jsx
// In App.js:
import CertificationsSection from './CertificationsSection';
// ...
function App() {
  return (
    <>
      {/* ... other sections */}
      <CertificationsSection />
      {/* ... */}
    </>
  );
}
```

#### 5. Code Comments
N/A (component logic is straightforward).

#### 6. API Documentation

##### `CertificationsSection()`
*   **Description**: Renders a dedicated section for showcasing professional certifications. It uses a 3D circular gallery for interactive display and a modal for detailed viewing.
*   **Parameters**: None.
*   **Returns**: `JSX.Element` - A section containing a title, the `CircularGallery` component, and a `CertificateModal`.
*   **Exceptions**: None explicitly handled.

---

#### 📄 `src/CircularGallery.css`

#### 1. Purpose and Overview
`CircularGallery.css` provides the essential styling for the `CircularGallery` component, particularly for its container. It defines basic layout properties and cursor feedback for user interaction.

#### 2. Key Functions/Classes
This file contains CSS declarations. No JavaScript functions or classes.

*   `.circular-gallery`: Styles the main container for the gallery, ensuring it takes full width/height, hides overflow, and shows a `grab` cursor.
*   `.circular-gallery:active`: Changes the cursor to `grabbing` when the gallery is actively being dragged.

#### 3. Dependencies
This CSS file is imported into `src/CircularGallery.js` to apply styles to its root element.

#### 4. Usage Examples
```jsx
// In CircularGallery.js:
import './CircularGallery.css';
// ...
return <div className="circular-gallery" ref={containerRef} />;
```

#### 5. Code Comments
N/A (CSS file).

#### 6. API Documentation
N/A.

---

#### 📄 `src/CircularGallery.js`

#### 1. Purpose and Overview
This file implements a sophisticated 3D circular gallery for displaying items, typically images with associated text (like certifications). It's built using the `ogl` WebGL library for high-performance graphics and custom shaders, providing an interactive, bending carousel effect. The component handles user input (mouse drag, wheel scroll) and resizes dynamically.

#### 2. Key Functions/Classes

*   **`CircularGallery({ items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase, cardWidth, cardHeight, onCertificateClick })`** (Functional React Component)
    *   **Purpose**: The main React wrapper that initializes and manages the `ogl.App` instance within a DOM container.
    *   **Functionality**: Uses `useEffect` to create and destroy the `App` instance, ensuring proper lifecycle management with `ogl`. Passes all props to the `ogl.App` constructor.
    *   **Dependencies**: React (`useEffect`, `useRef`). Imports `./CircularGallery.css` and `ogl` classes.

*   **`App`** (Class - OGL Application Core)
    *   **Purpose**: Manages the WebGL rendering context, camera, scene, and all interactive logic for the circular gallery.
    *   **Functionality**:
        *   Initializes `ogl.Renderer`, `ogl.Camera`, and `ogl.Transform` (scene).
        *   Creates `Media` instances for each item, duplicated to create a continuous loop effect.
        *   Handles mouse (`onTouchDown`, `onTouchMove`, `onTouchUp`), wheel (`onWheel`), and resize (`onResize`) events to update scroll and camera.
        *   The `update` loop continuously interpolates scroll, updates media positions, and renders the scene.
        *   `onClick` and `onMouseMove` handlers detect interactions with individual media elements.
        *   `destroy` method cleans up event listeners and WebGL resources.
    *   **Dependencies**: `ogl` classes (`Renderer`, `Camera`, `Transform`, `Plane`), `Media` class, `debounce`, `lerp`, `autoBind`.

*   **`Media`** (Class - Individual Gallery Item)
    *   **Purpose**: Represents a single interactive 3D card within the circular gallery.
    *   **Functionality**:
        *   Creates an `ogl.Mesh` (plane geometry) and `ogl.Program` (shader) to render an image texture.
        *   Loads the image and sets it as a texture.
        *   Renders text (certificate name and organization) on the card using the `Title` class.
        *   `update`: Calculates its 3D position and rotation based on the global scroll, creating the bending effect. Handles looping.
        *   `onResize`: Adjusts card scale and position based on screen/viewport changes.
        *   `setHover`: Updates a shader uniform to provide a hover effect.
        *   `checkClick`: Determines if a given mouse coordinate intersects with the card's 3D bounds.
    *   **Dependencies**: `ogl` classes (`Geometry`, `Mesh`, `Program`, `Texture`), `Title` class.

*   **`Title`** (Class - Text Renderer for Cards)
    *   **Purpose**: Renders text content onto a 3D plane using canvas-generated textures.
    *   **Functionality**:
        *   Parses raw text to separate certificate name and organization.
        *   `createTextTexture`: Uses an offscreen canvas to render text, then converts it into an `ogl.Texture`.
        *   Creates separate `Mesh` instances for organization and certificate names, positioning them relative to the main `Media` plane.
    *   **Dependencies**: `ogl` classes (`Plane`, `Program`, `Mesh`), `createTextTexture`.

*   **`debounce(func, wait)`** (Utility Function)
    *   **Purpose**: Returns a new function that, when invoked, will execute `func` only after `wait` milliseconds have passed since the last time it was invoked.
    *   **Parameters**:
        *   `func` (function): The function to debounce.
        *   `wait` (number): The number of milliseconds to wait before invoking `func`.
    *   **Returns**: `function` - The debounced function.

*   **`lerp(p1, p2, t)`** (Utility Function)
    *   **Purpose**: Performs linear interpolation between two values.
    *   **Parameters**:
        *   `p1` (number): The starting value.
        *   `p2` (number): The ending value.
        *   `t` (number): The interpolation amount (between 0 and 1).
    *   **Returns**: `number` - The interpolated value.

*   **`autoBind(instance)`** (Utility Function)
    *   **Purpose**: Binds all methods of a class instance to the instance itself, ensuring `this` context is correct.
    *   **Parameters**:
        *   `instance` (object): The class instance whose methods should be bound.
    *   **Returns**: `void`.

*   **`createTextTexture(gl, text, font, color)`** (Utility Function)
    *   **Purpose**: Creates a WebGL texture from a given text string rendered onto an HTML Canvas.
    *   **Parameters**:
        *   `gl` (WebGLRenderingContext): The WebGL rendering context.
        *   `text` (string): The text string to render.
        *   `font` (string): CSS font string (e.g., "bold 30px monospace").
        *   `color` (string): CSS color string for the text.
    *   **Returns**: `object` - An object `{ texture: OglTexture, width: number, height: number }`.

#### 3. Dependencies
*   `react`: For the component lifecycle and rendering.
*   `ogl`: The core WebGL library used for 3D rendering.
*   `./CircularGallery.css`: For styling the container.
*   `debounce`, `lerp`, `autoBind`, `createTextTexture`: Internal utility functions/classes.

#### 4. Usage Examples
The `CircularGallery` component is integrated into the `CertificationsSection`.

```jsx
// In CertificationsSection.js:
import CircularGallery from './CircularGallery';
// ...
return (
  <div style={/* container styles */}>
    <CircularGallery 
      items={certificatesArray} 
      bend={2.5} 
      cardWidth={1200} 
      cardHeight={860}
      onCertificateClick={handleModalOpen}
    />
  </div>
);
```

#### 5. Code Comments
*   Detailed GLSL shader code for vertex and fragment programs.
*   Comments explaining the logic behind the bending effect and card looping.
*   Explanation of image loading and texture handling.
*   Comments on event handling, debouncing, and click detection in 3D space.

#### 6. API Documentation

##### `CircularGallery({ items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase, cardWidth, cardHeight, onCertificateClick })`
*   **Description**: A React component that renders an interactive 3D circular gallery using OGL, suitable for showcasing items like certifications.
*   **Parameters**:
    *   `items` (array<object>): An array of objects, each representing a gallery item. Each item object should have:
        *   `image` (string): The URL or path to the image for the card.
        *   `text` (string): The text to display on the card (e.g., "Certificate Name (Organization)").
    *   `bend` (number, default: `3`): Controls the curvature of the gallery. A positive value bends inwards, negative outwards. `0` for flat.
    *   `textColor` (string, default: `'#ffffff'`): The color of the text displayed on the cards.
    *   `borderRadius` (number, default: `0.05`): The border radius of the cards (normalized, 0 to 1).
    *   `font` (string, default: `'bold 30px Figtree'`): CSS font string for the certificate name on the cards.
    *   `scrollSpeed` (number, default: `2`): Multiplier for manual scrolling/dragging speed.
    *   `scrollEase` (number, default: `0.05`): Easing factor for the smooth scrolling animation.
    *   `cardWidth` (number, default: `1200`): The desired width of the cards in pixels. Used for scaling relative to the viewport.
    *   `cardHeight` (number, default: `350`): The desired height of the cards in pixels. Used for scaling relative to the viewport.
    *   `onCertificateClick` (function, optional): A callback function invoked when a certificate card is clicked. It receives the clicked `item` object as an argument.
*   **Returns**: `JSX.Element` - A `div` element that contains the `ogl` WebGL canvas.
*   **Exceptions**: None explicitly handled. Relies on `ogl` for WebGL error handling.

---

#### 📄 `src/ClickSpark.js`

#### 1. Purpose and Overview
The `ClickSpark` component is a React functional component that enhances user interaction by displaying a radial spark animation whenever a click occurs within its wrapped children. It uses an HTML Canvas element overlaid on top of its content to render these dynamic visual effects.

#### 2. Key Functions/Classes

*   **`ClickSpark({ sparkColor, sparkSize, sparkRadius, sparkCount, duration, easing, extraScale, children })`** (Functional Component)
    *   **Purpose**: Renders a canvas layer that produces spark animations on click events.
    *   **Functionality**:
        *   **Canvas Management**: Uses `useRef` to manage the canvas element and `useEffect` to handle canvas resizing dynamically based on its parent's dimensions using `ResizeObserver`.
        *   **Animation Loop**: An `useEffect` hook manages the animation frame loop (`requestAnimationFrame`) to draw and update the position of sparks over time.
        *   **Spark Generation**: The `handleClick` event listener captures mouse coordinates, generates `sparkCount` individual spark objects (each with a starting position, angle, and `startTime`), and adds them to `sparksRef.current`.
        *   **Drawing Sparks**: The `draw` function iterates through active sparks, calculates their position and length based on elapsed time, progress, and easing, then draws them as lines on the canvas.
        *   **Spark Lifetime**: Sparks are filtered out from `sparksRef.current` once their `duration` is exceeded.
    *   **Dependencies**: React (`useRef`, `useEffect`, `useCallback`).

*   **`easeFunc(t)`** (Helper Function)
    *   **Purpose**: Provides different easing functions for controlling the animation timing.
    *   **Parameters**:
        *   `t` (number): The linear progress of the animation (0 to 1).
    *   **Returns**: `number` - The eased progress value.
    *   **Functionality**: Implements `linear`, `ease-in`, `ease-in-out`, and `ease-out` (default) easing curves.

#### 3. Dependencies
*   `react`: For component structure and hooks.

#### 4. Usage Examples
The `ClickSpark` component is used as a wrapper for the entire `App` component in `src/App.js` to enable click effects across the whole portfolio.

```jsx
// In App.js:
import ClickSpark from './ClickSpark';
// ...
return (
  <ClickSpark sparkColor="#1976d2" sparkSize={16} sparkRadius={32} sparkCount={12} duration={600}>
    {/* All your application content goes here */}
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyAppBar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      {/* ... other sections ... */}
    </ThemeProvider>
  </ClickSpark>
);
```

#### 5. Code Comments
*   Comments explaining the `resizeCanvas` logic and the use of `ResizeObserver`.
*   Detailed explanation of the `easeFunc` and its different easing types.
*   Description of the animation loop and spark rendering process.

#### 6. API Documentation

##### `ClickSpark({ sparkColor, sparkSize, sparkRadius, sparkCount, duration, easing, extraScale, children })`
*   **Description**: A higher-order component that wraps its children and renders animated sparks on top of them whenever a click event occurs.
*   **Parameters**:
    *   `sparkColor` (string, default: `'#fff'`): The CSS color string for the sparks.
    *   `sparkSize` (number, default: `10`): The length of each individual spark line segment in pixels.
    *   `sparkRadius` (number, default: `15`): The maximum distance in pixels the sparks will travel from the click origin.
    *   `sparkCount` (number, default: `8`): The number of individual spark lines to generate per click.
    *   `duration` (number, default: `400`): The animation duration for each spark in milliseconds.
    *   `easing` (string, default: `'ease-out'`): The easing function to apply to the spark animation. Options: `'linear'`, `'ease-in'`, `'ease-out'`, `'ease-in-out'`.
    *   `extraScale` (number, default: `1.0`): An additional scaling factor applied to `sparkRadius`.
    *   `children` (ReactNode): The React elements or components that will be rendered inside the `ClickSpark` component. Clicks on these children will trigger the spark effect.
*   **Returns**: `JSX.Element` - A `div` element containing an absolutely positioned canvas for sparks and the `children` content.
*   **Exceptions**: None explicitly handled.

---

#### 📄 `src/Lanyard.css`

#### 1. Purpose and Overview
`Lanyard.css` provides the styling for the `Lanyard` 3D component. It sets up the container for the 3D canvas and styles the HTML content overlaid on the 3D card, such as the profile picture, name, and title, ensuring they match the intended visual design.

#### 2. Key Functions/Classes
This file contains CSS declarations. No JavaScript functions or classes.

*   `.lanyard-wrapper`: Styles the main container that holds the 3D canvas. It uses `position: absolute` and `pointer-events: none` to layer it effectively without blocking interactions on other parts of the page.
*   `.lanyard-card-front`: Styles the HTML content that appears on the front of the 3D card, defining its background, padding, dimensions, and shadow.
*   `.lanyard-profile`: Styles the profile image within the card, ensuring it's a circular shape with a border and shadow.
*   `.lanyard-name`: Styles the name text on the card.
*   `.lanyard-title`: Styles the title/subtitle text on the card.

#### 3. Dependencies
This CSS file is imported into `src/Lanyard.js` to apply styles to its React components and the HTML overlay.

#### 4. Usage Examples
```jsx
// In Lanyard.js:
import './Lanyard.css';
// ...
<Html>
  <div className="lanyard-card-front">
    <img src={profile} alt="Profile" className="lanyard-profile" />
    <div className="lanyard-name">DHANESH KUMAR S</div>
    <div className="lanyard-title">aspiring developer</div>
  </div>
</Html>
```

#### 5. Code Comments
N/A (CSS file).

#### 6. API Documentation
N/A.

---

#### 📄 `src/Lanyard.js`

#### 1. Purpose and Overview
The `Lanyard` component creates an interactive 3D representation of a lanyard with an attached ID card. It leverages `@react-three/fiber` to integrate Three.js into React, `@react-three/rapier` for realistic physics simulations (making the lanyard sway and react to dragging), and `@react-three/drei` for useful abstractions like HTML overlays. The card displays a profile image, name, and title.

#### 2. Key Functions/Classes

*   **`Lanyard({ position, gravity, fov, transparent })`** (Functional Component)
    *   **Purpose**: Sets up the 3D environment for the lanyard and profile card.
    *   **Functionality**:
        *   Renders a `Canvas` from `@react-three/fiber` as the 3D scene.
        *   Configures the camera position, field of view (`fov`), and canvas transparency.
        *   Sets the clear color of the WebGL context.
        *   Wraps the `Band` component in a `Physics` provider from `@react-three/rapier` to enable physics simulations.
        *   Includes an `Environment` for realistic lighting.
    *   **Dependencies**: React, `@react-three/fiber` (`Canvas`), `@react-three/drei` (`useGLTF`, `useTexture`, `Environment`, `Lightformer`, `Html`), `@react-three/rapier` (`Physics`), `meshline`, `three`.

*   **`Band({ maxSpeed, minSpeed })`** (Functional Component)
    *   **Purpose**: Defines the physics-enabled lanyard and the interactive 3D card.
    *   **Functionality**:
        *   Uses `useRef` to attach to `RigidBody` and mesh components for physics interactions.
        *   Loads the 3D model (`card.glb`) and textures (`lanyard.png`, `profile.png`).
        *   **Physics Simulation**:
            *   Sets up multiple `RigidBody` components (`fixed`, `j1`, `j2`, `j3`, `card`) to simulate a chain.
            *   Connects these rigid bodies using `useRopeJoint` (for the flexible lanyard segments) and `useSphericalJoint` (connecting the last segment to the card).
            *   Applies `BallCollider` and `CuboidCollider` for collision detection.
        *   **Interaction**:
            *   `onPointerOver`, `onPointerOut`: Changes cursor style on hover.
            *   `onPointerDown`, `onPointerUp`: Enables dragging the card in 3D space by updating its kinematic translation.
        *   **Rendering**:
            *   Uses `useFrame` to update the card's position based on dragging and apply physics.
            *   Renders the lanyard itself as a `meshLineGeometry` (a thick line following a `CatmullRomCurve3`).
            *   Renders the 3D card model.
            *   Uses `Html` from `@react-three/drei` to overlay a standard HTML element (with profile image, name, title) directly onto the 3D card, allowing complex UI without re-implementing in Three.js.
    *   **Dependencies**: React (`useRef`, `useState`, `useEffect`), `@react-three/fiber` (`useFrame`), `@react-three/drei` (`useGLTF`, `useTexture`, `Html`), `@react-three/rapier` (`BallCollider`, `CuboidCollider`, `RigidBody`, `useRopeJoint`, `useSphericalJoint`), `three`. Imports `cardGLB`, `lanyard`, `profile`.

#### 3. Dependencies
*   `react`: Core React library.
*   `@react-three/fiber`: React renderer for Three.js.
*   `@react-three/drei`: Collection of helpful abstractions for R3F.
*   `@react-three/rapier`: Physics engine for R3F.
*   `meshline`: For drawing flexible lines in Three.js.
*   `three`: Core Three.js library.
*   `./Lanyard.css`: Styling for the HTML overlay.
*   **Assets**: `card.glb`, `lanyard.png`, `profile.png`.

#### 4. Usage Examples
This component is designed to be self-contained and could be dropped into any React application that uses `@react-three/fiber`. It's currently not directly integrated into `App.js` but represents a sophisticated 3D interactive element.

```jsx
// Example of how it could be used in App.js (assuming it's positioned correctly)
import Lanyard from './Lanyard';

function App() {
  return (
    <div>
      {/* ... other components ... */}
      <Lanyard />
      {/* ... */}
    </div>
  );
}
```

#### 5. Code Comments
*   Comments explain the purpose of `segmentProps` for physics bodies.
*   Details on how `useRopeJoint` and `useSphericalJoint` are used.
*   Explanation of cursor changes on hover/drag.
*   Logic for updating kinematic translation during dragging.
*   Details on how the `CatmullRomCurve3` is updated to render the flexible band.

#### 6. API Documentation

##### `Lanyard({ position, gravity, fov, transparent })`
*   **Description**: Renders an interactive 3D lanyard and profile card using React Three Fiber and Rapier physics.
*   **Parameters**:
    *   `position` (array<number>, default: `[-7, 7, 30]`): The initial camera position in 3D space (`[x, y, z]`).
    *   `gravity` (array<number>, default: `[0, -40, 0]`): The gravity vector applied to the physics simulation (`[x, y, z]`).
    *   `fov` (number, default: `20`): The camera's field of view in degrees.
    *   `transparent` (boolean, default: `true`): If `true`, the canvas background will be transparent.
*   **Returns**: `JSX.Element` - A `div` containing a `Canvas` element with the 3D lanyard scene.
*   **Exceptions**: None explicitly handled.

##### `Band({ maxSpeed, minSpeed })` (Internal Component of `Lanyard`)
*   **Description**: Implements the actual 3D lanyard and card, including physics, interactions, and visual rendering.
*   **Parameters**:
    *   `maxSpeed` (number, default: `50`): Controls the maximum speed for linear interpolation of rope joint segments.
    *   `minSpeed` (number, default: `0`): Controls the minimum speed for linear interpolation of rope joint segments.
*   **Returns**: `JSX.Element` - A group of 3D mesh components representing the lanyard and card.
*   **Exceptions**: None.

---

#### 📄 `src/Particles.css`

#### 1. Purpose and Overview
`Particles.css` provides the minimal CSS styling required for the `Particles` component. Its primary role is to ensure the particle canvas covers the entire viewport, is fixed in position, and is layered behind all other content, preventing it from interfering with user interactions on the main UI.

#### 2. Key Functions/Classes
This file contains CSS declarations. No JavaScript functions or classes.

*   `.particles-container`: Styles the main container `div` for the particle canvas.
    *   `position: fixed`: Fixes the container relative to the viewport.
    *   `inset: 0`: Shorthand for `top: 0; right: 0; bottom: 0; left: 0;`, making it cover the entire screen.
    *   `width: 100vw`, `height: 100vh`: Explicitly sets the dimensions to the full viewport width and height.
    *   `z-index: 0`: Places the particles layer at the bottom, behind other content.
    *   `pointer-events: none`: Disables mouse events on the particle layer, allowing clicks/hovers to pass through to the underlying UI.

#### 3. Dependencies
This CSS file is imported into `src/Particles.js` to apply styles to its root container.

#### 4. Usage Examples
```jsx
// In Particles.js:
import './Particles.css';
// ...
return (
  <div
    ref={containerRef}
    className={`particles-container ${className || ''}`}
  />
);
```

#### 5. Code Comments
N/A (CSS file).

#### 6. API Documentation
N/A.

---

#### 📄 `src/Particles.js`

#### 1. Purpose and Overview
The `Particles` component is a React functional component that renders a dynamic, animated particle background using the `ogl` WebGL library. It creates a visually engaging background that can react to mouse movement and features customizable particle count, size, speed, and colors. The animation is powered by GLSL shaders for high performance.

#### 2. Key Functions/Classes

*   **`Particles({ particleCount, particleSpread, speed, particleColors, moveParticlesOnHover, particleHoverFactor, alphaParticles, particleBaseSize, sizeRandomness, cameraDistance, disableRotation, className })`** (Functional Component)
    *   **Purpose**: Sets up and renders an interactive particle system as a background.
    *   **Functionality**:
        *   **WebGL Setup**: Uses `useEffect` to initialize `ogl.Renderer`, `ogl.Camera`, and handle canvas creation and appending to a `containerRef`.
        *   **Responsiveness**: Listens for window `resize` events to adjust the renderer and camera.
        *   **Particle Data Generation**: Generates random positions, colors (from a palette), and additional random data for each particle.
        *   **OGL Geometry & Program**: Creates an `ogl.Geometry` with buffer attributes and an `ogl.Program` with custom GLSL `vertex` and `fragment` shaders.
        *   **Animation Loop**: Uses `requestAnimationFrame` for a continuous `update` loop that:
            *   Updates a `uTime` uniform in the shader for animation.
            *   Adjusts particle positions based on mouse movement if `moveParticlesOnHover` is true.
            *   Applies a subtle rotation to the entire particle system.
            *   Renders the `particles` mesh.
        *   **Cleanup**: Returns a cleanup function from `useEffect` to remove event listeners and the canvas.
    *   **Dependencies**: React (`useEffect`, `useRef`), `ogl` (`Renderer`, `Camera`, `Geometry`, `Program`, `Mesh`), `hexToRgb`, `vertex`, `fragment`. Imports `./Particles.css`.

*   **`hexToRgb(hex)`** (Utility Function)
    *   **Purpose**: Converts a hexadecimal color string to an RGB array, normalizing values to 0-1 for WebGL.
    *   **Parameters**:
        *   `hex` (string): The hexadecimal color string (e.g., "#RRGGBB", "#RGB").
    *   **Returns**: `array<number>` - An array `[r, g, b]` where each component is between 0 and 1.
    *   **Functionality**: Parses the hex string, handles shorthand (3-digit hex), and divides by 255.

*   **`vertex`** (GLSL Shader String)
    *   **Purpose**: Defines how particle vertices are transformed and positioned in 3D space.
    *   **Functionality**:
        *   Receives `position`, `random` values (for individuality), and `color`.
        *   Calculates particle movement based on `uTime` and `random` attributes, creating a subtle, organic floating motion.
        *   Calculates `gl_PointSize` (screen-space size) dynamically based on `uBaseSize`, `uSizeRandomness`, and distance from the camera, simulating perspective.
        *   Passes `random` and `color` to the fragment shader via `varying` variables.

*   **`fragment`** (GLSL Shader String)
    *   **Purpose**: Defines how individual pixels of each particle are colored.
    *   **Functionality**:
        *   Receives `vRandom` and `vColor` from the vertex shader.
        *   Calculates a circular shape for each point.
        *   Applies a subtle color shift using `sin(uTime)` and `vRandom` for a dynamic glow.
        *   If `uAlphaParticles` is enabled, applies `smoothstep` to create soft-edged, transparent circles; otherwise, discards pixels outside the circle.

#### 3. Dependencies
*   `react`: For component lifecycle and state.
*   `ogl`: The core WebGL library.
*   `./Particles.css`: For essential styling of the canvas container.

#### 4. Usage Examples
The `Particles` component is typically used as a full-screen background. It's integrated into the `App.js` file of the portfolio.

```jsx
// In App.js:
import Particles from './Particles';
// ...
function App() {
  return (
    <>
      <Particles
        particleCount={300}
        particleSpread={15}
        speed={0.08}
        particleColors={['#00e6fb', '#1976d2', '#ffffff']}
        moveParticlesOnHover={true}
        particleHoverFactor={0.5}
        alphaParticles={true}
        particleBaseSize={150}
        sizeRandomness={0.8}
        cameraDistance={25}
      />
      {/* Your main content goes here, layered on top of particles */}
    </>
  );
}
```

#### 5. Code Comments
*   Detailed comments explaining the purpose and functionality of the `vertex` and `fragment` GLSL shaders.
*   Explanation of particle generation logic and random attribute usage.
*   Comments on event listeners for resize and mouse movement.
*   Explanation of the animation loop and uniform updates.

#### 6. API Documentation

##### `Particles({ particleCount, particleSpread, speed, particleColors, moveParticlesOnHover, particleHoverFactor, alphaParticles, particleBaseSize, sizeRandomness, cameraDistance, disableRotation, className })`
*   **Description**: Renders an animated, interactive particle background using WebGL (OGL).
*   **Parameters**:
    *   `particleCount` (number, default: `200`): The total number of particles to render.
    *   `particleSpread` (number, default: `10`): Controls how widely spread the particles are in 3D space.
    *   `speed` (number, default: `0.1`): A multiplier for the overall animation speed of the particles.
    *   `particleColors` (array<string>, optional): An array of hexadecimal color strings (e.g., `["#ffffff", "#00e6fb"]`). Particles will randomly pick a color from this palette. If not provided or empty, `defaultColors` (`["#ffffff", "#ffffff", "#ffffff"]`) will be used.
    *   `moveParticlesOnHover` (boolean, default: `false`): If `true`, particles will subtly shift in response to mouse movement.
    *   `particleHoverFactor` (number, default: `1`): A multiplier for how much particles move in response to mouse hover, if `moveParticlesOnHover` is `true`.
    *   `alphaParticles` (boolean, default: `false`): If `true`, particles will be rendered with alpha blending, making them soft-edged and semi-transparent. Otherwise, they are solid circles.
    *   `particleBaseSize` (number, default: `100`): The base size of particles on screen. Actual size scales with distance.
    *   `sizeRandomness` (number, default: `1`): Controls the random variation in particle sizes. A value of `1` means full randomness up to `particleBaseSize`.
    *   `cameraDistance` (number, default: `20`): The Z-position of the camera. Affects perspective and perceived particle size.
    *   `disableRotation` (boolean, default: `false`): If `true`, the automatic rotation animation of the entire particle system will be disabled.
    *   `className` (string, optional): Additional CSS classes to apply to the root container `div`.
*   **Returns**: `JSX.Element` - A `div` element containing the `ogl` WebGL canvas.
*   **Exceptions**: None explicitly handled.

---

#### 📄 `src/ProfileCard.css`

#### 1. Purpose and Overview
`ProfileCard.css` provides the intricate styling for the `ProfileCard` component, which is designed to be an interactive 3D-like element. It uses advanced CSS properties and animations to create depth, glowing effects, and a dynamic tilt behavior based on mouse interaction, along with responsive adjustments for various screen sizes.

#### 2. Key Functions/Classes
This file contains CSS variables, declarations, and `@keyframes` rules. No JavaScript functions or classes.

*   **CSS Variables (`:root`)**: Defines a series of custom properties (e.g., `--pointer-x`, `--rotate-x`, `--card-opacity`, `--grain`, `--icon`, `--behind-gradient`, etc.) that are dynamically updated by JavaScript to control the interactive effects.
*   `.pc-card-wrapper`: Sets up the 3D perspective and relative positioning for the card, and defines a `::before` pseudo-element for a glowing "behind" effect.
*   `.pc-card`: Styles the main card element, applying complex `background-image` layers with blend modes and a `glow-bg` animation for a holographic effect. It also handles the 3D `transform` based on mouse position.
*   `.pc-inside`: Defines the inner layer of the card with a gradient background and blur effect.
*   `.pc-shine`: Creates a metallic/holographic shimmer effect using multiple `background-image` layers, CSS masks (`mask-image`), and blending modes (`mix-blend-mode`). It uses `holo-bg` animation.
*   `.pc-shine::before`, `.pc-shine::after`: Pseudo-elements for additional shine and grain effects, also reacting to mouse position.
*   `.pc-glare`: Adds a subtle glare effect based on pointer position.
*   `.pc-avatar-content`: Styles the container for the avatar, including a backdrop filter and a mask to create a fading effect on the avatar.
*   `.pc-user-info`: Styles the interactive user information bar at the bottom of the card, including a blurred background.
*   `.pc-mini-avatar`, `.pc-handle`, `.pc-status`, `.pc-contact-btn`: Styles for individual elements within the user info bar.
*   `.pc-content`: General styling for content inside the card, often with `mix-blend-mode` for visual integration.
*   `.pc-details`: Styles for the name and title displayed on the card.
*   `@keyframes glow-bg`: Animates a background rotation.
*   `@keyframes holo-bg`: Animates the background position for a holographic effect.
*   **Media Queries**: Provide responsive adjustments for card size, text, and button padding on smaller screens.

#### 3. Dependencies
This CSS file is imported into `src/ProfileCard.js` to define the appearance and interactive visual effects of the profile card.

#### 4. Usage Examples
```jsx
// In ProfileCard.js:
import './ProfileCard.css';
// ...
<div ref={wrapRef} className={`pc-card-wrapper ${className}`} style={cardStyle}>
  <section ref={cardRef} className="pc-card">
    {/* ... inner card structure */}
  </section>
</div>
```

#### 5. Code Comments
N/A (CSS file).

#### 6. API Documentation
N/A.

---

#### 📄 `src/ProfileCard.js`

#### 1. Purpose and Overview
The `ProfileCard` component is an interactive React functional component that renders a stylized, 3D-effect profile card. It displays an avatar, user name, title, handle, and status, with dynamic glowing and tilt effects based on mouse interaction. The component uses CSS variables and JavaScript to smoothly animate these visual properties. It's designed to be visually prominent and engaging.

#### 2. Key Functions/Classes

*   **`ProfileCardComponent({ avatarUrl, iconUrl, grainUrl, behindGradient, innerGradient, showBehindGradient, className, enableTilt, miniAvatarUrl, name, title, handle, status, contactText, showUserInfo, onContactClick })`** (Functional Component, memoized)
    *   **Purpose**: Renders a profile card with a 3D-like interactive hover effect and user details.
    *   **Functionality**:
        *   **DOM References**: Uses `useRef` to get references to the outer wrapper (`wrapRef`) and the main card element (`cardRef`).
        *   **Animation Logic**: `useMemo` is used to create and memoize `animationHandlers` which encapsulate the logic for:
            *   `updateCardTransform`: Calculates CSS variable values (`--pointer-x`, `--rotate-x`, etc.) based on mouse position relative to the card.
            *   `createSmoothAnimation`: Animates the card's state back to a default position when the mouse leaves.
            *   `cancelAnimation`: Stops any ongoing animation frame.
        *   **Event Handlers**: `useCallback` is used to memoize `handlePointerMove`, `handlePointerEnter`, and `handlePointerLeave`.
            *   `pointerenter`: Activates the card's interactive state and initiates `updateCardTransform`.
            *   `pointermove`: Continuously updates card transform based on mouse position.
            *   `pointerleave`: Triggers a smooth animation to reset the card's state.
        *   **Initial Animation**: An `useEffect` hook sets up an initial animation that moves the card from an offset position to its center, providing an engaging entry effect.
        *   **Styling**: Dynamically sets CSS variables for `icon`, `grain`, `behind-gradient`, and `inner-gradient` based on props.
        *   **User Info**: Displays avatar, name, title, handle, status, and a customizable contact button (`onContactClick`).
    *   **Dependencies**: React (`useEffect`, `useRef`, `useCallback`, `useMemo`). Imports `./ProfileCard.css`.

*   **`ProfileCard`** (Memoized Component)
    *   **Purpose**: The exported, memoized version of `ProfileCardComponent` to prevent unnecessary re-renders.

*   **`DEFAULT_BEHIND_GRADIENT`**, **`DEFAULT_INNER_GRADIENT`** (Constants)
    *   **Purpose**: Provide default CSS gradient strings for the card's visual effects.

*   **`ANIMATION_CONFIG`** (Constant Object)
    *   **Purpose**: Defines constants for animation durations and initial offsets.

*   **`clamp(value, min, max)`** (Helper Function)
    *   **Purpose**: Constrains a `value` between a `min` and `max` limit.
    *   **Parameters**: `value`, `min` (default `0`), `max` (default `100`).
    *   **Returns**: `number`.

*   **`round(value, precision)`** (Helper Function)
    *   **Purpose**: Rounds a number to a specified decimal `precision`.
    *   **Parameters**: `value`, `precision` (default `3`).
    *   **Returns**: `number`.

*   **`adjust(value, fromMin, fromMax, toMin, toMax)`** (Helper Function)
    *   **Purpose**: Maps a `value` from one range (`fromMin`-`fromMax`) to another range (`toMin`-`toMax`).
    *   **Parameters**: `value`, `fromMin`, `fromMax`, `toMin`, `toMax`.
    *   **Returns**: `number`.

*   **`easeInOutCubic(x)`** (Helper Function)
    *   **Purpose**: An easing function for smooth cubic interpolation.
    *   **Parameters**: `x` (number, progress from 0 to 1).
    *   **Returns**: `number` - Eased progress.

#### 3. Dependencies
*   `react`: Core React for component and hooks.
*   `./ProfileCard.css`: Styles for the card's appearance and animations.

#### 4. Usage Examples
The `ProfileCard` is integrated into `src/App.js` and positioned to overlap the `HeroSection`.

```jsx
// In App.js:
import ProfileCard from './ProfileCard';
import profile from './profile.png';
import bgavatar from './bgavatar.png';
import grain from './grain.webp';
// ...
<div style={{ /* positioning for overlap */ }}>
  <ProfileCard
    avatarUrl={profile}
    miniAvatarUrl={profile}
    iconUrl={bgavatar}
    grainUrl={grain}
    name="DHANESH KUMAR S"
    title="Aspiring Software Engineer"
    handle="dhaneshkumars"
    status="Online"
    contactText="Contact"
    showBehindGradient={false}
    onContactClick={() => { /* handle contact logic */ }}
  />
</div>
```

#### 5. Code Comments
*   Comments explain the purpose of `animationHandlers` and the `useEffect` hooks for event listeners and initial animation.
*   Explanation of the `clamp`, `round`, `adjust`, and `easeInOutCubic` helper functions.
*   Notes on accessibility for avatar images and contact button.

#### 6. API Documentation

##### `ProfileCardComponent({ avatarUrl, iconUrl, grainUrl, behindGradient, innerGradient, showBehindGradient, className, enableTilt, miniAvatarUrl, name, title, handle, status, contactText, showUserInfo, onContactClick })`
*   **Description**: A React component that displays an interactive 3D-effect profile card with customizable content and visual behavior.
*   **Parameters**:
    *   `avatarUrl` (string, default: `"<Placeholder for avatar URL>"`): The URL or path to the main profile avatar image.
    *   `iconUrl` (string, default: `"<Placeholder for icon URL>"`): The URL or path to an icon image used in the card's shine effect.
    *   `grainUrl` (string, default: `"<Placeholder for grain URL>"`): The URL or path to a grain texture image for background effects.
    *   `behindGradient` (string, optional): Custom CSS `radial-gradient` string for the glowing effect behind the card. If `showBehindGradient` is `true` and this is `undefined`, `DEFAULT_BEHIND_GRADIENT` is used.
    *   `innerGradient` (string, optional): Custom CSS `linear-gradient` string for the card's inner background. If `undefined`, `DEFAULT_INNER_GRADIENT` is used.
    *   `showBehindGradient` (boolean, default: `true`): If `false`, the glowing gradient behind the card is hidden.
    *   `className` (string, default: `""`): Additional CSS classes to apply to the card wrapper.
    *   `enableTilt` (boolean, default: `true`): If `false`, disables the 3D tilt and pointer-based animation effects.
    *   `miniAvatarUrl` (string, optional): The URL or path to a smaller avatar image for the user info section. If `undefined`, `avatarUrl` is used as a fallback.
    *   `name` (string, default: `"Javi A. Torres"`): The full name displayed on the card.
    *   `title` (string, default: `"Software Engineer"`): The professional title displayed below the name.
    *   `handle` (string, default: `"javicodes"`): The social media handle displayed in the user info section.
    *   `status` (string, default: `"Online"`): The status text displayed in the user info section.
    *   `contactText` (string, default: `"Contact"`): The text for the contact button.
    *   `showUserInfo` (boolean, default: `true`): If `false`, the entire user information bar at the bottom of the card is hidden.
    *   `onContactClick` (function, optional): A callback function invoked when the "Contact" button is clicked.
*   **Returns**: `JSX.Element` - A memoized `div` element representing the interactive profile card.
*   **Exceptions**: `onError` handler on `img` tags to gracefully handle broken image URLs.

---

#### 📄 `src/ProjectCard3D.js`

#### 1. Purpose and Overview
The `ProjectCard3D` component is a React functional component designed to display a project overview in an interactive card format. It features a 3D-like hover effect using `framer-motion`, showcases a project screenshot, and lists the technologies used. Clicking the card triggers a detailed view.

#### 2. Key Functions/Classes

*   **`ProjectCard3D({ project, onClick })`** (Functional Component)
    *   **Purpose**: Renders an individual, interactive project card within a grid.
    *   **Functionality**:
        *   **Hover State**: Uses `useState` to track `isHovered` for visual feedback.
        *   **3D Hover Animation**: Employs `motion.div` from `framer-motion` to apply `scale`, `rotateY`, `rotateX`, and `z` animations on hover, creating a 3D pop-out effect.
        *   **Styling**: Uses Material-UI `Paper` and `Box` components for structured layout and styling.
        *   **Background Image**: The card background is dynamically set to the `project.screenshot` if available, with a fallback gradient.
        *   **Shimmer Effect**: A `::before` pseudo-element creates a shimmering light effect across the card on hover.
        *   **Hover Overlay**: A transparent gradient overlay appears on hover, displaying the project name prominently.
        *   **Tech Stack**: Integrates the `TechLogos` component to display the technologies used at the bottom of the card.
        *   **Click Handler**: Invokes the `onClick` prop when the card is clicked.
    *   **Dependencies**: React (`useState`), Material-UI (`Box`, `Typography`, `Paper`), `framer-motion` (`motion`), `TechLogos`.

#### 3. Dependencies
*   `react`: For component structure and hooks.
*   `framer-motion`: For advanced animations.
*   `@mui/material`: Material-UI components for styling and layout.
*   `./TechLogos`: Custom component to display technology icons.

#### 4. Usage Examples
This component is used within the `ProjectsSection` to render each project entry.

```jsx
// In ProjectsSection.js:
import ProjectCard3D from './ProjectCard3D';
// ...
const projectData = {
  name: 'My Awesome Project',
  description: '...',
  tech: ['React', 'Node.js'],
  link: '...',
  screenshot: '/path/to/screenshot.png',
};

return (
  <ProjectCard3D
    project={projectData}
    onClick={() => console.log('Project clicked!')}
  />
);
```

#### 5. Code Comments
*   Comments explaining `framer-motion` properties for the 3D hover effect.
*   Notes on dynamic background styling.

#### 6. API Documentation

##### `ProjectCard3D({ project, onClick })`
*   **Description**: A React component that renders an interactive card for a project, featuring a 3D-like hover effect, project screenshot, and technology stack.
*   **Parameters**:
    *   `project` (object): An object containing details about the project.
        *   `name` (string): The name of the project.
        *   `description` (string): A brief description of the project.
        *   `tech` (array<string>): An array of technology names used in the project.
        *   `link` (string): The URL to the project's live demo or repository.
        *   `screenshot` (string, optional): The URL or path to a screenshot image of the project.
    *   `onClick` (function): A callback function invoked when the project card is clicked.
*   **Returns**: `JSX.Element` - A `motion.div` wrapping a Material-UI `Paper` component, styled as an interactive project card.
*   **Exceptions**: None explicitly handled.

---

#### 📄 `src/ProjectModal.js`

#### 1. Purpose and Overview
The `ProjectModal` component is a React functional component that displays detailed information about a specific project in a full-screen modal dialog. It leverages `framer-motion` for smooth entry animations and integrates `BlurText` for animated text display, enhancing the visual presentation of project details. It also includes links to the project and its GitHub repository.

#### 2. Key Functions/Classes

*   **`ProjectModal({ project, isOpen, onClose })`** (Functional Component)
    *   **Purpose**: Renders a full-screen, interactive modal to present comprehensive details of a selected project.
    *   **Functionality**:
        *   **Visibility Control**: Renders `null` if `isOpen` is `false` or `project` is not provided.
        *   **Body Scroll**: Uses `useEffect` to prevent body scrolling when the modal is open and restores it on close.
        *   **Keyboard Navigation**: Attaches an event listener to close the modal when the `Escape` key is pressed.
        *   **Click Handling**: Closes the modal when clicking on the backdrop, but prevents closure when clicking inside the modal content.
        *   **Animations**: Uses `motion.div` for a smooth fade-in and scale-up animation upon opening.
        *   **Content Display**: Displays the project `name`, `description` (using `BlurText` for animation), and `tech` stack (using `TechLogos`).
        *   **Action Buttons**: Provides interactive links to view the project (live demo) and its GitHub repository.
    *   **Dependencies**: React (`useEffect`), Material-UI (`Box`, `IconButton`, `Typography`, `Paper`, `Tooltip`), `@mui/icons-material` (`Close`, `GitHubIcon`), `framer-motion` (`motion`), `BlurText`, `TechLogos`.

#### 3. Dependencies
*   `react`: For component structure and hooks.
*   `@mui/material`: Material-UI components for UI elements.
*   `@mui/icons-material`: Material-UI icons (`Close`, `GitHubIcon`).
*   `framer-motion`: For declarative animations.
*   `./BlurText`: Custom component for animated text.
*   `./TechLogos`: Custom component for displaying technology icons.

#### 4. Usage Examples
This component is controlled by the `ProjectsSection` component, which passes the `project` data and controls `isOpen` and `onClose`.

```jsx
// In ProjectsSection.js:
import ProjectModal from './ProjectModal';
// ...
const [selectedProject, setSelectedProject] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);

const handleProjectClick = (project) => {
  setSelectedProject(project);
  setIsModalOpen(true);
};

const handleCloseModal = () => {
  setIsModalOpen(false);
  setSelectedProject(null);
};

return (
  <>
    {/* ... trigger handleProjectClick ... */}
    <ProjectModal
      project={selectedProject}
      isOpen={isModalOpen}
      onClose={handleCloseModal}
    />
  </>
);
```

#### 5. Code Comments
*   Comments explaining the `useEffect` hooks for managing body overflow and keyboard events (Escape key).
*   Definition of CSS `@keyframes` for modal entry/exit animations (though `framer-motion` is primarily used for the inner content animation).

#### 6. API Documentation

##### `ProjectModal({ project, isOpen, onClose })`
*   **Description**: A full-screen modal component that displays detailed information about a selected project, including its name, description, technology stack, and links.
*   **Parameters**:
    *   `project` (object): An object containing the project data. Expected properties:
        *   `name` (string): The name of the project.
        *   `description` (string): A detailed description of the project.
        *   `tech` (array<string>): An array of technology names used in the project.
        *   `link` (string): The URL to the project's live demo or repository.
        *   `screenshot` (string, optional): The URL or path to a screenshot image of the project (though not directly rendered in the modal, it's part of the project data).
    *   `isOpen` (boolean): Controls the visibility of the modal. If `false`, the component renders `null`.
    *   `onClose` (function): A callback function invoked when the modal should be closed (e.g., by clicking the close button, pressing Escape, or clicking the backdrop).
*   **Returns**: `JSX.Element | null` - The modal dialog if `isOpen` is `true` and `project` is provided, otherwise `null`.
*   **Exceptions**: None explicitly handled.

---

#### 📄 `src/ScrollProgressBar.js`

#### 1. Purpose and Overview
The `ScrollProgressBar` component is a React functional component that displays a dynamic progress bar at the top of the viewport. This bar visually indicates the user's current scroll position on the page, with its width adjusting from 0% to 100% as the user scrolls from top to bottom. It uses `framer-motion` for smooth animation of the bar's width.

#### 2. Key Functions/Classes

*   **`ScrollProgressBar()`** (Functional Component)
    *   **Purpose**: Renders a visually appealing progress bar indicating scroll depth.
    *   **Functionality**:
        *   **Scroll Tracking**: Uses `useEffect` to add a `scroll` event listener to the window.
        *   **Progress Calculation**: The `handleScroll` function calculates the scroll progress as a percentage (`0-100%`) by comparing `window.scrollY` to the total scrollable height of the document (`document.body.scrollHeight - window.innerHeight`).
        *   **State Update**: Updates the `scroll` state variable with the calculated progress.
        *   **Animation**: Employs `motion.div` from `framer-motion` to animate the `width` of the progress bar smoothly as the `scroll` state changes.
        *   **Styling**: Positions the bar fixed at the top, gives it a `linear-gradient` background, and a high `z-index` to ensure visibility.
        *   **Cleanup**: Removes the `scroll` event listener on component unmount.
    *   **Dependencies**: React (`useEffect`, `useState`), `framer-motion` (`motion`).

#### 3. Dependencies
*   `react`: For component structure and hooks.
*   `framer-motion`: For smooth animation of the progress bar.

#### 4. Usage Examples
The `ScrollProgressBar` is typically included at the very top of the main application component, like `App.js`, to ensure it's rendered globally and independently of other content.

```jsx
// In App.js:
import ScrollProgressBar from './ScrollProgressBar';
// ...
function App() {
  return (
    <>
      <ScrollProgressBar />
      {/* All other application content */}
    </>
  );
}
```

#### 5. Code Comments
N/A (component logic is straightforward).

#### 6. API Documentation

##### `ScrollProgressBar()`
*   **Description**: A React component that displays a horizontal progress bar at the top of the viewport, indicating the user's vertical scroll progress on the page.
*   **Parameters**: None.
*   **Returns**: `JSX.Element` - A `motion.div` element representing the animated scroll progress bar.
*   **Exceptions**: None explicitly handled.

---

#### 📄 `src/StarBorder.css`

#### 1. Purpose and Overview
`StarBorder.css` defines the visual styles and animations for the `StarBorder` component. It creates an animated, glowing border effect around its content by using multiple pseudo-elements with radial gradients that move along the edges, simulating a "star" or glowing energy flow.

#### 2. Key Functions/Classes
This file contains CSS declarations and `@keyframes` rules. No JavaScript functions or classes.

*   `.star-border-container`: Styles the main wrapper, setting `position: relative` for absolute positioning of pseudo-elements, `border-radius`, and `overflow: hidden` to clip the moving gradients. It uses CSS variables for dynamic padding.
*   `.border-gradient-bottom`, `.border-gradient-top`, `.border-gradient-left`, `.border-gradient-right`: Styles four pseudo-elements that create the glowing border. Each is an absolutely positioned `div` with a `radial-gradient` that animates.
    *   They are positioned slightly outside the container and are circular to create the "glow" effect as they move.
    *   `opacity: 0.8`: Provides a subtle transparency.
    *   `z-index: 0`: Ensures they appear *behind* the actual content, but within the padded border area.
*   `.inner-content`: Styles the actual content area inside the animated border, providing a background, text color, and `z-index: 1` to layer it above the gradients.
*   `@keyframes star-movement-bottom`, `star-movement-top`, `star-movement-left`, `star-movement-right`: These keyframes define the movement of the radial gradients along each side of the container. Each animation moves a gradient from one end to the other, fading out as it reaches the end, creating a continuous "flow" illusion.

#### 3. Dependencies
This CSS file is imported into `src/StarBorder.js` to apply the visual effects.

#### 4. Usage Examples
```jsx
// In StarBorder.js:
import './StarBorder.css';
// ...
<Component 
  className={`star-border-container ${className}`} 
  style={{ padding: `${thickness}px`, ...rest.style }}
  {...rest}
>
  {/* The four animated border gradient divs */}
  <div className="border-gradient-bottom" style={{ background: `radial-gradient(circle, ${color}, transparent 10%)`, animationDuration: speed }}></div>
  {/* ... similar divs for top, left, right ... */}
  <div className="inner-content">{children}</div>
</Component>
```

#### 5. Code Comments
N/A (CSS file).

#### 6. API Documentation
N/A.

---

#### 📄 `src/StarBorder.js`

#### 1. Purpose and Overview
The `StarBorder` component is a React functional component that wraps its children content within a dynamically animated, glowing border. It uses CSS gradients and animations (defined in `StarBorder.css`) to create a continuous, "star-like" movement along its edges, adding a visually striking effect to any wrapped element. The component is highly customizable for color, speed, and thickness.

#### 2. Key Functions/Classes

*   **`StarBorder({ as: Component, className, color, speed, thickness, children, ...rest })`** (Functional Component)
    *   **Purpose**: Renders its children inside a container with a customizable animated glowing border.
    *   **Functionality**:
        *   **Custom Root Element**: Accepts an `as` prop to allow rendering as a different HTML tag or React component (defaults to `div`).
        *   **Dynamic Styling**: Applies inline styles for `padding` (controlled by `thickness`) and passes other `rest` props to the root component.
        *   **Animated Borders**: Renders four `div` elements, each representing a segment of the animated border (bottom, top, left, right).
        *   **CSS Variable Injection**: Dynamically injects `color` and `speed` into the inline `style` attribute of these border `div`s, allowing them to control the CSS animations defined in `StarBorder.css`.
        *   **Content Wrapper**: Wraps the `children` prop in an `inner-content` div to keep them distinct from the animated border elements.
    *   **Dependencies**: Imports `./StarBorder.css`.

#### 3. Dependencies
*   `./StarBorder.css`: Provides the core visual and animation styling for the glowing border effect.

#### 4. Usage Examples
This component is used in `src/App.js` to wrap the `ProjectsSection` content, giving the entire project grid a dynamic, glowing border.

```jsx
// In ProjectsSection.js:
import StarBorder from './StarBorder';
// ...
return (
  <StarBorder 
    color="#00e6fb" 
    speed="8s" 
    thickness={3}
    style={{ /* custom inline styles for the container */ }}
  >
    {/* Your project grid or other content goes here */}
    <Box sx={{ display: 'grid', gap: 4 }}>
      {/* ... ProjectCard3D components ... */}
    </Box>
  </StarBorder>
);
```

#### 5. Code Comments
N/A (component logic is straightforward, styling details are in CSS).

#### 6. API Documentation

##### `StarBorder({ as: Component, className, color, speed, thickness, children, ...rest })`
*   **Description**: A React component that wraps its children with a dynamic and customizable glowing border effect.
*   **Parameters**:
    *   `as` (React.ElementType, default: `'div'`): The HTML tag name or React component to use as the root element for the `StarBorder` component.
    *   `className` (string, default: `""`): Additional CSS class names to apply to the root element.
    *   `color` (string, default: `'#00e6fb'`): The CSS color value for the glowing border. This color is used to generate the radial gradients.
    *   `speed` (string, default: `'6s'`): The duration of the border animation (e.g., `'4s'`, `'8s'`). This string is passed directly to the CSS `animation-duration` property.
    *   `thickness` (number, default: `2`): The thickness of the border in pixels. This value is used for padding around the inner content.
    *   `children` (React.ReactNode): The content that will be rendered inside the animated border.
    *   `...rest` (object): Any other standard HTML attributes or React props that should be passed to the root element (`as` component).
*   **Returns**: `JSX.Element` - The wrapped children surrounded by the animated glowing border.
*   **Exceptions**: None explicitly handled.

---

#### 📄 `src/TechLogos.js`

#### 1. Purpose and Overview
The `TechLogos` component is a React functional component that displays a collection of technology logos. It takes an array of technology names as input and renders corresponding SVG logos (from an external CDN) with subtle animations on hover. If a logo URL is not available for a specific technology, it gracefully falls back to displaying the first letter of the technology name within a styled circle.

#### 2. Key Functions/Classes

*   **`TechLogos({ techStack })`** (Functional Component)
    *   **Purpose**: Renders a visually appealing list of technology icons based on a given tech stack.
    *   **Functionality**:
        *   Iterates through the `techStack` array.
        *   For each technology, it looks up the corresponding `logoUrl` in the `techLogos` mapping.
        *   **Animations**: Uses `motion.div` from `framer-motion` for initial load animations (fade in, slide up, scale) and hover effects (scale up, translateY).
        *   **Logo Display**: If a `logoUrl` is found, it renders an `img` tag with the SVG.
        *   **Fallback**: If no `logoUrl` is found, it renders a circular `Box` with the first letter of the technology name.
        *   **Styling**: Applies consistent styling to the logo containers, including rounded corners, background, and hover effects.
    *   **Dependencies**: React, Material-UI (`Box`), `framer-motion` (`motion`).

*   **`techLogos`** (Constant Object)
    *   **Purpose**: Maps technology names (keys) to their respective SVG logo URLs (values), primarily from `cdn.jsdelivr.net/gh/devicons/devicon/`.
    *   **Structure**: A plain JavaScript object.

#### 3. Dependencies
*   `react`: For component structure.
*   `@mui/material`: Material-UI `Box` component for styling and layout.
*   `framer-motion`: For animations.

#### 4. Usage Examples
The `TechLogos` component is used in both `ProjectCard3D` and `ProjectModal` to display the tech stack of each project.

```jsx
// Example usage:
import TechLogos from './TechLogos';

function MyProjectDetails() {
  const technologies = ['React', 'Node.js', 'Python', 'Go']; // 'Go' will use fallback
  return (
    <Box>
      <Typography variant="h6">Technologies Used:</Typography>
      <TechLogos techStack={technologies} />
    </Box>
  );
}
```

#### 5. Code Comments
N/A (component logic is straightforward, the `techLogos` map is self-explanatory).

#### 6. API Documentation

##### `TechLogos({ techStack })`
*   **Description**: A React component that displays a set of technology logos based on the provided `techStack` array, with interactive animations.
*   **Parameters**:
    *   `techStack` (array<string>): An array of strings, where each string is the name of a technology (e.g., `"React"`, `"Python"`, `"MongoDB"`). The component attempts to find a matching logo for each name.
*   **Returns**: `JSX.Element` - A Material-UI `Box` component containing `motion.div` wrappers for each technology logo or fallback initial.
*   **Exceptions**: Handles missing logo URLs gracefully by displaying the first letter of the technology name.

---

#### 📄 `src/index.css`

#### 1. Purpose and Overview
`index.css` is the primary global CSS file for the React application. It defines foundational styles that apply across the entire application, such as setting margin for the `body`, defining the default font family for the application, and specifying the font for `code` elements.

#### 2. Key Functions/Classes
This file contains global CSS declarations. No JavaScript functions or classes.

*   `body`: Resets default margin, sets font-family, and enables font smoothing.
*   `code`: Sets a monospace font family for code blocks.

#### 3. Dependencies
This CSS file is imported into `src/index.js`, making its styles available globally to all components in the React application.

#### 4. Usage Examples
```javascript
// In src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // This line imports the global styles
import App from './App';

// ...
```

#### 5. Code Comments
N/A (CSS file).

#### 6. API Documentation
N/A.

---

#### 📄 `src/index.js`

#### 1. Purpose and Overview
`index.js` is the **entry point** of the React application. It's the first JavaScript file executed when the web page loads. Its responsibilities include rendering the root `App` component into the DOM and initializing performance monitoring using `reportWebVitals`.

#### 2. Key Functions/Classes

*   **`ReactDOM.createRoot(document.getElementById('root'))`**:
    *   **Purpose**: Creates a React root, which is the entry point for rendering a React application into a browser DOM node.
    *   **Functionality**: It targets the `<div id="root">` element in `public/index.html` as the container for the React application.
*   **`root.render(<React.StrictMode><App /></React.StrictMode>)`**:
    *   **Purpose**: Renders the `App` component into the React root.
    *   **Functionality**: Wraps `App` in `React.StrictMode` for identifying potential problems in an application (it activates additional checks and warnings for its descendants).
*   **`reportWebVitals()`**:
    *   **Purpose**: Initializes the Web Vitals reporting mechanism.
    *   **Functionality**: Calls the `reportWebVitals` function (imported from `./reportWebVitals.js`) to start measuring and reporting performance metrics.

#### 3. Dependencies
*   `react`: The core React library.
*   `react-dom/client`: Provides client-specific React DOM methods, especially `createRoot` for React 18+.
*   `./index.css`: Global CSS styles for the application.
*   `./App`: The main application component.
*   `./reportWebVitals`: A utility function for monitoring web performance metrics.

#### 4. Usage Examples
This file is automatically loaded and executed by the browser when the `index.html` page is opened. No direct usage examples are typically written for this file by developers, other than modifying what's rendered at the root or adding global imports.

#### 5. Code Comments
Includes comments explaining the purpose of `reportWebVitals` and where to learn more about it.

#### 6. API Documentation
N/A.

---

#### 📄 `src/reportWebVitals.js`

#### 1. Purpose and Overview
The `reportWebVitals` function is a utility provided by Create React App to measure and report various performance metrics (known as "Web Vitals") for the application. These metrics include Core Web Vitals (CLS, FID, LCP) and other important performance indicators (FCP, TTFB), which are crucial for understanding and improving the user experience on the web.

#### 2. Key Functions/Classes

*   **`reportWebVitals(onPerfEntry)`** (Functional Component)
    *   **Purpose**: Gathers and reports Web Vitals metrics if a callback function is provided.
    *   **Parameters**:
        *   `onPerfEntry` (function): A callback function that will be invoked with each Web Vital metric entry (e.g., `getCLS`, `getFID`, `getFCP`, `getLCP`, `getTTFB`). This function typically logs the metrics to the console or sends them to an analytics endpoint.
    *   **Returns**: `void`.
    *   **Functionality**:
        *   Checks if `onPerfEntry` is a valid function.
        *   Dynamically imports the `web-vitals` library.
        *   Calls `getCLS`, `getFID`, `getFCP`, `getLCP`, and `getTTFB` from `web-vitals`, passing the `onPerfEntry` callback to each.
    *   **Dependencies**: `web-vitals` (dynamically imported).

#### 3. Dependencies
*   `web-vitals`: An external library for easily measuring Web Vitals.

#### 4. Usage Examples
This function is called in `src/index.js` to enable performance monitoring for the entire application. By default, in a Create React App project, `onPerfEntry` might just log to the console.

```javascript
// In src/index.js:
import reportWebVitals from './reportWebVitals';
// ...
reportWebVitals(console.log); // Example: reports all metrics to the console
```

#### 5. Code Comments
Includes a comment explaining the purpose of the function and linking to the official documentation for Web Vitals.

#### 6. API Documentation

##### `reportWebVitals(onPerfEntry)`
*   **Description**: A utility function that, when provided with a callback, measures and reports essential Web Vitals performance metrics for the web application.
*   **Parameters**:
    *   `onPerfEntry` (Function): A callback function that receives individual performance metric objects (e.g., `FID`, `LCP`, `CLS`). This function will be called for each measured metric. It must be a function instance.
*   **Returns**: `void`.
*   **Exceptions**: None explicitly thrown. If `onPerfEntry` is not a function, the internal `import('web-vitals')` call will not be made, and no metrics will be reported.

---

#### 📄 `src/setupTests.js`

#### 1. Purpose and Overview
`setupTests.js` is a configuration file used by Jest to set up the testing environment before running any tests. In a Create React App project, its main purpose is to import `@testing-library/jest-dom`. This library extends Jest with custom matchers that make it easier and more declarative to write assertions about the state of the DOM, enhancing the readability and maintainability of tests.

#### 2. Key Functions/Classes
This file contains an import statement. No executable code or custom functions/classes are defined here.

*   **`import '@testing-library/jest-dom';`**: This line imports the `jest-dom` library, which automatically registers its custom matchers with Jest.

#### 3. Dependencies
*   `@testing-library/jest-dom`: An external library that provides custom Jest matchers for DOM assertions.

#### 4. Usage Examples
This file is automatically discovered and executed by Jest when running tests in a Create React App project. Developers do not explicitly call it. After importing `jest-dom`, tests can use its custom matchers:

```javascript
// Example in a test file (e.g., App.test.js)
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // No need to import this again if setupTests.js handles it

test('renders a specific element', () => {
  render(<MyComponent />);
  const myElement = screen.getByTestId('my-test-element');
  expect(myElement).toBeInTheDocument(); // Custom matcher from jest-dom
  expect(myElement).toHaveTextContent('Hello World'); // Another custom matcher
});
```

#### 5. Code Comments
Includes comments explaining the purpose of the file and linking to the `jest-dom` GitHub repository for more information.

#### 6. API Documentation
N/A.

---

## 🚀 Setup and Installation

This section provides instructions for setting up and running the "my-portfolio" project.

### Prerequisites and Dependencies

Before you begin, ensure you have the following installed on your system:

*   **Node.js**: Version 14 or higher. You can download it from [nodejs.org](https://nodejs.org/).
*   **npm** (Node Package Manager) or **Yarn**: npm comes bundled with Node.js. Yarn can be installed separately (recommended for its speed and reliability).
    *   To check Node.js version: `node -v`
    *   To check npm version: `npm -v`
    *   To check Yarn version: `yarn -v` (if installed)
*   **Git**: For cloning the repository. You can download it from [git-scm.com](https://git-scm.com/).

### Installation Steps

Follow these steps to get the project up and running locally:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/DHANESH-KUMAR-S/my-portfolio.git
    cd my-portfolio
    ```

2.  **Install dependencies**:
    Using npm:
    ```bash
    npm install
    ```
    Or using Yarn:
    ```bash
    yarn install
    ```
    This command reads the `package.json` file and installs all listed dependencies and devDependencies, as well as their transitive dependencies, based on `package-lock.json` (or `yarn.lock`).

### Configuration Requirements

The project uses Create React App, which generally requires minimal configuration.

*   **Environment Variables**: The project might use environment variables. Create React App supports `.env` files. If specific environment variables are needed (e.g., for API keys), create a `.env` file in the root directory (e.g., `.env.development` for development, `.env.production` for production builds) and define them with the `REACT_APP_` prefix:
    ```
    # Example .env file
    REACT_APP_MY_API_KEY=your_api_key_here
    ```
    (Based on the provided files, no custom `.env` variables are explicitly defined, but `dotenv` and `dotenv-expand` are dependencies, suggesting this capability is available.)

*   **GitHub Pages Deployment**: If you plan to deploy to GitHub Pages, ensure your `package.json` includes a `homepage` field and a `deploy` script:
    ```json
    {
      "homepage": "https://<your-github-username>.github.io/<your-repo-name>",
      "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
      }
    }
    ```
    Replace `<your-github-username>` and `<your-repo-name>` with your actual GitHub details.

## 💻 Usage Examples

This section describes how to run and interact with the "my-portfolio" project in various scenarios.

### How to Run the Project

After completing the [Setup and Installation](#installation-steps) steps, you can run the application:

1.  **Start the Development Server**:
    To run the app in development mode, execute:
    ```bash
    npm start
    # or
    yarn start
    ```
    This command will:
    *   Compile the React application.
    *   Open `http://localhost:3000` in your default web browser (if not, navigate there manually).
    *   Provide live reloading: any changes you make to the source code will automatically refresh the browser.
    *   Display lint errors in the console.

2.  **Build for Production**:
    To create an optimized production build of your application, suitable for deployment:
    ```bash
    npm run build
    # or
    yarn build
    ```
    This command will:
    *   Bundle React in production mode.
    *   Optimize the build for best performance (minification, code splitting, asset hashing).
    *   Output the production-ready static files into the `build/` directory. Your app is then ready to be deployed.

3.  **Run Tests**:
    To launch the Jest test runner in interactive watch mode:
    ```bash
    npm test
    # or
    yarn test
    ```
    This command will:
    *   Execute all tests.
    *   Enter an interactive mode allowing you to filter tests or run them based on file changes.

4.  **Eject from Create React App**:
    **_Note: This is a one-way operation. Once you `eject`, you cannot go back!_**
    If you need full control over the webpack and Babel configurations (e.g., for advanced customizations not supported by CRA's default setup), you can "eject":
    ```bash
    npm run eject
    # or
    yarn eject
    ```
    This command will:
    *   Copy all configuration files and transitive dependencies (webpack, Babel, ESLint, etc.) directly into your project.
    *   Remove the single `react-scripts` build dependency.
    *   Allow you to tweak the configurations as needed. At this point, you are responsible for managing these configurations yourself.

5.  **Deploy to GitHub Pages (Example)**:
    Assuming you have configured the `homepage` and `deploy` scripts in `package.json` (as described in [Configuration Requirements](#configuration-requirements)), you can deploy your production build:
    ```bash
    npm run deploy
    # or
    yarn deploy
    ```
    This command will:
    *   First, run `npm run build` (due to `predeploy` script).
    *   Then, push the contents of the `build/` folder to the `gh-pages` branch of your GitHub repository.
    *   Your application will then be accessible at the URL specified in your `homepage` field.

### Common Use Cases

*   **Local Development**: Use `npm start` for rapid development with hot reloading.
*   **Code Quality Checks**: `npm test` helps ensure code correctness and functionality. ESLint is integrated via `eslintConfig` in `package.json` to enforce code style.
*   **Preparing for Hosting**: Use `npm run build` before deploying to any static hosting service (e.g., Netlify, Vercel, GitHub Pages).
*   **Customization**: If standard `react-scripts` configurations are insufficient, `npm run eject` offers full control (use with caution).

## 🔧 API Reference

This section provides detailed API documentation for the main components and utility functions within the codebase.

---

### `App.js`

This file serves as the main application component, orchestrating the entire portfolio.

#### `App()`

*   **Description**: The root component that sets up the global theme (dark/light mode), renders global effects (scroll progress, click sparks), and composes the main sections of the portfolio.
*   **Parameters**: None.
*   **Returns**: `JSX.Element` - The rendered portfolio application, including navigation, hero section, skills, projects, and certifications.
*   **Exceptions**: None explicitly handled within the component logic itself.

#### `MyAppBar({ darkMode, toggleDarkMode })`

*   **Description**: Renders the fixed top navigation bar of the application. It includes the developer's name, navigation links that scroll to specific sections, and a button to toggle between dark and light themes.
*   **Parameters**:
    *   `darkMode` (boolean): `true` if the application is currently in dark mode, `false` otherwise.
    *   `toggleDarkMode` (function): A callback function to be invoked when the theme toggle button is clicked. It should update the `darkMode` state in the parent component.
*   **Returns**: `JSX.Element` - An `AppBar` Material-UI component.
*   **Exceptions**: None.

#### `HeroSection()`

*   **Description**: Displays the prominent introductory content of the portfolio. This includes the developer's name, a dynamically typed professional title, and call-to-action buttons for downloading a resume and connecting for projects.
*   **Parameters**: None.
*   **Returns**: `JSX.Element` - A `Box` Material-UI component containing the hero section's content.
*   **Exceptions**: None.

#### `SkillsSection()`

*   **Description**: Renders a dedicated section to showcase both technical and soft skills. Technical skills are presented with animated progress bars, while soft skills are displayed in interactive cards with detailed descriptions revealed on hover.
*   **Parameters**: None.
*   **Returns**: `JSX.Element` - A `Box` Material-UI component containing the skills section content.
*   **Exceptions**: None.

#### `ProjectsSection()`

*   **Description**: Renders a section dedicated to showcasing projects. It displays a grid of interactive `ProjectCard3D` components. When a project card is clicked, a `ProjectModal` opens to show more detailed information about that project.
*   **Parameters**: None.
*   **Returns**: `JSX.Element` - A fragment containing the projects section content and the `ProjectModal`.
*   **Exceptions**: None.

#### `scrollToSection(id)`

*   **Description**: A utility function to smoothly scroll the viewport to an HTML element identified by its `id` attribute.
*   **Parameters**:
    *   `id` (string): The `id` attribute of the target HTML element to scroll to.
*   **Returns**: `void`.
*   **Exceptions**: If no element with the given `id` is found, the function will silently do nothing.

---

### `BlurText.js`

A component for animating text with a blur effect.

#### `BlurText({ text, delay, className, animateBy, direction, threshold, rootMargin, animationFrom, animationTo, easing, onAnimationComplete, stepDuration, color })`

*   **Description**: A React component that animates text (word by word or character by character) with a blur-in effect when it enters the viewport. It uses `framer-motion` for smooth, staggered animations.
*   **Parameters**:
    *   `text` (string): The text string to be animated.
    *   `delay` (number, default: `200`): The delay in milliseconds applied between the animation start of successive words or characters.
    *   `className` (string, default: `''`): Additional CSS class names to apply to the main `<p>` container element.
    *   `animateBy` (string, default: `'words'`): Determines how the text is split for animation. Accepts `'words'` or `'characters'`.
    *   `direction` (string, default: `'top'`): Specifies the initial vertical offset for the blur animation. Accepted values are `'top'` (starts from -50px) or `'bottom'` (starts from +50px).
    *   `threshold` (number, default: `0.1`): The `threshold` option for `IntersectionObserver`. It's a single number or an array of numbers indicating at what percentage of the target's visibility the observer's callback should be executed.
    *   `rootMargin` (string, default: `'0px'`): The `rootMargin` option for `IntersectionObserver`. It's a string that specifies a margin around the root element, which can grow or shrink the area used for intersections.
    *   `animationFrom` (object, optional): Custom `from` properties for the `framer-motion` animation. If provided, it overrides the component's default initial animation state.
    *   `animationTo` (array<object>, optional): Custom `to` keyframe steps for the `framer-motion` animation. If provided, it overrides the component's default target animation states.
    *   `easing` (function, optional, default: `(t) => t * (2 - t)`): A custom easing function for the animation. This function should take a normalized time `t` (0 to 1) and return an eased value.
    *   `onAnimationComplete` (function, optional): A callback function that is invoked when the animation of the *last* text segment completes.
    *   `stepDuration` (number, default: `0.35`): The duration in seconds for each individual step if `animationTo` is an array of keyframes.
    *   `color` (string, default: `'#1976d2'`): The CSS color value to be applied to the text.
*   **Returns**: `JSX.Element` - A `<p>` HTML element containing `motion.span` elements for each animated text segment.
*   **Exceptions**: None explicitly handled.

---

### `CertificateModal.js`

A modal component to display detailed certificate information.

#### `CertificateModal({ certificate, isOpen, onClose })`

*   **Description**: A full-screen modal component that displays a selected certificate's image, name, and organization. It provides controls for closing the modal and ensures an accessible experience by managing body scroll and keyboard events.
*   **Parameters**:
    *   `certificate` (object): An object containing details about the certificate to display. Expected properties:
        *   `image` (string): The URL or path to the certificate image.
        *   `text` (string): The full text of the certificate, from which the name and organization are parsed (e.g., "Certificate Name (Organization)").
    *   `isOpen` (boolean): A boolean flag that controls the visibility of the modal. If `false`, the component renders `null`.
    *   `onClose` (function): A callback function to be invoked when the modal needs to be closed (e.g., by clicking the close button, pressing the `Escape` key, or clicking on the backdrop).
*   **Returns**: `JSX.Element | null` - The modal dialog if `isOpen` is `true` and `certificate` data is available; otherwise, `null`.
*   **Exceptions**: None explicitly handled. It's assumed valid `certificate` data is provided when `isOpen` is `true`.

---

### `CertificationsSection.js`

The section for displaying certifications.

#### `CertificationsSection()`

*   **Description**: Renders a dedicated section within the portfolio to showcase various certifications. It uses a `CircularGallery` for an interactive 3D display of certificate images and integrates a `CertificateModal` to provide detailed views upon clicking a certificate.
*   **Parameters**: None.
*   **Returns**: `JSX.Element` - A `<section>` element containing the certifications title, the `CircularGallery`, and the `CertificateModal`.
*   **Exceptions**: None explicitly handled.

---

### `CircularGallery.js`

An interactive 3D circular gallery for items.

#### `CircularGallery({ items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase, cardWidth, cardHeight, onCertificateClick })`

*   **Description**: A React component that renders a dynamic and interactive 3D circular gallery using the `ogl` WebGL library. It displays a series of items (e.g., certificates) in a bending carousel formation, allowing users to scroll, drag, and click on individual items.
*   **Parameters**:
    *   `items` (array<object>): An array of objects, where each object represents a gallery item. Each item is expected to have:
        *   `image` (string): The URL or path to the image asset for the card.
        *   `text` (string): The text content to be displayed on the card, from which a certificate name and organization can be parsed.
    *   `bend` (number, default: `3`): Controls the degree of curvature of the gallery. A positive value creates an inward bend, while a negative value creates an outward bend. A value of `0` results in a flat, linear arrangement.
    *   `textColor` (string, default: `'#ffffff'`): The CSS color string used for rendering text on the cards.
    *   `borderRadius` (number, default: `0.05`): The border radius of the individual cards, expressed as a normalized value between 0 and 1 (relative to the card's smaller dimension).
    *   `font` (string, default: `'bold 30px Figtree'`): A CSS font string that defines the typeface, weight, and size for the certificate name text displayed on the cards.
    *   `scrollSpeed` (number, default: `2`): A multiplier that adjusts the sensitivity of scrolling and dragging interactions for the gallery. Higher values mean faster scrolling.
    *   `scrollEase` (number, default: `0.05`): The easing factor applied to the scroll animation, controlling its smoothness. A value closer to 0 makes the animation slower and smoother.
    *   `cardWidth` (number, default: `1200`): The intended pixel width of the cards for scaling purposes. The actual rendered size will be proportional to this and the viewport.
    *   `cardHeight` (number, default: `350`): The intended pixel height of the cards for scaling purposes. The actual rendered size will be proportional to this and the viewport.
    *   `onCertificateClick` (function, optional): A callback function that is invoked when a user clicks on an individual certificate card. The `item` object corresponding to the clicked card is passed as an argument to this function.
*   **Returns**: `JSX.Element` - A `div` HTML element that serves as the container for the `ogl` WebGL canvas.
*   **Exceptions**: None explicitly handled. Potential WebGL errors would be reported by the `ogl` library.

---

### `ClickSpark.js`

A component for interactive click spark animations.

#### `ClickSpark({ sparkColor, sparkSize, sparkRadius, sparkCount, duration, easing, extraScale, children })`

*   **Description**: A React component that overlays an HTML Canvas to create a radial spark animation effect at the precise location of any mouse click within its children. It's designed to add a subtle visual flair to user interactions.
*   **Parameters**:
    *   `sparkColor` (string, default: `'#fff'`): The CSS color string for the animated sparks.
    *   `sparkSize` (number, default: `10`): The initial length of each individual spark line segment, in pixels.
    *   `sparkRadius` (number, default: `15`): The maximum radial distance in pixels that the sparks will travel from the click origin before disappearing.
    *   `sparkCount` (number, default: `8`): The number of individual spark lines generated for each click event.
    *   `duration` (number, default: `400`): The total animation duration for each spark, in milliseconds.
    *   `easing` (string, default: `'ease-out'`): The easing function to apply to the spark's outward movement. Accepted values are `'linear'`, `'ease-in'`, `'ease-out'`, or `'ease-in-out'`.
    *   `extraScale` (number, default: `1.0`): An additional scaling factor applied to the `sparkRadius`, allowing for more pronounced spark spread.
    *   `children` (React.ReactNode): The React elements or components that will be rendered inside the `ClickSpark` component. Clicks on these children will trigger the spark effect without being blocked.
*   **Returns**: `JSX.Element` - A `div` element that acts as a container, holding an absolutely positioned canvas for the spark animations and rendering the provided `children` content underneath.
*   **Exceptions**: None explicitly handled.

---

### `Lanyard.js`

A 3D lanyard component (not currently integrated into `App.js`).

#### `Lanyard({ position, gravity, fov, transparent })`

*   **Description**: Renders an interactive 3D lanyard with an attached ID card. It utilizes `@react-three/fiber` for Three.js integration, `@react-three/rapier` for realistic physics, and `@react-three/drei` for additional 3D helpers and HTML overlays.
*   **Parameters**:
    *   `position` (array<number>, default: `[-7, 7, 30]`): The initial `[x, y, z]` coordinates for the camera's position in the 3D scene.
    *   `gravity` (array<number>, default: `[0, -40, 0]`): The `[x, y, z]` vector representing the gravity applied within the Rapier physics world.
    *   `fov` (number, default: `20`): The vertical field of view of the camera, in degrees.
    *   `transparent` (boolean, default: `true`): If `true`, the WebGL canvas background will be rendered as transparent, allowing underlying HTML content to show through.
*   **Returns**: `JSX.Element` - A `div` element that wraps the `@react-three/fiber` `Canvas` containing the 3D lanyard and card scene.
*   **Exceptions**: None explicitly handled. Assumes valid GLTF and texture paths.

---

### `Particles.js`

A component for rendering a dynamic particle background.

#### `Particles({ particleCount, particleSpread, speed, particleColors, moveParticlesOnHover, particleHoverFactor, alphaParticles, particleBaseSize, sizeRandomness, cameraDistance, disableRotation, className })`

*   **Description**: A React component that creates an animated particle background using WebGL (`ogl` library). Particles float and subtly react to mouse movement, providing a dynamic and customizable visual element.
*   **Parameters**:
    *   `particleCount` (number, default: `200`): The total number of individual particles to be rendered in the scene.
    *   `particleSpread` (number, default: `10`): Controls the spatial distribution of particles within the 3D volume. Higher values result in particles being more spread out.
    *   `speed` (number, default: `0.1`): A general multiplier for the speed of particle animations (e.g., movement and color shifts).
    *   `particleColors` (array<string>, optional): An array of hexadecimal color strings (e.g., `["#FFFFFF", "#00FF00"]`). Particles will randomly select a color from this palette. If not provided or empty, a default white color palette is used.
    *   `moveParticlesOnHover` (boolean, default: `false`): If `true`, the entire particle system will gently shift its position in response to the mouse cursor's movement.
    *   `particleHoverFactor` (number, default: `1`): A multiplier that controls the intensity of the particle system's reaction to mouse movement, if `moveParticlesOnHover` is `true`.
    *   `alphaParticles` (boolean, default: `false`): If `true`, particles are rendered with a soft, circular alpha gradient, making them appear more ethereal. If `false`, they are rendered as solid circles.
    *   `particleBaseSize` (number, default: `100`): The base pixel size of the particles when viewed head-on. The actual size will scale with their distance from the camera.
    *   `sizeRandomness` (number, default: `1`): Controls the random variation in the size of individual particles. A value of `1` allows for full random scaling up to the `particleBaseSize`.
    *   `cameraDistance` (number, default: `20`): The distance of the camera from the center of the particle system along the Z-axis. Affects the perceived scale and perspective of the particles.
    *   `disableRotation` (boolean, default: `false`): If `true`, the automatic, subtle rotational animation of the entire particle system is disabled.
    *   `className` (string, optional): Additional CSS class names to apply to the root `div` container of the particle canvas.
*   **Returns**: `JSX.Element` - A `div` element that contains the `ogl` WebGL canvas where the particles are rendered.
*   **Exceptions**: None explicitly handled. Potential WebGL errors would be reported by the `ogl` library.

---

### `ProfileCard.js`

An interactive 3D-effect profile card component.

#### `ProfileCardComponent({ avatarUrl, iconUrl, grainUrl, behindGradient, innerGradient, showBehindGradient, className, enableTilt, miniAvatarUrl, name, title, handle, status, contactText, showUserInfo, onContactClick })`

*   **Description**: A React component that renders a visually striking profile card with a 3D-like tilt and glowing effects on mouse hover. It displays core user information, including an avatar, name, title, social handle, and status, with a customizable contact button.
*   **Parameters**:
    *   `avatarUrl` (string, default: `"<Placeholder for avatar URL>"`): The URL or path to the main profile image displayed prominently on the card.
    *   `iconUrl` (string, default: `"<Placeholder for icon URL>"`): The URL or path to an icon image used as a mask or pattern within the card's "shine" holographic effect.
    *   `grainUrl` (string, default: `"<Placeholder for grain URL>"`): The URL or path to a subtle grain texture image, contributing to the card's background and shine effects.
    *   `behindGradient` (string, optional): A custom CSS `radial-gradient` string for the glowing effect rendered *behind* the main card. If `showBehindGradient` is `true` and this is `undefined`, a default gradient is used.
    *   `innerGradient` (string, optional): A custom CSS `linear-gradient` string used for the inner background of the card. If `undefined`, a default gradient is applied.
    *   `showBehindGradient` (boolean, default: `true`): A flag to enable or disable the glowing gradient effect rendered behind the card.
    *   `className` (string, default: `""`): Additional CSS class names to apply to the outermost wrapper `div` of the component.
    *   `enableTilt` (boolean, default: `true`): If `false`, disables the interactive 3D tilt effect and pointer-based animations on the card.
    *   `miniAvatarUrl` (string, optional): The URL or path to a smaller avatar image displayed within the user information bar. If `undefined`, `avatarUrl` is used as a fallback.
    *   `name` (string, default: `"Javi A. Torres"`): The full name of the individual to be displayed on the card.
    *   `title` (string, default: `"Software Engineer"`): The professional title or role displayed below the name.
    *   `handle` (string, default: `"javicodes"`): The social media handle or username displayed in the user information bar.
    *   `status` (string, default: `"Online"`): The current status (e.g., "Online", "Busy") displayed in the user information bar.
    *   `contactText` (string, default: `"Contact"`): The text displayed on the interactive contact button.
    *   `showUserInfo` (boolean, default: `true`): A flag to control the visibility of the entire user information bar at the bottom of the card.
    *   `onContactClick` (function, optional): A callback function invoked when the contact button is clicked.
*   **Returns**: `JSX.Element` - A memoized `div` element representing the interactive profile card.
*   **Exceptions**: The `img` tags include an `onError` handler that can modify their display and source if an image fails to load, providing a fallback mechanism.

---

### `ProjectCard3D.js`

An interactive 3D project card for display.

#### `ProjectCard3D({ project, onClick })`

*   **Description**: A React component that renders an individual project as an interactive card with a dynamic 3D-like hover effect. It displays a project screenshot, name, and its technology stack, and is designed to be clickable to reveal more details.
*   **Parameters**:
    *   `project` (object): An object containing the details of a single project. Expected properties:
        *   `name` (string): The title or name of the project.
        *   `description` (string, *not displayed directly but part of `project` object*): A description of the project.
        *   `tech` (array<string>): An array of technology names (strings) used in the project, which are rendered as logos.
        *   `link` (string, *not displayed directly but part of `project` object*): The URL to the project's repository or live demo.
        *   `screenshot` (string, optional): The URL or path to an image file serving as the project's visual representation on the card.
    *   `onClick` (function): A callback function that is invoked when the project card is clicked. This typically triggers a modal or navigates to a detailed project page.
*   **Returns**: `JSX.Element` - A `motion.div` component wrapping a Material-UI `Paper` component, styled as an interactive project card.
*   **Exceptions**: None explicitly handled within the component. Image loading errors for `project.screenshot` would be handled by the browser's default mechanisms.

---

### `ProjectModal.js`

A modal component to display detailed project information.

#### `ProjectModal({ project, isOpen, onClose })`

*   **Description**: A full-screen modal component that provides a comprehensive view of a selected project. It presents the project's name, description (with animated text), technology stack (with logos), and direct links to the project's live site and GitHub repository. It includes smooth entry animations and accessibility features.
*   **Parameters**:
    *   `project` (object): An object containing detailed information about the project to be displayed. Expected properties:
        *   `name` (string): The full name of the project.
        *   `description` (string): A detailed narrative describing the project.
        *   `tech` (array<string>): An array of technology names (strings) used in the project.
        *   `link` (string): The URL to the project's live demo or primary repository.
        *   `screenshot` (string, optional, *not used directly in modal but expected in project data*): Path to a project screenshot.
    *   `isOpen` (boolean): Controls the visibility of the modal. If `false`, the component renders `null`.
    *   `onClose` (function): A callback function invoked when the modal should be closed (e.g., by clicking the close button, pressing the `Escape` key, or clicking the semi-transparent backdrop).
*   **Returns**: `JSX.Element | null` - The interactive modal dialog if `isOpen` is `true` and `project` data is provided; otherwise, `null`.
*   **Exceptions**: None explicitly handled. Relies on `project` to be a well-formed object when `isOpen` is `true`.

---

### `ScrollProgressBar.js`

A component for displaying scroll progress.

#### `ScrollProgressBar()`

*   **Description**: A React component that displays a thin, animated progress bar fixed at the top of the browser viewport. Its width dynamically updates to reflect the user's vertical scroll position on the page, providing a visual indicator of reading progress.
*   **Parameters**: None.
*   **Returns**: `JSX.Element` - A `motion.div` element styled as a progress bar, positioned at the top of the screen.
*   **Exceptions**: None explicitly handled.

---

### `StarBorder.js`

A component for rendering animated, glowing borders.

#### `StarBorder({ as: Component, className, color, speed, thickness, children, ...rest })`

*   **Description**: A React component that wraps its children with an animated, glowing border effect. The border is created using moving radial gradients that simulate a dynamic "star" or energy flow along the edges. It is highly customizable in terms of color, animation speed, and border thickness.
*   **Parameters**:
    *   `as` (React.ElementType, default: `'div'`): The HTML tag name or React component type to be used as the root element of this component (e.g., `'div'`, `'section'`, `Box`).
    *   `className` (string, default: `""`): Additional CSS class names to apply to the root wrapper element for custom styling.
    *   `color` (string, default: `'#00e6fb'`): The CSS color value for the glowing border. This color is used to define the radial gradients that create the animation.
    *   `speed` (string, default: `'6s'`): A CSS time value (e.g., `'4s'`, `'8s'`) that determines the duration of one complete cycle of the border animation.
    *   `thickness` (number, default: `2`): The thickness of the border in pixels. This value also defines the padding around the `children` content.
    *   `children` (React.ReactNode): The React elements or components that will be rendered inside the animated border.
    *   `...rest` (object): Any other standard HTML attributes or React props that should be passed directly to the root element (`as` component).
*   **Returns**: `JSX.Element` - A wrapper component that contains the animated border elements and the `children` content.
*   **Exceptions**: None explicitly handled.

---

### `TechLogos.js`

A component to display technology logos.

#### `TechLogos({ techStack })`

*   **Description**: A React component that displays a horizontal list of technology logos. It dynamically renders SVG logos based on a provided `techStack` array and provides a styled fallback for technologies without a predefined logo. Each logo has interactive hover animations.
*   **Parameters**:
    *   `techStack` (array<string>): An array of strings, where each string represents the name of a technology (e.g., `"React"`, `"Python"`, `"Docker"`). The component attempts to match these names to predefined logo URLs.
*   **Returns**: `JSX.Element` - A Material-UI `Box` component containing animated `motion.div` elements. Each `motion.div` either renders an `img` tag with the technology's SVG logo or a fallback `Box` displaying the first letter of the technology name.
*   **Exceptions**: Handles cases where a logo URL is not found by rendering a styled initial, ensuring graceful degradation.

---

### `reportWebVitals.js`

A utility for measuring and reporting web performance.

#### `reportWebVitals(onPerfEntry)`

*   **Description**: A utility function that, when invoked with a callback, measures and reports essential Web Vitals performance metrics (such as First Contentful Paint, Largest Contentful Paint, Cumulative Layout Shift, First Input Delay, and Time to First Byte) for the web application. This function is typically used to send performance data to analytics services or log it during development.
*   **Parameters**:
    *   `onPerfEntry` (function): A callback function. If `onPerfEntry` is a function, it will be called for each collected Web Vital metric. The metric object (e.g., `CLSMetric`, `FIDMetric`) will be passed as an argument to this callback.
*   **Returns**: `void`.
*   **Exceptions**: None explicitly thrown. The function checks if `onPerfEntry` is a function before attempting to import `web-vitals` and call its measurement functions, preventing errors if no callback is provided.

## 🤝 Contributing Guidelines

We welcome contributions to the "my-portfolio" project! To ensure a smooth collaboration process, please adhere to the following guidelines.

### How to Contribute

1.  **Fork the repository**: Start by forking the `my-portfolio` repository to your GitHub account.
2.  **Clone your fork**: Clone your forked repository to your local machine.
    ```bash
    git clone https://github.com/<your-github-username>/my-portfolio.git
    cd my-portfolio
    ```
3.  **Create a new branch**: For each new feature or bug fix, create a new branch. Use descriptive names like `feature/add-new-skill` or `fix/project-link`.
    ```bash
    git checkout -b feature/your-feature-name
    ```
4.  **Make your changes**: Implement your feature or fix the bug.
5.  **Test your changes**: Ensure your changes do not introduce new bugs and that existing functionality remains intact. Run the test suite:
    ```bash
    npm test
    # or
    yarn test
    ```
6.  **Commit your changes**: Write clear, concise commit messages. Follow a conventional commit style if possible (e.g., `feat: add dark mode toggle`, `fix: correct project link`).
    ```bash
    git commit -m "feat: short description of your change"
    ```
7.  **Push to your fork**:
    ```bash
    git push origin feature/your-feature-name
    ```
8.  **Create a Pull Request (PR)**:
    *   Go to your forked repository on GitHub.
    *   Click on the "Compare & pull request" button.
    *   Provide a detailed description of your changes, including why they were made and any relevant screenshots or links.
    *   Ensure your branch is up-to-date with the `main` branch of the original repository.

### Code Style and Standards

This project follows the code style enforced by **ESLint** and **Prettier**, as configured by Create React App and potentially augmented by `eslint-config-react-app`.

*   **Automatic Formatting**: It is highly recommended to use a code editor with ESLint and Prettier integration. Many editors (like VS Code) can automatically format your code on save.
*   **Linting**: Before committing, ensure your code passes linting checks. You can manually run:
    ```bash
    npm run lint # (if a dedicated lint script exists, otherwise it runs with 'npm start' or build)
    ```
    Lint errors will typically be shown in your editor or during `npm start` / `npm run build`.

### Testing Requirements

*   **Unit Tests**: All new features and bug fixes should be accompanied by relevant unit tests.
    *   Tests are written using **Jest** and **@testing-library/react**.
    *   New components or complex logic should have dedicated test files (e.g., `ComponentName.test.js`).
*   **Coverage**: Aim for reasonable test coverage for new or modified code.
*   **Running Tests**: Always run tests before submitting a pull request to ensure everything is working as expected.
    ```bash
    npm test
    # or
    yarn test
    ```
*   **Custom Matchers**: The project utilizes `@testing-library/jest-dom` for custom matchers, allowing for more readable and semantic DOM assertions (e.g., `expect(element).toBeInTheDocument()`).