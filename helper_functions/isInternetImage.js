export default function isInternetImage(uri) {
    return uri.toLowerCase().includes("http") || uri.toLowerCase().includes("https") ? true : false;
}
