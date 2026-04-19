Request → Middleware 1 → Middleware 2 →  Middleware 3 → Route → Response

Key Concepts (VERY IMPORTANT)
🔥 1. next() is everything
Moves control to next middleware
Without it → request gets stuck
🔥 2. res.send() ends request
No further middleware runs
🔥 3. Order matters
app.use(A);
app.use(B);
app.use(C);

👉 Always runs in this order

visual flow
Incoming Request
   ↓
[Middleware 1]
   ↓
[Middleware 2]
   ↓
[Middleware 3]
   ↓
[Route Match]
   ↓
Response Sent
