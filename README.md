## Redsift Test App

Commands:

Run the app: `npm run dev`

Run the tests: `npm run test`

Run linting: `npm run lint`

Run TS check: `npm run typecheck`

### Technical decisions during the implementation:

I decided to split the different parts of the homepage into modular components, making them as reusable as possible. It is also clearer to read and to work with.

### If given more time I would:

- Do unit tests for each page and component
- Instead of using css modules, I would use a css-in-js library such as emotion
- Create a proper design system to use each individual component with atomic design in mind
- Create more media queries to implement a better responsive page for each specific device
- Use a form management library such as react-hook-forms
- Add a git hook so the linting and tests are automatically checked on commit
- Render the app on server side, to have a better SEO optimization
