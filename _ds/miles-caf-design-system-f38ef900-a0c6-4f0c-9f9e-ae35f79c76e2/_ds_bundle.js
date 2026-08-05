/* @ds-bundle: {"format":4,"namespace":"MilesCafDesignSystem_f38ef9","components":[{"name":"ExpertCard","sourcePath":"components/cards/ExpertCard.jsx"},{"name":"FeatureCard","sourcePath":"components/cards/FeatureCard.jsx"},{"name":"HeroIllustrationCard","sourcePath":"components/cards/HeroIllustrationCard.jsx"},{"name":"PricingTierCard","sourcePath":"components/cards/PricingTierCard.jsx"},{"name":"ProductMockupCard","sourcePath":"components/cards/ProductMockupCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/cards/TestimonialCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CategoryTab","sourcePath":"components/core/CategoryTab.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"TextInput","sourcePath":"components/core/TextInput.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"CtaBand","sourcePath":"components/layout/CtaBand.jsx"},{"name":"Footer","sourcePath":"components/layout/Footer.jsx"},{"name":"HeroBand","sourcePath":"components/layout/HeroBand.jsx"},{"name":"TopNav","sourcePath":"components/layout/TopNav.jsx"}],"sourceHashes":{"components/cards/ExpertCard.jsx":"b00f0335149c","components/cards/FeatureCard.jsx":"e9a2a7795c44","components/cards/HeroIllustrationCard.jsx":"07b8252379c1","components/cards/PricingTierCard.jsx":"3ad9b43d50d2","components/cards/ProductMockupCard.jsx":"d34d8c54f106","components/cards/TestimonialCard.jsx":"1f5a45530959","components/core/Badge.jsx":"416d6b012afd","components/core/Button.jsx":"c767ad951ca9","components/core/CategoryTab.jsx":"e2d72b379c4e","components/core/Icon.jsx":"a20bf814b7de","components/core/TextInput.jsx":"52c76026bdb1","components/core/TextLink.jsx":"ee25715d38a0","components/layout/CtaBand.jsx":"bb4f378bf50f","components/layout/Footer.jsx":"6b7df42e12a8","components/layout/HeroBand.jsx":"373c4a099b96","components/layout/TopNav.jsx":"bbf87adbad97","components/layout/useNarrow.js":"3d18e4dbeb6c","ui_kits/marketing_site/CateringScreen.jsx":"0dfb10a0f1f3","ui_kits/marketing_site/HomeScreen.jsx":"e46a66b5b2bd","ui_kits/marketing_site/MenuScreen.jsx":"ef8b41bee810","ui_kits/marketing_site/PricingScreen.jsx":"0a76b916d782","ui_kits/marketing_site/shell.jsx":"379486a138da"},"inlinedExternals":[],"unexposedExports":[{"name":"useNarrow","sourcePath":"components/layout/useNarrow.js"}]} */

(() => {

const __ds_ns = (window.MilesCafDesignSystem_f38ef9 = window.MilesCafDesignSystem_f38ef9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/ExpertCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Person card — baristas, roasters, event leads. */
function ExpertCard({
  name,
  role,
  blurb,
  photo,
  tone = "azure",
  style,
  ...rest
}) {
  const fills = {
    azure: "var(--brand-dark-azure)",
    teal: "var(--brand-teal)",
    green: "var(--brand-green)",
    honey: "var(--brand-honey)",
    orange: "var(--brand-orange)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)",
      padding: "var(--space-lg)",
      background: "var(--surface-canvas)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-lg)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "132px",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      background: fills[tone],
      display: "grid",
      placeItems: "center"
    }
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption-uppercase)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.7)"
    }
  }, "Portrait")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-title-md)",
      color: "var(--text-ink)"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)"
    }
  }, role)), blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-body)"
    }
  }, blurb));
}
Object.assign(__ds_scope, { ExpertCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ExpertCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  orange: {
    background: "var(--brand-orange)",
    color: "var(--text-ink)"
  },
  teal: {
    background: "var(--brand-teal)",
    color: "var(--text-ink)"
  },
  honey: {
    background: "var(--brand-honey)",
    color: "var(--text-ink)"
  },
  azure: {
    background: "var(--brand-dark-azure)",
    color: "var(--text-on-dark)"
  },
  green: {
    background: "var(--brand-green)",
    color: "var(--text-on-dark)"
  },
  cream: {
    background: "var(--surface-card)",
    color: "var(--text-ink)"
  }
};
function FeatureCard({
  tone = "cream",
  eyebrow,
  title,
  body,
  icon,
  media,
  footer,
  interactive = false,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const t = tones[tone];
  const dim = t.color === "var(--text-on-dark)" ? "rgba(255,255,255,0.78)" : "rgba(10,10,10,0.72)";
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)",
      padding: "var(--space-xl)",
      borderRadius: "var(--radius-xl)",
      background: t.background,
      color: t.color,
      transform: hover ? "translateY(-2px)" : "none",
      boxShadow: hover ? "var(--elevation-hover)" : "none",
      transition: "transform var(--motion-base) var(--ease-out), box-shadow var(--motion-base) var(--ease-out)",
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: t.color
    }
  }, icon), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption-uppercase)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: dim
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-title-md)",
      color: t.color,
      margin: 0,
      letterSpacing: 0
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-md)",
      color: dim
    }
  }, body), media && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-xs)"
    }
  }, media), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: "var(--space-md)"
    }
  }, footer));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/HeroIllustrationCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The hero artifact: a cream 24px-radius frame whose entire job is to hold brand illustration. */
function HeroIllustrationCard({
  src,
  alt = "",
  caption,
  height = 420,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-soft)",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: `${height}px`,
      padding: "var(--space-lg)",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      maxWidth: "100%",
      maxHeight: `${height - 48}px`,
      objectFit: "contain",
      display: "block"
    }
  }) : children || /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-xs)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption-uppercase)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-muted-soft)"
    }
  }, "Illustration slot"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, "Drop the brand illustration here")), caption && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-sm)",
      font: "var(--type-caption)",
      color: "var(--text-muted)"
    }
  }, caption));
}
Object.assign(__ds_scope, { HeroIllustrationCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/HeroIllustrationCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/PricingTierCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PricingTierCard({
  name,
  price,
  unit,
  description,
  features = [],
  cta,
  featured = false,
  badge,
  style,
  ...rest
}) {
  const color = featured ? "var(--text-ink)" : "var(--text-ink)";
  const dim = featured ? "rgba(10,10,10,0.72)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)",
      padding: "var(--space-xl)",
      borderRadius: "var(--radius-lg)",
      background: featured ? "var(--brand-teal)" : "var(--surface-canvas)",
      border: featured ? "1px solid transparent" : "1px solid var(--border-hairline)",
      color,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-sm)"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      font: "var(--type-title-lg)",
      letterSpacing: "var(--tracking-title-lg)",
      color,
      margin: 0,
      flex: 1
    }
  }, name), badge), description && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: dim
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-display-sm)",
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-display-sm)",
      color
    }
  }, price), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: dim
    }
  }, unit)), features.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-xs)",
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: "var(--space-xs)",
      font: "var(--type-body-sm)",
      color: featured ? "rgba(10,10,10,0.82)" : "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "6px",
      height: "6px",
      borderRadius: "var(--radius-full)",
      background: featured ? "var(--clr-azure-900)" : "var(--brand-orange)",
      marginTop: "8px",
      flex: "0 0 auto"
    }
  }), f))), cta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: "var(--space-md)"
    }
  }, cta));
}
Object.assign(__ds_scope, { PricingTierCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PricingTierCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProductMockupCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Cream card that frames a small product-UI fragment or product photo. */
function ProductMockupCard({
  title,
  caption,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)",
      padding: "var(--space-lg)",
      background: "var(--surface-canvas)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-lg)",
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("h4", {
    style: {
      font: "var(--type-title-md)",
      letterSpacing: 0,
      color: "var(--text-ink)",
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      background: "var(--surface-soft)"
    }
  }, children), caption && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)"
    }
  }, caption));
}
Object.assign(__ds_scope, { ProductMockupCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProductMockupCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TestimonialCard({
  quote,
  name,
  role,
  avatar,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)",
      margin: 0,
      padding: "var(--space-lg)",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "40px",
      height: "40px",
      borderRadius: "var(--radius-full)",
      flex: "0 0 auto",
      overflow: "hidden",
      background: "var(--brand-dark-azure)",
      color: "var(--text-on-dark)",
      display: "grid",
      placeItems: "center",
      font: "var(--type-title-sm)"
    }
  }, avatar ? /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : (name || "?").charAt(0)), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-title-sm)",
      color: "var(--text-ink)"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)"
    }
  }, role))), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      font: "var(--type-body-md)",
      color: "var(--text-body)"
    }
  }, quote));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  cream: {
    background: "var(--surface-card)",
    color: "var(--text-ink)"
  },
  orange: {
    background: "var(--brand-orange)",
    color: "var(--text-ink)"
  },
  teal: {
    background: "var(--brand-teal)",
    color: "var(--text-ink)"
  },
  honey: {
    background: "var(--brand-honey)",
    color: "var(--text-ink)"
  },
  azure: {
    background: "var(--brand-dark-azure)",
    color: "var(--text-on-dark)"
  },
  green: {
    background: "var(--brand-green)",
    color: "var(--text-on-dark)"
  },
  outline: {
    background: "transparent",
    color: "var(--text-ink)",
    boxShadow: "inset 0 0 0 1px var(--border-hairline)"
  }
};
function Badge({
  tone = "cream",
  uppercase = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: uppercase ? "5px 12px" : "4px 12px",
      borderRadius: "var(--radius-pill)",
      font: uppercase ? "var(--type-caption-uppercase)" : "var(--type-caption)",
      letterSpacing: uppercase ? "var(--tracking-caps)" : 0,
      textTransform: uppercase ? "uppercase" : "none",
      whiteSpace: "nowrap",
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  font: "var(--type-button)",
  letterSpacing: 0,
  borderRadius: "var(--radius-md)",
  border: "1px solid transparent",
  cursor: "pointer",
  textDecoration: "none",
  transition: "background-color var(--motion-base) var(--ease-standard), color var(--motion-base) var(--ease-standard), transform var(--motion-fast) var(--ease-standard)",
  whiteSpace: "nowrap"
};
const sizes = {
  sm: {
    height: "36px",
    padding: "0 14px",
    fontSize: "13px",
    borderRadius: "var(--radius-sm)"
  },
  md: {
    height: "44px",
    padding: "0 20px"
  },
  lg: {
    height: "52px",
    padding: "0 26px",
    fontSize: "15px"
  }
};
const variants = {
  primary: {
    background: "var(--color-primary)",
    color: "var(--text-on-primary)"
  },
  secondary: {
    background: "var(--surface-canvas)",
    color: "var(--text-ink)",
    borderColor: "var(--border-hairline)"
  },
  onColor: {
    background: "var(--surface-canvas)",
    color: "var(--text-ink)"
  },
  textLink: {
    background: "transparent",
    color: "var(--text-ink)",
    padding: "0",
    height: "auto",
    textDecoration: "underline",
    textUnderlineOffset: "3px"
  }
};
const hovers = {
  primary: {
    background: "var(--color-primary-active)"
  },
  secondary: {
    background: "var(--surface-card)"
  },
  onColor: {
    background: "var(--surface-card)"
  },
  textLink: {
    color: "var(--brand-dark-azure)"
  }
};
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  iconLeft,
  iconRight,
  fullWidth = false,
  href,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = href && !disabled ? "a" : "button";
  const composed = {
    ...base,
    ...(variant === "textLink" ? {} : sizes[size]),
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(press && !disabled ? {
      transform: "translateY(1px)"
    } : null),
    ...(disabled ? {
      background: "var(--color-primary-disabled)",
      color: "var(--text-muted)",
      borderColor: "transparent",
      cursor: "not-allowed"
    } : null),
    ...(fullWidth ? {
      width: "100%"
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === "button" ? disabled : undefined,
    style: composed,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/CategoryTab.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CategoryTab({
  active = false,
  children,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      font: "var(--type-nav-link)",
      padding: "8px 16px",
      borderRadius: "var(--radius-pill)",
      border: "none",
      cursor: "pointer",
      background: active ? "var(--surface-card)" : hover ? "var(--surface-soft)" : "transparent",
      color: active ? "var(--text-ink)" : hover ? "var(--text-body-strong)" : "var(--text-muted)",
      transition: "background-color var(--motion-base) var(--ease-standard), color var(--motion-base) var(--ease-standard)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { CategoryTab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CategoryTab.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Lucide wrapper (substituted icon set — see readme ICONOGRAPHY).
 *  Requires the Lucide UMD script on the page. */
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  color = "currentColor",
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = "";
    const span = document.createElement("i");
    span.setAttribute("data-lucide", name);
    el.appendChild(span);
    try {
      window.lucide.createIcons({
        nameAttr: "data-lucide",
        attrs: {
          width: size,
          height: size,
          "stroke-width": strokeWidth,
          stroke: color
        },
        root: el
      });
    } catch (e) {/* icon set not loaded */}
  }, [name, size, strokeWidth, color]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      flex: "0 0 auto",
      color,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/TextInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextInput({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  error,
  hint,
  iconLeft,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? "var(--color-error)" : focus ? "var(--text-ink)" : "var(--border-hairline)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-xs)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: "var(--type-caption)",
      color: "var(--text-body-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-xs)",
      height: "44px",
      padding: "0 16px",
      background: disabled ? "var(--surface-card)" : "var(--surface-canvas)",
      border: `${focus || error ? 2 : 1}px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focus ? "var(--elevation-focus-ring)" : "none",
      transition: "border-color var(--motion-base) var(--ease-standard), box-shadow var(--motion-base) var(--ease-standard)"
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--text-muted)"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      font: "var(--type-body-md)",
      color: "var(--text-ink)"
    }
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: error ? "var(--color-error)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextLink({
  href = "#",
  children,
  muted = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      font: "var(--type-body-md)",
      color: hover ? "var(--brand-dark-azure)" : muted ? "var(--text-muted)" : "var(--text-ink)",
      textDecoration: "underline",
      textUnderlineOffset: "3px",
      textDecorationThickness: "1px",
      textDecorationColor: hover ? "var(--brand-orange)" : "currentColor",
      transition: "color var(--motion-base) var(--ease-standard)",
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/layout/useNarrow.js
try { (() => {
/** Media-query hook — the one place the kit reads viewport width, since inline
 *  styles can't hold @media rules. */
function useNarrow(maxWidth = 767) {
  const [narrow, setNarrow] = React.useState(() => typeof window !== "undefined" && window.matchMedia(`(max-width:${maxWidth}px)`).matches);
  React.useEffect(() => {
    const mq = window.matchMedia(`(max-width:${maxWidth}px)`);
    const on = e => setNarrow(e.matches);
    setNarrow(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [maxWidth]);
  return narrow;
}
Object.assign(__ds_scope, { useNarrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/useNarrow.js", error: String((e && e.message) || e) }); }

// components/layout/CtaBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pre-footer illustrated CTA band on --surface-soft, 24px radius, 80px padding. */
function CtaBand({
  headline,
  sub,
  actions,
  aside,
  style,
  ...rest
}) {
  const narrow = __ds_scope.useNarrow(900);
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      padding: "0 var(--space-lg) var(--space-section)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      background: "var(--surface-soft)",
      borderRadius: "var(--radius-xl)",
      padding: narrow ? "var(--space-xxl) var(--space-lg)" : "80px",
      display: "grid",
      gridTemplateColumns: aside && !narrow ? "1.2fr 0.8fr" : "1fr",
      gap: "var(--space-xxl)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-lg)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-display-md)",
      letterSpacing: "var(--tracking-display-md)",
      color: "var(--text-ink)",
      margin: 0,
      maxWidth: "16em"
    }
  }, headline), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-md)",
      color: "var(--text-body)",
      maxWidth: "32em"
    }
  }, sub), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-sm)",
      flexWrap: "wrap"
    }
  }, actions)), aside && /*#__PURE__*/React.createElement("div", null, aside)));
}
Object.assign(__ds_scope, { CtaBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/CtaBand.jsx", error: String((e && e.message) || e) }); }

// components/layout/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Cream footer — never dark. 4 link columns + fine print. */
function Footer({
  logoSrc,
  blurb,
  columns = [],
  legal = "© Miles café & co.",
  style,
  ...rest
}) {
  const narrow = __ds_scope.useNarrow(900);
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: "var(--surface-soft)",
      padding: "80px var(--space-lg) var(--space-xl)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: narrow ? "1fr 1fr" : "1.4fr repeat(4, 1fr)",
      gap: "var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)"
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Miles caf\xE9 & co.",
    style: {
      height: "56px",
      width: "auto",
      alignSelf: "flex-start"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-title-lg)",
      fontFamily: "var(--font-display)",
      color: "var(--brand-dark-azure)"
    }
  }, "miles"), blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)",
      maxWidth: "26em"
    }
  }, blurb)), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption-uppercase)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-ink)"
    }
  }, col.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-xs)"
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    key: l,
    muted: true,
    href: "#",
    style: {
      font: "var(--type-body-sm)",
      textDecoration: "none"
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "var(--space-xxl) auto 0",
      paddingTop: "var(--space-lg)",
      borderTop: "1px solid var(--border-hairline)",
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--space-md)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted-soft)"
    }
  }, legal), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted-soft)"
    }
  }, "Poured on site, every time.")));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Footer.jsx", error: String((e && e.message) || e) }); }

// components/layout/HeroBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** 7/5 hero band: headline + sub + actions left, illustration artifact right. */
function HeroBand({
  eyebrow,
  headline,
  sub,
  actions,
  aside,
  style,
  ...rest
}) {
  const narrow = __ds_scope.useNarrow(900);
  const cols = narrow || !aside ? "1fr" : "7fr 5fr";
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background: "var(--surface-canvas)",
      padding: "var(--space-section) var(--space-lg)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: cols,
      gap: "var(--space-xxl)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-lg)",
      alignItems: "flex-start"
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption-uppercase)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-display-xl)",
      letterSpacing: "var(--tracking-display-xl)",
      color: "var(--text-ink)",
      margin: 0,
      maxWidth: "12em"
    }
  }, headline), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-md)",
      fontSize: "18px",
      lineHeight: 1.5,
      color: "var(--text-body)",
      maxWidth: "34em"
    }
  }, sub), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-sm)",
      flexWrap: "wrap"
    }
  }, actions)), /*#__PURE__*/React.createElement("div", null, aside)));
}
Object.assign(__ds_scope, { HeroBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/HeroBand.jsx", error: String((e && e.message) || e) }); }

// components/layout/TopNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TopNav({
  logoSrc,
  links = [],
  activeLink,
  cta = "Get catering",
  secondary = "About us",
  onNavigate,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const narrow = __ds_scope.useNarrow(767);
  const nav = dir => ({
    display: "flex",
    flexDirection: dir,
    alignItems: dir === "row" ? "center" : "flex-start",
    gap: "var(--space-lg)"
  });
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "var(--surface-canvas)",
      borderBottom: "1px solid var(--border-hairline-soft)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      height: "64px",
      padding: "0 var(--space-lg)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(links[0]);
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      textDecoration: "none",
      flex: "0 0 auto"
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Miles caf\xE9 & co.",
    style: {
      height: "26px",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-title-lg)",
      fontFamily: "var(--font-display)",
      color: "var(--brand-dark-azure)",
      letterSpacing: "-0.5px"
    }
  }, "miles")), /*#__PURE__*/React.createElement("nav", {
    style: {
      ...nav("row"),
      flex: 1,
      display: narrow ? "none" : "flex"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(l);
    },
    style: {
      font: "var(--type-nav-link)",
      textDecoration: "none",
      color: l === activeLink ? "var(--text-ink)" : "var(--text-muted)",
      borderBottom: l === activeLink ? "2px solid var(--brand-orange)" : "2px solid transparent",
      paddingBottom: "2px",
      transition: "color var(--motion-base) var(--ease-standard)"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-md)",
      flex: "0 0 auto",
      marginLeft: "auto"
    }
  }, secondary && !narrow && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "textLink",
    onClick: () => onNavigate && onNavigate(secondary)
  }, secondary), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onNavigate && onNavigate(cta)
  }, cta), narrow && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Menu",
    "aria-expanded": open,
    onClick: () => setOpen(!open),
    style: {
      width: "40px",
      height: "40px",
      display: "grid",
      placeItems: "center",
      gap: "4px",
      background: "transparent",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-sm)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: "16px",
      height: "1.5px",
      background: "var(--text-ink)",
      boxShadow: "0 5px 0 var(--text-ink), 0 -5px 0 var(--text-ink)"
    }
  })))), narrow && open && /*#__PURE__*/React.createElement("nav", {
    style: {
      ...nav("column"),
      gap: "var(--space-md)",
      padding: "var(--space-md) var(--space-lg) var(--space-lg)",
      borderTop: "1px solid var(--border-hairline-soft)"
    }
  }, [...links, secondary].filter(Boolean).map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      setOpen(false);
      onNavigate && onNavigate(l);
    },
    style: {
      font: "var(--type-nav-link)",
      fontSize: "16px",
      textDecoration: "none",
      color: l === activeLink ? "var(--text-ink)" : "var(--text-muted)"
    }
  }, l))));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/TopNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/CateringScreen.jsx
try { (() => {
const {
  Section,
  Grid,
  Split,
  DS,
  A
} = window;
const {
  HeroBand,
  CtaBand,
  Button,
  Badge,
  Icon,
  FeatureCard,
  ExpertCard,
  HeroIllustrationCard,
  TextInput,
  TextLink
} = DS;
function SetupRow({
  name,
  guests,
  crew,
  tone
}) {
  return /*#__PURE__*/React.createElement(FeatureCard, {
    tone: tone,
    eyebrow: `${guests} guests`,
    title: name,
    body: `${crew} on the bar. Espresso, filter and one seasonal pour, plus decaf on request.`,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 24
    }),
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "onColor",
      size: "sm"
    }, "Hold a date")
  });
}
function EnquiryForm() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-xl)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      font: "var(--type-title-lg)",
      letterSpacing: "var(--tracking-title-lg)",
      margin: 0,
      color: "var(--text-ink)"
    }
  }, "Start an enquiry"), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-sm)",
      alignItems: "flex-start",
      font: "var(--type-body-md)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    color: "var(--color-success)"
  }), /*#__PURE__*/React.createElement("span", null, "Got it. You'll hear from us within a day \u2014 usually the same afternoon.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextInput, {
    label: "Event date",
    placeholder: "14 Oct 2026",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "calendar"
    })
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: "Headcount",
    placeholder: "120",
    hint: "Minimum 40 guests"
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: "Email",
    placeholder: "you@work.com",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "mail"
    })
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => setSent(true)
  }, "Send it over"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)"
    }
  }, "Or email ", /*#__PURE__*/React.createElement(TextLink, {
    href: "#",
    style: {
      font: "var(--type-caption)"
    }
  }, "catering@milescafe.co"))));
}
function CateringScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroBand, {
    eyebrow: "Catering",
    headline: "A bar that fits your floor plan.",
    sub: "Three setups, one crew. We size the bar to the room and the room to your load-in window.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: () => onNavigate("Pricing")
    }, "See packages"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg"
    }, "Book a tasting")),
    aside: /*#__PURE__*/React.createElement(HeroIllustrationCard, {
      height: 380
    })
  }), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Setups",
    title: "Pick the footprint, we'll bring the rest.",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(Grid, {
    cols: 3
  }, /*#__PURE__*/React.createElement(SetupRow, {
    tone: "teal",
    name: "Counter",
    guests: "40\u201380",
    crew: "One barista"
  }), /*#__PURE__*/React.createElement(SetupRow, {
    tone: "orange",
    name: "Pop-up bar",
    guests: "80\u2013200",
    crew: "Two baristas"
  }), /*#__PURE__*/React.createElement(SetupRow, {
    tone: "azure",
    name: "Full residency",
    guests: "200\u2013600",
    crew: "Four baristas"
  }))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Who shows up",
    title: "The crew is the product."
  }, /*#__PURE__*/React.createElement(Grid, {
    cols: 4
  }, /*#__PURE__*/React.createElement(ExpertCard, {
    tone: "teal",
    name: "Ruth Amissah",
    role: "Lead barista",
    blurb: "Ten years behind bars in Accra and Copenhagen."
  }), /*#__PURE__*/React.createElement(ExpertCard, {
    tone: "orange",
    name: "Theo Lindqvist",
    role: "Roaster",
    blurb: "Sets every curve for the week's lots."
  }), /*#__PURE__*/React.createElement(ExpertCard, {
    tone: "green",
    name: "Sam Ojeda",
    role: "Event lead",
    blurb: "Owns the load-in plan and your venue's patience."
  }), /*#__PURE__*/React.createElement(ExpertCard, {
    tone: "honey",
    name: "Wren Halliday",
    role: "Pastry",
    blurb: "Laminates at 4am, next door."
  }))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Book it",
    title: "Two questions and a date."
  }, /*#__PURE__*/React.createElement(Split, {
    split: "form"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-lg)"
    }
  }, [["Tell us the room", "Square footage, power, and where the bin goes. Photos help."], ["We send a plan", "Bar layout, menu card, crew list, and a quote — usually within a day."], ["We pour", "Arrive two hours ahead, open on the minute, pack down in forty."]].map(([t, b], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      gap: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "36px",
      height: "36px",
      flex: "0 0 auto",
      borderRadius: "var(--radius-full)",
      background: "var(--brand-dark-azure)",
      color: "var(--text-on-dark)",
      display: "grid",
      placeItems: "center",
      font: "var(--type-title-sm)"
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      font: "var(--type-title-md)",
      letterSpacing: 0,
      margin: 0,
      color: "var(--text-ink)"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-md)",
      color: "var(--text-body)",
      marginTop: "4px"
    }
  }, b)))), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "Portland & the Willamette Valley")), /*#__PURE__*/React.createElement(EnquiryForm, null))), /*#__PURE__*/React.createElement(CtaBand, {
    headline: "Still deciding? Come taste it first.",
    sub: "Free tastings for events over eighty guests.",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "lg"
    }, "Book a tasting")
  }));
}
window.CateringScreen = CateringScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/CateringScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/HomeScreen.jsx
try { (() => {
const {
  Section,
  Grid,
  Split,
  DS,
  A
} = window;
const {
  HeroBand,
  CtaBand,
  Button,
  Badge,
  Icon,
  FeatureCard,
  TestimonialCard,
  HeroIllustrationCard,
  ProductMockupCard
} = DS;
function Timeline() {
  const rows = [["07:30", "Load in", 30], ["08:15", "Bar open", 70], ["11:30", "Pack down", 100]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)",
      padding: "var(--space-md)"
    }
  }, rows.map(([t, l, w]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-sm)",
      font: "var(--type-body-sm)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--brand-dark-azure)",
      width: "42px",
      flex: "0 0 auto"
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "6px",
      width: `${w}px`,
      borderRadius: "var(--radius-pill)",
      background: "var(--brand-sky)",
      flex: "0 0 auto"
    }
  }), /*#__PURE__*/React.createElement("span", null, l))));
}
function HomeScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroBand, {
    eyebrow: "Craft beverage catering",
    headline: "Have the event people will rave about.",
    sub: "We bring the caf\xE9 to your floor plan \u2014 beans, bar, baristas, and a menu that fits the room.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: () => onNavigate("Pricing")
    }, "Get catering"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      onClick: () => onNavigate("Menu")
    }, "See the menu")),
    aside: /*#__PURE__*/React.createElement(HeroIllustrationCard, {
      src: `${A}/brand-landscape.png`,
      alt: "Miles sunset landscape",
      height: 400
    })
  }), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "What you get",
    title: "Everything a caf\xE9 is, moved to your room.",
    sub: "One bar, one crew, one invoice. We plan around your load-in window and leave the space cleaner than we found it.",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(Grid, {
    cols: 3
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    interactive: true,
    tone: "orange",
    eyebrow: "The bar",
    title: "A bar that fits your floor plan",
    body: "Two baristas, sixteen taps, one folding table \u2014 or a full residency in your lobby.",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "coffee",
      size: 24
    }),
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "onColor",
      size: "sm",
      onClick: () => onNavigate("Catering")
    }, "See setups")
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    interactive: true,
    tone: "teal",
    eyebrow: "The list",
    title: "Twelve drinks, one season",
    body: "The menu changes when the beans do. Guests get four espresso builds, filter, and two cold pours.",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "leaf",
      size: 24
    }),
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "onColor",
      size: "sm",
      onClick: () => onNavigate("Menu")
    }, "Read the menu")
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    interactive: true,
    tone: "green",
    eyebrow: "The beans",
    title: "Named farms, paid early",
    body: "Every lot traceable to the washing station, roasted eleven days before it hits your event.",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 24
    })
  })), /*#__PURE__*/React.createElement(Grid, {
    cols: 3
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    tone: "honey",
    eyebrow: "Service",
    title: "Poured on site, every time",
    body: "No urns. No thermoses. No apologies.",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "hand-platter",
      size: 24
    })
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    tone: "azure",
    eyebrow: "Logistics",
    title: "In and out in an hour",
    body: "Load-in plan lands with your venue a week ahead.",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "truck",
      size: 24
    }),
    media: /*#__PURE__*/React.createElement(Timeline, null)
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    tone: "cream",
    eyebrow: "Extras",
    title: "Pastry from the bakery next door",
    body: "Laminated at 4am, on your table by 8.",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "croissant",
      size: 24
    })
  }))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Proof",
    title: "Four hundred drinks, three hours, one lobby."
  }, /*#__PURE__*/React.createElement(Grid, {
    cols: 3
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    name: "Dana Okafor",
    role: "Head of Events, Ardent",
    quote: "They poured 400 drinks in three hours and the lobby still smelled like a caf\xE9, not a kitchen."
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    name: "Marcus Rhee",
    role: "Studio Manager, Field & Form",
    quote: "Our crew asked for the bean list the next morning. Nobody has ever asked about catering coffee before."
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    name: "Priya Raman",
    role: "Wedding planner",
    quote: "They set up in a stairwell landing because that's where the power was. It looked deliberate."
  })), /*#__PURE__*/React.createElement(Split, {
    split: "wide"
  }, /*#__PURE__*/React.createElement(ProductMockupCard, {
    title: "Your event, quoted in a day",
    caption: "Send the headcount and window; we return the plan."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-lg)",
      padding: "var(--space-lg)"
    }
  }, [["120", "guests"], ["3 hrs", "on site"], ["$18", "per guest"], ["2", "baristas"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-display-sm)",
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-display-sm)",
      color: "var(--brand-dark-azure)"
    }
  }, v), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "honey",
    uppercase: true
  }, "Booking 2026"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-md)",
      color: "var(--text-body)"
    }
  }, "Autumn dates in Portland are filling. Tell us the week and we'll hold it while you check the room."), /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNavigate("Pricing")
  }, "See packages")))), /*#__PURE__*/React.createElement(CtaBand, {
    headline: "Tell us the headcount. We'll bring the bar.",
    sub: "Most events are quoted within a day.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: () => onNavigate("Pricing")
    }, "Get catering"), /*#__PURE__*/React.createElement(Button, {
      variant: "textLink"
    }, "Talk to us")),
    aside: /*#__PURE__*/React.createElement("img", {
      src: `${A}/logo-mark.png`,
      alt: "",
      style: {
        width: "100%",
        maxWidth: "240px",
        display: "block",
        margin: "0 auto"
      }
    })
  }));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/MenuScreen.jsx
try { (() => {
const {
  Section,
  Grid,
  Split,
  DS,
  A
} = window;
const {
  CtaBand,
  Button,
  Badge,
  Icon,
  CategoryTab,
  FeatureCard,
  ProductMockupCard,
  TextInput
} = DS;
const MENU = {
  Espresso: [["Miles espresso", "$4", "Chocolate, dried fig, long finish.", "Year-round"], ["Cortado", "$4.50", "Two ounces, one ratio, no negotiation.", ""], ["Honey cardamom latte", "$6", "House honey syrup, green cardamom.", "Seasonal"], ["Iced brown sugar shakerato", "$6.50", "Shaken forty times. We counted.", "Seasonal"]],
  Filter: [["Kirinyaga AA", "$5", "Blackcurrant, hibiscus, cane sugar.", "Single lot"], ["Huila washed", "$4.50", "Red apple, panela, almond.", ""], ["Batch brew", "$3.50", "Whatever the roaster liked this week.", ""]],
  Cold: [["Cold brew", "$5", "Eighteen hours, no dilution.", ""], ["Sparkling cascara", "$5.50", "Coffee cherry, lime leaf, soda.", "Limited"], ["Salted cream cold brew", "$6", "Cream cut with sea salt.", ""]],
  "Non-coffee": [["Ceremonial matcha", "$6", "Uji, first harvest, whisked to order.", ""], ["Rooibos horchata", "$5", "Cinnamon, rice, no dairy.", "Vegan"], ["Ginger switchel", "$4.50", "Apple cider vinegar, raw honey.", ""]]
};
function MenuRow({
  name,
  price,
  note,
  flag
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-md)",
      padding: "var(--space-md) 0",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-xs)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-title-md)",
      color: "var(--text-ink)"
    }
  }, name), flag && /*#__PURE__*/React.createElement(Badge, {
    tone: flag === "Limited" ? "honey" : flag === "Vegan" ? "green" : "cream"
  }, flag)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, note)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-title-lg)",
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-title-lg)",
      color: "var(--brand-dark-azure)"
    }
  }, price));
}
function MenuScreen({
  onNavigate
}) {
  const [tab, setTab] = React.useState("Espresso");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Our menu",
    title: "Twelve drinks, one season.",
    sub: "The list changes when the beans do. Everything below travels to your event unchanged.",
    style: {
      paddingBottom: "var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-xs)",
      flexWrap: "wrap"
    }
  }, Object.keys(MENU).map(t => /*#__PURE__*/React.createElement(CategoryTab, {
    key: t,
    active: t === tab,
    onClick: () => setTab(t)
  }, t))), /*#__PURE__*/React.createElement(Split, {
    split: "menu"
  }, /*#__PURE__*/React.createElement("div", null, MENU[tab].map(([n, p, note, flag]) => /*#__PURE__*/React.createElement(MenuRow, {
    key: n,
    name: n,
    price: p,
    note: note,
    flag: flag
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted-soft)",
      marginTop: "var(--space-md)"
    }
  }, "Oat, whole and skim included. Allergen sheet travels with the bar.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-lg)"
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    tone: "honey",
    eyebrow: "This week",
    title: "Kirinyaga AA, day nine off roast",
    body: "Blackcurrant and hibiscus. On the filter bar until it runs out.",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "leaf",
      size: 24
    })
  }), /*#__PURE__*/React.createElement(ProductMockupCard, {
    title: "Event menu card",
    caption: "Printed on recycled stock, one per table."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-md)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-xs)"
    }
  }, MENU[tab].slice(0, 3).map(([n, p]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: "flex",
      justifyContent: "space-between",
      font: "var(--type-body-sm)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", null, n), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, p)))))))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Beans",
    title: "Named farms, paid early."
  }, /*#__PURE__*/React.createElement(Grid, {
    cols: 3
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    tone: "green",
    eyebrow: "Kenya",
    title: "Kirinyaga, Gichathaini",
    body: "Washed SL28. Bought at 2.4\xD7 the C price.",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 24
    })
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    tone: "orange",
    eyebrow: "Colombia",
    title: "Huila, La Esperanza",
    body: "Caturra, twelve-hour ferment, patio dried.",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 24
    })
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    tone: "teal",
    eyebrow: "Ethiopia",
    title: "Guji, Hambela",
    body: "Natural process. Arrives in September.",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 24
    })
  }))), /*#__PURE__*/React.createElement(CtaBand, {
    headline: "Want this list at your event?",
    sub: "We print a menu card in your colours.",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: () => onNavigate("Pricing")
    }, "See packages")
  }));
}
window.MenuScreen = MenuScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/MenuScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/PricingScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Section,
  Grid,
  Split,
  DS
} = window;
const {
  CtaBand,
  Button,
  Badge,
  Icon,
  PricingTierCard,
  TestimonialCard,
  TextInput,
  FeatureCard
} = DS;
const TIERS = [{
  name: "Counter",
  price: "$14",
  unit: "/guest",
  description: "One barista, one machine, forty to eighty guests.",
  features: ["Espresso + filter", "2 hours on site", "Compostable service", "Decaf on request"]
}, {
  name: "Pop-up bar",
  price: "$18",
  unit: "/guest",
  description: "The standard. Two baristas and a seasonal pour.",
  features: ["Espresso, filter, one cold", "3 hours on site", "Printed menu card", "Oat, whole, skim"]
}, {
  name: "Full residency",
  price: "$34",
  unit: "/guest",
  featured: true,
  description: "The whole café, in your space, all day.",
  features: ["Full twelve-drink list", "All-day service", "Custom menu in your colours", "Pastry from next door", "Named farm callouts"]
}, {
  name: "Multi-day",
  price: "Let's talk",
  unit: "",
  description: "Conferences, film sets, and week-long installs.",
  features: ["Crew rotation", "On-site storage plan", "Daily bean swap", "Dedicated event lead"]
}];
function PricingScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Pricing",
    title: "Per guest, all in.",
    sub: "Beans, milk, cups, crew and cleanup are in the number. Travel inside Portland is too.",
    style: {
      paddingBottom: "var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement(Grid, {
    cols: 4
  }, TIERS.map(t => /*#__PURE__*/React.createElement(PricingTierCard, _extends({
    key: t.name
  }, t, {
    badge: t.featured ? /*#__PURE__*/React.createElement(Badge, {
      tone: "cream",
      uppercase: true
    }, "Most booked") : null,
    cta: /*#__PURE__*/React.createElement(Button, {
      variant: t.featured ? "onColor" : "primary",
      fullWidth: true,
      size: "sm",
      onClick: () => onNavigate("Catering")
    }, t.price === "Let's talk" ? "Talk to us" : "Book it")
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-lg)",
      flexWrap: "wrap"
    }
  }, [["Travel inside Portland", "Included"], ["Outside the metro", "$1.10/mile"], ["Setup + pack down", "Included"], ["Cancellation", "7 days"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-xs)",
      padding: "var(--space-sm) var(--space-md)",
      background: "var(--surface-soft)",
      borderRadius: "var(--radius-md)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    color: "var(--color-success)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-body-strong)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)"
    }
  }, v))))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Estimate",
    title: "What a hundred and twenty guests looks like."
  }, /*#__PURE__*/React.createElement(Split, {
    split: "even"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement(TextInput, {
    label: "Headcount",
    placeholder: "120",
    hint: "Minimum 40 guests"
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: "Hours on site",
    placeholder: "3"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      borderTop: "1px solid var(--border-hairline)",
      paddingTop: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-md)",
      color: "var(--text-body)"
    }
  }, "Pop-up bar, 120 guests"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-display-sm)",
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-display-sm)",
      color: "var(--text-ink)"
    }
  }, "$2,160")), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => onNavigate("Catering")
  }, "Send this as an enquiry")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-lg)"
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    tone: "azure",
    eyebrow: "No surprises",
    title: "One invoice, sent after",
    body: "We don't bill for ice, cups, syrups, or the crew's parking.",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 24
    })
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    name: "Dana Okafor",
    role: "Head of Events, Ardent",
    quote: "The quote we approved is the number we paid. That is rarer than good coffee."
  })))), /*#__PURE__*/React.createElement(CtaBand, {
    headline: "Tell us the headcount. We'll bring the bar.",
    sub: "Most events are quoted within a day.",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: () => onNavigate("Catering")
    }, "Get catering")
  }));
}
window.PricingScreen = PricingScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/PricingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/shell.jsx
try { (() => {
const {
  useState
} = React;
const DS = window.MilesCafDesignSystem_f38ef9;
const {
  TopNav,
  HeroBand,
  CtaBand,
  Footer,
  Button,
  Badge,
  Icon,
  TextInput,
  TextLink,
  CategoryTab,
  FeatureCard,
  TestimonialCard,
  PricingTierCard,
  ProductMockupCard,
  ExpertCard,
  HeroIllustrationCard
} = DS;
const A = "../../assets";
function Section({
  eyebrow,
  title,
  sub,
  children,
  pad = true,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: pad ? "var(--space-section) var(--space-lg)" : "0 var(--space-lg)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-xl)"
    }
  }, (eyebrow || title) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)",
      maxWidth: "44rem"
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "ds-caption-uppercase"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-display-lg)",
      letterSpacing: "var(--tracking-display-lg)",
      margin: 0,
      color: "var(--text-ink)"
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-md)",
      fontSize: "18px",
      color: "var(--text-body)"
    }
  }, sub)), children));
}

/* Responsive grids need media queries, which inline styles can't express — the kit
   injects one stylesheet and the components carry data attributes. */
const KIT_CSS = `
.kit-grid{display:grid;gap:var(--space-lg)}
.kit-grid[data-cols="4"]{grid-template-columns:repeat(4,1fr)}
.kit-grid[data-cols="3"]{grid-template-columns:repeat(3,1fr)}
.kit-grid[data-cols="2"]{grid-template-columns:repeat(2,1fr)}
.kit-split{display:grid;gap:var(--space-xxl);align-items:start}
.kit-split[data-split="form"]{grid-template-columns:1fr 400px}
.kit-split[data-split="wide"]{grid-template-columns:1.2fr 0.8fr}
.kit-split[data-split="menu"]{grid-template-columns:1.35fr 0.65fr}
.kit-split[data-split="even"]{grid-template-columns:1fr 1fr}
@media (max-width:1024px){
  .kit-grid[data-cols="4"],.kit-grid[data-cols="3"]{grid-template-columns:repeat(2,1fr)}
  .kit-split[data-split="form"],.kit-split[data-split="wide"],.kit-split[data-split="menu"],.kit-split[data-split="even"]{grid-template-columns:1fr;gap:var(--space-xl)}
}
@media (max-width:767px){
  .kit-grid[data-cols]{grid-template-columns:1fr}
  section{padding-left:var(--space-md)!important;padding-right:var(--space-md)!important}
}
`;
if (!document.getElementById("kit-css")) {
  const el = document.createElement("style");
  el.id = "kit-css";
  el.textContent = KIT_CSS;
  document.head.appendChild(el);
}
const Grid = ({
  cols = 3,
  children
}) => /*#__PURE__*/React.createElement("div", {
  className: "kit-grid",
  "data-cols": cols
}, children);
const Split = ({
  split = "even",
  children
}) => /*#__PURE__*/React.createElement("div", {
  className: "kit-split",
  "data-split": split
}, children);
const NAV = ["Home", "Catering", "Menu", "Pricing"];
const FOOTER_COLS = [{
  title: "Catering",
  links: ["Events", "Offices", "Weddings", "Film sets"]
}, {
  title: "Café",
  links: ["Menu", "Beans", "Hours", "Gift cards"]
}, {
  title: "Company",
  links: ["Our story", "Careers", "Press"]
}, {
  title: "Help",
  links: ["Contact", "FAQ", "Allergens"]
}];
function SiteFooter() {
  return /*#__PURE__*/React.createElement(Footer, {
    logoSrc: `${A}/logo-mark.png`,
    blurb: "Craft beverage catering, poured on site. Portland, Oregon.",
    columns: FOOTER_COLS,
    legal: "\xA9 2026 Miles caf\xE9 & co."
  });
}
Object.assign(window, {
  Section,
  Grid,
  Split,
  NAV,
  SiteFooter,
  DS,
  A,
  useState
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ExpertCard = __ds_scope.ExpertCard;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.HeroIllustrationCard = __ds_scope.HeroIllustrationCard;

__ds_ns.PricingTierCard = __ds_scope.PricingTierCard;

__ds_ns.ProductMockupCard = __ds_scope.ProductMockupCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CategoryTab = __ds_scope.CategoryTab;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.CtaBand = __ds_scope.CtaBand;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.HeroBand = __ds_scope.HeroBand;

__ds_ns.TopNav = __ds_scope.TopNav;

})();
