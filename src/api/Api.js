const getData = () => {
    return fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        return data.products.map(item => {
            return {
                name: item.name,
                description: item.description,
                image: item.image,
                price: item.price,
            };
        });
    })
    .catch(error => {
        console.log(error);
    });
};

export default getData;