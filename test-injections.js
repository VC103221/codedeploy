const name = "GW_NONPROFIT_NAME;
const street = "GW_NONPROFIT_STREET";

function assign_injections() {
let selection = document.getElementById("mainHeader");
selection.setAttribute("data-inject", name);
let selection = document.getElementById("subPara");
selection.setAttribute("data-inject", street);
}
