export function parseBase64(file: string): {
    contentType: string;
    buffer: Buffer;
} {
    if (!file) return { contentType: "", buffer: Buffer.from("") };
    const matches = file.match(/^data:(.*);base64,(.*)$/);
    if (!matches || matches.length !== 3)
        throw new Error("Invalid base64 format");
    return {
        contentType: matches[1],
        buffer: Buffer.from(matches[2], "base64"),
    };
}
