Weather Widget Web Application (SPA)
Required Stack:
- React
- React Router
- TypeScript
- Zustand
- React Query
User Flow:
1. A user signs up for the application by entering an email (no backend integration required,
client-side validation only).
2. After signing up, the user is redirected to the home page, which consists of:
- An input field in the center to enter a city.
- An avatar icon in the top right corner displaying the email entered upon signup.
3. The user should be able to enter the name of any EU country&#39;s capital city in English.
4. Upon submitting a city, a mock request should be made to simulate receiving weather results
for the current and the next day.
4.1 The forecast for each day should include:
- Date
- Random mocked morning, afternoon, evening, and night forecasts (if, for example, it is
currently afternoon, there&#39;s no need to show the morning forecast).

npm run dev 
Runs the app in the development mode.
Open http://localhost:5173/ to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.
