export function truncateDescription(description, maxLength) {
    if (!description) return '';

    // If the description length is less than or equal to maxLength, return the original description
    if (description.length <= maxLength) {
        return description;
    }

    // Otherwise, truncate the description to maxLength characters and add "..."
    return description.slice(0, maxLength) + '...';
}
