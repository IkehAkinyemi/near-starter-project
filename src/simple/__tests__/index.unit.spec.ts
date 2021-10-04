import * as contract from "../assembly";

describe("Contract", () => {
  // VIEW method tests

  it("Initializes the storage with two arrays namely shop and suppliers.", () => {
    expect(contract.initializeCandyShop()).toStrictEqual("✅ Successfully initialized my application on the storage")
  })

  it("Updates the shop with the current supply of candy.", () => {
    expect(contract.updateCandyShop("Milkyway",  234, 91302, "Sherif")).toStrictEqual("✅ Updated the shop with Milkyway")
  })

  // CHANGE method tests

  it("Logs to the console, the current status of the shop and its suppliers.", () => {
    expect(contract.candyShopStatus()).toStrictEqual()
  })
})
