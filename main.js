function fetch(url){
    $('#loader').show();
    axios.get('https://my-api.plantnet.org/v2/identify/all', {
        params:{
            'api-key': '2b10HqJuexpyAGFncT0jXVvPzO',
            'images': url,
            'organs':'leaf'
        }
      })
      .then(function(res){
          render(res.data.results[0].species);
          $('#loader').hide();
      })
      .catch(error => {
        $('#loader').hide();
        $('#alert').show();
    });;
}

function render(data){
    $('#img').attr('src',$('#url').val());
    $('#names').text(data.commonNames);
    $('#sname').text(data.scientificNameWithoutAuthor);
    $('#genus').text(data.genus.scientificNameWithoutAuthor);
    $('#family').text(data.family.scientificNameWithoutAuthor);
    $('#result').show();

}

function find(){
    url=$('#url').val();
    if(url!='')
        fetch(url);
}   

function wait(){
    $('#loader').hide();
    $('#alert').hide();
    $('#result').hide();
}