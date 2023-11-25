
// selectors

const app = document.querySelector("#app")
const recordForm = document.querySelector("#recordForm")
const productSelect = document.querySelector("#productSelect")
const quantityInput = document.querySelector("#quantityInput")
const recordGroup = document.querySelector("#recordGroup")
const recordTotal = document.querySelector("#recordTotal")


// data
const products = [
    {
        id: 1,
        name: "Apple",
        price: 500
    },


    {
        id: 2,
        name: "Mango",
        price: 1500
    },

    {
        id: 3,
        name: "Banana",
        price: 200
    },


    {
        id: 4,
        name: "Orange",
        price: 600
    },

    {
        id: 5,
        name: "Lime",
        price: 100
    },
];

let tableIndex = 1;


// function
const productOption = (id, name) => {
    const option = document.createElement("option");
    option.innerText = name;
    option.value = id;
    return option;

};



const productRender = (items) => {
    items.forEach(({ id, name }) =>
        productSelect.append(new Option(name, id))
    )
};

const calculateRecordTotal = () => {
    // let total = 0;
    // const els = app.querySelectorAll(".record-cost")
    // els.forEach(el  => total += parseFloat( el.innerText))

    const total = [...document.querySelectorAll(".record-cost")]
        .reduce((pv, cv) => pv + parseFloat(cv.innerText), 0);

    recordTotal.innerText = total;

    return total;
};


const recordUi = (productName, productPrice, quantity) => {
    const cost = productPrice * quantity;
    const tr = document.createElement("tr")
    tr.className = `
    "group odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700";
    
    `;
    tr.innerHTML = `

    <td class="px-6 py-4 td-counter"></td>
      <th scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          ${productName}
      </th>
      <td class="px-6 py-4 text-en text-end">
          ${productPrice}
      </td>
      <td class="px-6 py-4 text-end">
          ${quantity}
      </td>
      <td class="px-6 py-4 text-end relative">
          <span class='record-cost'>
          ${cost}
          </span>

          <button class="group-hover:opacity-100 rounded-lg opacity-0 pointer-events-none group-hover:pointer-events-auto bg-blue-100 p-2 absolute left-full translate-x-2 top-3 ">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 stroke-blue-700 stroke-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>

          </button>
      </td>                         
    
    `;
    return tr;

}





// initialRender
productRender(products)





// handler
const recordFormHandler = (event) => {
    event.preventDefault()
    const currentProduct = products.find(product => product.id == productSelect.value)
    // console.log(productSelect.value);
    // console.log(currentProduct);
    // console.log(quantityInput.valueAsNumber);

    recordGroup.append(
        recordUi
            (currentProduct.name,
                currentProduct.price,
                quantityInput.valueAsNumber));


    recordForm.reset();
    calculateRecordTotal();
}




// listener
recordForm.addEventListener("submit", recordFormHandler)
