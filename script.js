function overallRender() {



    $('button').on('click', function(e){
        e.preventDefault();
        $('input').empty();
        $('.for-img').empty();
        fetch(`https://dog.ceo/api/breed/${$('input').val()}/images`)
        .then(result => result.json())
        .then(resultJson => renderImg(resultJson.message));
    })

    function renderImg(result) {
        const random = randomIntFromInterval(0,result.length)
        $('.for-img').append(`<img src="${result[random]}" />`)
    }


}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}









overallRender()