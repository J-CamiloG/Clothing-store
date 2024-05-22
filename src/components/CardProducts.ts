export async function CardProducts() {
    const reply = await fetch("http://localhost:3000/products");
    const data: { image: string, name: string }[] = await reply.json();
    console.log(data);
    
    let cardHtml = '';

    data.forEach((element: { image: string, name: string }) => {
        cardHtml += `
        <div class="product-item">
            <img width="350px" height="500px" src="${element.image}" alt="">
            <div class="product-description">
                <p>${element.name}</p>
                <span class="price">199.900 <strong>COP</strong> </span>
            </div>
        </div>
        `;
    });

    return cardHtml;
}
