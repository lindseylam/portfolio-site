export function reorderIllustrationsForColumns<T>(items: T[], columnCount: number): T[] {
    if (columnCount <= 1) return items;
    
    const reordered: T[] = [];
    const itemsPerColumn = Math.ceil(items.length / columnCount);
    
    // Convert from horizontal ordering (what we want) to vertical ordering (what CSS columns does)
    for (let col = 0; col < columnCount; col++) {
        for (let row = 0; row < itemsPerColumn; row++) {
            const horizontalIndex = row * columnCount + col;
            if (horizontalIndex < items.length) {
                reordered.push(items[horizontalIndex]);
            }
        }
    }
    
    return reordered;
}