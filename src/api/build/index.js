var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// src/app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/tirthgajjar/work/designbits/designbits/src/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
init_react();
var import_remix5 = __toModule(require_remix());

// src/app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-34OPMMGT.css";

// src/app/components/Layout.tsx
init_react();
var import_react3 = __toModule(require("@headlessui/react"));
var import_outline2 = __toModule(require("@heroicons/react/outline"));
var import_react4 = __toModule(require("react"));

// src/app/components/Logo.tsx
init_react();
function DesignBitsLogo(props) {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": "design-bits-logo-title",
    fill: "none",
    viewBox: "0 0 102 24",
    height: "32"
  }, props), /* @__PURE__ */ React.createElement("title", {
    id: "design-bits-logo-title"
  }, "DesignBits logo"), /* @__PURE__ */ React.createElement("path", {
    d: "M5.2273 18c3.5454 0 5.7954-2.1818 5.7954-5.8182s-2.25-5.8182-5.8409-5.8182H.75V18h4.4773ZM3.909 15.3182V9.0455h1.1136c1.8182 0 2.8182.7045 2.8182 3.1363s-1 3.1364-2.7273 3.1364H3.9091ZM12.4844 18h8.3636v-2.5455h-5.2045v-2h4.7954v-2.5454h-4.7954v-2h5.2272V6.3636h-8.3863V18Zm16.2258-8h3.0228c-.0114-2.284-1.7728-3.7954-4.591-3.7954-2.767 0-4.7215 1.4886-4.7045 3.7045-.0057 1.8182 1.2557 2.8295 3.3182 3.2727l1.1591.25c1.2954.2841 1.7386.608 1.75 1.1364-.0114.5738-.5341.9773-1.5455.9773-1.2102 0-1.9261-.5682-1.9773-1.6364h-3c.0114 2.9204 1.9887 4.2273 5.0228 4.2273 2.9488 0 4.7159-1.2728 4.7272-3.5682-.0113-1.7727-1.0681-3.0171-3.6363-3.5682l-.9546-.2045c-1.1022-.233-1.5966-.5569-1.5681-1.1137.0056-.5114.4318-.8864 1.409-.8864 1.0228 0 1.5057.449 1.5682 1.2046Zm7.5426-3.6364h-3.159V18h3.159V6.3636Zm9.054 3.8409H48.5c-.2443-2.3352-2.3636-4-5.1136-4-3.1364 0-5.6819 2.1591-5.6819 6 0 3.6819 2.3069 5.9546 5.7046 5.9546 3.0454 0 5.2273-1.8636 5.2273-5.0455V11.5h-5.1591v2.25h2.1136c-.0284 1.0114-.7443 1.6591-2.1591 1.6591-1.6363 0-2.4773-1.2046-2.4773-3.25 0-2.0171.9091-3.2046 2.5-3.2046.9887 0 1.6591.4546 1.8523 1.25Zm14.8708-3.8409h-3.1591v6.0909h-.0909l-4.1364-6.0909h-2.6818V18h3.1591v-6.1136h.0681L57.5412 18h2.6364V6.3636ZM64.8594 18h5.4772c2.5285 0 4.091-1.3807 4.091-3.2955 0-1.642-1.2103-2.7159-2.7046-2.7727v-.1136c1.3466-.2671 2.25-1.2614 2.25-2.5455 0-1.7727-1.4091-2.909-4.0682-2.909h-5.0454V18Zm3.1591-2.5227v-2.4546h1.5227c.9602 0 1.5454.4546 1.5454 1.2728 0 .7784-.5284 1.1818-1.5909 1.1818h-1.4772Zm0-4.4091V8.8409h1.3409c.7841 0 1.3636.3977 1.3636 1.1136 0 .716-.5795 1.1137-1.4091 1.1137h-1.2954ZM78.706 6.3636h-3.1591V18h3.1591V6.3636Zm1.1789 2.5455h3.5V18h3.1137V8.909h3.5V6.3637H79.8849v2.5455ZM97.4602 10h3.0228c-.011-2.284-1.7728-3.7954-4.591-3.7954-2.767 0-4.7215 1.4886-4.7045 3.7045-.0057 1.8182 1.2557 2.8295 3.3182 3.2727l1.1591.25c1.2954.2841 1.7386.608 1.75 1.1364-.0114.5738-.5341.9773-1.5455.9773-1.2102 0-1.9261-.5682-1.9773-1.6364h-3c.0114 2.9204 1.9887 4.2273 5.0228 4.2273 2.9488 0 4.7162-1.2728 4.7272-3.5682-.011-1.7727-1.0681-3.0171-3.6363-3.5682l-.9546-.2045c-1.1022-.233-1.5966-.5569-1.5681-1.1137.0056-.5114.4318-.8864 1.409-.8864 1.0228 0 1.5057.449 1.5682 1.2046Z",
    fill: "url(#a)"
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", {
    id: "a",
    x1: "0",
    y1: "12",
    x2: "126.5",
    y2: "12",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("stop", {
    stopColor: "#7B61FF"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: ".379",
    stopColor: "#F097BD"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: ".6498",
    stopColor: "#EF94A4"
  }), /* @__PURE__ */ React.createElement("stop", {
    offset: "1",
    stopColor: "#7B61FF"
  }))));
}

// src/app/utils/classnames.ts
init_react();
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/app/components/Link.tsx
init_react();
var import_remix2 = __toModule(require_remix());
var Link = (_a) => {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  return /* @__PURE__ */ React.createElement(import_remix2.Link, __spreadValues({}, props), children);
};
var Link_default = Link;

// src/app/components/icons/Explore.tsx
init_react();
var ExploreIcon = (props) => {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.8787 2.87868C13.4413 2.31607 14.2044 2 15 2H19C19.7956 2 20.5587 2.31607 21.1213 2.87868C21.6839 3.44129 22 4.20435 22 5V17C22 18.3261 21.4732 19.5979 20.5355 20.5355C19.5979 21.4732 18.3261 22 17 22C15.6739 22 14.4021 21.4732 13.4645 20.5355C12.5268 19.5979 12 18.3261 12 17V5C12 4.20435 12.3161 3.44129 12.8787 2.87868ZM15 4C14.7348 4 14.4804 4.10536 14.2929 4.29289C14.1054 4.48043 14 4.73478 14 5V17C14 17.7956 14.3161 18.5587 14.8787 19.1213C15.4413 19.6839 16.2044 20 17 20C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V5C20 4.73478 19.8946 4.48043 19.7071 4.29289C19.5196 4.10536 19.2652 4 19 4H15Z"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.46487 4.63629C8.02746 4.07388 8.79038 3.75793 9.58587 3.75793C10.3814 3.75793 11.1443 4.07388 11.7069 4.63629L13.707 6.6364C14.0975 7.02692 14.0975 7.66009 13.707 8.05061C13.3165 8.44114 12.6833 8.44114 12.2928 8.05061L10.2929 6.05072C10.2928 6.05069 10.2929 6.05076 10.2929 6.05072C10.1054 5.86332 9.85099 5.75793 9.58587 5.75793C9.32076 5.75793 9.0665 5.86321 8.87898 6.05061M8.87898 6.05061L6.05109 8.87851C6.05105 8.87854 6.05112 8.87847 6.05109 8.87851C5.86368 9.06603 5.7583 9.32039 5.7583 9.58551C5.7583 9.85062 5.86358 10.1049 6.05098 10.2924C6.05102 10.2924 6.05094 10.2924 6.05098 10.2924L15.051 19.2924C15.4415 19.6829 15.4415 20.3161 15.051 20.7066C14.6605 21.0971 14.0273 21.0971 13.6368 20.7066L4.63677 11.7066C4.07435 11.144 3.7583 10.381 3.7583 9.58551C3.7583 8.79001 4.07425 8.02709 4.63666 7.46451L7.46487 4.63629"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.87868 12.8861C3.44129 12.3235 4.20435 12.0074 5 12.0074H7.3C7.85228 12.0074 8.3 12.4552 8.3 13.0074C8.3 13.5597 7.85228 14.0074 7.3 14.0074H5C4.73478 14.0074 4.48043 14.1128 4.29289 14.3003C4.10536 14.4879 4 14.7422 4 15.0074V19.0074C4 19.2727 4.10536 19.527 4.29289 19.7146C4.48043 19.9021 4.73478 20.0074 5 20.0074H17C17.5523 20.0074 18 20.4552 18 21.0074C18 21.5597 17.5523 22.0074 17 22.0074H5C4.20435 22.0074 3.44129 21.6914 2.87868 21.1288C2.31607 20.5662 2 19.8031 2 19.0074V15.0074C2 14.2118 2.31607 13.4487 2.87868 12.8861Z"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 15.9926C17.5523 15.9926 18 16.4403 18 16.9926V17.0026C18 17.5548 17.5523 18.0026 17 18.0026C16.4477 18.0026 16 17.5548 16 17.0026V16.9926C16 16.4403 16.4477 15.9926 17 15.9926Z"
  }));
};
var Explore_default = ExploreIcon;

// src/app/components/icons/Collections.tsx
init_react();
var CollectionsIcon = (props) => {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 5.00749C4.73478 5.00749 4.48043 5.11285 4.29289 5.30039C4.10536 5.48792 4 5.74228 4 6.00749V17.0075C4 17.2727 4.10536 17.5271 4.29289 17.7146C4.48043 17.9021 4.73478 18.0075 5 18.0075H19C19.2652 18.0075 19.5196 17.9021 19.7071 17.7146C19.8946 17.5271 20 17.2727 20 17.0075V9.00749C20 8.74228 19.8946 8.48792 19.7071 8.30038C19.5196 8.11285 19.2652 8.00749 19 8.00749H12C11.7348 8.00749 11.4804 7.90213 11.2929 7.7146L8.58579 5.00749H5ZM2.87868 3.88617C3.44129 3.32356 4.20435 3.00749 5 3.00749H9C9.26522 3.00749 9.51957 3.11285 9.70711 3.30039L12.4142 6.00749H19C19.7957 6.00749 20.5587 6.32356 21.1213 6.88617C21.6839 7.44878 22 8.21184 22 9.00749V17.0075C22 17.8031 21.6839 18.5662 21.1213 19.1288C20.5587 19.6914 19.7957 20.0075 19 20.0075H5C4.20435 20.0075 3.44129 19.6914 2.87868 19.1288C2.31607 18.5662 2 17.8031 2 17.0075V6.00749C2 5.21184 2.31607 4.44878 2.87868 3.88617Z"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 9.00749C12.5523 9.00749 13 9.45521 13 10.0075V16.0075C13 16.5598 12.5523 17.0075 12 17.0075C11.4477 17.0075 11 16.5598 11 16.0075V10.0075C11 9.45521 11.4477 9.00749 12 9.00749Z"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 13.0075C8 12.4552 8.44772 12.0075 9 12.0075H15C15.5523 12.0075 16 12.4552 16 13.0075C16 13.5598 15.5523 14.0075 15 14.0075H9C8.44772 14.0075 8 13.5598 8 13.0075Z"
  }));
};
var Collections_default = CollectionsIcon;

// src/app/components/icons/Gallery.tsx
init_react();
var GalleryIcon = (props) => {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 7.99251C14 7.44022 14.4477 6.99251 15 6.99251H15.01C15.5623 6.99251 16.01 7.44022 16.01 7.99251C16.01 8.54479 15.5623 8.99251 15.01 8.99251H15C14.4477 8.99251 14 8.54479 14 7.99251Z"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 5.00749C5.89543 5.00749 5 5.90292 5 7.00749V17.0075C5 18.1121 5.89543 19.0075 7 19.0075H17C18.1046 19.0075 19 18.1121 19 17.0075V7.00749C19 5.90292 18.1046 5.00749 17 5.00749H7ZM3 7.00749C3 4.79835 4.79086 3.00749 7 3.00749H17C19.2091 3.00749 21 4.79835 21 7.00749V17.0075C21 19.2166 19.2091 21.0075 17 21.0075H7C4.79086 21.0075 3 19.2166 3 17.0075V7.00749Z"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.69966 11.7202L4.70711 15.7127C4.31658 16.1032 3.68342 16.1032 3.29289 15.7127C2.90237 15.3222 2.90237 14.689 3.29289 14.2985L7.29289 10.2985L7.30663 10.285C7.909 9.7054 8.66419 9.33574 9.5 9.33574C10.3358 9.33574 11.091 9.7054 11.6934 10.285L11.7071 10.2985L16.7071 15.2985C17.0976 15.689 17.0976 16.3222 16.7071 16.7127C16.3166 17.1032 15.6834 17.1032 15.2929 16.7127L10.3003 11.7202C9.9931 11.4269 9.71594 11.3357 9.5 11.3357C9.28406 11.3357 9.0069 11.4269 8.69966 11.7202Z"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.6997 13.7127L14.7071 14.7052C14.3166 15.0958 13.6834 15.0958 13.2929 14.7052C12.9024 14.3147 12.9024 13.6815 13.2929 13.291L14.2929 12.291L14.3066 12.2775C14.909 11.6979 15.6642 11.3282 16.5 11.3282C17.3358 11.3282 18.091 11.6979 18.6934 12.2775L18.7071 12.291L20.7071 14.291C21.0976 14.6815 21.0976 15.3147 20.7071 15.7052C20.3166 16.0958 19.6834 16.0958 19.2929 15.7052L17.3003 13.7127C16.9931 13.4194 16.7159 13.3282 16.5 13.3282C16.2841 13.3282 16.0069 13.4194 15.6997 13.7127Z"
  }));
};
var Gallery_default = GalleryIcon;

// src/app/components/icons/Like.tsx
init_react();
var LikeIcon = (props) => {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 5.00745C12.7348 5.00745 12.4804 5.1128 12.2929 5.30034C12.1054 5.48788 12 5.74223 12 6.00745V7.00745C12 8.33353 11.4732 9.6053 10.5355 10.543C9.83715 11.2414 8.95344 11.7118 8 11.9064V17.0074C8 17.5379 8.21071 18.0466 8.58579 18.4217C8.96086 18.7967 9.46957 19.0074 10 19.0074H17C17.0283 19.0074 17.0566 19.0086 17.0848 19.011C17.1715 19.0184 17.323 18.9939 17.5155 18.8013C17.7146 18.6022 17.911 18.2612 18.0229 17.7941L18.9966 12.9253C18.9773 12.6902 18.8752 12.4684 18.7071 12.3003C18.5196 12.1128 18.2652 12.0074 18 12.0074H15C14.4477 12.0074 14 11.5597 14 11.0074V6.00745C14 5.74223 13.8946 5.48788 13.7071 5.30034C13.5196 5.1128 13.2652 5.00745 13 5.00745ZM7.6 20.2075C7.54354 20.2827 7.48152 20.3544 7.41421 20.4217C7.03914 20.7967 6.53043 21.0074 6 21.0074H4C3.46957 21.0074 2.96086 20.7967 2.58579 20.4217C2.21071 20.0466 2 19.5379 2 19.0074V12.0074C2 11.477 2.21071 10.9683 2.58579 10.5932C2.96086 10.2182 3.46957 10.0074 4 10.0074H7C7.79565 10.0074 8.55871 9.69138 9.12132 9.12877C9.68393 8.56616 10 7.8031 10 7.00745V6.00745C10 5.2118 10.3161 4.44873 10.8787 3.88613C11.4413 3.32352 12.2044 3.00745 13 3.00745C13.7956 3.00745 14.5587 3.32352 15.1213 3.88613C15.6839 4.44873 16 5.2118 16 6.00745V10.0074H18C18.7957 10.0074 19.5587 10.3235 20.1213 10.8861C20.6839 11.4487 21 12.2118 21 13.0074C21 13.0733 20.9935 13.139 20.9806 13.2036L19.9806 18.2036C19.9784 18.2143 19.9761 18.225 19.9736 18.2357C19.7973 18.9879 19.45 19.6953 18.9298 20.2155C18.4118 20.7335 17.7232 21.0566 16.9633 21.0074H10C9.12953 21.0074 8.28831 20.7237 7.6 20.2075ZM6 12.0074H4V19.0074H6V12.0074Z"
  }));
};
var Like_default = LikeIcon;

// src/app/components/SearchBox.tsx
init_react();
var import_outline = __toModule(require("@heroicons/react/outline"));
var import_react = __toModule(require("react"));
var SearchBox = (props) => {
  return /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("label", {
    htmlFor: "search",
    className: "sr-only"
  }, "Quick search"), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "relative flex items-center mt-1 text-gray-400"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "absolute inset-y-0 left-0 flex items-center pl-2 py-1.5"
  }, /* @__PURE__ */ import_react.default.createElement(import_outline.SearchIcon, {
    height: "20",
    width: "20",
    role: "presentation"
  })), /* @__PURE__ */ import_react.default.createElement("input", {
    type: "text",
    name: "search",
    id: "search",
    placeholder: "Search",
    role: "search",
    className: "block pl-10 pr-12 w-72 bg-gray-100 focus:border-indigo-500 border-transparent rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "absolute inset-y-0 right-0 flex pr-2 py-1.5"
  }, /* @__PURE__ */ import_react.default.createElement("kbd", {
    className: "inline-flex items-center px-2 font-sans text-sm font-medium border border-gray-300 rounded"
  }, "\u2318 K"))));
};
var SearchBox_default = SearchBox;

// src/app/components/Button.tsx
init_react();
var import_react2 = __toModule(require("react"));
var Button = (_a) => {
  var _b = _a, { children } = _b, btnProps = __objRest(_b, ["children"]);
  return /* @__PURE__ */ import_react2.default.createElement("button", __spreadValues({
    type: "button",
    className: "inline-flex items-center px-4 py-2 text-white text-sm font-medium bg-indigo-600 hover:bg-indigo-700 border border-transparent rounded-md focus:outline-none shadow-sm focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  }, btnProps), children);
};
var Button_default = Button;

// src/app/components/icons/Upload.tsx
init_react();
var UploadIcon = () => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.33333 13.3271C3.79357 13.3271 4.16667 13.7002 4.16667 14.1605V15.8271C4.16667 16.0482 4.25446 16.2601 4.41074 16.4164C4.56702 16.5727 4.77899 16.6605 5 16.6605H15C15.221 16.6605 15.433 16.5727 15.5893 16.4164C15.7455 16.2601 15.8333 16.0482 15.8333 15.8271V14.1605C15.8333 13.7002 16.2064 13.3271 16.6667 13.3271C17.1269 13.3271 17.5 13.7002 17.5 14.1605V15.8271C17.5 16.4902 17.2366 17.1261 16.7678 17.5949C16.2989 18.0638 15.663 18.3271 15 18.3271H5C4.33696 18.3271 3.70107 18.0638 3.23223 17.5949C2.76339 17.1261 2.5 16.4902 2.5 15.8271V14.1605C2.5 13.7002 2.8731 13.3271 3.33333 13.3271Z"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 2.50586C10.221 2.50586 10.433 2.59366 10.5893 2.74994L14.7559 6.9166C15.0814 7.24204 15.0814 7.76968 14.7559 8.09512C14.4305 8.42055 13.9028 8.42055 13.5774 8.09512L10 4.5177L6.42259 8.09512C6.09715 8.42055 5.56951 8.42055 5.24408 8.09512C4.91864 7.76968 4.91864 7.24204 5.24408 6.9166L9.41074 2.74994C9.56702 2.59366 9.77899 2.50586 10 2.50586Z"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.0003 2.50586C10.4606 2.50586 10.8337 2.87896 10.8337 3.33919V13.3392C10.8337 13.7994 10.4606 14.1725 10.0003 14.1725C9.54009 14.1725 9.16699 13.7994 9.16699 13.3392V3.33919C9.16699 2.87896 9.54009 2.50586 10.0003 2.50586Z"
  }));
};
var Upload_default = UploadIcon;

// src/app/components/Layout.tsx
var import_remix3 = __toModule(require_remix());
var user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
};
var iconProps = {
  height: "24",
  width: "24"
};
var navigation = [
  { name: "Explore", href: "/explore", icon: /* @__PURE__ */ React.createElement(Explore_default, __spreadValues({}, iconProps)) },
  {
    name: "Collections",
    href: "/collections",
    icon: /* @__PURE__ */ React.createElement(Collections_default, __spreadValues({}, iconProps))
  },
  { name: "Liked", href: "/liked", icon: /* @__PURE__ */ React.createElement(Like_default, __spreadValues({}, iconProps)) },
  {
    name: "My Uploads",
    href: "/my-uploads",
    icon: /* @__PURE__ */ React.createElement(Gallery_default, __spreadValues({}, iconProps))
  }
];
var userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" }
];
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "min-h-full"
  }, /* @__PURE__ */ React.createElement(import_react3.Disclosure, {
    as: "nav",
    className: "bg-white shadow-sm"
  }, ({ open }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between h-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-shrink-0 items-center w-56"
  }, /* @__PURE__ */ React.createElement(Link_default, {
    to: "/",
    className: "px-2"
  }, /* @__PURE__ */ React.createElement(DesignBitsLogo, null))), /* @__PURE__ */ React.createElement("nav", {
    role: "navigation",
    "aria-label": "main-nav",
    className: "hidden sm:flex sm:-my-px sm:space-x-8"
  }, navigation.map((item) => /* @__PURE__ */ React.createElement(import_remix3.NavLink, {
    key: item.name,
    to: item.href,
    className: ({ isActive }) => classNames(isActive ? "border-indigo-700 text-indigo-700 font-semibold" : "border-transparent text-gray-500 hover:text-indigo-500", "inline-flex items-center pt-1 px-1 text-sm font-medium border-b-2 space-x-2")
  }, item.icon, /* @__PURE__ */ React.createElement("span", null, item.name))))), /* @__PURE__ */ React.createElement("div", {
    className: "hidden space-x-6 sm:flex sm:items-center sm:ml-6"
  }, /* @__PURE__ */ React.createElement(SearchBox_default, null), /* @__PURE__ */ React.createElement(Button_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-2"
  }, /* @__PURE__ */ React.createElement(Upload_default, null), /* @__PURE__ */ React.createElement("span", null, "Upload"))), /* @__PURE__ */ React.createElement(import_react3.Menu, {
    as: "div",
    className: "relative"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react3.Menu.Button, {
    className: "flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Open user menu"), /* @__PURE__ */ React.createElement("img", {
    className: "w-8 h-8 rounded-full",
    src: user.imageUrl,
    alt: ""
  }))), /* @__PURE__ */ React.createElement(import_react3.Transition, {
    as: import_react4.Fragment,
    enter: "transition ease-out duration-200",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95"
  }, /* @__PURE__ */ React.createElement(import_react3.Menu.Items, {
    className: "absolute right-0 mt-2 py-1 w-48 bg-white rounded-md focus:outline-none shadow-lg origin-top-right ring-1 ring-black ring-opacity-5"
  }, userNavigation.map((item) => /* @__PURE__ */ React.createElement(import_react3.Menu.Item, {
    key: item.name
  }, ({ active }) => /* @__PURE__ */ React.createElement("a", {
    href: item.href,
    className: classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-gray-700 text-sm")
  }, item.name))))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center -mr-2 sm:hidden"
  }, /* @__PURE__ */ React.createElement(import_react3.Disclosure.Button, {
    className: "inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Open main menu"), open ? /* @__PURE__ */ React.createElement(import_outline2.XIcon, {
    className: "block w-6 h-6",
    "aria-hidden": "true"
  }) : /* @__PURE__ */ React.createElement(import_outline2.MenuIcon, {
    className: "block w-6 h-6",
    "aria-hidden": "true"
  }))))), /* @__PURE__ */ React.createElement(import_react3.Disclosure.Panel, {
    className: "sm:hidden"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pb-3 pt-2 space-y-1"
  }, navigation.map((item) => /* @__PURE__ */ React.createElement(import_react3.Disclosure.Button, {
    key: item.name,
    as: "div"
  }, /* @__PURE__ */ React.createElement(import_remix3.NavLink, {
    to: item.href,
    className: ({ isActive }) => classNames(isActive ? "bg-indigo-50 border-indigo-500 text-indigo-700" : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800", "block pl-3 pr-4 py-2 text-base font-medium border-l-4")
  }, item.name)))), /* @__PURE__ */ React.createElement("div", {
    className: "pb-3 pt-4 border-t border-gray-200"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center px-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-shrink-0"
  }, /* @__PURE__ */ React.createElement(DesignBitsLogo, null)), /* @__PURE__ */ React.createElement("div", {
    className: "ml-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-gray-800 text-base font-medium"
  }, user.name), /* @__PURE__ */ React.createElement("div", {
    className: "text-gray-500 text-sm font-medium"
  }, user.email)), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "flex-shrink-0 ml-auto p-1 text-gray-400 hover:text-gray-500 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "View notifications"), /* @__PURE__ */ React.createElement(import_outline2.BellIcon, {
    className: "w-6 h-6",
    "aria-hidden": "true"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-3 space-y-1"
  }, userNavigation.map((item) => /* @__PURE__ */ React.createElement(import_react3.Disclosure.Button, {
    key: item.name,
    as: "a",
    href: item.href,
    className: "block px-4 py-2 text-gray-500 hover:text-gray-800 text-base font-medium hover:bg-gray-100"
  }, item.name))))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex py-10"
  }, children)));
}

// src/app/components/common/Document.tsx
init_react();
var import_remix4 = __toModule(require_remix());
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: "h-full"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_remix4.Meta, null), /* @__PURE__ */ React.createElement(import_remix4.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "h-full"
  }, children, /* @__PURE__ */ React.createElement(import_remix4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix4.Scripts, null), /* @__PURE__ */ React.createElement(import_remix4.LiveReload, null)));
}

// route-module:/Users/tirthgajjar/work/designbits/designbits/src/app/root.tsx
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://rsms.me/inter/inter.css"
    },
    {
      rel: "stylesheet",
      href: tailwind_default
    }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(import_remix5.Outlet, null));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
function CatchBoundary() {
  const caught = (0, import_remix5.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Please check the URL in the address bar and try again.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto my-auto px-4 py-16 min-h-full bg-white sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-max"
  }, /* @__PURE__ */ React.createElement("main", {
    className: "sm:flex"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-indigo-600 text-4xl font-extrabold sm:text-5xl"
  }, caught.status), /* @__PURE__ */ React.createElement("div", {
    className: "sm:ml-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sm:pl-6 sm:border-l sm:border-gray-200"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-gray-900 text-4xl font-extrabold tracking-tight sm:text-5xl"
  }, caught.statusText), /* @__PURE__ */ React.createElement("p", {
    className: "mt-1 text-gray-500 text-base"
  }, message)), /* @__PURE__ */ React.createElement("div", {
    className: "flex mt-10 space-x-3 sm:pl-6 sm:border-l sm:border-transparent"
  }, /* @__PURE__ */ React.createElement(Link_default, {
    to: "/explore",
    className: "inline-flex items-center px-4 py-2 text-white text-sm font-medium bg-indigo-600 hover:bg-indigo-700 border border-transparent rounded-md focus:outline-none shadow-sm focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  }, "Explore"), /* @__PURE__ */ React.createElement("a", {
    href: "/",
    className: "inline-flex items-center px-4 py-2 text-indigo-700 text-sm font-medium bg-indigo-100 hover:bg-indigo-200 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  }, "Go back home"))))))));
}

// route-module:/Users/tirthgajjar/work/designbits/designbits/src/app/routes/auth/forgot-password.tsx
var forgot_password_exports = {};
__export(forgot_password_exports, {
  default: () => forgot_password_default
});
init_react();
var import_react5 = __toModule(require("react"));
var ForgotPassword = (props) => {
  return /* @__PURE__ */ import_react5.default.createElement("div", null);
};
var forgot_password_default = ForgotPassword;

// route-module:/Users/tirthgajjar/work/designbits/designbits/src/app/routes/interaction/$id.tsx
var id_exports = {};
__export(id_exports, {
  default: () => id_default
});
init_react();
var import_outline3 = __toModule(require("@heroicons/react/outline"));
var import_react9 = __toModule(require("react"));

// src/app/components/Avatar.tsx
init_react();
function Avatar() {
  return /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "flex-shrink-0 group block"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    className: "inline-block h-10 w-10 rounded-full",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    alt: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "ml-3"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-base font-medium text-gray-800 group-hover:text-gray-900"
  }, "Leslie"), /* @__PURE__ */ React.createElement("p", {
    className: "text-xs text-gray-500 group-hover:text-gray-700"
  }, "96 followers"))));
}

// src/app/components/icons/Android.tsx
init_react();
var import_react6 = __toModule(require("react"));
var AndroidIcon = (props) => {
  return /* @__PURE__ */ import_react6.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "currentColor"
  }, props), /* @__PURE__ */ import_react6.default.createElement("path", {
    fillRule: "evenodd",
    d: "M2.5 7.497c.46 0 .833.373.833.833v5a.833.833 0 01-1.667 0v-5c0-.46.374-.833.834-.833zm15 0c.46 0 .833.373.833.833v5a.833.833 0 01-1.666 0v-5c0-.46.373-.833.833-.833zM10 4.164a3.333 3.333 0 00-3.228 2.5h6.455A3.333 3.333 0 0010 4.164zm5 3.333a5 5 0 00-10 0v6.667a1.667 1.667 0 001.667 1.666h6.666A1.667 1.667 0 0015 14.164V7.497zm-1.667.833H6.667v5.834h6.666V8.33z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ import_react6.default.createElement("path", {
    fillRule: "evenodd",
    d: "M6.294 1.755a.833.833 0 011.118.372l.833 1.667a.833.833 0 11-1.49.745L5.92 2.873a.833.833 0 01.373-1.118zm7.412 0a.833.833 0 01.373 1.118l-.834 1.666a.833.833 0 01-1.49-.745l.833-1.667a.833.833 0 011.118-.372zM7.5 14.167c.46 0 .833.373.833.833v2.5a.833.833 0 01-1.667 0V15c0-.46.374-.833.834-.833zm5 0c.46 0 .833.373.833.833v2.5a.833.833 0 01-1.667 0V15c0-.46.374-.833.834-.833z",
    clipRule: "evenodd"
  }));
};
var Android_default = AndroidIcon;

// src/app/components/InteractionFeedback.tsx
init_react();
var import_react7 = __toModule(require("@headlessui/react"));
var import_react8 = __toModule(require("react"));
var hasSeenOptions = [
  {
    name: "yes",
    children: /* @__PURE__ */ React.createElement(React.Fragment, null, "Yes \u261D\uFE0F")
  },
  {
    name: "Something similar",
    children: /* @__PURE__ */ React.createElement(React.Fragment, null, "Something similar \u{1F914}")
  },
  {
    name: "no",
    children: /* @__PURE__ */ React.createElement(React.Fragment, null, "No \u{1F643}")
  }
];
var experinceOptions = [
  {
    name: "yes",
    children: /* @__PURE__ */ React.createElement(React.Fragment, null, "Creative & useful \u{1F4A1}"),
    inStock: true
  },
  {
    name: "Something similar",
    children: /* @__PURE__ */ React.createElement(React.Fragment, null, "Common now-a-days \u{1F914}")
  },
  {
    name: "no",
    children: /* @__PURE__ */ React.createElement(React.Fragment, null, "Bad experience \u{1F611}")
  }
];
var InteractionFeedback = (props) => {
  const [ifHasSeenValue, setIfHasSeenValue] = (0, import_react8.useState)();
  const [expeinceFeedback, setExperienceFeedback] = (0, import_react8.useState)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full px-8 py-16 bg-gradient-to-tl from-indigo-100 via-white to-white border-b border-indigo-100"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "font-bold text-xl text-gray-800"
  }, "Help designers learn more about this interaction"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-8"
  }, /* @__PURE__ */ React.createElement(import_react7.RadioGroup, {
    value: ifHasSeenValue,
    onChange: setIfHasSeenValue,
    className: "mb-8"
  }, /* @__PURE__ */ React.createElement(import_react7.RadioGroup.Label, {
    className: "text-sm text-gray-700 font-semibold"
  }, "Have you ever seen this interaction before?"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap mt-4"
  }, hasSeenOptions.map((option) => /* @__PURE__ */ React.createElement(import_react7.RadioGroup.Option, {
    key: option.name,
    value: option,
    className: ({ active, checked }) => classNames("cursor-pointer focus:outline-none text-sm", active ? "ring-2 ring-offset-1 ring-indigo-500" : "", checked ? "bg-indigo-600 border-transparent text-white hover:bg-indigo-700" : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50", "border rounded-md py-2 px-3 flex items-center justify-center shrink-0 mb-4 mr-4")
  }, /* @__PURE__ */ React.createElement(import_react7.RadioGroup.Label, {
    as: "p"
  }, option.children))))), /* @__PURE__ */ React.createElement(import_react7.RadioGroup, {
    value: expeinceFeedback,
    onChange: setExperienceFeedback,
    className: "mb-8"
  }, /* @__PURE__ */ React.createElement(import_react7.RadioGroup.Label, {
    className: "text-sm text-gray-700 font-semibold"
  }, "Evaluate the experience of this interaction"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap mt-4"
  }, experinceOptions.map((option) => /* @__PURE__ */ React.createElement(import_react7.RadioGroup.Option, {
    key: option.name,
    value: option,
    className: ({ active, checked }) => classNames("cursor-pointer focus:outline-none text-sm", active ? "ring-2 ring-offset-1 ring-indigo-500" : "", checked ? "bg-indigo-600 border-transparent text-white hover:bg-indigo-700" : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50", "border rounded-md py-2 px-3 flex items-center justify-center shrink-0 mb-4 mr-4")
  }, /* @__PURE__ */ React.createElement(import_react7.RadioGroup.Label, {
    as: "p"
  }, option.children))))), /* @__PURE__ */ React.createElement(Button_default, {
    disabled: !expeinceFeedback || !ifHasSeenValue
  }, "Submit"), /* @__PURE__ */ React.createElement("img", {
    src: "/Feedback.png",
    role: "presentation",
    className: "absolute right-0 -translate-y-3/4 -translate-x-1/2"
  })));
};
var InteractionFeedback_default = InteractionFeedback;

// route-module:/Users/tirthgajjar/work/designbits/designbits/src/app/routes/interaction/$id.tsx
var Interaction = (props) => {
  return /* @__PURE__ */ import_react9.default.createElement(Layout, null, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "grid grid-cols-7 w-full"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "col-span-5 px-8 space-y-7"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex justify-between items-start"
  }, /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "font-bold text-2xl text-gray-800"
  }, "Bottom navigation drag utility"), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex text-sm mt-1 space-x-1 text-gray-500"
  }, /* @__PURE__ */ import_react9.default.createElement("span", null, "6 hrs ago"), /* @__PURE__ */ import_react9.default.createElement("span", null, "\xB7"), /* @__PURE__ */ import_react9.default.createElement("span", null, "1.2k views"))), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex space-x-4"
  }, /* @__PURE__ */ import_react9.default.createElement("button", {
    className: "flex border px-4 py-2 rounded-lg border-gray-200 text-gray-800 space-x-2"
  }, /* @__PURE__ */ import_react9.default.createElement(Like_default, {
    height: "24",
    width: "24"
  }), /* @__PURE__ */ import_react9.default.createElement("span", null, "256")), /* @__PURE__ */ import_react9.default.createElement("button", {
    className: "flex border p-2 rounded-lg border-gray-200 text-gray-800 space-x-2"
  }, /* @__PURE__ */ import_react9.default.createElement(import_outline3.CollectionIcon, {
    height: "24",
    width: "24"
  })), /* @__PURE__ */ import_react9.default.createElement("button", {
    className: "flex border p-2 rounded-lg border-gray-200 text-gray-800 space-x-2"
  }, /* @__PURE__ */ import_react9.default.createElement(import_outline3.ShareIcon, {
    height: "24",
    width: "24"
  })))), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "aspect-video w-full bg-yellow-50 rounded-lg"
  })), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "col-span-2 "
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "w-full px-8 space-y-7"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex justify-between items-center"
  }, /* @__PURE__ */ import_react9.default.createElement(Avatar, null), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex space-x-4 items-center"
  }, /* @__PURE__ */ import_react9.default.createElement(Button_default, null, "Follow"), /* @__PURE__ */ import_react9.default.createElement("button", null, /* @__PURE__ */ import_react9.default.createElement(import_outline3.DotsVerticalIcon, {
    className: "w-5 h-5"
  })))), /* @__PURE__ */ import_react9.default.createElement("p", {
    className: "text-sm text-gray-800"
  }, "An innovative way to utilize the bottom navigation menu in mobile app for quick actions. It doesn\u2019t disturb the UI and makes it easy to create new task or send message, no matter where I am in the app. Big time saviour."), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "space-y-2 text-sm text-gray-500"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "space-x-4 w-full flex"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "w-2/12"
  }, "Source"), /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement("a", {
    href: "/",
    className: "flex space-x-1 items-center text-gray-800 font-semibold text-xs"
  }, /* @__PURE__ */ import_react9.default.createElement("img", {
    src: "https://basecamp.com/basecamp-icon-196x196.png",
    alt: "Basecamp.com",
    className: "w-5 h-5 rounded-full"
  }), /* @__PURE__ */ import_react9.default.createElement("span", null, "Basecamp.com")))), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "space-x-4 w-full flex"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "w-2/12"
  }, "Platform"), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex text-gray-800 space-x-1"
  }, /* @__PURE__ */ import_react9.default.createElement(Android_default, null), /* @__PURE__ */ import_react9.default.createElement("span", null, "Android")))), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex space-x-2 text-sm"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "px-2 py-1 text-indigo-700 bg-indigo-50 rounded"
  }, "Navigation"), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "px-2 py-1 text-indigo-700 bg-indigo-50 rounded"
  }, "Useful"), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "px-2 py-1 text-indigo-700 bg-indigo-50 rounded"
  }, "Accessibility"))), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "border-b border-gray-300 mt-12 mx-8"
  }), /* @__PURE__ */ import_react9.default.createElement(InteractionFeedback_default, null))));
};
var id_default = Interaction;

// route-module:/Users/tirthgajjar/work/designbits/designbits/src/app/routes/auth/sign-up.tsx
var sign_up_exports = {};
__export(sign_up_exports, {
  default: () => sign_up_default
});
init_react();

// src/app/components/auth/AuthHeading.tsx
init_react();
var import_react10 = __toModule(require("react"));
var import_remix6 = __toModule(require_remix());
var AuthHeading = ({ title, altLabel, altLink }) => {
  return /* @__PURE__ */ import_react10.default.createElement("div", null, /* @__PURE__ */ import_react10.default.createElement(DesignBitsLogo, {
    height: 40
  }), /* @__PURE__ */ import_react10.default.createElement("h2", {
    className: "mt-6 text-3xl font-extrabold text-gray-900"
  }, title), /* @__PURE__ */ import_react10.default.createElement("p", {
    className: "mt-2 text-sm text-gray-600"
  }, "Or", " ", /* @__PURE__ */ import_react10.default.createElement(import_remix6.Link, {
    to: altLink,
    className: "font-medium text-indigo-600 hover:text-indigo-500"
  }, altLabel)));
};
var AuthHeading_default = AuthHeading;

// src/app/components/AuthLayout.tsx
init_react();
var AuthLayout = ({ heading, authForm }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "min-h-full flex w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto w-full max-w-sm lg:w-96"
  }, heading, /* @__PURE__ */ React.createElement("div", {
    className: "mt-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-6"
  }, authForm))), " "), /* @__PURE__ */ React.createElement("div", {
    className: "hidden lg:block relative w-0 flex-1"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "absolute inset-0 h-full w-full object-cover",
    src: "https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80",
    alt: ""
  }))));
};
var AuthLayout_default = AuthLayout;

// route-module:/Users/tirthgajjar/work/designbits/designbits/src/app/routes/auth/sign-up.tsx
var SignUp = (props) => {
  return /* @__PURE__ */ React.createElement(AuthLayout_default, {
    heading: /* @__PURE__ */ React.createElement(AuthHeading_default, {
      title: "Sign up to save your favorites!",
      altLabel: "Sign in",
      altLink: "/auth/login"
    }),
    authForm: /* @__PURE__ */ React.createElement(React.Fragment, null)
  });
};
var sign_up_default = SignUp;

// route-module:/Users/tirthgajjar/work/designbits/designbits/src/app/routes/auth/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action,
  default: () => login_default
});
init_react();
var import_remix9 = __toModule(require_remix());

// src/app/utils/session.server.ts
init_react();
var import_bcrypt = __toModule(require("bcrypt"));
var import_remix7 = __toModule(require_remix());

// src/app/utils/db.server.ts
init_react();
var import_client = __toModule(require("@prisma/client"));
var db;
if (false) {
  db = new import_client.PrismaClient();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
  }
  db = global.__db;
}

// src/app/utils/session.server.ts
async function login({ email, password }) {
  const user2 = await db.user.findUnique({
    where: { email }
  });
  if (!user2)
    return null;
  const isCorrectPassword = await import_bcrypt.default.compare(password, user2.passwordHash);
  if (!isCorrectPassword)
    return null;
  return user2;
}
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}
var storage = (0, import_remix7.createCookieSessionStorage)({
  cookie: {
    name: "designbit_session",
    secure: false,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true
  }
});
async function createUserSession(userId, redirectTo) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return (0, import_remix7.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}

// src/app/components/auth/LoginForm.tsx
init_react();
var import_react11 = __toModule(require("react"));
var import_remix8 = __toModule(require_remix());
var LoginForm = (props) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const {
    searchParams,
    actionData = {
      error: {
        formErrors: [],
        fieldErrors: {
          email: [],
          password: []
        }
      },
      fields: {
        email: "",
        password: ""
      }
    }
  } = props;
  const { error, fields } = actionData;
  return /* @__PURE__ */ import_react11.default.createElement(import_remix8.Form, {
    method: "post",
    className: "space-y-6",
    "aria-describedby": (actionData == null ? void 0 : actionData.error.formErrors) ? "form-error-message" : void 0
  }, /* @__PURE__ */ import_react11.default.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    className: "hidden",
    value: searchParams.get("redirectTo") ?? void 0
  }), /* @__PURE__ */ import_react11.default.createElement("div", null, /* @__PURE__ */ import_react11.default.createElement("label", {
    htmlFor: "email",
    className: "block text-sm font-medium text-gray-700"
  }, "Email address"), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ import_react11.default.createElement("input", {
    id: "email",
    name: "email",
    type: "email",
    autoComplete: "email",
    required: true,
    className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
    "aria-invalid": Boolean((_a = error == null ? void 0 : error.fieldErrors) == null ? void 0 : _a.email),
    "aria-describedby": ((_b = error == null ? void 0 : error.fieldErrors) == null ? void 0 : _b.email) ? "username-error" : void 0,
    defaultValue: fields.email
  }), ((_c = error == null ? void 0 : error.fieldErrors) == null ? void 0 : _c.email) ? /* @__PURE__ */ import_react11.default.createElement("p", {
    className: "text-red-500 text-sm pt-1",
    role: "alert",
    id: "username-error"
  }, error == null ? void 0 : error.fieldErrors.email) : null)), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "space-y-1"
  }, /* @__PURE__ */ import_react11.default.createElement("label", {
    htmlFor: "password",
    className: "block text-sm font-medium text-gray-700"
  }, "Password"), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ import_react11.default.createElement("input", {
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    required: true,
    className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
    "aria-invalid": Boolean((_d = error == null ? void 0 : error.fieldErrors) == null ? void 0 : _d.password) || void 0,
    "aria-describedby": ((_e = error == null ? void 0 : error.fieldErrors) == null ? void 0 : _e.password) ? "password-error" : void 0,
    defaultValue: fields.password
  }), ((_f = error == null ? void 0 : error.fieldErrors) == null ? void 0 : _f.password) ? /* @__PURE__ */ import_react11.default.createElement("p", {
    className: "text-red-500 text-sm pt-1",
    role: "alert",
    id: "password-error"
  }, error == null ? void 0 : error.fieldErrors.password) : null)), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ import_react11.default.createElement("input", {
    id: "remember-me",
    name: "remember-me",
    type: "checkbox",
    className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
  }), /* @__PURE__ */ import_react11.default.createElement("label", {
    htmlFor: "remember-me",
    className: "ml-2 block text-sm text-gray-900"
  }, "Remember me")), /* @__PURE__ */ import_react11.default.createElement("div", {
    className: "text-sm"
  }, /* @__PURE__ */ import_react11.default.createElement(import_remix8.Link, {
    to: "/auth/forgot-password",
    className: "font-medium text-indigo-600 hover:text-indigo-500"
  }, "Forgot your password?"))), /* @__PURE__ */ import_react11.default.createElement("div", {
    id: "form-error-message"
  }, ((_g = error == null ? void 0 : error.formErrors) == null ? void 0 : _g.length) ? /* @__PURE__ */ import_react11.default.createElement("p", {
    className: "text-red-500 text-sm px-2 py-1 bg-red-50 rounded-sm",
    role: "alert"
  }, error == null ? void 0 : error.formErrors.join(" & ")) : null), /* @__PURE__ */ import_react11.default.createElement("div", null, /* @__PURE__ */ import_react11.default.createElement("button", {
    type: "submit",
    className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, "Sign in")));
};
var LoginForm_default = LoginForm;

// route-module:/Users/tirthgajjar/work/designbits/designbits/src/app/routes/auth/login.tsx
var import_zod = __toModule(require("zod"));
var LoginSchema = import_zod.z.object({
  email: import_zod.z.string().email().max(256),
  password: import_zod.z.string().min(8).max(20),
  redirectTo: import_zod.z.string().optional()
});
var badRequest = (data) => (0, import_remix9.json)(data, { status: 400 });
var internalError = (data) => (0, import_remix9.json)(data, { status: 500 });
var action = async ({ request }) => {
  const form = await request.formData();
  const fields = {
    email: form.get("email"),
    password: form.get("password"),
    redirectTo: form.get("redirectTo")
  };
  try {
    const validatedFields = LoginSchema.parse(fields);
    const { email, password, redirectTo = "/explore" } = validatedFields;
    const user2 = await login({ email, password });
    if (!user2) {
      return badRequest({
        error: {
          formErrors: [`Username/Password combination is incorrect`]
        },
        fields: {
          email,
          password,
          redirectTo
        }
      });
    }
    return createUserSession(user2.id, redirectTo);
  } catch (error) {
    if (error instanceof import_zod.ZodError) {
      return badRequest({
        fields,
        error: error.formErrors
      });
    } else {
      return internalError({
        fields,
        error: {
          formErrors: ["Something went wrong!"]
        }
      });
    }
  }
};
var Login = (props) => {
  const actionData = (0, import_remix9.useActionData)();
  const [searchParams] = (0, import_remix9.useSearchParams)();
  return /* @__PURE__ */ React.createElement(AuthLayout_default, {
    heading: /* @__PURE__ */ React.createElement(AuthHeading_default, {
      title: "Sign in to your account",
      altLabel: "Sign up",
      altLink: "/auth/sign-up"
    }),
    authForm: /* @__PURE__ */ React.createElement(LoginForm_default, {
      searchParams,
      actionData
    })
  });
};
var login_default = Login;

// route-module:/Users/tirthgajjar/work/designbits/designbits/src/app/routes/explore.tsx
var explore_exports = {};
__export(explore_exports, {
  default: () => explore_default
});
init_react();
var import_react22 = __toModule(require("react"));
var import_remix11 = __toModule(require_remix());

// src/app/components/CategoriesNav.tsx
init_react();
var import_outline4 = __toModule(require("@heroicons/react/outline"));

// src/app/components/icons/Stack.tsx
init_react();
var StackIcon = (props) => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.62732 2.59384C9.86193 2.47653 10.1381 2.47653 10.3727 2.59384L17.0393 5.92717C17.3217 6.06833 17.5 6.35688 17.5 6.67253C17.5 6.98817 17.3217 7.27672 17.0393 7.41788L10.3727 10.7512C10.1381 10.8685 9.86193 10.8685 9.62732 10.7512L2.96066 7.41788C2.67834 7.27672 2.5 6.98817 2.5 6.67253C2.5 6.35688 2.67834 6.06833 2.96066 5.92717L9.62732 2.59384ZM5.19672 6.67253L10 9.07416L14.8033 6.67253L10 4.27089L5.19672 6.67253Z"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.58816 9.62685C2.79398 9.2152 3.29455 9.04835 3.70619 9.25418L10.0002 12.4012L16.2942 9.25418C16.7058 9.04835 17.2064 9.2152 17.4122 9.62685C17.618 10.0385 17.4512 10.5391 17.0395 10.7449L10.3729 14.0782C10.1383 14.1955 9.86211 14.1955 9.6275 14.0782L2.96084 10.7449C2.54919 10.5391 2.38234 10.0385 2.58816 9.62685Z"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.58816 12.9667C2.79398 12.555 3.29455 12.3882 3.70619 12.594L10.0002 15.741L16.2942 12.594C16.7058 12.3882 17.2064 12.555 17.4122 12.9667C17.618 13.3783 17.4512 13.8789 17.0395 14.0847L10.3729 17.4181C10.1383 17.5354 9.86211 17.5354 9.6275 17.4181L2.96084 14.0847C2.54919 13.8789 2.38234 13.3783 2.58816 12.9667Z"
  }));
};
var Stack_default = StackIcon;

// src/app/components/CategoriesNav.tsx
var import_remix10 = __toModule(require_remix());

// src/app/components/icons/DataDisplay.tsx
init_react();
var import_react12 = __toModule(require("react"));
var DataDisplayIcon = (props) => {
  return /* @__PURE__ */ import_react12.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /* @__PURE__ */ import_react12.default.createElement("path", {
    fillRule: "evenodd",
    d: "M12 11.992a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ import_react12.default.createElement("path", {
    fillRule: "evenodd",
    d: "M16.207 8.785a1 1 0 010 1.415l-2.05 2.05a1 1 0 01-1.414-1.415l2.05-2.05a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ import_react12.default.createElement("path", {
    fillRule: "evenodd",
    d: "M12 4.961a8 8 0 00-5.24 14.046h10.48a8 8 0 002.313-8.682A8 8 0 0012 4.96zm-5.79-.153a10 10 0 0112.012 15.981 1 1 0 01-.622.218H6.4a1 1 0 01-.622-.218A10 10 0 016.21 4.808z",
    clipRule: "evenodd"
  }));
};
var DataDisplay_default = import_react12.default.memo(DataDisplayIcon);

// src/app/components/icons/Navigation.tsx
init_react();
var import_react13 = __toModule(require("react"));
var NavigationIcon = (props) => {
  return /* @__PURE__ */ import_react13.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /* @__PURE__ */ import_react13.default.createElement("path", {
    fillRule: "evenodd",
    d: "M7.586 4.578A2 2 0 019 3.993h10a1 1 0 01.707.292l2 2a1 1 0 010 1.415l-2 2a1 1 0 01-.707.293H9a2 2 0 01-2-2v-2a2 2 0 01.586-1.415zm11 1.415H9v2h9.586l1-1-1-1zM5.293 12.3A1 1 0 016 12.007h7a2 2 0 012 2v2a2 2 0 01-2 2H6a1 1 0 01-.707-.292l-2-2a1 1 0 010-1.415l2-2zm1.121 1.707l-1 1 1 1H13v-2H6.414z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ import_react13.default.createElement("path", {
    fillRule: "evenodd",
    d: "M12 15.992a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zM12 8a1 1 0 011 1v4a1 1 0 11-2 0V9a1 1 0 011-1zM12 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
};
var Navigation_default = import_react13.default.memo(NavigationIcon);

// src/app/components/icons/Feedback.tsx
init_react();
var import_react14 = __toModule(require("react"));
var FeedbackIcon = (props) => {
  return /* @__PURE__ */ import_react14.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /* @__PURE__ */ import_react14.default.createElement("path", {
    fillRule: "evenodd",
    d: "M14 6.996a1 1 0 011-1h1a5 5 0 110 10H7.414l2.293 2.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414l-2.293 2.293H16a3 3 0 000-6h-1a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
};
var Feedback_default = import_react14.default.memo(FeedbackIcon);

// src/app/components/icons/Chat.tsx
init_react();
var import_react15 = __toModule(require("react"));
var ChatIcon = (props) => {
  return /* @__PURE__ */ import_react15.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /* @__PURE__ */ import_react15.default.createElement("path", {
    fillRule: "evenodd",
    d: "M9.586 2.586A2 2 0 0111 2h9a2 2 0 012 2v10a1 1 0 01-1.707.707L17.586 12H11a2 2 0 01-2-2V4a2 2 0 01.586-1.414zM20 4h-9v6h7a1 1 0 01.707.293L20 11.586V4z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ import_react15.default.createElement("path", {
    fillRule: "evenodd",
    d: "M2.586 9.593A2 2 0 014 9.007h2a1 1 0 010 2H4v7.586L5.293 17.3A1 1 0 016 17.007h7v-2a1 1 0 112 0v2a2 2 0 01-2 2H6.414l-2.707 2.708A1 1 0 012 21.008v-10a2 2 0 01.586-1.415z",
    clipRule: "evenodd"
  }));
};
var Chat_default = import_react15.default.memo(ChatIcon);

// src/app/components/icons/Modal.tsx
init_react();
var import_react16 = __toModule(require("react"));
var ModalIcon = (props) => {
  return /* @__PURE__ */ import_react16.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /* @__PURE__ */ import_react16.default.createElement("path", {
    fillRule: "evenodd",
    d: "M6 5.007a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1v-12a1 1 0 00-1-1H6zm-3 1a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3v-12z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ import_react16.default.createElement("path", {
    fillRule: "evenodd",
    d: "M3 9a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
};
var Modal_default = import_react16.default.memo(ModalIcon);

// src/app/components/icons/OnBoarding.tsx
init_react();
var import_react17 = __toModule(require("react"));
var OnBoardingIcon = (props) => {
  return /* @__PURE__ */ import_react17.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /* @__PURE__ */ import_react17.default.createElement("path", {
    fillRule: "evenodd",
    d: "M11.293 2.293a1 1 0 011.414 0l9 9A1 1 0 0121 13h-2a1 1 0 01-.35-1.937L12 4.414l-6.65 6.65A1 1 0 015 13H3a1 1 0 01-.707-1.707l9-9z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ import_react17.default.createElement("path", {
    fillRule: "evenodd",
    d: "M5 11a1 1 0 011 1v7a1 1 0 001 1h10a1 1 0 001-1v-7a1 1 0 112 0v7a3 3 0 01-3 3H7a3 3 0 01-3-3v-7a1 1 0 011-1z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ import_react17.default.createElement("path", {
    fillRule: "evenodd",
    d: "M11 14.007a1 1 0 00-1 1v6a1 1 0 11-2 0v-6a3 3 0 013-3h2a3 3 0 013 3v6a1 1 0 11-2 0v-6a1 1 0 00-1-1h-2z",
    clipRule: "evenodd"
  }));
};
var OnBoarding_default = import_react17.default.memo(OnBoardingIcon);

// src/app/components/icons/Dropdown.tsx
init_react();
var import_react18 = __toModule(require("react"));
var DropdownIcon = (props) => {
  return /* @__PURE__ */ import_react18.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /* @__PURE__ */ import_react18.default.createElement("path", {
    fillRule: "evenodd",
    d: "M12 8.996a1 1 0 011 1v10a1 1 0 11-2 0v-10a1 1 0 011-1z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ import_react18.default.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 15.29a1 1 0 010 1.413l-4 4a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ import_react18.default.createElement("path", {
    fillRule: "evenodd",
    d: "M7.293 15.29a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.413l-4-4a1 1 0 010-1.414zM3 3.996a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
};
var Dropdown_default = import_react18.default.memo(DropdownIcon);

// src/app/components/icons/Form.tsx
init_react();
var import_react19 = __toModule(require("react"));
var FormIcon = (props) => {
  return /* @__PURE__ */ import_react19.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ import_react19.default.createElement("path", {
    fillRule: "evenodd",
    d: "M7 4a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H7zM4 5a3 3 0 013-3h10a3 3 0 013 3v14a3 3 0 01-3 3H7a3 3 0 01-3-3V5z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ import_react19.default.createElement("path", {
    fillRule: "evenodd",
    d: "M8 7.007a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zM8 10.992a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zM8 15a1 1 0 011-1h4a1 1 0 110 2H9a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
};
var Form_default = import_react19.default.memo(FormIcon);

// src/app/components/icons/Toggle.tsx
init_react();
var import_react20 = __toModule(require("react"));
var ToggleIcon = (props) => {
  return /* @__PURE__ */ import_react20.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /* @__PURE__ */ import_react20.default.createElement("path", {
    fillRule: "evenodd",
    d: "M8 11.007a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ import_react20.default.createElement("path", {
    fillRule: "evenodd",
    d: "M8 7a5 5 0 000 10h8a5 5 0 000-10H8zm-7 5a7 7 0 017-7h8a7 7 0 110 14H8a7 7 0 01-7-7z",
    clipRule: "evenodd"
  }));
};
var Toggle_default = import_react20.default.memo(ToggleIcon);

// src/app/components/icons/Table.tsx
init_react();
var import_react21 = __toModule(require("react"));
var TableIcon = (props) => {
  return /* @__PURE__ */ import_react21.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /* @__PURE__ */ import_react21.default.createElement("path", {
    fillRule: "evenodd",
    d: "M6 5.007a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1v-12a1 1 0 00-1-1H6zm-3 1a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3v-12z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ import_react21.default.createElement("path", {
    fillRule: "evenodd",
    d: "M3 10.007a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }), /* @__PURE__ */ import_react21.default.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3.007a1 1 0 011 1v16a1 1 0 11-2 0v-16a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
};
var Table_default = import_react21.default.memo(TableIcon);

// src/app/components/CategoriesNav.tsx
var routePrefix = "/explore";
var navItems = [
  {
    name: "All",
    to: "/",
    icon: /* @__PURE__ */ React.createElement(Stack_default, {
      width: "24",
      height: "24",
      role: "presentation"
    }),
    active: true
  },
  {
    name: "Lists",
    to: "/lists",
    icon: /* @__PURE__ */ React.createElement(import_outline4.ViewListIcon, {
      width: "24",
      height: "24",
      role: "presentation"
    })
  },
  {
    name: "Data display",
    to: "/data-display",
    icon: /* @__PURE__ */ React.createElement(DataDisplay_default, {
      width: "24",
      height: "24",
      role: "presentation"
    })
  },
  {
    name: "Navigation",
    to: "/navigation",
    icon: /* @__PURE__ */ React.createElement(Navigation_default, {
      width: "24",
      height: "24",
      role: "presentation"
    })
  },
  {
    name: "Feedback",
    to: "/feedback",
    icon: /* @__PURE__ */ React.createElement(Feedback_default, {
      width: "24",
      height: "24",
      role: "presentation"
    })
  },
  {
    name: "Chat",
    to: "/chat",
    icon: /* @__PURE__ */ React.createElement(Chat_default, {
      width: "24",
      height: "24",
      role: "presentation"
    })
  },
  {
    name: "Modal",
    to: "/modal",
    icon: /* @__PURE__ */ React.createElement(Modal_default, {
      width: "24",
      height: "24",
      role: "presentation"
    })
  },
  {
    name: "Onboarding",
    to: "/onboarding",
    icon: /* @__PURE__ */ React.createElement(OnBoarding_default, {
      width: "24",
      height: "24",
      role: "presentation"
    })
  },
  {
    name: "Dropdown",
    to: "/dropdown",
    icon: /* @__PURE__ */ React.createElement(Dropdown_default, {
      width: "24",
      height: "24",
      role: "presentation"
    })
  },
  {
    name: "Notification",
    to: "/notification",
    icon: /* @__PURE__ */ React.createElement(import_outline4.BellIcon, {
      width: "24",
      height: "24",
      role: "presentation"
    })
  },
  {
    name: "Forms",
    to: "/forms",
    icon: /* @__PURE__ */ React.createElement(Form_default, {
      width: "24",
      height: "24",
      role: "presentation"
    })
  },
  {
    name: "Toggles",
    to: "/toggles",
    icon: /* @__PURE__ */ React.createElement(Toggle_default, {
      width: "24",
      height: "24",
      role: "presentation"
    })
  },
  {
    name: "Tables",
    to: "/tables",
    icon: /* @__PURE__ */ React.createElement(Table_default, {
      width: "24",
      height: "24",
      role: "presentation"
    })
  }
];
var CategoriesNav = () => {
  return /* @__PURE__ */ React.createElement("nav", {
    className: "text-sm space-y-2"
  }, navItems.map(({ name, to, icon }) => /* @__PURE__ */ React.createElement(import_remix10.NavLink, {
    key: name,
    to: routePrefix + to,
    className: ({ isActive }) => classNames("flex items-center mx-4 px-2 py-2.5 text-gray-500 hover:text-gray-700 font-medium hover:bg-indigo-50 rounded-md space-x-2", isActive ? "bg-indigo-100 text-indigo-700 font-semibold" : "")
  }, icon, /* @__PURE__ */ React.createElement("span", null, name))));
};
var CategoriesNav_default = CategoriesNav;

// route-module:/Users/tirthgajjar/work/designbits/designbits/src/app/routes/explore.tsx
var ExploreRoute = () => {
  return /* @__PURE__ */ import_react22.default.createElement(Layout, null, /* @__PURE__ */ import_react22.default.createElement("div", {
    className: "flex-shrink-0 w-56"
  }, /* @__PURE__ */ import_react22.default.createElement(CategoriesNav_default, null)), /* @__PURE__ */ import_react22.default.createElement("div", {
    className: "flex-1 flex-col"
  }, /* @__PURE__ */ import_react22.default.createElement(import_remix11.Outlet, null)));
};
var explore_default = ExploreRoute;

// route-module:/Users/tirthgajjar/work/designbits/designbits/src/app/routes/explore/$category.tsx
var category_exports = {};
__export(category_exports, {
  default: () => category_default,
  loader: () => loader
});
init_react();
var import_remix12 = __toModule(require_remix());
var loader = async ({ params }) => {
  const categoryId = params.category;
  return { categoryId };
};
var CategoryPage = ({ children }) => {
  const { categoryId } = (0, import_remix12.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", {
    className: "px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-gray-900 text-3xl font-bold leading-tight"
  }, categoryId))), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("div", {
    className: "sm:px-6 lg:px-8"
  }, children)));
};
var category_default = CategoryPage;

// route-module:/Users/tirthgajjar/work/designbits/designbits/src/app/routes/explore/index.tsx
var explore_exports2 = {};
__export(explore_exports2, {
  default: () => explore_default2
});
init_react();

// src/app/components/interaction-card/index.tsx
init_react();

// src/app/components/icons/Comment.tsx
init_react();
var import_react23 = __toModule(require("react"));
var CommentIcon = (props) => {
  return /* @__PURE__ */ import_react23.default.createElement("svg", __spreadValues({
    width: "24",
    height: "24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ import_react23.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.667 3.995a1.333 1.333 0 0 0-1.334 1.333v7.058l1.529-1.53a.667.667 0 0 1 .471-.194h6a1.333 1.333 0 0 0 1.334-1.334v-4a1.333 1.333 0 0 0-1.334-1.333H4.667ZM2.78 3.443c.5-.5 1.178-.781 1.886-.781h6.666A2.667 2.667 0 0 1 14 5.328v4a2.667 2.667 0 0 1-2.667 2.667H5.61l-2.47 2.471A.667.667 0 0 1 2 13.995V5.328c0-.707.28-1.385.781-1.885Z"
  }), /* @__PURE__ */ import_react23.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.667 6c0-.368.298-.667.666-.667h5.334a.667.667 0 1 1 0 1.334H5.333A.667.667 0 0 1 4.667 6ZM4.667 8.672c0-.369.298-.667.666-.667h4a.667.667 0 0 1 0 1.333h-4a.667.667 0 0 1-.666-.666Z"
  }));
};
var Comment_default = import_react23.default.memo(CommentIcon);

// src/app/components/interaction-card/index.tsx
var import_remix13 = __toModule(require_remix());
var articles = [
  {
    id: 1,
    title: "Bottom navigation drag utility",
    href: "/interaction/1",
    source: {
      logo: "https://basecamp.com/basecamp-icon-196x196.png",
      name: "Basecamp"
    },
    author: {
      name: "Leslie",
      profile: "/leslie"
    },
    likes: 106,
    comments: {
      count: 6
    },
    views: "1.2k",
    backgroundColorClass: "bg-yellow-50"
  },
  {
    id: 2,
    title: "Collapse side navigation on-hover",
    href: "/interaction/2",
    source: {
      logo: "//logo.clearbit.com/loom.com",
      name: "Loom"
    },
    author: {
      name: "Leslie",
      profile: "/leslie"
    },
    likes: 106,
    comments: {
      count: 6
    },
    views: "1.2k",
    backgroundColorClass: "bg-indigo-50"
  },
  {
    id: 3,
    title: "Icon transition micro animation",
    href: "/interaction/3",
    source: {
      logo: "//logo.clearbit.com/telegram.org",
      name: "Telegram"
    },
    author: {
      name: "Wade Warren",
      profile: "/wade-warren"
    },
    likes: 106,
    comments: {
      count: 6
    },
    views: "1.2k",
    backgroundColorClass: "bg-gray-200"
  },
  {
    id: 4,
    title: "Swipe down to refresh animation",
    href: "/interaction/4",
    source: {
      logo: "//logo.clearbit.com/dribbble.com/",
      name: "Dribbble"
    },
    author: {
      name: "Leslie",
      profile: "/leslie"
    },
    likes: 106,
    comments: {
      count: 6
    },
    views: "1.2k",
    backgroundColorClass: "bg-orange-50"
  }
];
function InteractionCard() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-4 py-8 sm:px-6 sm:py-8 lg:px-0"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "sr-only"
  }, "artciles"), /* @__PURE__ */ React.createElement("div", {
    className: "grid gap-x-6 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 xl:grid-cols-4"
  }, articles.map((article) => /* @__PURE__ */ React.createElement("div", {
    key: article.id
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full bg-gray-200 rounded-lg overflow-hidden relative"
  }, /* @__PURE__ */ React.createElement("a", {
    className: classNames(article.backgroundColorClass, "aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 h-60 w-full hover:opacity-75 block"),
    href: article.href
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-3"
  }, /* @__PURE__ */ React.createElement(import_remix13.Link, {
    to: "/test",
    className: "flex space-x-1 items-center text-gray-800 font-semibold text-xs"
  }, /* @__PURE__ */ React.createElement("img", {
    src: article.source.logo,
    alt: article.source.name,
    className: "w-5 h-5 rounded-full"
  }), /* @__PURE__ */ React.createElement("span", null, article.source.name))))), /* @__PURE__ */ React.createElement("h3", {
    className: "mt-3 text-gray-700 text-sm font-semibold"
  }, /* @__PURE__ */ React.createElement("a", {
    href: article.href
  }, article.title)), /* @__PURE__ */ React.createElement("div", {
    className: "flex text-xs mt-1 space-x-1 text-gray-400"
  }, /* @__PURE__ */ React.createElement("a", {
    href: article.author.profile,
    className: "text-indigo-700"
  }, article.author.name), /* @__PURE__ */ React.createElement("span", null, "\xB7"), /* @__PURE__ */ React.createElement("span", null, "6 hrs ago"), /* @__PURE__ */ React.createElement("span", null, "\xB7"), /* @__PURE__ */ React.createElement("span", null, article.views)), /* @__PURE__ */ React.createElement("div", {
    className: "flex mt-2 text-gray-500 text-xs space-x-4"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "space-x-1 flex items-center hover:text-indigo-500 hover:bg-indigo-50 focus:text-indigo-500 focus:bg-indigo-50 px-1 rounded-sm py-0.5"
  }, /* @__PURE__ */ React.createElement(Like_default, {
    height: 16,
    width: 16
  }), /* @__PURE__ */ React.createElement("span", null, article.likes)), /* @__PURE__ */ React.createElement("button", {
    className: "space-x-1 flex items-center hover:text-indigo-500 hover:bg-indigo-50 focus:text-indigo-500 focus:bg-indigo-50 px-1 rounded-sm py-0.5"
  }, /* @__PURE__ */ React.createElement(Comment_default, {
    height: 16,
    width: 16
  }), /* @__PURE__ */ React.createElement("span", null, article.comments.count))))))));
}

// route-module:/Users/tirthgajjar/work/designbits/designbits/src/app/routes/explore/index.tsx
var ExploreIndexRoute = ({ children }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", {
    className: "px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-gray-900 text-3xl font-bold leading-tight"
  }, "All interactions"))), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("div", {
    className: "sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement(InteractionCard, null))));
};
var explore_default2 = ExploreIndexRoute;

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/auth/forgot-password": {
    id: "routes/auth/forgot-password",
    parentId: "root",
    path: "auth/forgot-password",
    index: void 0,
    caseSensitive: void 0,
    module: forgot_password_exports
  },
  "routes/interaction/$id": {
    id: "routes/interaction/$id",
    parentId: "root",
    path: "interaction/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/auth/sign-up": {
    id: "routes/auth/sign-up",
    parentId: "root",
    path: "auth/sign-up",
    index: void 0,
    caseSensitive: void 0,
    module: sign_up_exports
  },
  "routes/auth/login": {
    id: "routes/auth/login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/explore": {
    id: "routes/explore",
    parentId: "root",
    path: "explore",
    index: void 0,
    caseSensitive: void 0,
    module: explore_exports
  },
  "routes/explore/$category": {
    id: "routes/explore/$category",
    parentId: "routes/explore",
    path: ":category",
    index: void 0,
    caseSensitive: void 0,
    module: category_exports
  },
  "routes/explore/index": {
    id: "routes/explore/index",
    parentId: "routes/explore",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: explore_exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy90aXJ0aGdhamphci93b3JrL2Rlc2lnbmJpdHMvZGVzaWduYml0cy9zcmMvYXBwL3Jvb3QudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL0xheW91dC50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvTG9nby50c3giLCAiLi4vLi4vYXBwL3V0aWxzL2NsYXNzbmFtZXMudHMiLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvTGluay50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvaWNvbnMvRXhwbG9yZS50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvaWNvbnMvQ29sbGVjdGlvbnMudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2ljb25zL0dhbGxlcnkudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2ljb25zL0xpa2UudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL1NlYXJjaEJveC50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvQnV0dG9uLnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9pY29ucy9VcGxvYWQudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2NvbW1vbi9Eb2N1bWVudC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy90aXJ0aGdhamphci93b3JrL2Rlc2lnbmJpdHMvZGVzaWduYml0cy9zcmMvYXBwL3JvdXRlcy9hdXRoL2ZvcmdvdC1wYXNzd29yZC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy90aXJ0aGdhamphci93b3JrL2Rlc2lnbmJpdHMvZGVzaWduYml0cy9zcmMvYXBwL3JvdXRlcy9pbnRlcmFjdGlvbi8kaWQudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL0F2YXRhci50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvaWNvbnMvQW5kcm9pZC50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvSW50ZXJhY3Rpb25GZWVkYmFjay50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy90aXJ0aGdhamphci93b3JrL2Rlc2lnbmJpdHMvZGVzaWduYml0cy9zcmMvYXBwL3JvdXRlcy9hdXRoL3NpZ24tdXAudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2F1dGgvQXV0aEhlYWRpbmcudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL0F1dGhMYXlvdXQudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvdGlydGhnYWpqYXIvd29yay9kZXNpZ25iaXRzL2Rlc2lnbmJpdHMvc3JjL2FwcC9yb3V0ZXMvYXV0aC9sb2dpbi50c3giLCAiLi4vLi4vYXBwL3V0aWxzL3Nlc3Npb24uc2VydmVyLnRzIiwgIi4uLy4uL2FwcC91dGlscy9kYi5zZXJ2ZXIudHMiLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvYXV0aC9Mb2dpbkZvcm0udHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvdGlydGhnYWpqYXIvd29yay9kZXNpZ25iaXRzL2Rlc2lnbmJpdHMvc3JjL2FwcC9yb3V0ZXMvZXhwbG9yZS50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvQ2F0ZWdvcmllc05hdi50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvaWNvbnMvU3RhY2sudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2ljb25zL0RhdGFEaXNwbGF5LnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9pY29ucy9OYXZpZ2F0aW9uLnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9pY29ucy9GZWVkYmFjay50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvaWNvbnMvQ2hhdC50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvaWNvbnMvTW9kYWwudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2ljb25zL09uQm9hcmRpbmcudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2ljb25zL0Ryb3Bkb3duLnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9pY29ucy9Gb3JtLnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9pY29ucy9Ub2dnbGUudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2ljb25zL1RhYmxlLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL3RpcnRoZ2FqamFyL3dvcmsvZGVzaWduYml0cy9kZXNpZ25iaXRzL3NyYy9hcHAvcm91dGVzL2V4cGxvcmUvJGNhdGVnb3J5LnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL3RpcnRoZ2FqamFyL3dvcmsvZGVzaWduYml0cy9kZXNpZ25iaXRzL3NyYy9hcHAvcm91dGVzL2V4cGxvcmUvaW5kZXgudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2ludGVyYWN0aW9uLWNhcmQvaW5kZXgudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2ljb25zL0NvbW1lbnQudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvdGlydGhnYWpqYXIvd29yay9kZXNpZ25iaXRzL2Rlc2lnbmJpdHMvc3JjL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy90aXJ0aGdhamphci93b3JrL2Rlc2lnbmJpdHMvZGVzaWduYml0cy9zcmMvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy90aXJ0aGdhamphci93b3JrL2Rlc2lnbmJpdHMvZGVzaWduYml0cy9zcmMvYXBwL3JvdXRlcy9hdXRoL2ZvcmdvdC1wYXNzd29yZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL3RpcnRoZ2FqamFyL3dvcmsvZGVzaWduYml0cy9kZXNpZ25iaXRzL3NyYy9hcHAvcm91dGVzL2ludGVyYWN0aW9uLyRpZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL3RpcnRoZ2FqamFyL3dvcmsvZGVzaWduYml0cy9kZXNpZ25iaXRzL3NyYy9hcHAvcm91dGVzL2F1dGgvc2lnbi11cC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL3RpcnRoZ2FqamFyL3dvcmsvZGVzaWduYml0cy9kZXNpZ25iaXRzL3NyYy9hcHAvcm91dGVzL2F1dGgvbG9naW4udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy90aXJ0aGdhamphci93b3JrL2Rlc2lnbmJpdHMvZGVzaWduYml0cy9zcmMvYXBwL3JvdXRlcy9leHBsb3JlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvVXNlcnMvdGlydGhnYWpqYXIvd29yay9kZXNpZ25iaXRzL2Rlc2lnbmJpdHMvc3JjL2FwcC9yb3V0ZXMvZXhwbG9yZS8kY2F0ZWdvcnkudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy90aXJ0aGdhamphci93b3JrL2Rlc2lnbmJpdHMvZGVzaWduYml0cy9zcmMvYXBwL3JvdXRlcy9leHBsb3JlL2luZGV4LnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvYXV0aC9mb3Jnb3QtcGFzc3dvcmRcIjoge1xuICAgIGlkOiBcInJvdXRlcy9hdXRoL2ZvcmdvdC1wYXNzd29yZFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImF1dGgvZm9yZ290LXBhc3N3b3JkXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMvaW50ZXJhY3Rpb24vJGlkXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW50ZXJhY3Rpb24vJGlkXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiaW50ZXJhY3Rpb24vOmlkXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTJcbiAgfSxcbiAgXCJyb3V0ZXMvYXV0aC9zaWduLXVwXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYXV0aC9zaWduLXVwXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiYXV0aC9zaWduLXVwXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfSxcbiAgXCJyb3V0ZXMvYXV0aC9sb2dpblwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2F1dGgvbG9naW5cIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJhdXRoL2xvZ2luXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTRcbiAgfSxcbiAgXCJyb3V0ZXMvZXhwbG9yZVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2V4cGxvcmVcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJleHBsb3JlXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTVcbiAgfSxcbiAgXCJyb3V0ZXMvZXhwbG9yZS8kY2F0ZWdvcnlcIjoge1xuICAgIGlkOiBcInJvdXRlcy9leHBsb3JlLyRjYXRlZ29yeVwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9leHBsb3JlXCIsXG4gICAgcGF0aDogXCI6Y2F0ZWdvcnlcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNlxuICB9LFxuICBcInJvdXRlcy9leHBsb3JlL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvZXhwbG9yZS9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9leHBsb3JlXCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlN1xuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCJcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHQsXG4pIHtcbiAgbGV0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+LFxuICApXG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKVxuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSlcbn1cbiIsICJpbXBvcnQgeyBPdXRsZXQsIHVzZUNhdGNoIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIn4vc3R5bGVzL3RhaWx3aW5kLmNzc1wiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCJ+L2NvbXBvbmVudHMvTGF5b3V0XCJcbmltcG9ydCBMaW5rIGZyb20gXCJ+L2NvbXBvbmVudHMvTGlua1wiXG5pbXBvcnQgRG9jdW1lbnQgZnJvbSBcIn4vY29tcG9uZW50cy9jb21tb24vRG9jdW1lbnRcIlxuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvYXBwI2xpbmtzXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly9yc21zLm1lL2ludGVyL2ludGVyLmNzc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgIGhyZWY6IHN0eWxlcyxcbiAgICB9LFxuICBdXG59XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNkZWZhdWx0LWV4cG9ydFxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI3JvdXRlLWZpbGVuYW1lc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudD5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8L0RvY3VtZW50PlxuICApXG59XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2RvY3MvZW4vdjEvYXBpL2NvbnZlbnRpb25zI2Vycm9yYm91bmRhcnlcbi8vIFRPRE86IGNyZWF0ZSBvdXIgb3duIEVycm9yQm91bmRhcnlcbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfTogeyBlcnJvcjogRXJyb3IgfSkge1xuICBjb25zb2xlLmVycm9yKGVycm9yKVxuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudCB0aXRsZT1cIkVycm9yIVwiPlxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+VGhlcmUgd2FzIGFuIGVycm9yPC9oMT5cbiAgICAgICAgICA8cD57ZXJyb3IubWVzc2FnZX08L3A+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBIZXksIGRldmVsb3BlciwgeW91IHNob3VsZCByZXBsYWNlIHRoaXMgd2l0aCB3aGF0IHlvdSB3YW50IHlvdXJcbiAgICAgICAgICAgIHVzZXJzIHRvIHNlZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Eb2N1bWVudD5cbiAgKVxufVxuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9kb2NzL2VuL3YxL2FwaS9jb252ZW50aW9ucyNjYXRjaGJvdW5kYXJ5XG4vLyBUT0RPOiB1cGRhdGUgY2F0Y2ggYm91bmRhcnlcbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpXG5cbiAgbGV0IG1lc3NhZ2VcbiAgc3dpdGNoIChjYXVnaHQuc3RhdHVzKSB7XG4gICAgY2FzZSA0MDE6XG4gICAgICBtZXNzYWdlID0gKFxuICAgICAgICA8cD5cbiAgICAgICAgICBPb3BzISBMb29rcyBsaWtlIHlvdSB0cmllZCB0byB2aXNpdCBhIHBhZ2UgdGhhdCB5b3UgZG8gbm90IGhhdmUgYWNjZXNzXG4gICAgICAgICAgdG8uXG4gICAgICAgIDwvcD5cbiAgICAgIClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSA0MDQ6XG4gICAgICBtZXNzYWdlID0gPHA+UGxlYXNlIGNoZWNrIHRoZSBVUkwgaW4gdGhlIGFkZHJlc3MgYmFyIGFuZCB0cnkgYWdhaW4uPC9wPlxuICAgICAgYnJlYWtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoY2F1Z2h0LmRhdGEgfHwgY2F1Z2h0LnN0YXR1c1RleHQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudCB0aXRsZT17YCR7Y2F1Z2h0LnN0YXR1c30gJHtjYXVnaHQuc3RhdHVzVGV4dH1gfT5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBteS1hdXRvIHB4LTQgcHktMTYgbWluLWgtZnVsbCBiZy13aGl0ZSBzbTpweC02IHNtOnB5LTI0IG1kOmdyaWQgbWQ6cGxhY2UtaXRlbXMtY2VudGVyIGxnOnB4LThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctbWF4XCI+XG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJzbTpmbGV4XCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTYwMCB0ZXh0LTR4bCBmb250LWV4dHJhYm9sZCBzbTp0ZXh0LTV4bFwiPlxuICAgICAgICAgICAgICAgIHtjYXVnaHQuc3RhdHVzfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206bWwtNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206cGwtNiBzbTpib3JkZXItbCBzbTpib3JkZXItZ3JheS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwIHRleHQtNHhsIGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXRpZ2h0IHNtOnRleHQtNXhsXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjYXVnaHQuc3RhdHVzVGV4dH1cbiAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xIHRleHQtZ3JheS01MDAgdGV4dC1iYXNlXCI+e21lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC0xMCBzcGFjZS14LTMgc206cGwtNiBzbTpib3JkZXItbCBzbTpib3JkZXItdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIHRvPVwiL2V4cGxvcmVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtNCBweS0yIHRleHQtd2hpdGUgdGV4dC1zbSBmb250LW1lZGl1bSBiZy1pbmRpZ28tNjAwIGhvdmVyOmJnLWluZGlnby03MDAgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBzaGFkb3ctc20gZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpyaW5nLW9mZnNldC0yXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRXhwbG9yZVxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtNCBweS0yIHRleHQtaW5kaWdvLTcwMCB0ZXh0LXNtIGZvbnQtbWVkaXVtIGJnLWluZGlnby0xMDAgaG92ZXI6YmctaW5kaWdvLTIwMCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6cmluZy1vZmZzZXQtMlwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEdvIGJhY2sgaG9tZVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApXG59XG4iLCAiaW1wb3J0IHsgRGlzY2xvc3VyZSwgTWVudSwgVHJhbnNpdGlvbiB9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiXG5pbXBvcnQgeyBCZWxsSWNvbiwgTWVudUljb24sIFhJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgRGVzaWduQml0c0xvZ28gZnJvbSBcIi4vTG9nb1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiLi4vdXRpbHMvY2xhc3NuYW1lc1wiXG5pbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCJcbmltcG9ydCBFeHBsb3JlSWNvbiBmcm9tIFwiLi9pY29ucy9FeHBsb3JlXCJcbmltcG9ydCBDb2xsZWN0aW9uc0ljb24gZnJvbSBcIi4vaWNvbnMvQ29sbGVjdGlvbnNcIlxuaW1wb3J0IEdhbGxlcnlJY29uIGZyb20gXCIuL2ljb25zL0dhbGxlcnlcIlxuaW1wb3J0IExpa2VJY29uIGZyb20gXCIuL2ljb25zL0xpa2VcIlxuaW1wb3J0IFNlYXJjaEJveCBmcm9tIFwiLi9TZWFyY2hCb3hcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIlxuaW1wb3J0IFVwbG9hZEljb24gZnJvbSBcIi4vaWNvbnMvVXBsb2FkXCJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVtaXhcIlxuXG5jb25zdCB1c2VyID0ge1xuICBuYW1lOiBcIlRvbSBDb29rXCIsXG4gIGVtYWlsOiBcInRvbUBleGFtcGxlLmNvbVwiLFxuICBpbWFnZVVybDpcbiAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDcyMDk5NjQ1Nzg1LTU2NThhYmY0ZmY0ZT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MFwiLFxufVxuXG5jb25zdCBpY29uUHJvcHMgPSB7XG4gIGhlaWdodDogXCIyNFwiLFxuICB3aWR0aDogXCIyNFwiLFxufVxuXG5jb25zdCBuYXZpZ2F0aW9uID0gW1xuICB7IG5hbWU6IFwiRXhwbG9yZVwiLCBocmVmOiBcIi9leHBsb3JlXCIsIGljb246IDxFeHBsb3JlSWNvbiB7Li4uaWNvblByb3BzfSAvPiB9LFxuICB7XG4gICAgbmFtZTogXCJDb2xsZWN0aW9uc1wiLFxuICAgIGhyZWY6IFwiL2NvbGxlY3Rpb25zXCIsXG4gICAgaWNvbjogPENvbGxlY3Rpb25zSWNvbiB7Li4uaWNvblByb3BzfSAvPixcbiAgfSxcbiAgeyBuYW1lOiBcIkxpa2VkXCIsIGhyZWY6IFwiL2xpa2VkXCIsIGljb246IDxMaWtlSWNvbiB7Li4uaWNvblByb3BzfSAvPiB9LFxuICB7XG4gICAgbmFtZTogXCJNeSBVcGxvYWRzXCIsXG4gICAgaHJlZjogXCIvbXktdXBsb2Fkc1wiLFxuICAgIGljb246IDxHYWxsZXJ5SWNvbiB7Li4uaWNvblByb3BzfSAvPixcbiAgfSxcbl1cblxuY29uc3QgdXNlck5hdmlnYXRpb24gPSBbXG4gIHsgbmFtZTogXCJZb3VyIFByb2ZpbGVcIiwgaHJlZjogXCIjXCIgfSxcbiAgeyBuYW1lOiBcIlNldHRpbmdzXCIsIGhyZWY6IFwiI1wiIH0sXG4gIHsgbmFtZTogXCJTaWduIG91dFwiLCBocmVmOiBcIiNcIiB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLWZ1bGxcIj5cbiAgICAgICAgPERpc2Nsb3N1cmUgYXM9XCJuYXZcIiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3ctc21cIj5cbiAgICAgICAgICB7KHsgb3BlbiB9KSA9PiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBoLTE2XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtc2hyaW5rLTAgaXRlbXMtY2VudGVyIHctNTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJweC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGVzaWduQml0c0xvZ28gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bmF2XG4gICAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm5hdmlnYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJtYWluLW5hdlwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmZsZXggc206LW15LXB4IHNtOnNwYWNlLXgtOFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7bmF2aWdhdGlvbi5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2l0ZW0uaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYm9yZGVyLWluZGlnby03MDAgdGV4dC1pbmRpZ28tNzAwIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1pbmRpZ28tNTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBwdC0xIHB4LTEgdGV4dC1zbSBmb250LW1lZGl1bSBib3JkZXItYi0yIHNwYWNlLXgtMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5pY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNwYWNlLXgtNiBzbTpmbGV4IHNtOml0ZW1zLWNlbnRlciBzbTptbC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hCb3ggLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VXBsb2FkSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VXBsb2FkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICB7LyogUHJvZmlsZSBkcm9wZG93biAqL31cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUgYXM9XCJkaXZcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5CdXR0b24gY2xhc3NOYW1lPVwiZmxleCB0ZXh0LXNtIGJnLXdoaXRlIHJvdW5kZWQtZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpyaW5nLW9mZnNldC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIHVzZXIgbWVudTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctOCBoLTggcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3VzZXIuaW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyPVwidHJhbnNpdGlvbiBlYXNlLW91dCBkdXJhdGlvbi0yMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJGcm9tPVwidHJhbnNmb3JtIG9wYWNpdHktMCBzY2FsZS05NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRlclRvPVwidHJhbnNmb3JtIG9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT1cInRyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi03NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZUZyb209XCJ0cmFuc2Zvcm0gb3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlVG89XCJ0cmFuc2Zvcm0gb3BhY2l0eS0wIHNjYWxlLTk1XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtcyBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0wIG10LTIgcHktMSB3LTQ4IGJnLXdoaXRlIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIHNoYWRvdy1sZyBvcmlnaW4tdG9wLXJpZ2h0IHJpbmctMSByaW5nLWJsYWNrIHJpbmctb3BhY2l0eS01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyTmF2aWdhdGlvbi5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9e2l0ZW0ubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgYWN0aXZlIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlID8gXCJiZy1ncmF5LTEwMFwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmxvY2sgcHgtNCBweS0yIHRleHQtZ3JheS03MDAgdGV4dC1zbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtcz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciAtbXItMiBzbTpoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIE1vYmlsZSBtZW51IGJ1dHRvbiAqL31cbiAgICAgICAgICAgICAgICAgICAgPERpc2Nsb3N1cmUuQnV0dG9uIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTIgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LWdyYXktNTAwIGhvdmVyOmJnLWdyYXktMTAwIGJnLXdoaXRlIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6cmluZy1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIG1haW4gbWVudTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICB7b3BlbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxYSWNvbiBjbGFzc05hbWU9XCJibG9jayB3LTYgaC02XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctNiBoLTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0Rpc2Nsb3N1cmUuQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxEaXNjbG9zdXJlLlBhbmVsIGNsYXNzTmFtZT1cInNtOmhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItMyBwdC0yIHNwYWNlLXktMVwiPlxuICAgICAgICAgICAgICAgICAge25hdmlnYXRpb24ubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8RGlzY2xvc3VyZS5CdXR0b24ga2V5PXtpdGVtLm5hbWV9IGFzPVwiZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtpdGVtLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJiZy1pbmRpZ28tNTAgYm9yZGVyLWluZGlnby01MDAgdGV4dC1pbmRpZ28tNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1ncmF5LTYwMCBob3ZlcjpiZy1ncmF5LTUwIGhvdmVyOmJvcmRlci1ncmF5LTMwMCBob3Zlcjp0ZXh0LWdyYXktODAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJibG9jayBwbC0zIHByLTQgcHktMiB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gYm9yZGVyLWwtNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvRGlzY2xvc3VyZS5CdXR0b24+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTMgcHQtNCBib3JkZXItdCBib3JkZXItZ3JheS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcHgtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8RGVzaWduQml0c0xvZ28gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTgwMCB0ZXh0LWJhc2UgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQtc20gZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgbWwtYXV0byBwLTEgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LWdyYXktNTAwIGJnLXdoaXRlIHJvdW5kZWQtZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpyaW5nLW9mZnNldC0yXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5WaWV3IG5vdGlmaWNhdGlvbnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPEJlbGxJY29uIGNsYXNzTmFtZT1cInctNiBoLTZcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zIHNwYWNlLXktMVwiPlxuICAgICAgICAgICAgICAgICAgICB7dXNlck5hdmlnYXRpb24ubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxEaXNjbG9zdXJlLkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcz1cImFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTgwMCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gaG92ZXI6YmctZ3JheS0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9EaXNjbG9zdXJlLkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9EaXNjbG9zdXJlLlBhbmVsPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9EaXNjbG9zdXJlPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBweS0xMFwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVzaWduQml0c0xvZ28ocHJvcHM6IFJlYWN0LlNWR1Byb3BzPFNWR1NWR0VsZW1lbnQ+KSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJkZXNpZ24tYml0cy1sb2dvLXRpdGxlXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTAyIDI0XCJcbiAgICAgIGhlaWdodD1cIjMyXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8dGl0bGUgaWQ9XCJkZXNpZ24tYml0cy1sb2dvLXRpdGxlXCI+RGVzaWduQml0cyBsb2dvPC90aXRsZT5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNNS4yMjczIDE4YzMuNTQ1NCAwIDUuNzk1NC0yLjE4MTggNS43OTU0LTUuODE4MnMtMi4yNS01LjgxODItNS44NDA5LTUuODE4MkguNzVWMThoNC40NzczWk0zLjkwOSAxNS4zMTgyVjkuMDQ1NWgxLjExMzZjMS44MTgyIDAgMi44MTgyLjcwNDUgMi44MTgyIDMuMTM2M3MtMSAzLjEzNjQtMi43MjczIDMuMTM2NEgzLjkwOTFaTTEyLjQ4NDQgMThoOC4zNjM2di0yLjU0NTVoLTUuMjA0NXYtMmg0Ljc5NTR2LTIuNTQ1NGgtNC43OTU0di0yaDUuMjI3MlY2LjM2MzZoLTguMzg2M1YxOFptMTYuMjI1OC04aDMuMDIyOGMtLjAxMTQtMi4yODQtMS43NzI4LTMuNzk1NC00LjU5MS0zLjc5NTQtMi43NjcgMC00LjcyMTUgMS40ODg2LTQuNzA0NSAzLjcwNDUtLjAwNTcgMS44MTgyIDEuMjU1NyAyLjgyOTUgMy4zMTgyIDMuMjcyN2wxLjE1OTEuMjVjMS4yOTU0LjI4NDEgMS43Mzg2LjYwOCAxLjc1IDEuMTM2NC0uMDExNC41NzM4LS41MzQxLjk3NzMtMS41NDU1Ljk3NzMtMS4yMTAyIDAtMS45MjYxLS41NjgyLTEuOTc3My0xLjYzNjRoLTNjLjAxMTQgMi45MjA0IDEuOTg4NyA0LjIyNzMgNS4wMjI4IDQuMjI3MyAyLjk0ODggMCA0LjcxNTktMS4yNzI4IDQuNzI3Mi0zLjU2ODItLjAxMTMtMS43NzI3LTEuMDY4MS0zLjAxNzEtMy42MzYzLTMuNTY4MmwtLjk1NDYtLjIwNDVjLTEuMTAyMi0uMjMzLTEuNTk2Ni0uNTU2OS0xLjU2ODEtMS4xMTM3LjAwNTYtLjUxMTQuNDMxOC0uODg2NCAxLjQwOS0uODg2NCAxLjAyMjggMCAxLjUwNTcuNDQ5IDEuNTY4MiAxLjIwNDZabTcuNTQyNi0zLjYzNjRoLTMuMTU5VjE4aDMuMTU5VjYuMzYzNlptOS4wNTQgMy44NDA5SDQ4LjVjLS4yNDQzLTIuMzM1Mi0yLjM2MzYtNC01LjExMzYtNC0zLjEzNjQgMC01LjY4MTkgMi4xNTkxLTUuNjgxOSA2IDAgMy42ODE5IDIuMzA2OSA1Ljk1NDYgNS43MDQ2IDUuOTU0NiAzLjA0NTQgMCA1LjIyNzMtMS44NjM2IDUuMjI3My01LjA0NTVWMTEuNWgtNS4xNTkxdjIuMjVoMi4xMTM2Yy0uMDI4NCAxLjAxMTQtLjc0NDMgMS42NTkxLTIuMTU5MSAxLjY1OTEtMS42MzYzIDAtMi40NzczLTEuMjA0Ni0yLjQ3NzMtMy4yNSAwLTIuMDE3MS45MDkxLTMuMjA0NiAyLjUtMy4yMDQ2Ljk4ODcgMCAxLjY1OTEuNDU0NiAxLjg1MjMgMS4yNVptMTQuODcwOC0zLjg0MDloLTMuMTU5MXY2LjA5MDloLS4wOTA5bC00LjEzNjQtNi4wOTA5aC0yLjY4MThWMThoMy4xNTkxdi02LjExMzZoLjA2ODFMNTcuNTQxMiAxOGgyLjYzNjRWNi4zNjM2Wk02NC44NTk0IDE4aDUuNDc3MmMyLjUyODUgMCA0LjA5MS0xLjM4MDcgNC4wOTEtMy4yOTU1IDAtMS42NDItMS4yMTAzLTIuNzE1OS0yLjcwNDYtMi43NzI3di0uMTEzNmMxLjM0NjYtLjI2NzEgMi4yNS0xLjI2MTQgMi4yNS0yLjU0NTUgMC0xLjc3MjctMS40MDkxLTIuOTA5LTQuMDY4Mi0yLjkwOWgtNS4wNDU0VjE4Wm0zLjE1OTEtMi41MjI3di0yLjQ1NDZoMS41MjI3Yy45NjAyIDAgMS41NDU0LjQ1NDYgMS41NDU0IDEuMjcyOCAwIC43Nzg0LS41Mjg0IDEuMTgxOC0xLjU5MDkgMS4xODE4aC0xLjQ3NzJabTAtNC40MDkxVjguODQwOWgxLjM0MDljLjc4NDEgMCAxLjM2MzYuMzk3NyAxLjM2MzYgMS4xMTM2IDAgLjcxNi0uNTc5NSAxLjExMzctMS40MDkxIDEuMTEzN2gtMS4yOTU0Wk03OC43MDYgNi4zNjM2aC0zLjE1OTFWMThoMy4xNTkxVjYuMzYzNlptMS4xNzg5IDIuNTQ1NWgzLjVWMThoMy4xMTM3VjguOTA5aDMuNVY2LjM2MzdINzkuODg0OXYyLjU0NTVaTTk3LjQ2MDIgMTBoMy4wMjI4Yy0uMDExLTIuMjg0LTEuNzcyOC0zLjc5NTQtNC41OTEtMy43OTU0LTIuNzY3IDAtNC43MjE1IDEuNDg4Ni00LjcwNDUgMy43MDQ1LS4wMDU3IDEuODE4MiAxLjI1NTcgMi44Mjk1IDMuMzE4MiAzLjI3MjdsMS4xNTkxLjI1YzEuMjk1NC4yODQxIDEuNzM4Ni42MDggMS43NSAxLjEzNjQtLjAxMTQuNTczOC0uNTM0MS45NzczLTEuNTQ1NS45NzczLTEuMjEwMiAwLTEuOTI2MS0uNTY4Mi0xLjk3NzMtMS42MzY0aC0zYy4wMTE0IDIuOTIwNCAxLjk4ODcgNC4yMjczIDUuMDIyOCA0LjIyNzMgMi45NDg4IDAgNC43MTYyLTEuMjcyOCA0LjcyNzItMy41NjgyLS4wMTEtMS43NzI3LTEuMDY4MS0zLjAxNzEtMy42MzYzLTMuNTY4MmwtLjk1NDYtLjIwNDVjLTEuMTAyMi0uMjMzLTEuNTk2Ni0uNTU2OS0xLjU2ODEtMS4xMTM3LjAwNTYtLjUxMTQuNDMxOC0uODg2NCAxLjQwOS0uODg2NCAxLjAyMjggMCAxLjUwNTcuNDQ5IDEuNTY4MiAxLjIwNDZaXCJcbiAgICAgICAgZmlsbD1cInVybCgjYSlcIlxuICAgICAgLz5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICBpZD1cImFcIlxuICAgICAgICAgIHgxPVwiMFwiXG4gICAgICAgICAgeTE9XCIxMlwiXG4gICAgICAgICAgeDI9XCIxMjYuNVwiXG4gICAgICAgICAgeTI9XCIxMlwiXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiM3QjYxRkZcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIi4zNzlcIiBzdG9wQ29sb3I9XCIjRjA5N0JEXCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIuNjQ5OFwiIHN0b3BDb2xvcj1cIiNFRjk0QTRcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjN0I2MUZGXCIgLz5cbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgIDwvZGVmcz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsYXNzTmFtZXMoLi4uY2xhc3Nlczogc3RyaW5nW10pIHtcbiAgcmV0dXJuIGNsYXNzZXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpXG59XG4iLCAiaW1wb3J0IHR5cGUgeyBSZW1peExpbmtQcm9wcyB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0L2NvbXBvbmVudHNcIlxuaW1wb3J0IHsgTGluayBhcyBSZW1peExpbmsgfSBmcm9tIFwicmVtaXhcIlxuXG5jb25zdCBMaW5rID0gKHtcbiAgY2hpbGRyZW4sXG4gIC4uLnByb3BzXG59OiBSZW1peExpbmtQcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8SFRNTEFuY2hvckVsZW1lbnQ+KSA9PiB7XG4gIHJldHVybiA8UmVtaXhMaW5rIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvUmVtaXhMaW5rPlxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCAiY29uc3QgRXhwbG9yZUljb24gPSAocHJvcHM6IFJlYWN0LlNWR1Byb3BzPFNWR1NWR0VsZW1lbnQ+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIk0xMi44Nzg3IDIuODc4NjhDMTMuNDQxMyAyLjMxNjA3IDE0LjIwNDQgMiAxNSAySDE5QzE5Ljc5NTYgMiAyMC41NTg3IDIuMzE2MDcgMjEuMTIxMyAyLjg3ODY4QzIxLjY4MzkgMy40NDEyOSAyMiA0LjIwNDM1IDIyIDVWMTdDMjIgMTguMzI2MSAyMS40NzMyIDE5LjU5NzkgMjAuNTM1NSAyMC41MzU1QzE5LjU5NzkgMjEuNDczMiAxOC4zMjYxIDIyIDE3IDIyQzE1LjY3MzkgMjIgMTQuNDAyMSAyMS40NzMyIDEzLjQ2NDUgMjAuNTM1NUMxMi41MjY4IDE5LjU5NzkgMTIgMTguMzI2MSAxMiAxN1Y1QzEyIDQuMjA0MzUgMTIuMzE2MSAzLjQ0MTI5IDEyLjg3ODcgMi44Nzg2OFpNMTUgNEMxNC43MzQ4IDQgMTQuNDgwNCA0LjEwNTM2IDE0LjI5MjkgNC4yOTI4OUMxNC4xMDU0IDQuNDgwNDMgMTQgNC43MzQ3OCAxNCA1VjE3QzE0IDE3Ljc5NTYgMTQuMzE2MSAxOC41NTg3IDE0Ljg3ODcgMTkuMTIxM0MxNS40NDEzIDE5LjY4MzkgMTYuMjA0NCAyMCAxNyAyMEMxNy43OTU2IDIwIDE4LjU1ODcgMTkuNjgzOSAxOS4xMjEzIDE5LjEyMTNDMTkuNjgzOSAxOC41NTg3IDIwIDE3Ljc5NTYgMjAgMTdWNUMyMCA0LjczNDc4IDE5Ljg5NDYgNC40ODA0MyAxOS43MDcxIDQuMjkyODlDMTkuNTE5NiA0LjEwNTM2IDE5LjI2NTIgNCAxOSA0SDE1WlwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIk03LjQ2NDg3IDQuNjM2MjlDOC4wMjc0NiA0LjA3Mzg4IDguNzkwMzggMy43NTc5MyA5LjU4NTg3IDMuNzU3OTNDMTAuMzgxNCAzLjc1NzkzIDExLjE0NDMgNC4wNzM4OCAxMS43MDY5IDQuNjM2MjlMMTMuNzA3IDYuNjM2NEMxNC4wOTc1IDcuMDI2OTIgMTQuMDk3NSA3LjY2MDA5IDEzLjcwNyA4LjA1MDYxQzEzLjMxNjUgOC40NDExNCAxMi42ODMzIDguNDQxMTQgMTIuMjkyOCA4LjA1MDYxTDEwLjI5MjkgNi4wNTA3MkMxMC4yOTI4IDYuMDUwNjkgMTAuMjkyOSA2LjA1MDc2IDEwLjI5MjkgNi4wNTA3MkMxMC4xMDU0IDUuODYzMzIgOS44NTA5OSA1Ljc1NzkzIDkuNTg1ODcgNS43NTc5M0M5LjMyMDc2IDUuNzU3OTMgOS4wNjY1IDUuODYzMjEgOC44Nzg5OCA2LjA1MDYxTTguODc4OTggNi4wNTA2MUw2LjA1MTA5IDguODc4NTFDNi4wNTEwNSA4Ljg3ODU0IDYuMDUxMTIgOC44Nzg0NyA2LjA1MTA5IDguODc4NTFDNS44NjM2OCA5LjA2NjAzIDUuNzU4MyA5LjMyMDM5IDUuNzU4MyA5LjU4NTUxQzUuNzU4MyA5Ljg1MDYyIDUuODYzNTggMTAuMTA0OSA2LjA1MDk4IDEwLjI5MjRDNi4wNTEwMiAxMC4yOTI0IDYuMDUwOTQgMTAuMjkyNCA2LjA1MDk4IDEwLjI5MjRMMTUuMDUxIDE5LjI5MjRDMTUuNDQxNSAxOS42ODI5IDE1LjQ0MTUgMjAuMzE2MSAxNS4wNTEgMjAuNzA2NkMxNC42NjA1IDIxLjA5NzEgMTQuMDI3MyAyMS4wOTcxIDEzLjYzNjggMjAuNzA2Nkw0LjYzNjc3IDExLjcwNjZDNC4wNzQzNSAxMS4xNDQgMy43NTgzIDEwLjM4MSAzLjc1ODMgOS41ODU1MUMzLjc1ODMgOC43OTAwMSA0LjA3NDI1IDguMDI3MDkgNC42MzY2NiA3LjQ2NDUxTDcuNDY0ODcgNC42MzYyOVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIk0yLjg3ODY4IDEyLjg4NjFDMy40NDEyOSAxMi4zMjM1IDQuMjA0MzUgMTIuMDA3NCA1IDEyLjAwNzRINy4zQzcuODUyMjggMTIuMDA3NCA4LjMgMTIuNDU1MiA4LjMgMTMuMDA3NEM4LjMgMTMuNTU5NyA3Ljg1MjI4IDE0LjAwNzQgNy4zIDE0LjAwNzRINUM0LjczNDc4IDE0LjAwNzQgNC40ODA0MyAxNC4xMTI4IDQuMjkyODkgMTQuMzAwM0M0LjEwNTM2IDE0LjQ4NzkgNCAxNC43NDIyIDQgMTUuMDA3NFYxOS4wMDc0QzQgMTkuMjcyNyA0LjEwNTM2IDE5LjUyNyA0LjI5Mjg5IDE5LjcxNDZDNC40ODA0MyAxOS45MDIxIDQuNzM0NzggMjAuMDA3NCA1IDIwLjAwNzRIMTdDMTcuNTUyMyAyMC4wMDc0IDE4IDIwLjQ1NTIgMTggMjEuMDA3NEMxOCAyMS41NTk3IDE3LjU1MjMgMjIuMDA3NCAxNyAyMi4wMDc0SDVDNC4yMDQzNSAyMi4wMDc0IDMuNDQxMjkgMjEuNjkxNCAyLjg3ODY4IDIxLjEyODhDMi4zMTYwNyAyMC41NjYyIDIgMTkuODAzMSAyIDE5LjAwNzRWMTUuMDA3NEMyIDE0LjIxMTggMi4zMTYwNyAxMy40NDg3IDIuODc4NjggMTIuODg2MVpcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGQ9XCJNMTcgMTUuOTkyNkMxNy41NTIzIDE1Ljk5MjYgMTggMTYuNDQwMyAxOCAxNi45OTI2VjE3LjAwMjZDMTggMTcuNTU0OCAxNy41NTIzIDE4LjAwMjYgMTcgMTguMDAyNkMxNi40NDc3IDE4LjAwMjYgMTYgMTcuNTU0OCAxNiAxNy4wMDI2VjE2Ljk5MjZDMTYgMTYuNDQwMyAxNi40NDc3IDE1Ljk5MjYgMTcgMTUuOTkyNlpcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeHBsb3JlSWNvblxuIiwgImNvbnN0IENvbGxlY3Rpb25zSWNvbiA9IChwcm9wczogUmVhY3QuU1ZHUHJvcHM8U1ZHU1ZHRWxlbWVudD4pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiTTUgNS4wMDc0OUM0LjczNDc4IDUuMDA3NDkgNC40ODA0MyA1LjExMjg1IDQuMjkyODkgNS4zMDAzOUM0LjEwNTM2IDUuNDg3OTIgNCA1Ljc0MjI4IDQgNi4wMDc0OVYxNy4wMDc1QzQgMTcuMjcyNyA0LjEwNTM2IDE3LjUyNzEgNC4yOTI4OSAxNy43MTQ2QzQuNDgwNDMgMTcuOTAyMSA0LjczNDc4IDE4LjAwNzUgNSAxOC4wMDc1SDE5QzE5LjI2NTIgMTguMDA3NSAxOS41MTk2IDE3LjkwMjEgMTkuNzA3MSAxNy43MTQ2QzE5Ljg5NDYgMTcuNTI3MSAyMCAxNy4yNzI3IDIwIDE3LjAwNzVWOS4wMDc0OUMyMCA4Ljc0MjI4IDE5Ljg5NDYgOC40ODc5MiAxOS43MDcxIDguMzAwMzhDMTkuNTE5NiA4LjExMjg1IDE5LjI2NTIgOC4wMDc0OSAxOSA4LjAwNzQ5SDEyQzExLjczNDggOC4wMDc0OSAxMS40ODA0IDcuOTAyMTMgMTEuMjkyOSA3LjcxNDZMOC41ODU3OSA1LjAwNzQ5SDVaTTIuODc4NjggMy44ODYxN0MzLjQ0MTI5IDMuMzIzNTYgNC4yMDQzNSAzLjAwNzQ5IDUgMy4wMDc0OUg5QzkuMjY1MjIgMy4wMDc0OSA5LjUxOTU3IDMuMTEyODUgOS43MDcxMSAzLjMwMDM5TDEyLjQxNDIgNi4wMDc0OUgxOUMxOS43OTU3IDYuMDA3NDkgMjAuNTU4NyA2LjMyMzU2IDIxLjEyMTMgNi44ODYxN0MyMS42ODM5IDcuNDQ4NzggMjIgOC4yMTE4NCAyMiA5LjAwNzQ5VjE3LjAwNzVDMjIgMTcuODAzMSAyMS42ODM5IDE4LjU2NjIgMjEuMTIxMyAxOS4xMjg4QzIwLjU1ODcgMTkuNjkxNCAxOS43OTU3IDIwLjAwNzUgMTkgMjAuMDA3NUg1QzQuMjA0MzUgMjAuMDA3NSAzLjQ0MTI5IDE5LjY5MTQgMi44Nzg2OCAxOS4xMjg4QzIuMzE2MDcgMTguNTY2MiAyIDE3LjgwMzEgMiAxNy4wMDc1VjYuMDA3NDlDMiA1LjIxMTg0IDIuMzE2MDcgNC40NDg3OCAyLjg3ODY4IDMuODg2MTdaXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiTTEyIDkuMDA3NDlDMTIuNTUyMyA5LjAwNzQ5IDEzIDkuNDU1MjEgMTMgMTAuMDA3NVYxNi4wMDc1QzEzIDE2LjU1OTggMTIuNTUyMyAxNy4wMDc1IDEyIDE3LjAwNzVDMTEuNDQ3NyAxNy4wMDc1IDExIDE2LjU1OTggMTEgMTYuMDA3NVYxMC4wMDc1QzExIDkuNDU1MjEgMTEuNDQ3NyA5LjAwNzQ5IDEyIDkuMDA3NDlaXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiTTggMTMuMDA3NUM4IDEyLjQ1NTIgOC40NDc3MiAxMi4wMDc1IDkgMTIuMDA3NUgxNUMxNS41NTIzIDEyLjAwNzUgMTYgMTIuNDU1MiAxNiAxMy4wMDc1QzE2IDEzLjU1OTggMTUuNTUyMyAxNC4wMDc1IDE1IDE0LjAwNzVIOUM4LjQ0NzcyIDE0LjAwNzUgOCAxMy41NTk4IDggMTMuMDA3NVpcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xsZWN0aW9uc0ljb25cbiIsICJjb25zdCBHYWxsZXJ5SWNvbiA9IChwcm9wczogUmVhY3QuU1ZHUHJvcHM8U1ZHU1ZHRWxlbWVudD4pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIk0xNCA3Ljk5MjUxQzE0IDcuNDQwMjIgMTQuNDQ3NyA2Ljk5MjUxIDE1IDYuOTkyNTFIMTUuMDFDMTUuNTYyMyA2Ljk5MjUxIDE2LjAxIDcuNDQwMjIgMTYuMDEgNy45OTI1MUMxNi4wMSA4LjU0NDc5IDE1LjU2MjMgOC45OTI1MSAxNS4wMSA4Ljk5MjUxSDE1QzE0LjQ0NzcgOC45OTI1MSAxNCA4LjU0NDc5IDE0IDcuOTkyNTFaXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiTTcgNS4wMDc0OUM1Ljg5NTQzIDUuMDA3NDkgNSA1LjkwMjkyIDUgNy4wMDc0OVYxNy4wMDc1QzUgMTguMTEyMSA1Ljg5NTQzIDE5LjAwNzUgNyAxOS4wMDc1SDE3QzE4LjEwNDYgMTkuMDA3NSAxOSAxOC4xMTIxIDE5IDE3LjAwNzVWNy4wMDc0OUMxOSA1LjkwMjkyIDE4LjEwNDYgNS4wMDc0OSAxNyA1LjAwNzQ5SDdaTTMgNy4wMDc0OUMzIDQuNzk4MzUgNC43OTA4NiAzLjAwNzQ5IDcgMy4wMDc0OUgxN0MxOS4yMDkxIDMuMDA3NDkgMjEgNC43OTgzNSAyMSA3LjAwNzQ5VjE3LjAwNzVDMjEgMTkuMjE2NiAxOS4yMDkxIDIxLjAwNzUgMTcgMjEuMDA3NUg3QzQuNzkwODYgMjEuMDA3NSAzIDE5LjIxNjYgMyAxNy4wMDc1VjcuMDA3NDlaXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiTTguNjk5NjYgMTEuNzIwMkw0LjcwNzExIDE1LjcxMjdDNC4zMTY1OCAxNi4xMDMyIDMuNjgzNDIgMTYuMTAzMiAzLjI5Mjg5IDE1LjcxMjdDMi45MDIzNyAxNS4zMjIyIDIuOTAyMzcgMTQuNjg5IDMuMjkyODkgMTQuMjk4NUw3LjI5Mjg5IDEwLjI5ODVMNy4zMDY2MyAxMC4yODVDNy45MDkgOS43MDU0IDguNjY0MTkgOS4zMzU3NCA5LjUgOS4zMzU3NEMxMC4zMzU4IDkuMzM1NzQgMTEuMDkxIDkuNzA1NCAxMS42OTM0IDEwLjI4NUwxMS43MDcxIDEwLjI5ODVMMTYuNzA3MSAxNS4yOTg1QzE3LjA5NzYgMTUuNjg5IDE3LjA5NzYgMTYuMzIyMiAxNi43MDcxIDE2LjcxMjdDMTYuMzE2NiAxNy4xMDMyIDE1LjY4MzQgMTcuMTAzMiAxNS4yOTI5IDE2LjcxMjdMMTAuMzAwMyAxMS43MjAyQzkuOTkzMSAxMS40MjY5IDkuNzE1OTQgMTEuMzM1NyA5LjUgMTEuMzM1N0M5LjI4NDA2IDExLjMzNTcgOS4wMDY5IDExLjQyNjkgOC42OTk2NiAxMS43MjAyWlwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIk0xNS42OTk3IDEzLjcxMjdMMTQuNzA3MSAxNC43MDUyQzE0LjMxNjYgMTUuMDk1OCAxMy42ODM0IDE1LjA5NTggMTMuMjkyOSAxNC43MDUyQzEyLjkwMjQgMTQuMzE0NyAxMi45MDI0IDEzLjY4MTUgMTMuMjkyOSAxMy4yOTFMMTQuMjkyOSAxMi4yOTFMMTQuMzA2NiAxMi4yNzc1QzE0LjkwOSAxMS42OTc5IDE1LjY2NDIgMTEuMzI4MiAxNi41IDExLjMyODJDMTcuMzM1OCAxMS4zMjgyIDE4LjA5MSAxMS42OTc5IDE4LjY5MzQgMTIuMjc3NUwxOC43MDcxIDEyLjI5MUwyMC43MDcxIDE0LjI5MUMyMS4wOTc2IDE0LjY4MTUgMjEuMDk3NiAxNS4zMTQ3IDIwLjcwNzEgMTUuNzA1MkMyMC4zMTY2IDE2LjA5NTggMTkuNjgzNCAxNi4wOTU4IDE5LjI5MjkgMTUuNzA1MkwxNy4zMDAzIDEzLjcxMjdDMTYuOTkzMSAxMy40MTk0IDE2LjcxNTkgMTMuMzI4MiAxNi41IDEzLjMyODJDMTYuMjg0MSAxMy4zMjgyIDE2LjAwNjkgMTMuNDE5NCAxNS42OTk3IDEzLjcxMjdaXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnlJY29uXG4iLCAiY29uc3QgTGlrZUljb24gPSAocHJvcHM6IFJlYWN0LlNWR1Byb3BzPFNWR1NWR0VsZW1lbnQ+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIk0xMyA1LjAwNzQ1QzEyLjczNDggNS4wMDc0NSAxMi40ODA0IDUuMTEyOCAxMi4yOTI5IDUuMzAwMzRDMTIuMTA1NCA1LjQ4Nzg4IDEyIDUuNzQyMjMgMTIgNi4wMDc0NVY3LjAwNzQ1QzEyIDguMzMzNTMgMTEuNDczMiA5LjYwNTMgMTAuNTM1NSAxMC41NDNDOS44MzcxNSAxMS4yNDE0IDguOTUzNDQgMTEuNzExOCA4IDExLjkwNjRWMTcuMDA3NEM4IDE3LjUzNzkgOC4yMTA3MSAxOC4wNDY2IDguNTg1NzkgMTguNDIxN0M4Ljk2MDg2IDE4Ljc5NjcgOS40Njk1NyAxOS4wMDc0IDEwIDE5LjAwNzRIMTdDMTcuMDI4MyAxOS4wMDc0IDE3LjA1NjYgMTkuMDA4NiAxNy4wODQ4IDE5LjAxMUMxNy4xNzE1IDE5LjAxODQgMTcuMzIzIDE4Ljk5MzkgMTcuNTE1NSAxOC44MDEzQzE3LjcxNDYgMTguNjAyMiAxNy45MTEgMTguMjYxMiAxOC4wMjI5IDE3Ljc5NDFMMTguOTk2NiAxMi45MjUzQzE4Ljk3NzMgMTIuNjkwMiAxOC44NzUyIDEyLjQ2ODQgMTguNzA3MSAxMi4zMDAzQzE4LjUxOTYgMTIuMTEyOCAxOC4yNjUyIDEyLjAwNzQgMTggMTIuMDA3NEgxNUMxNC40NDc3IDEyLjAwNzQgMTQgMTEuNTU5NyAxNCAxMS4wMDc0VjYuMDA3NDVDMTQgNS43NDIyMyAxMy44OTQ2IDUuNDg3ODggMTMuNzA3MSA1LjMwMDM0QzEzLjUxOTYgNS4xMTI4IDEzLjI2NTIgNS4wMDc0NSAxMyA1LjAwNzQ1Wk03LjYgMjAuMjA3NUM3LjU0MzU0IDIwLjI4MjcgNy40ODE1MiAyMC4zNTQ0IDcuNDE0MjEgMjAuNDIxN0M3LjAzOTE0IDIwLjc5NjcgNi41MzA0MyAyMS4wMDc0IDYgMjEuMDA3NEg0QzMuNDY5NTcgMjEuMDA3NCAyLjk2MDg2IDIwLjc5NjcgMi41ODU3OSAyMC40MjE3QzIuMjEwNzEgMjAuMDQ2NiAyIDE5LjUzNzkgMiAxOS4wMDc0VjEyLjAwNzRDMiAxMS40NzcgMi4yMTA3MSAxMC45NjgzIDIuNTg1NzkgMTAuNTkzMkMyLjk2MDg2IDEwLjIxODIgMy40Njk1NyAxMC4wMDc0IDQgMTAuMDA3NEg3QzcuNzk1NjUgMTAuMDA3NCA4LjU1ODcxIDkuNjkxMzggOS4xMjEzMiA5LjEyODc3QzkuNjgzOTMgOC41NjYxNiAxMCA3LjgwMzEgMTAgNy4wMDc0NVY2LjAwNzQ1QzEwIDUuMjExOCAxMC4zMTYxIDQuNDQ4NzMgMTAuODc4NyAzLjg4NjEzQzExLjQ0MTMgMy4zMjM1MiAxMi4yMDQ0IDMuMDA3NDUgMTMgMy4wMDc0NUMxMy43OTU2IDMuMDA3NDUgMTQuNTU4NyAzLjMyMzUyIDE1LjEyMTMgMy44ODYxM0MxNS42ODM5IDQuNDQ4NzMgMTYgNS4yMTE4IDE2IDYuMDA3NDVWMTAuMDA3NEgxOEMxOC43OTU3IDEwLjAwNzQgMTkuNTU4NyAxMC4zMjM1IDIwLjEyMTMgMTAuODg2MUMyMC42ODM5IDExLjQ0ODcgMjEgMTIuMjExOCAyMSAxMy4wMDc0QzIxIDEzLjA3MzMgMjAuOTkzNSAxMy4xMzkgMjAuOTgwNiAxMy4yMDM2TDE5Ljk4MDYgMTguMjAzNkMxOS45Nzg0IDE4LjIxNDMgMTkuOTc2MSAxOC4yMjUgMTkuOTczNiAxOC4yMzU3QzE5Ljc5NzMgMTguOTg3OSAxOS40NSAxOS42OTUzIDE4LjkyOTggMjAuMjE1NUMxOC40MTE4IDIwLjczMzUgMTcuNzIzMiAyMS4wNTY2IDE2Ljk2MzMgMjEuMDA3NEgxMEM5LjEyOTUzIDIxLjAwNzQgOC4yODgzMSAyMC43MjM3IDcuNiAyMC4yMDc1Wk02IDEyLjAwNzRINFYxOS4wMDc0SDZWMTIuMDA3NFpcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaWtlSWNvblxuIiwgImltcG9ydCB7IFNlYXJjaEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5pbnRlcmZhY2UgUHJvcHMge31cblxuY29uc3QgU2VhcmNoQm94ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInNlYXJjaFwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cbiAgICAgICAgUXVpY2sgc2VhcmNoXG4gICAgICA8L2xhYmVsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBtdC0xIHRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC15LTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIHBsLTIgcHktMS41XCI+XG4gICAgICAgICAgPFNlYXJjaEljb24gaGVpZ2h0PVwiMjBcIiB3aWR0aD1cIjIwXCIgcm9sZT1cInByZXNlbnRhdGlvblwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cInNlYXJjaFwiXG4gICAgICAgICAgaWQ9XCJzZWFyY2hcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgICByb2xlPVwic2VhcmNoXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBwbC0xMCBwci0xMiB3LTcyIGJnLWdyYXktMTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLW1kIHNoYWRvdy1zbSBmb2N1czpyaW5nLWluZGlnby01MDAgc206dGV4dC1zbVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteS0wIHJpZ2h0LTAgZmxleCBwci0yIHB5LTEuNVwiPlxuICAgICAgICAgIDxrYmQgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTIgZm9udC1zYW5zIHRleHQtc20gZm9udC1tZWRpdW0gYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkXCI+XG4gICAgICAgICAgICBcdTIzMTggS1xuICAgICAgICAgIDwva2JkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJveFxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBCdXR0b246IFJlYWN0LkZDPFxuICBPbWl0PFxuICAgIFJlYWN0LkRldGFpbGVkSFRNTFByb3BzPFxuICAgICAgUmVhY3QuQnV0dG9uSFRNTEF0dHJpYnV0ZXM8SFRNTEJ1dHRvbkVsZW1lbnQ+LFxuICAgICAgSFRNTEJ1dHRvbkVsZW1lbnRcbiAgICA+LFxuICAgIFwiY2xhc3NOYW1lXCIgfCBcInR5cGVcIlxuICA+XG4+ID0gKHsgY2hpbGRyZW4sIC4uLmJ0blByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTIgdGV4dC13aGl0ZSB0ZXh0LXNtIGZvbnQtbWVkaXVtIGJnLWluZGlnby02MDAgaG92ZXI6YmctaW5kaWdvLTcwMCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIHNoYWRvdy1zbSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOnJpbmctb2Zmc2V0LTIgZGlzYWJsZWQ6b3BhY2l0eS01MCBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWRcIlxuICAgICAgey4uLmJ0blByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2J1dHRvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiIsICJjb25zdCBVcGxvYWRJY29uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMjBcIlxuICAgICAgaGVpZ2h0PVwiMjBcIlxuICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGQ9XCJNMy4zMzMzMyAxMy4zMjcxQzMuNzkzNTcgMTMuMzI3MSA0LjE2NjY3IDEzLjcwMDIgNC4xNjY2NyAxNC4xNjA1VjE1LjgyNzFDNC4xNjY2NyAxNi4wNDgyIDQuMjU0NDYgMTYuMjYwMSA0LjQxMDc0IDE2LjQxNjRDNC41NjcwMiAxNi41NzI3IDQuNzc4OTkgMTYuNjYwNSA1IDE2LjY2MDVIMTVDMTUuMjIxIDE2LjY2MDUgMTUuNDMzIDE2LjU3MjcgMTUuNTg5MyAxNi40MTY0QzE1Ljc0NTUgMTYuMjYwMSAxNS44MzMzIDE2LjA0ODIgMTUuODMzMyAxNS44MjcxVjE0LjE2MDVDMTUuODMzMyAxMy43MDAyIDE2LjIwNjQgMTMuMzI3MSAxNi42NjY3IDEzLjMyNzFDMTcuMTI2OSAxMy4zMjcxIDE3LjUgMTMuNzAwMiAxNy41IDE0LjE2MDVWMTUuODI3MUMxNy41IDE2LjQ5MDIgMTcuMjM2NiAxNy4xMjYxIDE2Ljc2NzggMTcuNTk0OUMxNi4yOTg5IDE4LjA2MzggMTUuNjYzIDE4LjMyNzEgMTUgMTguMzI3MUg1QzQuMzM2OTYgMTguMzI3MSAzLjcwMTA3IDE4LjA2MzggMy4yMzIyMyAxNy41OTQ5QzIuNzYzMzkgMTcuMTI2MSAyLjUgMTYuNDkwMiAyLjUgMTUuODI3MVYxNC4xNjA1QzIuNSAxMy43MDAyIDIuODczMSAxMy4zMjcxIDMuMzMzMzMgMTMuMzI3MVpcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGQ9XCJNMTAgMi41MDU4NkMxMC4yMjEgMi41MDU4NiAxMC40MzMgMi41OTM2NiAxMC41ODkzIDIuNzQ5OTRMMTQuNzU1OSA2LjkxNjZDMTUuMDgxNCA3LjI0MjA0IDE1LjA4MTQgNy43Njk2OCAxNC43NTU5IDguMDk1MTJDMTQuNDMwNSA4LjQyMDU1IDEzLjkwMjggOC40MjA1NSAxMy41Nzc0IDguMDk1MTJMMTAgNC41MTc3TDYuNDIyNTkgOC4wOTUxMkM2LjA5NzE1IDguNDIwNTUgNS41Njk1MSA4LjQyMDU1IDUuMjQ0MDggOC4wOTUxMkM0LjkxODY0IDcuNzY5NjggNC45MTg2NCA3LjI0MjA0IDUuMjQ0MDggNi45MTY2TDkuNDEwNzQgMi43NDk5NEM5LjU2NzAyIDIuNTkzNjYgOS43Nzg5OSAyLjUwNTg2IDEwIDIuNTA1ODZaXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiTTEwLjAwMDMgMi41MDU4NkMxMC40NjA2IDIuNTA1ODYgMTAuODMzNyAyLjg3ODk2IDEwLjgzMzcgMy4zMzkxOVYxMy4zMzkyQzEwLjgzMzcgMTMuNzk5NCAxMC40NjA2IDE0LjE3MjUgMTAuMDAwMyAxNC4xNzI1QzkuNTQwMDkgMTQuMTcyNSA5LjE2Njk5IDEzLjc5OTQgOS4xNjY5OSAxMy4zMzkyVjMuMzM5MTlDOS4xNjY5OSAyLjg3ODk2IDkuNTQwMDkgMi41MDU4NiAxMC4wMDAzIDIuNTA1ODZaXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkSWNvblxuIiwgImltcG9ydCB7IExpbmtzLCBMaXZlUmVsb2FkLCBNZXRhLCBTY3JpcHRzLCBTY3JvbGxSZXN0b3JhdGlvbiB9IGZyb20gXCJyZW1peFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY3VtZW50KHtcbiAgY2hpbGRyZW4sXG4gIHRpdGxlLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG4gIHRpdGxlPzogc3RyaW5nXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCIgY2xhc3NOYW1lPVwiaC1mdWxsXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICB7dGl0bGUgPyA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+IDogbnVsbH1cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keSBjbGFzc05hbWU9XCJoLWZ1bGxcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApXG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmludGVyZmFjZSBQcm9wcyB7fVxuXG5jb25zdCBGb3Jnb3RQYXNzd29yZCA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgcmV0dXJuIDxkaXY+PC9kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcmdvdFBhc3N3b3JkXG4iLCAiaW1wb3J0IHtcbiAgQ29sbGVjdGlvbkljb24sXG4gIERvdHNWZXJ0aWNhbEljb24sXG4gIFNoYXJlSWNvbixcbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIn4vY29tcG9uZW50cy9BdmF0YXJcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwifi9jb21wb25lbnRzL0J1dHRvblwiXG5pbXBvcnQgQW5kcm9pZEljb24gZnJvbSBcIn4vY29tcG9uZW50cy9pY29ucy9BbmRyb2lkXCJcbmltcG9ydCBMaWtlSWNvbiBmcm9tIFwifi9jb21wb25lbnRzL2ljb25zL0xpa2VcIlxuaW1wb3J0IEludGVyYWN0aW9uRmVlZGJhY2sgZnJvbSBcIn4vY29tcG9uZW50cy9JbnRlcmFjdGlvbkZlZWRiYWNrXCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIn4vY29tcG9uZW50cy9MYXlvdXRcIlxuXG5pbnRlcmZhY2UgUHJvcHMge31cblxuY29uc3QgSW50ZXJhY3Rpb24gPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNyB3LWZ1bGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi01IHB4LTggc3BhY2UteS03XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0yeGwgdGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgICAgIEJvdHRvbSBuYXZpZ2F0aW9uIGRyYWcgdXRpbGl0eVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHRleHQtc20gbXQtMSBzcGFjZS14LTEgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPjYgaHJzIGFnbzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj4mbWlkZG90Ozwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj4xLjJrIHZpZXdzPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggYm9yZGVyIHB4LTQgcHktMiByb3VuZGVkLWxnIGJvcmRlci1ncmF5LTIwMCB0ZXh0LWdyYXktODAwIHNwYWNlLXgtMlwiPlxuICAgICAgICAgICAgICAgIDxMaWtlSWNvbiBoZWlnaHQ9XCIyNFwiIHdpZHRoPVwiMjRcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPjI1Njwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBib3JkZXIgcC0yIHJvdW5kZWQtbGcgYm9yZGVyLWdyYXktMjAwIHRleHQtZ3JheS04MDAgc3BhY2UteC0yXCI+XG4gICAgICAgICAgICAgICAgPENvbGxlY3Rpb25JY29uIGhlaWdodD1cIjI0XCIgd2lkdGg9XCIyNFwiIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggYm9yZGVyIHAtMiByb3VuZGVkLWxnIGJvcmRlci1ncmF5LTIwMCB0ZXh0LWdyYXktODAwIHNwYWNlLXgtMlwiPlxuICAgICAgICAgICAgICAgIDxTaGFyZUljb24gaGVpZ2h0PVwiMjRcIiB3aWR0aD1cIjI0XCIgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzcGVjdC12aWRlbyB3LWZ1bGwgYmcteWVsbG93LTUwIHJvdW5kZWQtbGdcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC04IHNwYWNlLXktN1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPEF2YXRhciAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b24+Rm9sbG93PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxEb3RzVmVydGljYWxJY29uIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktODAwXCI+XG4gICAgICAgICAgICAgIEFuIGlubm92YXRpdmUgd2F5IHRvIHV0aWxpemUgdGhlIGJvdHRvbSBuYXZpZ2F0aW9uIG1lbnUgaW4gbW9iaWxlXG4gICAgICAgICAgICAgIGFwcCBmb3IgcXVpY2sgYWN0aW9ucy4gSXQgZG9lc25cdTIwMTl0IGRpc3R1cmIgdGhlIFVJIGFuZCBtYWtlcyBpdCBlYXN5XG4gICAgICAgICAgICAgIHRvIGNyZWF0ZSBuZXcgdGFzayBvciBzZW5kIG1lc3NhZ2UsIG5vIG1hdHRlciB3aGVyZSBJIGFtIGluIHRoZVxuICAgICAgICAgICAgICBhcHAuIEJpZyB0aW1lIHNhdmlvdXIuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS14LTQgdy1mdWxsIGZsZXhcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi8xMlwiPlNvdXJjZTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0xIGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktODAwIGZvbnQtc2VtaWJvbGQgdGV4dC14c1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2Jhc2VjYW1wLmNvbS9iYXNlY2FtcC1pY29uLTE5NngxOTYucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJCYXNlY2FtcC5jb21cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTUgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+QmFzZWNhbXAuY29tPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS14LTQgdy1mdWxsIGZsZXhcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi8xMlwiPlBsYXRmb3JtPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHRleHQtZ3JheS04MDAgc3BhY2UteC0xXCI+XG4gICAgICAgICAgICAgICAgICA8QW5kcm9pZEljb24gLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPkFuZHJvaWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIHB5LTEgdGV4dC1pbmRpZ28tNzAwIGJnLWluZGlnby01MCByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgTmF2aWdhdGlvblxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIHB5LTEgdGV4dC1pbmRpZ28tNzAwIGJnLWluZGlnby01MCByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgVXNlZnVsXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgcHktMSB0ZXh0LWluZGlnby03MDAgYmctaW5kaWdvLTUwIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICBBY2Nlc3NpYmlsaXR5XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItZ3JheS0zMDAgbXQtMTIgbXgtOFwiPjwvZGl2PlxuXG4gICAgICAgICAgPEludGVyYWN0aW9uRmVlZGJhY2sgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlcmFjdGlvblxuIiwgIi8qIFRoaXMgZXhhbXBsZSByZXF1aXJlcyBUYWlsd2luZCBDU1MgdjIuMCsgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF2YXRhcigpIHtcbiAgcmV0dXJuIChcbiAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgZ3JvdXAgYmxvY2tcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgaC0xMCB3LTEwIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ3MjA5OTY0NTc4NS01NjU4YWJmNGZmNGU/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9ZmFjZWFyZWEmZmFjZXBhZD0yJnc9MjU2Jmg9MjU2JnE9ODBcIlxuICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0zXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtZ3JheS04MDAgZ3JvdXAtaG92ZXI6dGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgTGVzbGllXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBncm91cC1ob3Zlcjp0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICA5NiBmb2xsb3dlcnNcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9hPlxuICApXG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IEFuZHJvaWRJY29uID0gKHByb3BzOiBSZWFjdC5TVkdQcm9wczxTVkdTVkdFbGVtZW50PikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9XCIyMFwiXG4gICAgICBoZWlnaHQ9XCIyMFwiXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiTTIuNSA3LjQ5N2MuNDYgMCAuODMzLjM3My44MzMuODMzdjVhLjgzMy44MzMgMCAwMS0xLjY2NyAwdi01YzAtLjQ2LjM3NC0uODMzLjgzNC0uODMzem0xNSAwYy40NiAwIC44MzMuMzczLjgzMy44MzN2NWEuODMzLjgzMyAwIDAxLTEuNjY2IDB2LTVjMC0uNDYuMzczLS44MzMuODMzLS44MzN6TTEwIDQuMTY0YTMuMzMzIDMuMzMzIDAgMDAtMy4yMjggMi41aDYuNDU1QTMuMzMzIDMuMzMzIDAgMDAxMCA0LjE2NHptNSAzLjMzM2E1IDUgMCAwMC0xMCAwdjYuNjY3YTEuNjY3IDEuNjY3IDAgMDAxLjY2NyAxLjY2Nmg2LjY2NkExLjY2NyAxLjY2NyAwIDAwMTUgMTQuMTY0VjcuNDk3em0tMS42NjcuODMzSDYuNjY3djUuODM0aDYuNjY2VjguMzN6XCJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiTTYuMjk0IDEuNzU1YS44MzMuODMzIDAgMDExLjExOC4zNzJsLjgzMyAxLjY2N2EuODMzLjgzMyAwIDExLTEuNDkuNzQ1TDUuOTIgMi44NzNhLjgzMy44MzMgMCAwMS4zNzMtMS4xMTh6bTcuNDEyIDBhLjgzMy44MzMgMCAwMS4zNzMgMS4xMThsLS44MzQgMS42NjZhLjgzMy44MzMgMCAwMS0xLjQ5LS43NDVsLjgzMy0xLjY2N2EuODMzLjgzMyAwIDAxMS4xMTgtLjM3MnpNNy41IDE0LjE2N2MuNDYgMCAuODMzLjM3My44MzMuODMzdjIuNWEuODMzLjgzMyAwIDAxLTEuNjY3IDBWMTVjMC0uNDYuMzc0LS44MzMuODM0LS44MzN6bTUgMGMuNDYgMCAuODMzLjM3My44MzMuODMzdjIuNWEuODMzLjgzMyAwIDAxLTEuNjY3IDBWMTVjMC0uNDYuMzc0LS44MzMuODM0LS44MzN6XCJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgID48L3BhdGg+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5kcm9pZEljb25cbiIsICJpbXBvcnQgeyBSYWRpb0dyb3VwIH0gZnJvbSBcIkBoZWFkbGVzc3VpL3JlYWN0XCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCIuLi91dGlscy9jbGFzc25hbWVzXCJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCJcblxuaW50ZXJmYWNlIFByb3BzIHt9XG5cbmNvbnN0IGhhc1NlZW5PcHRpb25zID0gW1xuICB7XG4gICAgbmFtZTogXCJ5ZXNcIixcbiAgICBjaGlsZHJlbjogPD5ZZXMgXHUyNjFEXHVGRTBGPC8+LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTb21ldGhpbmcgc2ltaWxhclwiLFxuICAgIGNoaWxkcmVuOiA8PlNvbWV0aGluZyBzaW1pbGFyIFx1RDgzRVx1REQxNDwvPixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibm9cIixcbiAgICBjaGlsZHJlbjogPD5ObyBcdUQ4M0RcdURFNDM8Lz4sXG4gIH0sXG5dXG5cbmNvbnN0IGV4cGVyaW5jZU9wdGlvbnMgPSBbXG4gIHtcbiAgICBuYW1lOiBcInllc1wiLFxuICAgIGNoaWxkcmVuOiA8PkNyZWF0aXZlICYgdXNlZnVsIFx1RDgzRFx1RENBMTwvPixcbiAgICBpblN0b2NrOiB0cnVlLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTb21ldGhpbmcgc2ltaWxhclwiLFxuICAgIGNoaWxkcmVuOiA8PkNvbW1vbiBub3ctYS1kYXlzIFx1RDgzRVx1REQxNDwvPixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibm9cIixcbiAgICBjaGlsZHJlbjogPD5CYWQgZXhwZXJpZW5jZSBcdUQ4M0RcdURFMTE8Lz4sXG4gIH0sXG5dXG5cbmNvbnN0IEludGVyYWN0aW9uRmVlZGJhY2sgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtpZkhhc1NlZW5WYWx1ZSwgc2V0SWZIYXNTZWVuVmFsdWVdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbZXhwZWluY2VGZWVkYmFjaywgc2V0RXhwZXJpZW5jZUZlZWRiYWNrXSA9IHVzZVN0YXRlKClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTggcHktMTYgYmctZ3JhZGllbnQtdG8tdGwgZnJvbS1pbmRpZ28tMTAwIHZpYS13aGl0ZSB0by13aGl0ZSBib3JkZXItYiBib3JkZXItaW5kaWdvLTEwMFwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsIHRleHQtZ3JheS04MDBcIj5cbiAgICAgICAgSGVscCBkZXNpZ25lcnMgbGVhcm4gbW9yZSBhYm91dCB0aGlzIGludGVyYWN0aW9uXG4gICAgICA8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04XCI+XG4gICAgICAgIDxSYWRpb0dyb3VwXG4gICAgICAgICAgdmFsdWU9e2lmSGFzU2VlblZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXRJZkhhc1NlZW5WYWx1ZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJtYi04XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxSYWRpb0dyb3VwLkxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICBIYXZlIHlvdSBldmVyIHNlZW4gdGhpcyBpbnRlcmFjdGlvbiBiZWZvcmU/XG4gICAgICAgICAgPC9SYWRpb0dyb3VwLkxhYmVsPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgbXQtNFwiPlxuICAgICAgICAgICAge2hhc1NlZW5PcHRpb25zLm1hcChvcHRpb24gPT4gKFxuICAgICAgICAgICAgICA8UmFkaW9Hcm91cC5PcHRpb25cbiAgICAgICAgICAgICAgICBrZXk9e29wdGlvbi5uYW1lfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtvcHRpb259XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoeyBhY3RpdmUsIGNoZWNrZWQgfSkgPT5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAgIFwiY3Vyc29yLXBvaW50ZXIgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtc21cIixcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlID8gXCJyaW5nLTIgcmluZy1vZmZzZXQtMSByaW5nLWluZGlnby01MDBcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiYmctaW5kaWdvLTYwMCBib3JkZXItdHJhbnNwYXJlbnQgdGV4dC13aGl0ZSBob3ZlcjpiZy1pbmRpZ28tNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiYmctd2hpdGUgYm9yZGVyLWdyYXktMjAwIHRleHQtZ3JheS05MDAgaG92ZXI6YmctZ3JheS01MFwiLFxuICAgICAgICAgICAgICAgICAgICBcImJvcmRlciByb3VuZGVkLW1kIHB5LTIgcHgtMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzaHJpbmstMCBtYi00IG1yLTRcIixcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UmFkaW9Hcm91cC5MYWJlbCBhcz1cInBcIj57b3B0aW9uLmNoaWxkcmVufTwvUmFkaW9Hcm91cC5MYWJlbD5cbiAgICAgICAgICAgICAgPC9SYWRpb0dyb3VwLk9wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1JhZGlvR3JvdXA+XG4gICAgICAgIDxSYWRpb0dyb3VwXG4gICAgICAgICAgdmFsdWU9e2V4cGVpbmNlRmVlZGJhY2t9XG4gICAgICAgICAgb25DaGFuZ2U9e3NldEV4cGVyaWVuY2VGZWVkYmFja31cbiAgICAgICAgICBjbGFzc05hbWU9XCJtYi04XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxSYWRpb0dyb3VwLkxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICBFdmFsdWF0ZSB0aGUgZXhwZXJpZW5jZSBvZiB0aGlzIGludGVyYWN0aW9uXG4gICAgICAgICAgPC9SYWRpb0dyb3VwLkxhYmVsPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgbXQtNFwiPlxuICAgICAgICAgICAge2V4cGVyaW5jZU9wdGlvbnMubWFwKG9wdGlvbiA9PiAoXG4gICAgICAgICAgICAgIDxSYWRpb0dyb3VwLk9wdGlvblxuICAgICAgICAgICAgICAgIGtleT17b3B0aW9uLm5hbWV9XG4gICAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyh7IGFjdGl2ZSwgY2hlY2tlZCB9KSA9PlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgXCJjdXJzb3ItcG9pbnRlciBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC1zbVwiLFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPyBcInJpbmctMiByaW5nLW9mZnNldC0xIHJpbmctaW5kaWdvLTUwMFwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgID8gXCJiZy1pbmRpZ28tNjAwIGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWluZGlnby03MDBcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJiZy13aGl0ZSBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTkwMCBob3ZlcjpiZy1ncmF5LTUwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyIHJvdW5kZWQtbWQgcHktMiBweC0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNocmluay0wIG1iLTQgbXItNFwiLFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwLkxhYmVsIGFzPVwicFwiPntvcHRpb24uY2hpbGRyZW59PC9SYWRpb0dyb3VwLkxhYmVsPlxuICAgICAgICAgICAgICA8L1JhZGlvR3JvdXAuT3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUmFkaW9Hcm91cD5cbiAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17IWV4cGVpbmNlRmVlZGJhY2sgfHwgIWlmSGFzU2VlblZhbHVlfT5TdWJtaXQ8L0J1dHRvbj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi9GZWVkYmFjay5wbmdcIlxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgLXRyYW5zbGF0ZS15LTMvNCAtdHJhbnNsYXRlLXgtMS8yXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVyYWN0aW9uRmVlZGJhY2tcbiIsICJpbXBvcnQgQXV0aEhlYWRpbmcgZnJvbSBcIn4vY29tcG9uZW50cy9hdXRoL0F1dGhIZWFkaW5nXCJcbmltcG9ydCBBdXRoTGF5b3V0IGZyb20gXCJ+L2NvbXBvbmVudHMvQXV0aExheW91dFwiXG5cbmludGVyZmFjZSBQcm9wcyB7fVxuXG5jb25zdCBTaWduVXAgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEF1dGhMYXlvdXRcbiAgICAgIGhlYWRpbmc9e1xuICAgICAgICA8QXV0aEhlYWRpbmdcbiAgICAgICAgICB0aXRsZT1cIlNpZ24gdXAgdG8gc2F2ZSB5b3VyIGZhdm9yaXRlcyFcIlxuICAgICAgICAgIGFsdExhYmVsPVwiU2lnbiBpblwiXG4gICAgICAgICAgYWx0TGluaz1cIi9hdXRoL2xvZ2luXCJcbiAgICAgICAgLz5cbiAgICAgIH1cbiAgICAgIGF1dGhGb3JtPXs8PjwvPn1cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25VcFxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgRGVzaWduQml0c0xvZ28gZnJvbSBcIi4uL0xvZ29cIlxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aXRsZTogc3RyaW5nXG4gIGFsdExpbms6IHN0cmluZ1xuICBhbHRMYWJlbDogc3RyaW5nXG59XG5cbmNvbnN0IEF1dGhIZWFkaW5nID0gKHsgdGl0bGUsIGFsdExhYmVsLCBhbHRMaW5rIH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxEZXNpZ25CaXRzTG9nbyBoZWlnaHQ9ezQwfSAvPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTYgdGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMFwiPnt0aXRsZX08L2gyPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgT3J7XCIgXCJ9XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgdG89e2FsdExpbmt9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1pbmRpZ28tNjAwIGhvdmVyOnRleHQtaW5kaWdvLTUwMFwiXG4gICAgICAgID5cbiAgICAgICAgICB7YWx0TGFiZWx9XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoSGVhZGluZ1xuIiwgImludGVyZmFjZSBQcm9wcyB7XG4gIGhlYWRpbmc6IFJlYWN0LlJlYWN0RWxlbWVudFxuICBhdXRoRm9ybTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmNvbnN0IEF1dGhMYXlvdXQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGhlYWRpbmcsIGF1dGhGb3JtIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1mdWxsIGZsZXggdy1mdWxsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgcHktMTIgcHgtNCBzbTpweC02IGxnOmZsZXgtbm9uZSBsZzpweC0yMCB4bDpweC0yNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byB3LWZ1bGwgbWF4LXctc20gbGc6dy05NlwiPlxuICAgICAgICAgICAge2hlYWRpbmd9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LThcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02XCI+e2F1dGhGb3JtfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+e1wiIFwifVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgcmVsYXRpdmUgdy0wIGZsZXgtMVwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDU5MDQyNjc1NjktZjAyZWFlYjQ1YTRjP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xOTA4JnE9ODBcIlxuICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhMYXlvdXRcbiIsICJpbXBvcnQgeyBqc29uLCB1c2VBY3Rpb25EYXRhLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwicmVtaXhcIlxuaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgQXV0aEhlYWRpbmcgZnJvbSBcIn4vY29tcG9uZW50cy9hdXRoL0F1dGhIZWFkaW5nXCJcbmltcG9ydCB7IGNyZWF0ZVVzZXJTZXNzaW9uLCBsb2dpbiB9IGZyb20gXCIuLi8uLi91dGlscy9zZXNzaW9uLnNlcnZlclwiXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gXCJ+L2NvbXBvbmVudHMvYXV0aC9Mb2dpbkZvcm1cIlxuaW1wb3J0IEF1dGhMYXlvdXQgZnJvbSBcIn4vY29tcG9uZW50cy9BdXRoTGF5b3V0XCJcbmltcG9ydCB7IHosIFpvZEVycm9yIH0gZnJvbSBcInpvZFwiXG5pbXBvcnQgeyBSZXF1aXJlQXRMZWFzdE9uZSB9IGZyb20gXCJ0eXBlLWZlc3RcIlxuXG5jb25zdCBMb2dpblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKS5tYXgoMjU2KSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDgpLm1heCgyMCksXG4gIHJlZGlyZWN0VG86IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbn0pXG5cbnR5cGUgTG9naW5Gb3JtRmllbGRzID0gei5pbmZlcjx0eXBlb2YgTG9naW5TY2hlbWE+XG5cbmV4cG9ydCB0eXBlIExvZ2luQWN0aW9uRGF0YSA9IHtcbiAgZXJyb3I6IFJlcXVpcmVBdExlYXN0T25lPFxuICAgIFpvZEVycm9yPExvZ2luRm9ybUZpZWxkcz5bXCJmb3JtRXJyb3JzXCJdLFxuICAgIFwiZmllbGRFcnJvcnNcIiB8IFwiZm9ybUVycm9yc1wiXG4gID5cbiAgZmllbGRzOiBQYXJ0aWFsPExvZ2luRm9ybUZpZWxkcz5cbn1cblxuY29uc3QgYmFkUmVxdWVzdCA9IChkYXRhOiBMb2dpbkFjdGlvbkRhdGEpID0+IGpzb24oZGF0YSwgeyBzdGF0dXM6IDQwMCB9KVxuY29uc3QgaW50ZXJuYWxFcnJvciA9IChkYXRhOiBMb2dpbkFjdGlvbkRhdGEpID0+IGpzb24oZGF0YSwgeyBzdGF0dXM6IDUwMCB9KVxuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpXG5cbiAgY29uc3QgZmllbGRzID0ge1xuICAgIGVtYWlsOiBmb3JtLmdldChcImVtYWlsXCIpLFxuICAgIHBhc3N3b3JkOiBmb3JtLmdldChcInBhc3N3b3JkXCIpLFxuICAgIHJlZGlyZWN0VG86IGZvcm0uZ2V0KFwicmVkaXJlY3RUb1wiKSxcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gTG9naW5TY2hlbWEucGFyc2UoZmllbGRzKVxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCByZWRpcmVjdFRvID0gXCIvZXhwbG9yZVwiIH0gPSB2YWxpZGF0ZWRGaWVsZHNcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgbG9naW4oeyBlbWFpbCwgcGFzc3dvcmQgfSlcblxuICAgIGlmICghdXNlcikge1xuICAgICAgcmV0dXJuIGJhZFJlcXVlc3Qoe1xuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIGZvcm1FcnJvcnM6IFtgVXNlcm5hbWUvUGFzc3dvcmQgY29tYmluYXRpb24gaXMgaW5jb3JyZWN0YF0sXG4gICAgICAgIH0sXG4gICAgICAgIGZpZWxkczoge1xuICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgIHJlZGlyZWN0VG8sXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlVXNlclNlc3Npb24odXNlci5pZCwgcmVkaXJlY3RUbylcbiAgfSBjYXRjaCAoZXJyb3I6IFpvZEVycm9yPExvZ2luRm9ybUZpZWxkcz5bXCJmb3JtRXJyb3JzXCJdIHwgdW5rbm93bikge1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFpvZEVycm9yKSB7XG4gICAgICByZXR1cm4gYmFkUmVxdWVzdCh7XG4gICAgICAgIGZpZWxkczogZmllbGRzIGFzIExvZ2luRm9ybUZpZWxkcyxcbiAgICAgICAgZXJyb3I6IGVycm9yLmZvcm1FcnJvcnMgYXMgWm9kRXJyb3I8TG9naW5Gb3JtRmllbGRzPltcImZvcm1FcnJvcnNcIl0sXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaW50ZXJuYWxFcnJvcih7XG4gICAgICAgIGZpZWxkczogZmllbGRzIGFzIExvZ2luRm9ybUZpZWxkcyxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICBmb3JtRXJyb3JzOiBbXCJTb21ldGhpbmcgd2VudCB3cm9uZyFcIl0sXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5pbnRlcmZhY2UgUHJvcHMge31cblxuY29uc3QgTG9naW4gPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhPExvZ2luQWN0aW9uRGF0YT4oKVxuXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKClcblxuICByZXR1cm4gKFxuICAgIDxBdXRoTGF5b3V0XG4gICAgICBoZWFkaW5nPXtcbiAgICAgICAgPEF1dGhIZWFkaW5nXG4gICAgICAgICAgdGl0bGU9XCJTaWduIGluIHRvIHlvdXIgYWNjb3VudFwiXG4gICAgICAgICAgYWx0TGFiZWw9XCJTaWduIHVwXCJcbiAgICAgICAgICBhbHRMaW5rPVwiL2F1dGgvc2lnbi11cFwiXG4gICAgICAgIC8+XG4gICAgICB9XG4gICAgICBhdXRoRm9ybT17XG4gICAgICAgIDxMb2dpbkZvcm0gc2VhcmNoUGFyYW1zPXtzZWFyY2hQYXJhbXN9IGFjdGlvbkRhdGE9e2FjdGlvbkRhdGF9IC8+XG4gICAgICB9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpblxuIiwgImltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiXG5pbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIlxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9kYi5zZXJ2ZXJcIlxuXG50eXBlIExvZ2luRm9ybSA9IHtcbiAgZW1haWw6IHN0cmluZ1xuICBwYXNzd29yZDogc3RyaW5nXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbih7IGVtYWlsLCBwYXNzd29yZCB9OiBMb2dpbkZvcm0pIHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgZW1haWwgfSxcbiAgfSlcbiAgaWYgKCF1c2VyKSByZXR1cm4gbnVsbFxuICBjb25zdCBpc0NvcnJlY3RQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkSGFzaClcbiAgaWYgKCFpc0NvcnJlY3RQYXNzd29yZCkgcmV0dXJuIG51bGxcbiAgcmV0dXJuIHVzZXJcbn1cblxuY29uc3Qgc2Vzc2lvblNlY3JldCA9IHByb2Nlc3MuZW52LlNFU1NJT05fU0VDUkVUXG5pZiAoIXNlc3Npb25TZWNyZXQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiU0VTU0lPTl9TRUNSRVQgbXVzdCBiZSBzZXRcIilcbn1cblxuY29uc3Qgc3RvcmFnZSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcbiAgY29va2llOiB7XG4gICAgbmFtZTogXCJkZXNpZ25iaXRfc2Vzc2lvblwiLFxuICAgIC8vIG5vcm1hbGx5IHlvdSB3YW50IHRoaXMgdG8gYmUgYHNlY3VyZTogdHJ1ZWBcbiAgICAvLyBidXQgdGhhdCBkb2Vzbid0IHdvcmsgb24gbG9jYWxob3N0IGZvciBTYWZhcmlcbiAgICAvLyBodHRwczovL3dlYi5kZXYvd2hlbi10by11c2UtbG9jYWwtaHR0cHMvXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gICAgc2VjcmV0czogW3Nlc3Npb25TZWNyZXRdLFxuICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICAgIHBhdGg6IFwiL1wiLFxuICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzAsXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gIH0sXG59KVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlclNlc3Npb24odXNlcklkOiBzdHJpbmcsIHJlZGlyZWN0VG86IHN0cmluZykge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RvcmFnZS5nZXRTZXNzaW9uKClcbiAgc2Vzc2lvbi5zZXQoXCJ1c2VySWRcIiwgdXNlcklkKVxuICByZXR1cm4gcmVkaXJlY3QocmVkaXJlY3RUbywge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBzdG9yYWdlLmNvbW1pdFNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSlcbn1cbiIsICJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuXG5sZXQgZGI6IFByaXNtYUNsaWVudFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBfX2RiOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWRcbn1cblxuLy8gdGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBpbiBkZXZlbG9wbWVudCB3ZSBkb24ndCB3YW50IHRvIHJlc3RhcnRcbi8vIHRoZSBzZXJ2ZXIgd2l0aCBldmVyeSBjaGFuZ2UsIGJ1dCB3ZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZSBkb24ndFxuLy8gY3JlYXRlIGEgbmV3IGNvbm5lY3Rpb24gdG8gdGhlIERCIHdpdGggZXZlcnkgY2hhbmdlIGVpdGhlci5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgZGIgPSBuZXcgUHJpc21hQ2xpZW50KClcbiAgLy8gZGIuJGNvbm5lY3QoKVxufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwuX19kYikge1xuICAgIGdsb2JhbC5fX2RiID0gbmV3IFByaXNtYUNsaWVudCgpXG4gICAgLy8gZ2xvYmFsLl9fZGIuJGNvbm5lY3QoKVxuICB9XG4gIGRiID0gZ2xvYmFsLl9fZGJcbn1cblxuZXhwb3J0IHsgZGIgfVxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgRm9ybSwgTGluayB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgeyBMb2dpbkFjdGlvbkRhdGEgfSBmcm9tIFwiLi4vLi4vcm91dGVzL2F1dGgvbG9naW5cIlxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuICBhY3Rpb25EYXRhOiBMb2dpbkFjdGlvbkRhdGEgfCB1bmRlZmluZWRcbn1cblxuY29uc3QgTG9naW5Gb3JtID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIGFjdGlvbkRhdGEgPSB7XG4gICAgICBlcnJvcjoge1xuICAgICAgICBmb3JtRXJyb3JzOiBbXSxcbiAgICAgICAgZmllbGRFcnJvcnM6IHtcbiAgICAgICAgICBlbWFpbDogW10sXG4gICAgICAgICAgcGFzc3dvcmQ6IFtdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGZpZWxkczoge1xuICAgICAgICBlbWFpbDogXCJcIixcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHsgZXJyb3IsIGZpZWxkcyB9ID0gYWN0aW9uRGF0YVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1cbiAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgY2xhc3NOYW1lPVwic3BhY2UteS02XCJcbiAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e1xuICAgICAgICBhY3Rpb25EYXRhPy5lcnJvci5mb3JtRXJyb3JzID8gXCJmb3JtLWVycm9yLW1lc3NhZ2VcIiA6IHVuZGVmaW5lZFxuICAgICAgfVxuICAgID5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgbmFtZT1cInJlZGlyZWN0VG9cIlxuICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW5cIlxuICAgICAgICB2YWx1ZT17c2VhcmNoUGFyYW1zLmdldChcInJlZGlyZWN0VG9cIikgPz8gdW5kZWZpbmVkfVxuICAgICAgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgIGh0bWxGb3I9XCJlbWFpbFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIEVtYWlsIGFkZHJlc3NcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBzaGFkb3ctc20gcGxhY2Vob2xkZXItZ3JheS00MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpib3JkZXItaW5kaWdvLTUwMCBzbTp0ZXh0LXNtXCJcbiAgICAgICAgICAgIGFyaWEtaW52YWxpZD17Qm9vbGVhbihlcnJvcj8uZmllbGRFcnJvcnM/LmVtYWlsKX1cbiAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e1xuICAgICAgICAgICAgICBlcnJvcj8uZmllbGRFcnJvcnM/LmVtYWlsID8gXCJ1c2VybmFtZS1lcnJvclwiIDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2ZpZWxkcy5lbWFpbH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtlcnJvcj8uZmllbGRFcnJvcnM/LmVtYWlsID8gKFxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQtc20gcHQtMVwiXG4gICAgICAgICAgICAgIHJvbGU9XCJhbGVydFwiXG4gICAgICAgICAgICAgIGlkPVwidXNlcm5hbWUtZXJyb3JcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7ZXJyb3I/LmZpZWxkRXJyb3JzLmVtYWlsfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMVwiPlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBodG1sRm9yPVwicGFzc3dvcmRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiXG4gICAgICAgID5cbiAgICAgICAgICBQYXNzd29yZFxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTFcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgc2hhZG93LXNtIHBsYWNlaG9sZGVyLWdyYXktNDAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgc206dGV4dC1zbVwiXG4gICAgICAgICAgICBhcmlhLWludmFsaWQ9e0Jvb2xlYW4oZXJyb3I/LmZpZWxkRXJyb3JzPy5wYXNzd29yZCkgfHwgdW5kZWZpbmVkfVxuICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17XG4gICAgICAgICAgICAgIGVycm9yPy5maWVsZEVycm9ycz8ucGFzc3dvcmQgPyBcInBhc3N3b3JkLWVycm9yXCIgOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZmllbGRzLnBhc3N3b3JkfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2Vycm9yPy5maWVsZEVycm9ycz8ucGFzc3dvcmQgPyAoXG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC1zbSBwdC0xXCJcbiAgICAgICAgICAgICAgcm9sZT1cImFsZXJ0XCJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZC1lcnJvclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtlcnJvcj8uZmllbGRFcnJvcnMucGFzc3dvcmR9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwicmVtZW1iZXItbWVcIlxuICAgICAgICAgICAgbmFtZT1cInJlbWVtYmVyLW1lXCJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IHRleHQtaW5kaWdvLTYwMCBmb2N1czpyaW5nLWluZGlnby01MDAgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBodG1sRm9yPVwicmVtZW1iZXItbWVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMiBibG9jayB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFJlbWVtYmVyIG1lXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIHRvPVwiL2F1dGgvZm9yZ290LXBhc3N3b3JkXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtaW5kaWdvLTYwMCBob3Zlcjp0ZXh0LWluZGlnby01MDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEZvcmdvdCB5b3VyIHBhc3N3b3JkP1xuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJmb3JtLWVycm9yLW1lc3NhZ2VcIj5cbiAgICAgICAge2Vycm9yPy5mb3JtRXJyb3JzPy5sZW5ndGggPyAoXG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXNtIHB4LTIgcHktMSBiZy1yZWQtNTAgcm91bmRlZC1zbVwiXG4gICAgICAgICAgICByb2xlPVwiYWxlcnRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtlcnJvcj8uZm9ybUVycm9ycy5qb2luKFwiICYgXCIpfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLW1kIHNoYWRvdy1zbSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWluZGlnby01MDBcIlxuICAgICAgICA+XG4gICAgICAgICAgU2lnbiBpblxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvRm9ybT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IE91dGxldCB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgQ2F0ZWdvcmllc05hdiBmcm9tIFwifi9jb21wb25lbnRzL0NhdGVnb3JpZXNOYXZcIlxuaW1wb3J0IExheW91dCBmcm9tIFwifi9jb21wb25lbnRzL0xheW91dFwiXG5cbmludGVyZmFjZSBQcm9wcyB7fVxuXG5jb25zdCBFeHBsb3JlUm91dGU6IFJlYWN0LkZDPFByb3BzPiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIHctNTZcIj5cbiAgICAgICAgPENhdGVnb3JpZXNOYXYgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleC1jb2xcIj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhwbG9yZVJvdXRlXG4iLCAiaW1wb3J0IHsgQmVsbEljb24sIFZpZXdMaXN0SWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIlxuaW1wb3J0IFN0YWNrSWNvbiBmcm9tIFwiLi9pY29ucy9TdGFja1wiXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCIuLi91dGlscy9jbGFzc25hbWVzXCJcbmltcG9ydCBEYXRhRGlzcGxheUljb24gZnJvbSBcIi4vaWNvbnMvRGF0YURpc3BsYXlcIlxuaW1wb3J0IE5hdmlnYXRpb25JY29uIGZyb20gXCIuL2ljb25zL05hdmlnYXRpb25cIlxuaW1wb3J0IEZlZWRiYWNrSWNvbiBmcm9tIFwiLi9pY29ucy9GZWVkYmFja1wiXG5pbXBvcnQgQ2hhdEljb24gZnJvbSBcIi4vaWNvbnMvQ2hhdFwiXG5pbXBvcnQgTW9kYWxJY29uIGZyb20gXCIuL2ljb25zL01vZGFsXCJcbmltcG9ydCBPbkJvYXJkaW5nSWNvbiBmcm9tIFwiLi9pY29ucy9PbkJvYXJkaW5nXCJcbmltcG9ydCBEcm9wZG93bkljb24gZnJvbSBcIi4vaWNvbnMvRHJvcGRvd25cIlxuaW1wb3J0IEZvcm1JY29uIGZyb20gXCIuL2ljb25zL0Zvcm1cIlxuaW1wb3J0IFRvZ2dsZUljb24gZnJvbSBcIi4vaWNvbnMvVG9nZ2xlXCJcbmltcG9ydCBUYWJsZUljb24gZnJvbSBcIi4vaWNvbnMvVGFibGVcIlxuXG5jb25zdCByb3V0ZVByZWZpeCA9IFwiL2V4cGxvcmVcIlxuXG5jb25zdCBuYXZJdGVtcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiQWxsXCIsXG4gICAgdG86IFwiL1wiLFxuICAgIGljb246IDxTdGFja0ljb24gd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgcm9sZT1cInByZXNlbnRhdGlvblwiIC8+LFxuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTGlzdHNcIixcbiAgICB0bzogXCIvbGlzdHNcIixcbiAgICBpY29uOiA8Vmlld0xpc3RJY29uIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIiAvPixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRGF0YSBkaXNwbGF5XCIsXG4gICAgdG86IFwiL2RhdGEtZGlzcGxheVwiLFxuICAgIGljb246IDxEYXRhRGlzcGxheUljb24gd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgcm9sZT1cInByZXNlbnRhdGlvblwiIC8+LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJOYXZpZ2F0aW9uXCIsXG4gICAgdG86IFwiL25hdmlnYXRpb25cIixcbiAgICBpY29uOiA8TmF2aWdhdGlvbkljb24gd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgcm9sZT1cInByZXNlbnRhdGlvblwiIC8+LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJGZWVkYmFja1wiLFxuICAgIHRvOiBcIi9mZWVkYmFja1wiLFxuICAgIGljb246IDxGZWVkYmFja0ljb24gd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgcm9sZT1cInByZXNlbnRhdGlvblwiIC8+LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDaGF0XCIsXG4gICAgdG86IFwiL2NoYXRcIixcbiAgICBpY29uOiA8Q2hhdEljb24gd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgcm9sZT1cInByZXNlbnRhdGlvblwiIC8+LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJNb2RhbFwiLFxuICAgIHRvOiBcIi9tb2RhbFwiLFxuICAgIGljb246IDxNb2RhbEljb24gd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgcm9sZT1cInByZXNlbnRhdGlvblwiIC8+LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJPbmJvYXJkaW5nXCIsXG4gICAgdG86IFwiL29uYm9hcmRpbmdcIixcbiAgICBpY29uOiA8T25Cb2FyZGluZ0ljb24gd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgcm9sZT1cInByZXNlbnRhdGlvblwiIC8+LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEcm9wZG93blwiLFxuICAgIHRvOiBcIi9kcm9wZG93blwiLFxuICAgIGljb246IDxEcm9wZG93bkljb24gd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgcm9sZT1cInByZXNlbnRhdGlvblwiIC8+LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJOb3RpZmljYXRpb25cIixcbiAgICB0bzogXCIvbm90aWZpY2F0aW9uXCIsXG4gICAgaWNvbjogPEJlbGxJY29uIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIiAvPixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRm9ybXNcIixcbiAgICB0bzogXCIvZm9ybXNcIixcbiAgICBpY29uOiA8Rm9ybUljb24gd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgcm9sZT1cInByZXNlbnRhdGlvblwiIC8+LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJUb2dnbGVzXCIsXG4gICAgdG86IFwiL3RvZ2dsZXNcIixcbiAgICBpY29uOiA8VG9nZ2xlSWNvbiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiByb2xlPVwicHJlc2VudGF0aW9uXCIgLz4sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlRhYmxlc1wiLFxuICAgIHRvOiBcIi90YWJsZXNcIixcbiAgICBpY29uOiA8VGFibGVJY29uIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIiAvPixcbiAgfSxcbl1cblxuY29uc3QgQ2F0ZWdvcmllc05hdiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cInRleHQtc20gc3BhY2UteS0yXCI+XG4gICAgICB7bmF2SXRlbXMubWFwKCh7IG5hbWUsIHRvLCBpY29uIH0pID0+IChcbiAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICBrZXk9e25hbWV9XG4gICAgICAgICAgdG89e3JvdXRlUHJlZml4ICsgdG99XG4gICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PlxuICAgICAgICAgICAgY2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgXCJmbGV4IGl0ZW1zLWNlbnRlciBteC00IHB4LTIgcHktMi41IHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTcwMCBmb250LW1lZGl1bSBob3ZlcjpiZy1pbmRpZ28tNTAgcm91bmRlZC1tZCBzcGFjZS14LTJcIixcbiAgICAgICAgICAgICAgaXNBY3RpdmUgPyBcImJnLWluZGlnby0xMDAgdGV4dC1pbmRpZ28tNzAwIGZvbnQtc2VtaWJvbGRcIiA6IFwiXCIsXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAge2ljb259XG4gICAgICAgICAgPHNwYW4+e25hbWV9PC9zcGFuPlxuICAgICAgICA8L05hdkxpbms+XG4gICAgICApKX1cbiAgICA8L25hdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yaWVzTmF2XG4iLCAiY29uc3QgU3RhY2tJY29uID0gKHByb3BzOiBSZWFjdC5TVkdQcm9wczxTVkdTVkdFbGVtZW50PikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMjBcIlxuICAgICAgaGVpZ2h0PVwiMjBcIlxuICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGQ9XCJNOS42MjczMiAyLjU5Mzg0QzkuODYxOTMgMi40NzY1MyAxMC4xMzgxIDIuNDc2NTMgMTAuMzcyNyAyLjU5Mzg0TDE3LjAzOTMgNS45MjcxN0MxNy4zMjE3IDYuMDY4MzMgMTcuNSA2LjM1Njg4IDE3LjUgNi42NzI1M0MxNy41IDYuOTg4MTcgMTcuMzIxNyA3LjI3NjcyIDE3LjAzOTMgNy40MTc4OEwxMC4zNzI3IDEwLjc1MTJDMTAuMTM4MSAxMC44Njg1IDkuODYxOTMgMTAuODY4NSA5LjYyNzMyIDEwLjc1MTJMMi45NjA2NiA3LjQxNzg4QzIuNjc4MzQgNy4yNzY3MiAyLjUgNi45ODgxNyAyLjUgNi42NzI1M0MyLjUgNi4zNTY4OCAyLjY3ODM0IDYuMDY4MzMgMi45NjA2NiA1LjkyNzE3TDkuNjI3MzIgMi41OTM4NFpNNS4xOTY3MiA2LjY3MjUzTDEwIDkuMDc0MTZMMTQuODAzMyA2LjY3MjUzTDEwIDQuMjcwODlMNS4xOTY3MiA2LjY3MjUzWlwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIk0yLjU4ODE2IDkuNjI2ODVDMi43OTM5OCA5LjIxNTIgMy4yOTQ1NSA5LjA0ODM1IDMuNzA2MTkgOS4yNTQxOEwxMC4wMDAyIDEyLjQwMTJMMTYuMjk0MiA5LjI1NDE4QzE2LjcwNTggOS4wNDgzNSAxNy4yMDY0IDkuMjE1MiAxNy40MTIyIDkuNjI2ODVDMTcuNjE4IDEwLjAzODUgMTcuNDUxMiAxMC41MzkxIDE3LjAzOTUgMTAuNzQ0OUwxMC4zNzI5IDE0LjA3ODJDMTAuMTM4MyAxNC4xOTU1IDkuODYyMTEgMTQuMTk1NSA5LjYyNzUgMTQuMDc4MkwyLjk2MDg0IDEwLjc0NDlDMi41NDkxOSAxMC41MzkxIDIuMzgyMzQgMTAuMDM4NSAyLjU4ODE2IDkuNjI2ODVaXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiTTIuNTg4MTYgMTIuOTY2N0MyLjc5Mzk4IDEyLjU1NSAzLjI5NDU1IDEyLjM4ODIgMy43MDYxOSAxMi41OTRMMTAuMDAwMiAxNS43NDFMMTYuMjk0MiAxMi41OTRDMTYuNzA1OCAxMi4zODgyIDE3LjIwNjQgMTIuNTU1IDE3LjQxMjIgMTIuOTY2N0MxNy42MTggMTMuMzc4MyAxNy40NTEyIDEzLjg3ODkgMTcuMDM5NSAxNC4wODQ3TDEwLjM3MjkgMTcuNDE4MUMxMC4xMzgzIDE3LjUzNTQgOS44NjIxMSAxNy41MzU0IDkuNjI3NSAxNy40MTgxTDIuOTYwODQgMTQuMDg0N0MyLjU0OTE5IDEzLjg3ODkgMi4zODIzNCAxMy4zNzgzIDIuNTg4MTYgMTIuOTY2N1pcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGFja0ljb25cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuY29uc3QgRGF0YURpc3BsYXlJY29uID0gKHByb3BzOiBSZWFjdC5TVkdQcm9wczxTVkdTVkdFbGVtZW50PikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiTTEyIDExLjk5MmExIDEgMCAxMDAgMiAxIDEgMCAwMDAtMnptLTMgMWEzIDMgMCAxMTYgMCAzIDMgMCAwMS02IDB6XCJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiTTE2LjIwNyA4Ljc4NWExIDEgMCAwMTAgMS40MTVsLTIuMDUgMi4wNWExIDEgMCAwMS0xLjQxNC0xLjQxNWwyLjA1LTIuMDVhMSAxIDAgMDExLjQxNCAwelwiXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIk0xMiA0Ljk2MWE4IDggMCAwMC01LjI0IDE0LjA0NmgxMC40OGE4IDggMCAwMDIuMzEzLTguNjgyQTggOCAwIDAwMTIgNC45NnptLTUuNzktLjE1M2ExMCAxMCAwIDAxMTIuMDEyIDE1Ljk4MSAxIDEgMCAwMS0uNjIyLjIxOEg2LjRhMSAxIDAgMDEtLjYyMi0uMjE4QTEwIDEwIDAgMDE2LjIxIDQuODA4elwiXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICA+PC9wYXRoPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oRGF0YURpc3BsYXlJY29uKVxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBOYXZpZ2F0aW9uSWNvbiA9IChwcm9wczogUmVhY3QuU1ZHUHJvcHM8U1ZHU1ZHRWxlbWVudD4pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiTTcuNTg2IDQuNTc4QTIgMiAwIDAxOSAzLjk5M2gxMGExIDEgMCAwMS43MDcuMjkybDIgMmExIDEgMCAwMTAgMS40MTVsLTIgMmExIDEgMCAwMS0uNzA3LjI5M0g5YTIgMiAwIDAxLTItMnYtMmEyIDIgMCAwMS41ODYtMS40MTV6bTExIDEuNDE1SDl2Mmg5LjU4NmwxLTEtMS0xek01LjI5MyAxMi4zQTEgMSAwIDAxNiAxMi4wMDdoN2EyIDIgMCAwMTIgMnYyYTIgMiAwIDAxLTIgMkg2YTEgMSAwIDAxLS43MDctLjI5MmwtMi0yYTEgMSAwIDAxMC0xLjQxNWwyLTJ6bTEuMTIxIDEuNzA3bC0xIDEgMSAxSDEzdi0ySDYuNDE0elwiXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIk0xMiAxNS45OTJhMSAxIDAgMDExIDF2NWExIDEgMCAxMS0yIDB2LTVhMSAxIDAgMDExLTF6TTEyIDhhMSAxIDAgMDExIDF2NGExIDEgMCAxMS0yIDBWOWExIDEgMCAwMTEtMXpNMTIgMmExIDEgMCAwMTEgMXYyYTEgMSAwIDExLTIgMFYzYTEgMSAwIDAxMS0xelwiXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICA+PC9wYXRoPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oTmF2aWdhdGlvbkljb24pXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IEZlZWRiYWNrSWNvbiA9IChwcm9wczogUmVhY3QuU1ZHUHJvcHM8U1ZHU1ZHRWxlbWVudD4pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiTTE0IDYuOTk2YTEgMSAwIDAxMS0xaDFhNSA1IDAgMTEwIDEwSDcuNDE0bDIuMjkzIDIuMjkzYTEgMSAwIDAxLTEuNDE0IDEuNDE0bC00LTRhMSAxIDAgMDEwLTEuNDE0bDQtNGExIDEgMCAxMTEuNDE0IDEuNDE0bC0yLjI5MyAyLjI5M0gxNmEzIDMgMCAwMDAtNmgtMWExIDEgMCAwMS0xLTF6XCJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgID48L3BhdGg+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhGZWVkYmFja0ljb24pXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IENoYXRJY29uID0gKHByb3BzOiBSZWFjdC5TVkdQcm9wczxTVkdTVkdFbGVtZW50PikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGQ9XCJNOS41ODYgMi41ODZBMiAyIDAgMDExMSAyaDlhMiAyIDAgMDEyIDJ2MTBhMSAxIDAgMDEtMS43MDcuNzA3TDE3LjU4NiAxMkgxMWEyIDIgMCAwMS0yLTJWNGEyIDIgMCAwMS41ODYtMS40MTR6TTIwIDRoLTl2Nmg3YTEgMSAwIDAxLjcwNy4yOTNMMjAgMTEuNTg2VjR6XCJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiTTIuNTg2IDkuNTkzQTIgMiAwIDAxNCA5LjAwN2gyYTEgMSAwIDAxMCAySDR2Ny41ODZMNS4yOTMgMTcuM0ExIDEgMCAwMTYgMTcuMDA3aDd2LTJhMSAxIDAgMTEyIDB2MmEyIDIgMCAwMS0yIDJINi40MTRsLTIuNzA3IDIuNzA4QTEgMSAwIDAxMiAyMS4wMDh2LTEwYTIgMiAwIDAxLjU4Ni0xLjQxNXpcIlxuICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgPjwvcGF0aD5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKENoYXRJY29uKVxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBNb2RhbEljb24gPSAocHJvcHM6IFJlYWN0LlNWR1Byb3BzPFNWR1NWR0VsZW1lbnQ+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIk02IDUuMDA3YTEgMSAwIDAwLTEgMXYxMmExIDEgMCAwMDEgMWgxMmExIDEgMCAwMDEtMXYtMTJhMSAxIDAgMDAtMS0xSDZ6bS0zIDFhMyAzIDAgMDEzLTNoMTJhMyAzIDAgMDEzIDN2MTJhMyAzIDAgMDEtMyAzSDZhMyAzIDAgMDEtMy0zdi0xMnpcIlxuICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGQ9XCJNMyA5YTEgMSAwIDAxMS0xaDE2YTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xelwiXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICA+PC9wYXRoPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oTW9kYWxJY29uKVxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBPbkJvYXJkaW5nSWNvbiA9IChwcm9wczogUmVhY3QuU1ZHUHJvcHM8U1ZHU1ZHRWxlbWVudD4pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiTTExLjI5MyAyLjI5M2ExIDEgMCAwMTEuNDE0IDBsOSA5QTEgMSAwIDAxMjEgMTNoLTJhMSAxIDAgMDEtLjM1LTEuOTM3TDEyIDQuNDE0bC02LjY1IDYuNjVBMSAxIDAgMDE1IDEzSDNhMSAxIDAgMDEtLjcwNy0xLjcwN2w5LTl6XCJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiTTUgMTFhMSAxIDAgMDExIDF2N2ExIDEgMCAwMDEgMWgxMGExIDEgMCAwMDEtMXYtN2ExIDEgMCAxMTIgMHY3YTMgMyAwIDAxLTMgM0g3YTMgMyAwIDAxLTMtM3YtN2ExIDEgMCAwMTEtMXpcIlxuICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGQ9XCJNMTEgMTQuMDA3YTEgMSAwIDAwLTEgMXY2YTEgMSAwIDExLTIgMHYtNmEzIDMgMCAwMTMtM2gyYTMgMyAwIDAxMyAzdjZhMSAxIDAgMTEtMiAwdi02YTEgMSAwIDAwLTEtMWgtMnpcIlxuICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgPjwvcGF0aD5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKE9uQm9hcmRpbmdJY29uKVxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBEcm9wZG93bkljb24gPSAocHJvcHM6IFJlYWN0LlNWR1Byb3BzPFNWR1NWR0VsZW1lbnQ+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIk0xMiA4Ljk5NmExIDEgMCAwMTEgMXYxMGExIDEgMCAxMS0yIDB2LTEwYTEgMSAwIDAxMS0xelwiXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIk0xNi43MDcgMTUuMjlhMSAxIDAgMDEwIDEuNDEzbC00IDRhMSAxIDAgMDEtMS40MTQtMS40MTRsNC00YTEgMSAwIDAxMS40MTQgMHpcIlxuICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGQ9XCJNNy4yOTMgMTUuMjlhMSAxIDAgMDExLjQxNCAwbDQgNGExIDEgMCAwMS0xLjQxNCAxLjQxM2wtNC00YTEgMSAwIDAxMC0xLjQxNHpNMyAzLjk5NmExIDEgMCAwMTEtMWgxNmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpcIlxuICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgPjwvcGF0aD5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKERyb3Bkb3duSWNvbilcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuY29uc3QgRm9ybUljb24gPSAocHJvcHM6IFJlYWN0LlNWR1Byb3BzPFNWR1NWR0VsZW1lbnQ+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIk03IDRhMSAxIDAgMDAtMSAxdjE0YTEgMSAwIDAwMSAxaDEwYTEgMSAwIDAwMS0xVjVhMSAxIDAgMDAtMS0xSDd6TTQgNWEzIDMgMCAwMTMtM2gxMGEzIDMgMCAwMTMgM3YxNGEzIDMgMCAwMS0zIDNIN2EzIDMgMCAwMS0zLTNWNXpcIlxuICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGQ9XCJNOCA3LjAwN2ExIDEgMCAwMTEtMWg2YTEgMSAwIDExMCAySDlhMSAxIDAgMDEtMS0xek04IDEwLjk5MmExIDEgMCAwMTEtMWg2YTEgMSAwIDExMCAySDlhMSAxIDAgMDEtMS0xek04IDE1YTEgMSAwIDAxMS0xaDRhMSAxIDAgMTEwIDJIOWExIDEgMCAwMS0xLTF6XCJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgID48L3BhdGg+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhGb3JtSWNvbilcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuY29uc3QgVG9nZ2xlSWNvbiA9IChwcm9wczogUmVhY3QuU1ZHUHJvcHM8U1ZHU1ZHRWxlbWVudD4pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiTTggMTEuMDA3YTEgMSAwIDEwMCAyIDEgMSAwIDAwMC0yem0tMyAxYTMgMyAwIDExNiAwIDMgMyAwIDAxLTYgMHpcIlxuICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGQ9XCJNOCA3YTUgNSAwIDAwMCAxMGg4YTUgNSAwIDAwMC0xMEg4em0tNyA1YTcgNyAwIDAxNy03aDhhNyA3IDAgMTEwIDE0SDhhNyA3IDAgMDEtNy03elwiXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICA+PC9wYXRoPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oVG9nZ2xlSWNvbilcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuY29uc3QgVGFibGVJY29uID0gKHByb3BzOiBSZWFjdC5TVkdQcm9wczxTVkdTVkdFbGVtZW50PikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGQ9XCJNNiA1LjAwN2ExIDEgMCAwMC0xIDF2MTJhMSAxIDAgMDAxIDFoMTJhMSAxIDAgMDAxLTF2LTEyYTEgMSAwIDAwLTEtMUg2em0tMyAxYTMgMyAwIDAxMy0zaDEyYTMgMyAwIDAxMyAzdjEyYTMgMyAwIDAxLTMgM0g2YTMgMyAwIDAxLTMtM3YtMTJ6XCJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgID48L3BhdGg+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiTTMgMTAuMDA3YTEgMSAwIDAxMS0xaDE2YTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xelwiXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICA+PC9wYXRoPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIk0xMCAzLjAwN2ExIDEgMCAwMTEgMXYxNmExIDEgMCAxMS0yIDB2LTE2YTEgMSAwIDAxMS0xelwiXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICA+PC9wYXRoPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oVGFibGVJY29uKVxuIiwgImltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCJcblxuaW50ZXJmYWNlIFByb3BzIHt9XG5cbmludGVyZmFjZSBMb2FkZXJEYXRhIHtcbiAgY2F0ZWdvcnlJZDogc3RyaW5nXG59XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5SWQgPSBwYXJhbXMuY2F0ZWdvcnlcbiAgcmV0dXJuIHsgY2F0ZWdvcnlJZCB9XG59XG5cbmNvbnN0IENhdGVnb3J5UGFnZTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCB7IGNhdGVnb3J5SWQgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDAgdGV4dC0zeGwgZm9udC1ib2xkIGxlYWRpbmctdGlnaHRcIj5cbiAgICAgICAgICAgIHtjYXRlZ29yeUlkfVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpweC02IGxnOnB4LThcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlQYWdlXG4iLCAiaW1wb3J0IEludGVyYWN0aW9uQ2FyZCBmcm9tIFwifi9jb21wb25lbnRzL2ludGVyYWN0aW9uLWNhcmRcIlxuXG5pbnRlcmZhY2UgUHJvcHMge31cblxuY29uc3QgRXhwbG9yZUluZGV4Um91dGU6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwIHRleHQtM3hsIGZvbnQtYm9sZCBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICBBbGwgaW50ZXJhY3Rpb25zXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgIDxJbnRlcmFjdGlvbkNhcmQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhwbG9yZUluZGV4Um91dGVcbiIsICJpbXBvcnQgTGlrZUljb24gZnJvbSBcIi4uL2ljb25zL0xpa2VcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcIi4uLy4uL3V0aWxzL2NsYXNzbmFtZXNcIlxuaW1wb3J0IENvbW1lbnRJY29uIGZyb20gXCIuLi9pY29ucy9Db21tZW50XCJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIlxuXG5jb25zdCBhcnRpY2xlcyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiBcIkJvdHRvbSBuYXZpZ2F0aW9uIGRyYWcgdXRpbGl0eVwiLFxuICAgIGhyZWY6IFwiL2ludGVyYWN0aW9uLzFcIixcbiAgICBzb3VyY2U6IHtcbiAgICAgIGxvZ286IFwiaHR0cHM6Ly9iYXNlY2FtcC5jb20vYmFzZWNhbXAtaWNvbi0xOTZ4MTk2LnBuZ1wiLFxuICAgICAgbmFtZTogXCJCYXNlY2FtcFwiLFxuICAgIH0sXG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiBcIkxlc2xpZVwiLFxuICAgICAgcHJvZmlsZTogXCIvbGVzbGllXCIsXG4gICAgfSxcbiAgICBsaWtlczogMTA2LFxuICAgIGNvbW1lbnRzOiB7XG4gICAgICBjb3VudDogNixcbiAgICB9LFxuICAgIHZpZXdzOiBcIjEuMmtcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3JDbGFzczogXCJiZy15ZWxsb3ctNTBcIixcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlOiBcIkNvbGxhcHNlIHNpZGUgbmF2aWdhdGlvbiBvbi1ob3ZlclwiLFxuICAgIGhyZWY6IFwiL2ludGVyYWN0aW9uLzJcIixcbiAgICBzb3VyY2U6IHtcbiAgICAgIGxvZ286IFwiLy9sb2dvLmNsZWFyYml0LmNvbS9sb29tLmNvbVwiLFxuICAgICAgbmFtZTogXCJMb29tXCIsXG4gICAgfSxcbiAgICBhdXRob3I6IHtcbiAgICAgIG5hbWU6IFwiTGVzbGllXCIsXG4gICAgICBwcm9maWxlOiBcIi9sZXNsaWVcIixcbiAgICB9LFxuICAgIGxpa2VzOiAxMDYsXG4gICAgY29tbWVudHM6IHtcbiAgICAgIGNvdW50OiA2LFxuICAgIH0sXG4gICAgdmlld3M6IFwiMS4ya1wiLFxuICAgIGJhY2tncm91bmRDb2xvckNsYXNzOiBcImJnLWluZGlnby01MFwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdGl0bGU6IFwiSWNvbiB0cmFuc2l0aW9uIG1pY3JvIGFuaW1hdGlvblwiLFxuICAgIGhyZWY6IFwiL2ludGVyYWN0aW9uLzNcIixcbiAgICBzb3VyY2U6IHtcbiAgICAgIGxvZ286IFwiLy9sb2dvLmNsZWFyYml0LmNvbS90ZWxlZ3JhbS5vcmdcIixcbiAgICAgIG5hbWU6IFwiVGVsZWdyYW1cIixcbiAgICB9LFxuICAgIGF1dGhvcjoge1xuICAgICAgbmFtZTogXCJXYWRlIFdhcnJlblwiLFxuICAgICAgcHJvZmlsZTogXCIvd2FkZS13YXJyZW5cIixcbiAgICB9LFxuICAgIGxpa2VzOiAxMDYsXG4gICAgY29tbWVudHM6IHtcbiAgICAgIGNvdW50OiA2LFxuICAgIH0sXG4gICAgdmlld3M6IFwiMS4ya1wiLFxuICAgIGJhY2tncm91bmRDb2xvckNsYXNzOiBcImJnLWdyYXktMjAwXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICB0aXRsZTogXCJTd2lwZSBkb3duIHRvIHJlZnJlc2ggYW5pbWF0aW9uXCIsXG4gICAgaHJlZjogXCIvaW50ZXJhY3Rpb24vNFwiLFxuICAgIHNvdXJjZToge1xuICAgICAgbG9nbzogXCIvL2xvZ28uY2xlYXJiaXQuY29tL2RyaWJiYmxlLmNvbS9cIixcbiAgICAgIG5hbWU6IFwiRHJpYmJibGVcIixcbiAgICB9LFxuICAgIGF1dGhvcjoge1xuICAgICAgbmFtZTogXCJMZXNsaWVcIixcbiAgICAgIHByb2ZpbGU6IFwiL2xlc2xpZVwiLFxuICAgIH0sXG4gICAgbGlrZXM6IDEwNixcbiAgICBjb21tZW50czoge1xuICAgICAgY291bnQ6IDYsXG4gICAgfSxcbiAgICB2aWV3czogXCIxLjJrXCIsXG4gICAgYmFja2dyb3VuZENvbG9yQ2xhc3M6IFwiYmctb3JhbmdlLTUwXCIsXG4gIH0sXG4gIC8vIE1vcmUgcHJvZHVjdHMuLi5cbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50ZXJhY3Rpb25DYXJkKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS04IHNtOnB4LTYgc206cHktOCBsZzpweC0wXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJzci1vbmx5XCI+YXJ0Y2lsZXM8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLXgtNiBnYXAteS0xMCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpnYXAteC04IHhsOmdyaWQtY29scy00XCI+XG4gICAgICAgICAge2FydGljbGVzLm1hcChhcnRpY2xlID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXthcnRpY2xlLmlkfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JheS0yMDAgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICB7LyogPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXthcnRpY2xlLmltYWdlU3JjfVxuICAgICAgICAgICAgICAgICAgYWx0PXthcnRpY2xlLmltYWdlQWx0fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBob3ZlcjpvcGFjaXR5LTc1IG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLmJhY2tncm91bmRDb2xvckNsYXNzLFxuICAgICAgICAgICAgICAgICAgICBcImFzcGVjdC13LTEgYXNwZWN0LWgtMSB4bDphc3BlY3Qtdy03IHhsOmFzcGVjdC1oLTggaC02MCB3LWZ1bGwgaG92ZXI6b3BhY2l0eS03NSBibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIGhyZWY9e2FydGljbGUuaHJlZn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgIHRvPVwiL3Rlc3RcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0xIGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktODAwIGZvbnQtc2VtaWJvbGQgdGV4dC14c1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2FydGljbGUuc291cmNlLmxvZ299XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2FydGljbGUuc291cmNlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTUgaC01IHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YXJ0aWNsZS5zb3VyY2UubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtdC0zIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17YXJ0aWNsZS5ocmVmfT57YXJ0aWNsZS50aXRsZX08L2E+XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB0ZXh0LXhzIG10LTEgc3BhY2UteC0xIHRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXthcnRpY2xlLmF1dGhvci5wcm9maWxlfSBjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby03MDBcIj5cbiAgICAgICAgICAgICAgICAgIHthcnRpY2xlLmF1dGhvci5uYW1lfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8c3Bhbj4mbWlkZG90Ozwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj42IGhycyBhZ288L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+Jm1pZGRvdDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2FydGljbGUudmlld3N9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTIgdGV4dC1ncmF5LTUwMCB0ZXh0LXhzIHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3BhY2UteC0xIGZsZXggaXRlbXMtY2VudGVyIGhvdmVyOnRleHQtaW5kaWdvLTUwMCBob3ZlcjpiZy1pbmRpZ28tNTAgZm9jdXM6dGV4dC1pbmRpZ28tNTAwIGZvY3VzOmJnLWluZGlnby01MCBweC0xIHJvdW5kZWQtc20gcHktMC41XCI+XG4gICAgICAgICAgICAgICAgICA8TGlrZUljb24gaGVpZ2h0PXsxNn0gd2lkdGg9ezE2fSAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2FydGljbGUubGlrZXN9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3BhY2UteC0xIGZsZXggaXRlbXMtY2VudGVyIGhvdmVyOnRleHQtaW5kaWdvLTUwMCBob3ZlcjpiZy1pbmRpZ28tNTAgZm9jdXM6dGV4dC1pbmRpZ28tNTAwIGZvY3VzOmJnLWluZGlnby01MCBweC0xIHJvdW5kZWQtc20gcHktMC41XCI+XG4gICAgICAgICAgICAgICAgICA8Q29tbWVudEljb24gaGVpZ2h0PXsxNn0gd2lkdGg9ezE2fSAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2FydGljbGUuY29tbWVudHMuY291bnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IENvbW1lbnRJY29uID0gKHByb3BzOiBSZWFjdC5TVkdQcm9wczxTVkdTVkdFbGVtZW50PikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiTTQuNjY3IDMuOTk1YTEuMzMzIDEuMzMzIDAgMCAwLTEuMzM0IDEuMzMzdjcuMDU4bDEuNTI5LTEuNTNhLjY2Ny42NjcgMCAwIDEgLjQ3MS0uMTk0aDZhMS4zMzMgMS4zMzMgMCAwIDAgMS4zMzQtMS4zMzR2LTRhMS4zMzMgMS4zMzMgMCAwIDAtMS4zMzQtMS4zMzNINC42NjdaTTIuNzggMy40NDNjLjUtLjUgMS4xNzgtLjc4MSAxLjg4Ni0uNzgxaDYuNjY2QTIuNjY3IDIuNjY3IDAgMCAxIDE0IDUuMzI4djRhMi42NjcgMi42NjcgMCAwIDEtMi42NjcgMi42NjdINS42MWwtMi40NyAyLjQ3MUEuNjY3LjY2NyAwIDAgMSAyIDEzLjk5NVY1LjMyOGMwLS43MDcuMjgtMS4zODUuNzgxLTEuODg1WlwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIk00LjY2NyA2YzAtLjM2OC4yOTgtLjY2Ny42NjYtLjY2N2g1LjMzNGEuNjY3LjY2NyAwIDEgMSAwIDEuMzM0SDUuMzMzQS42NjcuNjY3IDAgMCAxIDQuNjY3IDZaTTQuNjY3IDguNjcyYzAtLjM2OS4yOTgtLjY2Ny42NjYtLjY2N2g0YS42NjcuNjY3IDAgMCAxIDAgMS4zMzNoLTRhLjY2Ny42NjcgMCAwIDEtLjY2Ni0uNjY2WlwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQ29tbWVudEljb24pXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
