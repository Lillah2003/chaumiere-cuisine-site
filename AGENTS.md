<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep restaurant facts, optional verified hours, legal fields and typed menu entries in `src/data/restaurant.ts`; this allows updates without altering page layouts.
- Use shared restaurant sections and shared root navigation/footer with separate content routes; this preserves consistent presentation and page-specific search metadata.
- Keep all presentation colors, typography and interaction styles in the global semantic design system; components consume those roles.
- Use telephone links for reservations and external Google Maps links until an approved map connection exists; no online booking or invented map is implied.
