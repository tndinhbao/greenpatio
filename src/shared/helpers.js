
export function insertImageOptimization(option) {
  const { src, config, base } = option;
  return src.replace(base, `${base}/${config}`);
}
