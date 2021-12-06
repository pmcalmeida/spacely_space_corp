## Redsift Test App

Commands:

Run the app: `npm run dev`

Run the tests: `npm run test`

Run linting: `npm run lint`

Run TS check: `npm run typecheck`

### Technical decisions during the implementation:

- I decided to split the different parts of the homepage into modular components, making them as reusable as possible. It is also clearer to read and to work with.
- The sticky header could be made position sticky or with grid layout, but to have the sticky footer as well, it was easier and faster to just create a flex layout
- Instead of iterating the cards from a data array, I decided to just copy paste each component, since these are not dynamic it was just faster to do.

### If given more time I would:

- Do unit tests for each page and component
- Instead of using css modules, I would use a css-in-js library such as emotion
- Use React Transition Group for animations instead of css animations
- Create a proper design system to use each individual component with atomic design in mind
- Create more media queries to implement a better responsive page for each specific device
- Use a form management library such as react-hook-forms
- Add a git hook so the linting and tests are automatically checked on commit
- Render the app on server side, to have a better SEO optimization and faster load on the client
- Get the cards data from an API (either reading from a JSON file or local mongo DB database)
