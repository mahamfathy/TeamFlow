# TeamFlow Dashboard

TeamFlow is a responsive Angular-based team management dashboard that allows you to display, filter, and analyze team members by role and status. Built with Angular 17, Angular Material, and TailwindCSS, this project follows best practices for scalability, responsiveness, and accessibility.

## ⚙️ Setup Instructions

1. **Clone the repository**
   `git clone https://github.com/your-username/teamflow-dashboard.git`
   `cd teamflow-dashboard`

2. **Install dependencies**
   `npm install`

3. **Run development server**
   Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## 📦 Tech Stack

- **Framework:** Angular 17
- **UI Library:** Angular Material
- **Charts:** Chart.js, ng2-charts
- **CSS Tools:** Tailwind CSS
- **Testing:** Jasmine, Karma, Cypress
- **RxJS**, **TWriter.js**

## 📁 Architecture Overview

- Angular 17 – Framework used for building the application Angular - - Material – For UI components (progress-bar, form fields, etc.)

#### Component-Based Structure:

- DashboardComponent: Displays team charts.
- TeamComponent: List and filter users by role.
- SidebarComponent: Layout and navigation.
- Routing: Implemented for navigation between pages.
- shared: Shared module and components used across the app.
- shared.module.ts: Declares and exports shared resources.
- interfaces: Interface for team member data.
- services: Service to fetch and manage team data.

## 📌 Assumptions Made

- The team data is assumed to be coming from a static JSON file for demo purposes.
- Status values (e.g., "Active", "Inactive") are predefined and limited.
- Performance indicator is simplified as a percentage bar or color tag based on mock logic.
- The layout adjusts between grid and list views depending on screen size, assuming Angular Material responsiveness is used.

## 🧠 Most Challenging Part

The most challenging part was implementing route animations, as it was my first time working with them in Angular. Understanding how to apply smooth transitions between pages while keeping component states intact required experimentation and research. One specific difficulty I faced was related to ChangeDetectorRef (CDR) and how Angular handles component updates during animations. This caused unexpected behavior until I identified the issue and learned how to manage CDR properly.

## 🤖 AI Tool Usage

Tools Used:
ChatGPT (OpenAI): Extensively used for learning and implementing route animations.

It also helped me identify and solve a problem related to ChangeDetectorRef (CDR), which was causing inconsistent UI updates during animations.

Adjustments Made:
Followed AI suggestions for the animation setup but simplified the structure to fit my component logic.

## 🧪 Testing

### Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### End-to-End Tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## ♿ Accessibility Features

- Semantic HTML for screen readers.
- `aria-label` attributes added to key elements.
- Full keyboard navigation support.
- Focus indication and accessible color contrast.

## 📱 Responsive Design

- Sidebar collapses for small screens.
- Scroll is disabled when sidebar is open on mobile.
- `cursor-pointer` and hover transitions for clickable elements.

## 🚀 Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## 👤 Developed By

Maha Fathy – Frontend Developer  
📧 maha@example.com  
🌍 Egypt

---

## 📃 License

This project is licensed under the MIT License.
