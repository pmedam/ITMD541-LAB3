const BillTotal = document.getElementById("BillTotal");
const TipSlider = document.getElementById("TipSlider");
const TipPercentage = document.getElementById("TipPercentage");
const TipAmount = document.getElementById("TipAmount");
const TotalBillWithTip = document.getElementById("TotalBillWithTip");

TipSlider.addEventListener("input", getTipPercentage);

function getTipPercentage() {
    TipPercentage.value = TipSlider.value;

    const billttl = parseInt(BillTotal.value);
    const prcnt = parseInt(TipPercentage.value);

    const tipmnt = (billttl * prcnt) / 100;
    const totlblwtp = billttl + tipmnt;

    TipAmount.value = tipmnt;
    TotalBillWithTip.value = totlblwtp;

}




