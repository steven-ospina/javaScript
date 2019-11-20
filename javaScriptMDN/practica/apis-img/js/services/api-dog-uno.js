//Api de imagenes de perros
export function callImgDogApi() {
    const ENDPOINT = 'https://dog.ceo/api/breeds/image/random/5';
    const createPromise = () =>
        fetch(ENDPOINT)
        .then(response => response.json());

    var promises = [createPromise()];

    Promise.all(promises)
        .then(responses => {
            const container = document.querySelector('.container');
            const urlsImg = responses[0].message;
            let imgContent = '';
            //   console.log("urls de los dogs:",urlsImg);
            for (const imagen of urlsImg) {
                const img = `<img src=${imagen} height="300" width="300"></img>`;
                imgContent += img;
            }
            container.innerHTML = imgContent;
        });
}

//api :https://dog.ceo/dog-api/documentation/random