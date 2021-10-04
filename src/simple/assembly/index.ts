import { storage, Context, logging } from "near-sdk-as";

interface Candy {
  name: string;
  supply: i64;
  uniqueID: i64;
  supplier: string;
}

// Initializes the storage with two arrays namely shop and suppliers.
export function initializeCandyShop(): string {
  storage.set<Candy[]>("shop", []);
  storage.set<string[]>("suppliers", []);

  return "✅ Successfully initialized my application on the storage";
}

// This is an internal function that updates the suppliers list when there's a new supplier.
function updateSuppliers(supplier: string): void {
  const supplierArr = storage.get<string[]>("supplier")!;
  supplierArr.includes(supplier)
    ? null
    : storage.get<string[]>("suppliers")!.push(supplier);
}

// This updates the shop with the current supply of candy.
export function updateCandyShop(supply: Candy): string {
  if (storage.get("shop") === null) {
    return "The shop is down";
  }
  storage.get<Candy[]>("shop")!.push(supply);
  updateSuppliers(supply.supplier);

  return `✅ Updated the shop with ${supply.name}`;
}

// Logs to the console, the current status of the shop and its suppliers.
export function candyShopStatus(): void {
  let len = storage.get<Candy[]>("shop")!.length;
  logging.log(
    `There are ${len} commodities within the shop, they are listed below`
  );
  storage.get<Candy[]>("shop")!.forEach((candy) => {
    logging.log(candy.name);
  });

  len = storage.get<string[]>("suppliers")!.length
  logging.log(
    `There are ${len} for the shop, they are listed below:`
  );
  storage.get<string[]>("suppliers")!.forEach((supplier) => {
    logging.log(supplier);
  });
}

