Task 06 — Make newLanding a reusable, JSON-driven SaaS landing page
Objective
Update the existing newLanding HTML page so that its hardcoded, page-specific content is driven by JSON placeholders.

For every replaceable static content value, replace the hardcoded value with this exact placeholder format:
{**key_name**}
Create a newlanding.json file containing every key used in the HTML and a sample value for each key.

The page must be reusable for any SaaS product in any industry. The key names must describe the content's role, not the current product, niche, audience, or industry.
Important: navigation menus must not change
Do not modify the existing desktop navigation or mobile navigation in any way.

Keep the following exactly as they are in the source HTML:
- Desktop menu labels and links (Home, Products, Contact).
- Mobile menu labels and links (Home, Products, Contact).
- Menu structure, classes, IDs, responsive behavior, and toggle behavior.
Do not create JSON keys for menu labels or menu URLs. They are intentionally static.
Generic key naming rules
Use neutral, reusable names such as:
- page_title
- hero_headline
- hero_description
- hero_primary_cta
- feature_1_title
- feature_1_description
- faq_1_question
- faq_1_answer
- final_cta_heading
Never use industry- or product-specific terms in key names. For example, do not use keys containing words such as dairy, cow, parlour, vet, construction, clinic, real_estate, or a product/company name.

The same keys should work if the next page is for a CRM, accounting tool, AI assistant, healthcare platform, project management app, HR tool, marketing platform, or any other SaaS.
What must become placeholders
Replace page-specific, user-facing static copy throughout newLanding, including:
1. HTML page title.
2. Hero badge, headline, highlighted headline, description, and primary CTA label.
3. Hero trust points.
4. Product showcase tab labels.
5. Dashboard mockup labels and sample account/status text.
6. Problem-versus-solution section eyebrow, heading, card labels, card headings, descriptions, point titles, and point descriptions.
7. Features section eyebrow, heading, and description.
8. Every feature card's category, title, and description.
9. FAQ section eyebrow and heading.
10. Every FAQ question and answer. FAQ copy is especially important: do not leave any current product, industry, compliance, hardware, or audience-specific wording hardcoded. The next SaaS may have completely different FAQs.
11. Final CTA heading, description, and button label.
12. Final CTA benefit labels.
13. Floating chat input placeholder and accessible submit label.
14. Floating demo button label.
15. Product-specific CTA destination URL.
16. Product-specific structured data values in JSON-LD, such as product name, product URL, description, image URL, and publisher details where applicable.
If there is other visible page-specific copy not listed above, make it a generic placeholder too. Do not leave current product-specific wording hardcoded merely because it is inside a less obvious element.
What must remain unchanged
Preserve the existing page design and functionality:
- HTML section structure and order.
- CSS classes, styling, colors, spacing, and responsive layout.
- Existing JavaScript behavior and event hooks.
- Existing IDs and data attributes used by JavaScript.
- SVG icons and decorative shapes.
- Existing navigation menus, as described above.
- Shared site assets and script/style imports unless a path is explicitly product-specific content.
- Dashboard screenshot/image asset paths can remain as existing assets; do not invent new asset paths.
Do not redesign the page, rewrite its layout, remove sections, or change the navigation.
Placeholder implementation requirements
- Use the exact syntax {**key_name**} including both pairs of asterisks and braces.
- Use clear, consistent snake_case keys.
- Each key must be unique.
- Reuse a key only when the exact same content value has the same semantic purpose. Otherwise use separate keys.
- Do not put HTML tags inside JSON values. JSON values should be plain text.
- Keep HTML entities and punctuation valid when inserting values.
- For URLs and attribute values, use placeholders in the relevant attribute value, not as visible text.
- Keep the JSON valid UTF-8 JSON.
- Every placeholder present in the HTML must have a matching property in newlanding.json.
- Every property in newlanding.json should be used by the HTML, unless it is explicitly documented as an optional supported field.
- Do not leave old product name, industry terms, or niche-specific copy in the HTML's user-facing text or structured data.
- Do not convert navigation menu labels or links into placeholders.
newlanding.json requirements
Create newlanding.json in the same directory as the newLanding page.

It must contain:
- All keys referenced by the HTML placeholders.
- A sample value for every key.
- Valid JSON syntax.
- Generic key names only.
Use the current page's existing content as the initial sample values where appropriate, but keep the keys generic. The sample values are only example content and will be replaced for future SaaS landing pages.

Example:
{
  "page_title": "Example Product | Simplify Your Workflow",
  "hero_headline": "Run Your Business With Less Effort",
  "hero_description": "A simple platform to manage your work in one place.",
  "feature_1_title": "Automate Repetitive Work",
  "feature_1_description": "Save time by bringing everyday tasks into one workflow.",
  "faq_1_question": "Can I use this with my existing tools?",
  "faq_1_answer": "Yes. The platform is designed to fit into your existing workflow."
}
The example above illustrates naming only. Include all actual keys needed by the complete page, not just these example fields.
Final deliverables
1. Updated newLanding HTML page with generic {**key_name**} placeholders.
2. newlanding.json with all placeholder keys and sample values.
Validation checklist
Before finishing, verify all of the following:
- [ ] Desktop and mobile navigation are byte-for-byte or functionally unchanged.
- [ ] All page-specific visible copy is replaced with placeholders.
- [ ] All four FAQ question/answer pairs are dynamic.
- [ ] No key name depends on a particular SaaS, product, niche, or industry.
- [ ] Every HTML placeholder has a matching JSON key.
- [ ] Every JSON key is used by the HTML (except documented optional keys).
- [ ] newlanding.json parses as valid JSON.
- [ ] Existing design, CSS, JavaScript, IDs, and interactions are preserved.
- [ ] No current product-specific wording remains hardcoded in the page's visible copy or product structured data.