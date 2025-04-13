export default function formatDateOnly(dateString: string | Date): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // months are 0-indexed
    const year = String(date.getFullYear()).slice(-2); // get last 2 digits
    return `${day}/${month}/${year}`;
}
