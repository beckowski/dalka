// Company-wide configuration — change these to match your business.
export const company = {
  name: "Dalka Systems d.o.o.",
  shortName: "DALKA SYSTEMS",
  website: "dalkasystems.com",
  email: "info@dalkasystems.com",
  phone: "+49 176 57870677",
  addressLines: ["Dunajska cesta 136", "1000 Ljubljana", "Slovenija"],
  // Optional social / map links — leave empty strings to hide.
  mapsUrl: "",
  // The Formspree endpoint(s) used by the forms. See README for setup.
  // Set FORMSPREE_CONTACT / FORMSPREE_CAREERS in a local .env file (see
  // .env.example) and as repository variables in GitHub Actions — keep the
  // actual form IDs out of source control since this repo is public.
  formspree: {
    contact: import.meta.env.FORMSPREE_CONTACT || "https://formspree.io/f/your-form-id",
    careers: import.meta.env.FORMSPREE_CAREERS || "https://formspree.io/f/your-form-id",
  },
};
