# Task 3: Connect Landing Page Buttons and Chat Form to Google Sheets API

## Objective

Connect the existing landing page form and specified buttons to the following Google Apps Script API. IN Newlanding.html file

**API Endpoint:**

https://script.google.com/macros/s/AKfycbys4pVXEYNqqTybmRwsXkJY1MJvFpI6g14hci1NnjpOyAsmgMhrcNRwl8C4FPknQMcc/exec

An existing Google Sheets API integration and UUID mechanism are already implemented in the project.

**Important: Reuse the existing API integration, UUID generation/retrieval logic, and request structure. Do not create a new UUID system or duplicate API integration.**

## 1. Chat Form Submission — `sb-chat-form`

When the user submits the form with ID:

`sb-chat-form`

Send a request to the API with these values:

| Key | Value |
|---|---|
| `msg` | User's submitted message |
| `buttonClicked` | `askanything` |
| `uuid` | Existing user's UUID |

Requirements:
- Capture the actual message entered by the user.
- Send the message using the `msg` key.
- Send `buttonClicked` with the exact value `askanything`.
- Always include UUID.
- Prevent accidental duplicate submissions.
- Preserve the existing form validation and user experience.

## 2. Book Demo Button — `sb-demo-btn`

When the user clicks the button with ID:

`sb-demo-btn`

Send a request to the same API.

| Key | Value |
|---|---|
| `buttonClicked` | `book Demo` |
| `uuid` | Existing user's UUID |

Requirements:
- Trigger the API request on button click.
- Use the exact value `book Demo`, including capitalization and spacing.
- Always include UUID.

## 3. Start 30-Day Parlour Trial Button

Find the existing button containing this text:

`Start 30-Day Parlour Trial`

When the user clicks it, send a request to the same API.

| Key | Value |
|---|---|
| `buttonClicked` | `banner-button` |
| `uuid` | Existing user's UUID |

Requirements:
- Identify the correct existing button.
- Trigger the API request on click.
- Use the exact value `banner-button`.
- Always include UUID.

## 4. UUID Handling — Very Important

The existing project already has a UUID implementation.

Reuse the same UUID source and logic.

Rules:

1. Retrieve the UUID using the existing implementation.
2. Include UUID in every API request.
3. If UUID is unset, null, undefined, or an empty string, send:

`uuid: "unknown"`

4. Never send an undefined or null UUID.
5. Do not generate a new UUID just because the existing UUID is temporarily unavailable.
6. Do not break the existing UUID functionality.

## 5. API Integration Requirements

- Use the existing API request method and payload structure wherever possible.
- Use the exact API endpoint provided above.
- Ensure all three interactions send requests to the same API.
- Preserve existing integrations.
- Handle API failures gracefully.
- Do not block normal button functionality if the API request fails.
- Avoid duplicate event listeners.
- Prevent duplicate requests from repeated submissions or clicks where appropriate.
- Do not expose or log unnecessary user data.

## 6. Important Restrictions

- Do not redesign anything.
- Do not change existing HTML styling.
- Do not change button appearance.
- Do not change button text.
- Do not break existing form functionality.
- Do not introduce unnecessary libraries.
- Do not create another Google Sheets integration.
- Do not modify the Google Apps Script backend.
- Reuse existing UUID logic.

## 7. Testing Checklist

Test all three interactions:

- [ ] Submit `sb-chat-form` and verify `msg`, `buttonClicked: askanything`, and UUID.
- [ ] Click `sb-demo-btn` and verify `buttonClicked: book Demo` and UUID.
- [ ] Click Start 30-Day Parlour Trial and verify `buttonClicked: banner-button` and UUID.
- [ ] Test with UUID available.
- [ ] Test with UUID unset and verify `uuid: unknown`.
- [ ] Verify all requests reach the same API endpoint.
- [ ] Verify existing website functionality remains intact.

## Final Expected Payloads

**Chat form:**

```json
{
  "msg": "User's message",
  "buttonClicked": "askanything",
  "uuid": "existing-uuid-or-unknown"
}
```

**Book Demo:**

```json
{
  "buttonClicked": "book Demo",
  "uuid": "existing-uuid-or-unknown"
}
```

**Banner button:**

```json
{
  "buttonClicked": "banner-button",
  "uuid": "existing-uuid-or-unknown"
}
```

**Final instruction:** Implement these three API connections carefully using the existing project architecture. Verify the actual network requests and confirm that the correct payload reaches the API. Do not claim successful integration without testing it.