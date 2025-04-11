import { createId } from "@paralleldrive/cuid2";

export function generatePlayerId() {
    const timestamp = Date.now().toString(36).toUpperCase().padStart(4, "0");
    const uniquePart = createId().substring(0, 4).toUpperCase();
    return `FDBA${timestamp}${uniquePart}`;
}
