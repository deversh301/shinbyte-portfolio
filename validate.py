import json
import re

# Read HTML
with open('products/newlanding.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Read JSON
with open('products/newlanding.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print("=== VALIDATION CHECK ===")

# 1. Check JSON is valid (already done by opening)
print("[OK] JSON is valid")

# 2. Find all placeholders in HTML
pattern = r'\{\*\*([^}]+)\*\*\}'
matches = re.findall(pattern, html)
html_keys = set(matches)
print(f"\nFound {len(html_keys)} unique placeholders in HTML")

# 3. Check all HTML placeholders have JSON keys
missing_from_json = []
for key in html_keys:
    if key not in data:
        missing_from_json.append(key)

if missing_from_json:
    print(f"[ERROR] {len(missing_from_json)} HTML placeholders missing from JSON:")
    for key in sorted(missing_from_json):
        print(f"  - {key}")
else:
    print(f"[OK] All HTML placeholders have JSON keys")

# 4. Check all JSON keys are used in HTML
unused_json_keys = []
for key in data.keys():
    if key not in html_keys:
        unused_json_keys.append(key)

if unused_json_keys:
    print(f"\n[WARNING] {len(unused_json_keys)} JSON keys not used in HTML:")
    for key in sorted(unused_json_keys):
        print(f"  - {key} (sample value: '{data[key][:50]}...')")
else:
    print(f"\n[OK] All JSON keys are used in HTML")

# 5. Check for remaining industry-specific terms in HTML
industry_terms = ['dairy', 'parlour', 'herd', 'cow', 'mastitis', 'tractor', 'BCMS', 'SCC', 'conductivity', 
                  'milking', 'veterinary', 'vet', 'udder', 'steel', 'concrete', '4G', 'DeLaval', 
                  'Fullwood', 'BouMatic', 'GEA', 'Lely', 'herringbone', 'rotary', 'antibiotic', 
                  'medicine', 'batch', 'whiteboard', 'sponge', 'hose', 'marker', 'tanker', 'penalty']

found_terms = []
for term in industry_terms:
    if re.search(term, html, re.IGNORECASE):
        # Check if it's in a placeholder (which is OK)
        if not re.search(f'{{.*{term}.*}}', html, re.IGNORECASE):
            found_terms.append(term)

if found_terms:
    print(f"\n[WARNING] Found {len(found_terms)} industry-specific terms in HTML (not in placeholders):")
    for term in found_terms:
        # Show context
        lines = html.split('\n')
        for i, line in enumerate(lines, 1):
            if re.search(term, line, re.IGNORECASE) and not re.search(f'{{.*{term}.*}}', line, re.IGNORECASE):
                print(f"  Line {i}: {line.strip()[:100]}...")
else:
    print(f"\n[OK] No industry-specific terms found in HTML (outside placeholders)")

# 6. Check navigation menus unchanged
desktop_nav = """<nav aria-label="Main Navigation" class="hidden md:flex items-center gap-8 ml-10">
                        <a class="text-sm font-medium text-slate-700 hover:text-slate-950 transition py-2" href="/index.html">Home
                        </a
            >
                        <a class="text-sm font-medium text-slate-700 hover:text-slate-950 transition py-2" href="/products.html">Products
                        </a
            >
                        <a class="text-sm font-medium text-slate-700 hover:text-slate-950 transition py-2" href="/contact.html">Contact
                        </a
            >
                    </nav>"""

mobile_nav = """<div class="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg p-4 hidden" id="mobile-menu">
                        <div class="flex flex-col gap-2">
                            <a class="text-sm font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition py-3 px-4 rounded-lg" href="/index.html">Home
                            </a
              >
                            <a class="text-sm font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition py-3 px-4 rounded-lg" href="/products.html">Products
                            </a
              >
                            <a class="text-sm font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition py-3 px-4 rounded-lg" href="/contact.html">Contact
                            </a
              >
                        </div>
                    </div>"""

if desktop_nav in html:
    print("\n[OK] Desktop navigation unchanged")
else:
    print("\n[ERROR] Desktop navigation has been modified")

if mobile_nav in html:
    print("[OK] Mobile navigation unchanged")
else:
    print("[ERROR] Mobile navigation has been modified")

print("\n=== VALIDATION COMPLETE ===")