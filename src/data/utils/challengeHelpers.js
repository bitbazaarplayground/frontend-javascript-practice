export function isNotEmpty(value) {
  return value.trim() !== "";
}

export function hasAtSymbol(value) {
  return value.includes("@");
}

export function isSimpleEmail(value) {
  const trimmedValue = value.trim();
  return trimmedValue !== "" && trimmedValue.includes("@");
}
