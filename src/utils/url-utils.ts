/**
 * 处理路径字符串，确保返回正确的 URL 路径（兼容 GitHub Pages base）
 */
export function url(path: string) {
    if (path.startsWith("http://") || path.startsWith("https://")) return path;

    const base = import.meta.env.BASE_URL; // e.g. "/" or "/IndexPage/"
    const normalizedBase = base.endsWith("/") ? base : `${base}/`;

    if (path.startsWith("/")) {
        return `${normalizedBase}${path.slice(1)}`;
    }

    return `${normalizedBase}src/${path}`;
}
