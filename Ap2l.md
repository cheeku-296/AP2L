# Design System Inspired by AP2L | AI

## Visual Theme & Atmosphere

## Mission
Create implementation-ready, token-driven UI guidance for AP2L that is optimized for consistency, accessibility, and fast delivery across e-commerce storefront.

## Brand
- Product/brand: AP2L
- URL: https://ap2l.vercel.app/
- Audience: online shoppers and consumers
- Product surface: e-commerce storefront

## Color Palette & Roles

### Primary
- **Canvas Background**: `lab(98.1434 -0.369519 -1.05966)`
- **Secondary Surface**: `lab(41.088 68.9966 -91.995)`

### Accent & Interactive
- **Primary Accent**: `#13111c`

### Text & Neutrals
- **Text Tier 1**: `lab(98.1434 -0.369519 -1.05966)`
- **Text Tier 2**: `lab(48.0876 -2.03595 -16.5814)`
- **Text Tier 3**: `#ffffff`
- **Text Tier 4**: `lab(7.78673 1.82345 -15.0537)`

## Typography Rules

### Hierarchy

| Role | Font | Size | Weight | Line Height |
|---|---|---|---|---|
| Hero Display (h1) | Urbanist | 48px | 500 | 52.8px |
| Hero Display (h3) | Urbanist | 48px | 800 | 48px |
| Section Heading (h2) | Urbanist | 36px | 500 | 45px |
| Section Heading (h3) | Urbanist | 30px | 700 | 36px |
| Section Heading (h2) | Urbanist | 30px | 500 | 37.5px |
| Card Title (h3) | Urbanist | 24px | 500 | 32px |
| Card Title (h3) | Urbanist | 24px | 700 | 32px |
| Card Title (h3) | Urbanist | 22px | 700 | 33px |
| Card Title (p) | Manrope | 20px | 400 | 32.5px |
| Body (p) | Manrope | 18px | 300 | 29.25px |
| Body (p) | Manrope | 18px | 500 | 29.25px |
| Body (h3) | Urbanist | 18px | 700 | 28px |
| Body (p) | Manrope | 18px | 400 | 29.25px |
| Body (p) | Urbanist | 18px | 700 | 28px |
| Body (h4) | Urbanist | 18px | 700 | 22.5px |

> [!NOTE]
> **AI Analysis Required**: Analyze the font scale, letter-spacing, and casing rules based on the visual evidence.

## Component Stylings

### Buttons

**Variant 1**
- Background: `oklab(0.999994 0.0000455678 0.0000200868 / 0.1)`, Text: `lab(98.1434 -0.369519 -1.05966)`, Radius: `12px`

**Variant 2**
- Background: `lab(41.088 68.9966 -91.995)`, Text: `#ffffff`, Radius: `3.35544e+07px`

**Variant 3**
- Background: `#ffffff`, Text: `lab(48.0876 -2.03595 -16.5814)`, Radius: `16px`

### Shape & Border Radius Scale
- **Radiuses in use**: `3.35544e+07px`, `12px`, `6px`, `16px`, `24px`, `20px`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Depth & Elevation

| Level | Treatment | Suggested Use |
|---|---|---|
| Level 0 | Flat canvas | Base background |
| Level 1 | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(109, 40, 217, 0.4) 0px 0px 40px 0px` | Popovers, dropdowns |
| Level 2 | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px` | Popovers, dropdowns |
| Level 3 | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px` | Popovers, dropdowns |
| Level 4 | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.379994 0.0760902 -0.172985 / 0.1) 0px 25px 50px -12px` | Popovers, dropdowns |

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Agent Prompt Guide

### Reference Tokens
- **Primary CTA**: `#13111c`
- **Canvas**: `lab(98.1434 -0.369519 -1.05966)`
- **Text**: `lab(98.1434 -0.369519 -1.05966)`


## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: links (36), buttons (12), lists (4), navigation (2).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
