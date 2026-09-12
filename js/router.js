/** Hash-based SPA router */

const routes = new Map();
let current = null;
let onChange = null;

export function registerRoute(name, handler) {
  routes.set(name, handler);
}

export function setRouteChangeHandler(fn) {
  onChange = fn;
}

export function parseHash() {
  const raw = location.hash.replace(/^#\/?/, "");
  const [name, ...rest] = raw.split("/");
  return { name: name || "home", params: rest.filter(Boolean) };
}

export function navigate(name, params = []) {
  const path = params.length ? `#/${name}/${params.join("/")}` : `#/${name}`;
  if (location.hash === path) {
    runRoute();
  } else {
    location.hash = path;
  }
}

export function runRoute() {
  const { name, params } = parseHash();
  const handler = routes.get(name) || routes.get("home");
  current = { name, params };
  if (onChange) onChange(name, params);
  if (handler) handler(params);
}

export function startRouter() {
  window.addEventListener("hashchange", runRoute);
  if (!location.hash) location.hash = "#/home";
  else runRoute();
}

export function getCurrentRoute() {
  return current || parseHash();
}
