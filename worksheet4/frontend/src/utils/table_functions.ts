/**
 * Function to sort data based on a sortKey, and whether the sorting should be reversed or not.
 *
 * @param tableData The data to sort. This is an array of objects.
 * @param sortKey The key to sort by.
 * @param reverse True if we should reverse the order of sorting (sorts ascending if false, descending if true).
 * @returns The sorted data.
 */
export function sortData<T>(
    tableData: T[],
    sortKey: keyof T,
    reverse: boolean
): T[] {
    const sortedData = tableData.sort((a, b) => {
        if (a[sortKey] > b[sortKey]) {
            return 1;
        } else if (a[sortKey] < b[sortKey]) {
            return -1;
        }
        return 0;
    });

    if (reverse) {
        return sortedData.reverse();
    }

    return sortedData;
}
