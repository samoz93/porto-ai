# SEO: visible name on About / Projects / Contact

## Goal

Name-first entity signal on inner routes (path B + hash SPA): literal **Sameh Zoaa** in DOM, not only meta.

## Steps done

1. Add shared `.page-name-line` in `base.css` (serif italic, before H1).
2. **About:** line under “Precision Curator” eyebrow, above H1.
3. **Projects:** line above H1; wrap H1 in `<div>` so `projects-hero` flex (copy | lead) unchanged.
4. **Contact:** line under eyebrow, above `.contact-title`; tighten `contact-title` top margin slightly.

## Related

- `project.md` — overview.
