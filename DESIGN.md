# Design Specification (DESIGN.md) - Project Retro-SciFi Medical HUD

This document outlines the strict UI tokens, typography, grid systems, and components inspired by the vintage tactical medical dashboard to ensure high-fidelity styling across the project.

---

## 1. Overview / Brand & Style
*   **Design Persona:** Retro-Futuristic, Top-Secret Document, Clinical, and Data-Dense.
*   **Theme Concept:** 1940s-1980s classified military research meets futuristic cybernetic enhancement.
*   **Key Aesthetics:** Monochromatic grayscales, high-density telemetry grids, distressed vintage borders, censored/redacted text blocks, and anatomical medical scans.

---

## 2. Colors & Dark Mode

### 2.1 Theme Mode
*   **Default:** Dark Monochromatic CRT Style (Slate/Ink theme).

### 2.2 Functional Palette (Grayscale & Accent)
*   **Primary (Text & High Impact UI):** `#E2E8F0` (Tailwind `slate-200`) - Used for primary metrics, barcodes, and dynamic values.
*   **Secondary (Labels & Static Text):** `#94A3B8` (Tailwind `slate-400`) - Used for form descriptions, unit indicators (e.g., "0.5 Amps"), and fine details.
*   **Accent / Warning:** `#F87171` (Tailwind `red-400`) - Used sparingly for critical alerts, "TOP SECRET" classifications, or error banners.
*   **Muted Overlay:** `#475569` (Tailwind `slate-600`) - Used for censored/redacted text bars.

### 2.3 Canvas & Structure
*   **Base Background:** `#1E293B` (Tailwind `slate-800`) or simulated paper-gray `#F1F5F9` depending on output filter mode.
*   **Surface Cards:** `#0F172A` (Tailwind `slate-950`) - Pure tactical darkness for chart containers.
*   **Borders & Grids:** `#334155` (Tailwind `slate-700`) - Thin, low-opacity lines bounding the grid compartments.

---

## 3. Typography & Technical Printing

### 3.1 Font Families
*   **Primary Monospace (Interface & Data Tables):** Courier New, SF Mono, JetBrains Mono, monospace. (Simulates typewriter ink text).
*   **Sans-Serif Bold (Headers & Labels):** Impact, Arial Black, or Inter Bold. (For heavy structural headings like `T4`, `B3`).

### 3.2 Typography Scale
*   **Classification ID (T4 / B3):** `2.5rem (40px)` / Heavy Bold / Tracking: Tight.
*   **Section Banner (ELECTRIC NEUROLOGY IMPULSE):** `1.5rem (24px)` / Uppercase / Semi-Bold / Tracking: Wide.
*   **Data Labels (Name, Age, Sex):** `1rem (16px)` / Regular / Accompanied by dot-leaders (`...`).
*   **Fine Telemetry / Small Sub-text:** `0.75rem (12px)` / Regular / Low Contrast (Used for vertical text on axes and minor numeric coordinates).

---

## 4. Grid System & Compartmentalization

### 4.1 Layout Segmentation
*   **Macro Layout:** Multi-column dashboard. Left column houses patient profiles and classified descriptions; center column houses live neurological imaging; right column houses real-time brainwave activity mapping.
*   **Micro Layout:** Fixed-width rectangular blocks grouped inside thin double-lined borders.

### 4.2 Spacing & Padding
*   Follows a rigid `8px` grid for alignments.
*   **Cell Spacing:** `16px` (`p-4`) standard inner padding for text boxes.
*   **Element Border Gaps:** `2px` spacing between concentric enclosing lines to simulate industrial technical drawings.

---

## 5. Texture & Shapes

*   **Corners:** **Sharp 0px**. No rounded edges are allowed on cards, buttons, or charts to preserve the strict clinical document aesthetic.
*   **Visual Artifacts:** Use subtle vertical scanning lines (CRT scanlines) and simulated ink bleeding effects via subtle CSS text-shadows.

---

## 6. Core Component Library

### 6.1 Classified Banners (Header Block)
*   **Style:** Dark background container with an enclosing double outline. Right-aligned square code indicators (e.g., `[ENI] #00762`).

### 6.2 Redacted Text Field
*   **Style:** Any text blocked by high-security access clearance should be overlaid with a solid background bar (`bg-slate-600` or `bg-black`), completely masking the text beneath.

### 6.3 Technical Data Fields (The Patient Form)
*   **Layout:** Key-value pairs arranged on a single line. The label and value are bridged by a continuous string of dots (`Name: ................ Aaron Morrison`).

### 6.4 Barcode & Telemetry Blocks
*   **Barcode Container:** Generates varying vertical line widths stacked tightly together, topped with alphanumeric text (e.g., `B3 >> 0.5 Amps`).
*   **Anatomical Views:** Central window embedding circular frame structures displaying high-contrast grayscale MRI or CT scan graphics.

---

## 7. Do's and Don'ts

### ✅ Do's
*   Keep all layout elements strictly rectangular with sharp edges.
*   Use uppercase text for all functional section markers and system actions.
*   Maintain the look of typewriter layout styling by forcing text alignment along strict vertical axes.

### ❌ Don'ts
*   Do not introduce color gradients, glowing neon fills, or vibrant saturated colors.
*   Do not use smooth transitions or animations; all changes in visual states must be instant toggle responses.
*   Do not use rounded buttons or standard modern web curves.
