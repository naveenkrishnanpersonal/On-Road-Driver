/* Prefix a public asset path with the deployment base, so runtime image
   references work at the domain root or under a subpath (e.g. a GitHub Pages
   project site). */
export function asset(name) {
  return `${import.meta.env.BASE_URL}${name}`;
}
