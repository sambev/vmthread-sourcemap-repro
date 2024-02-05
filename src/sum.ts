interface Item {
  name: string;
  count: number;
}

export function sum(items: Item[]): number {
  items[3].name = "break!";
  return items.reduce((acc, item) => acc + item.count, 0);
}
