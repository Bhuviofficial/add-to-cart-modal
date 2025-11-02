# add-to-cart-modal

A small React component/library demonstrating an accessible, responsive Add-to-Cart modal for e-commerce flows. Includes example product integration, cart state management, styles, and tests.

## Table of contents
- Project overview
- Features
- Prerequisites
- Installation
- Available scripts
- Project structure
- Key components & API
- Styling & theming
- Accessibility
- Testing
- Deployment / Build
- Contributing
- Troubleshooting
- License

## Project overview
This project implements an Add-to-Cart modal used to confirm item additions to a shopping cart. It is framework-agnostic within React (hooks + context), easy to drop into existing apps, and demonstrates best practices for modal behavior, focus management, and responsive UI.

## Features
- Add-to-Cart modal component with product summary
- Cart state management via React Context (or simple store)
- Accessible: ARIA attributes, focus trap, keyboard support (Esc, Tab)
- Responsive layout and animations
- Unit tests with React Testing Library + Jest
- Example product card demonstrating integration
- Configurable behavior: quantity, actions (continue shopping / view cart)

## Prerequisites
- Node.js >= 16
- npm >= 8 or Yarn >= 1.22
- A modern browser for development

## Installation
1. Clone repository:
    ```bash
    git clone <repo-url> add-to-cart-modal
    cd add-to-cart-modal
    ```
2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

## Available scripts
- npm start / yarn start — Run development server (create-react-app or Vite)
- npm run build — Create production build
- npm test — Run tests (Jest + React Testing Library)
- npm run lint — Run linter (ESLint)
- npm run format — Run formatter (Prettier)

Adjust scripts to match your chosen build tool (CRA, Vite, Next.js).

## Project structure
Example structure:
```
/src
  /components
     AddToCartModal.jsx
     ProductCard.jsx
     ModalBackdrop.jsx
  /context
     CartProvider.jsx
     useCart.js
  /hooks
     useFocusTrap.js
  /styles
     modal.css
  /tests
     AddToCartModal.test.jsx
  App.jsx
  index.jsx
README.md
```

## Key components & API

- AddToCartModal
  - Props:
     - isOpen: boolean — controls visibility
     - product: { id, name, price, image, variant? } — product info to show
     - quantity: number — initial selected quantity
     - onClose: () => void — close handler
     - onConfirm: ({ product, quantity }) => void — confirm action (adds to cart)
  - Behavior:
     - Renders product summary, quantity selector, confirm and cancel buttons.
     - Traps focus when open, returns focus to trigger on close.
     - Dismissable via Esc and close button.

- ProductCard
  - Renders product info and triggers modal open.
  - Example usage:
     ```jsx
     const [isOpen, setOpen] = useState(false);
     <ProductCard product={p} onAdd={() => setOpen(true)} />
     <AddToCartModal
        isOpen={isOpen}
        product={p}
        quantity={1}
        onClose={() => setOpen(false)}
        onConfirm={({product, quantity}) => { addToCart(product, quantity); setOpen(false); }}
     />
     ```

- CartProvider / useCart
  - Exposes: cart items, addItem, removeItem, clearCart, getTotal.
  - Implementation example uses reducer + localStorage persistence.

## Styling & theming
- Base CSS provided in /src/styles/modal.css
- Options for styling:
  - CSS Modules (recommended for component isolation)
  - Tailwind CSS (if using utility-first)
  - styled-components or Emotion for CSS-in-JS
- Provide custom CSS variables for colors, spacing, and animation timing to enable theme overrides.

## Accessibility
- Modal uses role="dialog" and aria-modal="true".
- Has aria-labelledby pointing to the modal title and aria-describedby for summary text.
- Focus trap implemented; initial focus goes to the primary action.
- Keyboard support:
  - Esc closes the modal.
  - Tab cycles focus within modal.
- Screen-reader friendly confirmations for actions (toast or aria-live region).

## Testing
- Unit tests with Jest + React Testing Library:
  - Verify rendering with product data
  - Ensure focus trap and keyboard events work
  - Confirm onConfirm is called with correct payload
- Example test:
  ```jsx
  test('calls onConfirm with product and quantity', async () => {
     const onConfirm = jest.fn();
     render(<AddToCartModal isOpen product={p} quantity={2} onClose={()=>{}} onConfirm={onConfirm} />);
     userEvent.click(screen.getByText(/confirm/i));
     expect(onConfirm).toHaveBeenCalledWith({ product: p, quantity: 2 });
  });
  ```

## Deployment / Build
- Build with:
  ```bash
  npm run build
  ```
- Deploy build output to static hosting (Netlify, Vercel, GitHub Pages) or integrate component into your app bundle.

## Contributing
- Fork the repo, create a feature branch, open a pull request.
- Follow established code style (ESLint + Prettier). Run tests before submitting.
- Add unit tests for new behavior.

## Troubleshooting
- Modal not focusing: ensure the trigger element is valid and the focus trap hook is mounted only when open.
- Styles not applied: check CSS import path and bundler config.
- LocalStorage persistence failing: inspect JSON parse errors and storage quotas.

## License
MIT — adjust as required.

If you need a runnable example (Vite or CRA) or want the modal converted to TypeScript, request it and a minimal example will be generated.