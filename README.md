# Login Form — CSCE 477 HW2-B

A simple login form that demonstrates **both client-side and server-side
validation**, with passwords stored as a **bcrypt hash** (never in plaintext).
Built for the OWASP Juice Shop / OWASP Top 10 assignment.

## What it does

- Serves a login page with email and password fields.
- **Client-side validation** (in the browser) for instant feedback: rejects
  empty fields, requires the email to contain `@`, and requires the password
  to be at least 8 characters.
- **Server-side validation** (the real gate): the Express server re-runs the
  same checks on every request, because client-side checks can be bypassed by
  anyone who edits the page or sends a request directly.
- **Secure password handling:** the valid password is stored only as a bcrypt
  hash. The server verifies a login with `bcrypt.compare()`, so the plaintext
  password never lives anywhere in the code.

## Tech stack

- Node.js + Express (backend / API)
- bcryptjs (password hashing)
- Plain HTML + JavaScript (frontend)

## Project structure

```
login/
  public/
    form.html      the login page (HTML + client-side validation)
  server.js        Express server + /login endpoint (server-side validation)
  package.json
  README.md
```

## How to run

1. Install dependencies:
   ```
   npm install
   ```
2. Start the server:
   ```
   node server.js
   ```
   You should see: `Server on http://localhost:3001`
3. Open the form in your browser:
   ```
   http://localhost:3001/form.html
   ```

## Test credentials

- **Email:** `admin@juice.com`
- **Password:** `password123`

A correct login shows a success message; anything else is rejected by the
server.

## Security notes

- Client-side validation is for user convenience only — it is **not** a
  security control, since the user controls the browser.
- Server-side validation is the actual enforcement point.
- Passwords are hashed with bcrypt (one-way, salted, and deliberately slow),
  so even if the stored hash were exposed, the real password would not be
  recoverable.
