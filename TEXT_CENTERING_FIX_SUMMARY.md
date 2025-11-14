# Text Centering Fix Summary

## Root Cause Identified

The text centering issue was caused by **CSS specificity conflicts** in Tailwind CSS v4. The problem occurred because:

1. **Global CSS Override**: The `globals.css` file had a rule for all headings (`h1, h2, h3, h4, h5, h6`) that set `font-family` and `font-weight` but NOT `text-align`. This caused headings to default to `text-align: left` from the browser's default stylesheet.

2. **Tailwind v4 Behavior**: In Tailwind CSS v4, the way CSS cascade and specificity work has changed. The `text-center` class on parent containers was not being inherited by child text elements as expected.

3. **Incorrect Class Placement**: The `text-center` class was being applied to container divs rather than directly on the text elements that needed centering.

## The Solution Applied

### Principle: Apply text-align directly to text elements, not just containers

Instead of relying on:
```jsx
<div className="text-center">
  <h2 className="...">Text</h2>
</div>
```

We now use:
```jsx
<div>
  <h2 className="... text-center">Text</h2>
</div>
```

## Files Modified

### 1. `/components/sections/About.tsx`
**Lines changed: 18-27, 30-44, 71-84**

- Removed `text-center` from container divs
- Added `text-center` directly to:
  - `<h2>` tag (line 24)
  - Both `<p>` tags (lines 36, 39)
  - Personal section `<p>` tags (lines 77, 80)

### 2. `/components/sections/Contact.tsx`
**Lines changed: 18-31**

- Removed `text-center` from container div
- Added `text-center` directly to:
  - `<h2>` tag (line 24)
  - `<p>` tag (line 29)

### 3. `/components/sections/Portfolio.tsx`
**Lines changed: 92-105**

- Removed `text-center` from container div
- Added `text-center` directly to:
  - `<h2>` tag (line 99)
  - `<p>` tag (line 102)

### 4. `/app/globals.css`
**Line 98**

- Added comment to clarify that text-align should not be set globally on headings
- This ensures utility classes can properly control text alignment

## Why This Works

1. **Direct Application**: By applying `text-center` directly to text elements, we ensure the style has the correct specificity to override browser defaults.

2. **No Inheritance Issues**: We don't rely on CSS inheritance from parent containers, which can be unreliable with certain element types.

3. **Tailwind v4 Compatible**: This approach works correctly with Tailwind CSS v4's new architecture and specificity rules.

## Testing

The fix has been applied and should now work correctly. All text in the About, Contact, and Portfolio sections should be properly centered.

To verify:
1. Check the About section - heading and paragraphs should be centered
2. Check the Contact section - heading and subheading should be centered
3. Check the Portfolio section - "Featured Work" heading and description should be centered

## Best Practices Going Forward

When using Tailwind CSS v4:
1. Apply text alignment classes directly to text elements
2. Don't rely on inheritance from parent containers for text properties
3. Be aware that global CSS rules can interfere with utility classes
4. Always check specificity when debugging styling issues