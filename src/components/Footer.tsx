export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <p className="font-heading text-3xl tracking-wide text-foreground">Statyx</p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              L'élégance tissée, le style défini. Streetwear premium pour ceux qui osent voler.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">Boutique</p>
            <ul className="space-y-2.5">
              {["Nouveautés", "Hoodies", "Joggers", "T-Shirts", "Accessoires"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">Entreprise</p>
            <ul className="space-y-2.5">
              {["À Propos", "Notre Histoire", "Durabilité", "Carrières", "Presse"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">Support</p>
            <ul className="space-y-2.5">
              {["Contact", "Livraison", "Retours", "FAQ", "Guide des Tailles"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 Statyx. Tous droits réservés.
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: "Instagram", path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z" },
              { label: "Twitter", path: "M22.46 6c-.85.38-1.78.64-2.73.76 1-.6 1.76-1.54 2.12-2.67-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.58-2.11-9.96-5.02-.42.72-.66 1.56-.66 2.46 0 1.68.85 3.16 2.14 4.02-.79-.02-1.53-.24-2.18-.6v.06c0 2.35 1.67 4.31 3.88 4.76-.4.1-.83.16-1.27.16-.31 0-.62-.03-.92-.08.63 1.96 2.45 3.39 4.61 3.43-1.69 1.32-3.83 2.1-6.15 2.1-.4 0-.8-.02-1.19-.07 2.19 1.4 4.78 2.22 7.57 2.22 9.07 0 14.02-7.52 14.02-14.02 0-.21 0-.42-.01-.63.96-.7 1.8-1.56 2.46-2.55z" },
              { label: "TikTok", path: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .55.04.81.1v-3.52a6.37 6.37 0 00-.81-.05A6.34 6.34 0 003.15 15.4a6.34 6.34 0 0010.14 5.09 6.34 6.34 0 002.2-4.82V9.4a8.16 8.16 0 004.69 1.49V7.44a4.85 4.85 0 01-.59-.75z" },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
