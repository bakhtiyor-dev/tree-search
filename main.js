function fetchData(url) {
    $('#loader').show();
        $.get('https://my-api.plantnet.org/v2/identify/all', {
            'api-key': '2b10iZqGaSwbflAY8osOfrFX',
            'images': url,
            'organs': 'leaf'
        })
            .done(function (res) {
                render(res.results[0].species);
                $('#loader').hide();
                $('#alert').hide();

            })
            .fail(function (error) {
                $('#result').hide();
                $('#loader').hide();
                $('#alert').text(error.responseJSON.error + ': ' + error.responseJSON.message);
                $('#alert').show();
            });
}

function render(data) {
    $('#img').attr('src', $('#url').val());
    $('#names').text(data.commonNames);
    $('#sname').text(data.scientificNameWithoutAuthor);
    $('#genus').text(data.genus.scientificNameWithoutAuthor);
    $('#family').text(data.family.scientificNameWithoutAuthor);
    $('#result').show();

}

function find(event) {
    event.preventDefault();
    url = $('#url').val();
    if (url != '')
        fetchData(url);
}
function wait() {
    $('#loader').hide();
    $('#alert').hide();
    $('#result').hide();
}

