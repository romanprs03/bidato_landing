import type { Plugin } from "vite";

const STUB_ID = "\0gsap-server-stub";

// Importing GSAP starts its ticker, which calls setTimeout while the module is
// being evaluated. Cloudflare Workers reject timers outside a request handler
// ("Disallowed operation called within global scope"), so server rendering
// failed and every page load answered 500. Animations only run in the browser,
// so server environments get this stub instead of the real package. It covers
// what runs during render: gsap.registerPlugin() at module level and the
// gsap.context() that useGSAP creates.
const STUB_SOURCE = `
const context = () => ({ add() {}, revert() {}, kill() {} });
const gsap = { registerPlugin() {}, context };
export default gsap;
export { gsap };
export const ScrollTrigger = {};
`;

export function gsapServerStub(): Plugin {
  return {
    name: "gsap-server-stub",
    enforce: "pre",
    applyToEnvironment: (environment) => environment.config.consumer === "server",
    resolveId(id) {
      if (id === "gsap" || id.startsWith("gsap/")) {
        return STUB_ID;
      }
    },
    load(id) {
      if (id === STUB_ID) {
        return STUB_SOURCE;
      }
    },
  };
}
