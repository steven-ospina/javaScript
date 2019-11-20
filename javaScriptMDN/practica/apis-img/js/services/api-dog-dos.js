export async function callImgDogDos() {
    const ENDPOINT = 'https://picsum.photos/v2/list?limit=5';
    try{
        const result = await fetch(ENDPOINT);
        const data = await result.json();
        const container = document.querySelector('.containerDos');
        let imgContent = '';
        for(let i = 0; i < data.length; i++){
            // console.log(data[i].download_url);
            const img = `<img src=${data[i].download_url} height="300" width="300"></img>`;
            imgContent += img;
        }
        container.innerHTML = imgContent;
    }catch (error){
        console.warn(error);
    }
};