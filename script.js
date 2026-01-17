function findShops() {
    const brand = document.getElementById("brand").value;
    const items = document.getElementById("items").value;

    if (brand === "" || items <= 0) {
        alert("Please select brand and enter packet count");
        return;
    }

    document.getElementById("locationBox").classList.remove("hidden");
}

function selectShop() {
    document.getElementById("verifyBox").classList.remove("hidden");
}

function verifyShopkeeper() {
    const shopId = document.getElementById("shopId").value;
    const items = parseInt(document.getElementById("items").value);

    if (shopId !== "GM-221") {
        alert("Invalid Shop ID");
        return;
    }

    const earnedPoints = items * 5;
    const discount = Math.min(earnedPoints, 20);

    document.getElementById("earnedPoints").innerText = earnedPoints;
    document.getElementById("discount").innerText = discount;

    let currentPoints = parseInt(document.getElementById("points").innerText);
    document.getElementById("points").innerText = currentPoints + earnedPoints;

    document.getElementById("successBox").classList.remove("hidden");
}
