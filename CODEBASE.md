# Project Structure

## Authentication
- Route group `(auth)` with shared layout
- Login and register pages using shared `AuthForm` component
- Social authentication options (Google, Apple)

## Dashboard
- Route group `(dashboard)` with shared layout including sidebar and header
- Reusable components:
  - `PageHeader`: Consistent page headers
  - `Section`: Content sections with optional card wrapper
  - `CardGrid`: Responsive grid layouts
  - `SkeletonCard/List`: Loading states

## Components
- Using shadcn/ui components
- Custom sidebar implementation
- Responsive layouts with Tailwind CSS

## Features
- Authentication flows
- Dashboard navigation
- Workspace switching
- Settings page (WIP)

## File Structure 
app/
├── (auth)/
│ ├── layout.tsx # Auth pages layout
│ ├── login/
│ │ └── page.tsx # Login page
│ └── register/
│ └── page.tsx # Register page
├── (dashboard)/
│ ├── layout.tsx # Dashboard layout with sidebar
│ ├── dashboard/
│ │ └── page.tsx # Main dashboard
│ └── settings/
│ └── page.tsx # Settings page
└── globals.css # Global styles
components/
├── auth/
│ └── auth-form.tsx # Shared auth form
├── dashboard/
│ ├── page-header.tsx # Page headers
│ ├── section.tsx # Content sections
│ ├── card-grid.tsx # Grid layouts
│ └── skeleton-card.tsx # Loading states
└── app-sidebar.tsx # Main sidebar component

We have all the shadcn components in the components/ui folder.
(accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, calendar, card, carousel, chart, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, form, hover-card, input, input-otp, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, switch, table, tabs, textarea, toast, toggle, toggle-group, tooltip)
